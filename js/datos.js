/* datos.js
   Le studio de lecture — les séries du cahier
   Chaque S(...) est une série de syllabes, chaque W(...) une série de mots.
   Pour ajouter une ligne, ajoute un tableau dans rows. Rien d'autre à toucher. */

/* ============ données : syllabes ============ */
function S(badge, hue, target, rows, rev){
  return {kind:"syl", badge:badge, hue:hue, target:target, rows:rows, rev:!!rev,
          id:"s-" + badge.toLowerCase().replace(/[^a-z0-9]+/g,"") + "-" + rows.length + "-" + hue};
}

var SYL = [
  S("L",280,["l"],[["lé","la","ol","le","li"],["ul","lo","al","él","ly"],["lu","il","lè","la","le"]]),
  S("F",6,["f"],[["fa","fo","of","fe","fi"],["fu","fé","af","if","fè"],["uf","fa","fu","éf","fo"]]),
  S("CH",34,["ch"],[["ché","chi","ach","che","chu"],["chè","cho","cha","och","ché"],["uch","chy","ich","cha","éch"]]),
  S("S",88,["s"],[["sa","os","su","sé","is"],["sè","as","so","us","si"],["ès","se","si","os","su"]]),
  S("Rév · L F CH S",200,["l","f","ch","s"],[["sa","che","fo","la","ul"],["so","il","cha","fe","lo"],["cho","os","if","lu","ach"]],true),
  S("M",285,["m"],[["ma","mé","mi","me","my"],["mu","mè","ém","mo","ma"],["me","mol","mi","mich","mè"]]),
  S("R",22,["r"],[["ra","rè","or","re","ri"],["ur","ré","ro","ér","ar"],["ri","ir","èr","ru","ro"]]),
  S("N",215,["n"],[["né","no","én","ne","ni"],["nu","né","na","nè","na"],["ni","nil","no","nè","nar"]]),
  S("Rév · M R N",200,["m","r","n"],[["nè","me","na","ri","ma"],["or","ni","ne","mé","my"],["ru","ra","am","né","no"],["re","ir","ar","ro","mi"]],true),
  S("V",278,["v"],[["vo","vu","iv","va","vé"],["èv","ve","var","vol","avi"],["ava","vali","vora","vivi","ravi"],["vaché","vira","voli","aval","oval"]]),
  S("J",45,["j"],[["ji","jo","ju","aj","jé"],["je","éj","jar","jul","jura"],["joli","majo","juvé","juli","jachè"],["jumo","juju","javi","juré","maju"]]),
  S("Z",30,["z"],[["za","zé","zi","az","zo"],["zu","ze","zè","zar","liz"],["azu","zona","léza","ziza","jazi"],["zéro","rizi","zona","razé","azur"]]),
  S("Rév · V J Z",200,["v","j","z"],[["ja","zé","aj","vo","oz"],["vu","zo","vi","je","ov"],["zur","vif","val","raz","léza"],["juré","val","aju","vani","mija"],["févi","éva","rizo","soja","vézu"]],true),
  S("P",150,["p"],[["pa","op","ip","pu","py","pè"],["ép","pe","par","pil","opé","épi"],["napo","capu","répa","puni","jupé","pavo"],["pino","pépi","papi","poli","apur","épil"]]),
  S("T",186,["t"],[["ti","tu","at","ty","to","té"],["tar","tof","til","tur","oto","téti"],["totu","taché","étu","éti","moto","tati"],["tota","alti","atol","util","tifé","tapo"]]),
  S("C",330,["c"],[["ca","éc","ic","co","ac","cu"],["car","col","caf","cur","pico","cola"],["éco","cata","cuvé","comi","ficu","foca"],["cano","coca","cano","carto","actu","icté"]]),
  S("Rév · P T C",200,["p","t","c"],[["ti","uc","ép","ic","pa","ot"],["por","tac","cop","capo","poma","cari"],["sopo","éco","apor","voca","tari","pista"],["porti","artic","mica","capo","taco","porto"],["urti","péli","arti","roto","acor","octo"]],true),
  S("B",205,["b"],[["bi","bu","ab","bé","bo","èb"],["by","bol","abé","labo","bévu","balo"],["obé","bifu","fabu","coba","aba","robo"],["barna","obé","cabé","mabo","bali","jabo"]]),
  S("D",8,["d"],[["di","du","ad","dè","do","éd"],["dy","da","dal","dif","dur","dol"],["rado","jadi","dévo","diva","radi","jardi"],["judo","dédi","déca","édu","dodu","fadi"]]),
  S("G",0,["g"],[["ga","ég","gu","ig","go","ag"],["gar","gaf","gol","gul","gri","gru"],["aga","galo","égo","gori","mago","paga"],["agar","gutu","algo","fagoi","dégor","gardi"]]),
  S("Rév · B D G",200,["b","d","g"],[["da","ob","ag","bé","do","gu"],["gab","dag","bèg","gol","dib","dig"],["bal","gaf","dur","bari","roda","égar"],["diva","démo","gala","déga","biza","abor"],["agric","briga","orga","ordi","dégra","débor"]],true),
  S("H",210,["h"],[["hi","hé","ah","ha","oh","ohé"],["hop","hur","his","hari","héli","héro"],["hippo","thé","hurla","haro","hama","hopi"],["théo","héro","hari","héli","harpi","théa"]]),
  S("AU / EAU",198,["eau","au"],[["meau","sau","cau","jau","tau","neau"],["leau","fau","teau","beau","gau","veau"],["chau","beau","dau","mau","reau","hau"],["zeau","évau","apeau","éfau","lauri","adeau"]]),
  S("OU",198,["ou"],[["dou","chou","rou","bou","oup","nou"],["vou","our","zou","lou","fou","oul"],["mou","nou","pou","rou","tou","hou"],["gou","out","sou","jou","cou","ous"],["jour","tour","brou","mous","crou","boul"]]),
  S("ON / OM",198,["on","om"],[["lon","fon","son","mon","ron","don"],["von","jon","gon","bon","lon","ton"],["pon","non","son","hon","ton","nom"],["trom","onté","conta","recon","dron","épon"],["rebon","ombé","gron","outon","ochon","vrom"]]),
  S("OI",198,["oi"],[["toi","roi","poi","moi","coi","boi"],["doi","loi","foi","noi","joi","goi"],["toir","voir","choir","noir","poir","soir"],["roir","istoi","onsoi","oité","coif","voil"],["voitu","pouvoi","inoi","toil","tinoi","couloi"]]),
  S("Rév · AU OU ON OI",200,["eau","au","ou","on","om","oi"],[["voi","roir","lauri","outon","boul","égoi"],["ombe","jour","istoi","onté","chau","minoi"],["mousta","trom","rebon","joul","toitu","couloi"],["gron","tour","toil","adeau","éfau","ompi"],["vrau","brou","echon","douz","apeau","zeau"]],true),
  S("AN / AM",198,["an","am"],[["fan","lan","chan","san","man","van"],["ran","tam","jan","gan","pan","lam"],["ban","lan","ramp","land","clan","pan"],["fanfa","anchoi","ivan","ampou","aman","ambu"],["samba","fanto","anté","nanti","ambu","yvan"]]),
  S("EN / EM",198,["en","em"],[["fen","len","pen","sen","mem","ven"],["ren","emb","men","tem","den","nem"],["menti","denti","empo","empi","encha","empé"],["emba","senti","embou","dentu","ensem","embra"],["encor","endro","défen","vendre","paren","enten"]]),
  S("AI / EI / Ê / ET",198,["ai","ei","ê","et"],[["lai","rei","let","gai","bê","mai"],["nê","chai","fai","tê","vet","lei"],["pai","let","fai","vê","rei","sei"],["alet","eize","maine","avet","orêt","êche"],["olet","laine","delei","naire","nêtre","oulet"]]),
  S("ER / EZ / ES",198,["er","ez","es"],[["lez","rez","tes","des","les","pier"],["mier","nez","per","cher","ses","vez"],["étier","chez","piner","mes","émier","ouvez"],["ever","apier","ahier","évier","ompier","cheter"]]),
  S("Rév · AI ER EZ ES",200,["ai","ei","ê","et","er","ez","es"],[["étier","delei","inez","ahier","alet","chez"],["mes","amier","avet","ompier","ouvrez","eize"],["aité","maire","issier","ouet","oulet","nêtre"],["apier","évrier","maine","opier","cheter","leine"]],true),
  S("FR PR CR BR · FL PL BL",198,["fr","pr","cr","br","fl","pl","bl","gr","gl","dr","tr","cl"],[["pra","par","cor","cro","fru","fur"],["fal","fla","flé","fli","fil","fle"],["tri","tir","pru","pur","fré","bri"],["pla","pil","plu","bla","bal","glu"],["afro","grena","agri","brico","grelo","prati"],["obli","aglo","éplu","apla","clotu","ublo"],["croco","droma","plaè","crava","plani","blanchi"]]),
  S("IN / IM",198,["in","im"],[["lin","fin","rin","tim","min","din"],["min","bin","tim","chin","pin","bin"],["prin","clin","crin","invi","intro","impo"],["inclu","oulin","apin","ratin","achin","impri"],["linté","impro","ardin","imbal","inap","impé"]]),
  S("AIN / EIN",198,["ain","ein"],[["lain","main","bain","pein","gain","rein"],["tein","pain","vein","nain","pein","vain"],["plain","frein","vrein","train","flain","plein"],["umain","prein","opain","oulain","étein","teintu"],["mainte","grain","preinte","mainle","emprein","ricain"]]),
  S("OIN",198,["oin"],[["foin","poin","soin","coin","moin","loin"],["join","roin","moin","toin","foin","poin"],["goin","loin","toin","émoin","tointu","ampoin"],["point","pointu","groin","oindre","rejoin","ompoin"]]),
  S("AIN EIN OIN · IAN IEN ION",198,["ain","ein","oin","ian","ien","ion"],[["ian","ain","ion","oin","ein","ien"],["vian","sein","pion","lain","dien","poin"],["coin","sion","dian","tein","bain","lien"],["chien","train","frein","foin","mion","trian"],["amion","opain","nadien","rian","ampoin","emprein"]]),
  S("EU / ŒU",198,["œu","eu"],[["reu","feu","cœu","deu","nœu","beu"],["sœu","heu","veu","peu","vœu","meu"],["leur","peur","deur","meur","neuf","veuf"],["fleu","vleu","pleu","pleur","fleur","heur"],["ateur","manœu","acteur","œuf","aveu","œuvra"]]),
  S("Rév · IN OIN AIN IEN EU",200,["in","im","oin","ain","ein","ian","ien","ion","œu","eu"],[["ateur","médien","rian","ampoin","ampain","train"],["frein","opain","impri","apain","imbré","chien"],["foin","impo","ointe","rejoin","ampoin","amion"],["emprein","œuf","oindre","imbal","emin","emprein"],["point","radien","œuvra","pion","inclu","amion"],["anœu","crian","acteur","aveu","ointu","trian"]],true),
  S("K / QU",198,["qu","k"],[["ka","que","qui","ko","ké","quoi"],["ki","quoi","que","kaki","koa","kali"],["kola","laque","kilo","orak","loque","oquin"],["kimo","képi","kangou","tique","poqué","usque"]]),
  S("GN",198,["gn"],[["gni","gno","gna","gné","gnan","gnon"],["gnoi","gneau","pagnon","signal","grogné","igno"],["aigne","tagne","gnante","oigne","ligne","signa"],["pagno","cogné","ignon","gagnan","eigne","oigné"]]),
  S("PH",198,["ph"],[["pho","pha","phan","phin","phar","phon"],["phal","phir","phori","phaco","alpha","épho"],["éphan","éphé","tropha","omphe","phara","auphin"],["orphé","ophi","lépho","photo","strophi","grapho"]]),
  S("Rév · K QU GN PH",200,["qu","k","gn","ph"],[["pagne","riqué","éphé","képi","signa","auphin"],["koal","cogna","kangou","photo","phéri","agnante"],["égnoi","phara","igno","kimo","lépho","kilo"],["ophi","oigné","usqué","trophi","égneau","ompha"],["laqué","loqua","pharma","biquet","eigné","loquin"],["éphan","ligna","orak","aigné","grapho","oigné"]],true),
  S("G = J",198,["g"],[["geo","ge","gea","geon","gé","gi"],["gym","geol","gil","géo","geoi","age"],["ageon","gymna","giga","cageo","logé","génè"],["giro","gifa","gela","ongeoi","geade","angeon"]]),
  S("C = K · C = S, Ç",198,["ç","c"],[["ca","cé","çu","co","ci","cu"],["car","cil","çon","cui","ice","onc"],["once","cana","açon","çade","cico","bécil"],["octa","ouci","macé","éco","acci","accin"]]),
  S("Rév · G et C",200,["g","ç","c"],[["ouci","angè","çade","cana","ciné","bécil"],["gym","gile","macé","gage","éco","geoi"],["rageon","accin","giga","angué","guépa","angeon"],["laçon","genè","orgea","agé","acci","ucra"]],true),
  S("ES / ER / EL / EC",198,["es","er","el","ec"],[["ser","mel","per","nel","pec","mer"],["mec","ter","der","perso","esca","esto"],["escri","inver","amel","urel","recta","adjec"],["inter","perro","erba","insec","perci","onel"]]),
  S("ELLE ETTE ESSE ERRE ENNE",198,["elle","ette","esse","erre","enne"],[["belle","lette","relle","chette","tesse","nerre"],["tenne","vesse","chette","perre","mette","rette"],["tienne","itesse","dienne","vierre","ouette","alette"],["oilette","ichelle","arelle","unette","dresse","tonnel"],["achette","cinelle","mienne","éterre","oubelle","benne"]]),
  S("S = Z",198,["s"],[["asi","assi","osi","usa","oison","masu"],["ossi","assé","oussa","oisson","assi","osu"],["cousi","bossé","brassé","lison","oisson","ausé"],["aisir","asser","musi","rassa","braser","rousin"],["ison","assine","rise","itesse","isage","russe"]]),
  S("ILL",198,["ill"],[["ill","ail","eil","euil","aille","eille"],["ouil","aille","euille","tail","teil","vail"],["pouille","mouille","reuil","teuil","trail","dille"],["beille","caille","nouil","illon","illez","taille"],["ravail","rouilla","feuilla","quilla","reuille","pouille"]]),
  S("Y = II",198,["y"],[["ayé","uyé","oyé","oyou","oya","ayu"],["croya","yoga","raya","ayer","ayak","oyel"],["ayon","oyau","uyè","yaou","croya","boyer"]]),
  S("Rév · ES ELLE S=Z Y ILL",200,["es","er","el","ec","elle","ette","esse","erre","enne","ill","y","s"],[["perro","yaou","beille","ousin","braser","onelle"],["caillé","téresse","asselle","oyau","arelle","taille"],["aisir","olette","erba","uyè","nouel","rasa"],["dresse","illon","unette","insec","oyelle","tenne"],["ayon","chelle","musi","veille","erci","boyer"]],true)
];

