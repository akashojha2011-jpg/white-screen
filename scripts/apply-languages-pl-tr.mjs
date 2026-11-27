// scripts/apply-languages-pl-tr.mjs
import fs from 'fs';
import path from 'path';

console.log('Applying Polish (pl) and Turkish (tr) configuration...');

// 1. Update src/i18n/config.ts
const configPath = path.resolve('src/i18n/config.ts');
let configContent = fs.readFileSync(configPath, 'utf-8');
if (!configContent.includes("pl: {")) {
  configContent = configContent.replace(
    /nl: \{ code: 'nl', name: 'Nederlands', dir: 'ltr' \},\n\};/,
    `nl: { code: 'nl', name: 'Nederlands', dir: 'ltr' },\n  pl: { code: 'pl', name: 'Polski', dir: 'ltr' },\n  tr: { code: 'tr', name: 'Türkçe', dir: 'ltr' },\n};`
  );
  fs.writeFileSync(configPath, configContent, 'utf-8');
  console.log('✓ src/i18n/config.ts updated with pl and tr');
}

// 2. Update src/pages/[lang]/index.astro
const homeLangPath = path.resolve('src/pages/[lang]/index.astro');
let homeLangContent = fs.readFileSync(homeLangPath, 'utf-8');
if (!homeLangContent.includes("pl: {")) {
  const replacement = `  nl: {
    title: "Wit Scherm Online – Schermtool & Zuivere Verlichting (2026)",
    desc: "Online tool voor een zuiver wit scherm in volledig scherm. Ideaal voor monitorreiniging, dode pixel testen, webcamverlichting en overtrekken.",
    h1: "Volledig Scherm Wit Scherm Tool",
  },
  pl: {
    title: "Biały Ekran Online – Narzędzie do Monitora i Światło (2026)",
    desc: "Błyskawiczne narzędzie online do wyświetlania czystego białego ekranu. Idealne do czyszczenia monitora, testu martwych pikseli i doświetlania kamery.",
    h1: "Czysty Biały Ekran Pełnoekranowy",
  },
  tr: {
    title: "Beyaz Ekran Online – Tam Ekran Monitör ve Işık Aracı (2026)",
    desc: "Anında tam ekran saf beyaz ekran aracı. Monitör temizliği, ölü piksel testi, Zoom kamera aydınlatması ve çizim masası için %100 ücretsiz.",
    h1: "Saf Tam Ekran Beyaz Ekran Aracı",
  },`;
  homeLangContent = homeLangContent.replace(/  nl: \{[\s\S]*?h1: "Volledig Scherm Wit Scherm Tool",\n  \},/, replacement);
  fs.writeFileSync(homeLangPath, homeLangContent, 'utf-8');
  console.log('✓ src/pages/[lang]/index.astro updated with pl and tr');
}

// 3. Update scripts/seo-check.mjs
const seoCheckPath = path.resolve('scripts/seo-check.mjs');
let seoCheckContent = fs.readFileSync(seoCheckPath, 'utf-8');
if (!seoCheckContent.includes("'pl'")) {
  seoCheckContent = seoCheckContent.replace(
    /\['es', 'fr', 'de', 'pt', 'id', 'it', 'nl'\]/g,
    `['es', 'fr', 'de', 'pt', 'id', 'it', 'nl', 'pl', 'tr']`
  );
  fs.writeFileSync(seoCheckPath, seoCheckContent, 'utf-8');
  console.log('✓ scripts/seo-check.mjs updated with pl and tr');
}

console.log('Base Polish and Turkish configurations applied.');
