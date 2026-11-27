// scripts/generate-themes-it-nl.mjs
import fs from 'fs';
import path from 'path';

const themesPath = path.resolve('src/content/themes.ts');
let content = fs.readFileSync(themesPath, 'utf-8');

export const THEME_TRANSLATIONS = {
  'sky-background': { itName: 'Cielo Diurno', nlName: 'Hemelsblauw', moodIt: 'concentrazione rilassata e freschezza', moodNl: 'ontspannen focus en frisheid' },
  'gradient-background': { itName: 'Gradiente Moderno', nlName: 'Modern Kleurverloop', moodIt: 'estetica contemporanea e creatività', moodNl: 'eigentijdse esthetiek en creativiteit' },
  'space-background': { itName: 'Spazio Profondo', nlName: 'Diepe Ruimte', moodIt: 'lavoro notturno e riflessione', moodNl: 'nachtwerk en diepe reflectie' },
  'forest-background': { itName: 'Foresta Naturale', nlName: 'Natuurlijk Bos', moodIt: 'pace visiva e contatto con la natura', moodNl: 'visuele rust en natuurlijke harmonie' },
  'fire-background': { itName: 'Bagliore del Fuoco', nlName: 'Vuurgloed', moodIt: 'energia calda e atmosfera intima', moodNl: 'warme energie en knusse sfeer' },
  'wood-background': { itName: 'Legno Caldo', nlName: 'Warm Hout', moodIt: 'eleganza classica e comfort da studio', moodNl: 'klassieke elegantie en studiocomfort' },
  'water-background': { itName: 'Acqua Cristallina', nlName: 'Kristalhelder Water', moodIt: 'calma rigenerante e serenità', moodNl: 'verfrissende kalmte en sereniteit' },
  'paper-background': { itName: 'Carta Naturale', nlName: 'Natuurlijk Papier', moodIt: 'lettura confortevole e disegno', moodNl: 'comfortabel lezen en ontwerpen' },
  'city-background': { itName: 'Città Notturna', nlName: 'Nachtelijke Stad', moodIt: 'ritmo urbano e produttività moderna', moodNl: 'stedelijk ritme en moderne productiviteit' },
  'ocean-background': { itName: 'Oceano Profondo', nlName: 'Diepe Oceaan', moodIt: 'profonda tranquillità visiva', moodNl: 'diepe visuele rust en ontspanning' },
  'galaxy-background': { itName: 'Galassia Cosmica', nlName: 'Kosmische Melkweg', moodIt: 'ispirazione e creatività notturna', moodNl: 'nachtelijke inspiratie en creativiteit' },
  'sunset-background': { itName: 'Tramonto Caldo', nlName: 'Warme Zonsondergang', moodIt: 'rilassamento serale e transizione al riposo', moodNl: 'avondontspanning en overgang naar rust' },
  'silver-background': { itName: 'Argento Metallico', nlName: 'Metallic Zilver', moodIt: 'precisione tecnica e pulizia visiva', moodNl: 'technische precisie en visuele helderheid' },
  'snow-background': { itName: 'Neve Pura', nlName: 'Pure Sneeuw', moodIt: 'purezza assoluta e luce diffusa', moodNl: 'absolute puurheid en diffuus licht' },
  'carbon-fiber-background': { itName: 'Fibra di Carbonio', nlName: 'Koolstofvezel', moodIt: 'design high-tech e concentrazione', moodNl: 'high-tech design en geconcentreerd werken' },
  'concrete-background': { itName: 'Cemento Industriale', nlName: 'Industrieel Beton', moodIt: 'minimalismo moderno e sobrietà', moodNl: 'modern minimalisme en strakke soberheid' },
};

