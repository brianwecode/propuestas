"use strict";
/* Catálogo y reglas compartidas por el armador y la propuesta web de WeCode */
/* =========================================================
   CATÁLOGO — textos de las propuestas WeCode 2026–2027
   ========================================================= */
const GRADES = [
  { id: "k5", short: "5",  chip: "jardín", kind: "jardin", level: "primaria",   band: "k5"  },
  { id: "p1", short: "1ro", chip: "grado", kind: "grado", level: "primaria",   band: "p12" },
  { id: "p2", short: "2do", chip: "grado", kind: "grado", level: "primaria",   band: "p12" },
  { id: "p3", short: "3ro", chip: "grado", kind: "grado", level: "primaria",   band: "p34" },
  { id: "p4", short: "4to", chip: "grado", kind: "grado", level: "primaria",   band: "p34" },
  { id: "p5", short: "5to", chip: "grado", kind: "grado", level: "primaria",   band: "p56" },
  { id: "p6", short: "6to", chip: "grado", kind: "grado", level: "primaria",   band: "p56" },
  { id: "s7", short: "7mo", chip: "grado", kind: "grado", level: "secundaria", band: "s78" },
  { id: "s8", short: "8vo", chip: "grado", kind: "grado", level: "secundaria", band: "s78" },
  { id: "s9", short: "9no", chip: "grado", kind: "grado", level: "secundaria", band: "s91" },
  { id: "e1", short: "1er", chip: "EMS",   kind: "ems",   level: "secundaria", band: "s91" },
  { id: "e2", short: "2do", chip: "EMS",   kind: "ems",   level: "secundaria", band: "s23" },
  { id: "e3", short: "3er", chip: "EMS",   kind: "ems",   level: "secundaria", band: "s23" },
];
const gradeName = g => g.kind === "jardin" ? "5 de jardín" : g.kind === "ems" ? g.short + " EMS" : g.short + " grado";
const chipNum = g => g.kind === "jardin" ? "5" : g.short.replace(/\D+/g, "") + "º";

