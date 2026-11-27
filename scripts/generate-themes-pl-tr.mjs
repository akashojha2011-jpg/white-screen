// scripts/generate-themes-pl-tr.mjs
import fs from 'fs';
import path from 'path';

const themesPath = path.resolve('src/content/themes.ts');
let content = fs.readFileSync(themesPath, 'utf-8');

export const THEME_META_PL_TR = {
  'sky-background': { plName: 'Błękitne Niebo', trName: 'Gündüz Gökyüzü', moodPl: 'spokojnego skupienia i świeżości', moodTr: 'ferahlatıcı odaklanma ve gün ışığı hissi' },
  'gradient-background': { plName: 'Nowoczesny Gradient', trName: 'Modern Renk Geçişi', moodPl: 'współczesnej estetyki i kreatywności', moodTr: 'modern estetik ve yaratıcı ilham' },
  'space-background': { plName: 'Głęboki Kosmos', trName: 'Derin Uzay', moodPl: 'pracy nocnej i głębokiej koncentracji', moodTr: 'gece çalışması ve derin odaklanma' },
  'forest-background': { plName: 'Naturalny Las', trName: 'Doğal Orman', moodPl: 'wizualnego spokoju i kontaktu z naturą', moodTr: 'göz dinlendirici huzur ve doğa uyumu' },
  'fire-background': { plName: 'Ciepły Ogień', trName: 'Ateş Parıltısı', moodPl: 'ciepłej energii i przytulnego klimatu', moodTr: 'sıcak enerji ve samimi ortam ışığı' },
  'wood-background': { plName: 'Naturalne Drewno', trName: 'Sıcak Ahşap', moodPl: 'klasycznej elegancji i nastroju pracowni', moodTr: 'klasik şıklık ve huzurlu stüdyo ortamı' },
  'water-background': { plName: 'Krystaliczna Woda', trName: 'Berrak Su', moodPl: 'orzeźwiającego wyciszenia i przejrzystości', moodTr: 'ferahlatıcı sakinlik ve dinginlik' },
  'paper-background': { plName: 'Naturalny Papier', trName: 'Doğal Kağıt', moodPl: 'komfortowego czytania i szkicowania', moodTr: 'parlamasız rahat okuma ve eskiz çizimi' },
  'city-background': { plName: 'Nocne Miasto', trName: 'Gece Şehri', moodPl: 'miejskiego rytmu i nowoczesnej produktywności', moodTr: 'modern şehir ritmi ve çalışma verimliliği' },
  'ocean-background': { plName: 'Głęboki Ocean', trName: 'Derin Okyanus', moodPl: 'głębokiego spokoju i redukcji stresu', moodTr: 'derin dinginlik ve zihinsel rahatlama' },
  'galaxy-background': { plName: 'Kosmiczna Galaktyka', trName: 'Kozmik Galaksi', moodPl: 'wieczornej inspiracji i wyobraźni', moodTr: 'gece ilhamı ve kozmik yaratıcılık' },
  'sunset-background': { plName: 'Ciepły Zachód Słońca', trName: 'Sıcak Gün Batımı', moodPl: 'wieczornego relaksu i przygotowania do snu', moodTr: 'akşam dinlenmesi ve huzurlu uykuya geçiş' },
  'silver-background': { plName: 'Metaliczne Srebro', trName: 'Metalik Gümüş', moodPl: 'technicznej precyzji i czystości formy', moodTr: 'teknik hassasiyet ve berrak netlik' },
  'snow-background': { plName: 'Czysty Śnieg', trName: 'Saf Kar', moodPl: 'absolutnej czystości i rozproszonego światła', moodTr: 'kusursuz saflık ve yumuşak dağınık ışık' },
  'carbon-fiber-background': { plName: 'Włókno Węglowe', trName: 'Karbon Fiber', moodPl: 'nowoczesnego stylu technologicznego i gamingu', moodTr: 'yüksek teknolojili oyun ve odaklanma ortamı' },
  'concrete-background': { plName: 'Architektoniczny Beton', trName: 'Endüstriyel Beton', moodPl: 'surowego minimalizmu i nowoczesnego designu', moodTr: 'modern minimalizm ve sade stüdyo tarzı' },
};

