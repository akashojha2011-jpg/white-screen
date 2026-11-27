// scripts/generate-wallpapers-it-nl.mjs
import fs from 'fs';
import path from 'path';

const wallpapersPath = path.resolve('src/content/wallpapers.ts');
let content = fs.readFileSync(wallpapersPath, 'utf-8');

export const WALLPAPER_TRANSLATIONS = {
  'white-wallpaper': { itName: 'Sfondo Bianco HD', nlName: 'Witte Achtergrond HD' },
  'white-wallpaper-4k': { itName: 'Sfondo Bianco 4K Ultra HD', nlName: 'Witte Achtergrond 4K Ultra HD' },
  'white-wallpaper-8k': { itName: 'Sfondo Bianco 8K Ultra HD', nlName: 'Witte Achtergrond 8K Ultra HD' },
  'white-background-for-iphone': { itName: 'Sfondo Bianco per iPhone', nlName: 'Witte Achtergrond voor iPhone' },
  'white-wallpaper-for-desktop': { itName: 'Sfondo Bianco per Desktop PC', nlName: 'Witte Achtergrond voor Desktop PC' },
  'black-wallpaper': { itName: 'Sfondo Nero HD', nlName: 'Zwarte Achtergrond HD' },
  'black-wallpaper-4k': { itName: 'Sfondo Nero 4K Ultra HD', nlName: 'Zwarte Achtergrond 4K Ultra HD' },
  'blue-wallpaper': { itName: 'Sfondo Blu HD', nlName: 'Blauwe Achtergrond HD' },
  'green-wallpaper': { itName: 'Sfondo Verde HD', nlName: 'Groene Achtergrond HD' },
  'red-wallpaper': { itName: 'Sfondo Rosso HD', nlName: 'Rode Achtergrond HD' },
};