const PROGRAMS = {
  k5: [
    { id: "k5-kindertech", short: "Conocemos la tecnología jugando: con desafíos y herramientas digitales desarrollamos secuenciación, reconocimiento de patrones y resolución de problemas.", option: "KinderTech", title: "KinderTech", img: "jardin",
      paras: ["Conocemos la tecnología a través del juego, la creatividad y la exploración. Mediante desafíos, juegos y herramientas digitales, comenzamos a desarrollar habilidades como la secuenciación, la identificación de patrones y la resolución de problemas."] },
  ],
  p12: [
    { id: "p12-edison", short: "Programamos a Edison, un robot que se arma con bloques tipo Lego para convertirlo en grúa o catapulta. Usamos pictogramas, aptos para pre-lectores.", option: "Robot Edison y Code Juniors", title: "Primeros pasos de programación", img: "p12-edison",
      paras: ["Conoceremos a Edison, el robot estrella del año. No sólo lograremos moverlo con comandos, sino que podremos utilizar bloques tipo Lego para transformarlo en una grúa, una catapulta o más proyectos increíbles.",
              "Aprenderemos a programar utilizando pictogramas (apto para pre-lectores) y crearemos nuestros primeros algoritmos con Code Juniors."] },
    { id: "p12-code", short: "Creamos animaciones e historias programadas en Code.org, con comandos en pictogramas aptos para pre-lectores.", option: "Animaciones con Code.org", title: "Primeros pasos de programación", img: "p12-code",
      paras: ["Daremos nuestros primeros pasos en la creación de animaciones digitales e historias programadas.",
              "Utilizaremos la reconocida plataforma Code para completar desafíos con comandos en forma de pictogramas (apto para pre-lectores) y crearemos nuestros primeros algoritmos."] },
  ],
  p34: [
    { id: "p34-juegos", short: "Creamos nuestros primeros videojuegos, como cruzar la calle, carreras de autos o ping-pong, y cada uno le pone sus propias ideas.", option: "Creación de videojuegos", title: "Creación de videojuegos", img: "p34-videojuegos",
      paras: ["Utilizamos los conceptos generales de la programación para crear nuestros primeros videojuegos.",
              "Desarrollamos videojuegos increíbles como el de cruzar la calle, una carrera de autos multijugador y un ping-pong digital. ¡Cada participante reinventa y propone sus propias ideas! Cada juego será único y personal."] },
    { id: "p34-microbit", short: "Con la placa micro:bit de la BBC creamos proyectos con sensores y circuitos, como una guitarra eléctrica o una consola de juegos.", option: "Electrónica con micro:bit", title: "Electrónica con micro:bit", img: "p34-microbit",
      paras: ["La placa micro:bit creada por la BBC es la herramienta base de electrónica para escolares. Con ella creamos proyectos robóticos como una guitarra eléctrica o nuestra propia consola de juegos.",
              "Aprendemos qué son los sensores y cómo construir circuitos para dar vida a nuestras creaciones."] },
  ],
  p56: [
    { id: "p56-arcade", short: "Creamos videojuegos retro, como Mario Kart o Aliens UFO, y los jugamos en una consola real.", option: "Proyectos Retro con Arcade", title: "Proyectos Retro con Arcade", img: "p56-arcade",
      paras: ["Construimos videojuegos retro complejos que luego trasladamos a una consola tangible.",
              "Creamos juegos ambiciosos como Dance, Mario Kart y Aliens UFO (todos conocidos por los chicos)."] },
    { id: "p56-apps", short: "Creamos apps para celulares y tablets usando la pantalla táctil y la cámara: un trivia, piedra-papel-tijera y un Fruit Ninja.", option: "Creación de apps mobile", title: "Creación de apps mobile", img: "p56-apps",
      paras: ["Construimos aplicaciones móviles que funcionan en tablets o celulares. Así aprendemos cómo manejar la pantalla touch, la cámara y más herramientas de estos dispositivos.",
              "Creamos un piedra-papel-tijera contra la máquina, un trivia y el famoso Fruit Ninja."] },
  ],
  s78: [
    { id: "s78-python", short: "Programamos videojuegos en Python, nuestro primer lenguaje escrito, para jugar solos o en modo multijugador online.", option: "Introducción al código escrito", title: "Introducción al código escrito", img: "s78-python",
      paras: ["Programaremos videojuegos usando programación basada en texto, con el lenguaje de programación Python.",
              "Además, los configuraremos para jugarlos de manera local con un solo jugador, o en la nube en el modo multijugador."] },
  ],
  s91: [
    { id: "s91-arcade", short: "Con PICO-8 recreamos clásicos de maquinitas, como Space Invaders o un juego de penales, y armamos nuestra propia consola.", option: "Recreamos un arcade", title: "Recreamos un arcade", img: "s91-pico8",
      paras: ["Crearemos nuestra propia consola. Usando la plataforma PICO-8, recrearemos juegos de maquinitas, como el Space Invaders (en donde una nave tiene que destruir los meteoritos) o nuestra versión del Super Sidekicks (de patear penales)."] },
  ],
  s23: [
    { id: "s23-arduino", short: "Programamos sensores, luces y motores para crear un semáforo, un detector de lluvia, un brazo robótico y, al final, un auto.", option: "Robótica con Arduino", title: "Robótica con Arduino", img: "s23-arduino",
      paras: ["Arduino nos permite programar sensores, luces y motores para crear proyectos robóticos.",
              "Aprenderemos cómo usar cables, LEDs, servos y otros componentes para crear un semáforo, un detector de lluvia, un brazo robótico y finalmente: ¡un auto!"] },
  ],
};
/* Actividades de Jardín (fotos de la presentación para jardines) */
const KINDER_ACTIVITIES = [
  { img: "kinder/robots.jpg", label: "Programamos robots" },
  { img: "kinder/animaciones.jpg", label: "Creamos animaciones digitales" },
  { img: "kinder/ciencia.jpg", label: "Experimentos de ciencia" },
  { img: "kinder/construccion.jpg", label: "Construcción y motricidad fina" },
  { img: "kinder/dispositivos.jpg", label: "Manejo de dispositivos con seguridad" },
];
const ALL_PROGRAMS = Object.values(PROGRAMS).flat();
const programById = id => ALL_PROGRAMS.find(p => p.id === id);

