// scripts/generate-legal-it-nl.mjs
import fs from 'fs';
import path from 'path';

const legalItContent = `import type { LocalizedLegalContent } from './legal';

export const LEGAL_IT: Record<string, LocalizedLegalContent> = {
  about: {
    title: "Chi Siamo - TheWhiteScreen.org",
    metaDescription: "Scopri la missione di TheWhiteScreen.org: utility veloci, pulite e orientate alla privacy per test di schermi e illuminazione.",
    h1: "Chi Siamo - TheWhiteScreen.org",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "TheWhiteScreen.org nasce con una missione trasparente: offrire uno strumento a schermo intero ultraveloce, pulito e senza distrazioni accessibile all'istante su ogni dispositivo senza pubblicità invadenti, pop-up o registrazioni obbligatorie.",
      "La nostra applicazione adotta un'architettura statica per garantire rendering immediato, zero ritardi di caricamento e la massima tutela della privacy su tutti i moderni browser web."
    ],
    sections: [
      {
        heading: "Scopo e Missione",
        content: "Che tu sia un tecnico che ispeziona display per individuare pixel bruciati, un professionista che necessita di luce frontale uniforme per videochiamate, uno studente che rimuove la polvere dal monitor o un disegnatore che ricalca bozzetti, avere uno schermo bianco puro a portata di mano è fondamentale. Abbiamo progettato questa utility per essere universale, leggera e gratuita per sempre."
      },
      {
        heading: "I Nostri Principi Fondamentali",
        bullets: [
          "100% Gratuito e Senza Registrazione: Nessun paywall, abbonamento o creazione di account.",
          "Architettura Orientata alla Privacy: Il rendering avviene localmente nel tuo browser. Nessun dato personale viene mai raccolto o salvato.",
          "Accessibilità Globale: Piattaforma completamente localizzata nelle principali lingue con hosting edge globale.",
          "Esportazioni in Alta Risoluzione: Genera e scarica sfondi neutri fino a 8K Ultra HD in formato PNG, JPG o WEBP."
        ]
      }
    ]
  },
  contact: {
    title: "Contattaci - TheWhiteScreen.org",
    metaDescription: "Mettiti in contatto con il team di TheWhiteScreen.org per domande tecniche, suggerimenti o supporto.",
    h1: "Contattaci",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "Hai domande, suggerimenti sulle funzionalità o segnalazioni su TheWhiteScreen.org? Il nostro team tecnico è a tua disposizione.",
      "Rispondiamo a tutti i messaggi entro 24-48 ore lavorative."
    ],
    sections: [
      {
        heading: "Canali di Contatto",
        content: "Inviaci un'email a contact@thewhitescreen.org. Che si tratti di compatibilità del browser, suggerimenti per nuovi colori o richieste generiche, saremo lieti di aiutarti."
      }
    ],
    contactInfo: {
      email: "contact@thewhitescreen.org",
      responseTime: "Risposta entro 24-48 ore lavorative",
      nameLabel: "Il tuo nome",
      emailLabel: "Il tuo indirizzo email",
      messageLabel: "Il tuo messaggio",
      submitBtn: "Invia Messaggio"
    }
  },
  'privacy-policy': {
    title: "Informativa sulla Privacy - TheWhiteScreen.org",
    metaDescription: "Informativa sulla privacy di TheWhiteScreen.org. Trattamento trasparente dei dati e conformità al GDPR.",
    h1: "Informativa sulla Privacy",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "In TheWhiteScreen.org, la privacy degli utenti rappresenta un principio imprescindibile. Questa informativa descrive le modalità con cui gestiamo le informazioni quando visiti il nostro sito web.",
      "Non richiediamo registrazioni, non raccogliamo dati personali identificativi e non tracciamo l'attività individuale tra siti web diversi."
    ],
    sections: [
      {
        heading: "1. Dati Raccolti e Trattamento Locale",
        content: "Tutti gli strumenti a schermo intero, i selettori di colore e i generatori di sfondi operano interamente sul tuo dispositivo tramite API JavaScript e Canvas HTML5. Nessuna immagine generata o configurazione cromatica viene mai trasmessa ai nostri server."
      },
      {
        heading: "2. Log del Server e Statistiche",
        content: "Come prassi standard su Internet, i nostri server edge possono memorizzare log tecnici anonimi (indirizzo IP, tipo di browser, timestamp) per finalità di sicurezza, diagnostica e prevenzione di abusi DDoS."
      },
      {
        heading: "3. Conformità al GDPR e Diritti dell'Utente",
        content: "Gli utenti residenti nello Spazio Economico Europeo godono di tutti i diritti sanciti dal GDPR in materia di trasparenza e protezione dei dati personali."
      }
    ]
  },
  'terms-and-conditions': {
    title: "Termini e Condizioni - TheWhiteScreen.org",
    metaDescription: "Termini e condizioni di utilizzo per i servizi e gli strumenti offerti da TheWhiteScreen.org.",
    h1: "Termini e Condizioni",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "Accedendo e utilizzando TheWhiteScreen.org, accetti integralmente i presenti Termini e Condizioni di servizio.",
      "Se non concordi con questi termini, ti invitiamo a interrompere l'uso del sito web."
    ],
    sections: [
      {
        heading: "1. Licenza d'Uso del Servizio",
        content: "Ti concediamo una licenza personale, non esclusiva e gratuita per utilizzare le utility di visualizzazione per finalità personali, didattiche o professionali."
      },
      {
        heading: "2. Esclusione di Garanzia",
        content: "I nostri strumenti per test di pixel, sfarfallio e uniformità sono forniti 'così come sono' a scopo informativo. TheWhiteScreen.org non rilascia garanzie diagnostiche hardware formali."
      },
      {
        heading: "3. Limitazione di Responsabilità",
        content: "In nessun caso TheWhiteScreen.org sarà responsabile per danni diretti o indiretti derivanti dall'uso o dall'impossibilità di usare il sito web."
      }
    ]
  },
  'cookie-policy': {
    title: "Politica sui Cookie - TheWhiteScreen.org",
    metaDescription: "Informativa sull'uso dei cookie e delle tecnologie di memorizzazione locale su TheWhiteScreen.org.",
    h1: "Politica sui Cookie",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "La presente informativa illustra l'utilizzo dei cookie e delle tecnologie simili su TheWhiteScreen.org.",
      "Adottiamo un approccio di stretta necessità per ridurre al minimo l'impiego di identificatori sul tuo dispositivo."
    ],
    sections: [
      {
        heading: "1. Cosa Sono i Cookie?",
        content: "I cookie sono piccoli file di testo salvati dal browser per memorizzare impostazioni essenziali o dati di sessione."
      },
      {
        heading: "2. Come Utilizziamo i Cookie",
        content: "Utilizziamo esclusivamente cookie tecnici strettamente necessari al funzionamento del servizio e al bilanciamento del carico di rete tramite Cloudflare/Vercel edge."
      },
      {
        heading: "3. Gestione delle Preferenze",
        content: "Puoi bloccare o cancellare i cookie in qualsiasi momento attraverso le impostazioni del tuo browser web."
      }
    ]
  },
  license: {
    title: "Licenza e Proprietà Intellettuale - TheWhiteScreen.org",
    metaDescription: "Informazioni sulla licenza d'uso dei contenuti e degli sfondi generati su TheWhiteScreen.org.",
    h1: "Licenza d'Uso e Proprietà Intellettuale",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "Tutti gli sfondi a tinta unita e le immagini generate tramite la nostra applicazione sono rilasciati per libero utilizzo senza royalty.",
      "Il codice sorgente dell'interfaccia, i marchi e i testi editoriali originali restano di proprietà di TheWhiteScreen.org."
    ],
    sections: [
      {
        heading: "1. Sfondi e Immagini Generate",
        content: "Sei libero di scaricare, condividere e incorporare gli sfondi a tinta unita generati in progetti personali o commerciali senza obbligo di attribuzione."
      },
      {
        heading: "2. Codice del Sito e Testi",
        content: "I contenuti scritti, le guide tecniche e i marchi commerciali sono protetti dalle vigenti leggi sul diritto d'autore."
      }
    ]
  }
};
`;

