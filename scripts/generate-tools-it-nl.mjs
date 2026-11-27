// scripts/generate-tools-it-nl.mjs
import fs from 'fs';
import path from 'path';

// Define the 15 tools in Italian and Dutch
const toolsItData = {
  'dead-pixel-test': {
    name: "Test Pixel Bruciati",
    title: "Test Pixel Bruciati – Verifica Monitor e Schermo Smartphone Online",
    metaDescription: "Testa il display per pixel bruciati, bloccati o difettosi a schermo intero. Strumento online gratuito con ciclo colori RGB per schermi LCD e OLED.",
    h1: "Test Pixel Bruciati (Verifica Schermo Intero)",
    intro: "Individua sub-pixel difettosi, bloccati o spenti su monitor, laptop, tablet e smartphone. Il tool alterna schermate di prova in Rosso, Verde, Blu, Bianco e Nero per evidenziare qualsiasi anomalia senza installare alcun programma.",
    featuresTitle: "Come Funziona il Test dei Pixel",
    features: [
      { title: "Identificazione Pixel Spenti", desc: "I pixel bruciati rimangono spenti, apparendo come puntini neri evidenti su sfondi chiari." },
      { title: "Isolamento Pixel Bloccati", desc: "I pixel bloccati rimangono fissi su un solo colore primario. Il cambio cromatico li individua all'istante." },
      { title: "Ciclo RGB Automatico", desc: "Imposta l'intervallo a 3, 5 o 10 secondi per un'ispezione rilassata dell'intero pannello." },
      { title: "Funziona su Qualsiasi Display", desc: "Compatibile con pannelli OLED, AMOLED, IPS, VA e TN a qualsiasi risoluzione." }
    ],
    instructionsTitle: "Guida all'Esecuzione del Test",
    instructions: [
      "Pulisci accuratamente la superficie del monitor prima del test per non confondere polvere con pixel difettosi.",
      "Clicca su 'Schermo Intero' o tocca l'anteprima per eliminare barre degli strumenti e schede del browser.",
      "Usa i tasti 1-5 o avvia il ciclo automatico per esaminare ciascun colore primario da bordo a bordo."
    ],
    faqs: [
      { q: "Qual è la differenza tra pixel bloccato e bruciato?", a: "Un pixel bruciato è permanentemente nero (spento), mentre un pixel bloccato mostra sempre un colore primario (rosso, verde o blu) e può spesso essere ripristinato." },
      { q: "Il ciclo rapido RGB può riparare i pixel bloccati?", a: "Sì, l'alternanza rapida di colori primari stimola i transistor del sub-pixel bloccato favorendone lo sblocco." },
      { q: "Come faccio a distinguere un granello di polvere da un pixel bruciato?", a: "Osserva il display da diverse angolazioni o passaci delicatamente un panno in microfibra: la polvere si trova sopra il vetro protettivo, il pixel bruciato al di sotto." },
      { q: "Quanti pixel bruciati giustificano la sostituzione in garanzia?", a: "Dipende dalla classe ISO del produttore; solitamente da 3 a 5 sub-pixel difettosi sono sufficienti per richiedere l'assistenza." },
      { q: "Il test funziona anche su iPhone e iPad?", a: "Sì, funziona nativamente in Safari e Chrome su iOS e Android senza scaricare app." }
    ]
  },
  'screen-cleaning': {
    name: "Modalità Pulizia Schermo",
    title: "Modalità Pulizia Schermo – Schermo Bianco Luminoso per Monitor e Laptop",
    metaDescription: "Visualizza uno schermo bianco uniforme a piena luminosità per individuare polvere, impronte e macchie. Schermo sempre attivo senza spegnimento.",
    h1: "Modalità Pulizia Schermo (Schermo Sempre Attivo)",
    intro: "Pulisci in sicurezza il display di laptop, computer o smartphone. La schermata bianca pura a 100% di luminosità evidenzia ogni minima particella di polvere e macchia, mantenendo il monitor acceso senza andare in stand-by.",
    featuresTitle: "Vantaggi della Modalità Pulizia Schermo",
    features: [
      { title: "Rilevamento Immediato dello Sporco", desc: "La luce bianca diffusa fa risaltare aloni e particelle invisibili sui normali sfondi scuri." },
      { title: "Blocco Stand-by Attivo", desc: "Il display rimane illuminato senza spegnersi o ridurre la luminosità mentre pulisci." },
      { title: "Zero Installazioni", desc: "Accesso immediato dal browser senza rischiare malware o estensioni pesanti." },
      { title: "Protezione Rivestimenti Antiriflesso", desc: "Consente di pulire con precisione applicando una pressione minima ed uniforme." }
    ],
    instructionsTitle: "Come Pulire il Tuo Monitor in Sicurezza",
    instructions: [
      "Attiva la modalità Schermo Intero per illuminare ogni centimetro del pannello.",
      "Usa un soffietto per rimuovere le particelle abrasive più grandi senza strofinare.",
      "Passa delicatamente un panno in microfibra asciutto o leggermente inumidito con acqua distillata."
    ],
    faqs: [
      { q: "Perché usare uno schermo bianco per pulire il monitor?", a: "Perché la luce retroilluminata uniforme rende evidenti macchie d'unto e impronte che si mimetizzano sui display spenti." },
      { q: "Posso pulire lo schermo mentre è acceso?", a: "Sì, passando un panno in microfibra con tocco leggero per individuare lo sporco rimosso in tempo reale." },
      { q: "Quale liquido è sicuro per i display?", a: "Acqua distillata pura su un panno morbido in microfibra. Evita detergenti a base di ammoniaca o alcool." },
      { q: "Come rimuovere aloni persistenti?", a: "Inumidisci leggermente un angolo del panno con acqua distillata, passa con movimenti circolari e asciuga subito con la parte asciutta." },
      { q: "I tovaglioli di carta possono graffiare lo schermo?", a: "Sì, contengono fibre di cellulosa abrasive che creano micro-graffi irreversibili sui filtri antiriflesso." }
    ]
  },
  'zoom-ring-light': {
    name: "Luce Ring Light per Zoom",
    title: "Luce Ring Light per Zoom – Illuminazione Morbida da Monitor per Videochiamate",
    metaDescription: "Usa il monitor o il tablet come luce da riempimento morbida per riunioni Zoom, Teams e Meet. Temperatura colore e luminosità regolabili.",
    h1: "Luce Ring Light per Zoom e Videochiamate",
    intro: "Migliora istantaneamente la qualità visiva della tua webcam nelle videochiamate di lavoro. Trasforma il monitor o un iPad secondario in una grande luce softbox con temperatura colore calda o fredda e luminosità regolabile.",
    featuresTitle: "Caratteristiche dell'Illuminazione per Videochiamate",
    features: [
      { title: "Regolazione Calore Luce", desc: "Imposta tonalità calde (3200K) per un incarnato naturale o fredde (5600K) per massima nitidezza." },
      { title: "Diffusore a Tutto Schermo", desc: "Una superficie illuminante da 15 o 27 pollici produce ombre molto più morbide di una piccola ring light economica." },
      { title: "Controllo Luminosità", desc: "Regola l'intensità per evitare di affaticare la vista durante riunioni prolungate." },
      { title: "Schermo Sempre Acceso", desc: "La luce resta costante per tutta la durata del meeting senza interruzioni." }
    ],
    instructionsTitle: "Configurazione della Luce per Videochiamate",
    instructions: [
      "Posiziona la finestra dello strumento sul monitor principale o su un display secondario dietro la webcam.",
      "Regola il cursore del calore verso il centro per un tono dell'incarnato naturale.",
      "Aumenta la luminosità fino a eliminare le ombre scure sotto gli occhi sul feed della webcam."
    ],
    faqs: [
      { q: "Uno schermo per computer può davvero sostituire una ring light?", a: "Sì, la superficie ampia di un monitor agisce come un softbox fotografico professionale, diffondendo luce omogenea sul viso." },
      { q: "Quale impostazione di calore è consigliata?", a: "Un calore compreso tra il 40% e il 60% neutralizza le dominanti bluastre dei sensori webcam economici." },
      { q: "Posso usarlo con Zoom, Google Meet e Microsoft Teams?", a: "Assolutamente sì; funziona in background nel browser con qualsiasi software di videoconferenza." },
      { q: "Provoca affaticamento della vista?", a: "No, la luce diffusa a bassa intensità è molto più confortevole di faretti LED puntiformi diretti verso gli occhi." },
      { q: "Posso usare un iPad o smartphone posizionato accanto al monitor?", a: "Certamente, orientare un tablet verso il lato in ombra del viso bilancia l'illuminazione in modo eccellente." }
    ]
  },
  'webcam-light': {
    name: "Illuminazione Webcam",
    title: "Illuminazione Webcam – Luce Frontale Morbida per Streaming e Streaming Video",
    metaDescription: "Illuminazione frontale morbida e gratuita da browser per creator, streamer e riunioni. Riduci il rumore video e migliora la nitidezza della webcam.",
    h1: "Illuminazione Webcam e Streaming",
    intro: "Migliora l'immagine della tua webcam riducendo all'istante la grana e il rumore causati dalla scarsa luminosità. Usa il display per diffondere una luce continua e naturale sul tuo viso.",
    featuresTitle: "Vantaggi per lo Streaming Video",
    features: [
      { title: "Eliminazione del Rumore Digitale", desc: "I sensori delle webcam richiedono luce abbondante per evitare artefatti sgranati e cali di framerate." },
      { title: "Bilanciamento Tonalità Viso", desc: "Tonalità cromatica personalizzabile per adattarsi alla luce naturale della tua stanza." },
      { title: "Zero Riflessi Fastidiosi", desc: "L'emissione estesa riduce i riflessi speculari sulle lenti degli occhiali rispetto a piccoli LED." },
      { title: "Nessun Hardware Aggiuntivo", desc: "Risparmia sull'acquisto di faretti dedicati utilizzando i monitor già presenti sulla tua scrivania." }
    ],
    instructionsTitle: "Come Ottenere la Migliore Illuminazione",
    instructions: [
      "Apri la pagina sul monitor più vicino alla fotocamera per illuminare frontalmente il volto.",
      "Adatta il cursore del calore in base all'ora del giorno: più freddo di giorno, più caldo la sera.",
      "Controlla l'anteprima della webcam finché il viso non appare nitido e tridimensionale."
    ],
    faqs: [
      { q: "Perché la mia webcam mostra immagini sgranate?", a: "Le webcam aumentano automaticamente il guadagno ISO al buio, producendo forte rumore visivo. Aggiungere luce risolve il problema." },
      { q: "Questa luce funziona anche per lo streaming su Twitch o YouTube?", a: "Sì, molti streamer utilizzano un secondo monitor con sfondo caldo per illuminarsi durante il gameplay." },
      { q: "Come evito riflessi sui miei occhiali?", a: "Posiziona la finestra luminosa leggermente più in alto rispetto alla linea degli occhi e abbassa leggermente l'intensità." },
      { q: "Consuma molta batteria sul portatile?", a: "Il consumo è limitato alla sola retroilluminazione del monitor, senza carico su scheda grafica o CPU." },
      { q: "Posso cambiare colore per creare effetti di luce creativa?", a: "Sì, usa il selettore colore per creare accenti d'atmosfera viola, ciano o ambra sul lato del viso." }
    ]
  },
  'screen-flicker-test': {
    name: "Test Sfarfallio Schermo (PWM)",
    title: "Test Sfarfallio Schermo – Rileva Sfarfallio PWM e Proteggi la Vista",
    metaDescription: "Verifica se il tuo monitor presenta sfarfallio PWM dannoso per gli occhi. Test diagnostico online gratuito per schermi e laptop.",
    h1: "Test Sfarfallio Schermo (Flicker & PWM)",
    intro: "Scopri se il tuo monitor o display per smartphone utilizza la modulazione di larghezza di impulso (PWM) per regolare la luminosità. Lo sfarfallio invisibile a occhio nudo può provocare emicranie, secchezza e pesantezza oculare.",
    featuresTitle: "Come Riconoscere lo Sfarfallio del Monitor",
    features: [
      { title: "Diagnosi PWM ad Alto Contrasto", desc: "Fornisce sfondi ad alta frequenza e linee di contrasto per rilevare lo sfarfallio tramite fotocamera." },
      { title: "Verifica a Diverse Luminosità", desc: "Permette di individuare a quali percentuali di luminosità il monitor attiva il flicker PWM." },
      { title: "Riduzione Affaticamento Oculare", desc: "Aiuta a scegliere le impostazioni visive più sicure per lunghe sessioni di lavoro." },
      { title: "Compatibilità Universale", desc: "Esegui il test su monitor esterni, schermi di notebook, smartphone e tablet." }
    ],
    instructionsTitle: "Procedura per Rilevare lo Sfarfallio",
    instructions: [
      "Imposta la luminosità del monitor al 20%, 50% e 100% in sequenza.",
      "Inquadra lo schermo con la fotocamera del tuo smartphone impostata su ripresa video o slow-motion.",
      "Se compaiono bande nere orizzontali o sfarfallio evidente sul display del telefono, il monitor utilizza PWM."
    ],
    faqs: [
      { q: "Cos'è lo sfarfallio PWM?", a: "Il PWM (Pulse-Width Modulation) regola la luminosità accendendo e spegnendo rapidamente i LED di retroilluminazione centinaia di volte al secondo." },
      { q: "Quali sono i sintomi dello sfarfallio invisibile?", a: "Mal di testa, bruciore agli occhi, affaticamento precoce e difficoltà di messa a fuoco dopo poche ore al computer." },
      { q: "Come posso eliminare lo sfarfallio PWM?", a: "Imposta la luminosità hardware del monitor al 100% (dove il PWM è disattivato) e abbassa la luminosità software tramite scheda video o filtri." },
      { q: "I display OLED sfarfallano?", a: "Molti schermi OLED e AMOLED utilizzano PWM a frequenze comprese tra 240Hz e 480Hz a basse luminosità." },
      { q: "Cosa significa certificazione Flicker-Free?", a: "Indica monitor che utilizzano regolazione a corrente continua (DC Dimming), garantendo zero sfarfallio a qualsiasi luminosità." }
    ]
  },
  'backlight-bleed-test': {
    name: "Test Fuga di Luce (Backlight Bleed)",
    title: "Test Fuga di Luce Monitor – Verifica Perdite di Retroilluminazione e IPS Glow",
    metaDescription: "Testa il tuo monitor per perdite di luce negli angoli e difetti del pannello al buio. Schermo nero puro a schermo intero per LCD e IPS.",
    h1: "Test Fuga di Luce (Backlight Bleed Checker)",
    intro: "Ispeziona il tuo monitor per identificare infiltrazioni di luce dai bordi (backlight bleed) e difetti di assemblaggio. Visualizza un campo nero assoluto per valutare la qualità costruttiva del pannello LCD prima della scadenza del reso.",
    featuresTitle: "Cosa Rivela Questo Test",
    features: [
      { title: "Rilevamento Pressioni della Cornice", desc: "Le viti o la scocca troppo serrata causano chiazze luminose lungo le cornici del display." },
      { title: "Distinzione tra Bleed e IPS Glow", desc: "Aiuta a capire se il bagliore cambia inclinando lo sguardo (IPS Glow) o se è permanente (Bleed)." },
      { title: "Nero Puro Senza Sovrimpressioni", desc: "Elimina barre e cursore per un'ispezione critica nelle aree periferiche del display." },
      { title: "Valutazione per Resi e Garanzie", desc: "Fornisce prove visive chiare per richiedere la sostituzione di pannelli difettosi al produttore." }
    ],
    instructionsTitle: "Come Effettuare il Test al Buio",
    instructions: [
      "Spegni o attenua le luci della stanza per creare un ambiente buio.",
      "Attiva la modalità Schermo Intero con lo sfondo nero puro.",
      "Osserva i quattro angoli e le cornici: se la luce filtra in modo disomogeneo, il monitor presenta fughe di luce."
    ],
    faqs: [
      { q: "Cos'è il backlight bleed?", a: "È un difetto fisico di assemblaggio in cui la luce della lampada di retroilluminazione filtra attraverso gli spazi tra pannello e cornice." },
      { q: "Qual è la differenza tra Backlight Bleed e IPS Glow?", a: "L'IPS Glow è una caratteristica ottica naturale che varia angolando lo sguardo; il Backlight Bleed è un difetto meccanico fisso che non scompare cambiando angolazione." },
      { q: "Il backlight bleed può peggiorare col tempo?", a: "Solitamente rimane stabile, ma forti shock termici o pressioni fisiche possono accentuarlo." },
      { q: "I display OLED hanno backlight bleed?", a: "No. I monitor OLED non hanno retroilluminazione: ogni pixel emette luce propria e si spegne completamente sul nero." },
      { q: "Posso riparare le fughe di luce da solo?", a: "A volte allentare delicatamente la cornice o flettere con estrema cautela il telaio riduce le pressioni anomale, ma è preferibile chiedere la sostituzione in garanzia." }
    ]
  },
  'oled-burn-in-test': {
    name: "Test Burn-in OLED",
    title: "Test Burn-in OLED – Verifica Ritenzione dell'Immagine su Schermi OLED e AMOLED",
    metaDescription: "Test diagnostico completo per usura e burn-in su TV, monitor e smartphone OLED. Verifica degradazione dei sub-pixel con campi uniformi.",
    h1: "Test Burn-in OLED e Ritenzione Immagine",
    intro: "Verifica se il tuo pannello OLED, QD-OLED o AMOLED presenta segni di usura asimmetrica o immagini fantasma residue. Alterna schermate monocromatiche uniformi al 100% per individuare loghi, barre delle applicazioni o HUD di giochi rimasti impressi.",
    featuresTitle: "Funzionalità Diagnostiche OLED",
    features: [
      { title: "Test Sub-pixel Rosso, Verde e Blu", desc: "I pixel blu e rossi si degradano più velocemente: il test monocromatico isola ogni strato organico." },
      { title: "Test Grigio 5% e 10% di Precisione", desc: "I grigi a bassa luminanza evidenziano istantaneamente difetti di uniformità invisibili sul nero assoluto." },
      { title: "Rilevamento Loghi e Barre Taskbar", desc: "Individua sagome fantasma di icone di sistema o interfacce fisse prolungate nel tempo." },
      { title: "Monitoraggio Preventivo", desc: "Permette di intervenire con cicli di pulizia pixel prima che la ritenzione diventi permanente." }
    ],
    instructionsTitle: "Come Ispezionare il Tuo Schermo OLED",
    instructions: [
      "Attiva la modalità Schermo Intero ed esamina attentamente il campo grigio al 5% in stanza oscurata.",
      "Alterna le schermate uniformi Rossa, Verde, Blu e Bianca tramite i controlli rapidi.",
      "Verifica la presenza di sagome persistenti dove solitamente stazionano le barre delle applicazioni o loghi TV."
    ],
    faqs: [
      { q: "Cos'è il burn-in sugli schermi OLED?", a: "È l'invecchiamento non uniforme dei diodi organici dovuto alla visualizzazione prolungata di elementi grafici statici e luminosi." },
      { q: "Qual è la differenza tra Image Retention e Burn-in permanente?", a: "L'image retention è un fenomeno temporaneo che scompare dopo pochi minuti di contenuti dinamici; il burn-in è una degradazione hardware permanente." },
      { q: "Come posso prevenire il burn-in sul monitor del PC?", a: "Nascondi automaticamente la barra delle applicazioni, imposta uno screensaver nero dopo 2 minuti e attiva le funzioni Pixel Shift del monitor." },
      { q: "I cicli di compensazione pixel del monitor servono?", a: "Sì, riallineano la risposta in tensione dei sub-pixel e andrebbero lasciati completare regolarmente a monitor spento." },
      { q: "La garanzia copre il burn-in?", a: "Diversi produttori moderni di monitor gaming OLED offrono ora garanzie specifiche di 2 o 3 anni contro il burn-in." }
    ]
  },
  'monitor-uniformity-test': {
    name: "Test Uniformità Monitor",
    title: "Test Uniformità Monitor – Verifica Luminanza e Consistenza Colore Display",
    metaDescription: "Misura la consistenza di colore e luminosità tra il centro e i bordi del tuo monitor. Strumento di valutazione per fotografi e grafici.",
    h1: "Test Uniformità Colore e Luminanza Monitor",
    intro: "Valuta la precisione del tuo monitor da bordo a bordo. Indispensabile per fotografi, designer grafici e video editor che necessitano di luminosità e temperatura colore perfettamente costanti su tutta l'area visibile.",
    featuresTitle: "Vantaggi del Controllo di Uniformità",
    features: [
      { title: "Rilevamento Vignettatura e Calo ai Bordi", desc: "Molti monitor perdono fino al 20% di luminosità negli angoli rispetto al centro." },
      { title: "Consistenza della Tonalità Bianco", desc: "Evidenzia dominanti cromatiche indesiderate (calde o fredde) tra lato destro e sinistro." },
      { title: "Verifica Grigio 50%", desc: "Ideale per giudicare l'omogeneità della retroilluminazione nelle tonalità medie." },
      { title: "Controllo Professionale Display", desc: "Consente di convalidare le prestazioni del display prima di iniziare progetti cromatici critici." }
    ],
    instructionsTitle: "Procedura di Controllo",
    instructions: [
      "Imposta lo sfondo bianco o grigio al 50% in modalità Schermo Intero.",
      "Confronta visivamente la luminosità tra il punto centrale e i quattro angoli del pannello.",
      "Verifica che non ci siano sfumature giallognole o bluastre asimmetriche lungo i lati del monitor."
    ],
    faqs: [
      { q: "Perché l'uniformità del monitor è importante?", a: "Perché un display non uniforme inganna l'occhio durante il fotoritocco, portando a correzioni di colore o luminosità errate." },
      { q: "Qual è una tolleranza accettabile di caduta di luce ai bordi?", a: "Nei monitor da ufficio una variazione del 15-20% è comune; nei monitor grafici calibrati non dovrebbe superare il 5-8%." },
      { q: "I monitor curvi sono meno uniformi?", a: "Sì, la curvatura fisica può causare lievi variazioni di rifrazione della luce verso gli angoli estremi." },
      { q: "I sensori colorimetrici possono correggere l'uniformità?", a: "Alcuni monitor professionali integrano la tecnologia Digital Uniformity Compensation (DUC) a livello hardware." },
      { q: "Il riscaldamento del monitor influisce sull'uniformità?", a: "Sì, lascia sempre riscaldare il monitor per circa 20-30 minuti prima di giudicarne la calibrazione." }
    ]
  },
  'tracing-lightbox': {
    name: "Tavolo Luminoso per Disegno",
    title: "Tavolo Luminoso per Disegno – Trasforma Schermo e Tablet in Lightbox",
    metaDescription: "Usa il monitor, tablet o smartphone come tavolo luminoso per ricalcare disegni, schizzi e tatuaggi. Luce bianca uniforme a schermo intero.",
    h1: "Tavolo Luminoso per Disegno (Digital Lightbox)",
    intro: "Trasforma il tuo tablet, laptop o monitor in un piano luminoso professionale. Poggia il foglio da ricalcare sul display: la luce bianca pura e uniforme attraversa la carta permettendo di trasferire disegni, animazioni e tatuaggi con estrema facilità.",
    featuresTitle: "Caratteristiche del Lightbox Digitale",
    features: [
      { title: "Illuminazione 100% Pura e Omogenea", desc: "Assicura trasparenza perfetta attraverso fogli da disegno fino a 200 g/m²." },
      { title: "Blocco Tocco e Stand-by", desc: "Mantiene la superficie illuminata senza che tocchi accidentali o spegnimenti disturbino il lavoro." },
      { title: "Regolazione Intensità", desc: "Adatta la brillantezza allo spessore della carta per non abbagliare la vista." },
      { title: "Nessuna Scatola Ingombrante", desc: "Elimina la necessità di acquistare costosi e ingombranti tavoli luminosi fisici a LED." }
    ],
    instructionsTitle: "Come Usarlo per Ricalcare",
    instructions: [
      "Attiva la modalità Schermo Intero e imposta la luminosità al massimo livello.",
      "Poggia il foglio originale con il disegno e sovrapponi il foglio da lucido o la carta da disegno.",
      "Usa una matita o penna a tratto fine per tracciare con precisione i contorni illuminati."
    ],
    faqs: [
      { q: "La pressione della matita può rovinare lo schermo?", a: "Disegna sempre con tocco leggero. Su tablet e smartphone con vetro temperato non ci sono rischi; sui laptop con schermo plastico opaco evita pressioni marcate." },
      { q: "Qual è la grammatura massima di carta trasparente alla luce del monitor?", a: "La normale carta per fotocopie da 80g e la carta da lucido fino a 150g si ricalcano agevolmente su schermi da 300+ nit." },
      { q: "Come evito che il tocco della mano interagisca con lo schermo touch?", a: "Usa un guanto da disegno per tavolette grafiche o blocca l'input touch nelle impostazioni del dispositivo." },
      { q: "È adatto per artisti di tatuaggi?", a: "Sì, molti tatuatori usano un iPad con il nostro tool come lightbox portatile per preparare gli stencil ovunque." },
      { q: "Posso cambiare la temperatura del colore?", a: "Sì, una luce leggermente calda (50% calore) risulta più rilassante durante sessioni di ricalco di diverse ore." }
    ]
  },
  'photography-backdrop': {
    name: "Sfondo Fotografico su Schermo",
    title: "Sfondo Fotografico su Schermo – Fondale Luminoso per Macro e Oggetti",
    metaDescription: "Fondale digitale luminoso e pulito per fotografia di prodotti, gioielli e still-life. Sfondo bianco, nero o colorato a schermo intero.",
    h1: "Sfondo Fotografico Luminoso su Display",
    intro: "Crea scatti professionali di prodotti, gadget e gioielli utilizzando il display del tuo computer o tablet come fondale retroilluminato. Elimina le ombre dal basso e ottieni uno sfondo bianco puro o colorato senza allestire set complessi.",
    featuresTitle: "Vantaggi per la Fotografia Still Life",
    features: [
      { title: "Eliminazione Completa delle Ombre a Terra", desc: "Posizionando piccoli oggetti sopra lo schermo illuminato, la luce dal basso neutralizza le ombre di caduta." },
      { title: "Palette Cromatica Infinita", desc: "Cambia colore di sfondo all'istante con un clic senza dover acquistare cartoncini fotografici." },
      { title: "Riflessi Eleganti e Puliti", desc: "La superficie liscia in vetro dei tablet crea riflessi a specchio impeccabili sotto i prodotti." },
      { title: "Luce Continua Bilanciata", desc: "Emissione sRGB stabile a 6500K che semplifica la regolazione del bilanciamento del bianco in camera." }
    ],
    instructionsTitle: "Allestimento del Mini Set Fotografico",
    instructions: [
      "Posa il tablet o laptop in orizzontale su un tavolo e attiva lo schermo a tutto schermo con il colore desiderato.",
      "Posa un foglio di plexiglass trasparente sullo schermo per proteggere il vetro da graffi di oggetti metallici.",
      "Posiziona l'oggetto al centro e regola l'esposizione della fotocamera sulla superficie del prodotto."
    ],
    faqs: [
      { q: "Come posso evitare l'effetto moiré nelle foto dello schermo?", a: "Usa un diaframma più aperto (f/2.8 o f/4) per sfocare la griglia dei pixel del monitor alle spalle dell'oggetto." },
      { q: "Il peso degli oggetti può danneggiare lo schermo?", a: "Oggetti leggeri (gioielli, miniature, cosmetici) non creano problemi. Per oggetti più pesanti, poggia sempre una lastra di plexiglass sollevata ai bordi." },
      { q: "Quale velocità dell'otturatore devo usare?", a: "Scatta a 1/60s o 1/125s per evitare bande di refresh o artefatti di scansione del display." },
      { q: "Posso ottenere un bianco puro 255,255,255 nello scatto?", a: "Sì, sovraesponendo leggermente lo sfondo retroilluminato di circa +1 stop rispetto al soggetto." },
      { q: "Quale colore è migliore per risaltare metalli preziosi?", a: "Lo schermo nero crea riflessi eleganti per l'oro e l'argento; lo schermo bianco esalta la trasparenza di profumi e cristalli." }
    ]
  },
  'color-picker-fullscreen': {
    name: "Selettore Colore Schermo Intero",
    title: "Selettore Colore Schermo Intero – Generatore di Tonalità HEX & RGB Personalizzate",
    metaDescription: "Scegli qualsiasi colore con selettore cromatico visivo o codice HEX/RGB e visualizzalo a schermo intero. Strumento gratuito per designer e artisti.",
    h1: "Selettore Colore a Schermo Intero",
    intro: "Crea, sperimenta e visualizza all'istante qualsiasi tonalità di colore su tutto il tuo display. Inserisci codici HEX o valori RGB precisi per testare l'impatto visivo di sfondi, campioni cromatici o ambienti luminosi d'atmosfera.",
    featuresTitle: "Caratteristiche del Selettore Cromatico",
    features: [
      { title: "Input HEX e Coordinate RGB", desc: "Digita codici esadecimali (#ff6600) o coordinate RGB (255, 102, 0) con aggiornamento in tempo reale." },
      { title: "Palette Spettro a Schermo Intero", desc: "Selettore a colori fluido per esplorare saturazione, tonalità e brillantezza senza limitazioni." },
      { title: "Calibrazione Fedele sRGB a 32-bit", desc: "Rendering nativo del colore senza compressioni o artefatti video del browser." },
      { title: "Esportazione Sfondo Immediata", desc: "Salva la tinta esatta appena creata come sfondo 4K o 8K per i tuoi dispositivi." }
    ],
    instructionsTitle: "Come Scegliere e Applicare il Colore",
    instructions: [
      "Usa la tavolozza o inserisci il tuo codice colore esadecimale nel campo di testo dedicato.",
      "Clicca su 'Schermo Intero' per immergere l'intero display nella tinta prescelta.",
      "Scorri fino alla sezione download se desideri scaricare lo sfondo della tonalità personalizzata."
    ],
    faqs: [
      { q: "Posso inserire codici colore HEX personalizzati?", a: "Sì, inserisci qualsiasi codice a 6 caratteri come #1a73e8 o #ff5722 per visualizzarlo istantaneamente." },
      { q: "I colori visualizzati sono precisi per la stampa (CMYK)?", a: "I monitor visualizzano in spazio colore sRGB. Per la stampa tipografica è necessario convertire i valori RGB in profili CMYK dedicati." },
      { q: "Posso salvare la sfumatura scelta?", a: "Puoi copiare il codice HEX visualizzato o scaricare direttamente l'immagine ad alta risoluzione." },
      { q: "Come esco dalla modalità a schermo intero?", a: "Basta premere il tasto ESC o cliccare in qualsiasi punto dello schermo." },
      { q: "Funziona anche su smartphone?", a: "Sì, l'interfaccia touch consente di selezionare e visualizzare il colore a tutto schermo con un semplice tocco." }
    ]
  },
  'fullscreen-rgb-cycle': {
    name: "Ciclo Colori RGB Schermo",
    title: "Ciclo Colori RGB Schermo – Alternanza Automatica Colori per Test Monitor",
    metaDescription: "Ciclo continuo di colori Rosso, Verde, Blu, Bianco e Nero per sbloccare pixel pigri e testare display. Intervallo di transizione regolabile.",
    h1: "Ciclo Colori RGB a Schermo Intero",
    intro: "Alterna ciclicamente schermate a tinta unita nei colori primari e neutri (Rosso, Verde, Blu, Bianco, Nero) a intervalli regolari. Strumento ideale per stimolare sub-pixel bloccati, verificare la reattività dei pannelli e testare la fedeltà cromatica.",
    featuresTitle: "Vantaggi dell'Alternanza RGB",
    features: [
      { title: "Esercizio e Sblocco Sub-Pixel", desc: "L'impulso continuo e deciso su ciascun canale cromatico stimola i transistor a cristalli liquidi congelati." },
      { title: "Intervalli Selezionabili", desc: "Scegli tra cambi cromatici rapidi a 3 secondi, medi a 5 secondi o rilassati a 10 secondi." },
      { title: "Controlli da Tastiera Intuitivi", desc: "Premi le frecce della tastiera per avanzare manualmente al colore successivo a tuo piacimento." },
      { title: "Zero Carico di Sistema", desc: "Animato via JavaScript leggero: non consuma risorse di calcolo né riscalda il dispositivo." }
    ],
    instructionsTitle: "Come Usare il Ciclo Cromatico",
    instructions: [
      "Seleziona l'intervallo temporale desiderato tra un cambio di colore e l'altro.",
      "Clicca su 'Avvia Ciclo Pixel RGB' e passa a schermo intero.",
      "Lascia eseguire il ciclo per 15-30 minuti se desideri sbloccare un pixel incantato."
    ],
    faqs: [
      { q: "Come fa il ciclo RGB a riattivare un pixel bloccato?", a: "Alternando rapidamente la massima tensione tra i tre sub-pixel (rosso, verde e blu) si sollecita il cristallo liquido a riprendere il corretto allineamento." },
      { q: "Quanto tempo deve durare il ciclo per sbloccare un pixel?", a: "Generalmente sono necessari da 10 a 30 minuti di esecuzione continua; in casi ostinati anche alcune ore." },
      { q: "Questo strumento può danneggiare il monitor?", a: "No, la visualizzazione di colori standard rientra nei normali parametri operativi del pannello." },
      { q: "Posso mettere in pausa il ciclo su un colore specifico?", a: "Sì, clicca sul pulsante 'Ferma' o usa i tasti numerici 1-9 per fissare immediatamente una tinta." },
      { q: "Funziona anche su TV tramite browser?", a: "Sì, aprendo questa pagina sul browser di qualsiasi Smart TV puoi testare il pannello a schermo intero." }
    ]
  },
  'black-screen-10-hours': {
    name: "Schermo Nero 10 Ore",
    title: "Schermo Nero 10 Ore – Display Nero Continuo per Sonno e Risparmio OLED",
    metaDescription: "Schermo nero assoluto senza interruzioni per 10 ore. Ideale per dormire al buio, risparmiare batteria su display OLED e ascoltare musica.",
    h1: "Schermo Nero 10 Ore (Senza Sospensione)",
    intro: "Mantieni il tuo dispositivo acceso con uno schermo nero assoluto fino a 10 ore consecutive. Evita l'illuminazione fastidiosa nella stanza mentre ascolti podcast, riduci i consumi energetici su schermi OLED o mantieni attive sessioni di lavoro notturne.",
    featuresTitle: "Applicazioni per 10 Ore di Schermo Nero",
    features: [
      { title: "Oscurità Totale per il Sonno", desc: "Neutralizza ogni bagliore del monitor per non disturbare il riposo notturno e la produzione di melatonina." },
      { title: "Consumo Zero su Pannelli OLED", desc: "I pixel neri sugli OLED sono fisicamente spenti, riducendo drasticamente il consumo elettrico." },
      { title: "Prevenzione Sospensione PC", desc: "Mantiene il computer sveglio per download lunghi o rendering senza dover cambiare le opzioni energetiche del sistema." },
      { title: "Nessun Video Pesante da Scaricare", desc: "Non richiede lo streaming di pesanti video YouTube neri: consuma zero banda internet." }
    ],
    instructionsTitle: "Come Attivare la Sessione di 10 Ore",
    instructions: [
      "Clicca su Schermo Intero per coprire completamente barre e icone di sistema.",
      "Regola la luminosità del display secondo le tue preferenze.",
      "Il blocco sospensione integrato garantirà il funzionamento ininterrotto per tutta la notte."
    ],
    faqs: [
      { q: "Il computer andrà in stand-by durante le 10 ore?", a: "No, la nostra applicazione mantiene attivo il Screen Wake Lock per tutta la durata della sessione." },
      { q: "Perché è meglio di un video di 10 ore su YouTube?", a: "I video online consumano gigabyte di dati e scaldano la scheda video; il nostro strumento è statico e usa 0 KB di banda." },
      { q: "Uno schermo nero consuma batteria su schermi LCD?", a: "Sui pannelli LCD la lampada di retroilluminazione rimane accesa; sui pannelli OLED e AMOLED il consumo energetico cala fino al 90%." },
      { q: "Posso ascoltare musica o podcast con lo schermo nero?", a: "Sì, avvia il tuo audio in un'altra scheda o applicazione e goditi il buio totale." },
      { q: "Come esco prima delle 10 ore?", a: "Tocca lo schermo o premi il tasto ESC in qualsiasi momento." }
    ]
  },
  'white-screen-1-hour': {
    name: "Schermo Bianco 1 Ora",
    title: "Schermo Bianco 1 Ora – Illuminazione Timerizzata per Studio e Lavoro",
    metaDescription: "Sessione di 1 ora a schermo bianco continuo. Perfetta per sessioni di disegno, pulizia approfondita o luce di lavoro senza timeout.",
    h1: "Schermo Bianco 1 Ora (Timer Integrato)",
    intro: "Attiva uno schermo bianco brillante e uniforme garantito per 1 ora di operatività continua. Ideale per scandire sessioni di studio e concentrazione, ricalcare illustrazioni o eseguire pulizie dettagliate di più dispositivi.",
    featuresTitle: "Vantaggi della Sessione da 1 Ora",
    features: [
      { title: "Timer e Luce Combinati", desc: "Una sessione di illuminazione fissa di 60 minuti adatta al ritmo di lavoro e studio produttivo." },
      { title: "Luce di Lettura Senza Timeout", desc: "Evita il fastidioso spegnimento dello schermo ogni 2 minuti mentre consulti manuali cartacei." },
      { title: "Illuminazione Uniforme per Disegno", desc: "Ideale per completare una tavola di disegno con luminosità solida e costante." },
      { title: "Zero Consumo Dati", desc: "Tutto viene gestito localmente dal browser: leggero, rapido e senza connessione continuativa." }
    ],
    instructionsTitle: "Come Iniziare la Sessione da 1 Ora",
    instructions: [
      "Posiziona il dispositivo nella tua postazione di studio o disegno.",
      "Clicca su 'Schermo Intero' per avviare l'ora di illuminazione ininterrotta.",
      "Al termine dei tuoi compiti, premi ESC per ripristinare il desktop ordinario."
    ],
    faqs: [
      { q: "Cosa succede allo scadere dell'ora?", a: "Lo schermo continua a rimanere attivo fino alla tua interazione, evitando spegnimenti bruschi mentre sei concentrato." },
      { q: "Posso usarlo come lampada da scrivania per studiare?", a: "Sì, la luce bianca diffusa del monitor illumina l'area di lavoro antistante riducendo il contrasto con la stanza." },
      { q: "Scalda il display del portatile?", a: "No, la retroilluminazione a LED standard opera a temperature sicure e controllate." },
      { q: "Posso regolare la temperatura del colore se la luce è troppo forte?", a: "Sì, puoi usare il cursore del calore nella nostra homepage per una tonalità crema più calda." },
      { q: "Funziona anche a schermo intero su Mac e Windows?", a: "Sì, supporta la modalità fullscreen nativa su tutti i sistemi operativi moderni." }
    ]
  },
  'screen-timer': {
    name: "Timer Schermo",
    title: "Timer Schermo a Tutto Schermo – Cronometro Pulito per Focus e Presentazioni",
    metaDescription: "Timer e conto alla rovescia a schermo intero privo di distrazioni. Ideale per oratori, sessioni Pomodoro, allenamenti e riunioni.",
    h1: "Timer Schermo a Tutto Schermo (Minimal Focus)",
    intro: "Un timer a tutto schermo pulito, minimale e ad altissima visibilità. Progettato per sessioni di concentrazione profonda, presentazioni orali, esami in classe e pause produttive senza elementi grafici di disturbo.",
    featuresTitle: "Caratteristiche del Timer Minimalista",
    features: [
      { title: "Massima Visibilità a Distanza", desc: "Numeri grandi e ad alto contrasto chiaramente leggibili anche dal fondo di un'aula o sala riunioni." },
      { title: "Nessuna Notifica Invasiva", desc: "Zero pop-up, suoni fastidiosi o pubblicità che interrompono la concentrazione o la presentazione." },
      { title: "Controllo Luminosità di Sfondo", desc: "Alterna tra modalità chiara ad alta energia o scura per ambienti rilassanti." },
      { title: "Screen Wake Lock Integrato", desc: "Il timer rimane sempre visibile in primo piano senza rischiare che il monitor vada in sleep." }
    ],
    instructionsTitle: "Utilizzo del Timer Schermo",
    instructions: [
      "Imposta i minuti desiderati per la tua sessione di lavoro o presentazione.",
      "Attiva la modalità Schermo Intero per eliminare qualsiasi distrazione sul display.",
      "Tieni d'occhio il tempo trascorso a colpo d'occhio da qualsiasi angolazione della stanza."
    ],
    faqs: [
      { q: "Il timer funziona anche se cambio scheda?", a: "Sì, il calcolo del tempo si basa sul clock di sistema e non perde precisione." },
      { q: "È adatto per la tecnica Pomodoro?", a: "Perfetto per impostare blocchi da 25 minuti di lavoro e 5 minuti di pausa." },
      { q: "I numeri sono leggibili da lontano con un proiettore?", a: "Sì, il font ad alto contrasto è studiato appositamente per proiettori e grandi schermi TV." },
      { q: "Posso usarlo durante esami o gare sportive?", a: "Certamente, non richiede connessione internet attiva una volta caricata la pagina." },
      { q: "Come si azzera il conteggio?", a: "Con un semplice tocco o clic sul pulsante di ripristino dedicato." }
    ]
  }
};