const ALIGN = {
  p12: { label: "1º y 2º grado",
    rubric: "Secuencias de instrucciones, resolución de problemas sencillos, alfabetización digital, reconocimiento y uso de dispositivos, y medidas básicas para proteger la información personal.",
    wecode: "Programamos nuestros primeros robots, dándoles una orden a la vez para que dibujen figuras, y armamos animaciones digitales con personajes propios. En el camino, se familiarizan con distintas pantallas y dispositivos, y charlamos sobre qué información es buena idea compartir online y cuál no.",
    note: "WeCode desarrolla estos aprendizajes mediante **experiencias concretas de programación, robótica y creación digital**, combinando recursos físicos y digitales." },
  p34: { label: "3º y 4º grado",
    rubric: "Desarrollo del pensamiento computacional mediante el reconocimiento de patrones, la descomposición de problemas y la generalización. Programación por bloques y capacidad de reconocer y corregir errores. En ciudadanía digital, se trabaja la navegación segura, la huella digital y la protección de los datos personales.",
    wecode: "Programamos videojuegos propios, como juegos de carreras y plataformas, trabajando operadores lógicos y corrección de errores. También desarrollamos los primeros proyectos de electrónica con micro:bit. Y empezamos a pensar en internet como un lugar más: qué cosas está bien compartir y cuáles no, y por qué conviene pensarlo dos veces antes de mandar algo.",
    note: "WeCode cumple con los requisitos con una propuesta lúdica, a través de **videojuegos y proyectos de electrónica con hardware real**, integrando programación, pensamiento lógico y resolución de problemas en experiencias prácticas." },
  p56: { label: "5º y 6º grado",
    rubric: "Programación por bloques con uso de variables, sensores y eventos, junto con una introducción a la inteligencia artificial. En ciudadanía digital, se profundiza con la prevención del grooming, el ciberbullying y el sexting, sumando el trabajo sobre la huella digital y la protección de datos personales. Se incorpora además el concepto de derechos de autor.",
    wecode: "Desarrollamos aplicaciones propias y creamos videojuegos de mayor complejidad, trabajando variables, sensores y eventos, y dando los primeros pasos en inteligencia artificial. Además, hablamos de situaciones más delicadas que pueden aparecer en internet y redes sociales, y de por qué es importante dar crédito cuando usamos una imagen o un contenido que no es propio.",
    note: "La propuesta de WeCode lleva los contenidos curriculares a la creación de aplicaciones funcionales y videojuegos, **integrando programación, diseño y ciudadanía digital**." },
  s78: { label: "7º y 8º grado",
    rubric: "Introducción a la programación y al pensamiento computacional. Uso de entornos visuales o textuales simples, resolución de problemas y desarrollo de proyectos digitales colaborativos.",
    wecode: "Los estudiantes programan videojuegos usando el lenguaje escrito Python, trabajando la lógica, los bucles y condicionales. Aprenden a configurar sus juegos para un jugador o en modo multijugador online.",
    note: "**Cumple y supera.** Introduce programación textual antes de lo exigido, con proyectos prácticos y atractivos." },
  s91: { label: "9º grado y 1º EMS",
    rubric: "Profundización en algoritmos, estructuras de control y diseño de proyectos digitales. Aplicación del pensamiento computacional a simulaciones o representaciones de fenómenos.",
    wecode: "Los estudiantes diseñan y programan videojuegos retro desde cero, escribiendo código, creando sprites y sonidos, y aplicando estructuras de control, funciones y variables. Se introducen nociones de optimización, replicando el proceso de desarrollo de un videojuego profesional.",
    note: "**Cumple y amplía.** Combina programación textual, diseño de software y fundamentos de ingeniería digital en un entorno lúdico que refuerza la creatividad y la lógica computacional." },
  s23: { label: "2º y 3º EMS",
    rubric: "Aplicación de conocimientos tecnológicos en proyectos interdisciplinarios. Programación textual avanzada, robótica, sensores, automatización y resolución de problemas reales.",
    wecode: "Los estudiantes programan sensores, luces y motores para crear sistemas automatizados como semáforos, detectores de lluvia, brazos robóticos o autos. Aprenden circuitos, electrónica básica y diseño de prototipos, integrando hardware y software.",
    note: "**Cumple y supera.** Integra robótica aplicada, pensamiento sistémico y prototipado funcional, alineado con los objetivos de la orientación tecnológica de EMS." },
};
/* Etiquetas de grado y modalidad de un programa */
// Si los grados de un programa tienen modalidades distintas, cada etiqueta ya dice su grado y no hace falta la del grupo
const tagsHtml = r => '<div class="tags">' + (r.pills.length > 1 ? "" : '<span class="pill navy">' + esc(r.label) + "</span>") + r.pills.map(p => '<span class="pill ' + p.cls + '">' + esc(p.label) + "</span>").join("") + "</div>";
const BAND_ORDER = ["k5", "p12", "p34", "p56", "s78", "s91", "s23"];
const MOD = { curricular: { label: "Curricular", cls: "cur" }, extra: { label: "Extracurricular", cls: "ext" } };
const MONTHS = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