const legalNlContent = `import type { LocalizedLegalContent } from './legal';

export const LEGAL_NL: Record<string, LocalizedLegalContent> = {
  about: {
    title: "Over Ons - TheWhiteScreen.org",
    metaDescription: "Lees meer over de missie van TheWhiteScreen.org: snelle, privacyvriendelijke en afleidingsvrije display-tools.",
    h1: "Over TheWhiteScreen.org",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "TheWhiteScreen.org is opgericht met een helder doel: het bieden van een razendsnelle, gebruiksvriendelijke en afleidingsvrije schermtool die direct werkt op ieder apparaat zonder advertenties of verplichte registraties.",
      "Onze webtoepassing maakt gebruik van een statische architectuur om onmiddellijke laadtijden, maximale privacy en vlekkeloze werking op alle moderne browsers te garanderen."
    ],
    sections: [
      {
        heading: "Ons Doel en Onze Missie",
        content: "Of je nu beeldschermen inspecteert op dode pixels, zachte gezichtsverlichting nodig hebt voor videovergaderingen, stof van je monitor veegt of tekeningen overtrekt: een zuiver wit scherm is onmisbaar. Wij hebben deze tool ontwikkeld om universeel toegankelijk, vederlicht en voor altijd gratis te zijn."
      },
      {
        heading: "Kernprincipes",
        bullets: [
          "100% Gratis & Zonder Account: Geen betaalmuren, abonnementen of accountvereisten.",
          "Privacy-Eerst Ontwerp: Alle schermrendering gebeurt lokaal in je browser. Er worden nooit persoonlijke gegevens verzameld of bewaard.",
          "Wereldwijde Toegankelijkheid: Volledig gelokaliseerd in meerdere talen en wereldwijd snel geleverd via edge-servers.",
          "Lossless Downloads: Exporteer effen achtergronden tot 8K Ultra HD in PNG, JPG of WEBP."
        ]
      }
    ]
  },
  contact: {
    title: "Contact Opnemen - TheWhiteScreen.org",
    metaDescription: "Neem contact op met het team van TheWhiteScreen.org voor technische vragen, feedback of ondersteuning.",
    h1: "Contact Opnemen",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "Heb je vragen, suggesties of opmerkingen over TheWhiteScreen.org? Ons technische team helpt je graag verder.",
      "We streven ernaar om alle berichten binnen 24 tot 48 werkuren te beantwoorden."
    ],
    sections: [
      {
        heading: "Contactkanalen",
        content: "Stuur een e-mail naar contact@thewhitescreen.org voor al je vragen over browsercompatibiliteit of suggesties voor nieuwe schermkleuren."
      }
    ],
    contactInfo: {
      email: "contact@thewhitescreen.org",
      responseTime: "Reactie binnen 24-48 werkuren",
      nameLabel: "Je naam",
      emailLabel: "Je e-mailadres",
      messageLabel: "Je bericht",
      submitBtn: "Bericht Verzenden"
    }
  },
  'privacy-policy': {
    title: "Privacybeleid - TheWhiteScreen.org",
    metaDescription: "Privacybeleid van TheWhiteScreen.org. Transparante gegevensverwerking en volledige AVG/GDPR-naleving.",
    h1: "Privacybeleid",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "Bij TheWhiteScreen.org hechten we de hoogste waarde aan de bescherming van jouw privacy. In dit beleid leggen we uit hoe we omgaan met gegevens wanneer je onze website bezoekt.",
      "We vragen nooit om persoonsgegevens, vereisen geen accounts en volgen je surfgedrag niet over andere websites."
    ],
    sections: [
      {
        heading: "1. Lokale Gegevensverwerking",
        content: "Al onze schermtools, kleurkiezers en achtergrondgenerators draaien volledig lokaal in je browser via HTML5 Canvas en standaard JavaScript API's. Er worden geen afbeeldingen of kleurinstellingen naar onze servers verstuurd."
      },
      {
        heading: "2. Serverlogbestanden",
        content: "Onze edge-servers slaan uitsluitend geanonimiseerde technische logbestanden op (IP-adres, browsertype, tijdstip) voor serverbeveiliging en DDoS-preventie."
      },
      {
        heading: "3. AVG / GDPR Rechten",
        content: "Bezoekers uit de Europese Unie behouden alle rechten conform de Algemene Verordening Gegevensbescherming (AVG)."
      }
    ]
  },
  'terms-and-conditions': {
    title: "Algemene Voorwaarden - TheWhiteScreen.org",
    metaDescription: "Algemene voorwaarden voor het gebruik van de online schermhulpmiddelen van TheWhiteScreen.org.",
    h1: "Algemene Voorwaarden",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "Door TheWhiteScreen.org te bezoeken en te gebruiken, ga je akkoord met deze algemene gebruiksvoorwaarden.",
      "Indien je niet akkoord gaat met deze voorwaarden, dien je het gebruik van deze website te staken."
    ],
    sections: [
      {
        heading: "1. Gebruikslicentie",
        content: "Je krijgt een kosteloze, niet-exclusieve licentie om onze schermhulpprogramma's te gebruiken voor persoonlijke, educatieve en professionele doeleinden."
      },
      {
        heading: "2. Geen Garantie",
        content: "Onze scherm- en pixeltests worden aangeboden 'zoals ze zijn' ter indicatie. TheWhiteScreen.org biedt geen formele hardware-diagnostische garanties."
      },
      {
        heading: "3. Aansprakelijkheid",
        content: "TheWhiteScreen.org is niet aansprakelijk voor enige directe of indirecte schade die voortvloeit uit het gebruik van deze online tools."
      }
    ]
  },
  'cookie-policy': {
    title: "Cookiebeleid - TheWhiteScreen.org",
    metaDescription: "Informatie over het gebruik van cookies en browseropslag op TheWhiteScreen.org.",
    h1: "Cookiebeleid",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "Dit cookiebeleid beschrijft hoe TheWhiteScreen.org omgaat met cookies en vergelijkbare opslagtechnologieën.",
      "Wij hanteren een strikt noodzakelijk beleid om het gebruik van cookies tot het absolute minimum te beperken."
    ],
    sections: [
      {
        heading: "1. Wat Zijn Cookies?",
        content: "Cookies zijn kleine tekstbestanden die op je apparaat worden geplaatst om essentiële technische functies mogelijk te maken."
      },
      {
        heading: "2. Gebruikte Cookies",
        content: "We gebruiken uitsluitend strikt noodzakelijke technische cookies ten behoeve van netwerkprestaties en serverbeveiliging via Vercel/Cloudflare edge."
      },
      {
        heading: "3. Cookies Beheren",
        content: "Je kunt cookies op elk moment weigeren of verwijderen via de instellingen van je internetbrowser."
      }
    ]
  },
  license: {
    title: "Licentie en Auteursrecht - TheWhiteScreen.org",
    metaDescription: "Informatie over licenties en intellectueel eigendom voor TheWhiteScreen.org.",
    h1: "Licentie & Intellectueel Eigendom",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "Alle effen achtergrondafbeeldingen die je via onze applicatie genereert, zijn vrijgesteld van royalty's en mogen vrij worden gebruikt.",
      "De broncode, interface, merknaam en redactionele teksten van TheWhiteScreen.org zijn beschermd door het auteursrecht."
    ],
    sections: [
      {
        heading: "1. Gegenereerde Achtergronden",
        content: "Je mag gegenereerde effen achtergrondafbeeldingen downloaden, delen en gebruiken in persoonlijke of commerciële projecten zonder naamsvermelding."
      },
      {
        heading: "2. Code en Redactionele Inhoud",
        content: "Alle teksten, gidsen en programmacode blijven exclusief intellectueel eigendom van TheWhiteScreen.org."
      }
    ]
  }
};
`;

