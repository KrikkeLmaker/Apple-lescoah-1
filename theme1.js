

const themes=[
 {id:1,title:'1. Mijn iPhone leren kennen',icon:'📱',desc:'iOS, knoppen, ontgrendelen, basisgebaren, beginscherm en appkiezer.',ready:true},
 {id:2,title:'2. Verbinding maken met de wereld',icon:'📶',desc:'Wifi, mobiele data, Bluetooth en persoonlijke hotspot.',ready:true},
 {id:3,title:'3. Mijn iPhone instellen en aanpassen',icon:'⚙️',desc:'Instellingen, opslag, scherm, geluid, meldingen en Niet storen.',ready:true},
 {id:4,title:'4. Apps en mijn beginscherm',icon:'🧩',desc:'App Store, apps zoeken, ordenen, verwijderen en mappen.',ready:true},
 {id:5,title:'5. Contact houden',icon:'💬',desc:'Contacten, telefoneren, Berichten, FaceTime en SOS.',ready:true},
 {id:6,title:'6. Mail en internet gebruiken',icon:'🌐',desc:'Mail, Safari, zoeken, tabbladen, favorieten en bijlagen.',ready:true},
 {id:7,title:'7. Camera en Foto’s',icon:'📷',desc:'Foto’s en video maken, bewerken, zoeken, delen en iCloud.',ready:true},
 {id:8,title:'8. Mijn tijd en afspraken organiseren',icon:'🗓️',desc:'Agenda, Herinneringen, Klok, timer en wekker.'},
 {id:9,title:'9. Handige iPhone-functies voor elke dag',icon:'✨',desc:'Weer, Tips, Siri, rekenmachine en andere handige functies.'}
];




