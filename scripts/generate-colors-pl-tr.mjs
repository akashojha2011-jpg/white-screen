// scripts/generate-colors-pl-tr.mjs
import fs from 'fs';
import path from 'path';

const colorsPath = path.resolve('src/content/colors.ts');
let content = fs.readFileSync(colorsPath, 'utf-8');

export const COLOR_META_PL_TR = {
  'white-screen': { plName: 'Biały', trName: 'Beyaz', usePl: 'czyszczenia monitora, testu pikseli, oświetlenia wideo i kalkowania', useTr: 'ekran temizleme, ölü piksel testi, kamera ışığı ve çizim masası' },
  'black-screen': { plName: 'Czarny', trName: 'Siyah', usePl: 'testu ekranów OLED, oszczędzania baterii i odpoczynku', useTr: 'OLED ekran testi, pil tasarrufu, uyku ve piksel tespiti' },
  'blue-screen': { plName: 'Niebieski', trName: 'Mavi', usePl: 'kalibracji subpikseli LCD, oświetlenia nocnego i relaksu', useTr: 'LCD alt piksel kalibrasyonu, gece ışığı ve ortam aydınlatması' },
  'green-screen': { plName: 'Zielony', trName: 'Yeşil', usePl: 'tła chroma key do streamingu i produkcji wideo', useTr: 'yayın ve video prodüksiyonu için yeşil ekran (chroma key)' },
  'red-screen': { plName: 'Czerwony', trName: 'Kırmızı', usePl: 'ochrony widzenia nocnego, astronomii i ciemni fotograficznej', useTr: 'gece görüşünü koruma, astronomi ve karanlık oda' },
  'yellow-screen': { plName: 'Żółty', trName: 'Sarı', usePl: 'czytania o wysokim kontraście i ciepłego oświetlenia', useTr: 'yüksek görünürlüklü okuma ışığı ve sıcak ortam aydınlatması' },
  'orange-screen': { plName: 'Pomarańczowy', trName: 'Turuncu', usePl: 'symulacji zachodu słońca i ochrony rytmu dobowego', useTr: 'gün batımı simülasyonu ve sirkadiyen ritim koruması' },
  'pink-screen': { plName: 'Różowy', trName: 'Pembe', usePl: 'delikatnego światła upiększającego do portretów i makijażu', useTr: 'portreler için yumuşak güzellik ışığı ve estetik aydınlatma' },
  'purple-screen': { plName: 'Fioletowy', trName: 'Mor', usePl: 'kreatywnego oświetlenia do streamingu i nastrojowego tła', useTr: 'yayınlar için yaratıcı ortam ışığı ve estetik arka plan' },
  'gold-screen': { plName: 'Złoty', trName: 'Altın', usePl: 'ciepłego oświetlenia odcieni skóry i fotografii golden hour', useTr: 'sıcak cilt tonu aydınlatması ve altın saat fotoğrafçılığı' },
  'light-blue-screen': { plName: 'Jasnoniebieski', trName: 'Açık Mavi', usePl: 'symulacji dziennego nieba i orzeźwiającego światła do pracy', useTr: 'gündüz gökyüzü simülasyonu ve zindelik veren çalışma ışığı' },
  'brown-screen': { plName: 'Brązowy', trName: 'Kahverengi', usePl: 'ciepłego matowego tła i przytulnej atmosfery bez odblasków', useTr: 'parlamayan sıcak toprak tonu arka plan ve stüdyo ortamı' },
  'grey-screen': { plName: 'Szary', trName: 'Gri', usePl: 'wzorca 18% szarości do kalibracji balansu bieli w aparatach', useTr: 'fotoğraf makinelerinde beyaz ayarı ve pozlama için %18 gri kart' },
  'neon-screen': { plName: 'Neonowy', trName: 'Neon', usePl: 'sprawdzania maksymalnej luminancji matrycy i sygnalizacji', useTr: 'maksimum panel parlaklığı kontrolü ve yüksek görünürlüklü sinyal' },
  'olive-screen': { plName: 'Oliwkowy', trName: 'Zeytin Yeşili', usePl: 'dyskretnego oświetlenia taktycznego i łagodnego zielonego światła', useTr: 'hafif taktik aydınlatma ve göz yormayan yeşil ışık' },
  'coral-screen': { plName: 'Koralowy', trName: 'Mercan', usePl: 'korzystnego oświetlenia twarzy podczas rozmów wideo', useTr: 'web kamerası için yüzü aydınlatan sıcak ve canlı ışık' },
  'navy-screen': { plName: 'Granatowy', trName: 'Lacivert', usePl: 'wysokokontrastowego tła do pracy nocnej bez rozpraszania', useTr: 'gece odaklanması için dikkat dağıtmayan koyu kontrastlı arka plan' },
  'mint-screen': { plName: 'Miętowy', trName: 'Nane Yeşili', usePl: 'ulgi dla zmęczonych oczu i relaksującego światła na biurku', useTr: 'yorgun gözleri dinlendirme ve ferahlatıcı masa aydınlatması' },
  'aqua-screen': { plName: 'Akwamaryna', trName: 'Su Yeşili', usePl: 'efektu odbicia wody i żywego tła w odcieniu cyjanu', useTr: 'su yansıması simülasyonu ve canlı camgöbeği arka plan' },
  'teal-screen': { plName: 'Morski', trName: 'Petrol Mavisi', usePl: 'kinowego kontrastu barwnego i nowoczesnej estetyki stoiska', useTr: 'sinematik renk kontrastı ve modern video stüdyosu ambiyansı' },
  'cream-screen': { plName: 'Kremowy', trName: 'Krem', usePl: 'miękkiego światła pergaminowego do czytania bez zmęczenia wzroku', useTr: 'göz yormayan yumuşak parşömen tonlu okuma ışığı' },
  'beige-screen': { plName: 'Beżowy', trName: 'Bej', usePl: 'neutralnego ciepłego tła do minimalistycznych prezentacji', useTr: 'minimalist sunumlar için nötr ve sıcak arka plan' },
  'lavender-screen': { plName: 'Lawendowy', trName: 'Lavanta', usePl: 'kojącego światła przed snem i wieczornego wyciszenia', useTr: 'uyku öncesi rahatlama ve huzurlu gece aydınlatması' },
  'cyan-screen': { plName: 'Cyjan', trName: 'Camgöbeği', usePl: 'energetycznego oświetlenia i wyrazistego akcentu wideo', useTr: 'enerjik stüdyo aydınlatması ve canlı video arka planı' },
  'maroon-screen': { plName: 'Bordowy', trName: 'Bordo', usePl: 'ciemnoczerwonego światła do ciemni fotograficznej i nocy', useTr: 'karanlık oda ve gece göz konforu için koyu kırmızı ışık' },
  'violet-screen': { plName: 'Fiołkowy', trName: 'Menekşe', usePl: 'neonowego klimatu i kreatywnego oświetlenia fotografii stołowej', useTr: 'canlı neon atmosferi ve yaratıcı masaüstü fotoğraf ışığı' },
};

