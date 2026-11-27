// scripts/build-guides-pl-tr.mjs
import fs from 'fs';
import path from 'path';

// Complete 20 guides for Polish and Turkish matching ALL_GUIDES IDs
const guideMetaTitlesPl = {
  'how-to-clean-laptop-screen-safely': "Jak Bezpiecznie Wyczyścić Ekran Laptopa Bez Uszkodzeń (2026)",
  'how-to-check-dead-pixels-iphone-monitor': "Jak Sprawdzić Martwe Piksele na iPhone i Monitorze (2026)",
  'can-white-screen-work-as-ring-light': "Czy Biały Ekran Może Służyć Jako Lampa Ring Light? (Poradnik)",
  'oled-burn-in-causes-fixes-test': "Wypalenie Ekranu OLED: Przyczyny, Zapobieganie i Test (2026)",
  'backlight-bleed-vs-ips-glow': "Ulot Podświetlenia a IPS Glow: Jak Rozpoznać Wadę Matrycy",
  'turn-laptop-tablet-into-tracing-lightbox': "Jak Zmienić Ekran Laptopa lub Tabletu w Deskę do Kalkowania",
  'monitor-color-luminance-uniformity-test': "Test Jednolitości Kolorów i Jasności Monitora (Poradnik Grafika)",
  'screen-flicker-pwm-eye-strain-test': "Migotanie Ekranu (PWM) a Zmęczenie Oczu: Test Online",
  'red-screen-night-vision-astronomy-guide': "Czerwony Ekran w Astronomii i Noktowizji: Ochrona Wzroku",
  'green-screen-lighting-zoom-streaming': "Oświetlenie Zielonego Ekranu (Chroma Key) do Streamingu i Zoom",
  'black-screen-battery-savings-oled-amoled': "Oszczędzanie Baterii z Czarnym Ekranem na OLED i AMOLED",
  'macro-product-photography-screen-lighting': "Fotografia Produktowa i Makro z Oświetleniem z Ekranu",
  'camera-white-balance-calibration-gray-screen': "Kalibracja Balansu Bieli z Szarym Ekranem 18% (Wzorzec)",
  'dual-monitor-ergonomics-secondary-screen-light': "Ergonomia Dwóch Monitorów: Dodatkowy Ekran Jako Źródło Światła",
  'fix-stuck-pixels-rgb-screen-cycling': "Jak Naprawić Zacięte Piksele za Pomocą Szybkiego Cyklu RGB",
  'screen-brightness-eye-comfort-day-night': "Jasność Ekranu i Komfort Wzroku w Dzień oraz w Nocy",
  'fullscreen-color-screens-deep-focus-pomodoro': "Pełnoekranowe Kolory do Pracy w Skupieniu i Techniki Pomodoro",
  'monitor-pixel-density-ppi-4k-8k-wallpapers': "Gęstość Pikseli (PPI) Monitora a Tapety w Rozdzielczości 4K i 8K",
  'how-to-test-laptop-displays-before-buying': "Jak Przetestować Matrycę Laptopa Przed Zakupem (Checklista)",
  'display-panel-types-oled-ips-va-tn-comparison': "Rodzaje Matryc: OLED vs IPS vs VA vs TN – Porównanie 2026",
};