fs.writeFileSync(path.resolve('src/content/legal_it.ts'), legalItContent, 'utf-8');
fs.writeFileSync(path.resolve('src/content/legal_nl.ts'), legalNlContent, 'utf-8');
console.log('✓ Created src/content/legal_it.ts and src/content/legal_nl.ts');

// Now update src/content/legal.ts to merge them
const legalPath = path.resolve('src/content/legal.ts');
let legalContent = fs.readFileSync(legalPath, 'utf-8');
if (!legalContent.includes("import { LEGAL_IT }")) {
  legalContent = `import { LEGAL_IT } from './legal_it';\nimport { LEGAL_NL } from './legal_nl';\n` + legalContent;
  
  // Update getLegalById to merge it and nl
  legalContent = legalContent.replace(
    /export function getLegalById\(id: string\): LegalDefinition \| undefined \{\n\s*return ALL_LEGALS\.find\(l => l\.id === id\);\n\}/,
    `export function getLegalById(id: string): LegalDefinition | undefined {
  const item = ALL_LEGALS.find(l => l.id === id);
  if (!item) return undefined;
  return {
    ...item,
    content: {
      ...item.content,
      it: LEGAL_IT[id] || (item.content as any).it,
      nl: LEGAL_NL[id] || (item.content as any).nl,
    } as any,
  };
}`
  );

  fs.writeFileSync(legalPath, legalContent, 'utf-8');
  console.log('✓ src/content/legal.ts updated with Italian and Dutch integration');
}
