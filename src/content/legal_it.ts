import type { LocalizedLegalContent } from './legal';

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