// Define the 15 tools in Dutch
const toolsNlData = {
  'dead-pixel-test': {
    name: "Dode Pixel Test",
    title: "Dode Pixel Test – Gratis Volledig Scherm Monitor & Telefoon Schermchecker",
    metaDescription: "Test je beeldscherm op dode, vastzittende en defecte pixels in volledig scherm. Gratis online pixelchecker met automatische RGB-kleurencyclus.",
    h1: "Dode Pixel Test (Volledig Scherm Schermchecker)",
    intro: "Identificeer defecte, vastzittende of dode subpixels op je monitor, laptop, tablet of smartphone. Onze tool schakelt automatisch tussen zuiver Rood, Groen, Blauw, Wit en Zwart om schermfouten direct zichtbaar te maken.",
    featuresTitle: "Hoe Deze Pixelchecker Je Scherm Evalueert",
    features: [
      { title: "Detectie van Dode Pixels", desc: "Dode pixels blijven permanent uitgeschakeld en zijn zichtbaar als zwarte puntjes op lichte achtergronden." },
      { title: "Isolatie van Vastzittende Pixels", desc: "Vastzittende pixels blijven hangen op één primaire kleur. De kleurwisseling maakt ze onmiddellijk zichtbaar." },
      { title: "Automatische RGB-Cyclus", desc: "Stel het interval in op 3, 5 of 10 seconden voor een grondige inspectie van je hele scherm." },
      { title: "Geschikt voor Elk Schermtype", desc: "Werkt betrouwbaar op OLED, AMOLED, IPS, VA en TN panelen op elke resolutie." }
    ],
    instructionsTitle: "Instructies voor de Pixeltest",
    instructions: [
      "Maak je beeldscherm eerst grondig schoon om stofdeeltjes niet te verwarren met dode pixels.",
      "Klik op 'Volledig Scherm' of tik op het voorbeeldvenster om alle browserelementen te verbergen.",
      "Gebruik de sneltoetsen of start de cyclus om elke primaire kleur van rand tot rand te inspecteren."
    ],
    faqs: [
      { q: "Wat is het verschil tussen een dode en een vastzittende pixel?", a: "Een dode pixel blijft permanent zwart (geen stroom), terwijl een vastzittende pixel continu één kleur (rood, groen of blauw) toont en vaak nog hersteld kan worden." },
      { q: "Kan een snelle RGB-cyclus vastzittende pixels verhelpen?", a: "Ja, het snel afwisselen van felle primaire kleuren kan de vloeibare kristallen van een vastzittende subpixel weer activeren." },
      { q: "Hoe onderscheid ik een stofje van een dode pixel?", a: "Kijk schuin naar het scherm: stof ligt bovenop het schermoppervlak, terwijl een dode pixel zich dieper in het paneel bevindt." },
      { q: "Hoeveel dode pixels vallen onder de fabrieksgarantie?", a: "Dit verschilt per fabrikant en ISO-klasse; vaak geeft een cluster van 3 tot 5 defecte subpixels recht op vervanging." },
      { q: "Werkt deze test ook op mobiele telefoons?", a: "Ja, direct in de mobiele browser op iPhone en Android zonder installatie van apps." }
    ]
  },
  'screen-cleaning': {
    name: "Scherm Schoonmaken",
    title: "Scherm Schoonmaken Modus – Helder Wit Scherm voor Monitor & Laptop",
    metaDescription: "Toon een egaal helder wit scherm om stofjes, vingerafdrukken en vegen zichtbaar te maken. Schermvergrendeling voorkomt uitschakeling.",
    h1: "Scherm Schoonmaken (Continu Actief Scherm)",
    intro: "Reinig het beeldscherm van je laptop, computer of smartphone veilig en grondig. Het zuiver witte scherm op 100% helderheid accentueert stof en vuil, terwijl je scherm actief blijft zonder in slaapstand te vallen.",
    featuresTitle: "Voordelen van de Schoonmaakmodus",
    features: [
      { title: "Direct Vuil Zichtbaar", desc: "Het egale witte tegenlicht maakt vlekken en vetsporen zichtbaar die op een zwart scherm wegvallen." },
      { title: "Geen Slaapstand", desc: "Je scherm blijft continu verlicht zodat je rustig kunt schoonmaken zonder onderbrekingen." },
      { title: "Geen Installatie Nodig", desc: "Werkt direct in je internetbrowser zonder onveilige programma's te downloaden." },
      { title: "Beschermt Schermcoatings", desc: "Zorgt ervoor dat je precies ziet waar je moet vegen met minimale druk op het paneel." }
    ],
    instructionsTitle: "Veilig Je Scherm Reinigen",
    instructions: [
      "Open de modus op Volledig Scherm zodat de hele monitor egaal oplicht.",
      "Blaas eerst loszittend stof weg om krassen door zandkorrels te voorkomen.",
      "Veeg zachtjes met een schone, licht met gedestilleerd water bevochtigde microvezeldoek."
    ],
    faqs: [
      { q: "Waarom een wit scherm gebruiken bij het schoonmaken?", a: "Omdat een helder wit scherm vingerafdrukken en vegen direct verlicht en zichtbaar maakt." },
      { q: "Mag ik een scherm reinigen terwijl het aanstaat?", a: "Ja, zolang je zachtjes veegt met een microvezeldoek en niet hard drukt op het paneel." },
      { q: "Welk schoonmaakmiddel is veilig voor beeldschermen?", a: "Zuiver gedestilleerd water op een microvezeldoek. Gebruik nooit glasreinigers met ammoniak of alcohol." },
      { q: "Hoe voorkom ik strepen na het schoonmaken?", a: "Wrijf direct na met een tweede droge microvezeldoek om verdampingsstrepen van water tegen te gaan." },
      { q: "Waarom mag ik geen keukenpapier gebruiken?", a: "Keukenpapier bevat stugge houtvezels die onherstelbare microkrassen maken in de ontspiegelende coating." }
    ]
  },
  'zoom-ring-light': {
    name: "Zoom Ringlamp Scherm",
    title: "Zoom Ringlamp Scherm – Zachte Monitorverlichting voor Videobellen",
    metaDescription: "Gebruik je monitor of tablet als zachte invulverlichting voor Zoom, Teams en Meet. Instelbare helderheid en kleurwarmte.",
    h1: "Zoom Ringlamp Scherm (Videogespreksverlichting)",
    intro: "Verbeter direct de beeldkwaliteit van je webcam tijdens online vergaderingen. Verander je monitor of een tweede iPad in een groot softbox-lichtpaneel met aanpasbare kleurtemperatuur en zachte schaduwen.",
    featuresTitle: "Eigenschappen van Schermverlichting",
    features: [
      { title: "Aanpasbare Kleurtemperatuur", desc: "Kies warme tinten (3200K) voor een gezonde teint of koel wit (5600K) voor frisse scherpte." },
      { title: "Groot Zacht Lichtvlak", desc: "Een scherm van 15 tot 27 inch geeft veel zachtere, flatteuzere schaduwen dan een kleine felle ringlamp." },
      { title: "Regelbare Lichtsterkte", desc: "Pas de helderheid aan om oogvermoeidheid tijdens lange videovergaderingen te voorkomen." },
      { title: "Scherm Blijft Continu Aan", desc: "Screen Wake Lock zorgt ervoor dat je lichtbron nooit onverwacht uitgaat tijdens een call." }
    ],
    instructionsTitle: "Je Verlichting Instellen",
    instructions: [
      "Plaats het schermvenster op je monitor direct achter of naast je webcam.",
      "Schuif de warmteregelaar naar een natuurlijk ogende huidskleur.",
      "Verhoog de helderheid totdat donkere kringen onder je ogen zacht worden opgevuld."
    ],
    faqs: [
      { q: "Kan een computerscherm echt een ringlamp vervangen?", a: "Ja, door het grote oppervlak fungeert het scherm als een professionele fotostudio-softbox voor je gezicht." },
      { q: "Welke warmte-instelling kan ik het beste kiezen?", a: "Een waarde tussen 40% en 60% warmte compenseert de koele, blauwachtige gloed van standaard webcams." },
      { q: "Werkt dit met Teams, Zoom en Google Meet?", a: "Ja, de tool draait gewoon in je browser naast elk type videobel-software." },
      { q: "Is dit vermoeiend voor mijn ogen?", a: "Nee, diffuus schermlicht is aanzienlijk aangenamer voor de ogen dan geconcentreerde felle LED-lampjes." },
      { q: "Kan ik een tablet naast mijn laptop zetten als zijlicht?", a: "Zeker, een tablet die schuin op je gezicht schijnt zorgt voor een prachtige, professionele dieptewerking." }
    ]
  },
  'webcam-light': {
    name: "Webcam Verlichting",
    title: "Webcam Verlichting – Zacht Frontaal Schermlicht voor Streaming & Video",
    metaDescription: "Gratis zachte frontale schermverlichting voor creators, streamers en vergaderingen. Verminder videoruis en verbeter je webcambeeld.",
    h1: "Webcam Verlichting & Streaming Licht",
    intro: "Verbeter direct de helderheid van je webcambeeld en elimineer korrelige videoruis veroorzaakt door slecht omgevingslicht. Gebruik je scherm als een gelijkmatige, natuurlijke lichtbron.",
    featuresTitle: "Voordelen voor Videostreaming",
    features: [
      { title: "Minder Digitale Ruis", desc: "Webcamsensors hebben voldoende licht nodig om korrelige beelden en lagere framerates te voorkomen." },
      { title: "Evenwichtige Huidtinten", desc: "Pas de tint nauwkeurig aan op het bestaande omgevingslicht in je werkkamer." },
      { title: "Geen Schittering in Brillen", desc: "Het brede lichtoppervlak vermindert scherpe spiegelingen in brillenglazen vergeleken met felle lampen." },
      { title: "Bespaar op Hardware", desc: "Geen dure bureaulampen nodig; gebruik gewoon de beeldschermen die al op je bureau staan." }
    ],
    instructionsTitle: "Zo Krijg Je het Beste Beeld",
    instructions: [
      "Open de pagina op het scherm dat zich het dichtst bij je webcamlens bevindt.",
      "Pas de kleurtemperatuur aan het tijdstip van de dag aan: koeler overdag, warmer in de avond.",
      "Bekijk het resultaat in je opnamesoftware totdat je gezicht helder en scherp naar voren komt."
    ],
    faqs: [
      { q: "Waarom oogt mijn webcambeeld zo korrelig?", a: "Bij te weinig licht schroeft de camera de ISO-gevoeligheid omhoog, wat direct leidt tot digitale beeldruis." },
      { q: "Is dit geschikt voor streamen op Twitch of YouTube?", a: "Ja, veel streamers gebruiken een tweede monitor met zacht warm licht om hun gezicht te belichten tijdens gaming." },
      { q: "Hoe voorkom ik reflecties in mijn brilglazen?", a: "Zet het schermlicht iets hoger dan ooghoogte en verlaag de helderheid een beetje." },
      { q: "Kost dit veel batterij op een laptop?", a: "Nee, alleen de normale achtergrondverlichting van het scherm is actief, zonder zware belasting van de processor." },
      { q: "Kan ik ook andere kleuren kiezen voor sfeerlicht?", a: "Ja, via de kleurkiezer kun je sfeervolle paarse, cyaan of amberkleurige accenten creëren." }
    ]
  },
  'screen-flicker-test': {
    name: "Schermflikkering Test (PWM)",
    title: "Schermflikkering Test – Detecteer Schadelijke PWM Flikkering op Je Monitor",
    metaDescription: "Test of je monitor last heeft van PWM-schermflikkering die vermoeide ogen veroorzaakt. Gratis online diagnosetool voor schermen.",
    h1: "Schermflikkering Test (Flicker & PWM Checker)",
    intro: "Onderzoek of jouw computerscherm of telefoondisplay gebruikmaakt van Pulse-Width Modulation (PWM) om de helderheid te dimmen. Onzichtbare flikkering kan leiden tot hoofdpijn, droge ogen en snelle vermoeidheid.",
    featuresTitle: "Hoe Schermflikkering te Herkennen",
    features: [
      { title: "PWM-Diagnose met Hoog Contrast", desc: "Biedt hoogfrequente patronen en strakke contrastlijnen om flikkering via een camera zichtbaar te maken." },
      { title: "Testen op Verschillende Helderheden", desc: "Achterhaal op welke helderheidsniveaus jouw monitor overschakelt op flikkerende PWM-sturing." },
      { title: "Oogcomfort Verbeteren", desc: "Helpt je de veiligste beeldscherminstellingen te kiezen voor lange werkdagen." },
      { title: "Universeel Inzetbaar", desc: "Geschikt voor desktopmonitoren, laptopdisplays, tablets en smartphones." }
    ],
    instructionsTitle: "Zo Test Je op Flikkering",
    instructions: [
      "Zet de helderheid van je monitor achtereenvolgens op 25%, 50% en 100%.",
      "Richt de camera van je smartphone op het scherm in video- of slow-motionmodus.",
      "Zie je donkere lopende banden of strepen op je telefoonscherm? Dan gebruikt de monitor PWM-flikkering."
    ],
    faqs: [
      { q: "Wat is PWM-schermflikkering?", a: "Pulse-Width Modulation regelt de helderheid door de schermverlichting honderden keren per seconde razendsnel aan en uit te schakelen." },
      { q: "Welke klachten veroorzaakt onzichtbare flikkering?", a: "Spanningshoofdpijn, branderige ogen, wazig zicht en concentratieverlies na enkele uren beeldschermwerk." },
      { q: "Hoe kan ik PWM-flikkering vermijden?", a: "Zet de hardware-helderheid van je monitor op 100% (waar PWM uitstaat) en dim het beeld softwarematig via je grafische kaart." },
      { q: "Hebben OLED-schermen ook last van PWM?", a: "Ja, veel smartphones en laptops met OLED-panelen gebruiken PWM op lagere helderheidsstanden." },
      { q: "Wat houdt het 'Flicker-Free' keurmerk in?", a: "Dit betekent dat de monitor DC Dimming (gelijkstroom) gebruikt en op alle helderheidsniveaus 100% flikkervrij is." }
    ]
  },
  'backlight-bleed-test': {
    name: "Backlight Bleed Test",
    title: "Backlight Bleed Test – Controleer Lichtlekkage en IPS Glow op Je Monitor",
    metaDescription: "Test je beeldscherm op lichtlekkage langs de schermranden in het donker. Zuiver zwart scherm in volledig scherm voor LCD- en IPS-monitoren.",
    h1: "Backlight Bleed Test (Lichtlekkage Checker)",
    intro: "Onderzoek je beeldscherm op hinderlijke lichtinval langs de randen (backlight bleed) en assemblagefouten. Toon een diepzwart scherm in een donkere kamer om de kwaliteit van je LCD-paneel te controleren binnen de retourtermijn.",
    featuresTitle: "Wat Deze Test Onthult",
    features: [
      { title: "Detectie van Randspanning", desc: "Te strak aangedraaide schroeven in de behuizing veroorzaken lichte vlekken langs de schermranden." },
      { title: "Verschil Tussen Bleed en IPS Glow", desc: "Helpt bepalen of het licht meebeweegt met je kijkhoek (IPS Glow) of permanent op één plek blijft (Bleed)." },
      { title: "Puur Zwart Zonder Interfaces", desc: "Verbergt muisaanwijzers en vensterranden voor een onbelemmerde kwaliteitscontrole." },
      { title: "Ondersteuning bij Garantieclaims", desc: "Biedt een helder referentiebeeld om defecte panelen te documenteren voor de fabrikant." }
    ],
    instructionsTitle: "Zo Voer Je de Test Uit",
    instructions: [
      "Schakel de verlichting in je kamer volledig uit voor een donkere testomgeving.",
      "Open de modus op Volledig Scherm met het zuiver zwarte testvlak.",
      "Kijk kritisch naar de vier hoeken: als er geel of wit licht doorlekt, heeft het scherm last van backlight bleed."
    ],
    faqs: [
      { q: "Wat is backlight bleed precies?", a: "Het is een fysieke imperfectie waarbij licht van de achtergrondlampjes ontsnapt langs de randen van het LCD-paneel." },
      { q: "Wat is het verschil tussen Backlight Bleed en IPS Glow?", a: "IPS Glow verandert van intensiteit als je je hoofd beweegt; Backlight Bleed blijft altijd op exact dezelfde plek zichtbaar." },
      { q: "Wordt backlight bleed na verloop van tijd erger?", a: "Meestal blijft het stabiel, tenzij de monitorbehuizing onder spanning komt te staan door temperatuurschommelingen." },
      { q: "Kunnen OLED-monitoren backlight bleed vertonen?", a: "Nee, OLED-panelen hebben geen achtergrondverlichting: elke pixel schakelt zichzelf individueel volledig uit op zwart." },
      { q: "Kan ik backlight bleed zelf oplossen?", a: "Soms helpt het om de behuizing heel voorzichtig iets te ontspannen, maar bij ernstige lekkage is vervanging onder garantie de beste optie." }
    ]
  },
  'oled-burn-in-test': {
    name: "OLED Inbrand Test",
    title: "OLED Inbrand Test – Controleer Beeldretentie op OLED & AMOLED Schermen",
    metaDescription: "Grondige test op inbranden en slijtage van OLED-tv's, computermonitoren en smartphones. Spoor vastgebrande logo's en taakbalken op.",
    h1: "OLED Inbrand Test & Beeldretentie Checker",
    intro: "Controleer of jouw OLED, QD-OLED of AMOLED beeldscherm sporen vertoont van ongelijkmatige slijtage of permanente beeldretentie. Schakel tussen egale testkleuren om ingebrande zenderlogo's, taakbalken of HUD-elementen op te sporen.",
    featuresTitle: "Diagnostische Mogelijkheden voor OLED",
    features: [
      { title: "Rode, Groene en Blauwe Subpixeltests", desc: "Blauwe en rode organische diodes slijten sneller; monochrome tests isoleren elke kleurlaag afzonderlijk." },
      { title: "5% en 10% Grijstesten", desc: "Lage grijswaarden maken lichte uniformiteitsfouten direct zichtbaar die op zuiver zwart onzichtbaar blijven." },
      { title: "Detectie van Taakbalken en Logo's", desc: "Onthult vage schaduwen van statische interface-elementen die langdurig in beeld hebben gestaan." },
      { title: "Preventieve Schermcontrole", desc: "Zorg dat je beginnende inbranding tijdig ontdekt voordat het onherstelbaar permanent wordt." }
    ],
    instructionsTitle: "Zo Inspecteer Je Jouw OLED-Scherm",
    instructions: [
      "Open de test op Volledig Scherm en bekijk eerst het 5% grijze testvlak in een verduisterde kamer.",
      "Schakel vervolgens tussen de egale testkleuren Rood, Groen, Blauw en Wit.",
      "Controleer aandachtig de plekken waar normaal gesproken je taakbalk, browsertabbladen of gamesymbolen staan."
    ],
    faqs: [
      { q: "Wat is OLED-inbranding?", a: "Het is de permanente, ongelijkmatige slijtage van individuele organische pixels door langdurige weergave van felle, statische beelden." },
      { q: "Wat is het verschil tussen tijdelijke beeldretentie en echt inbranden?", a: "Beeldretentie verdwijnt vanzelf na een paar minuten bewegend beeld; inbranding is een permanente hardwarematige veroudering." },
      { q: "Hoe voorkom ik inbranden op mijn OLED-computermonitor?", a: "Verberg de Windows-taakbalk automatisch, gebruik een zwarte screensaver na 2 minuten en activeer de Pixel Shift functies van je monitor." },
      { q: "Werkt de ingebouwde 'Pixel Refresh' functie van de monitor?", a: "Ja, deze functie kalibreert de spanning over de pixels en moet regelmatig de kans krijgen om op stand-by te draaien." },
      { q: "Dekt de fabrieksgarantie inbranden?", a: "Steeds meer fabrikanten van moderne gaming-OLED's bieden tegenwoordig 2 of 3 jaar garantie inclusief inbrandbescherming." }
    ]
  },
  'monitor-uniformity-test': {
    name: "Monitor Uniformiteit Test",
    title: "Monitor Uniformiteit Test – Controleer Helderheid & Kleurechtheid",
    metaDescription: "Meet de consistentie van kleur en helderheid over je gehele beeldscherm. Onmisbare evaluatietool voor fotografen en ontwerpers.",
    h1: "Monitor Kleur- en Helderheidsuniformiteit Test",
    intro: "Beoordeel de kleur- en helderheidsverdeling van je beeldscherm van rand tot rand. Essentieel voor fotografen, grafisch ontwerpers en video-editors die moeten kunnen vertrouwen op een consistente kleurweergave over het hele paneel.",
    featuresTitle: "Waarom Schermuniformiteit Testen?",
    features: [
      { title: "Vignettering en Helderheidsval Opsporen", desc: "Veel monitoren verliezen in de uiterste hoeken tot wel 20% helderheid ten opzichte van het midden." },
      { title: "Kleurtemperatuur Consistentie", desc: "Brengt hinderlijke kleurverschuivingen (geel of blauw) tussen de linker- en rechterkant aan het licht." },
      { title: "50% Grijs Referentievlak", desc: "Ideaal om de gelijkmatigheid van de achtergrondverlichting in middentonen te inspecteren." },
      { title: "Kwaliteitscontrole voor Professionals", desc: "Valideer de prestaties van je display voordat je begint aan kleurkritische projecten." }
    ],
    instructionsTitle: "Instructies voor de Uniformiteitstest",
    instructions: [
      "Selecteer het witte of 50% grijze testvlak in de modus Volledig Scherm.",
      "Vergelijk het midden van het scherm met de vier hoeken op verschillen in helderheid.",
      "Controleer of de kleurtoon neutraal blijft en niet verloopt naar roze, groen of blauw aan de zijkanten."
    ],
    faqs: [
      { q: "Waarom is schermuniformiteit zo belangrijk?", a: "Een scherm dat aan de randen donkerder of geler is, kan leiden tot verkeerde kleurcorrecties tijdens beeldbewerking." },
      { q: "Hoeveel helderheidsafname in de hoeken is acceptabel?", a: "Bij standaard kantoorschermen is 15-20% gebruikelijk; professionele grafische monitoren mogen maximaal 5-8% afwijken." },
      { q: "Zijn gebogen (curved) monitoren minder uniform?", a: "Ja, door de fysieke buiging van het paneel treedt er aan de zijkanten vaker een lichte lichtvervorming op." },
      { q: "Kan een monitor zichzelf corrigeren?", a: "Duurdere grafische monitoren beschikken over Digital Uniformity Compensation (DUC) om afwijkingen automatisch weg te regelen." },
      { q: "Heeft opwarmtijd invloed op de test?", a: "Ja, laat een beeldscherm altijd minimaal 20 tot 30 minuten opwarmen voor een betrouwbare beoordeling." }
    ]
  },
  'tracing-lightbox': {
    name: "Lichtbak Tekenen Scherm",
    title: "Lichtbak Tekenen Scherm – Maak van Je Tablet of Monitor een Digitale Lichtbak",
    metaDescription: "Gebruik je monitor, tablet of telefoon als lichtbak om tekeningen, schetsen en tatoeages over te trekken. Zuiver wit egaal licht.",
    h1: "Lichtbak Tekenen Scherm (Digitale Lightbox)",
    intro: "Verander je tablet, laptop of computerscherm in een professionele lichtbak voor tekenaars. Leg je originele schets en tekenpapier op het display: het egale witte tegenlicht schijnt helder door het papier heen voor moeiteloos overtrekken.",
    featuresTitle: "Eigenschappen van de Digitale Lichtbak",
    features: [
      { title: "100% Zuiver Egaal Tegenlicht", desc: "Biedt uitstekende doorlichting voor standaard tekenpapier en schetsbladen tot 200 g/m²." },
      { title: "Aanraak- en Slaapstandvergrendeling", desc: "Houdt het scherm continu verlicht zonder dat per ongeluk aantikken je werk verstoort." },
      { title: "Regelbare Helderheid", desc: "Pas het lichtniveau eenvoudig aan op de dikte van het papier om verblinding te voorkomen." },
      { title: "Geen Aparte Apparatuur Nodig", desc: "Bespaart de aanschaf van een dure, logge losse LED-lichtbak op je bureau." }
    ],
    instructionsTitle: "Zo Trek Je Tekeningen Over",
    instructions: [
      "Open de pagina op Volledig Scherm en zet de helderheid van je apparaat op maximaal.",
      "Leg je originele schets op het scherm en plaats je overtrek- of tekenpapier erbovenop.",
      "Gebruik een fijn potlood of inktpen om de oplichtende lijnen met precisie over te nemen."
    ],
    faqs: [
      { q: "Kan het doordrukken van het potlood mijn scherm beschadigen?", a: "Teken altijd met lichte hand. Bij tablets met gehard glas is er geen risico; bij zachte plastic laptopschermen moet je harde druk vermijden." },
      { q: "Hoe dik mag het papier maximaal zijn?", a: "Standaard 80 grams kopieerpapier en overtrekpapier tot 150 gram zijn uitstekend doorzichtig op schermen van 300+ nits." },
      { q: "Hoe voorkom ik dat mijn hand het touchscreen activeert?", a: "Draag een tekenhandschoen of schakel de touch-invoer tijdelijk uit in de instellingen van je tablet." },
      { q: "Is dit geschikt voor het maken van tattoo-stencils?", a: "Ja, veel tattoo-artiesten gebruiken een iPad met deze tool als compacte, draagbare lichtbak op reis." },
      { q: "Kan ik de lichtkleur aanpassen?", a: "Ja, een iets warmere schermtint (50% warmte) is aangenamer voor de ogen bij langdurige tekensessies." }
    ]
  },
  'photography-backdrop': {
    name: "Fotografie Achtergrond Scherm",
    title: "Fotografie Achtergrond Scherm – Verlichte Achtergrond voor Productfoto's",
    metaDescription: "Schoon en egaal verlicht digitaal decor voor productfotografie, sieraden en still-life. Wit, zwart of gekleurd scherm in volledig scherm.",
    h1: "Fotografie Achtergrond op Scherm",
    intro: "Maak professionele foto's van kleine producten, sieraden en gadgets met je beeldscherm of tablet als verlichte achtergrond. Elimineer slagschaduwen en creëer direct een zuiver witte of sfeervolle achtergrond zonder fotostudio.",
    featuresTitle: "Voordelen voor Productfotografie",
    features: [
      { title: "Geen Schaduwen aan de Onderkant", desc: "Door kleine voorwerpen op een verlicht scherm te leggen, verdwijnen harde grondschaduwen volledig." },
      { title: "Oneindig Veel Kleuropties", desc: "Verander met één klik van achtergrondkleur zonder dure papieren fotorollen aan te schaffen." },
      { title: "Elegante Spiegelingen", desc: "Het gladde glasoppervlak van tablets zorgt voor een stijlvolle, luxe reflectie onder je producten." },
      { title: "Stabiel Continu Licht", desc: "Natuurlijke sRGB-lichtopbrengst op 6500K die de witbalansinstelling op je camera vereenvoudigt." }
    ],
    instructionsTitle: "Je Mini-Fotostudio Opstellen",
    instructions: [
      "Leg je tablet of laptop plat op tafel en open het scherm op Volledig Scherm met de gewenste kleur.",
      "Plaats eventueel een dunne transparante acrylplaat op het scherm om krassen door metalen voorwerpen te voorkomen.",
      "Zet het te fotograferen product in het midden en stel je camera scherp op het product."
    ],
    faqs: [
      { q: "Hoe voorkom ik moiré-strepen op de foto van het scherm?", a: "Gebruik een groter diafragma (zoals f/2.8 of f/4) om het schermrooster achter je onderwerp zacht onscherp te maken." },
      { q: "Kunnen voorwerpen het scherm beschadigen?", a: "Lichte producten (cosmetica, sieraden) zijn volkomen veilig. Gebruik voor zwaardere voorwerpen een beschermende glasplaat." },
      { q: "Welke sluitertijd kan ik het beste gebruiken?", a: "Fotografeer met 1/60s of 1/125s om synchronisatiestrepen van de schermverversing te vermijden." },
      { q: "Krijg ik hiermee een 100% witte achtergrond (RGB 255)?", a: "Ja, door de tegenverlichting van het scherm ongeveer +1 stop over te belichten ten opzichte van het hoofdonderwerp." },
      { q: "Welke kleur achtergrond laat zilver en goud het mooist uitkomen?", a: "Een zwart scherm geeft luxe, diepe contrasten bij sieraden; een wit scherm benadrukt glazen flacons en kristal." }
    ]
  },
  'color-picker-fullscreen': {
    name: "Kleurkiezer Volledig Scherm",
    title: "Kleurkiezer Volledig Scherm – Aangepaste HEX & RGB Kleurschermen",
    metaDescription: "Kies elke gewenste kleur via de visuele kleurkiezer of HEX/RGB invoer en bekijk deze in volledig scherm. Gratis tool voor ontwerpers.",
    h1: "Kleurkiezer op Volledig Scherm",
    intro: "Kies, test en bekijk elke denkbare kleur direct over je hele beeldscherm. Voer exacte HEX-codes of RGB-waarden in om kleurmonsters, achtergronden en sfeerverlichting op ware grootte te ervaren.",
    featuresTitle: "Functies van de Kleurkiezer",
    features: [
      { title: "HEX en RGB Invoer", desc: "Typ direct kleurcodes in (#007acc) of decimale RGB-waarden (0, 122, 204) met directe schermupdate." },
      { title: "Volledig Kleurenspectrum", desc: "Visuele kleurkiezer om traploos tint, verzadiging en helderheid af te stemmen." },
      { title: "Zuivere 32-bits sRGB Weergave", desc: "Toont de kleur exact zoals bedoeld zonder browsercompressie of kleurprofiel-vervorming." },
      { title: "Direct Opslaan als Achtergrond", desc: "Download je zelf samengestelde kleur direct als 4K of 8K achtergrond voor al je apparaten." }
    ],
    instructionsTitle: "Zo Kies Je Jouw Kleur",
    instructions: [
      "Selecteer een kleur via het palet of voer je eigen kleurcode in het invoerveld in.",
      "Klik op 'Volledig Scherm' om je hele monitor met de gekozen tint te vullen.",
      "Blader naar beneden als je een lossless afbeelding van jouw kleur wilt downloaden."
    ],
    faqs: [
      { q: "Kan ik aangepaste HEX-kleurcodes invoeren?", a: "Ja, voer een willekeurige 6-cijferige kleurcode in zoals #ff5722 om deze direct beeldvullend te zien." },
      { q: "Zijn de getoonde kleuren geschikt voor drukwerk (CMYK)?", a: "Monitoren werken in RGB. Voor drukwerk moeten de kleuren nog worden omgezet naar het juiste CMYK-profiel." },
      { q: "Kan ik mijn gemaakte kleur bewaren?", a: "Je kunt de getoonde kleurcode kopiëren of de kleur direct downloaden als hoge-resolutie achtergrond." },
      { q: "Hoe sluit ik het volledige scherm weer af?", a: "Druk op de ESC-toets of klik ergens op het scherm om terug te keren." },
      { q: "Werkt dit ook op tablets en telefoons?", a: "Ja, de aanraakvriendelijke interface laat je eenvoudig kleuren kiezen en schermvullend openen op mobiel." }
    ]
  },
  'fullscreen-rgb-cycle': {
    name: "Volledig Scherm RGB Cyclus",
    title: "Volledig Scherm RGB Cyclus – Automatische Kleurwissel voor Schermtests",
    metaDescription: "Continue wisselende kleurencyclus (Rood, Groen, Blauw, Wit, Zwart) om vastzittende pixels te verhelpen en beeldschermen te testen.",
    h1: "Volledig Scherm RGB Kleurencyclus",
    intro: "Wissel continu tussen effen primaire en neutrale testkleuren (Rood, Groen, Blauw, Wit en Zwart) met instelbare tussenpozen. Ideaal om vastzittende subpixels los te masseren, reactietijden te testen en kleurkwaliteit te beoordelen.",
    featuresTitle: "Voordelen van de RGB-Cyclus",
    features: [
      { title: "Losmaken van Vastzittende Pixels", desc: "De snelle wisseling tussen maximale spanning op de subpixels kan vastzittende vloeibare kristallen herstellen." },
      { title: "Instelbare Snelheid", desc: "Kies tussen een snelle wissel elke 3 seconden, standaard 5 seconden of een rustige 10 seconden." },
      { title: "Bediening via Toetsenbord", desc: "Gebruik de pijltjestoetsen om handmatig vooruit of achteruit door de kleurenreeks te stappen." },
      { title: "Minimaal Systeemverbruik", desc: "Draait op efficiënte JavaScript-technologie zonder je computer te belasten of warm te laten worden." }
    ],
    instructionsTitle: "Zo Gebruik Je de Cyclus",
    instructions: [
      "Kies de gewenste wisselinterval tussen de kleuren.",
      "Klik op 'Start RGB Pixelcyclus' en schakel over naar Volledig Scherm.",
      "Laat de cyclus 15 tot 30 minuten draaien bij een poging om een vastzittende pixel te herstellen."
    ],
    faqs: [
      { q: "Hoe kan een RGB-cyclus een pixel herstellen?", a: "Door de subpixels snel achter elkaar van stroomloos naar maximale spanning te schakelen, worden haperende transistors geactiveerd." },
      { q: "Hoe lang moet ik de cyclus laten draaien?", a: "Vaak helpt 15 tot 30 minuten; bij hardnekkige pixels kan het nodig zijn om de tool enkele uren aan te laten staan." },
      { q: "Kan deze cyclus mijn beeldscherm beschadigen?", a: "Nee, het tonen van standaard primaire kleuren valt binnen de normale specificaties van elk paneel." },
      { q: "Kan ik de cyclus pauzeren op één kleur?", a: "Ja, klik op de 'Stop'-knop of druk op cijfertoetsen 1-9 om direct een vaste kleur vast te houden." },
      { q: "Werkt dit ook via de browser van een Smart TV?", a: "Zeker, open de webpagina op de browser van je tv om het grote scherm grondig te testen." }
    ]
  },
  'black-screen-10-hours': {
    name: "Zwart Scherm 10 Uur",
    title: "Zwart Scherm 10 Uur – Continu Zwart Scherm voor Slaap & Batterijbesparing",
    metaDescription: "Volledig ononderbroken diepzwart scherm gedurende 10 uur. Ideaal voor slapen in het donker, batterijbesparing op OLED en muziek luisteren.",
    h1: "Zwart Scherm 10 Uur (Zonder Slaapstand)",
    intro: "Houd je apparaat actief met een diepzwart scherm tot wel 10 uur lang. Voorkom hinderlijk licht in je slaapkamer terwijl je naar podcasts luistert, bespaar stroom op OLED-schermen of houd lange nachttaken actief.",
    featuresTitle: "Toepassingen voor 10 Uur Zwart Scherm",
    features: [
      { title: "Volledige Duisternis voor Je Slaap", desc: "Elimineert elke storende schermgloed zodat je melatonine-aanmaak en nachtrust niet worden verstoord." },
      { title: "Nul Stroomverbruik op OLED-Schermen", desc: "Zwarte pixels op een OLED-scherm staan fysiek uit, wat het energieverbruik drastisch verlaagt." },
      { title: "Voorkomt Slaapstand van de Computer", desc: "Houdt je computer wakker tijdens lange downloads zonder dat je energie-instellingen hoeft aan te passen." },
      { title: "Geen Zware Videostream", desc: "In tegenstelling tot zwarte YouTube-video's van 10 uur verbruikt onze tool 0 KB aan internetdata." }
    ],
    instructionsTitle: "Zo Start Je de 10-Uurs Sessie",
    instructions: [
      "Klik op Volledig Scherm om taakbalken en meldingen volledig te verbergen.",
      "Stel de gewenste helderheid van je beeldscherm in.",
      "De ingebouwde Screen Wake Lock zorgt ervoor dat je scherm de hele nacht actief blijft."
    ],
    faqs: [
      { q: "Gaat mijn computer tijdens de 10 uur niet vanzelf uit?", a: "Nee, de applicatie houdt via de Screen Wake Lock API het systeem continu actief." },
      { q: "Waarom is dit beter dan een 10-uurs YouTube video?", a: "Online video's vreten gigabytes aan data en belasten je processor; onze statische pagina gebruikt geen data of rekenkracht." },
      { q: "Bespaart een zwart scherm stroom op een LCD-laptop?", a: "Bij LCD blijft de achtergrondverlichting branden; bij OLED en AMOLED schermen bespaar je tot wel 90% op schermstroom." },
      { q: "Kan ik muziek of podcasts blijven luisteren?", a: "Ja, speel je audio af in een ander tabblad en geniet van een pikdonkere slaapkamer." },
      { q: "Hoe sluit ik het scherm af vóór de 10 uur voorbij zijn?", a: "Tik op het scherm of druk op ESC op je toetsenbord." }
    ]
  },
  'white-screen-1-hour': {
    name: "Wit Scherm 1 Uur",
    title: "Wit Scherm 1 Uur – Getimede Schermverlichting voor Focus en Tekenen",
    metaDescription: "Continue sessie van 1 uur egaal wit scherm. Ideaal voor tekensessies, grondige schermreiniging of zacht werklicht zonder time-out.",
    h1: "Wit Scherm 1 Uur (Met Ingebouwde Timer)",
    intro: "Activeer een helder, egaal wit scherm dat gegarandeerd 1 uur lang ononderbroken aanblijft. Ideaal om geconcentreerd te studeren, tekeningen over te trekken of meerdere beeldschermen grondig te inspecteren.",
    featuresTitle: "Voordelen van de 1-Uurs Sessie",
    features: [
      { title: "Verlichting en Timer in Één", desc: "Een vaste lichtsessie van 60 minuten die perfect aansluit op een productief werk- of studieritme." },
      { title: "Leeslicht Zonder Time-Out", desc: "Geen irritatie meer over schermen die na 2 minuten uitvallen terwijl je een fysiek boek leest." },
      { title: "Ideaal voor Tekenprojecten", desc: "Geeft je ruim de tijd om een illustratie over te trekken met stabiel tegenlicht." },
      { title: "Geen Dataverbruik", desc: "Alles draait lokaal in je browser: supersnel, vederlicht en betrouwbaar." }
    ],
    instructionsTitle: "Zo Start Je de 1-Uur Sessie",
    instructions: [
      "Plaats het beeldscherm op je werkplek of tekentafel.",
      "Klik op 'Volledig Scherm' om het ononderbroken witte licht te starten.",
      "Druk op ESC zodra je werk erop zit om terug te keren naar je normale bureaublad."
    ],
    faqs: [
      { q: "Wat gebeurt er als het uur voorbij is?", a: "Het scherm blijft rustig aanstaan totdat jij het afsluit, zodat je niet plotseling in het donker zit." },
      { q: "Kan ik dit gebruiken als bureaulamp tijdens het studeren?", a: "Ja, het zachte diffuse licht verlicht je bureau en vermindert het harde contrast met een donkere kamer." },
      { q: "Wordt het scherm van mijn laptop hier warm van?", a: "Nee, moderne LED-schermen blijven koel binnen normale bedrijfstemperaturen." },
      { q: "Wat als het witte licht te fel aan mijn ogen is?", a: "Je kunt de warmteregelaar op onze homepage gebruiken voor een zachtere crème- of pergamentkleurige tint." },
      { q: "Werkt dit op zowel Windows als Mac?", a: "Ja, het werkt vlekkeloos in alle moderne browsers op elk besturingssysteem." }
    ]
  },
  'screen-timer': {
    name: "Scherm Timer",
    title: "Volledig Scherm Scherm Timer – Minimalistische Afteltimer voor Focus",
    metaDescription: "Afleidingsvrije afteltimer en stopwatch op volledig scherm. Ideaal voor sprekers, Pomodoro-sessies, workouts en presentaties.",
    h1: "Volledig Scherm Scherm Timer (Minimal Focus)",
    intro: "Een strakke, minimalistische timer op volledig scherm met maximale zichtbaarheid. Ontworpen voor diepe concentratie, presentaties, examens en productieve pauzes zonder storende toeters en bellen.",
    featuresTitle: "Kenmerken van de Minimalistische Timer",
    features: [
      { title: "Optimale Zichtbaarheid op Afstand", desc: "Grote cijfers met hoog contrast die zelfs achter in een collegezaal of vergaderruimte perfect leesbaar zijn." },
      { title: "Geen Afleidende Meldingen", desc: "Geen pop-ups of ongewenste geluiden die je focus of presentatie verstoren." },
      { title: "Aanpasbare Achtergrond", desc: "Kies tussen een lichte modus voor maximale energie of een donkere stand voor ontspannen ogen." },
      { title: "Scherm Vergrendeling Inbegrepen", desc: "De timer blijft continu in beeld zonder dat je scherm plotseling uitschakelt." }
    ],
    instructionsTitle: "Instructies voor de Scherm Timer",
    instructions: [
      "Stel het gewenste aantal minuten in voor je werksessie of toespraak.",
      "Klik op 'Volledig Scherm' om alle andere schermelementen te verbergen.",
      "Houd de resterende tijd in één oogopslag bij vanuit elke hoek van de kamer."
    ],
    faqs: [
      { q: "Blijft de timer doorlopen als ik van venster wissel?", a: "Ja, de timer synchroniseert met de interne systeemklok en verliest geen seconde." },
      { q: "Is dit geschikt voor de Pomodoro-methode?", a: "Ideaal om blokken van 25 minuten focus en 5 minuten pauze strak in beeld te houden." },
      { q: "Zijn de cijfers goed zichtbaar op een beamer?", a: "Ja, het lettertype met hoog contrast is speciaal geoptimaliseerd voor projectoren en grote tv-schermen." },
      { q: "Heb ik internet nodig tijdens het gebruik?", a: "Zodra de pagina is geladen, werkt de timer volledig offline zonder internetverbinding." },
      { q: "Hoe zet ik de timer weer op nul?", a: "Met één klik of tik op de duidelijke resetknop onder de tijdweergave." }
    ]
  }
};

