// scripts/generate-themes-ru.mjs
import fs from 'fs';
import path from 'path';

const themesPath = path.resolve('src/content/themes.ts');
let content = fs.readFileSync(themesPath, 'utf-8');

export const THEME_META_RU = {
  "sky-background": { ruName: "Фон Небо", moodRu: "дневной свежести и вдохновения ясного неба" },
  "gradient-background": { ruName: "Градиентный фон", moodRu: "современной визуальной эстетики и творческой концентрации" },
  "space-background": { ruName: "Космический фон", moodRu: "ночного глубокого погружения и космического спокойствия" },
  "forest-background": { ruName: "Лесной фон", moodRu: "природной растительной гармонии и снятия стресса" },
  "fire-background": { ruName: "Огненный фон", moodRu: "согревающего пламени и домашнего уютного тепла" },
  "wood-background": { ruName: "Древесный фон", moodRu: "натурального теплого дерева и студийного комфорта" },
  "water-background": { ruName: "Водный фон", moodRu: "кристальной прозрачности воды и душевного равновесия" },
  "paper-background": { ruName: "Бумажный фон", moodRu: "текстуры пергамента для комфортного чтения без бликов" },
  "city-background": { ruName: "Городской фон", moodRu: "урбанистической продуктивности и технологичной эстетики" },
  "ocean-background": { ruName: "Океанский фон", moodRu: "глубоководного умиротворения и медитативного света" },
  "galaxy-background": { ruName: "Галактический фон", moodRu: "звездного неба и созерцания космических далей" },
  "sunset-background": { ruName: "Закатный фон", moodRu: "золотых вечерних сумерек и неторопливого отдыха" },
  "silver-background": { ruName: "Серебряный фон", moodRu: "стильного металлического минимализма и строгого дизайна" },
  "snow-background": { ruName: "Снежный фон", moodRu: "морозной зимней чистоты и прозрачного горного воздуха" },
  "carbon-fiber-background": { ruName: "Фон Углеволокно", moodRu: "высокотехнологичной автоспортивной текстуры и геймерской атмосферы" },
  "concrete-background": { ruName: "Бетонный фон", moodRu: "бруталистской архитектурной эстетики и городского лофта" }
};

if (!content.includes('nameRu')) {
  // 1. Add THEME_META_RU definition right above function buildTheme
  const metaCode = `export const THEME_META_RU: Record<string, { ruName: string; moodRu: string }> = ${JSON.stringify(THEME_META_RU, null, 2)};\n\n`;
  content = content.replace('function buildTheme(', `${metaCode}function buildTheme(`);

  // 2. Extract ru variables in buildTheme
  content = content.replace(
    '  const moodKo = metaJaKo.moodKo;',
    `  const moodKo = metaJaKo.moodKo;\n  const metaRu = THEME_META_RU[id] || { ruName: names.en, moodRu: moodEn };\n  const nameRu = names.ru || metaRu.ruName;\n  const moodRu = metaRu.moodRu;`
  );

  // 3. Update names object
  content = content.replace(
    /ko: nameKo,\n\s*\}/,
    `ko: nameKo,\n      ru: nameRu,\n    }`
  );

  // 4. Append ru to content dictionary
  const ruThemeTemplates = `      ru: {
        title: \`\${nameRu} – Полноэкранный фоновый CSS-градиент и инструмент для монитора\`,
        metaDescription: \`Полноэкранный \${nameRu.toLowerCase()} на чистом CSS без тяжелых изображений. Идеально для \${moodRu}, видеозвонков и спокойной работы.\`,
        h1: \`\${nameRu} (Полноэкранная CSS-тема)\`,
        intro: \`Наполните экран мягким фоном \${nameRu.toLowerCase()} без необходимости загружать тяжелые графические файлы. Благодаря векторным CSS-градиентам тема отображается мгновенно с частотой 60 кадров/сек для \${moodRu}.\`,
        featuresTitle: \`Преимущества темы «\${nameRu}»\`,
        features: [
          { title: "Чистый CSS без загрузки картинок", desc: "Генерируется непосредственно видеоядром браузера: моментальная загрузка без расхода трафика." },
          { title: \`Идеально для: \${moodRu}\`, desc: "Превращает монитор или планшет в уютный рассеянный источник света для комнаты." },
          { title: "Абсолютная четкость в 4K и 8K", desc: "Поскольку это векторная заливка, графика остается кристально четкой на любых дисплеях Retina и Ultra HD." },
          { title: "Защита от перехода в спящий режим", desc: "Функция Screen Wake Lock предотвращает автовыключение дисплея во время использования." },
        ],
        faqs: [
          { q: \`Для чего лучше всего подходит тема «\${nameRu.toLowerCase()}»?\`, a: \`Отлично подходит для \${moodRu}, мягкой подсветки лица при видеоконференциях и создания эстетичного рабочего пространства.\` },
          { q: "Замедляет ли эта страница работу компьютера?", a: "Нет, чистый CSS-градиент практически не нагружает процессор и видеокарту." },
          { q: "Можно ли использовать на втором мониторе?", a: "Да! Развернув тему во весь экран на дополнительном дисплее, вы получите стильный рассеянный свет." },
          { q: "Можно ли скачать эту тему как обои?", a: "Да, на панели внизу можно мгновенно сгенерировать файл высокого разрешения вплоть до 8K без сжатия." },
          { q: "Инструмент действительно бесплатен?", a: "Да, сервис полностью бесплатен, не содержит рекламы и не требует регистрации." },
        ],
      },`;

  const targetKoThemeClose = `          { q: "무료로 이용할 수 있나요?", a: "완전 무료이며 성가신 광고나 회원가입 요구가 없습니다." },
        ],
      },`;

  if (content.includes(targetKoThemeClose)) {
    content = content.replace(targetKoThemeClose, `${targetKoThemeClose}\n${ruThemeTemplates}`);
    fs.writeFileSync(themesPath, content, 'utf-8');
    console.log('✓ src/content/themes.ts updated with Russian content templates');
  } else {
    console.error('Target ko close string not found in themes.ts');
  }
}