const guideMetaTitlesTr = {
  'how-to-clean-laptop-screen-safely': "Laptop Ekranı Güvenle Nasıl Temizlenir: Çizik ve Leke Olmadan (2026)",
  'how-to-check-dead-pixels-iphone-monitor': "iPhone ve Monitörde Ölü Piksel Nasıl Kontrol Edilir? (2026)",
  'can-white-screen-work-as-ring-light': "Beyaz Ekran Halka Işık (Ring Light) Olarak Kullanılabilir mi?",
  'oled-burn-in-causes-fixes-test': "OLED Ekran Yanması: Nedenleri, Önleme Yolları ve Testi (2026)",
  'backlight-bleed-vs-ips-glow': "Işık Sızması ve IPS Glow Farkı: Kusur mu, Özellik mi?",
  'turn-laptop-tablet-into-tracing-lightbox': "Ekranı Çizim ve Kopya Masasına (Lightbox) Dönüştürme Rehberi",
  'monitor-color-luminance-uniformity-test': "Monitör Renk ve Parlaklık Homojenlik Testi (Tasarımcı Rehberi)",
  'screen-flicker-pwm-eye-strain-test': "Ekran Titremesi (PWM) ve Göz Yorgunluğu: Çevrimiçi Test Rehberi",
  'red-screen-night-vision-astronomy-guide': "Kırmızı Ekran Gece Görüşü ve Astronomi Rehberi: Gözleri Koruma",
  'green-screen-lighting-zoom-streaming': "Yeşil Ekran (Chroma Key) Aydınlatması: Yayın ve Zoom Rehberi",
  'black-screen-battery-savings-oled-amoled': "Siyah Ekran OLED ve AMOLED'de Ne Kadar Pil Tasarrufu Sağlar?",
  'macro-product-photography-screen-lighting': "Ekran Işığıyla Makro ve Ürün Fotoğrafçılığı (Stüdyo Rehberi)",
  'camera-white-balance-calibration-gray-screen': "%18 Gri Ekran ile Kamera Beyaz Ayarı ve Pozlama Kalibrasyonu",
  'dual-monitor-ergonomics-secondary-screen-light': "Çift Monitör Ergonomisi: İkinci Ekranı Işık Kaynağı Yapma",
  'fix-stuck-pixels-rgb-screen-cycling': "Hızlı RGB Renk Döngüsü ile Takılmış Piksel Onarımı (Rehber)",
  'screen-brightness-eye-comfort-day-night': "Ekran Parlaklığı ve Göz Konforu: Gece ve Gündüz İpuçları",
  'fullscreen-color-screens-deep-focus-pomodoro': "Derin Odaklanma ve Pomodoro İçin Tam Ekran Renkler",
  'monitor-pixel-density-ppi-4k-8k-wallpapers': "Monitör Piksel Yoğunluğu (PPI) ve 4K/8K Duvar Kağıtları",
  'how-to-test-laptop-displays-before-buying': "Satın Almadan Önce Laptop Ekranı Nasıl Test Edilir? (Kontrol Listesi)",
  'display-panel-types-oled-ips-va-tn-comparison': "Ekran Panelleri Karşılaştırması: OLED vs IPS vs VA vs TN (2026)",
};

const guidesPl = {};
const guidesTr = {};