if (!content.includes('namePl =')) {
  // 1. Add THEME_META_PL_TR definition right above buildTheme
  const metaCode = `export const THEME_META_PL_TR: Record<string, { plName: string; trName: string; moodPl: string; moodTr: string }> = ${JSON.stringify(THEME_META_PL_TR, null, 2)};\n\n`;
  content = content.replace('function buildTheme(', `${metaCode}function buildTheme(`);

  // 2. Add namePl, nameTr, moodPl, moodTr in buildTheme
  content = content.replace(
    '  const nameNl = names.nl || names.en;',
    `  const nameNl = names.nl || names.en;\n  const metaPlTr = THEME_META_PL_TR[id] || { plName: names.en, trName: names.en, moodPl: moodEn, moodTr: moodEn };\n  const namePl = names.pl || metaPlTr.plName;\n  const nameTr = names.tr || metaPlTr.trName;\n  const moodPl = metaPlTr.moodPl;\n  const moodTr = metaPlTr.moodTr;`
  );

  // 3. Add pl and tr to content dictionary in buildTheme
  const plTrThemes = `
      pl: {
        title: \`\${namePl} – Pełnoekranowe Tło Nastrojowe w Czystym CSS\`,
        metaDescription: \`Klimatyczne tło \${namePl.toLowerCase()} oparte na lekkich gradientach CSS. Idealne do: \${moodPl}, wideorozmów i pracy.\`,
        h1: \`\${namePl} (Pełnoekranowy Motyw CSS)\`,
        intro: \`Wyświetl nastrojowy motyw \${namePl.toLowerCase()} na całym ekranie bez konieczności pobierania ciężkich plików graficznych. Zbudowany z wektorowych gradientów CSS zapewnia natychmiastowe ładowanie i płynne światło sprzyjające: \${moodPl}.\`,
        featuresTitle: \`Zalety Motywu \${namePl}\`,
        features: [
          { title: "100% Czysty CSS", desc: "Generowany matematycznie w przeglądarce. Ładuje się natychmiast bez obciążania łącza." },
          { title: \`Idealna Atmosfera: \${moodPl}\`, desc: "Zamienia monitor lub tablet w estetyczną lampę nastrojową do Twojego stanowiska." },
          { title: "Perfekcyjna Ostrość 4K i 8K", desc: "Automatycznie dopasowuje się do natywnej rozdzielczości ekranu bez utraty jakości." },
          { title: "Ekran Zawsze Aktywny", desc: "Wbudowana blokada Screen Wake Lock zapobiega wygaszaniu monitora." },
        ],
        faqs: [
          { q: \`Do czego służy motyw \${namePl.toLowerCase()}?\`, a: \`Jako nastrojowe tło podczas: \${moodPl}, doświetlenie do kamery lub estetyczny wygaszacz.\` },
          { q: "Czy obciąża komputer?", a: "Nie, lekki kod CSS zużywa znikome zasoby procesora i karty graficznej." },
          { q: "Czy mogę używać go na drugim monitorze?", a: "Tak, doskonale sprawdza się jako stałe źródło miękkiego światła na dodatkowym ekranie." },
          { q: "Czy można pobrać to tło jako tapetę?", a: "Tak, skorzystaj z narzędzia poniżej, aby wyeksportować grafikę w jakości 4K lub 8K." },
          { q: "Czy narzędzie jest bezpłatne?", a: "Całkowicie bezpłatne i wolne od nachalnych reklam." },
        ],
      },
      tr: {
        title: \`\${nameTr} – Saf CSS ile Tam Ekran Ortam Arka Planı\`,
        metaDescription: \`Hafif CSS gradyanlarıyla oluşturulmuş etkileyici \${nameTr.toLowerCase()} teması. \${moodTr}, video görüşmeler ve odaklanma için ideal.\`,
        h1: \`\${nameTr} (Tam Ekran CSS Teması)\`,
        intro: \`Ağır resim dosyaları indirmeden ekranınızda \${nameTr.toLowerCase()} ambiyansını yaşayın. Saf CSS renk geçişleriyle tasarlanan bu tema, \${moodTr} için anında gecikmesiz aydınlatma sunar.\`,
        featuresTitle: \`\${nameTr} Temasının Avantajları\`,
        features: [
          { title: "%100 Saf CSS ile Sıfır Gecikme", desc: "Matematiksel CSS gradyanlarıyla oluşturulmuştur. Kota harcamadan anında açılır." },
          { title: \`\${moodTr} İçin İdeal Ambiyans\`, desc: "Monitörünüzü veya tabletinizi çalışma alanınız için dinlendirici bir ışık paneline dönüştürür." },
          { title: "4K ve 8K Kusursuz Keskinlik", desc: "Bozulma veya pikselleşme olmadan ekranınızın doğal çözünürlüğüne tam uyum sağlar." },
          { title: "Ekran Sürekli Açık Kalır", desc: "Ekran Uyku Kilidi sayesinde ekranınız bekleme moduna geçmez." },
        ],
        faqs: [
          { q: \`\${nameTr.toLowerCase()} teması ne için kullanılır?\`, a: \`\${moodTr}, görüntülü görüşmelerde arka plan ışığı veya dinlendirici ekran koruyucu olarak kullanılır.\` },
          { q: "Bilgisayarı yavaşlatır mı?", a: "Hayır, saf CSS tarayıcı tarafından donanım hızlandırmalı olarak sıfır yük ile işlenir." },
          { q: "Birden fazla monitörde kullanabilir miyim?", a: "Evet, ikinci bir ekranda açarak odanızda dengeli ve hoş bir ışık sağlayabilirsiniz." },
          { q: "Duvar kağıdı olarak indirebilir miyim?", a: "Elbette, aşağıdaki paneli kullanarak 4K veya 8K formatında kaydedebilirsiniz." },
          { q: "Tamamen ücretsiz mi?", a: "Evet, %100 ücretsizdir ve reklam içermez." },
        ],
      },`;

  content = content.replace(/(faqs: \[\n[\s\S]*?\]\n\s*\},)\n\s*\}\n\s*\}\n\s*\};/, `$1${plTrThemes}\n    }\n  };\n}`);

  // 4. Update names in ALL_THEMES for each theme
  for (const [themeId, meta] of Object.entries(THEME_META_PL_TR)) {
    const themeRegex = new RegExp(`(id:\\s*['"]${themeId}['"][\\s\\S]*?nl:\\s*['"][^'"]*['"],\\n\\s*\\},)`, 'g');
    content = content.replace(themeRegex, (match, prefix) => {
      if (!match.includes('pl:')) {
        return prefix.replace(/nl:\s*['"][^'"]*['"],\n\s*\}/, (nlLine) => {
          return `${nlLine.slice(0, -1)}  pl: '${meta.plName}',\n      tr: '${meta.trName}',\n    }`;
        });
      }
      return match;
    });
  }

  fs.writeFileSync(themesPath, content, 'utf-8');
  console.log('✓ src/content/themes.ts updated with Polish and Turkish copy for all 16 themes');
}