const theme1={
 intro:'Leer je iPhone rustig kennen. Je oefent eerst de belangrijkste onderdelen en gebaren, zodat je daarna vlotter met andere apps kunt werken.',
 lessons:[
  {title:'1. Wat is iOS?',summary:'Het besturingssysteem van de iPhone.',html:`<div class="bubble"><strong>iOS</strong> is het besturingssysteem van je iPhone. Het zorgt ervoor dat je iPhone, de apps en de instellingen samenwerken.</div><div class="step"><strong>Onthoud:</strong> iOS is voor je iPhone wat een besturingssysteem is voor een computer.</div>`},
  {title:'2. Je model en knoppen herkennen',summary:'Zijknop, volumeknoppen, actieknop en cameraregelaar.',html:`<div class="bubble">Niet elke iPhone heeft exact dezelfde knoppen. Veel modellen hebben een <strong>zijknop</strong> en <strong>volumeknoppen</strong>. Ondersteunde nieuwere modellen kunnen ook een <strong>actieknop</strong> en <strong>cameraregelaar</strong> hebben.</div><div class="step"><strong>Zijknop:</strong> gebruik je om je iPhone te vergrendelen en om hem opnieuw te activeren.</div><div class="step"><strong>Volumeknoppen:</strong> regelen het volume. Buiten muziek of video kunnen ze ook het belvolume beïnvloeden.</div><div class="step"><strong>Actieknop:</strong> op ondersteunde modellen kun je kiezen welke handeling eraan gekoppeld is.</div><div class="tip">Kijk nu even naar de zijkanten van je eigen iPhone. Welke knoppen herken je?</div>`},
  {title:'3. Uit sluimerstand halen en ontgrendelen',summary:'Face ID, Touch ID en de thuisknop.',html:`<div class="bubble">Je iPhone kan vergrendeld zijn terwijl hij toch aanstaat. Je haalt hem eerst uit de sluimerstand en ontgrendelt hem daarna.</div><div class="step"><strong>Met Face ID:</strong> activeer het scherm en kijk naar je iPhone. Veeg daarna omhoog vanaf de onderrand.</div><div class="step"><strong>Met Touch ID:</strong> gebruik je vinger op de thuisknop als jouw model dat ondersteunt.</div><div class="tip">Heeft jouw iPhone een ronde thuisknop onder het scherm? Dan werkt de bediening op enkele punten anders dan bij een iPhone met Face ID.</div>`},
  {title:'4. Basisgebaren',summary:'Tikken, vasthouden, vegen, scrollen en zoomen.',html:`<div class="bubble">Je bedient de iPhone vooral met eenvoudige gebaren.</div><div class="step"><strong>Tikken:</strong> raak het scherm kort aan met één vinger.</div><div class="step"><strong>Vinger vasthouden:</strong> houd je vinger even op een onderdeel om extra mogelijkheden te zien.</div><div class="step"><strong>Vegen:</strong> beweeg één vinger snel over het scherm.</div><div class="step"><strong>Scrollen:</strong> beweeg je vinger over het scherm zonder hem meteen op te tillen.</div><div class="step"><strong>Zoomen:</strong> zet twee vingers op het scherm en beweeg ze uit elkaar om in te zoomen, of naar elkaar toe om uit te zoomen.</div>`},
  {title:'5. Naar het beginscherm gaan',summary:'Thuisknop of omhoog vegen.',html:`<div class="bubble">Het beginscherm is de plaats waar je apps terugvindt.</div><div class="step"><strong>iPhone met Face ID:</strong> veeg omhoog vanaf de onderrand van het scherm.</div><div class="step"><strong>iPhone met thuisknop:</strong> druk één keer op de thuisknop.</div>`},
  {title:'6. De appkiezer gebruiken',summary:'Snel wisselen tussen recent gebruikte apps.',html:`<div class="bubble">Met de appkiezer zie je apps die je recent hebt gebruikt.</div><div class="step"><strong>iPhone met Face ID:</strong> veeg omhoog vanaf de onderrand, stop ongeveer in het midden en til je vinger op.</div><div class="step"><strong>iPhone met thuisknop:</strong> druk twee keer op de thuisknop.</div><div class="tip">Gebruik de appkiezer om tussen apps te wisselen. Je hoeft een app niet telkens opnieuw vanaf het beginscherm te openen.</div>`},
  {title:'7. Het bedieningspaneel openen',summary:'Snel toegang tot veelgebruikte regelaars.',html:`<div class="bubble">Het bedieningspaneel geeft snel toegang tot veelgebruikte functies.</div><div class="step"><strong>Op iPhones met Face ID:</strong> veeg omlaag vanaf de rechterbovenhoek.</div><div class="tip">Open het bedieningspaneel en kijk welke regelaars je herkent. Houd eventueel je vinger op een regelaar om meer opties te bekijken.</div>`}
 ],
 exercises:[
  {title:'Oefening 1 • Vind je knoppen',text:'Neem je iPhone vast. Wijs de zijknop en de volumeknoppen aan. Heb je ook een actieknop of cameraregelaar? Bekijk die dan ook.'},
  {title:'Oefening 2 • Naar het beginscherm',text:'Open een willekeurige app. Ga daarna terug naar het beginscherm met de juiste handeling voor jouw iPhone.'},
  {title:'Oefening 3 • Open de appkiezer',text:'Open eerst twee verschillende apps. Open daarna de appkiezer en wissel tussen beide apps.'},
  {title:'Oefening 4 • Basisgebaren',text:'Open Foto’s. Open een foto. Zoom in met twee vingers. Zoom daarna weer uit. Scroll vervolgens door je foto’s.'},
  {title:'Oefening 5 • Bedieningspaneel',text:'Open het bedieningspaneel. Zoek de regelaars voor wifi, Bluetooth en helderheid. Verander nog niets als je niet zeker bent.'}
 ],
 help:[
  {q:'Ik geraak niet terug naar het beginscherm',a:'Kijk eerst of je iPhone een ronde thuisknop onder het scherm heeft. Ja? Druk één keer op die knop. Nee? Veeg vanaf de onderrand van het scherm omhoog.'},
  {q:'Ik krijg de appkiezer niet open',a:'Met Face ID: veeg vanaf de onderrand omhoog, stop in het midden en til je vinger op. Met een thuisknop: druk twee keer op de thuisknop.'},
  {q:'Ik krijg het bedieningspaneel niet open',a:'Op een iPhone met Face ID veeg je vanaf de rechterbovenhoek naar beneden. Probeer duidelijk vanuit de hoek te starten.'},
  {q:'Ik weet niet welk iPhone-model ik heb',a:'Voor deze eerste oefeningen is vooral belangrijk of je een ronde thuisknop onder het scherm hebt. Kijk daarna ook of je een actieknop of cameraregelaar ziet.'},
  {q:'Ik weet niet wat tikken, vegen of scrollen betekent',a:'Tikken is kort aanraken. Vegen is één snelle beweging. Scrollen is je vinger over het scherm bewegen om meer inhoud te zien. Zoomen doe je met twee vingers.'}
 ],
 quiz:[
  {q:'Wat is iOS?',opts:['Een app om foto’s te maken','Het besturingssysteem van de iPhone','Een soort wifi'],answer:1},
  {q:'Wat doe je met een gewone tik?',opts:['Je raakt het scherm kort aan','Je houdt twee knoppen tegelijk in','Je schudt de iPhone'],answer:0},
  {q:'Hoe zoom je meestal in op een foto?',opts:['Met twee vingers uit elkaar bewegen','Met één vinger naar beneden vegen','Met de zijknop'],answer:0},
  {q:'Hoe ga je op een iPhone met Face ID naar het beginscherm?',opts:['Veeg omhoog vanaf de onderrand','Veeg omlaag vanaf de rechterbovenhoek','Druk twee keer op volume omhoog'],answer:0},
  {q:'Hoe open je de appkiezer op een iPhone met Face ID?',opts:['Veeg omhoog en stop in het midden','Tik drie keer op het scherm','Houd volume omlaag vast'],answer:0},
  {q:'Hoe ga je op een iPhone met een thuisknop naar het beginscherm?',opts:['Druk één keer op de thuisknop','Veeg van rechts naar links','Druk tegelijk op beide volumeknoppen'],answer:0},
  {q:'Waarvoor gebruik je de volumeknoppen?',opts:['Om het volume te regelen','Om wifi in te schakelen','Om apps te installeren'],answer:0},
  {q:'Van waar veeg je op een iPhone met Face ID om het bedieningspaneel te openen?',opts:['Rechterbovenhoek','Linkeronderhoek','Midden van het scherm'],answer:0}
 ]
};





