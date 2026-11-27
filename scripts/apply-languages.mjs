// scripts/apply-languages.mjs
import fs from 'fs';
import path from 'path';

console.log('Beginning comprehensive Italian (it) & Dutch (nl) integration...');

// 1. Update src/i18n/config.ts
const configPath = path.resolve('src/i18n/config.ts');
let configContent = fs.readFileSync(configPath, 'utf-8');
if (!configContent.includes("it: {")) {
  configContent = configContent.replace(
    /id: \{ code: 'id', name: 'Bahasa Indonesia', dir: 'ltr' \},\n\};/,
    `id: { code: 'id', name: 'Bahasa Indonesia', dir: 'ltr' },\n  it: { code: 'it', name: 'Italiano', dir: 'ltr' },\n  nl: { code: 'nl', name: 'Nederlands', dir: 'ltr' },\n};`
  );
  fs.writeFileSync(configPath, configContent, 'utf-8');
  console.log('✓ src/i18n/config.ts updated with it and nl');
}

// 2. Update src/pages/[lang]/index.astro with localizedHomeMeta
const homeLangPath = path.resolve('src/pages/[lang]/index.astro');
let homeLangContent = fs.readFileSync(homeLangPath, 'utf-8');
if (!homeLangContent.includes("it: {")) {
  const replacement = `  id: {
    title: "Layar Putih Online – Alat Monitor dan Lampu Video (2026)",
    desc: "Utilitas layar putih penuh online instan. Sangat cocok untuk membersihkan monitor, tes piksel mati, pencahayaan webcam Zoom, dan meja gambar jiplak.",
    h1: "Alat Layar Putih Penuh Online",
  },
  it: {
    title: "Schermo Bianco Online – Strumento Display e Luce Pura (2026)",
    desc: "Strumento online per schermo bianco a schermo intero. Ideale per pulire monitor, testare pixel bruciati, illuminare videochiamate e ricalcare disegni.",
    h1: "Strumento Schermo Bianco a Schermo Intero",
  },
  nl: {
    title: "Wit Scherm Online – Schermtool & Zuivere Verlichting (2026)",
    desc: "Online tool voor een zuiver wit scherm in volledig scherm. Ideaal voor monitorreiniging, dode pixel testen, webcamverlichting en overtrekken.",
    h1: "Volledig Scherm Wit Scherm Tool",
  },`;
  homeLangContent = homeLangContent.replace(/  id: \{[\s\S]*?h1: "Alat Layar Putih Penuh Online",\n  \},/, replacement);
  fs.writeFileSync(homeLangPath, homeLangContent, 'utf-8');
  console.log('✓ src/pages/[lang]/index.astro updated');
}

// 3. Update scripts/seo-check.mjs
const seoCheckPath = path.resolve('scripts/seo-check.mjs');
let seoCheckContent = fs.readFileSync(seoCheckPath, 'utf-8');
if (!seoCheckContent.includes("'it'")) {
  seoCheckContent = seoCheckContent.replace(
    /\['es', 'fr', 'de', 'pt', 'id'\]/g,
    `['es', 'fr', 'de', 'pt', 'id', 'it', 'nl']`
  );
  fs.writeFileSync(seoCheckPath, seoCheckContent, 'utf-8');
  console.log('✓ scripts/seo-check.mjs updated');
}

console.log('Base configuration and route files updated.');