/* =========================================================
   MODELO
   ========================================================= */
const money = n => "$" + Number(n || 0).toLocaleString("es-UY", { maximumFractionDigits: 0 });
const joinY = arr => arr.length <= 1 ? (arr[0] || "") : arr.slice(0, -1).join(", ") + " y " + arr[arr.length - 1];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const rich = s => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
function longDate(iso) {
  const [y, m, d] = (iso || "").split("-").map(Number);
  return y && m && d ? d + " de " + MONTHS[m - 1] + " de " + y : "";
}
function groupLabel(gs) {
  if (gs.length === 1) return gradeName(gs[0]);
  const [a, b] = gs;
  if (a.kind === b.kind) return a.short + " y " + b.short + (a.kind === "ems" ? " EMS" : " grado");
  return gradeName(a) + " y " + gradeName(b);
}
function modelFor(st) {
  const sel = GRADES.filter(g => st.grades[g.id].on).map(g => ({ g, ...st.grades[g.id] }));
  const rows = [];
  sel.forEach(s => {
    const last = rows[rows.length - 1];
    if (last && last.band === s.g.band && last.program === s.program && last.mod === s.mod) last.grades.push(s.g);
    else rows.push({ band: s.g.band, program: s.program, mod: s.mod, grades: [s.g] });
  });
  rows.forEach(r => { r.label = groupLabel(r.grades); r.prog = programById(r.program); });
  // Para mostrar los programas: un mismo programa aparece una sola vez aunque sus grados tengan modalidades distintas
  const progRows = [];
  sel.forEach(s => {
    const last = progRows[progRows.length - 1];
    if (last && last.band === s.g.band && last.program === s.program) last.items.push(s);
    else progRows.push({ band: s.g.band, program: s.program, items: [s] });
  });
  progRows.forEach(r => {
    r.grades = r.items.map(x => x.g);
    r.label = groupLabel(r.grades);
    r.prog = programById(r.program);
    const ms = [...new Set(r.items.map(x => x.mod))];
    r.mod = ms[0];
    r.pills = ms.length === 1 ? [{ cls: MOD[ms[0]].cls, label: MOD[ms[0]].label }]
      : r.items.map(x => ({ cls: MOD[x.mod].cls, label: gradeName(x.g) + " · " + MOD[x.mod].label }));
  });
  const mods = ["curricular", "extra"].filter(m => sel.some(s => s.mod === m));
  const primBands = ["p12", "p34", "p56"].filter(b => sel.some(s => s.g.band === b));
  const secBands = ["s78", "s91", "s23"].filter(b => sel.some(s => s.g.band === b));
  const certification = sel.some(s => !["k5", "p1", "p2"].includes(s.g.id));
  return { sel, rows, progRows, mods, primBands, secBands, hasAnnex: primBands.length + secBands.length > 0, certification,
    modRows: m => rows.filter(r => r.mod === m) };
}