if (!content.includes('itName =')) {
  // Update buildWallpaper helper to declare itName and nlName
  content = content.replace(
    /const idName = names\.id;\n/,
    `const idName = names.id;\n  const itName = names.it;\n  const nlName = names.nl;\n`
  );

  const itNlWallpapers = `
      it: {
        title: \`\${itName} – Download Gratuito Sfondo ad Alta Risoluzione\`,
        metaDescription: \`Scarica \${itName.toLowerCase()} in formato PNG, JPG e WEBP. Immagini di sfondo lossless ad altissima definizione per PC, iPhone e monitor.\`,
        h1: \`\${itName} (Download Sfondo Senza Perdita)\`,
        intro: \`Genera e scarica sfondi puliti \${itName.toLowerCase()} direttamente dal browser. Renderizzati localmente su canvas HTML5 in qualità sRGB lossless senza watermark.\`,
        featuresTitle: "Specifiche e Funzionalità di Esportazione",
        features: [
          { title: "Formati Multipli Disponibili", desc: "Esporta in PNG lossless (non compresso), WEBP moderno o JPEG universale." },
          { title: \`Nitidezza Perfetta per Display \${resLabel}\`, desc: "Calcolato su misura per evitare scalature sfocate o distorsioni visive." },
          { title: "Zero Pubblicità o Limiti", desc: "Download gratuiti al 100% senza account, registrazioni o software." },
          { title: "Tutte le Risoluzioni Supportate", desc: "Ottimizzato per monitor 16:9, schermi smartphone 9:16 e formati quadrati." },
        ],
        faqs: [
          { q: \`Come posso scaricare questo \${itName.toLowerCase()}?\`, a: "Scegli il formato e la risoluzione desiderati nel box di download e clicca su 'Scarica Immagine di Sfondo'." },
          { q: "L'immagine è davvero lossless?", a: "Sì, i file PNG sono generati direttamente dalla memoria canvas del browser senza alcuna compressione distruttiva." },
          { q: "Posso usarlo per scopi commerciali?", a: "Sì, tutti gli sfondi a tinta unita sono completamente gratuiti per uso personale e commerciale." },
          { q: "Quale formato è consigliato per il desktop?", a: "Il formato PNG assicura la massima fedeltà visiva senza compressione." },
          { q: "Funziona su iPhone e Android?", a: "Certamente, seleziona 'Mobile Smartphone (1080 × 1920)' per una visualizzazione perfetta." },
        ],
      },
      nl: {
        title: \`\${nlName} – Gratis Lossless Hoge Resolutie Achtergrond Download\`,
        metaDescription: \`Download zuivere \${nlName.toLowerCase()} in PNG, JPG en WEBP. Ultra HD lossless achtergronden voor pc, iPhone, iPad en monitoren.\`,
        h1: \`\${nlName} (Lossless Achtergrond Download)\`,
        intro: \`Genereer en download haarscherpe \${nlName.toLowerCase()} achtergrondafbeeldingen direct in je browser. Gemaakt op een HTML5 canvas in 100% verliesvrije sRGB-kwaliteit.\`,
        featuresTitle: "Specificaties & Exportfuncties",
        features: [
          { title: "Meerdere Bestandsformaten", desc: "Kies uit lossless PNG, efficiënte WEBP of standaard JPEG." },
          { title: \`Pixel-Perfecte Scherpte voor \${resLabel}\`, desc: "Nauwkeurig afgestemd op moderne schermen om onscherpe opkalering te voorkomen." },
          { title: "Zonder Advertenties of Betaalmuren", desc: "100% gratis downloads zonder registratie of software-installatie." },
          { title: "Alle Beeldverhoudingen Beschikbaar", desc: "Geoptimaliseerd voor 16:9 desktops, 9:16 smartphone-vergrendelschermen en vierkante displays." },
        ],
        faqs: [
          { q: \`Hoe download ik deze \${nlName.toLowerCase()}?\`, a: "Kies het gewenste formaat en de resolutie in het downloadpaneel en klik op 'Download Achtergrondafbeelding'." },
          { q: "Is de afbeelding daadwerkelijk verliesvrij?", a: "Ja, onze PNG-exports worden direct vanuit het browser-canvasgeheugen opgeslagen zonder kwaliteitsverlies." },
          { q: "Mag ik deze achtergrond commercieel gebruiken?", a: "Ja, alle gegenereerde effen achtergronden zijn royaltyvrij voor persoonlijk en commercieel gebruik." },
          { q: "Welk formaat is het beste voor een computerscherm?", a: "PNG levert de allerhoogste ongecomprimeerde beeldkwaliteit." },
          { q: "Werkt dit op iPhone en Android?", a: "Ja, kies 'Mobiele Smartphone (1080 × 1920)' voor een vlekkeloze verticale weergave." },
        ],
      },`;

  content = content.replace(/(faqs: \[\n[\s\S]*?\]\n\s*\},)\n\s*\}\n\s*\}\n\s*\}/, `$1${itNlWallpapers}\n    }\n  };\n}`);

  // Now update names for all 10 wallpapers
  for (const [wpId, t] of Object.entries(WALLPAPER_TRANSLATIONS)) {
    const wpRegex = new RegExp(`(id:\\s*['"]${wpId}['"][\\s\\S]*?id:\\s*['"][^'"]*['"],\\n\\s*\\},)`, 'g');
    content = content.replace(wpRegex, (match, prefix) => {
      if (!match.includes('it:')) {
        return prefix.replace(/id:\s*['"][^'"]*['"],\n\s*\}/, (idLine) => {
          return `${idLine.slice(0, -1)}  it: '${t.itName}',\n      nl: '${t.nlName}',\n    }`;
        });
      }
      return match;
    });
  }

  fs.writeFileSync(wallpapersPath, content, 'utf-8');
  console.log('✓ src/content/wallpapers.ts updated with Italian and Dutch copy for all 10 wallpapers');
}
