// scripts/generate-colors-it-nl.mjs
import fs from 'fs';
import path from 'path';

const colorsPath = path.resolve('src/content/colors.ts');
let content = fs.readFileSync(colorsPath, 'utf-8');

export const COLOR_TRANSLATIONS = {
  'white-screen': { it: 'Bianco', nl: 'Wit', useIt: 'pulizia monitor, test pixel bruciati, luce per videochiamate e tavolo luminoso', useNl: 'monitorreiniging, dode pixel testen, videoverlichting en overtrekken' },
  'black-screen': { it: 'Nero', nl: 'Zwart', useIt: 'test display OLED, risparmio batteria, sonno e rilevamento pixel bloccati', useNl: 'OLED-schermtesten, batterijbesparing, slapen en detecteren van defecte pixels' },
  'blue-screen': { it: 'Blu', nl: 'Blauw', useIt: 'calibrazione sub-pixel LCD, luce notturna e illuminazione d\'ambiente', useNl: 'LCD subpixel-kalibratie, sfeerverlichting en nachtlicht' },
  'green-screen': { it: 'Verde', nl: 'Groen', useIt: 'sfondi chroma key per streaming video, calibrazione pixel e luce rilassante', useNl: 'chroma key achtergronden voor streaming, pixelkalibratie en ontspannend licht' },
  'red-screen': { it: 'Rosso', nl: 'Rood', useIt: 'preservazione della visione notturna, astronomia e test sub-pixel rossi', useNl: 'behoud van nachtzicht, astronomie en testen van rode subpixels' },
  'yellow-screen': { it: 'Giallo', nl: 'Geel', useIt: 'luce di lettura ad alta visibilità e bagliore ambientale caldo', useNl: 'hoog-contrast leeslicht en warme sfeerverlichting' },
  'orange-screen': { it: 'Arancione', nl: 'Oranje', useIt: 'simulazione del tramonto e protezione del ritmo circadiano', useNl: 'zonsondergangsimulatie en bescherming van het dag-nachtritme' },
  'pink-screen': { it: 'Rosa', nl: 'Roze', useIt: 'luce morbida per ritratti, bellezza ed estetica visiva', useNl: 'zachte schoonheidsverlichting en sfeervolle portretgloed' },
  'purple-screen': { it: 'Viola', nl: 'Paars', useIt: 'illuminazione creativa per streaming e sfondi d\'atmosfera', useNl: 'creatieve sfeerverlichting en levendige streaming-achtergronden' },
  'gold-screen': { it: 'Oro', nl: 'Goud', useIt: 'illuminazione calda per toni della pelle e fotografia golden hour', useNl: 'warme huidskleurverlichting en fotografie tijdens het gouden uur' },
  'light-blue-screen': { it: 'Azzurro', nl: 'Lichtblauw', useIt: 'simulazione del cielo diurno e luce rinfrescante per la concentrazione', useNl: 'daglicht-hemelsimulatie en ochtendfrisheid voor concentratie' },
  'brown-screen': { it: 'Marrone', nl: 'Bruin', useIt: 'sfondo caldo a basso riflesso per ambienti di lavoro rilassanti', useNl: 'matte aardetint achtergrond en verblindingsvrije sfeer' },
  'grey-screen': { it: 'Grigio', nl: 'Grijs', useIt: 'cartoncino grigio 18% per calibrazione bilanciamento del bianco della fotocamera', useNl: '18% grijskaart voor witbalans-kalibratie en belichtingsmeting' },
  'neon-screen': { it: 'Neon', nl: 'Neon', useIt: 'verifica della massima luminosità del pannello e segnalazione ad alta visibilità', useNl: 'controle van maximale schermhelderheid en signaalweergave' },
  'olive-screen': { it: 'Oliva', nl: 'Olijfgroen', useIt: 'illuminazione tattica discreta e luce verde a bassa intensità', useNl: 'gedimde tactische verlichting en zacht groen licht' },
  'coral-screen': { it: 'Corallo', nl: 'Koraal', useIt: 'illuminazione calda e valorizzante per il viso durante videochiamate', useNl: 'flatteuze gezichtsverlichting voor webcams en warme gloed' },
  'navy-screen': { it: 'Blu Notte', nl: 'Marineblauw', useIt: 'sfondo ad alto contrasto per sessioni di lavoro notturne senza distrazioni', useNl: 'donkere contrastrijke achtergrond voor geconcentreerd nachtwerk' },
  'mint-screen': { it: 'Menta', nl: 'Muntgroen', useIt: 'sollievo visivo per occhi stanchi e rilassante luce da scrivania', useNl: 'visuele verlichting voor vermoeide ogen en rustgevend bureau-licht' },
  'aqua-screen': { it: 'Acqua', nl: 'Aqua', useIt: 'simulazione di riflessi d\'acqua e sfondo ciano vibrante', useNl: 'waterspiegelingseffecten en levendige cyaan achtergrond' },
  'teal-screen': { it: 'Ottanio', nl: 'Blauwgroen', useIt: 'contrasto cinematografico e moderna estetica da studio video', useNl: 'filmisch kleurcontrast en moderne studio-esthetiek' },
  'cream-screen': { it: 'Crema', nl: 'Crème', useIt: 'luce di lettura morbida tipo pergamena contro l\'affaticamento visivo', useNl: 'zacht perkamentkleurig leeslicht tegen vermoeide ogen' },
  'beige-screen': { it: 'Beige', nl: 'Beige', useIt: 'sfondo caldo neutro per design minimalista e presentazioni', useNl: 'neutrale warme achtergrond voor minimalistische ontwerpen' },
  'lavender-screen': { it: 'Lavanda', nl: 'Lavendel', useIt: 'luce soffusa per favorire il sonno e il rilassamento serale', useNl: 'rustgevend avondlicht ter voorbereiding op het slapen' },
  'cyan-screen': { it: 'Ciano', nl: 'Cyaan', useIt: 'illuminazione energica e sfumatura brillante per video', useNl: 'energieke studioverlichting en heldere video-accenten' },
  'maroon-screen': { it: 'Bordeaux', nl: 'Kastanjebruin', useIt: 'luce rosso scuro per camere oscure e lettura a bassa luminosità', useNl: 'donkerrood licht voor donkere kamers en nachtelijk comfort' },
  'violet-screen': { it: 'Violetto', nl: 'Violet', useIt: 'atmosfera neon e illuminazione creativa per fotografia da tavolo', useNl: 'levendige neon-sfeer en creatieve bureaufotografie' },
};

