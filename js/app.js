/* app.js
   Le studio de lecture — toute la logique
   Voix, chronomètre, jeux, étoiles, verrous. C'est ici qu'on modifie
   le comportement de la page. */

(function(){
  "use strict";

  /* ============ données : mots outils ============ */
  function O(badge, hue, list){
    return {kind:"out", badge:badge, hue:hue, target:[], rows:[list], rev:false,
            id:"o-" + badge.toLowerCase().replace(/[^a-z0-9]+/g,"")};
  }

  var OUT = [
    O("Série 1", 150, ["le","la","les","un","une","des","du","et","est","il"]),
    O("Série 2", 170, ["elle","je","tu","on","nous","vous","mon","ma","mes","son"]),
    O("Série 3", 190, ["dans","sur","sous","avec","pour","chez","par","sans","vers","entre"]),
    O("Série 4", 255, ["qui","que","où","quand","comme","mais","ou","alors","donc","puis"]),
    O("Série 5", 300, ["c'est","il y a","voilà","très","aussi","bien","plus","encore","trop","beaucoup"]),
    O("Série 6", 25,  ["tout","toute","tous","rien","jamais","toujours","souvent","enfin","parce que","pourquoi"])
  ];

  var SECTIONS = {syl:SYL, mot:MOT, out:OUT};

  /* ============ images ============ */
  var PICS = {
    "lilas":"🌸","fée":"🧚","fil":"🧵","chat":"🐱","fiche":"📄",
    "as":"🃏","os":"🦴","sofa":"🛋️","affiche":"📋","lame":"🔪","mamie":"👵","lama":"🦙",
    "ami":"👫","miche":"🍞","massue":"🏏","rame":"🚣","ruche":"🐝","mare":"💧","char":"🚜",
    "lune":"🌙","âne":"🫏","niche":"🏠","narine":"👃","numéro":"🔢","renard":"🦊","animal":"🐾",
    "ananas":"🍍","machine":"⚙️","chine":"🏯","marine":"⚓","arche":"🏛️","vache":"🐄","fève":"🫘",
    "vue":"👁️","vélo":"🚲","cheval":"🐴","ville":"🏙️","navire":"🚢","olive":"🫒","fièvre":"🤒",
    "vallée":"🏞️","jus":"🧃","javelot":"🎯","jumelle":"🔭","jura":"⛰️","jars":"🦢",
    "zoo":"🦁","lézard":"🦎","zéro":"0️⃣","rizière":"🌾","jazz":"🎷",
    "azur":"💙","bazar":"🛍️","sève":"🍯","pavé":"🧱","pie":"🐦","pizza":"🍕",
    "jupe":"👗","pot":"🪴","pomme":"🍎","épée":"⚔️","purée":"🥣","poche":"👝","écharpe":"🧣",
    "alpes":"🏔️","pyjama":"🛌","puma":"🐆","palme":"🤿","panière":"🧺","tache":"🎨","tasse":"☕",
    "tapis":"🧶","moto":"🏍️","tortue":"🐢","pâté":"🥫","patte":"🐾","été":"☀️","tajine":"🍲",
    "métal":"🔩","pétale":"🌺","télé":"📺","téléfilm":"🎬","tomate":"🍅","torche":"🔦",
    "tulipe":"🌷","otite":"👂","cave":"🕳️","café":"☕","cacao":"🍫","canapé":"🛋️","caméra":"🎥",
    "car":"🚌","sac":"🎒","école":"🏫","cactus":"🌵","cocotte":"🍲","comète":"☄️","costume":"🤵",
    "côte":"🏖️","culotte":"🩲","biche":"🦌","balle":"⚽","banane":"🍌","bulle":"🫧","botte":"👢",
    "bus":"🚌","bébé":"👶","lavabo":"🚰","robot":"🤖","bol":"🥣","bécasse":"🐦","bocal":"🫙",
    "bob":"🧢","boléro":"💃","buche":"🪵","dé":"🎲","date":"📅","radis":"🥬","dos":"🧍",
    "balade":"🚶","bolide":"🏎️","dame":"👩","domino":"🎲","gare":"🚉","gomme":"🧽","cargo":"🚢",
    "grenadine":"🍹","garde":"💂","gala":"🎉","galerie":"🖼️","galop":"🐎","gamme":"🎹",
    "gazinière":"🔥","hache":"🪓","hutte":"🛖","habit":"👕","thé":"🍵",
    "haricot":"🫛","hamac":"🏝️","héros":"🦸","homme":"👨","hippopotame":"🦛",
    "hélicoptère":"🚁","hôpital":"🏥","halte":"🛑","arme":"🗡️","zone":"🗺️","part":"🍰",
    "talus":"⛰️","hotte":"🎅","bosse":"🐫","jachère":"🌾","nasse":"🪤",
    "chasse":"🏹","cuisse":"🍗","bâche":"⛺","pulpe":"🧃","tôle":"🪣","java":"💃","cafétéria":"🍽️","débarcadère":"⛴️","durée":"⏱️","alizé":"🌬️","azyme":"🫓","allo":"📞","lit":"🛏️","vol":"✈️","or":"🥇","russe":"🪆","culture":"📚","gabarit":"📐","babiole":"🎀","gag":"🤡","masse":"🔨","rafale":"🌬️","chimie":"⚗️","file":"🧵","zèle":"🏅","zozo":"🤪","apache":"🪶","côté":"↔️","joli":"🌸","riche":"💰","rare":"💎","gros":"🐘","grosse":"🐘","grave":"🎻","rapide":"🏃","vide":"🫙","sale":"🧼","vite":"⚡","nu":"🦶","mal":"🤕","assis":"🪑","ravi":"😄","ravie":"😄","fâché":"😠","affolé":"😨","horrifié":"😱","caché":"🙈","gâché":"💔","doré":"✨","dehors":"🚪","parmi":"👥","lave":"🧼","mâche":"😋","casse":"💥","parle":"💬","dors":"😴","lèche":"👅","rigole":"😂","recule":"⬅️","galope":"🐎","hurle":"😱","vomit":"🤮","remue":"🥄","arrache":"✊","mord":"🦷","vole":"🕊️","avale":"😮","lève":"⬆️","regarde":"👀","garde":"🛡️","punit":"☝️","mérite":"🏆","répare":"🔧","évite":"🙅","apporte":"🎁","portes":"🎒","accroche":"🪝","rabote":"🪚","butine":"🐝","obéit":"🙇","bave":"💧","hérite":"📜","allume":"💡","filme":"🎬","râle":"😤","rumine":"🐄","ramone":"🧹","amarre":"⚓","barre":"🚧","gobe":"🐸","grelotte":"🥶","cultive":"🌱","palpe":"🤏","pâlir":"😶","salit":"🫧","fuit":"🏃","dit":"🗣️","chavire":"⛵","déborde":"🌊","démarre":"🔑","dévore":"🍽️","aborde":"🤝","s'échappe":"💨","début":"🚦","habitude":"🔁","difficulté":"🧗","débarras":"📦"
  };
  var ALLPICS = Object.keys(PICS).map(function(k){ return PICS[k]; });

  function picEl(emo, cls, word){
    var s = document.createElement("span");
    s.className = cls || "pic";
    var raw = word ? String(word).toLowerCase().replace(/[?!.,]/g,"").trim() : null;
    var key = word ? bareWord(word) : null;
    if (raw && FPIC[raw]) s.innerHTML = FPIC[raw];        // dépend de la phrase
    else if (key && WPIC[key]) s.innerHTML = WPIC[key];   // pictogramme de classe
    else if (emo && ICONS[emo]) s.innerHTML = ICONS[emo]; // dessin de secours
    else s.textContent = emo || "";
    return s;
  }

  function bareWord(txt){
    var t = String(txt).toLowerCase().replace(/[?!.,]/g,"").trim();
    return t.replace(/^(le |la |les |un |une |du |des |l'|d'|il |elle |je |tu |ma |ta |à |au )/,"").trim();
  }

  function picOf(txt){
    var raw = String(txt).toLowerCase().replace(/[?!.,]/g,"").trim();
    if (FPIC[raw]) return raw;              // la phrase a son propre dessin
    return PICS[bareWord(txt)] || (WPIC[bareWord(txt)] ? bareWord(txt) : "");
  }

  /* ============ petits outils ============ */

  function countWords(expr){
    var parts = expr.replace(/[?!.,]/g," ").split(/\s+/).filter(function(x){ return x.length; });
    var n = parts.length;
    parts.forEach(function(p){ n += (p.match(/['’]/g) || []).length; });
    return n;
  }

  function highlight(text, targets){
    if (!targets || !targets.length) return document.createTextNode(text);
    var sorted = targets.slice().sort(function(a,b){ return b.length - a.length; });
    var frag = document.createDocumentFragment(), low = text.toLowerCase(), i = 0;
    while (i < text.length){
      var hit = null;
      for (var t = 0; t < sorted.length; t++){ if (low.startsWith(sorted[t], i)){ hit = sorted[t]; break; } }
      if (hit){
        var s = document.createElement("span");
        s.className = "hi"; s.textContent = text.substr(i, hit.length);
        frag.appendChild(s); i += hit.length;
      } else { frag.appendChild(document.createTextNode(text[i])); i++; }
    }
    return frag;
  }

  function shuffle(a){
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--){ var j = Math.floor(Math.random()*(i+1)), t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  /* ---- la voix ----
     Syllabes  → son pré-enregistré (SND), prononcé par règles.
     Mots réels → voix du navigateur, bien plus naturelle.                */

  var frVoice = null;
  function pickVoice(){
    try {
      var vs = window.speechSynthesis.getVoices() || [];
      for (var i = 0; i < vs.length; i++){ if (/^fr/i.test(vs[i].lang)){ frVoice = vs[i]; break; } }
    } catch (e) {}
  }
  try { pickVoice(); if (window.speechSynthesis) window.speechSynthesis.onvoiceschanged = pickVoice; } catch (e) {}

  var primed = false;
  function prime(){
    ensureCtx();
    if (primed || !window.speechSynthesis) return;
    try { var u = new SpeechSynthesisUtterance(" "); u.volume = 0; window.speechSynthesis.speak(u); primed = true; } catch (e) {}
  }

  function ttsSay(text, done){
    try {
      if (!window.speechSynthesis){ if (done) done(); return; }
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = "fr-FR"; u.rate = 0.8;
      if (frVoice) u.voice = frVoice;
      if (done){ u.onend = done; u.onerror = done; }
      window.speechSynthesis.speak(u);
    } catch (e) { if (done) done(); }
  }

  /* Lecture par Web Audio : l'élément <audio> est capricieux sur mobile
     (politique d'autoplay, data-URI). On décode une fois, puis on joue.
     Et surtout : si le son enregistré échoue, on NE retombe JAMAIS sur la
     voix du navigateur, qui épellerait « lé » en « èl-é ».              */

  var AC = window.AudioContext || window.webkitAudioContext;
  var actx = null, bufs = {}, srcNode = null;

  function ensureCtx(){
    try {
      if (!actx && AC) actx = new AC();
      if (actx && actx.state === "suspended") actx.resume();
    } catch (e) {}
    return actx;
  }

  function b64buf(b64){
    var bin = atob(b64), n = bin.length, u = new Uint8Array(n);
    for (var i = 0; i < n; i++) u[i] = bin.charCodeAt(i);
    return u.buffer;
  }

  function getBuf(key, cb){
    if (bufs[key]){ cb(bufs[key]); return; }
    var ctx = ensureCtx();
    if (!ctx || !SND[key]){ cb(null); return; }
    try {
      var p = ctx.decodeAudioData(b64buf(SND[key]),
        function(b){ bufs[key] = b; cb(b); },
        function(){ cb(null); });
      if (p && p.then) p.then(function(b){ if (b && !bufs[key]){ bufs[key] = b; cb(b); } }).catch(function(){});
    } catch (e) { cb(null); }
  }

  function preload(list){
    (list || []).slice(0, 60).forEach(function(w){
      var k = String(w).toLowerCase().trim();
      if (SND[k] && !bufs[k]) getBuf(k, function(){});
    });
  }

  function playBuf(b, done){
    var ctx = ensureCtx();
    if (!ctx){ if (done) done(); return; }
    try { if (srcNode){ srcNode.onended = null; srcNode.stop(); } } catch (e) {}
    try {
      var s = ctx.createBufferSource();
      s.buffer = b; s.connect(ctx.destination);
      s.onended = function(){ if (done) done(); };
      srcNode = s; s.start(0);
    } catch (e) { if (done) done(); }
  }

  function say(text, done){
    var key = String(text || "").toLowerCase().trim();
    // DIRE passe avant tout : ces syllabes-là ont un vrai mot français de même
    // son, donc la voix de l'appareil les dit mieux que n'importe quel
    // enregistrement. Même s'il reste un son en mémoire, on ne le joue pas.
    if (DIRE[key]){ ttsSay(DIRE[key], done); return; }
    if (!SND[key]){ ttsSay(text, done); return; }      // vrai mot : voix de l'appareil
    // Par défaut la voix de l'appareil, qui est plus agréable. Mais pour les
    // syllabes repérées à l'oreille — celles qu'elle épelle (« ol » → « o-elle »)
    // — on prend le son enregistré, qui ne se trompe jamais.
    if (!EPELE[key]){ ttsSay(sylText(key), done); return; }
    try { window.speechSynthesis.cancel(); } catch (e) {}
    getBuf(key, function(b){
      if (b){ playBuf(b, done); return; }
      try {                                            // secours : <audio>, jamais la voix
        var a = new Audio("data:audio/mpeg;base64," + SND[key]);
        a.onended = function(){ if (done) done(); };
        a.onerror = function(){ if (done) done(); };
        var pr = a.play();
        if (pr && pr.catch) pr.catch(function(){ if (done) done(); });
      } catch (e) { if (done) done(); }
    });
  }

  /* ---- deux voix ----
     Là où l'appareil a une vraie voix française, on l'utilise : elle est
     bien plus agréable. Mais elle épelle les syllabes inventées, alors on
     lui donne une orthographe qu'elle sait lire (vérifié à l'oreille) :
         ly → li      él → elle      fe → feu
     Là où il n'y a pas de voix française (beaucoup de téléphones), on garde
     les syllabes pré-enregistrées : moche, mais juste.                    */

  var EPELE = ("ach af aisir as asi cu eil emba fli fo gea gni gno gnoi goi ien invi " +
    "ir join ko lo maju oin ol omphe osi oyau oyou pha roin toin tonnel ul " +
    "uyé yaou éd éj ép")
    .split(" ").reduce(function(o,w){ o[w]=1; return o; }, {});

  var REALW = ("la le les il ils un une des du de ce se ne me te je que ma ta sa mes tes ses " +
    "si ni ri vu lu su nu pu bu tu on an en or os as es et ou au eau oh ah y gym " +
    "vol bol col sol mol fil nil tir dur sur mur pur car par bar mer tar " +
    "jour tour pour four cour roi loi foi moi toi soi noir voir soir " +
    "feu peu jeu deux neuf leur fleur peur pain main bain train plein frein " +
    "loin coin soin point beau veau peau seau chaud sans dans vent dent gant grand " +
    "thé riz lit nid ami bus ill ail eil euil ouil").split(" ")
    .reduce(function(o,w){ o[w] = 1; return o; }, {});

  /* Quelques syllabes que la voix de l'appareil épelle. On lui écrit
     autrement ce qu'elle doit dire : la consonne doublée ou le e muet
     suffisent à en faire un mot qu'elle sait lire (ob → obe, comme robe).
     On garde ainsi la belle voix, sans jamais entendre « o-bé ».        */
  var DIRE = {
    "ab":"abe", "ac":"aque", "ag":"ague", "aj":"age", "boi":"bois",
    "bri":"brie", "ca":"ka", "cé":"ces", "deu":"deux", "doi":"dois",
    "eize":"aise", "emb":"embe", "ic":"ique", "ice":"isse", "ich":"iche",
    "ig":"igue", "ip":"ipe", "iv":"ive", "lan":"lent", "lè":"lait",
    "nar":"narre", "nê":"naît", "ob":"obe", "och":"oche", "ot":"otte",
    "oup":"oupe", "ous":"ousse", "out":"oute", "pai":"paie", "per":"père",
    "pil":"pile", "poi":"pois", "poir":"poire", "rei":"raie", "teau":"tôt",
    "uf":"uffe", "ve":"veu", "veu":"veut", "vê":"vais", "èb":"èbe"
  };

  function sylText(s){
    s = String(s || "").toLowerCase().trim();
    if (DIRE[s]) return DIRE[s];
    if (REALW[s] || s.length > 4 || /[\s']/.test(s)) return s;
    var t = s.replace(/y/g, "i");                       // ly → li
    if (REALW[t]) return t;
    if (/^[a-zçñ]{1,2}e$/.test(t)) return t + "u";      // fe → feu, che → cheu
    var m = t.match(/^(.*)([éè])([bdfglmnprstvz])$/);   // él → elle
    if (m){
      var D = {b:"be",d:"de",f:"ffe",g:"gue",l:"lle",m:"mme",n:"nne",
               p:"pe",r:"rre",s:"sse",t:"tte",v:"ve",z:"ze"};
      return m[1] + "e" + D[m[3]];
    }
    var k = t.match(/^(.*)([éè])c$/);                   // éc → èque
    if (k) return k[1] + "èque";
    return t;
  }

  var useTTS = false;

  function hasFr(){
    try {
      var vs = window.speechSynthesis.getVoices() || [];
      for (var i = 0; i < vs.length; i++) if (/^fr/i.test(vs[i].lang)) return true;
    } catch (e) {}
    return false;
  }

  function initVoice(){
    pickVoice();
    useTTS = hasFr();        // la voix de l'appareil dès qu'il parle français
  }
  try {
    initVoice();
    if (window.speechSynthesis) window.speechSynthesis.addEventListener("voiceschanged", initVoice);
  } catch (e) {}

  /* ---- mémoire ---- */
  var KEY = "studio-lecture-v3";
  function prog(){ try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function saveProg(p){ try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) {} }
  function markDone(id, what, value){
    var p = prog(); p[id] = p[id] || {};
    if (what === "best"){ if (!(p[id].best > value)) p[id].best = value; }
    else p[id][what] = 1;
    saveProg(p); refreshStars();
  }
  function starsOf(id){
    var r = prog()[id] || {};
    return (r.best ? 1 : 0) + (r.ecoute ? 1 : 0) + (r.image ? 1 : 0);
  }
  function totalStars(){
    var p = prog(), n = 0;
    for (var k in p) if (p.hasOwnProperty(k)) n += (p[k].best?1:0) + (p[k].ecoute?1:0) + (p[k].image?1:0);
    return n;
  }
  function refreshStars(){ document.getElementById("starChip").textContent = "⭐ " + totalStars(); }

  /* ============ écrans ============ */

  var elHome = document.getElementById("home"),
      elExo  = document.getElementById("exo"),
      elList = document.getElementById("serieList");

  var secBtns = {syl:document.getElementById("sec-syl"), mot:document.getElementById("sec-mot"), out:document.getElementById("sec-out")};
  var tab = "syl";

  function itemsOf(s){ var o = []; s.rows.forEach(function(r){ r.forEach(function(x){ o.push(x); }); }); return o; }
  function picItems(s){ return itemsOf(s).filter(function(x){ return !!picOf(x); }); }
  function totalCount(s){
    if (s.kind === "syl") return itemsOf(s).length;
    return s.rows.reduce(function(a,row){ return a + row.reduce(function(b,x){ return b + countWords(x); },0); },0);
  }

  function renderList(){
    var data = SECTIONS[tab];
    elList.innerHTML = "";
    data.forEach(function(s, idx){
      var locked = LOCKS && idx > 0 && starsOf(data[idx-1].id) === 0;
      var li = document.createElement("li");
      var b = document.createElement("button");
      b.type = "button";
      var st = starsOf(s.id);
      b.className = "serie acc" + (s.rev ? " rev" : "") + (st === 3 ? " done" : "") + (locked ? " lock" : "");
      b.style.setProperty("--h", s.hue);
      var unit = s.kind === "syl" ? "syllabes" : "mots";
      b.innerHTML =
        '<span class="badge">' + s.badge + '</span>' +
        '<span class="smeta"><b>' + totalCount(s) + '</b> ' + unit + (s.page ? " · " + s.page : "") + '</span>' +
        (locked
          ? '<span class="lockico">🔒</span>'
          : '<span class="sstars' + (st ? " on" : "") + '">' + "★".repeat(st) + "☆".repeat(3 - st) + '</span>');
      b.addEventListener("click", function(){
        prime();
        if (locked){
          var m = b.querySelector(".smeta");
          var old = m.innerHTML;
          m.innerHTML = "<b>Finis d'abord la série d'avant 🔒</b>";
          setTimeout(function(){ m.innerHTML = old; }, 1600);
          return;
        }
        openSerie(s);
      });
      li.appendChild(b); elList.appendChild(li);
    });
  }

  Object.keys(secBtns).forEach(function(k){
    secBtns[k].addEventListener("click", function(){
      tab = k;
      Object.keys(secBtns).forEach(function(j){ secBtns[j].setAttribute("aria-selected", j === k ? "true" : "false"); });
      renderList();
    });
  });

  var LOCKS = false;   // false = toutes les séries ouvertes

  /* ---- état ---- */
  var se = null, flat = [], cells = [], mode = "feuille";
  var timer = null, left = 60, running = false;
  var ROUND = 10;

  var E = {
    title:document.getElementById("xTitle"),
    mF:document.getElementById("m-feuille"), mE:document.getElementById("m-ecoute"), mI:document.getElementById("m-image"),
    vF:document.getElementById("vFeuille"), vE:document.getElementById("vEcoute"), vI:document.getElementById("vImage"),
    sheet:document.getElementById("sheet"), clock:document.getElementById("clock"),
    timerBtn:document.getElementById("timerBtn"), deckInfo:document.getElementById("deckInfo"),
    eBar:document.getElementById("eBar"), ePlay:document.getElementById("ePlay"),
    eHint:document.getElementById("eHint"), eOpts:document.getElementById("eOpts"),
    iBar:document.getElementById("iBar"), iWord:document.getElementById("iWord"),
    iHint:document.getElementById("iHint"), iOpts:document.getElementById("iOpts")
  };

  function openSerie(s){
    se = s; flat = itemsOf(s);
    elExo.className = "acc";
    elExo.style.setProperty("--h", s.hue);
    E.title.textContent = s.badge;
    E.mI.hidden = picItems(s).length < 4;     // pas assez d'images : on cache le jeu
    elHome.hidden = true; elExo.hidden = false;
    buildSheet();
    preload(flat);
    setMode("feuille");
    window.scrollTo(0,0);
  }

  function setMode(m){
    mode = m; stopTimer(true);
    try { window.speechSynthesis.cancel(); } catch (e) {}
    E.mF.setAttribute("aria-selected", m === "feuille" ? "true" : "false");
    E.mE.setAttribute("aria-selected", m === "ecoute" ? "true" : "false");
    E.mI.setAttribute("aria-selected", m === "image" ? "true" : "false");
    E.vF.hidden = m !== "feuille"; E.vE.hidden = m !== "ecoute"; E.vI.hidden = m !== "image";
    if (m === "ecoute") startGame("ecoute");
    if (m === "image") startGame("image");
  }
  E.mF.addEventListener("click", function(){ setMode("feuille"); });
  E.mE.addEventListener("click", function(){ prime(); setMode("ecoute"); });
  E.mI.addEventListener("click", function(){ prime(); setMode("image"); });

  /* ---- 📄 la feuille ---- */

  function buildSheet(){
    E.sheet.innerHTML = ""; cells = [];
    var acc = 0, idx = 0;
    se.rows.forEach(function(row){
      if (se.kind === "syl"){
        var r = document.createElement("div");
        r.className = "srow";
        var sc = document.createElement("div"); sc.className = "scards";
        row.forEach(function(t){
          var c = document.createElement("button");
          c.type = "button"; c.className = "cell";
          c.appendChild(highlight(t, se.target));
          c.dataset.i = idx; c.dataset.t = t;
          cells.push(c); sc.appendChild(c); idx++;
        });
        acc += row.length;
        r.appendChild(sc);
        var sp = document.createElement("span"); sp.className = "stally"; sp.textContent = acc;
        r.appendChild(sp); E.sheet.appendChild(r);
      } else {
        var w = document.createElement("div"); w.className = "wrow";
        var cards = document.createElement("div"); cards.className = "wcards";
        row.forEach(function(t){
          var c = document.createElement("button");
          c.type = "button"; c.className = "chip";
          var ph = picOf(t);
          var box = picEl(ph, "cpic", t);          // toujours présent : les cartes s'alignent
          c.appendChild(box);
          var ts = document.createElement("span");
          ts.appendChild(highlight(t, se.target)); c.appendChild(ts);
          c.dataset.i = idx; c.dataset.t = t;
          cells.push(c); cards.appendChild(c); acc += countWords(t); idx++;
        });
        w.appendChild(cards);
        var sp2 = document.createElement("span"); sp2.className = "wtally"; sp2.textContent = acc;
        w.appendChild(sp2); E.sheet.appendChild(w);
      }
    });
    cells.forEach(function(c){
      c.addEventListener("click", function(){
        prime();
        if (running || left < 60) markUpTo(parseInt(c.dataset.i,10));
        else say(c.dataset.t);
      });
    });
  }

  function scoreAt(i){
    if (se.kind === "syl") return i + 1;
    var n = 0; for (var k = 0; k <= i; k++) n += countWords(flat[k]);
    return n;
  }

  function markUpTo(i){
    cells.forEach(function(c,n){
      c.classList.toggle("read", n < i);
      c.classList.toggle("here", n === i);
    });
    var sc = scoreAt(i);
    if (!running){
      var old = (prog()[se.id] || {}).best || 0;
      markDone(se.id, "best", sc);
      E.deckInfo.innerHTML = "<b>" + sc + "</b> " + (se.kind === "syl" ? "syllabes" : "mots") +
        " ! " + (sc > old ? "🎉 Record !" : (old ? "Record : " + old : ""));
      renderList();
    } else {
      E.deckInfo.innerHTML = "<b>" + sc + "</b>…";
    }
  }

  function tick(){
    left--;
    E.clock.textContent = "0:" + (left < 10 ? "0" : "") + left;
    if (left <= 0){
      clearInterval(timer); timer = null; running = false;
      E.clock.classList.remove("go"); E.clock.textContent = "0:00";
      E.timerBtn.textContent = "▶ Go !";
      E.deckInfo.innerHTML = "⏰ Stop ! Touche la dernière case lue.";
      try { if (navigator.vibrate) navigator.vibrate([180,90,180]); } catch (e) {}
    }
  }

  function stopTimer(silent){
    if (timer){ clearInterval(timer); timer = null; }
    running = false; left = 60;
    E.clock.textContent = "1:00"; E.clock.classList.remove("go");
    E.timerBtn.textContent = "▶ Go !";
    if (!silent) E.deckInfo.textContent = "Touche une case pour l'écouter.";
  }

  E.timerBtn.addEventListener("click", function(){
    prime();
    if (running){ stopTimer(); return; }
    cells.forEach(function(c){ c.classList.remove("read","here"); });
    left = 60; running = true;
    E.clock.textContent = "1:00"; E.clock.classList.add("go");
    E.timerBtn.textContent = "■ Stop";
    E.deckInfo.textContent = "Lis à voix haute ! 🚀";
    timer = setInterval(tick, 1000);
  });

  /* ============ les deux jeux ============
     Ici c'est la page qui corrige, pas l'enfant : il faut toucher la bonne
     case. Impossible de tricher, et pas besoin de savoir écrire.           */

  var game = null;

  function buildQuestions(kind){
    var pool = kind === "image" ? picItems(se) : flat;
    var uniq = [];
    pool.forEach(function(x){ if (uniq.indexOf(x) < 0) uniq.push(x); });
    var picked = shuffle(uniq).slice(0, Math.min(ROUND, uniq.length));

    return picked.map(function(target){
      if (kind === "image"){
        var good = picOf(target);
        var pool = uniq.filter(function(x){ return picOf(x) && picOf(x) !== good; });
        var others = shuffle(pool).slice(0,3).map(function(x){ return {e:picOf(x), w:x}; });
        while (others.length < 3){
          var e = ALLPICS[Math.floor(Math.random()*ALLPICS.length)];
          if (e !== good && !others.some(function(o){ return o.e === e; })) others.push({e:e, w:null});
        }
        return {t:target, key:good, opts:shuffle([{e:good, w:target}].concat(others))};
      }
      var o = shuffle(uniq.filter(function(x){ return x !== target; })).slice(0,3);
      while (o.length < 3){
        var f = flat[Math.floor(Math.random()*flat.length)];
        if (f !== target && o.indexOf(f) < 0) o.push(f); else break;
      }
      return {t:target, key:target, opts:shuffle([target].concat(o))};
    });
  }

  function startGame(kind){
    var qs = buildQuestions(kind);
    game = {kind:kind, qs:qs, i:0, ok:0, locked:false};
    var bar = kind === "image" ? E.iBar : E.eBar;
    bar.innerHTML = "";
    qs.forEach(function(){ bar.appendChild(document.createElement("span")).className = "dot"; });
    renderQ();
  }

  function renderQ(){
    var g = game;
    if (!g) return;
    var bar = g.kind === "image" ? E.iBar : E.eBar;
    var opts = g.kind === "image" ? E.iOpts : E.eOpts;
    var hint = g.kind === "image" ? E.iHint : E.eHint;

    if (g.i >= g.qs.length){ finishGame(); return; }
    g.locked = false;

    [].forEach.call(bar.children, function(d,n){ d.classList.toggle("now", n === g.i); });

    var q = g.qs[g.i];
    opts.innerHTML = "";
    q.opts.forEach(function(o){
      var b = document.createElement("button");
      b.type = "button";
      b.className = "opt" + (g.kind === "image" ? " img" : "");
      if (g.kind === "image"){ b.appendChild(picEl(o.e, "optpic", o.w)); }
      else { b.appendChild(highlight(o, se.target)); }
      b.addEventListener("click", function(){ answer(g.kind === "image" ? o.e : o, b); });
      opts.appendChild(b);
    });

    if (g.kind === "image"){
      E.iWord.innerHTML = ""; E.iWord.appendChild(highlight(q.t, se.target));
      E.iWord.classList.remove("pop"); void E.iWord.offsetWidth; E.iWord.classList.add("pop");
      hint.textContent = "Quelle image ?";
    } else {
      hint.textContent = "Touche ce que tu entends.";
      say(q.t);
    }
  }

  function answer(choice, btn){
    var g = game;
    if (!g || g.locked) return;
    g.locked = true;

    var q = g.qs[g.i];
    var bar = g.kind === "image" ? E.iBar : E.eBar;
    var opts = g.kind === "image" ? E.iOpts : E.eOpts;
    var hint = g.kind === "image" ? E.iHint : E.eHint;
    var good = choice === q.key;

    [].forEach.call(opts.children, function(b,n){
      if ((q.opts[n].e || q.opts[n]) === q.key) b.classList.add("win");
      else b.classList.add("dim");
    });
    if (!good){
      btn.classList.remove("win","dim"); btn.classList.add("lose");
      opts.classList.remove("shake"); void opts.offsetWidth; opts.classList.add("shake");
    }

    bar.children[g.i].className = "dot " + (good ? "ok" : "no");
    if (good) g.ok++;

    hint.innerHTML = good ? "✅ Bravo !" : "C'était <b>" + q.t + "</b>";
    say(q.t, function(){
      setTimeout(function(){ g.i++; opts.classList.remove("shake"); renderQ(); }, good ? 250 : 900);
    });
  }

  function finishGame(){
    var g = game;
    var host = g.kind === "image" ? E.vI : E.vE;
    var won = g.ok >= Math.ceil(g.qs.length * 0.8);
    if (won) markDone(se.id, g.kind, 1);

    host.innerHTML =
      '<div class="party pop">' +
      '<span class="emo">' + (won ? "🏆" : "💪") + '</span>' +
      '<p class="big">' + g.ok + " / " + g.qs.length + '</p>' +
      '<p style="font-family:var(--display);font-size:1.1rem">' +
      (won ? "Super ! +1 ⭐" : "Encore un petit effort !") + '</p>' +
      '<button class="again" type="button">🔁 Rejouer</button></div>';

    host.querySelector(".again").addEventListener("click", function(){
      rebuildGameView(g.kind);
      startGame(g.kind);
    });
    renderList();
  }

  function rebuildGameView(kind){
    var host = kind === "image" ? E.vI : E.vE;
    if (kind === "image"){
      host.innerHTML =
        '<div class="qbar" id="iBar"></div>' +
        '<div class="ask"><p class="askword" id="iWord"></p><p class="hintline" id="iHint">Quelle image ?</p></div>' +
        '<div class="opts" id="iOpts"></div>';
      E.iBar = document.getElementById("iBar"); E.iWord = document.getElementById("iWord");
      E.iHint = document.getElementById("iHint"); E.iOpts = document.getElementById("iOpts");
    } else {
      host.innerHTML =
        '<div class="qbar" id="eBar"></div>' +
        '<div class="ask"><button class="bigplay" id="ePlay" type="button"><span class="ico">🔊</span>Écoute !</button>' +
        '<p class="hintline" id="eHint">Touche la bonne case.</p></div>' +
        '<div class="opts" id="eOpts"></div>';
      E.eBar = document.getElementById("eBar"); E.ePlay = document.getElementById("ePlay");
      E.eHint = document.getElementById("eHint"); E.eOpts = document.getElementById("eOpts");
      E.ePlay.addEventListener("click", replay);
    }
  }

  function replay(){
    prime();
    if (game && game.kind === "ecoute" && game.i < game.qs.length) say(game.qs[game.i].t);
  }
  E.ePlay.addEventListener("click", replay);

  /* ---- retour ---- */
  document.getElementById("back").addEventListener("click", function(){
    try { window.speechSynthesis.cancel(); } catch (e) {}
    stopTimer(true); game = null;
    rebuildGameView("ecoute"); rebuildGameView("image");
    elExo.hidden = true; elHome.hidden = false;
    renderList(); refreshStars();
    window.scrollTo(0,0);
  });

  /* ---- écran de départ ---- */
  var NKEY = "studio-lecture-nom";
  var elStart = document.getElementById("start");
  var nameIn = document.getElementById("nameIn");
  var hi = document.getElementById("hi");
  (function(){
    var sp = document.getElementById("startPic");
    if (ICONS["📖"]) sp.innerHTML = ICONS["📖"];
    var nom = null;
    try { nom = localStorage.getItem(NKEY); } catch (e) {}
    if (nom){ hi.textContent = "Salut, " + nom + " !"; }
    else { hi.textContent = "Bonjour !"; nameIn.hidden = false; }
    document.getElementById("startStars").textContent = "⭐ " + totalStars();
  })();
  document.getElementById("go").addEventListener("click", function(){
    prime();
    if (!nameIn.hidden){
      var v = (nameIn.value || "").trim();
      if (v){ try { localStorage.setItem(NKEY, v); } catch (e) {} }
    }
    elStart.hidden = true;
    elHome.hidden = false;
    refreshStars(); renderList();
  });

  document.addEventListener("click", prime, {once:true});
  refreshStars();
  renderList();
})();