/* Condiciones: textos de las propuestas 2026–2027 */
function termsFor(M, st) {
  const both = M.mods.length > 1;
  const cols = [];
  if (M.mods.includes("curricular")) cols.push({ cls: "cur", title: "Curricular", items: [
    "Para todos los alumnos de uno o más grados, dentro del horario escolar.",
    "Requiere un mínimo de contratación de 4 grupos, de al menos 18 estudiantes en promedio cada uno.",
    "WeCode asigna dos educadores por grupo.",
    "Se asume que el colegio se hace cargo del costo del servicio; por eso WeCode hace el mayor esfuerzo financiero para ofrecer la mensualidad más baja posible, sin afectar la calidad educativa.",
  ] });
  if (M.mods.includes("extra")) cols.push({ cls: "ext", title: "Extracurricular", items: [
    "Cada familia decide si sus hijos participan del taller, por fuera del horario estándar.",
    "No se requiere un mínimo de grupos. Cada grupo puede combinar hasta dos grados continuos y requiere un mínimo de 8 participantes.",
    "Un educador para grupos de hasta 12 chicos y dos educadores para grupos de entre 13 y 24.",
    "El colegio puede transferir el costo a las familias; WeCode no interfiere en el precio que cobra la institución. Como referencia, en la academia se abonan unos " + money(st.refAcademy) + " mensuales por dos horas semanales, y los colegios aliados cobran en promedio " + money(st.refAllies) + " a las familias.",
  ] });
  const common = [
    "Precios mensuales, de marzo a diciembre inclusive (10 mensualidades). Los asuetos y vacaciones los define el colegio, sin perjuicio del cobro mensual acordado.",
    "WeCode provee todos los materiales (robots, placas electrónicas, accesorios y licencias). El colegio aporta salón, computadoras y pantalla o TV. No hay costos ocultos.",
    "El cobro se realiza en los primeros 5 días hábiles de cada mes, por transferencia bancaria. Los precios son finales: WeCode es una institución educativa exonerada de IVA.",
    "WeCode entrega la documentación de la Ley de Tercerizaciones. Todo el equipo cuenta con Certificado de no inscripción en el Registro Nacional de Violadores y Abusadores Sexuales.",
  ];
  if (String(st.extraNote || "").trim()) common.unshift(String(st.extraNote || "").trim());
  cols.push({ cls: "", title: both ? "Para ambas modalidades" : "Pagos y materiales", items: common });
  return cols;
}


/* =========================================================
   ANEXO CURRICULAR (textos)
   ========================================================= */
const PRIM_INTRO = [
  "El programa pedagógico de WeCode se alinea con los lineamientos y requerimientos del **Nuevo Marco Curricular** y las rúbricas de **Tecnología y Ciencias de la Computación** definidas por ANEP para Primaria.",
  "A través de un enfoque progresivo, WeCode acompaña la trayectoria del estudiante desde 1º grado, promoviendo el desarrollo del pensamiento computacional, la resolución creativa de problemas, el trabajo en equipo y la integración entre programación, robótica y diseño digital.",
];
const SEC_INTRO = [
  "El programa pedagógico de WeCode se alinea con los lineamientos del **Plan de Educación Media Superior 2023** y las rúbricas de **Ciencias de la Computación** y **Ciencias del Espacio y Tecnologías Aplicadas** definidas por la Dirección General de Educación Secundaria (DGES).",
  "A través de un enfoque progresivo, WeCode acompaña la trayectoria del estudiante desde 7º grado hasta el final del bachillerato, promoviendo el desarrollo del pensamiento computacional, la resolución creativa de problemas, el trabajo en equipo y la integración entre programación, robótica y diseño digital.",
];
const CONCL = lvl => ({
  text: "El programa de WeCode cumple plenamente con los objetivos " + (lvl === "prim" ? "del Nuevo Marco Curricular de ANEP" : "del Plan de Educación Media y Media Superior (DGES)") + ", ofreciendo una propuesta moderna, motivadora y coherente con los desafíos educativos actuales. Además:",
  items: [
    "Integra programación, robótica y creatividad digital como ejes centrales del aprendizaje.",
    "Promueve competencias transversales como pensamiento crítico, colaboración y comunicación.",
    "Conecta teoría y práctica, llevando los contenidos curriculares al terreno de la experiencia real.",
    "Fortalece la continuidad pedagógica desde los primeros años de " + (lvl === "prim" ? "primaria" : "secundaria") + " hasta el bachillerato.",
  ],
});
function annexSections(M) {
  const out = [];
  if (M.primBands.length) out.push({ key: "prim", title: "Primaria · Nuevo Marco Curricular (ANEP)", intro: PRIM_INTRO, bands: M.primBands, last: "Comentario" });
  if (M.secBands.length) out.push({ key: "sec", title: "Secundaria · Requerimientos DGES", intro: SEC_INTRO, bands: M.secBands, last: "Cumplimiento" });
  return out;
}

