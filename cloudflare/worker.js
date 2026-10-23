/*
  Propuestas WeCode · Cloudflare Worker para propuestas.wecode.edu.uy

  - propuestas.wecode.edu.uy/<colegio>  → muestra la propuesta guardada con ese nombre
  - propuestas.wecode.edu.uy/publicar   → página que usa el armador para guardar un link nuevo
  - todo lo demás (imágenes, catalog.js…) se sirve tal cual desde GitHub Pages

  Necesita, en la configuración del Worker:
  - una base KV vinculada con el nombre LINKS
  - un secreto PUBLISH_KEY con la clave del equipo
*/
const ORIGIN = "https://brianwecode.github.io/propuestas";
const SLUG = /^[a-z0-9](?:[a-z0-9-]{0,58}[a-z0-9])?$/;
const TOKEN = /^p[a-z2-7]{10,4000}$/;
const RESERVED = new Set(["img", "fonts", "cloudflare", "publicar", "api", "index", "catalog"]);
const HTML = { "content-type": "text/html; charset=utf-8" };

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";

    if (path === "/api/guardar") return req.method === "POST" ? save(req, env) : json({ error: "Método no permitido" }, 405);
    if (path === "/publicar") return new Response(PUBLISH_PAGE, { headers: { ...HTML, "cache-control": "no-store", "x-robots-tag": "noindex" } });

    const slug = path.slice(1);
    if (SLUG.test(slug) && !RESERVED.has(slug)) {
      const token = await env.LINKS.get(slug);
      if (token) {
        const r = await fetch(ORIGIN + "/index.html", { cf: { cacheTtl: 60 } });
        const page = (await r.text()).replace("<head>", '<head><base href="/"><script>window.PROPUESTA="' + token + '";</script>');
        return new Response(page, { headers: { ...HTML, "cache-control": "no-store", "x-robots-tag": "noindex" } });
      }
    }

    const r = await fetch(ORIGIN + url.pathname + url.search, { cf: { cacheTtl: 300 } });
    return new Response(r.body, r);
  },
};

async function save(req, env) {
  let b;
  try { b = await req.json(); } catch (e) { return json({ error: "Datos inválidos" }, 400); }
  if (!env.PUBLISH_KEY || b.key !== env.PUBLISH_KEY) return json({ error: "Clave incorrecta" }, 401);
  if (!SLUG.test(b.slug || "") || RESERVED.has(b.slug)) return json({ error: "Ese nombre de link no se puede usar" }, 400);
  if (!TOKEN.test(b.token || "")) return json({ error: "La propuesta no es válida" }, 400);
  const prev = await env.LINKS.get(b.slug);
  if (prev && prev !== b.token && !b.replace) return json({ exists: true }, 409);
  await env.LINKS.put(b.slug, b.token, { metadata: { school: String(b.school || "").slice(0, 120), at: new Date().toISOString() } });
  return json({ ok: true, url: "https://" + new URL(req.url).host + "/" + b.slug });
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });
}

const PUBLISH_PAGE = `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Publicar propuesta · WeCode</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet">
<style>
  body { margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #3462ac; font-family: Poppins, system-ui, sans-serif; color: #1a3d66; padding: 20px; box-sizing: border-box; }
  .card { background: #fff; border-radius: 24px; padding: 32px; width: 100%; max-width: 460px; box-sizing: border-box; }
  h1 { font-size: 24px; margin: 0 0 6px; }
  p { margin: 8px 0; color: #34465c; line-height: 1.5; }
  .link { font-weight: 600; color: #1a3d66; word-break: break-all; }
  input { width: 100%; box-sizing: border-box; font: inherit; padding: 12px 14px; border: 1.5px solid #dbe5ef; border-radius: 12px; margin-top: 8px; }
  input:focus { outline: none; border-color: #3462ac; }
  button, a.btn { display: inline-block; font: inherit; font-weight: 600; border: 0; border-radius: 999px; padding: 12px 20px; margin: 16px 8px 0 0; cursor: pointer; text-decoration: none; background: #fdca40; color: #1a3d66; }
  a.btn.sec { background: transparent; box-shadow: inset 0 0 0 2px #1a3d66; }
  .err { color: #c0392b; }
  [hidden] { display: none !important; }
</style></head><body><main class="card">
  <h1 id="title">Publicando propuesta…</h1>
  <p id="info"></p>
  <form id="keyForm" hidden><p>Escribí la clave del equipo (se pide una sola vez en esta computadora).</p><input type="password" id="key" autocomplete="current-password" required><button>Publicar</button></form>
  <div id="exists" hidden><p>Ya hay una propuesta publicada con este link. ¿Querés reemplazarla por esta?</p><button id="replace">Sí, reemplazar</button></div>
  <div id="done" hidden><button id="copy">Copiar link</button><a class="btn sec" id="open" target="_blank" rel="noopener">Abrir</a><p>Ya podés mandar el link al colegio. Podés cerrar esta pestaña.</p></div>
  <p id="msg" class="err"></p>
</main><script>
const q = new URLSearchParams(location.search);
const slug = q.get("slug") || "", token = q.get("t") || "", school = q.get("school") || "";
const link = location.origin + "/" + slug;
const $ = id => document.getElementById(id);
const store = { get() { try { return localStorage.getItem("wecode-publish-key") || ""; } catch (e) { return ""; } },
  set(v) { try { v ? localStorage.setItem("wecode-publish-key", v) : localStorage.removeItem("wecode-publish-key"); } catch (e) {} } };
$("info").innerHTML = (school ? "<b></b><br>" : "") + '<span class="link"></span>';
if (school) $("info").querySelector("b").textContent = school;
$("info").querySelector(".link").textContent = link.replace(/^https?:\\/\\//, "");
async function send(replace) {
  const key = store.get();
  if (!key) { $("keyForm").hidden = false; $("title").textContent = "Publicar propuesta"; return; }
  $("msg").textContent = ""; $("keyForm").hidden = $("exists").hidden = true;
  let r, d = {};
  try { r = await fetch("/api/guardar", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ slug, token, school, key, replace }) }); d = await r.json(); }
  catch (e) { $("msg").textContent = "No hay conexión. Probá de nuevo."; return; }
  if (r.status === 401) { store.set(""); $("keyForm").hidden = false; $("title").textContent = "Publicar propuesta"; $("msg").textContent = "La clave no es correcta."; return; }
  if (r.status === 409) { $("title").textContent = "Ese link ya existe"; $("exists").hidden = false; return; }
  if (!r.ok) { $("title").textContent = "No se pudo publicar"; $("msg").textContent = d.error || "Error inesperado."; return; }
  $("title").textContent = "¡Listo! La propuesta está publicada";
  $("open").href = link; $("done").hidden = false;
}
$("keyForm").addEventListener("submit", e => { e.preventDefault(); store.set($("key").value.trim()); send(false); });
$("replace").addEventListener("click", () => send(true));
$("copy").addEventListener("click", () => { navigator.clipboard.writeText(link).then(() => { $("copy").textContent = "Link copiado"; }, () => { $("msg").textContent = "Copiá el link a mano: " + link; }); });
if (!slug || !token) { $("title").textContent = "Falta información"; $("msg").textContent = "Abrí esta página desde el botón Publicar del armador."; } else send(false);
</script></body></html>`;