if (!content.includes('pl: plName')) {
  // 1. Add COLOR_META_PL_TR definition right above buildColorCopy
  const metaCode = `export const COLOR_META_PL_TR: Record<string, { plName: string; trName: string; usePl: string; useTr: string }> = ${JSON.stringify(COLOR_META_PL_TR, null, 2)};\n\n`;
  content = content.replace('function buildColorCopy(', `${metaCode}function buildColorCopy(`);

  // 2. Extract pl and tr variables in buildColorCopy
  content = content.replace(
    '  return {\n    id: colorId,',
    `  const metaPlTr = COLOR_META_PL_TR[colorId] || { plName: enName, trName: enName, usePl: primaryUseEn, useTr: primaryUseEn };\n  const plName = metaPlTr.plName;\n  const trName = metaPlTr.trName;\n  const primaryUsePl = metaPlTr.usePl;\n  const primaryUseTr = metaPlTr.useTr;\n\n  return {\n    id: colorId,`
  );

  // 3. Update names object
  content = content.replace(
    /nl: nlName,\n\s*\}/,
    `nl: nlName,\n      pl: plName,\n      tr: trName,\n    }`
  );

  // 4. Append pl and tr to content dictionary
  const plTrCopyTemplates = `      pl: {
        title: \`\${plName} Ekran – Pełnoekranowe Narzędzie i Jednolite Tło\`,
        metaDescription: \`Czysty \${plName.toLowerCase()} ekran online w trybie pełnoekranowym. Idealny do: \${primaryUsePl}, kalibracji monitora i tapet 4K.\`,
        h1: \`\${plName} Ekran (Narzędzie Pełnoekranowe)\`,
        intro: \`Wyświetl jednolity \${plName.toLowerCase()} ekran (\${hex}) z maksymalną jasnością na monitorze komputera, tablecie lub smartfonie. Niezależnie od tego, czy potrzebujesz światła do: \${primaryUsePl}, testowania matrycy czy tła bez rozpraszaczy, nasza aplikacja działa od razu w przeglądarce bez instalowania dodatkowego oprogramowania.\`,
        useCasesTitle: \`Praktyczne Zastosowania: \${plName} Ekran\`,
        useCases: [
          {
            title: "Test Wyświetlacza i Weryfikacja Subpikseli",
            desc: \`Wypełnienie całej matrycy jednolitym kolorem \${plName.toLowerCase()} (\${rgb}) pozwala dokładnie ocenić równomierność podświetlenia i sprawność pikseli.\`,
          },
          {
            title: \`Oświetlenie do Kamery i \${primaryUsePl}\`,
            desc: \`Wykorzystaj monitor jako bezodblaskowe źródło rozproszonego światła do rozmów wideo, portretów i pracy kreatywnej.\`,
          },
          {
            title: "Minimalistyczne Tło Bez Rozpraszaczy",
            desc: \`Ukryj ikony pulpitu, karty i powiadomienia, tworząc czyste środowisko pracy sprzyjające skupieniu.\`,
          },
          {
            title: "Wykrywanie Kurzu i Zabrudzeń Matrycy",
            desc: \`Maksymalna jasność ułatwia natychmiastowe zlokalizowanie kurzu, odcisków palców i smug na powierzchni ekranu.\`,
          },
        ],
        deepDiveHeadings: [
          {
            title: \`Dlaczego Warto Wybrać Pełnoekranowy \${plName} Ekran Online?\`,
            paragraphs: [
              \`Statyczne pliki graficzne często zawierają artefakty kompresji lub niepożądane gradienty. Nasze narzędzie generuje czysty kolor programowo w 32-bitowej przestrzeni sRGB, zapewniając 100% jednolitości od krawędzi do krawędzi.\`,
              \`Dzięki obsłudze HTML5 Fullscreen API oraz blokadzie uśpienia Screen Wake Lock Twój wyświetlacz pozostaje stale aktywny bez wygaszania.\`,
            ],
          },
          {
            title: \`Optymalne Wykorzystanie Światła w Przestrzeni Pracy\`,
            paragraphs: [
              \`Ustawienie drugiego monitora z kolorem \${plName.toLowerCase()} redukuje kontrast ze zbyt ciemnym otoczeniem, zmniejszając zmęczenie wzroku.\`,
              \`W warunkach mobilnych smartfon lub tablet z kolorem \${plName.toLowerCase()} doskonale zastępuje przenośną lampę do zdjęć produktowych.\`,
            ],
          },
          {
            title: "Pobieranie Tapet w Najwyższej Rozdzielczości",
            paragraphs: [
              \`Chcesz zapisać ten odcień na dysku? Skorzystaj z poniższego panelu, aby pobrać bezstratne tapety PNG, WEBP i JPG w jakości 1080p, 2K, 4K, 5K oraz 8K.\`,
            ],
          },
        ],
        faqs: [
          {
            q: \`Do czego służy \${plName.toLowerCase()} ekran?\`,
            a: \`Jest używany do: \${primaryUsePl}, kalibracji monitora, oświetlenia wideo i tworzenia estetycznego tła.\`,
          },
          {
            q: \`Jak włączyć pełny ekran dla tego koloru?\`,
            a: \`Kliknij przycisk 'Pełny Ekran' lub dotknij okna podglądu. Aby wyjść, naciśnij klawisz ESC.\`,
          },
          {
            q: \`Jakie są dokładne parametry barwne tego ekranu?\`,
            a: \`Kolor ma kod HEX \${hex} oraz wartości dziesiętne RGB \${rgb}.\`,
          },
          {
            q: \`Czy ekran wyłączy się automatycznie podczas używania?\`,
            a: \`Nie. Nasza aplikacja automatycznie aktywuje Screen Wake Lock, zapobiegając wygaszeniu monitora.\`,
          },
          {
            q: \`Czy mogę pobrać tę tapetę w rozdzielczości 4K lub 8K?\`,
            a: \`Tak! W sekcji pobierania możesz zapisać grafikę w formacie PNG, WEBP lub JPG w wybranej rozdzielczości.\`,
          },
        ],
      },

      tr: {
        title: \`\${trName} Ekran – Tam Ekran Monitör ve Saf Renk Aracı\`,
        metaDescription: \`Çevrimiçi saf \${trName.toLowerCase()} tam ekran aracı. \${primaryUseTr}, ekran testi ve 4K duvar kağıtları için %100 ücretsiz.\`,
        h1: \`\${trName} Ekran (Tam Ekran Aracı)\`,
        intro: \`Monitörünüzde, tabletinizde veya telefonunuzda saf \${trName.toLowerCase()} ekranı (\${hex}) tam parlaklıkta görüntüleyin. İster \${primaryUseTr} için homojen ışığa, ister piksel kontrolüne veya dikkat dağıtmayan bir arka plana ihtiyacınız olsun, tarayıcı tabanlı aracımız anında tam ekran sağlar.\`,
        useCasesTitle: \`\${trName} Ekranın Pratik Kullanım Alanları\`,
        useCases: [
          {
            title: "Ekran Testi ve Alt Piksel Denetimi",
            desc: \`Tüm paneli saf \${trName.toLowerCase()} (\${rgb}) rengiyle kaplamak, alt piksellerin tepkisini ve panel homojenliğini net biçimde görmenizi sağlar.\`,
          },
          {
            title: \`Özel Aydınlatma ve \${primaryUseTr}\`,
            desc: \`Ekranınız, görüntülü görüşmeler veya fotoğraf çekimleri için yumuşak ve parlamasız bir ışık kutusuna dönüşür.\`,
          },
          {
            title: "Dikkat Dağıtmayan Sade Çalışma Alanı",
            desc: \`Masaüstü simgelerini, bildirimleri ve sekmeleri gizleyerek konsantrasyonu artıran sade bir atmosfer oluşturun.\`,
          },
          {
            title: "Yüzey Tozu ve Leke Tespiti",
            desc: \`Homojen parlak ışık, ekran camı üzerindeki toz zerreciklerini ve parmak izlerini anında görünür kılar.\`,
          },
        ],
        deepDiveHeadings: [
          {
            title: \`Neden Çevrimiçi \${trName} Ekran Aracını Tercih Etmelisiniz?\`,
            paragraphs: [
              \`Statik resim dosyalarında sıkıştırma bozulmaları veya renk geçişleri olabilir. Aracımız saf rengi 32-bit sRGB renk uzayında doğrudan tarayıcıda oluşturarak köşeden köşeye kusursuz homojenlik sunar.\`,
              \`HTML5 Tam Ekran API'si ve Ekran Uyku Kilidi (Screen Wake Lock) sayesinde monitörünüz kapanmadan veya kararmadan sürekli açık kalır.\`,
            ],
          },
          {
            title: \`Çalışma Alanında \${trName} Işık Optimizasyonu\`,
            paragraphs: [
              \`İkinci bir monitörde \${trName.toLowerCase()} ekran açmak oda kontrastını yumuşatarak göz yorgunluğunu belirgin şekilde azaltır.\`,
              \`Mobil kullanıcılar için akıllı telefon veya tablet, ürün çekimleri veya web kamerası için taşınabilir bir ışık paneline dönüşür.\`,
            ],
          },
          {
            title: "Yüksek Çözünürlüklü Düz Renk Duvar Kağıdı İndirme",
            paragraphs: [
              \`Bu rengi çevrimdışı kullanmak ister misiniz? 1080p, 2K, 4K, 5K ve 8K çözünürlüklerde kayıpsız PNG, WEBP ve JPG formatlarında indirin.\`,
            ],
          },
        ],
        faqs: [
          {
            q: \`\${trName} ekran ne için kullanılır?\`,
            a: \`\${primaryUseTr}, monitör kalibrasyonu, video aydınlatması ve dinlendirici arka plan için yaygın olarak kullanılır.\`,
          },
          {
            q: \`Nasıl tam ekran yapabilirim?\`,
            a: \`'Tam Ekran' butonuna tıklayın veya önizleme penceresine dokunun. Çıkmak için klavyeden ESC tuşuna basın.\`,
          },
          {
            q: \`Bu ekranın tam renk kodları nelerdir?\`,
            a: \`Bu ekran HEX \${hex} koduna ve RGB \${rgb} sayısal değerlerine sahiptir.\`,
          },
          {
            q: \`Kullanım sırasında ekran otomatik olarak kapanır mı?\`,
            a: \`Hayır. Ekran Uyku Kilidi (Screen Wake Lock) teknolojisi sayesinde tam ekranda ekranınız sürekli açık kalır.\`,
          },
          {
            q: \`Bu arka planı 4K veya 8K olarak indirebilir miyim?\`,
            a: \`Evet! İndirme bölümünden PNG, WEBP veya JPG formatında yüksek çözünürlükte kaydedebilirsiniz.\`,
          },
        ],
      },`;

  content = content.replace(/(faqs: \[\n[\s\S]*?\]\n\s*\},)\n\s*\}\n\s*\};/, `$1\n${plTrCopyTemplates}\n    }\n  };`);
  fs.writeFileSync(colorsPath, content, 'utf-8');
  console.log('✓ src/content/colors.ts updated with Polish and Turkish copy generation');
}