/* =========================================================
   COLEGIOS QUE CONFÍAN EN WECODE (cinta de logos)
   ========================================================= */
/* Logos tomados de wecode.edu.uy/colegios (los que dicen "Colegio" no tienen nombre en la web) */
const SCHOOL_LOGOS = [
  { name: "Ceibal", file: "00.png" },
  { name: "Escuela y Liceo Elbio Fernández", file: "01.png" },
  { name: "EduSchool", file: "02.png" },
  { name: "Montevideo College", file: "03.png" },
  { name: "St. Brendan's School", file: "04.png" },
  { name: "Escuela Wara", file: "05.png" },
  { name: "Queen's School", file: "06.png" },
  { name: "Colegio Bilingüe Ciudad Vieja", file: "07.png" },
  { name: "Colegio Gabriela Mistral", file: "08.png" },
  { name: "Escuela Logosófica", file: "09.png" },
  { name: "Escuela Yavne", file: "10.png" },
  { name: "Escuela Integral", file: "11.png" },
  { name: "Uruguayan American School", file: "12.png" },
  { name: "Espacio Lúdico School", file: "13.png" },
  { name: "Life School", file: "14.png" },
  { name: "Colonia de Verano Vicman", file: "15.png" },
  { name: "Colegio", file: "16.png" },
  { name: "Mahanaim School", file: "17.png" },
  { name: "Colegio Fátima", file: "18.png" },
  { name: "Colegio", file: "19.png" },
  { name: "Colegio Richard Anderson", file: "20.png" },
  { name: "El Jardín de Ana", file: "21.png" },
  { name: "LAM", file: "22.png" },
  { name: "Moorlands School", file: "23.png" },
  { name: "Colegio", file: "24.png" },
];
/* Fotos de la Feria de Proyectos, de wecode.edu.uy */
const GALLERY = ["g01.jpg","g02.jpg","g03.jpg","g04.jpg","g05.jpg","g06.jpg","g07.jpg","g08.jpg","g09.jpg","g10.jpg","g11.jpg","g12.jpg"];

/* =========================================================
   LINK DE LA PROPUESTA
   Los datos viajan dentro del link, después del #. claude.ai solo
   le pasa a la página etiquetas simples, así que se empaquetan en
   bytes y se escriben con minúsculas y números (base32).
   ========================================================= */
/* Fotos para la portada (la primera es la que va por defecto) */
const COVER_PHOTOS = [
  { file: "kids-laptop.jpg", label: "Chicos con laptops" },
  { file: "classroom.jpg", label: "Clase con educador" },
  { file: "certificates.jpg", label: "Entrega de certificados" },
  { file: "gal/g05.jpg", label: "Programando en la Feria" },
  { file: "gal/g06.jpg", label: "Proyecto con robot" },
  { file: "gal/g02.jpg", label: "Educador con estudiantes" },
  { file: "gal/g11.jpg", label: "Concentrado en su juego" },
  { file: "gal/g10.jpg", label: "Medallas y diplomas" },
  { file: "gal/g04.jpg", label: "Grupo en la Feria" },
];
const coverPhoto = st => {
  const url = String(st.photoUrl || "").trim();
  if (/^https:\/\/\S+$/i.test(url)) return url;
  return "img/" + (COVER_PHOTOS[st.photo] || COVER_PHOTOS[0]).file;
};