/* ============ données : mots ============ */
function W(badge, hue, target, page, rows, rev){
  return {kind:"mot", badge:badge, hue:hue, target:target, page:page, rows:rows, rev:!!rev,
          id:"m-" + badge.toLowerCase().replace(/[^a-z0-9]+/g,"") + "-" + page};
}

var MOT = [
  W("L",280,["l"],"p. 13",[["le","la","il","Allo ?","Lili","Lola","le lilas","il lit"]]),
  W("F",6,["f"],"p. 14",[["la fée","le fil","la folie","affolé"]]),
  W("CH",34,["ch"],"p. 16",[["le chat","une fiche","fâché","il lèche"]]),
  W("S",88,["s"],"p. 17",[["un as","un os","la chasse","un sofa","il salit","elle sale"]]),
  W("Rév · L F CH S",200,["l","f","ch","s"],"p. 18",[
    ["la fée","le chat","un as","un os","Allo ?","affolé","Lili"],
    ["assis","elle sale","un fil","une fiche","la folie","fâché"],
    ["la chasse","un sofa","il salit","il lèche","il fuit","elle file"],
    ["une affiche","un fichu"]],true),
  W("M",285,["m"],"p. 20",[
    ["une lame","ma mamie","mal","un lama","un ami"],
    ["une mèche","une miche","il mâche","il filme"],
    ["il allume","la chimie","une masse","une massue"]]),
  W("R",22,["r"],"p. 21",[
    ["la rame","une ruche","une mare","une rafale","riche"],
    ["il râle","elle arrache","il mord","une rime","il remue"],
    ["il amarre","un russe","l'or","une arme","rare","un char"]]),
  W("N",215,["n"],"p. 22",[
    ["la lune","un âne","une niche","une narine","un numéro"],
    ["le renard","un animal","un ananas","une machine"],
    ["fané","nu","elle rumine","la nasse","la Chine"],
    ["la marine","il ramone","nul"]]),
  W("Rév · M R N",200,["m","r","n"],"p. 23",[
    ["une lame","mal","un lama","un ami","la Chine"],
    ["la rame","une mare","une rafale","une ruche","rare"],
    ["une arche","un âne","le renard","une niche"],
    ["un ananas","la machine","elle filme","elle mâche"],
    ["une masse","il arrache","il râle"]],true),
  W("V",278,["v"],"p. 25",[
    ["une vache","la vie","une fève","la vue","un vélo"],
    ["il lave","un cheval","la ville","un navire","il vole"],
    ["elle avale","ravi","il vomit","la fièvre","une olive"],
    ["elle va","il lève","la vallée","il chavire"]]),
  W("J",45,["j"],"p. 26",[
    ["un jus","un javelot","la jumelle","joli","je jure","la java"],
    ["un juif","une juive","une jachère","le Jura","un jars"],
    ["Jules","Jojo","Julie"]]),
  W("Z",30,["z"],"p. 27",[
    ["un zoo","une zone","le lézard","zéro","une rizière"],
    ["le jazz","Zoé","le zèle","l'azur","un zozo","l'azyme"],
    ["l'alizé","Zorro","le bazar"]]),
  W("Rév · V J Z",200,["v","j","z"],"p. 28",[
    ["une vache","le zèle","la vie","la fève","joli","la vue"],
    ["un jus","la sève","un javelot","zéro","la jumelle"],
    ["un zoo","une juive","Zoé","le Jura","l'azur","un vol"],
    ["il a vu","ravie","il vomit","Jules","le lézard","un zozo"],
    ["il avale","il lave","la zone","la fièvre","elle va","il lève"],
    ["la vallée"]],true),
  W("P",150,["p"],"p. 30",[
    ["un pavé","une pie","la pizza","la part","la jupe","un pot"],
    ["une pomme","une épée","je répare","il parle","pâlir"],
    ["elle punit","la pulpe","un apache","la purée"],
    ["une poche","une écharpe","les Alpes","parmi"],
    ["un pyjama","un puma","une palme","elle palpe"],
    ["une panière","il s'échappe"]]),
  W("T",186,["t"],"p. 31",[
    ["une tache","une tasse","un tapis","vite","ta moto"],
    ["une tortue","du pâté","la patte","un été","il mérite"],
    ["tu portes","il apporte","elle évite","un tajine","une tôle"],
    ["le métal","un pétale","le talus","la télé","un téléfilm"],
    ["une tomate","une torche","la tulipe","une otite"]]),
  W("C",330,["c"],"p. 32",[
    ["une cave","le café","le cacao","un choc","le canapé"],
    ["une caméra","un car","un sac","une école","chic"],
    ["caché","à côté","elle casse","elle recule","un cactus"],
    ["il accroche","la cafétéria","une cocotte","une comète"],
    ["un costume","une côte","la cuisse","il cultive"],
    ["la culotte","la culture"]]),
  W("Rév · P T C",200,["p","t","c"],"p. 33",[
    ["une pomme","la patte","une école","il mérite","un car"],
    ["pâlir","chic","je répare","caché","une tortue"],
    ["une épée","un cactus","elle évite","la pulpe","un sac"],
    ["du pâté","l'été","il parle","à côté","elle recule"],
    ["la purée","il accroche","tu portes","elle casse"],
    ["il apporte","un tajine","elle punit","une tôle"],
    ["un apache","une caméra","une poche"]],true),
  W("B",205,["b"],"p. 35",[
    ["une biche","une balle","une banane","la bulle"],
    ["une botte","le bus","une bosse","un bébé","il bave"],
    ["un lavabo","le robot","il obéit","je barre","une bâche"],
    ["une babiole","un bol","une bécasse","un bocal"],
    ["le bob","un boléro","une buche","il rabote"],
    ["elle butine"]]),
  W("D",8,["d"],"p. 36",[
    ["un dé","le début","la date","un radis","le dos","rapide"],
    ["doré","vide","elle déborde","je démarre","il dévore"],
    ["elle dit","tu dors","une balade","il aborde","un bolide"],
    ["une habitude","dehors","la dame","le débarcadère"],
    ["un débarras","une difficulté","un domino","la durée"]]),
  W("G",0,["g"],"p. 37",[
    ["une gaffe","une gare","la gomme","un cargo","gros"],
    ["la grenadine","grave","grosse","il gobe","je regarde"],
    ["elle garde","il rigole","un garde","un gabarit","gâché"],
    ["un gag","un gala","une galerie","elle grelotte"],
    ["le galop","il galope","une gamme","il gave","Gustave"],
    ["la gazinière"]]),
  W("Rév · B D G",200,["b","d","g"],"p. 38",[
    ["le début","une biche","une gare","la date","une balle"],
    ["une gaffe","une banane","un dé","la bulle"],
    ["la gomme","un radis","gros","le dos","rapide"],
    ["un cargo","une buche","le galop","une habitude"],
    ["une babiole","dehors","un bol","la dame","un bocal"],
    ["un débarras","une bécasse","un domino","un boléro"],
    ["il rabote","il galope","une balade","elle butine"],
    ["un bolide","la gazinière"]],true),
  W("H",210,["h"],"p. 40",[
    ["une hache","la hutte","un habit","du thé","un haricot"],
    ["un hamac","un héros","la hotte","un homme","il hurle"],
    ["un hippopotame","un hélicoptère","un hôpital"],
    ["il hisse","l'habitude","une halte","elle hérite","horrifié"]])
];

/* ============ sons des syllabes ============
   Uniquement pour les syllabes que la voix de l'appareil épelle.
   Voix nette, sans effet : on cherche à se rapprocher de celle du
   téléphone, pas à faire joli.                                      */