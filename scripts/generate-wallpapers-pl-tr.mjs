// scripts/generate-wallpapers-pl-tr.mjs
import fs from 'fs';
import path from 'path';

const wallpapersPath = path.resolve('src/content/wallpapers.ts');
let content = fs.readFileSync(wallpapersPath, 'utf-8');

export const WALLPAPER_META_PL_TR = {
  'white-wallpaper': { plName: 'Biała Tapeta HD', trName: 'Beyaz Duvar Kağıdı HD' },
  'white-wallpaper-4k': { plName: 'Biała Tapeta 4K Ultra HD', trName: 'Beyaz Duvar Kağıdı 4K Ultra HD' },
  'white-wallpaper-8k': { plName: 'Biała Tapeta 8K Ultra HD', trName: 'Beyaz Duvar Kağıdı 8K Ultra HD' },
  'white-background-for-iphone': { plName: 'Białe Tło na iPhone', trName: 'iPhone İçin Beyaz Arka Plan' },
  'white-wallpaper-for-desktop': { plName: 'Biała Tapeta na Pulpit PC', trName: 'Masaüstü PC İçin Beyaz Duvar Kağıdı' },
  'black-wallpaper': { plName: 'Czarna Tapeta HD', trName: 'Siyah Duvar Kağıdı HD' },
  'black-wallpaper-4k': { plName: 'Czarna Tapeta 4K Ultra HD', trName: 'Siyah Duvar Kağıdı 4K Ultra HD' },
  'blue-wallpaper': { plName: 'Niebieska Tapeta HD', trName: 'Mavi Duvar Kağıdı HD' },
  'green-wallpaper': { plName: 'Zielona Tapeta HD', trName: 'Yeşil Duvar Kağıdı HD' },
  'red-wallpaper': { plName: 'Czerwona Tapeta HD', trName: 'Kırmızı Duvar Kağıdı HD' },
};

