(function () {
  "use strict";

  /* =========================================================
     Translations
     ========================================================= */
  var T = {
    nl: {
      title: "Glucose", tabConv: "Omrekenen", tabCarb: "Koolhydraten",
      enter: "Typ in één van beide velden", clear: "Wissen",
      table: "Snelle tabel — tik om te laden", meaning: "Betekenis",
      howH: "Hoe reken je om?",
      howP: "De app rekent met de precieze factor 18,016 (molmassa van glucose: 180,16 g/mol ÷ 10). mmol/L wordt afgerond op 1 decimaal, mg/dL op een heel getal.",
      rangeP: "Kleuren volgen de internationale consensus voor Time in Range: 3,9–10,0 mmol/L (70–180 mg/dL) is het streefgebied. Jouw persoonlijke streefwaarden kunnen anders zijn.",
      disclaimer: "Alleen een rekenhulp, geen medisch advies. Koolhydraatwaarden zijn schattingen. Overleg met je arts of diabetesverpleegkundige over je waarden en behandeling.",
      installText: "Zet de app op je beginscherm.", install: "Installeren",
      none: "Geen waarde", invalid: "Typ een getal, bijvoorbeeld 5,6 of 100.",
      implausible: "Deze waarde is ongebruikelijk hoog. Controleer of je het juiste veld gebruikt.",
      bands: { vlow: "Zeer laag", low: "Laag", ok: "Binnen streefwaarde", high: "Hoog", vhigh: "Zeer hoog" },
      hints: {
        vlow: "Onder 3,0 mmol/L (54 mg/dL). Behandel een hypo direct volgens je behandelplan.",
        low: "3,0–3,8 mmol/L (54–69 mg/dL). Dit is een hypo; neem snelle koolhydraten volgens je plan.",
        ok: "3,9–10,0 mmol/L (70–180 mg/dL).",
        high: "10,1–13,9 mmol/L (181–250 mg/dL).",
        vhigh: "Boven 13,9 mmol/L (250 mg/dL). Volg je behandelplan en controleer zo nodig op ketonen."
      },
      plateH: "Mijn bord", kh: "g KH", gCarb: "g koolhydraten", g: "g",
      plateEmpty: "Nog leeg. Zoek hieronder een gerecht en tik op +, of maak een foto.",
      searchH: "Gerecht zoeken", searchPh: "Bijv. stamppot, paella, churros",
      fAll: "Alles", fNl: "Nederland", fEs: "Spanje",
      noResults: "Niets gevonden. Probeer een ander woord, of gebruik de etiket-rekenaar hieronder.",
      showMore: "Toon meer ({n})", addTo: "Voeg {name} toe aan mijn bord", remove: "Verwijder {name}",
      less: "Minder", more: "Meer", added: "{name} staat op je bord",
      photoH: "Foto van je eten",
      photoIntro: "Maak een foto vóór het eten. De app schat per onderdeel het gewicht en de koolhydraten.",
      photoTake: "Foto maken", photoPick: "Kies uit galerij", photoGo: "Schat koolhydraten",
      photoHintPh: "Optioneel: wat is het? Bijv. paella met kip",
      photoNeedKey: "Voor fotoherkenning is een API-sleutel nodig. Open ‘Instellingen fotoherkenning’ onderaan.",
      photoBusy: "Foto wordt bekeken… dit duurt meestal 10 tot 30 seconden.",
      photoOffline: "Geen internetverbinding. Fotoherkenning werkt alleen online; zoek het gerecht hierboven op.",
      photoAuth: "De API-sleutel wordt niet geaccepteerd. Controleer de sleutel bij Instellingen.",
      photoRate: "Te veel verzoeken of tegoed op. Probeer het over een minuut opnieuw of controleer je tegoed.",
      photoFail: "Schatten lukte niet ({msg}). Probeer opnieuw of zoek het gerecht op.",
      photoRefused: "Deze foto kon niet worden beoordeeld. Probeer een andere foto.",
      photoNoFood: "Geen eten herkend op de foto.",
      photoTotal: "Geschat totaal", photoAdd: "Zet op mijn bord",
      conf: { low: "Zekerheid: laag", medium: "Zekerheid: gemiddeld", high: "Zekerheid: hoog" },
      photoCheck: "Controleer de schatting. Pas zo nodig de hoeveelheid aan op je bord.",
      labelH: "Etiket-rekenaar",
      labelIntro: "Staat het op een verpakking? Vul de koolhydraten per 100 g en hoeveel je eet.",
      labelPer100: "KH per 100 g", labelGrams: "Gram die je eet", addPlate: "Op mijn bord",
      labelName: "Etiket: {g} g", photoItem: "Foto: {name}",
      tipsH: "Tips voor koolhydraten tellen",
      tip1: "Weeg af en toe je eten. Dan leer je porties beter schatten met het oog.",
      tip2: "Let op ‘verborgen’ koolhydraten: sauzen, paneerkruim, frisdrank, sap en alcohol.",
      tip3: "Een bord is meestal ca. 26 cm. Een vuist is ongeveer 1 portie rijst, pasta of aardappel.",
      tip4: "Spaanse ‘raciones’ zijn vaak om te delen: deel het totaal door het aantal personen met de − knop.",
      settingsH: "Instellingen fotoherkenning",
      keyIntro: "Fotoherkenning gebruikt Claude van Anthropic. Je hebt een eigen API-sleutel nodig (console.anthropic.com → API Keys). Een foto kost ongeveer 2 tot 5 eurocent.",
      keySave: "Opslaan", keyRemove: "Verwijderen",
      keySaved: "Sleutel opgeslagen op dit apparaat.", keyRemoved: "Sleutel verwijderd.", keyNone: "Nog geen sleutel ingesteld.",
      keyBad: "Dit lijkt geen Anthropic API-sleutel (die begint met sk-ant-).",
      keyPrivacy: "De sleutel blijft alleen op dit apparaat. Foto’s gaan rechtstreeks naar Anthropic om te analyseren en worden niet door deze app bewaard."
    },
    es: {
      title: "Glucosa", tabConv: "Convertir", tabCarb: "Carbohidratos",
      enter: "Escribe en cualquiera de los dos campos", clear: "Borrar",
      table: "Tabla rápida — toca para cargar", meaning: "Significado",
      howH: "¿Cómo se convierte?",
      howP: "La app usa el factor exacto 18,016 (masa molar de la glucosa: 180,16 g/mol ÷ 10). mmol/L se redondea a 1 decimal y mg/dL a un número entero.",
      rangeP: "Los colores siguen el consenso internacional de Tiempo en Rango: 3,9–10,0 mmol/L (70–180 mg/dL) es el rango objetivo. Tus objetivos personales pueden ser distintos.",
      disclaimer: "Solo es una ayuda de cálculo, no un consejo médico. Los carbohidratos son estimaciones. Consulta tus valores y tratamiento con tu médico o enfermera de diabetes.",
      installText: "Añade la app a tu pantalla de inicio.", install: "Instalar",
      none: "Sin valor", invalid: "Escribe un número, por ejemplo 5,6 o 100.",
      implausible: "Este valor es inusualmente alto. Comprueba que escribes en el campo correcto.",
      bands: { vlow: "Muy bajo", low: "Bajo", ok: "En rango", high: "Alto", vhigh: "Muy alto" },
      hints: {
        vlow: "Por debajo de 3,0 mmol/L (54 mg/dL). Trata la hipoglucemia enseguida según tu plan.",
        low: "3,0–3,8 mmol/L (54–69 mg/dL). Es una hipoglucemia; toma hidratos rápidos según tu plan.",
        ok: "3,9–10,0 mmol/L (70–180 mg/dL).",
        high: "10,1–13,9 mmol/L (181–250 mg/dL).",
        vhigh: "Por encima de 13,9 mmol/L (250 mg/dL). Sigue tu plan y mide cetonas si te lo indicaron."
      },
      plateH: "Mi plato", kh: "g HC", gCarb: "g de carbohidratos", g: "g",
      plateEmpty: "Vacío. Busca un plato abajo y toca +, o haz una foto.",
      searchH: "Buscar plato", searchPh: "Ej. paella, tortilla, stamppot",
      fAll: "Todo", fNl: "Países Bajos", fEs: "España",
      noResults: "No se encontró nada. Prueba otra palabra o usa la calculadora de etiqueta.",
      showMore: "Ver más ({n})", addTo: "Añadir {name} a mi plato", remove: "Quitar {name}",
      less: "Menos", more: "Más", added: "{name} está en tu plato",
      photoH: "Foto de tu comida",
      photoIntro: "Haz una foto antes de comer. La app estima el peso y los carbohidratos de cada parte.",
      photoTake: "Hacer foto", photoPick: "Elegir de la galería", photoGo: "Estimar carbohidratos",
      photoHintPh: "Opcional: ¿qué es? Ej. paella de pollo",
      photoNeedKey: "Para reconocer fotos hace falta una clave API. Abre ‘Ajustes de reconocimiento de fotos’ abajo.",
      photoBusy: "Analizando la foto… suele tardar entre 10 y 30 segundos.",
      photoOffline: "Sin conexión. El reconocimiento de fotos solo funciona en línea; busca el plato arriba.",
      photoAuth: "La clave API no es válida. Revísala en Ajustes.",
      photoRate: "Demasiadas solicitudes o saldo agotado. Inténtalo de nuevo en un minuto o revisa tu saldo.",
      photoFail: "No se pudo estimar ({msg}). Inténtalo de nuevo o busca el plato.",
      photoRefused: "No se pudo evaluar esta foto. Prueba con otra.",
      photoNoFood: "No se reconoce comida en la foto.",
      photoTotal: "Total estimado", photoAdd: "Añadir a mi plato",
      conf: { low: "Confianza: baja", medium: "Confianza: media", high: "Confianza: alta" },
      photoCheck: "Revisa la estimación. Ajusta la cantidad en tu plato si hace falta.",
      labelH: "Calculadora de etiqueta",
      labelIntro: "¿Viene en un envase? Escribe los carbohidratos por 100 g y cuánto comes.",
      labelPer100: "HC por 100 g", labelGrams: "Gramos que comes", addPlate: "A mi plato",
      labelName: "Etiqueta: {g} g", photoItem: "Foto: {name}",
      tipsH: "Consejos para contar carbohidratos",
      tip1: "Pesa tu comida de vez en cuando. Así aprendes a calcular porciones a ojo.",
      tip2: "Cuidado con los hidratos ‘ocultos’: salsas, rebozados, refrescos, zumos y alcohol.",
      tip3: "Un plato mide unos 26 cm. Un puño es más o menos 1 ración de arroz, pasta o patata.",
      tip4: "Las raciones de tapas suelen ser para compartir: usa el botón − para tu parte.",
      settingsH: "Ajustes de reconocimiento de fotos",
      keyIntro: "El reconocimiento de fotos usa Claude de Anthropic. Necesitas tu propia clave API (console.anthropic.com → API Keys). Cada foto cuesta unos 2 a 5 céntimos.",
      keySave: "Guardar", keyRemove: "Eliminar",
      keySaved: "Clave guardada en este dispositivo.", keyRemoved: "Clave eliminada.", keyNone: "Aún no hay clave.",
      keyBad: "No parece una clave API de Anthropic (empieza por sk-ant-).",
      keyPrivacy: "La clave se queda solo en este dispositivo. Las fotos se envían directamente a Anthropic para analizarlas y esta app no las guarda."
    },
    en: {
      title: "Glucose", tabConv: "Convert", tabCarb: "Carbs",
      enter: "Type in either field", clear: "Clear",
      table: "Quick table — tap to load", meaning: "Meaning",
      howH: "How to convert",
      howP: "The app uses the precise factor 18.016 (glucose molar mass 180.16 g/mol ÷ 10). mmol/L is rounded to 1 decimal, mg/dL to a whole number.",
      rangeP: "Colours follow the International Consensus on Time in Range: 3.9–10.0 mmol/L (70–180 mg/dL) is the target range. Your personal targets may differ.",
      disclaimer: "A calculation aid only, not medical advice. Carb values are estimates. Talk to your doctor or diabetes nurse about your readings and treatment.",
      installText: "Add the app to your home screen.", install: "Install",
      none: "No value", invalid: "Type a number, for example 5.6 or 100.",
      implausible: "This value is unusually high. Check that you are typing in the right field.",
      bands: { vlow: "Very low", low: "Low", ok: "In range", high: "High", vhigh: "Very high" },
      hints: {
        vlow: "Below 3.0 mmol/L (54 mg/dL). Treat a hypo right away following your care plan.",
        low: "3.0–3.8 mmol/L (54–69 mg/dL). This is a hypo; take fast-acting carbs following your plan.",
        ok: "3.9–10.0 mmol/L (70–180 mg/dL).",
        high: "10.1–13.9 mmol/L (181–250 mg/dL).",
        vhigh: "Above 13.9 mmol/L (250 mg/dL). Follow your care plan and check ketones if advised."
      },
      plateH: "My plate", kh: "g carbs", gCarb: "g carbs", g: "g",
      plateEmpty: "Empty. Search for a dish below and tap +, or take a photo.",
      searchH: "Find a dish", searchPh: "E.g. paella, stamppot, churros",
      fAll: "All", fNl: "Netherlands", fEs: "Spain",
      noResults: "Nothing found. Try another word, or use the label calculator below.",
      showMore: "Show more ({n})", addTo: "Add {name} to my plate", remove: "Remove {name}",
      less: "Less", more: "More", added: "{name} is on your plate",
      photoH: "Photo of your food",
      photoIntro: "Take a photo before you eat. The app estimates the weight and carbs of each part.",
      photoTake: "Take photo", photoPick: "Choose from gallery", photoGo: "Estimate carbs",
      photoHintPh: "Optional: what is it? E.g. chicken paella",
      photoNeedKey: "Photo recognition needs an API key. Open ‘Photo recognition settings’ below.",
      photoBusy: "Looking at the photo… this usually takes 10 to 30 seconds.",
      photoOffline: "No internet connection. Photo recognition only works online; look the dish up above.",
      photoAuth: "The API key was not accepted. Check it in Settings.",
      photoRate: "Too many requests or out of credit. Try again in a minute or check your credit.",
      photoFail: "Could not estimate ({msg}). Try again or look the dish up.",
      photoRefused: "This photo could not be assessed. Try another photo.",
      photoNoFood: "No food recognised in the photo.",
      photoTotal: "Estimated total", photoAdd: "Add to my plate",
      conf: { low: "Confidence: low", medium: "Confidence: medium", high: "Confidence: high" },
      photoCheck: "Check the estimate. Adjust the amount on your plate if needed.",
      labelH: "Label calculator",
      labelIntro: "Is it in a package? Enter the carbs per 100 g and how much you eat.",
      labelPer100: "Carbs per 100 g", labelGrams: "Grams you eat", addPlate: "Add to plate",
      labelName: "Label: {g} g", photoItem: "Photo: {name}",
      tipsH: "Tips for carb counting",
      tip1: "Weigh your food now and then. It trains your eye for portion sizes.",
      tip2: "Watch for ‘hidden’ carbs: sauces, breading, soft drinks, juice and alcohol.",
      tip3: "A dinner plate is about 26 cm. A fist is roughly 1 portion of rice, pasta or potato.",
      tip4: "Spanish ‘raciones’ are usually for sharing: use the − button for your share.",
      settingsH: "Photo recognition settings",
      keyIntro: "Photo recognition uses Claude by Anthropic. You need your own API key (console.anthropic.com → API Keys). One photo costs roughly 2 to 5 cents.",
      keySave: "Save", keyRemove: "Remove",
      keySaved: "Key saved on this device.", keyRemoved: "Key removed.", keyNone: "No key set yet.",
      keyBad: "This does not look like an Anthropic API key (it starts with sk-ant-).",
      keyPrivacy: "The key stays on this device only. Photos go straight to Anthropic for analysis and are not stored by this app."
    }
  };

  var $ = function (id) { return document.getElementById(id); };
  var lang = "nl";
  function t(k) { return T[lang][k]; }
  function tf(k, vars) {
    return t(k).replace(/\{(\w+)\}/g, function (_, v) { return vars[v]; });
  }
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function unstore(k) { try { localStorage.removeItem(k); } catch (e) {} }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function sep() { return lang === "en" ? "." : ","; }
  function fmt(n, dec) { return n.toFixed(dec).replace(".", sep()); }
  function parse(s) {
    s = String(s).trim().replace(/\s/g, "").replace(",", ".");
    if (s === "") return null;
    if (!/^\d*\.?\d*$/.test(s) || s === ".") return NaN;
    return parseFloat(s);
  }

  /* =========================================================
     Glucose converter
     ========================================================= */
  var FACTOR = 18.016; // mg/dL per mmol/L for glucose (180.16 g/mol)

  // Bands per International Consensus on Time in Range (2019), defined per unit
  // so a boundary value like 10.0 mmol/L (= 180.2 mg/dL) stays "in range".
  var BANDS = [
    { key: "vlow",  mmolMax: 2.95, mgMax: 53.5 },
    { key: "low",   mmolMax: 3.85, mgMax: 69.5 },
    { key: "ok",    mmolMax: 10.05, mgMax: 180.5 },
    { key: "high",  mmolMax: 13.95, mgMax: 250.5 },
    { key: "vhigh", mmolMax: Infinity, mgMax: Infinity }
  ];
  var TABLE = [
    [2.5, "vlow"], [3.0, "low"], [3.5, "low"], [3.9, "ok"], [4.5, "ok"], [5.5, "ok"], [6.0, "ok"], [7.0, "ok"],
    [7.8, "ok"], [8.0, "ok"], [9.0, "ok"], [10.0, "ok"], [11.1, "high"], [12.0, "high"], [13.9, "high"],
    [15.0, "vhigh"], [20.0, "vhigh"], [25.0, "vhigh"], [33.3, "vhigh"]
  ];

  var mmolEl = $("mmol"), mgEl = $("mgdl"), chip = $("chip"), hint = $("hint"), marker = $("marker");
  var lastSource = "mmol";

  function band(value, unit) {
    for (var i = 0; i < BANDS.length; i++) {
      if (value <= (unit === "mmol" ? BANDS[i].mmolMax : BANDS[i].mgMax)) return BANDS[i].key;
    }
  }

  function update(source) {
    lastSource = source;
    var fromEl = source === "mmol" ? mmolEl : mgEl;
    var toEl = source === "mmol" ? mgEl : mmolEl;
    var v = parse(fromEl.value);
    if (v === null || isNaN(v)) {
      toEl.value = "";
      chip.removeAttribute("data-band");
      chip.textContent = t("none");
      hint.textContent = v === null ? "" : t("invalid");
      marker.style.opacity = "0";
      return;
    }
    var mg = source === "mmol" ? v * FACTOR : v;
    toEl.value = source === "mmol" ? fmt(Math.round(mg), 0) : fmt(v / FACTOR, 1);
    var b = band(v, source);
    chip.setAttribute("data-band", b);
    chip.textContent = t("bands")[b];
    hint.textContent = mg > 1000 ? t("implausible") : t("hints")[b];
    marker.style.left = Math.max(0, Math.min(1, mg / 400)) * 100 + "%";
    marker.style.opacity = "1";
    store("glucose.last", JSON.stringify({ s: source, v: fromEl.value }));
  }

  function buildGauge() {
    var segs = [[0, 54, "vlow"], [54, 70, "low"], [70, 180, "ok"], [180, 250, "high"], [250, 400, "vhigh"]];
    $("bar").innerHTML = segs.map(function (s) {
      return '<span style="width:' + ((s[1] - s[0]) / 4) + '%;background:var(--' + s[2] + ')"></span>';
    }).join("");
    var ticks = [[70, "3" + sep() + "9"], [180, "10" + sep() + "0"], [250, "13" + sep() + "9"]];
    $("ticks").innerHTML = ticks.map(function (k) {
      return '<span style="left:' + (k[0] / 4) + '%">' + k[1] + "</span>";
    }).join("");
  }

  function buildTable() {
    $("tbody").innerHTML = TABLE.map(function (r) {
      var mmol = fmt(r[0], 1), mg = fmt(Math.round(r[0] * FACTOR), 0);
      return '<tr><td style="--band:var(--' + r[1] + ')"><button type="button" data-mmol="' + r[0] + '">' + mmol +
        '</button></td><td><button type="button" data-mmol="' + r[0] + '">' + mg +
        '</button></td><td class="lbl">' + t("bands")[r[1]] + "</td></tr>";
    }).join("");
  }

  mmolEl.addEventListener("input", function () { update("mmol"); });
  mgEl.addEventListener("input", function () { update("mg"); });
  [mmolEl, mgEl].forEach(function (el) {
    el.addEventListener("focus", function () { el.select(); });
    el.addEventListener("keydown", function (e) { if (e.key === "Enter") el.blur(); });
  });
  $("clear").addEventListener("click", function () {
    mmolEl.value = ""; mgEl.value = ""; update("mmol"); mmolEl.focus();
  });
  $("tbody").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-mmol]");
    if (!b) return;
    mmolEl.value = fmt(parseFloat(b.getAttribute("data-mmol")), 1);
    update("mmol");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* =========================================================
     Tabs
     ========================================================= */
  function showTab(name) {
    ["conv", "carb"].forEach(function (n) {
      $("tab-" + n).setAttribute("aria-selected", String(n === name));
      $("panel-" + n).hidden = n !== name;
    });
    store("glucose.tab", name);
  }
  $("tab-conv").addEventListener("click", function () { showTab("conv"); });
  $("tab-carb").addEventListener("click", function () { showTab("carb"); });

  /* =========================================================
     Meal search
     ========================================================= */
  var MEALS = window.MEALS || [];
  var country = "all", showAll = false, PAGE = 12;

  function norm(s) {
    return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9 ]/g, " ");
  }
  MEALS.forEach(function (m, i) {
    m.i = i;
    m.idx = norm([m.n.nl, m.n.en, m.n.es, m.a, m.cat].join(" "));
  });

  function mealName(m) { return m.n[lang] || m.n.nl; }
  function flag(c) { return c === "x" ? "" : '<span class="flag">' + c.toUpperCase() + "</span>"; }

  function renderMeals() {
    var q = norm($("mealSearch").value).trim();
    var words = q ? q.split(/\s+/) : [];
    var hits = MEALS.filter(function (m) {
      if (country !== "all" && m.c !== country && m.c !== "x") return false;
      return words.every(function (w) { return m.idx.indexOf(w) !== -1; });
    });
    if (words.length) {
      // Matches at the start of the name in the current language come first.
      hits.sort(function (a, b) {
        var sa = norm(mealName(a)).indexOf(words[0]) === 0 ? 0 : 1;
        var sb = norm(mealName(b)).indexOf(words[0]) === 0 ? 0 : 1;
        return sa - sb;
      });
    }
    var shown = showAll || words.length ? hits : hits.slice(0, PAGE);
    $("mealList").innerHTML = shown.map(function (m) {
      var name = esc(mealName(m));
      return '<li><div class="name"><strong>' + name + "</strong><span>" + flag(m.c) + esc(m.p[lang] || m.p.nl) +
        " · " + m.g + " " + t("g") + '</span></div><div class="kh">' + m.kh + " <small>" + t("kh") + "</small></div>" +
        '<button type="button" class="add" data-meal="' + m.i + '" aria-label="' + esc(tf("addTo", { name: mealName(m) })) + '">+</button></li>';
    }).join("");
    $("mealEmpty").hidden = hits.length > 0;
    var rest = hits.length - shown.length;
    $("mealMore").hidden = rest <= 0;
    $("mealMore").textContent = tf("showMore", { n: rest });
  }

  $("mealSearch").addEventListener("input", function () { showAll = false; renderMeals(); });
  $("mealMore").addEventListener("click", function () { showAll = true; renderMeals(); });
  document.querySelectorAll("[data-country]").forEach(function (b) {
    b.addEventListener("click", function () {
      country = b.getAttribute("data-country");
      document.querySelectorAll("[data-country]").forEach(function (x) {
        x.setAttribute("aria-pressed", String(x === b));
      });
      renderMeals();
    });
  });
  $("mealList").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-meal]");
    if (!b) return;
    var m = MEALS[+b.getAttribute("data-meal")];
    addToPlate({ meal: m.i, kh: m.kh, mult: 1 });
    b.textContent = "✓";
    setTimeout(function () { b.textContent = "+"; }, 900);
  });

  /* =========================================================
     My plate
     ========================================================= */
  var plate = [];
  try { plate = JSON.parse(load("glucose.plate") || "[]") || []; } catch (e) { plate = []; }

  function itemName(it) {
    if (it.meal != null && MEALS[it.meal]) return mealName(MEALS[it.meal]);
    if (it.type === "label") return tf("labelName", { g: fmt(it.g, 0) });
    if (it.type === "photo") return tf("photoItem", { name: it.name });
    return it.name || "";
  }
  function itemSub(it) {
    if (it.meal != null && MEALS[it.meal]) {
      var m = MEALS[it.meal];
      return (m.p[lang] || m.p.nl) + " · " + it.kh + " " + t("kh");
    }
    return it.sub || "";
  }
  function multText(x) {
    var whole = Math.floor(x), half = x - whole >= 0.5;
    return (whole ? whole : "") + (half ? "½" : "") + "×";
  }
  function savePlate() { store("glucose.plate", JSON.stringify(plate)); }

  function renderPlate() {
    var total = 0;
    $("plateList").innerHTML = plate.map(function (it, i) {
      var kh = it.kh * it.mult;
      total += kh;
      var name = esc(itemName(it));
      return '<li><div class="name"><strong>' + name + "</strong><span>" + esc(itemSub(it)) + "</span></div>" +
        '<div class="stepper"><button type="button" data-step="-1" data-i="' + i + '" aria-label="' + esc(t("less")) + '">−</button>' +
        "<output>" + multText(it.mult) + '</output><button type="button" data-step="1" data-i="' + i + '" aria-label="' + esc(t("more")) + '">+</button></div>' +
        '<div class="kh">' + Math.round(kh) + " <small>g</small></div></li>";
    }).join("");
    $("plateTotal").textContent = Math.round(total);
    $("plateEmpty").hidden = plate.length > 0;
    $("plateClear").hidden = plate.length === 0;
  }

  function addToPlate(it) {
    plate.push(it);
    savePlate();
    renderPlate();
  }

  $("plateList").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-step]");
    if (!b) return;
    var i = +b.getAttribute("data-i"), step = +b.getAttribute("data-step");
    var next = plate[i].mult + step * 0.5;
    if (next <= 0) plate.splice(i, 1); else plate[i].mult = Math.min(next, 10);
    savePlate();
    renderPlate();
  });
  $("plateClear").addEventListener("click", function () { plate = []; savePlate(); renderPlate(); });

  /* =========================================================
     Label calculator
     ========================================================= */
  function labelCalc() {
    var per = parse($("lblPer100").value), g = parse($("lblGrams").value);
    var ok = per !== null && g !== null && !isNaN(per) && !isNaN(g) && per <= 100;
    var kh = ok ? per * g / 100 : 0;
    $("lblOut").textContent = fmt(kh, kh < 10 ? 1 : 0);
    $("lblAdd").disabled = !ok || g === 0;
    return { ok: ok, kh: kh, g: g };
  }
  $("lblPer100").addEventListener("input", labelCalc);
  $("lblGrams").addEventListener("input", labelCalc);
  $("lblAdd").addEventListener("click", function () {
    var r = labelCalc();
    if (!r.ok) return;
    addToPlate({ type: "label", g: r.g, sub: $("lblPer100").value + " g / 100 g", kh: Math.round(r.kh * 10) / 10, mult: 1 });
    $("lblPer100").value = ""; $("lblGrams").value = ""; labelCalc();
    $("plate-h").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  /* =========================================================
     Photo estimate (Claude vision, user's own API key)
     ========================================================= */
  var KEY_STORE = "glucose.apikey";
  var photoData = null; // base64 JPEG without prefix
  var photoResult = null;

  function setStatus(html, isError) {
    $("photoStatus").innerHTML = html;
    $("photoStatus").className = isError ? "error" : "note";
  }

  // Downscale to keep the upload small and the request cheap.
  function readPhoto(file) {
    return new Promise(function (resolve, reject) {
      var url = URL.createObjectURL(file);
      var img = new Image();
      img.onload = function () {
        var max = 1280, w = img.naturalWidth, h = img.naturalHeight;
        var s = Math.min(1, max / Math.max(w, h));
        var c = document.createElement("canvas");
        c.width = Math.round(w * s); c.height = Math.round(h * s);
        c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url);
        resolve(c.toDataURL("image/jpeg", 0.85));
      };
      img.onerror = function () { URL.revokeObjectURL(url); reject(new Error("image")); };
      img.src = url;
    });
  }

  function onPhoto(input) {
    var file = input.files && input.files[0];
    input.value = "";
    if (!file) return;
    readPhoto(file).then(function (dataUrl) {
      photoData = dataUrl.split(",")[1];
      $("photoPreview").src = dataUrl;
      $("photoPreview").hidden = false;
      $("photoHint").hidden = false;
      $("photoGo").hidden = false;
      $("photoResult").hidden = true;
      setStatus(load(KEY_STORE) ? "" : esc(t("photoNeedKey")), false);
    }).catch(function () { setStatus(esc(tf("photoFail", { msg: "image" })), true); });
  }
  $("photoCamera").addEventListener("click", function () { $("photoInputCam").click(); });
  $("photoPick").addEventListener("click", function () { $("photoInputPick").click(); });
  $("photoInputCam").addEventListener("change", function () { onPhoto(this); });
  $("photoInputPick").addEventListener("change", function () { onPhoto(this); });

  var SCHEMA = {
    type: "object",
    additionalProperties: false,
    required: ["items", "total_carbs_g", "confidence", "notes"],
    properties: {
      items: {
        type: "array",
        items: {
          type: "object",
          additionalProperties: false,
          required: ["name", "estimated_grams", "carbs_g"],
          properties: {
            name: { type: "string" },
            estimated_grams: { type: "number" },
            carbs_g: { type: "number" }
          }
        }
      },
      total_carbs_g: { type: "number" },
      confidence: { type: "string", enum: ["low", "medium", "high"] },
      notes: { type: "string" }
    }
  };
  var LANG_NAME = { nl: "Dutch", es: "Spanish", en: "English" };

  function estimate() {
    var key = load(KEY_STORE);
    if (!key) {
      setStatus(esc(t("photoNeedKey")), true);
      $("aiSettings").open = true;
      return;
    }
    if (!photoData) return;
    if (navigator.onLine === false) { setStatus(esc(t("photoOffline")), true); return; }

    $("photoGo").disabled = true;
    $("photoResult").hidden = true;
    setStatus('<span class="spinner" aria-hidden="true"></span>' + esc(t("photoBusy")), false);

    var userHint = $("photoHint").value.trim();
    var prompt = "Estimate the food on this photo for carbohydrate counting. Write every name and the notes in " +
      LANG_NAME[lang] + "." + (userHint ? " The person says the food is: \"" + userHint + "\"." : "");

    import("./vendor/anthropic-sdk.js").then(function (mod) {
      var Anthropic = mod.Anthropic;
      var client = new Anthropic({ apiKey: key, dangerouslyAllowBrowser: true });
      return client.beta.messages.create({
        model: "claude-opus-5-5",
        max_tokens: 16000,
        betas: ["server-side-fallback-2026-07-01"],
        fallbacks: "default",
        output_config: { effort: "medium", format: { type: "json_schema", schema: SCHEMA } },
        system:
          "You help a person with diabetes count carbohydrates from a photo of their meal. " +
          "Identify each separate food or drink you can see. For each one, estimate the edible weight in grams " +
          "and its grams of carbohydrate, using typical recipes; the meals are often Dutch or Spanish. " +
          "Use the plate (usually about 26 cm across), cutlery, glasses and hands as size references. " +
          "Count carbohydrates in sauces, breading, bread on the side and sugary drinks. Do not count fibre as carbohydrate. " +
          "If a dish is clearly a shared ración, estimate the whole dish shown. " +
          "total_carbs_g is the sum of the items. confidence reflects how sure you are about the total. " +
          "notes: one or two short sentences on what makes the estimate uncertain or what the person should check. " +
          "If there is no food or drink in the photo, return an empty items list, total 0, confidence low, and say so in notes.",
        messages: [{
          role: "user",
          content: [
            { type: "image", source: { type: "base64", media_type: "image/jpeg", data: photoData } },
            { type: "text", text: prompt }
          ]
        }]
      }).then(function (res) {
        if (res.stop_reason === "refusal") throw { refused: true };
        var text = "";
        res.content.forEach(function (b) { if (b.type === "text") text += b.text; });
        return JSON.parse(text);
      }).catch(function (err) {
        if (err && err.refused) throw err;
        if (err instanceof Anthropic.AuthenticationError || err instanceof Anthropic.PermissionDeniedError) throw { msgKey: "photoAuth" };
        if (err instanceof Anthropic.RateLimitError) throw { msgKey: "photoRate" };
        if (err instanceof Anthropic.APIConnectionError) throw { msgKey: "photoOffline" };
        if (err instanceof Anthropic.APIError) throw { msg: (err.status || "") + " " + (err.error && err.error.error && err.error.error.message || err.message) };
        throw { msg: err && err.message ? err.message : String(err) };
      });
    }).then(showResult).catch(function (e) {
      if (e && e.refused) setStatus(esc(t("photoRefused")), true);
      else if (e && e.msgKey) setStatus(esc(t(e.msgKey)), true);
      else setStatus(esc(tf("photoFail", { msg: e && e.msg ? e.msg : "?" })), true);
    }).then(function () { $("photoGo").disabled = false; });
  }
  $("photoGo").addEventListener("click", estimate);

  function showResult(r) {
    photoResult = r;
    setStatus("", false);
    var box = $("photoResult");
    if (!r.items || !r.items.length) {
      box.innerHTML = '<p class="empty">' + esc(t("photoNoFood")) + (r.notes ? " " + esc(r.notes) : "") + "</p>";
      box.hidden = false;
      return;
    }
    var total = r.items.reduce(function (s, it) { return s + (+it.carbs_g || 0); }, 0);
    box.innerHTML =
      '<span class="conf">' + esc(t("conf")[r.confidence] || r.confidence) + "</span>" +
      '<ul class="list">' + r.items.map(function (it) {
        return '<li style="grid-template-columns:1fr auto"><div class="name"><strong>' + esc(it.name) + "</strong><span>≈ " +
          Math.round(it.estimated_grams) + " " + t("g") + '</span></div><div class="kh">' + Math.round(it.carbs_g) + " <small>" + t("kh") + "</small></div></li>";
      }).join("") + "</ul>" +
      '<div class="plate-total"><strong>' + esc(t("photoTotal")) + '</strong><span class="kh" style="font-size:1.4rem">' + Math.round(total) + " " + esc(t("kh")) + "</span></div>" +
      (r.notes ? '<p class="note">' + esc(r.notes) + "</p>" : "") +
      '<p class="note">' + esc(t("photoCheck")) + "</p>" +
      '<div class="row-actions"><button type="button" class="btn" id="photoAdd">' + esc(t("photoAdd")) + "</button></div>";
    box.hidden = false;
    $("photoAdd").addEventListener("click", function () {
      photoResult.items.forEach(function (it) {
        plate.push({ type: "photo", name: it.name, sub: "≈ " + Math.round(it.estimated_grams) + " g", kh: Math.round(+it.carbs_g || 0), mult: 1 });
      });
      savePlate(); renderPlate();
      box.hidden = true;
      $("plate-h").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function keyStatus(msgKey) {
    $("keyStatus").textContent = t(msgKey || (load(KEY_STORE) ? "keySaved" : "keyNone"));
  }
  $("keySave").addEventListener("click", function () {
    var v = $("apiKey").value.trim();
    if (!/^sk-ant-/.test(v)) { keyStatus("keyBad"); return; }
    store(KEY_STORE, v);
    $("apiKey").value = "";
    keyStatus("keySaved");
  });
  $("keyRemove").addEventListener("click", function () { unstore(KEY_STORE); $("apiKey").value = ""; keyStatus("keyRemoved"); });

  /* =========================================================
     Language
     ========================================================= */
  function setLang(l) {
    // Keep the typed glucose value but re-express it with the new decimal separator.
    var cur = parse((lastSource === "mmol" ? mmolEl : mgEl).value);
    lang = l;
    document.documentElement.lang = l;
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === l));
    });
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = T[l][el.getAttribute("data-i18n")];
      if (typeof v === "string") el.textContent = v;
    });
    $("appTitle").textContent = t("title");
    $("mealSearch").placeholder = t("searchPh");
    $("photoHint").placeholder = t("photoHintPh");
    mmolEl.placeholder = "0" + sep() + "0";
    if (cur !== null && !isNaN(cur)) {
      (lastSource === "mmol" ? mmolEl : mgEl).value = String(cur).replace(".", sep());
    }
    buildGauge();
    buildTable();
    update(lastSource);
    renderMeals();
    renderPlate();
    labelCalc();
    keyStatus();
    if (photoResult && !$("photoResult").hidden) showResult(photoResult);
    store("glucose.lang", l);
  }
  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  /* =========================================================
     Start
     ========================================================= */
  var savedLang = load("glucose.lang");
  if (!T[savedLang]) {
    var nav = (navigator.language || "nl").toLowerCase().slice(0, 2);
    savedLang = T[nav] ? nav : "nl";
  }
  try {
    var last = JSON.parse(load("glucose.last") || "null");
    if (last && last.v != null) {
      lastSource = last.s === "mg" ? "mg" : "mmol";
      (lastSource === "mmol" ? mmolEl : mgEl).value = last.v;
    }
  } catch (e) {}
  setLang(savedLang);
  showTab(load("glucose.tab") === "carb" || location.hash === "#carbs" ? "carb" : "conv");

  // Offline support and install prompt (only where supported, e.g. when hosted on HTTPS).
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }
  var deferred = null;
  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault(); deferred = e; $("install").hidden = false;
  });
  $("installBtn").addEventListener("click", function () {
    if (!deferred) return;
    deferred.prompt();
    deferred.userChoice.finally(function () { deferred = null; $("install").hidden = true; });
  });
})();