/* Para usar una dirección dentro de url('...') en CSS sin romper comillas ni paréntesis */
const cssUrl = u => String(u).replace(/["'()\s\\<>&]/g, c => "%" + c.charCodeAt(0).toString(16).padStart(2, "0"));

const CONTACT_DEFAULT = { cName: "Brian Jaffe", cRole: "Director", cEmail: "brian@wecode.edu.uy", cPhone: "094 293 160" };
const B32 = "abcdefghijklmnopqrstuvwxyz234567";
function toB32(bytes) {
  let out = "", bits = 0, val = 0;
  for (const b of bytes) { val = (val << 8) | b; bits += 8; while (bits >= 5) { out += B32[(val >>> (bits - 5)) & 31]; bits -= 5; } }
  if (bits > 0) out += B32[(val << (5 - bits)) & 31];
  return out;
}
function fromB32(str) {
  const out = []; let bits = 0, val = 0;
  for (const ch of str) { const v = B32.indexOf(ch); if (v < 0) throw new Error("carácter inválido"); val = ((val << 5) | v) & 0xffff; bits += 5; if (bits >= 8) { out.push((val >>> (bits - 8)) & 255); bits -= 8; } }
  return new Uint8Array(out);
}
const DAY0 = Date.UTC(2020, 0, 1);
function packState(st) {
  const b = [];
  const u16 = n => { n = Math.max(0, Math.min(65535, Math.round(Number(n) || 0))); b.push(n >> 8, n & 255); };
  const u8 = n => b.push(Math.max(0, Math.min(255, Math.round(Number(n) || 0))));
  const str = s => { const e = new TextEncoder().encode(String(s || "")).slice(0, 255); b.push(e.length, ...e); };
  const custom = Object.keys(CONTACT_DEFAULT).some(k => String(st[k] || "") !== CONTACT_DEFAULT[k]);
  const note = String(st.extraNote || "").trim();
  const photoUrl = String(st.photoUrl || "").trim();
  b.push(3, (custom ? 1 : 0) | (note ? 2 : 0) | (photoUrl ? 4 : 0) | (st.intro === false ? 8 : 0));
  u8((Number(st.year) || 2000) - 2000);
  const [y, m, d] = String(st.date || "").split("-").map(Number);
  u16(y && m && d ? Math.round((Date.UTC(y, m - 1, d) - DAY0) / 864e5) + 1 : 0);
  const nib = GRADES.map(g => {
    const x = st.grades[g.id];
    if (!x.on) return 0;
    return 8 | (x.mod === "curricular" ? 4 : 0) | Math.max(0, PROGRAMS[g.band].findIndex(p => p.id === x.program));
  });
  for (let k = 0; k < nib.length; k += 2) b.push((nib[k] << 4) | (nib[k + 1] || 0));
  u16(st.priceCur); u16(st.priceExt); u8(st.minCur); u8(st.minExt); u16(st.refAcademy); u16(st.refAllies);
  u8(st.photo);
  str(st.school);
  if (note) str(note);
  if (custom) Object.keys(CONTACT_DEFAULT).forEach(k => str(st[k]));
  if (photoUrl) str(photoUrl);
  return new Uint8Array(b);
}
function unpackState(b) {
  let i = 0;
  const u8 = () => b[i++];
  const u16 = () => (b[i++] << 8) | b[i++];
  const str = () => { const n = b[i++]; const s = new TextDecoder().decode(b.slice(i, i + n)); i += n; return s; };
  const version = u8();
  if (version !== 2 && version !== 3) throw new Error("versión desconocida");
  const flags = u8();
  const st = { grades: {}, intro: !(flags & 8) };
  st.year = 2000 + u8();
  const days = u16();
  st.date = days ? new Date(DAY0 + (days - 1) * 864e5).toISOString().slice(0, 10) : "";
  const nib = [];
  for (let k = 0; k < Math.ceil(GRADES.length / 2); k++) { const v = u8(); nib.push(v >> 4, v & 15); }
  GRADES.forEach((g, k) => {
    const v = nib[k], progs = PROGRAMS[g.band];
    st.grades[g.id] = v & 8 ? { on: true, mod: v & 4 ? "curricular" : "extra", program: (progs[v & 3] || progs[0]).id }
      : { on: false, program: progs[0].id, mod: "extra" };
  });
  st.priceCur = u16(); st.priceExt = u16(); st.minCur = u8(); st.minExt = u8(); st.refAcademy = u16(); st.refAllies = u16();
  st.photo = version >= 3 ? u8() : 0;
  st.school = str();
  st.extraNote = flags & 2 ? str() : "";
  Object.keys(CONTACT_DEFAULT).forEach(k => { st[k] = flags & 1 ? str() : CONTACT_DEFAULT[k]; });
  st.photoUrl = flags & 4 ? str() : "";
  return st;
}
async function encodeProposal(st) { return "p" + toB32(packState(st)); }
async function decodeProposal(token) {
  if (!/^p[a-z2-7]+$/.test(token)) throw new Error("formato inválido");
  return unpackState(fromB32(token.slice(1)));
}
