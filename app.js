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
      weight: "Gewicht", plateH: "Mijn bord", kh: "g KH", gCarb: "g koolhydraten", g: "g",
      plateEmpty: "Nog leeg. Zoek hieronder een gerecht en tik op +, of maak een foto.",
      searchH: "Gerecht of voeding zoeken",
      offH: "Supermarktproducten", offGo: "Zoek", scanBtn: "Scan barcode",
      offIntro: "Zoek online in duizenden producten uit Nederlandse en Spaanse supermarkten (Albert Heijn, Jumbo, Lidl, Mercadona, Carrefour…), of scan de barcode op de verpakking.",
      offPh: "Bijv. hagelslag, Mercadona tortilla",
      offBusy: "Zoeken…", offNone: "Geen producten met koolhydraatwaarden gevonden. Probeer een ander woord of een merknaam.",
      offOffline: "Geen internetverbinding. Online zoeken werkt alleen met internet.",
      offFail: "Zoeken lukte niet ({msg}). Probeer het zo opnieuw.",
      offWait: "Even wachten: de productdatabase staat maximaal 10 zoekopdrachten per minuut toe.",
      offPer100: "{kh} g KH per 100 g", offServ: "portie {s}: {kh} g KH",
      offGrams: "Gram", offAddBtn: "Toevoegen", offFound: "{n} producten gevonden",
      offToOnline: "Zoek ‘{q}’ in supermarktproducten ↓",
      scanReading: "Barcode lezen…", scanNone: "Geen barcode gevonden op de foto. Typ het nummer onder de streepjes hieronder in.",
      scanManual: "Je telefoon kan geen barcodes lezen. Typ het nummer onder de streepjes in.",
      codeNotFound: "Product {code} staat niet in de database of heeft geen koolhydraatwaarde.",
      offSource: "Productgegevens: Open Food Facts, een open database die door vrijwilligers wordt bijgehouden. Controleer bij twijfel het etiket.",
      searchPh: "Bijv. stamppot, paella, yoghurt, appel",
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
      photoRate: "Het gratis maximum van Google is even bereikt. Probeer het over een minuut opnieuw, of morgen als het daglimiet op is.",
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
      keyIntro: "Fotoherkenning gebruikt Gemini van Google en is gratis. Maak één keer een gratis sleutel: ga naar aistudio.google.com/apikey, log in met je Google-account, tik op ‘Create API key’ en plak de sleutel hieronder. Er geldt een maximum aantal foto’s per minuut en per dag.",
      keyLink: "Gratis sleutel maken ↗", keySave: "Opslaan", keyRemove: "Verwijderen",
      keySaved: "Sleutel opgeslagen op dit apparaat.", keyRemoved: "Sleutel verwijderd.", keyNone: "Nog geen sleutel ingesteld.",
      keyBad: "Dit lijkt geen volledige sleutel. Kopieer de hele sleutel uit Google AI Studio en plak hem opnieuw.",
      keyPrivacy: "De sleutel blijft alleen op dit apparaat. Foto’s gaan rechtstreeks naar Google en worden niet door deze app bewaard. Let op: bij gratis gebruik mag Google foto’s gebruiken om zijn diensten te verbeteren."
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
      weight: "Peso", plateH: "Mi plato", kh: "g HC", gCarb: "g de carbohidratos", g: "g",
      plateEmpty: "Vacío. Busca un plato abajo y toca +, o haz una foto.",
      searchH: "Buscar plato o alimento",
      offH: "Productos de supermercado", offGo: "Buscar", scanBtn: "Escanear código",
      offIntro: "Busca en miles de productos de supermercados de España y Países Bajos (Mercadona, Carrefour, Lidl, Albert Heijn, Jumbo…) o escanea el código de barras del envase.",
      offPh: "Ej. tortilla Mercadona, galletas",
      offBusy: "Buscando…", offNone: "No hay productos con carbohidratos. Prueba otra palabra o una marca.",
      offOffline: "Sin conexión. La búsqueda en línea necesita internet.",
      offFail: "La búsqueda falló ({msg}). Inténtalo de nuevo.",
      offWait: "Espera un momento: la base de datos permite como máximo 10 búsquedas por minuto.",
      offPer100: "{kh} g HC por 100 g", offServ: "ración {s}: {kh} g HC",
      offGrams: "Gramos", offAddBtn: "Añadir", offFound: "{n} productos encontrados",
      offToOnline: "Buscar ‘{q}’ en productos de supermercado ↓",
      scanReading: "Leyendo código…", scanNone: "No se encontró un código en la foto. Escribe el número de debajo de las barras.",
      scanManual: "Tu móvil no puede leer códigos. Escribe el número de debajo de las barras.",
      codeNotFound: "El producto {code} no está en la base de datos o no tiene carbohidratos.",
      offSource: "Datos de productos: Open Food Facts, una base de datos abierta mantenida por voluntarios. Si dudas, mira la etiqueta.",
      searchPh: "Ej. paella, tortilla, stamppot",
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
      photoRate: "Se alcanzó el límite gratuito de Google. Inténtalo en un minuto, o mañana si se agotó el límite diario.",
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
      keyIntro: "El reconocimiento de fotos usa Gemini de Google y es gratis. Crea una clave gratuita una vez: ve a aistudio.google.com/apikey, entra con tu cuenta de Google, toca ‘Create API key’ y pega la clave abajo. Hay un máximo de fotos por minuto y por día.",
      keyLink: "Crear clave gratis ↗", keySave: "Guardar", keyRemove: "Eliminar",
      keySaved: "Clave guardada en este dispositivo.", keyRemoved: "Clave eliminada.", keyNone: "Aún no hay clave.",
      keyBad: "No parece una clave completa. Copia toda la clave de Google AI Studio y pégala de nuevo.",
      keyPrivacy: "La clave se queda solo en este dispositivo. Las fotos se envían directamente a Google y esta app no las guarda. Ojo: con el uso gratuito, Google puede usar las fotos para mejorar sus servicios."
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
      weight: "Weight", plateH: "My plate", kh: "g carbs", gCarb: "g carbs", g: "g",
      plateEmpty: "Empty. Search for a dish below and tap +, or take a photo.",
      searchH: "Find a dish or food",
      offH: "Supermarket products", offGo: "Search", scanBtn: "Scan barcode",
      offIntro: "Search thousands of products from Dutch and Spanish supermarkets (Albert Heijn, Jumbo, Lidl, Mercadona, Carrefour…), or scan the barcode on the pack.",
      offPh: "E.g. hagelslag, Mercadona tortilla",
      offBusy: "Searching…", offNone: "No products with carb values found. Try another word or a brand name.",
      offOffline: "No internet connection. Online search needs internet.",
      offFail: "Search failed ({msg}). Try again shortly.",
      offWait: "Please wait: the product database allows at most 10 searches per minute.",
      offPer100: "{kh} g carbs per 100 g", offServ: "serving {s}: {kh} g carbs",
      offGrams: "Grams", offAddBtn: "Add", offFound: "{n} products found",
      offToOnline: "Search ‘{q}’ in supermarket products ↓",
      scanReading: "Reading barcode…", scanNone: "No barcode found in the photo. Type the number under the bars below.",
      scanManual: "Your phone can’t read barcodes. Type the number under the bars.",
      codeNotFound: "Product {code} is not in the database or has no carb value.",
      offSource: "Product data: Open Food Facts, an open database maintained by volunteers. Check the label when in doubt.",
      searchPh: "E.g. paella, stamppot, churros",
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
      photoRate: "Google’s free limit has been reached. Try again in a minute, or tomorrow if the daily limit is used up.",
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
      keyIntro: "Photo recognition uses Google Gemini and is free. Create a free key once: go to aistudio.google.com/apikey, sign in with your Google account, tap ‘Create API key’ and paste the key below. There is a maximum number of photos per minute and per day.",
      keyLink: "Create free key ↗", keySave: "Save", keyRemove: "Remove",
      keySaved: "Key saved on this device.", keyRemoved: "Key removed.", keyNone: "No key set yet.",
      keyBad: "This does not look like a complete key. Copy the whole key from Google AI Studio and paste it again.",
      keyPrivacy: "The key stays on this device only. Photos go straight to Google and are not stored by this app. Note: on the free tier Google may use photos to improve its services."
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
    function find(ws) {
      return MEALS.filter(function (m) {
        if (country !== "all" && m.c !== country && m.c !== "x") return false;
        return ws.every(function (w) { return m.idx.indexOf(w) !== -1; });
      });
    }
    var hits = find(words);
    // Nothing found: allow small spelling differences ("tomato frito", "yogurt") by matching word stems.
    if (!hits.length && words.length) {
      hits = find(words.map(function (w) { return w.length > 4 ? w.slice(0, w.length - 2) : w; }));
    }
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
    var raw = $("mealSearch").value.trim();
    $("mealToOnline").hidden = raw.length < 2;
    $("mealToOnline").textContent = tf("offToOnline", { q: raw });
  }
  $("mealToOnline").addEventListener("click", function () {
    $("offQuery").value = $("mealSearch").value.trim();
    $("off-h").scrollIntoView({ behavior: "smooth", block: "start" });
    offSearch();
  });

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
    if (it.type === "photo" && it.g != null) return t("weight") + " ≈ " + it.g + " g";
    if (it.type === "product") return [it.brand, fmt(it.g, 0) + " g"].filter(Boolean).join(" · ");
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
     Supermarket products (Open Food Facts, free and open data)
     ========================================================= */
  var OFF = "https://world.openfoodfacts.org";
  var OFF_FIELDS = "code,product_name,product_name_nl,product_name_es,product_name_en,brands,quantity,serving_size,serving_quantity,nutriments";
  var OFF_COUNTRY = { nl: "netherlands", es: "spain" };
  var offItems = [], offTimes = [];

  function offStatus(text, isError) {
    $("offStatus").innerHTML = text;
    $("offStatus").className = isError ? "error" : "note";
  }
  function num(v) { v = parseFloat(v); return isFinite(v) ? v : null; }
  function offProduct(p) {
    var n = p.nutriments || {};
    var per100 = num(n.carbohydrates_100g);
    if (per100 === null || per100 > 100) return null;
    var name = p["product_name_" + lang] || p.product_name || p.product_name_nl || p.product_name_es || p.product_name_en;
    if (!name) return null;
    return {
      code: p.code, name: String(name).trim(), brand: String(p.brands || "").split(",")[0].trim(),
      qty: p.quantity || "", per100: per100,
      serving: p.serving_size || "", servingG: num(p.serving_quantity)
    };
  }
  // The database allows 10 search requests per minute per user.
  function offAllowed() {
    var now = Date.now();
    offTimes = offTimes.filter(function (x) { return now - x < 60000; });
    if (offTimes.length >= 10) return false;
    offTimes.push(now);
    return true;
  }
  function offFetch(url) {
    return fetch(url, { headers: { Accept: "application/json" } }).then(function (r) {
      if (r.status === 429 || r.status === 503) throw { msgKey: "offWait" };
      if (!r.ok) throw { msg: "HTTP " + r.status };
      return r.json();
    });
  }
  function offSearch() {
    var q = $("offQuery").value.trim();
    if (q.length < 2) return;
    if (navigator.onLine === false) { offStatus(esc(t("offOffline")), true); return; }
    var countries = country === "all" ? ["nl", "es"] : [country];
    if (!offAllowed() || (countries.length > 1 && !offAllowed())) { offStatus(esc(t("offWait")), true); return; }
    offStatus('<span class="spinner" aria-hidden="true"></span>' + esc(t("offBusy")), false);
    $("offGo").disabled = true;
    Promise.all(countries.map(function (c) {
      return offFetch(OFF + "/cgi/search.pl?action=process&json=1&search_simple=1&page_size=24&sort_by=unique_scans_n" +
        "&search_terms=" + encodeURIComponent(q) + "&fields=" + OFF_FIELDS +
        "&tagtype_0=countries&tag_contains_0=contains&tag_0=" + OFF_COUNTRY[c]);
    })).then(function (results) {
      // Interleave the countries and drop duplicates and products without carb values.
      var seen = {}, out = [], lists = results.map(function (r) { return (r.products || []).map(offProduct).filter(Boolean); });
      for (var i = 0; i < 24; i++) {
        lists.forEach(function (l) { var p = l[i]; if (p && !seen[p.code]) { seen[p.code] = 1; out.push(p); } });
      }
      offItems = out;
      renderOff();
      offStatus(out.length ? esc(tf("offFound", { n: out.length })) : esc(t("offNone")), !out.length);
    }).catch(offError).then(function () { $("offGo").disabled = false; });
  }
  function offError(e) {
    if (e && e.msgKey) offStatus(esc(t(e.msgKey)), true);
    else if (e instanceof TypeError) offStatus(esc(t("offOffline")), true);
    else offStatus(esc(tf("offFail", { msg: e && e.msg ? e.msg : String(e && e.message || e) })), true);
  }
  function offLookup(code) {
    code = String(code).replace(/\D/g, "");
    if (code.length < 6) return;
    if (navigator.onLine === false) { offStatus(esc(t("offOffline")), true); return; }
    offStatus('<span class="spinner" aria-hidden="true"></span>' + esc(t("offBusy")), false);
    offFetch(OFF + "/api/v2/product/" + code + "?fields=" + OFF_FIELDS).then(function (r) {
      var p = r && r.product ? offProduct(Object.assign({ code: code }, r.product)) : null;
      offItems = p ? [p] : [];
      renderOff(p ? 0 : -1);
      offStatus(p ? "" : esc(tf("codeNotFound", { code: code })), !p);
    }).catch(function (e) {
      if (e && e.msg === "HTTP 404") offStatus(esc(tf("codeNotFound", { code: code })), true); else offError(e);
    });
  }
  function fmtKh(x) { return fmt(x, x < 10 ? 1 : 0); }
  function renderOff(openIdx) {
    $("offList").innerHTML = offItems.map(function (p, i) {
      var sub = [p.brand, p.qty].filter(Boolean).join(" · ");
      var line = tf("offPer100", { kh: fmtKh(p.per100) });
      if (p.servingG) line += " · " + tf("offServ", { s: p.serving || p.servingG + " g", kh: fmtKh(p.per100 * p.servingG / 100) });
      var g = p.servingG || 100;
      return '<li><div class="name"><strong>' + esc(p.name) + "</strong><span>" + esc(sub) + "</span><span>" + esc(line) + "</span></div>" +
        '<div class="kh">' + fmtKh(p.per100) + " <small>/100 g</small></div>" +
        '<button type="button" class="add" data-off="' + i + '" aria-label="' + esc(tf("addTo", { name: p.name })) + '">+</button>' +
        '<div class="off-add" data-row="' + i + '"' + (openIdx === i ? "" : " hidden") + '>' +
        '<label for="offG' + i + '" class="note" style="margin:0">' + esc(t("offGrams")) + "</label>" +
        '<input class="textin" id="offG' + i + '" type="text" inputmode="decimal" value="' + g + '">' +
        '<output class="kh" id="offK' + i + '">' + fmtKh(p.per100 * g / 100) + " " + esc(t("kh")) + "</output>" +
        '<button type="button" class="btn" data-offadd="' + i + '">' + esc(t("offAddBtn")) + "</button></div></li>";
    }).join("");
  }
  $("offForm").addEventListener("submit", function (e) { e.preventDefault(); $("offQuery").blur(); offSearch(); });
  $("codeForm").addEventListener("submit", function (e) { e.preventDefault(); offLookup($("codeInput").value); });
  $("offList").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-off]");
    if (b) {
      var row = $("offList").querySelector('[data-row="' + b.getAttribute("data-off") + '"]');
      row.hidden = !row.hidden;
      if (!row.hidden) row.querySelector("input").focus();
      return;
    }
    var a = e.target.closest("button[data-offadd]");
    if (!a) return;
    var i = +a.getAttribute("data-offadd"), p = offItems[i], g = parse($("offG" + i).value);
    if (g === null || isNaN(g) || g <= 0) return;
    addToPlate({ type: "product", name: p.name, brand: p.brand, g: g, per100: p.per100, kh: Math.round(p.per100 * g) / 100, mult: 1 });
    a.textContent = "✓";
    setTimeout(function () { renderOff(); }, 700);
  });
  $("offList").addEventListener("input", function (e) {
    var m = /^offG(\d+)$/.exec(e.target.id);
    if (!m) return;
    var p = offItems[+m[1]], g = parse(e.target.value);
    $("offK" + m[1]).textContent = (g === null || isNaN(g) ? "–" : fmtKh(p.per100 * g / 100)) + " " + t("kh");
  });

  // Barcode: read it from a photo where the phone supports it, otherwise type the number.
  var detector = null;
  try {
    if ("BarcodeDetector" in window) detector = new window.BarcodeDetector({ formats: ["ean_13", "ean_8", "upc_a", "upc_e"] });
  } catch (e) { detector = null; }
  $("scanBtn").addEventListener("click", function () {
    if (!detector) {
      $("codeForm").hidden = false;
      offStatus(esc(t("scanManual")), false);
      $("codeInput").focus();
      return;
    }
    $("scanInput").click();
  });
  $("scanInput").addEventListener("change", function () {
    var file = this.files && this.files[0];
    this.value = "";
    if (!file) return;
    offStatus('<span class="spinner" aria-hidden="true"></span>' + esc(t("scanReading")), false);
    createImageBitmap(file).then(function (bmp) { return detector.detect(bmp); }).then(function (codes) {
      if (codes && codes.length) {
        $("codeInput").value = codes[0].rawValue;
        offLookup(codes[0].rawValue);
      } else {
        $("codeForm").hidden = false;
        offStatus(esc(t("scanNone")), true);
      }
    }).catch(function () { $("codeForm").hidden = false; offStatus(esc(t("scanNone")), true); });
  });

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
     Photo estimate (Google Gemini, user's own free API key)
     ========================================================= */
  var KEY_STORE = "glucose.geminikey";
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
    required: ["items", "total_carbs_g", "confidence", "notes"],
    properties: {
      items: {
        type: "array",
        items: {
          type: "object",
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
  var SYSTEM =
    "You help a person with diabetes count carbohydrates from a photo of their meal. " +
    "Identify each separate food or drink you can see. For each one, estimate the edible weight in grams " +
    "and its grams of carbohydrate, using typical recipes; the meals are often Dutch or Spanish. " +
    "Use the plate (usually about 26 cm across), cutlery, glasses and hands as size references. " +
    "Count carbohydrates in sauces, breading, bread on the side and sugary drinks. Do not count fibre as carbohydrate. " +
    "If a dish is clearly a shared ración, estimate the whole dish shown. " +
    "total_carbs_g is the sum of the items. confidence reflects how sure you are about the total. " +
    "notes: one or two short sentences on what makes the estimate uncertain or what the person should check. " +
    "If there is no food or drink in the photo, return an empty items list, total 0, confidence low, and say so in notes.";

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

    import("./vendor/google-genai.js").then(function (mod) {
      var ai = new mod.GoogleGenAI({ apiKey: key });
      return ai.models.generateContent({
        model: "gemini-flash-latest",
        contents: [{
          role: "user",
          parts: [
            { inlineData: { mimeType: "image/jpeg", data: photoData } },
            { text: prompt }
          ]
        }],
        config: {
          responseMimeType: "application/json",
          responseJsonSchema: SCHEMA,
          systemInstruction: SYSTEM
        }
      }).then(function (res) {
        var cand = res.candidates && res.candidates[0];
        if ((res.promptFeedback && res.promptFeedback.blockReason) || (cand && cand.finishReason === "SAFETY")) throw { refused: true };
        return JSON.parse(res.text || "");
      }).catch(function (err) {
        if (err && (err.refused || err.msgKey)) throw err;
        if (err instanceof mod.ApiError) {
          var m = String(err.message || "");
          if (err.status === 401 || err.status === 403 || (err.status === 400 && /api key/i.test(m))) throw { msgKey: "photoAuth" };
          if (err.status === 429) throw { msgKey: "photoRate" };
          throw { msg: err.status + " " + m.slice(0, 160) };
        }
        if (err instanceof TypeError) throw { msgKey: "photoOffline" };
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
        return '<li style="grid-template-columns:1fr auto"><div class="name"><strong>' + esc(it.name) + "</strong><span>" + esc(t("weight")) + " ≈ " +
          Math.round(it.estimated_grams) + " " + t("g") + '</span></div><div class="kh">' + Math.round(it.carbs_g) + " <small>" + t("kh") + "</small></div></li>";
      }).join("") + "</ul>" +
      '<div class="plate-total"><strong>' + esc(t("photoTotal")) + '</strong><span class="kh" style="font-size:1.4rem">' + Math.round(total) + " " + esc(t("kh")) + "</span></div>" +
      (r.notes ? '<p class="note">' + esc(r.notes) + "</p>" : "") +
      '<p class="note">' + esc(t("photoCheck")) + "</p>" +
      '<div class="row-actions"><button type="button" class="btn" id="photoAdd">' + esc(t("photoAdd")) + "</button></div>";
    box.hidden = false;
    $("photoAdd").addEventListener("click", function () {
      photoResult.items.forEach(function (it) {
        plate.push({ type: "photo", name: it.name, g: Math.round(it.estimated_grams), kh: Math.round(+it.carbs_g || 0), mult: 1 });
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
    // Google keys come in several formats (AIza…, AQ.…); only check it looks like one pasted key.
    var v = $("apiKey").value.replace(/\s+/g, "");
    if (!/^[\w.\-]{20,}$/.test(v)) { keyStatus("keyBad"); return; }
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
    $("offQuery").placeholder = t("offPh");
    renderOff();
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
  if ("serviceWorker" in navigator && window.isSecureContext) {
    // When a new version takes over, reload once so the new files are used straight away.
    var hadController = !!navigator.serviceWorker.controller, reloaded = false;
    navigator.serviceWorker.addEventListener("controllerchange", function () {
      if (hadController && !reloaded) { reloaded = true; location.reload(); }
    });
    navigator.serviceWorker.register("sw.js", { updateViaCache: "none" }).catch(function () {});
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