// Check if buildColorCopy already has it and nl in names
if (!content.includes('it: itName')) {
  // Update names definition in buildColorCopy
  content = content.replace(
    /names: \{\n\s*en: enName,\n\s*es: esName,\n\s*fr: frName,\n\s*de: deName,\n\s*pt: ptName,\n\s*id: idName,\n\s*\}/,
    `names: {
      en: enName,
      es: esName,
      fr: frName,
      de: deName,
      pt: ptName,
      id: idName,
      it: itName,
      nl: nlName,
    }`
  );

  // Update buildColorCopy signature
  content = content.replace(
    /primaryUseId: string\n\): ColorDefinition \{/,
    `primaryUseId: string,
  itName: string = enName,
  nlName: string = enName,
  primaryUseIt: string = primaryUseEn,
  primaryUseNl: string = primaryUseEn
): ColorDefinition {`
  );

  // Inject content.it and content.nl into buildColorCopy
  const itNlTemplate = `
      it: {
        title: \`Schermo \${itName} – Sfondo \${itName} Completo e Strumento Monitor\`,
        metaDescription: \`Strumento online per schermo \${itName.toLowerCase()} a schermo intero. Ideale per \${primaryUseIt}, calibrazione monitor e sfondi in 4K.\`,
        h1: \`Schermo \${itName} (Strumento a Schermo Intero)\`,
        intro: \`Mostra uno schermo \${itName.toLowerCase()} puro (\${hex}) a piena luminosità sul tuo monitor, tablet o smartphone. Che tu abbia bisogno di luce \${itName.toLowerCase()} per \${primaryUseIt}, verifica dei pixel o uno sfondo senza distrazioni, il nostro strumento web ti offre schermo intero istantaneo senza installare nulla.\`,
        useCasesTitle: \`Applicazioni Pratiche di uno Schermo \${itName}\`,
        useCases: [
          {
            title: "Test del Display e Calibrazione Visiva",
            desc: \`Riempire lo schermo con un campo solido di colore \${itName.toLowerCase()} (\${rgb}) consente di ispezionare la risposta dei sub-pixel e verificare l'uniformità del pannello.\`,
          },
          {
            title: \`Illuminazione Specializzata e \${primaryUseIt}\`,
            desc: \`Il tuo monitor o tablet si trasforma in un softbox uniforme che emette luce antiriflesso per fotografia e videochiamate.\`,
          },
          {
            title: "Sfondo Minimalista Senza Distrazioni",
            desc: \`Nascondi icone, schede e notifiche con uno sfondo pulito \${itName.toLowerCase()} per concentrarti al massimo.\`,
          },
          {
            title: "Ispezione di Polvere e Superfici",
            desc: \`L'alto contrasto luminoso fa risaltare subito particelle di polvere, impronte e aloni su display lucidi o opachi.\`,
          },
        ],
        deepDiveHeadings: [
          {
            title: \`Perché Usare uno Schermo \${itName} Online?\`,
            paragraphs: [
              \`I file grafici statici e gli screensaver spesso contengono gradienti o artefatti di compressione. Il nostro strumento genera il colore puro nel browser nello spazio colore sRGB a 32 bit per garantire uniformità perfetta da bordo a bordo.\`,
              \`Grazie all'API Fullscreen e all'integrazione Screen Wake Lock, il display rimane acceso continuamente al livello di luminosità desiderato senza andare in sospensione.\`,
            ],
          },
          {
            title: \`Ottimizzazione della Luce \${itName} nell'Ambiente di Lavoro\`,
            paragraphs: [
              \`Posizionare un secondo monitor con luce \${itName.toLowerCase()} ammorbidisce il contrasto della stanza, riducendo l'affaticamento visivo durante lunghe ore di lavoro.\`,
              \`Per i creator mobile, uno smartphone o tablet con schermo \${itName.toLowerCase()} funge da softbox portatile per macrofotografia o illuminazione da webcam.\`,
            ],
          },
          {
            title: "Download Sfondi in Alta Risoluzione",
            paragraphs: [
              \`Vuoi usare questa tonalità offline? Usa il nostro generatore per salvare sfondi PNG, JPG e WEBP lossless in 1080p, 2K, 4K, 5K e 8K.\`,
            ],
          },
        ],
        faqs: [
          {
            q: \`A cosa serve uno schermo \${itName.toLowerCase()}?\`,
            a: \`Viene utilizzato per \${primaryUseIt}, calibrazione dei display, illuminazione per foto e video e come sfondo rilassante.\`,
          },
          {
            q: \`Come imposto lo schermo intero \${itName.toLowerCase()}?\`,
            a: \`Fai clic sul pulsante 'Schermo Intero' o tocca l'area di anteprima. Premi ESC per uscire.\`,
          },
          {
            q: \`Quali sono i codici esatti di questo schermo \${itName.toLowerCase()}?\`,
            a: \`Questo schermo ha codice colore HEX \${hex} e coordinate RGB decimali \${rgb}.\`,
          },
          {
            q: \`Lo schermo andrà in stand-by durante la visualizzazione?\`,
            a: \`No. L'applicazione richiede il blocco di sospensione (Wake Lock) per mantenere il monitor attivo costantemente.\`,
          },
          {
            q: \`Posso scaricare questo sfondo \${itName.toLowerCase()} in 4K o 8K?\`,
            a: \`Certamente! Scorri fino alla sezione download per salvare l'immagine nella risoluzione desiderata senza compressione.\`,
          },
        ],
      },

      nl: {
        title: \`\${nlName} Scherm – Volledig \${nlName} Achtergrond & Display Tool\`,
        metaDescription: \`Directe online tool voor een volledig \${nlName.toLowerCase()} scherm. Ideaal voor \${primaryUseNl}, schermkalibratie, verlichting en 4K downloads.\`,
        h1: \`\${nlName} Scherm (Volledig Scherm Tool)\`,
        intro: \`Toon een zuiver \${nlName.toLowerCase()} scherm (\${hex}) op volle helderheid over je gehele monitor, tablet of smartphone. Of je nu \${nlName.toLowerCase()} licht nodig hebt voor \${primaryUseNl}, pixeltests of een rustige achtergrond, onze browser-tool biedt direct volledig scherm zonder downloads.\`,
        useCasesTitle: \`Praktische Toepassingen voor een \${nlName} Scherm\`,
        useCases: [
          {
            title: "Displaytests en Visuele Kalibratie",
            desc: \`Door je scherm te vullen met een egaal \${nlName.toLowerCase()} kleurvlak (\${rgb}) kun je subpixel-reactietijden controleren en schermuniformiteit inspecteren.\`,
          },
          {
            title: \`Gespecialiseerde Verlichting en \${primaryUseNl}\`,
            desc: \`Je monitor of tablet verandert in een zachte lichtbak die gelijkmatig, ontspiegeld \${nlName.toLowerCase()} licht uitstraalt voor fotografie en videobellen.\`,
          },
          {
            title: "Afleidingsvrije Minimalistische Achtergrond",
            desc: \`Verberg drukke bureaubladpictogrammen en meldingen met een strak \${nlName.toLowerCase()} scherm om optimaal te focussen.\`,
          },
          {
            title: "Stof- en Scherminformatie Inspectie",
            desc: \`Het sterke lichtcontrast maakt stofjes, vingerafdrukken en vlekken op matte en glanzende schermen direct zichtbaar.\`,
          },
        ],
        deepDiveHeadings: [
          {
            title: \`Waarom een Online Volledig \${nlName} Scherm Gebruiken?\`,
            paragraphs: [
              \`Statische afbeeldingsbestanden bevatten vaak compressieverliezen of kleurverlopen. Onze browser-tool genereert de pure kleur rechtstreeks in 32-bits sRGB voor 100% kleurechtheid van hoek tot hoek.\`,
              \`Dankzij de HTML5 Fullscreen API en automatische Screen Wake Lock integratie blijft je scherm continu actief zonder in de slaapstand te vallen.\`,
            ],
          },
          {
            title: \`Optimalisatie van \${nlName} Licht in je Werkruimte\`,
            paragraphs: [
              \`Een tweede scherm met zacht \${nlName.toLowerCase()} licht verzacht het contrast met een donkere kamer en vermindert vermoeide ogen aanzienlijk.\`,
              \`Voor mobiele makers is een tablet of smartphone met een \${nlName.toLowerCase()} scherm een handige draagbare lichtbron voor productfoto's en webcamverlichting.\`,
            ],
          },
          {
            title: "Download Hoge Resolutie Effen Achtergronden",
            paragraphs: [
              \`Wil je deze tint offline bewaren? Gebruik onze generator om lossless PNG, JPG en WEBP achtergronden te downloaden in 1080p, 2K, 4K, 5K en 8K.\`,
            ],
          },
        ],
        faqs: [
          {
            q: \`Waarvoor wordt een \${nlName.toLowerCase()} scherm gebruikt?\`,
            a: \`Het wordt gebruikt voor \${primaryUseNl}, schermkalibratie, verlichting bij fotografie en een afleidingsvrije werkomgeving.\`,
          },
          {
            q: \`Hoe maak ik mijn hele scherm \${nlName.toLowerCase()}?\`,
            a: \`Klik op de knop 'Volledig Scherm' of tik op het voorbeeldvenster. Druk op ESC om weer af te sluiten.\`,
          },
          {
            q: \`Wat zijn de exacte kleurcodes van dit \${nlName.toLowerCase()} scherm?\`,
            a: \`Dit scherm heeft HEX-kleurcode \${hex} en decimale RGB-waarden van \${rgb}.\`,
          },
          {
            q: \`Gaat mijn scherm op zwart of in slaapstand in volledig scherm?\`,
            a: \`Nee. Onze tool activeert automatisch een Screen Wake Lock zodat je display continu verlicht blijft.\`,
          },
          {
            q: \`Kan ik deze \${nlName.toLowerCase()} achtergrond downloaden in 4K of 8K?\`,
            a: \`Ja! Blader naar beneden om haarscherpe PNG-, WEBP- of JPG-afbeeldingen op te slaan in de gewenste resolutie.\`,
          },
        ],
      },`;

  content = content.replace(/(faqs: \[\n[\s\S]*?\]\n\s*\},)\n\s*\}\n\s*\}\n\s*\}/, `$1${itNlTemplate}\n    }\n  };\n}`);

  // Now update each call in ALL_COLORS with the Italian and Dutch names and uses
  for (const [colorId, t] of Object.entries(COLOR_TRANSLATIONS)) {
    const callRegex = new RegExp(`(buildColorCopy\\(\\s*['"]${colorId}['"][\\s\\S]*?['"][^'"]*['"]\\s*)(\\))`, 'g');
    content = content.replace(callRegex, (match, prefix) => {
      if (!match.includes(t.it)) {
        return `${prefix}, '${t.it}', '${t.nl}', '${t.useIt.replace(/'/g, "\\'")}', '${t.useNl.replace(/'/g, "\\'")}')`;
      }
      return match;
    });
  }

  fs.writeFileSync(colorsPath, content, 'utf-8');
  console.log('✓ src/content/colors.ts updated with Italian and Dutch copy for all 26 colors');
}