// Write files
const toolsItFile = `import type { LocalizedToolContent } from './tools';

export const TOOLS_IT: Record<string, { name: string; content: LocalizedToolContent }> = ${JSON.stringify(toolsItData, null, 2)};
`;

const toolsNlFile = `import type { LocalizedToolContent } from './tools';

export const TOOLS_NL: Record<string, { name: string; content: LocalizedToolContent }> = ${JSON.stringify(toolsNlData, null, 2)};
`;

fs.writeFileSync(path.resolve('src/content/tools_it.ts'), toolsItFile, 'utf-8');
fs.writeFileSync(path.resolve('src/content/tools_nl.ts'), toolsNlFile, 'utf-8');
console.log('✓ Created src/content/tools_it.ts and src/content/tools_nl.ts');

// Update src/content/tools.ts
const toolsPath = path.resolve('src/content/tools.ts');
let toolsContent = fs.readFileSync(toolsPath, 'utf-8');

if (!toolsContent.includes("import { TOOLS_IT }")) {
  toolsContent = `import { TOOLS_IT } from './tools_it';\nimport { TOOLS_NL } from './tools_nl';\n` + toolsContent;

  // Update getToolById to merge it and nl
  toolsContent = toolsContent.replace(
    /export function getToolById\(id: string\): ToolDefinition \| undefined \{\n\s*return ALL_TOOLS\.find\(t => t\.id === id\);\n\}/,
    `export function getToolById(id: string): ToolDefinition | undefined {
  const item = ALL_TOOLS.find(t => t.id === id);
  if (!item) return undefined;
  return {
    ...item,
    names: {
      ...item.names,
      it: TOOLS_IT[id]?.name || item.names.en,
      nl: TOOLS_NL[id]?.name || item.names.en,
    },
    content: {
      ...item.content,
      it: TOOLS_IT[id]?.content || (item.content as any).it,
      nl: TOOLS_NL[id]?.content || (item.content as any).nl,
    } as any,
  };
}`
  );

  fs.writeFileSync(toolsPath, toolsContent, 'utf-8');
  console.log('✓ src/content/tools.ts updated with Italian and Dutch integration');
}