if (!content.includes('plName =')) {
  // 1. Declare plName and trName in buildWallpaper
  content = content.replace(
    '  const nlName = names.nl;\n',
    `  const nlName = names.nl;\n  const metaPlTr = WALLPAPER_META_PL_TR[id] || { plName: names.en, trName: names.en };\n  const plName = names.pl || metaPlTr.plName;\n  const trName = names.tr || metaPlTr.trName;\n`
  );

  const metaCode = `export const WALLPAPER_META_PL_TR: Record<string, { plName: string; trName: string }> = ${JSON.stringify(WALLPAPER_META_PL_TR, null, 2)};\n\n`;
  content = content.replace('function buildWallpaper(', `${metaCode}function buildWallpaper(`);

  // 2. Add pl and tr to content dictionary in buildWallpaper
  const plTrWallpapers = `
      pl: {
        title: \`\${plName} – Pobierz Bezpłatnie Tapetę w Wysokiej Rozdzielczości\`,
        metaDescription: \`Pobierz \${plName.toLowerCase()} w formatach PNG, JPG i WEBP. Bezstratne obrazy tła w jakości HD, 4K i 8K na komputer, telefon i tablet.\`,
        h1: \`\${plName} (Bezstratne Pobieranie Tła)\`,
        intro: \`Generuj i pobieraj czyste tło \${plName.toLowerCase()} bezpośrednio w przeglądarce. Obrazy są renderowane lokalnie na płótnie HTML5 w 100% bezstratnej jakości sRGB bez żadnych znaków wodnych.\`,
        featuresTitle: "Specyfikacja i Opcje Eksportu",
        features: [
          { title: "Wiele Formatów Plików", desc: "Zapisuj w bezstratnym formacie PNG, nowoczesnym WEBP lub uniwersalnym JPEG." },
          { title: \`Perfekcyjne Dopasowanie: \${resLabel}\`, desc: "Optymalnie przygotowane dla Twojego ekranu bez rozmycia i zniekształceń." },
          { title: "Bez Rejestracji i Opłat", desc: "100% darmowe pobieranie bez zakładania konta czy pobierania aplikacji." },
          { title: "Wszystkie Proporcje Ekranu", desc: "Dopasowane do monitorów panoramicznych 16:9, ekranów smartfonów 9:16 i formatów kwadratowych." },
        ],
        faqs: [
          { q: \`Jak pobrać tę tapetę (\${plName.toLowerCase()})?\`, a: "Wybierz format i rozdzielczość w panelu pobierania, a następnie kliknij 'Pobierz Obraz Tła'." },
          { q: "Czy obraz jest rzeczywiście bezstratny?", a: "Tak, pliki PNG są generowane bezpośrednio z pamięci canvas przeglądarki bez kompresji stratnej." },
          { q: "Czy mogę używać tej tapety komercyjnie?", a: "Tak, wszystkie generowane jednolite tła są objęte domeną publiczną i wolne do użytku osobistego oraz komercyjnego." },
          { q: "Jaki format jest najlepszy na komputer?", a: "Format PNG zapewnia najwyższą, nieskompresowaną wierność kolorów." },
          { q: "Czy działa na iPhone i Androidzie?", a: "Oczywiście, wybierz 'Smartfon Mobilny (1080 × 1920)' dla idealnego dopasowania pionowego." },
        ],
      },
      tr: {
        title: \`\${trName} – Ücretsiz Yüksek Çözünürlüklü Duvar Kağıdı İndir\`,
        metaDescription: \`Kayıpsız \${trName.toLowerCase()} PNG, JPG ve WEBP formatlarında indirin. PC, iPhone ve monitörler için ultra yüksek çözünürlüklü arka planlar.\`,
        h1: \`\${trName} (Kayıpsız Duvar Kağıdı İndir)\`,
        intro: \`Doğrudan tarayıcınızda saf \${trName.toLowerCase()} arka planı oluşturun ve indirin. HTML5 canvas üzerinde filigransız ve %100 kayıpsız sRGB kalitesinde yerel olarak üretilir.\`,
        featuresTitle: "Teknik Özellikler ve Dışa Aktarma",
        features: [
          { title: "Çoklu Dosya Formatı", desc: "Kayıpsız PNG, modern WEBP veya standart JPEG formatlarında kaydedin." },
          { title: \`\${resLabel} İçin Piksel Hassasiyeti\`, desc: "Bulanık ölçeklendirmeyi önlemek için modern panellere tam uyumlu üretilir." },
          { title: "Ücretsiz ve Reklamsız", desc: "Kayıt olmadan veya yazılım yüklemeden %100 ücretsiz indirin." },
          { title: "Tüm En-Boy Oranları Desteklenir", desc: "16:9 masaüstü, 9:16 akıllı telefon kilit ekranı ve kare profil ölçüleri mevcuttur." },
        ],
        faqs: [
          { q: \`Bu \${trName.toLowerCase()} nasıl indirilir?\`, a: "İndirme panelinden istediğiniz formatı ve çözünürlüğü seçip 'Arka Plan Resmini İndir' butonuna tıklayın." },
          { q: "Görüntü gerçekten kayıpsız mı?", a: "Evet, PNG dosyaları doğrudan tarayıcının canvas belleğinden sıkıştırma kaybı olmadan aktarılır." },
          { q: "Ticari amaçla kullanabilir miyim?", a: "Evet, üretilen tüm düz renk duvar kağıtları kamu malıdır ve ticari kullanım dahil serbesttir." },
          { q: "Masaüstü için en uygun format hangisidir?", a: "PNG formatı en yüksek görsel kaliteyi ve renk doğruluğunu sağlar." },
          { q: "iPhone ve Android cihazlarda çalışır mı?", a: "Evet, dikey ekrana tam oturması için 'Mobil Akıllı Telefon (1080 × 1920)' seçeneğini kullanın." },
        ],
      },`;

  content = content.replace(/(faqs: \[\n[\s\S]*?\]\n\s*\},)\n\s*\}\n\s*\}\n\s*\};/, `$1${plTrWallpapers}\n    }\n  };\n}`);

  // 3. Update names for all 10 wallpapers
  for (const [wpId, meta] of Object.entries(WALLPAPER_META_PL_TR)) {
    const wpRegex = new RegExp(`(id:\\s*['"]${wpId}['"][\\s\\S]*?nl:\\s*['"][^'"]*['"],\\n\\s*\\},)`, 'g');
    content = content.replace(wpRegex, (match, prefix) => {
      if (!match.includes('pl:')) {
        return prefix.replace(/nl:\s*['"][^'"]*['"],\n\s*\}/, (nlLine) => {
          return `${nlLine.slice(0, -1)}  pl: '${meta.plName}',\n      tr: '${meta.trName}',\n    }`;
        });
      }
      return match;
    });
  }

  fs.writeFileSync(wallpapersPath, content, 'utf-8');
  console.log('✓ src/content/wallpapers.ts updated with Polish and Turkish copy for all 10 wallpapers');
}