for (const [id, titlePl] of Object.entries(guideMetaTitlesPl)) {
  const titleTr = guideMetaTitlesTr[id];

  guidesPl[id] = {
    title: `${titlePl} - TheWhiteScreen.org`,
    metaDescription: `Kompleksowy poradnik techniczny: ${titlePl.toLowerCase()}. Praktyczne instrukcje, testy ekranu i wskazówki ekspertów od wyświetlaczy.`,
    h1: titlePl,
    intro: `Nowoczesne ekrany komputerów, laptopów i smartfonów oferują zaawansowane możliwości, które wykraczają daleko poza zwykłe wyświetlanie tekstu. W tym przewodniku omawiamy szczegółowe zasady i metody dotyczące: ${titlePl.toLowerCase()}.`,
    sections: [
      {
        heading: "Fundamenty Techniczne i Właściwości Optyczne",
        paragraphs: [
          "Zrozumienie budowy i działania matrycy to kluczowy krok do osiągnięcia maksymalnej jakości obrazu bez nadmiernego zmęczenia wzroku.",
          "Właściwa kalibracja jasności, kontrola odblasków otoczenia oraz korzystanie z natywnej przestrzeni barw sRGB gwarantują stabilne i przewidywalne rezultaty podczas codziennej pracy i rozrywki."
        ]
      },
      {
        heading: "Instrukcja Praktyczna i Optymalna Konfiguracja",
        paragraphs: [
          "Dzięki naszym bezpłatnym narzędziom pełnoekranowym możesz błyskawicznie sprawdzić kluczowe parametry wyświetlacza bez konieczności pobierania zewnętrznych programów.",
          "Zadbaj o właściwą odległość roboczą od ekranu, kąt nachylenia matrycy oraz dopasowanie jasności do światła w pomieszczeniu."
        ],
        subsections: [
          { subhead: "Wskazówki Dotyczące Ergonomii", text: "Ustaw górną krawędź monitora na wysokości linii wzroku, aby odciążyć mięśnie karku i kręgosłupa szyjnego." },
          { subhead: "Czystość Sygnału", text: "Stosuj cyfrowe złącza DisplayPort lub HDMI, aby uniknąć zakłóceń analogowych typowych dla starych kabli VGA." }
        ]
      },
      {
        heading: "Najczęstsze Błędy i Jak Ich Unikać",
        paragraphs: [
          "Unikaj pracy na maksymalnej jasności ekranu w całkowicie ciemnym pokoju – silny kontrast męczy mięśnie oka i prowadzi do bólów głowy.",
          "Pamiętaj o włączeniu trybu pełnoekranowego i blokady Screen Wake Lock podczas wykonywania testów diagnostycznych."
        ]
      }
    ],
    faqs: [
      { q: `Jaka jest główna zaleta tego rozwiązania?`, a: "Zapewnia najwyższą precyzję wizualną i chroni zdrowie oczu bez konieczności ponoszenia kosztów na drogi sprzęt." },
      { q: "Czy narzędzie działa na komputerach Mac i Windows?", a: "Tak, działa na wszystkich systemach operacyjnych bezpośrednio w nowoczesnych przeglądarkach internetowych." },
      { q: "Czy wyniki testów są miarodajne?", a: "Tak, narzędzie operuje na 32-bitowej przestrzeni sRGB w natywnej rozdzielczości Twojej matrycy." },
      { q: "Czy można łączyć to narzędzie z innymi kolorami ekranu?", a: "Oczywiście, za pomocą skrótów klawiszowych możesz błyskawicznie przełączać barwy testowe." },
      { q: "Czy korzystanie z poradnika i narzędzi wiąże się z opłatami?", a: "Wszystkie funkcje i przewodniki na TheWhiteScreen.org są w 100% bezpłatne i wolne od reklam." }
    ]
  };

  guidesTr[id] = {
    title: `${titleTr} - TheWhiteScreen.org`,
    metaDescription: `Kapsamlı teknik rehber: ${titleTr.toLowerCase()}. Pratik adımlar, ekran testleri ve ekran uzmanlarından profesyonel tavsiyeler.`,
    h1: titleTr,
    intro: `Modern bilgisayar, dizüstü bilgisayar ve telefon ekranları sadece ofis işlerinin çok ötesinde yeteneklere sahiptir. Bu teknik rehberde ${titleTr.toLowerCase()} konusundaki en iyi uygulamaları ve ipuçlarını inceliyoruz.`,
    sections: [
      {
        heading: "Temel İlkeler ve Optik Özellikler",
        paragraphs: [
          "Ekran panelinizin teknolojisini anlamak, gözlerinizi yormadan en yüksek görsel kaliteyi elde etmenin ilk adımıdır.",
          "Doğru parlaklık ayarı, oda aydınlatması dengesi ve standart sRGB renk uzayı yönetimi uzun süreli kullanımlarda tutarlı sonuçlar sağlar."
        ]
      },
      {
        heading: "Uygulama Adımları ve İdeal Yapılandırma",
        paragraphs: [
          "Ücretsiz tam ekran araçlarımız sayesinde harici bir yazılım yüklemeden ekranınızın kritik parametrelerini doğrudan tarayıcınızda test edebilirsiniz.",
          "Çalışma mesafenizi, ekran eğim açısını ve oda ışığını ergonomik kurallara uygun biçimde düzenleyin."
        ],
        subsections: [
          { subhead: "Ergonomi İpuçları", text: "Boyun kaslarındaki gerginliği önlemek için monitörün üst kenarını göz hizanıza getirin." },
          { subhead: "Sinyal Kalitesi", text: "Renk sapmalarını ve bulanıklığı önlemek için mutlaka HDMI veya DisplayPort gibi dijital kablolar kullanın." }
        ]
      },
      {
        heading: "Kaçınılması Gereken Yaygın Hatalar",
        paragraphs: [
          "Zifiri karanlık bir odada ekran parlaklığını %100'de tutmaktan kaçının; yüksek kontrast göz bebeklerini aşırı yorar.",
          "Uzun süreli testler sırasında ekranın uyku moduna geçmesini engellemek için Ekran Uyku Kilidi özelliğini aktif tutun."
        ]
      }
    ],
    faqs: [
      { q: `Bu yöntemin en büyük avantajı nedir?`, a: "Pahalı donanımlar satın almadan maksimum görsel hassasiyet ve göz konforu sağlar." },
      { q: "Windows, Mac, iPhone ve Android'de çalışır mı?", a: "Evet, tüm modern işletim sistemlerinde ve tarayıcılarda sorunsuz çalışır." },
      { q: "Test sonuçları güvenilir midir?", a: "Kesinlikle; tam ekran araçlarımız donanımınızın doğal 32-bit sRGB renk alanını doğrudan kullanır." },
      { q: "Diğer ekran renkleriyle birlikte kullanılabilir mi?", a: "Evet, klavye kısayollarını kullanarak test renkleri arasında tek tıkla geçiş yapabilirsiniz." },
      { q: "Herhangi bir ücret veya kayıt gerekiyor mu?", a: "Hayır, TheWhiteScreen.org üzerindeki tüm araçlar ve rehberler %100 ücretsizdir." }
    ]
  };
}

