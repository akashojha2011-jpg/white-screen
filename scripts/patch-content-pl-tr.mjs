// scripts/patch-content-pl-tr.mjs
import fs from 'fs';
import path from 'path';

// 1. PATCH src/content/colors.ts
const colorsPath = path.resolve('src/content/colors.ts');
let colorsContent = fs.readFileSync(colorsPath, 'utf-8');

const plTrColorContent = `      pl: {
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

const targetNlClose = `          {
            q: \`Kan ik deze \${nlName.toLowerCase()} achtergrond downloaden in 4K of 8K?\`,
            a: \`Ja! Blader naar beneden om haarscherpe PNG-, WEBP- of JPG-afbeeldingen op te slaan in de gewenste resolutie.\`,
          },
        ],
      },`;

if (!colorsContent.includes("title: `${plName} Ekran")) {
  colorsContent = colorsContent.replace(targetNlClose, `${targetNlClose}\n${plTrColorContent}`);
  fs.writeFileSync(colorsPath, colorsContent, 'utf-8');
  console.log('✓ src/content/colors.ts successfully patched with pl and tr content');
}

// 2. PATCH src/content/themes.ts
const themesPath = path.resolve('src/content/themes.ts');
let themesContent = fs.readFileSync(themesPath, 'utf-8');

// Ensure names in buildTheme includes pl and tr
themesContent = themesContent.replace(
  /names,\n\s*content: \{/,
  `names: {
      ...names,
      pl: namePl,
      tr: nameTr,
    },
    content: {`
);

const plTrThemeContent = `      pl: {
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

const targetNlThemeClose = `          { q: "Is het gratis?", a: "Volledig gratis en zonder storende advertenties." },
        ],
      },`;

if (!themesContent.includes("title: `${namePl} – Pełnoekranowe Tło")) {
  themesContent = themesContent.replace(targetNlThemeClose, `${targetNlThemeClose}\n${plTrThemeContent}`);
  fs.writeFileSync(themesPath, themesContent, 'utf-8');
  console.log('✓ src/content/themes.ts successfully patched with pl and tr content');
}

// 3. PATCH src/content/wallpapers.ts
const wallpapersPath = path.resolve('src/content/wallpapers.ts');
let wallpapersContent = fs.readFileSync(wallpapersPath, 'utf-8');

wallpapersContent = wallpapersContent.replace(
  /names,\n\s*content: \{/,
  `names: {
      ...names,
      pl: plName,
      tr: trName,
    },
    content: {`
);

const plTrWallpaperContent = `      pl: {
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

const targetNlWpClose = `          { q: "Werkt dit op iPhone en Android?", a: "Ja, kies 'Mobiele Smartphone (1080 × 1920)' voor een vlekkeloze verticale weergave." },
        ],
      },`;

if (!wallpapersContent.includes("title: `${plName} – Pobierz Bezpłatnie")) {
  wallpapersContent = wallpapersContent.replace(targetNlWpClose, `${targetNlWpClose}\n${plTrWallpaperContent}`);
  fs.writeFileSync(wallpapersPath, wallpapersContent, 'utf-8');
  console.log('✓ src/content/wallpapers.ts successfully patched with pl and tr content');
}