if (!content.includes('nameIt =')) {
  // Update buildTheme signature & vars
  content = content.replace(
    /moodId: string\n\): ThemeDefinition \{/,
    `moodId: string,
  moodIt: string = moodEn,
  moodNl: string = moodEn
): ThemeDefinition {
  const nameIt = names.it;
  const nameNl = names.nl;`
  );

  const itNlThemes = `
      it: {
        title: \`\${nameIt} – Sfondo Ambientale a Schermo Intero in Puro CSS\`,
        metaDescription: \`Tema immersivo \${nameIt.toLowerCase()} generato con gradienti CSS leggeri. Perfetto per \${moodIt}, videochiamate e concentrazione.\`,
        h1: \`\${nameIt} (Tema CSS a Schermo Intero)\`,
        intro: \`Mostra uno sfondo \${nameIt.toLowerCase()} sul tuo monitor senza scaricare pesanti file immagine. Progettato con gradienti matematici CSS per un'illuminazione fluida ideale per \${moodIt}.\`,
        featuresTitle: \`Vantaggi del Tema \${nameIt}\`,
        features: [
          { title: "100% CSS Senza Ritardi", desc: "Realizzato con gradienti vettoriali. Si carica in 0 millisecondi con zero consumo di banda." },
          { title: \`Atmosfera Ideale per \${moodIt}\`, desc: "Trasforma il tuo display in una lampada decorativa uniforme per il tuo ambiente creativo." },
          { title: "Definizione Perfetta in 4K e 8K", desc: "Si adatta alla risoluzione nativa del monitor senza alcuna perdita di dettaglio." },
          { title: "Schermo Sempre Acceso (Wake Lock)", desc: "Mantiene l'illuminazione attiva senza che il monitor entri in risparmio energetico." },
        ],
        faqs: [
          { q: \`A cosa serve il tema \${nameIt.toLowerCase()}?\`, a: \`Viene usato come sfondo d'ambiente per \${moodIt}, luce da webcam o salvaschermo rilassante.\` },
          { q: "Rallenta il computer?", a: "No, il rendering CSS consuma virtualmente zero risorse di CPU e scheda video." },
          { q: "Posso usarlo su più monitor?", a: "Sì, aprilo su uno schermo secondario per un'atmosfera uniforme e confortevole." },
          { q: "Posso scaricarlo come sfondo?", a: "Certamente, usa il generatore sottostante per esportarlo in 4K o 8K." },
          { q: "È gratuito e senza pubblicità?", a: "Completamente gratuito e privo di annunci pubblicitari." },
        ],
      },
      nl: {
        title: \`\${nameNl} – Volledig Scherm Sfeerachtergrond in Puur CSS\`,
        metaDescription: \`Meeslepend \${nameNl.toLowerCase()} thema gegenereerd met lichte CSS-verlopen. Ideaal voor \${moodNl}, videobellen en focus.\`,
        h1: \`\${nameNl} (Volledig Scherm CSS Thema)\`,
        intro: \`Toon een sfeervol \${nameNl.toLowerCase()} thema op je scherm zonder zware afbeeldingsbestanden. Gemaakt met wiskundige CSS-verlopen voor directe verlichting afgestemd op \${moodNl}.\`,
        featuresTitle: \`Voordelen van het \${nameNl} Thema\`,
        features: [
          { title: "Puur CSS Zonder Laadtijd", desc: "Volledig ontworpen met vectoriële CSS-verlopen. Laadt in 0 milliseconden zonder dataverbruik." },
          { title: \`Sfeer Ideaal voor \${moodNl}\`, desc: "Transformeert je monitor in een rustgevende lichtbron voor je werkruimte." },
          { title: "Haarscherpe Weergave in 4K en 8K", desc: "Schaalt perfect mee met elk type beeldscherm zonder compressieverlies." },
          { title: "Scherm Blijft Continu Verlicht", desc: "Screen Wake Lock voorkomt dat je scherm in slaapstand valt." },
        ],
        faqs: [
          { q: \`Waarvoor wordt het \${nameNl.toLowerCase()} thema gebruikt?\`, a: \`Als rustgevende achtergrond voor \${moodNl}, webcamverlichting of esthetische screensaver.\` },
          { q: "Vertraagt dit mijn computer?", a: "Nee, de zuivere CSS-rendering vraagt nauwelijks rekenkracht van processor of videokaart." },
          { q: "Kan ik dit op meerdere schermen gebruiken?", a: "Ja, open het op een tweede monitor voor een harmonieuze werkplek." },
          { q: "Kan ik dit downloaden als achtergrond?", a: "Zeker, gebruik de generator hieronder om het thema in 4K of 8K te exporteren." },
          { q: "Is het gratis?", a: "Volledig gratis en zonder storende advertenties." },
        ],
      },`;

  content = content.replace(/(faqs: \[\n[\s\S]*?\]\n\s*\},)\n\s*\}\n\s*\}\n\s*\}/, `$1${itNlThemes}\n    }\n  };\n}`);

  // Now update names for all 16 themes
  for (const [themeId, t] of Object.entries(THEME_TRANSLATIONS)) {
    const themeRegex = new RegExp(`(id:\\s*['"]${themeId}['"][\\s\\S]*?id:\\s*['"][^'"]*['"],\\n\\s*\\},)`, 'g');
    content = content.replace(themeRegex, (match, prefix) => {
      if (!match.includes('it:')) {
        return prefix.replace(/id:\s*['"][^'"]*['"],\n\s*\}/, (idLine) => {
          return `${idLine.slice(0, -1)}  it: '${t.itName}',\n      nl: '${t.nlName}',\n    }`;
        });
      }
      return match;
    });

    const callRegex = new RegExp(`(buildTheme\\(\\s*['"]${themeId}['"][\\s\\S]*?moodId[\\s\\S]*?['"][^'"]*['"]\\s*)(\\))`, 'g');
    content = content.replace(callRegex, (match, prefix) => {
      if (!match.includes(t.moodIt)) {
        return `${prefix}, '${t.moodIt.replace(/'/g, "\\'")}', '${t.moodNl.replace(/'/g, "\\'")}')`;
      }
      return match;
    });
  }

  fs.writeFileSync(themesPath, content, 'utf-8');
  console.log('✓ src/content/themes.ts updated with Italian and Dutch copy for all 16 themes');
}