// Write src/content/guides_pl.ts
fs.writeFileSync(
  path.resolve('src/content/guides_pl.ts'),
  `import type { LocalizedGuideContent } from './guides';\n\nexport const GUIDES_PL: Record<string, LocalizedGuideContent> = ${JSON.stringify(guidesPl, null, 2)};\n`,
  'utf-8'
);
console.log('✓ src/content/guides_pl.ts written with all 20 guides');

// Write src/content/guides_tr.ts
fs.writeFileSync(
  path.resolve('src/content/guides_tr.ts'),
  `import type { LocalizedGuideContent } from './guides';\n\nexport const GUIDES_TR: Record<string, LocalizedGuideContent> = ${JSON.stringify(guidesTr, null, 2)};\n`,
  'utf-8'
);
console.log('✓ src/content/guides_tr.ts written with all 20 guides');

// Update src/content/guides.ts
const guidesPath = path.resolve('src/content/guides.ts');
let guidesContent = fs.readFileSync(guidesPath, 'utf-8');

if (!guidesContent.includes("import { GUIDES_PL }")) {
  guidesContent = `import { GUIDES_PL } from './guides_pl';\nimport { GUIDES_TR } from './guides_tr';\n` + guidesContent;

  guidesContent = guidesContent.replace(
    'nl: GUIDES_NL[id] || (item.content as any).nl,\n',
    `nl: GUIDES_NL[id] || (item.content as any).nl,\n      pl: GUIDES_PL[id] || (item.content as any).pl,\n      tr: GUIDES_TR[id] || (item.content as any).tr,\n`
  );

  fs.writeFileSync(guidesPath, guidesContent, 'utf-8');
  console.log('✓ src/content/guides.ts updated with GUIDES_PL and GUIDES_TR integration');
}
