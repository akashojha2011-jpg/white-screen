// scripts/generate-wallpapers-ru.mjs
import fs from 'fs';
import path from 'path';

const wallpapersPath = path.resolve('src/content/wallpapers.ts');
let content = fs.readFileSync(wallpapersPath, 'utf-8');

export const WALLPAPER_META_RU = {
  "white-wallpaper": { ruName: "Белые обои HD" },
  "white-wallpaper-4k": { ruName: "Белые обои 4K Ultra HD" },
  "white-wallpaper-8k": { ruName: "Белые обои 8K Ultra HD" },
  "white-background-for-iphone": { ruName: "Белый фон для iPhone" },
  "white-wallpaper-for-desktop": { ruName: "Белые обои для ПК" },
  "black-wallpaper": { ruName: "Черные обои HD" },
  "black-wallpaper-4k": { ruName: "Черные обои 4K Ultra HD" },
  "blue-wallpaper": { ruName: "Синие обои 4K" },
  "green-wallpaper": { ruName: "Зеленые обои 4K" },
  "red-wallpaper": { ruName: "Красные обои 4K" }
};

if (!content.includes('ruName')) {
  // 1. Add WALLPAPER_META_RU definition right above function buildWallpaper
  const metaCode = `export const WALLPAPER_META_RU: Record<string, { ruName: string }> = ${JSON.stringify(WALLPAPER_META_RU, null, 2)};\n\n`;
  content = content.replace('function buildWallpaper(', `${metaCode}function buildWallpaper(`);

  // 2. Extract ru variables in buildWallpaper
  content = content.replace(
    '  const koName = names.ko || metaJaKo.koName;',
    `  const koName = names.ko || metaJaKo.koName;\n  const metaRu = WALLPAPER_META_RU[id] || { ruName: names.en };\n  const ruName = names.ru || metaRu.ruName;`
  );

  // 3. Update names object
  content = content.replace(
    /ko: koName,\n\s*\}/,
    `ko: koName,\n      ru: ruName,\n    }`
  );

  // 4. Append ru to content dictionary
  const ruWpTemplates = `      ru: {
        title: \`\${ruName} – Скачать фоновые изображения ультравысокого разрешения без сжатия\`,
        metaDescription: \`Скачать чистые \${ruName.toLowerCase()} в формате PNG, JPG и WEBP. Обои без сжатия для монитора ПК, iPhone, iPad и 4K/8K экранов.\`,
        h1: \`\${ruName} (Скачать обои без потери качества)\`,
        intro: \`Создавайте и загружайте кристально чистые \${ruName.toLowerCase()} прямо в браузере. Изображение рендерится через HTML5 Canvas в полном цветовом пространстве sRGB без водяных знаков и артефактов сжатия.\`,
        featuresTitle: "Технические параметры и форматы",
        features: [
          { title: "3 формата файлов на выбор", desc: "Максимальное качество в PNG без сжатия, легкий современный формат WEBP или универсальный JPEG." },
          { title: \`Оптимальная четкость для \${resLabel}\`, desc: "Изображение создается строго под физические пиксели современных дисплеев без размытия." },
          { title: "100% бесплатно и без регистрации", desc: "Никаких платных подписок, рекламы или необходимости регистрироваться — сохраняйте в один клик." },
          { title: "Для настольных ПК и смартфонов", desc: "Широкоформатные мониторы 16:9, вертикальные экраны телефонов 9:16 и квадратные форматы." },
        ],
        faqs: [
          { q: \`Как скачать эти \${ruName.toLowerCase()}?\`, a: "В панели загрузки выберите нужный формат и разрешение экрана, затем нажмите кнопку «Скачать фоновое изображение»." },
          { q: "Сохраняется ли файл действительно без сжатия?", a: "Да. При выборе формата PNG картинка выгружается из памяти Canvas попиксельно без какой-либо компрессии." },
          { q: "Можно ли использовать обои в коммерческих целях?", a: "Да. Все сгенерированные однотонные обои являются общественным достоянием (CC0) и разрешены для любых личных и коммерческих проектов." },
          { q: "Какой формат лучше всего подходит для монитора ПК?", a: "Рекомендуем PNG — он гарантирует абсолютно ровную заливку цветом без артефактов." },
          { q: "Подходит ли изображение для iPhone и Android?", a: "Да. Выберите в списке разрешение «Для смартфонов (1080 × 1920)» для идеального соответствия экрану блокировки." },
        ],
      },`;

  const targetKoWpClose = `          { q: "아이폰과 안드로이드 기기에서도 잘 맞나요?", a: "네, '모바일 스마트폰 (1080 × 1920)' 옵션을 선택하시면 세로 화면에 완벽하게 맞춤 다운로드됩니다." },
        ],
      },`;

  if (content.includes(targetKoWpClose)) {
    content = content.replace(targetKoWpClose, `${targetKoWpClose}\n${ruWpTemplates}`);
    fs.writeFileSync(wallpapersPath, content, 'utf-8');
    console.log('✓ src/content/wallpapers.ts updated with Russian content templates');
  } else {
    console.error('Target ko close string not found in wallpapers.ts');
  }
}
