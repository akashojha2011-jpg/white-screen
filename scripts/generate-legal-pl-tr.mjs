// scripts/generate-legal-pl-tr.mjs
import fs from 'fs';
import path from 'path';

const legalPlContent = `import type { LocalizedLegalContent } from './legal';

export const LEGAL_PL: Record<string, LocalizedLegalContent> = {
  about: {
    title: "O Nas - TheWhiteScreen.org",
    metaDescription: "Poznaj misję TheWhiteScreen.org: szybkie, czyste i bezpieczne dla prywatności narzędzia do testowania ekranów i oświetlenia.",
    h1: "O Nas - TheWhiteScreen.org",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "TheWhiteScreen.org powstało z jasną misją: dostarczyć ultra-szybkie, czyste i wolne od rozpraszaczy narzędzie pełnoekranowe dostępne natychmiast na każdym urządzeniu na świecie bez uciążliwych reklam, wyskakujących okienek czy konieczności rejestracji.",
      "Nasza aplikacja internetowa bazuje na architekturze zoptymalizowanej pod kątem szybkości, co gwarantuje natychmiastowe ładowanie, brak opóźnień i pełną ochronę prywatności w każdej nowoczesnej przeglądarce."
    ],
    sections: [
      {
        heading: "Nasz Cel i Misja",
        content: "Niezależnie od tego, czy jesteś informatykiem sprawdzającym nowe monitory pod kątem martwych pikseli, profesjonalistą potrzebującym równomiernego doświetlenia twarzy do spotkań na Zoomie, użytkownikiem usuwającym kurz z matrycy, czy artystą kalkującym szkice — czysty biały ekran pełnoekranowy jest niezastąpionym narzędziem. Zaprojektowaliśmy tę platformę, aby była lekka, niezawodna i na zawsze bezpłatna."
      },
      {
        heading: "Nasze Główne Zasady",
        bullets: [
          "100% Darmowy i Bez Rejestracji: Brak opłat, subskrypcji czy wymogu logowania.",
          "Architektura Zorientowana na Prywatność: Całe renderowanie odbywa się lokalnie w Twojej przeglądarce. Żadne dane osobowe nie są gromadzone.",
          "Dostępność Globalna: Kompletna lokalizacja językowa i błyskawiczna dystrybucja treści.",
          "Eksport w Wysokiej Rozdzielczości: Pobieranie jednolitych tapet do rozdzielczości 8K Ultra HD w formatach PNG, JPG i WEBP."
        ]
      }
    ]
  },
  contact: {
    title: "Kontakt - TheWhiteScreen.org",
    metaDescription: "Skontaktuj się z zespołem TheWhiteScreen.org w sprawie pytań technicznych, sugestii funkcji lub wsparcia.",
    h1: "Kontakt i Wsparcie",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "Dbamy o to, aby TheWhiteScreen.org było najbardziej niezawodnym i przyjaznym narzędziem ekranowym w sieci. Jeśli masz pytania, sugestie lub napotkasz problem, chętnie pomożemy.",
      "Odpowiadamy na wszystkie wiadomości w ciągu 24 do 48 godzin roboczych."
    ],
    sections: [
      {
        heading: "Bezpośredni Kanał Kontaktu",
        content: "Napisz do nas bezpośrednio pod adres support@thewhitescreen.org. Z przyjemnością odpowiemy na Twoje uwagi i propozycje ulepszeń."
      }
    ],
    contactInfo: {
      email: "support@thewhitescreen.org",
      responseTime: "24-48 godzin roboczych",
      nameLabel: "Twoje Imię i Nazwisko",
      emailLabel: "Adres E-mail",
      messageLabel: "Treść Wiadomości",
      submitBtn: "Wyślij Wiadomość"
    }
  },
  'privacy-policy': {
    title: "Polityka Prywatności - TheWhiteScreen.org",
    metaDescription: "Polityka prywatności TheWhiteScreen.org: zero śledzenia, brak gromadzenia danych osobowych i pełna prywatność lokalna.",
    h1: "Polityka Prywatności",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "W TheWhiteScreen.org (dostępnym pod adresem https://www.thewhitescreen.org) ochrona prywatności naszych użytkowników ma fundamentalne znaczenie.",
      "Kierujemy się zasadą minimalizacji danych: korzystanie z naszych narzędzi nie wymaga tworzenia konta, podawania hasła ani udostępniania jakichkolwiek danych osobowych."
    ],
    sections: [
      {
        heading: "1. Informacje, Których Nie Zbieramy",
        bullets: [
          "Nie gromadzimy nazwisk, adresów e-mail ani numerów telefonów podczas standardowego korzystania ze strony.",
          "Nie wymagamy zakładania kont ani rejestracji użytkowników.",
          "Całe renderowanie kolorów i generowanie tapet odbywa się w lokalnej pamięci Twojej przeglądarki."
        ]
      },
      {
        heading: "2. Pliki Cookie i Pamięć Lokalna",
        content: "Używamy standardowej pamięci localStorage przeglądarki wyłącznie do zapamiętywania Twoich lokalnych preferencji (np. trybu ciemnego lub ustawień suwaków narzędzi). Dane te nie opuszczają Twojego urządzenia."
      },
      {
        heading: "3. Bezpieczeństwo i Infrastruktura",
        content: "Korzystamy z zaufanych sieci CDN w celu zapewnienia ciągłości działania serwisu, ochrony przed atakami DDoS i szybkiego serwowania zasobów na całym świecie."
      }
    ]
  },
  'terms-and-conditions': {
    title: "Regulamin Serwisu - TheWhiteScreen.org",
    metaDescription: "Zasady korzystania z TheWhiteScreen.org: dozwolony użytek, prawa własności i wyłączenia odpowiedzialności.",
    h1: "Regulamin Serwisu",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "Witamy na TheWhiteScreen.org. Korzystając z naszego serwisu, akceptujesz poniższe warunki i zasady użytkowania.",
      "Jeśli nie zgadzasz się z którymkolwiek z postanowień, prosimy o zaprzestanie korzystania ze strony."
    ],
    sections: [
      {
        heading: "1. Dozwolony Użytek",
        bullets: [
          "Możesz bezpłatnie korzystać z narzędzi w celach osobistych, edukacyjnych, twórczych i zawodowych.",
          "Pobieranie wygenerowanych tapet jest dozwolone do prywatnego użytku na Twoich urządzeniach.",
          "Zabronione jest podejmowanie prób zakłócenia działania infrastruktury serwisu za pomocą ataków automatycznych lub złośliwego oprogramowania."
        ]
      },
      {
        heading: "2. Wyłączenie Gwarancji",
        content: "Narzędzia są udostępniane w stanie 'takim, w jakim są' bez żadnych dorozumianych gwarancji dotyczących fizycznej naprawy uszkodzeń sprzętowych matrycy."
      },
      {
        heading: "3. Ograniczenie Odpowiedzialności",
        content: "TheWhiteScreen.org nie ponosi odpowiedzialności za jakiekolwiek szkody wynikające z korzystania lub braku możliwości korzystania z serwisu."
      }
    ]
  },
  'cookie-policy': {
    title: "Polityka Cookies - TheWhiteScreen.org",
    metaDescription: "Dowiedz się, jak TheWhiteScreen.org wykorzystuje pamięć lokalną przeglądarki: czysto funkcjonalnie i bez śledzenia reklamowego.",
    h1: "Polityka Cookies",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "Niniejszy dokument wyjaśnia zasady stosowania pamięci podręcznej i plików cookie w serwisie TheWhiteScreen.org.",
      "Stosujemy wyłącznie niezbędne, nienaruszające prywatności mechanizmy bez inwazyjnych ciasteczek reklamowych."
    ],
    sections: [
      {
        heading: "1. Czym Są Pliki Cookie i LocalStorage?",
        content: "To niewielkie pliki tekstowe zapisywane w pamięci przeglądarki, umożliwiające zachowanie ustawień interfejsu pomiędzy wizytami."
      },
      {
        heading: "2. Do Czego Ich Używamy?",
        bullets: [
          "Preferencje Interfejsu: Zapamiętanie wybranego motywu jasnego lub ciemnego.",
          "Ustawienia Narzędzi: Przechowywanie ostatnich wartości suwaków jasności i temperatury barwowej.",
          "Ochrona Przed Nadużyciami: Bezpieczne tokeny sieci CDN chroniące stronę przed atakami."
        ]
      },
      {
        heading: "3. Zarządzanie Danymi",
        content: "W każdej chwili możesz wyczyścić zapisane dane w ustawieniach prywatności swojej przeglądarki internetowej."
      }
    ]
  },
  license: {
    title: "Licencja i Prawa Autorskie - TheWhiteScreen.org",
    metaDescription: "Informacje o licencji i prawach autorskich TheWhiteScreen.org: darmowe tapety w domenie publicznej (CC0).",
    h1: "Licencja i Prawa Autorskie",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "TheWhiteScreen.org dba o przejrzyste i uczciwe zasady licencjonowania udostępnianych treści.",
      "Naszym celem jest wspieranie społeczności poprzez udostępnianie prostych, bezpłatnych narzędzi bez ukrytych opłat licencyjnych."
    ],
    sections: [
      {
        heading: "1. Pobierane Tapety",
        content: "Wszystkie jednolite tapety kolorowe wygenerowane za pośrednictwem naszej strony są udostępniane na licencji Creative Commons Zero (CC0 1.0 Universal). Oznacza to, że możesz z nich swobodnie korzystać zarówno w celach prywatnych, jak i komercyjnych bez konieczności podawania źródła."
      },
      {
        heading: "2. Treści Redakcyjne i Kod Strony",
        content: "Poradniki techniczne, teksty merytoryczne, grafiki oraz układ serwisu TheWhiteScreen.org są chronione prawem autorskim i nie mogą być kopiowane w celach komercyjnych bez uprzedniej zgody."
      }
    ]
  }
};
`;

const legalTrContent = `import type { LocalizedLegalContent } from './legal';

export const LEGAL_TR: Record<string, LocalizedLegalContent> = {
  about: {
    title: "Hakkımızda - TheWhiteScreen.org",
    metaDescription: "TheWhiteScreen.org hakkında bilgi edinin: ekran testleri ve aydınlatma için hızlı, temiz ve gizlilik odaklı araçlar.",
    h1: "Hakkımızda - TheWhiteScreen.org",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "TheWhiteScreen.org net bir misyonla kuruldu: can sıkıcı reklamlar, açılır pencereler veya zorunlu kayıt olmadan dünya çapındaki her cihazda anında erişilebilen ultra hızlı, temiz ve dikkat dağıtmayan bir tam ekran aracı sunmak.",
      "Web uygulamamız, tüm modern tarayıcılarda anında açılma, sıfır yükleme gecikmesi ve maksimum kullanıcı gizliliği sağlamak için modern statik mimariyle geliştirilmiştir."
    ],
    sections: [
      {
        heading: "Amacımız ve Misyonumuz",
        content: "İster dizüstü bilgisayar ekranını ölü piksellere karşı denetleyen bir teknik uzman olun, ister Zoom görüşmelerinde yüz aydınlatmasına ihtiyaç duyan bir profesyonel, monitördeki tozları temizleyen bir öğrenci veya çizim yapan bir sanatçı; saf beyaz bir tam ekran vazgeçilmez bir araçtır. Bu aracı evrensel, hafif ve sonsuza kadar ücretsiz olacak şekilde geliştirdik."
      },
      {
        heading: "Temel İlkelerimiz",
        bullets: [
          "%100 Ücretsiz ve Kayıtsız: Ödeme duvarı, abonelik veya hesap açma zorunluluğu yoktur.",
          "Gizlilik Odaklı Mimari: Tüm ekran işleme işlemleri yerel olarak tarayıcınızda gerçekleşir. Hiçbir kişisel veri toplanmaz veya iletilmez.",
          "Küresel Erişilebilirlik: Uluslararası dillerde tam yerelleştirme ve hızlı sunucu altyapısı.",
          "Yüksek Çözünürlüklü İndirme: PNG, JPG veya WEBP formatlarında 8K Ultra HD çözünürlüğe kadar düz renk duvar kağıdı indirme imkanı."
        ]
      }
    ]
  },
  contact: {
    title: "İletişim - TheWhiteScreen.org",
    metaDescription: "Teknik sorularınız, özellik önerileriniz veya destek için TheWhiteScreen.org ekibiyle iletişime geçin.",
    h1: "İletişim ve Destek",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "TheWhiteScreen.org'u web üzerindeki en kaliteli ekran yardımcı aracı olarak sürdürmeye kararlıyız. Bir hata ile karşılaşırsanız veya önerileriniz varsa ekibimiz yardıma hazırdır.",
      "Tüm mesajlara 24 ila 48 iş saati içinde yanıt veriyoruz."
    ],
    sections: [
      {
        heading: "Doğrudan İletişim Kanalı",
        content: "Teknik geri bildirimler, hata bildirimleri veya genel sorularınız için doğrudan support@thewhitescreen.org adresinden bize ulaşabilirsiniz."
      }
    ],
    contactInfo: {
      email: "support@thewhitescreen.org",
      responseTime: "24-48 iş saati",
      nameLabel: "Adınız ve Soyadınız",
      emailLabel: "E-posta Adresiniz",
      messageLabel: "Mesajınız veya Öneriniz",
      submitBtn: "Mesajı Gönder"
    }
  },
  'privacy-policy': {
    title: "Gizlilik Politikası - TheWhiteScreen.org",
    metaDescription: "TheWhiteScreen.org gizlilik politikası: sıfır izleme, kişisel veri toplamama ve tam yerel tarayıcı gizliliği.",
    h1: "Gizlilik Politikası",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "TheWhiteScreen.org (https://www.thewhitescreen.org) olarak dijital gizliliğinizi en önemli önceliğimiz olarak görüyoruz.",
      "Veri minimizasyonu ilkesine inanıyoruz: ekran ve renk araçlarımızın hiçbir özelliği için hesap oluşturma, şifre belirleme veya kişisel veri sağlama zorunluluğu yoktur."
    ],
    sections: [
      {
        heading: "1. Toplamadığımız Bilgiler",
        bullets: [
          "Siteyi gezinirken ad, e-posta veya telefon gibi hiçbir kişisel bilgi toplanmaz.",
          "Kullanıcı hesabı oluşturma veya kimlik bilgisi kaydetme sistemi bulunmamaktadır.",
          "Tüm renk görüntüleme ve duvar kağıdı oluşturma işlemleri yerel olarak tarayıcınızda çalışır."
        ]
      },
      {
        heading: "2. Çerezler ve Yerel Depolama (localStorage)",
        content: "Tarayıcınızın yerel depolama alanını (localStorage) yalnızca karanlık mod ve araç kaydırıcıları gibi arayüz tercihlerinizi cihazınızda hatırlamak amacıyla kullanırız. Bu veriler cihazınızdan dışarı aktarılmaz."
      },
      {
        heading: "3. Altyapı ve Güvenlik",
        content: "Sitenin kesintisiz çalışması ve siber saldırılara karşı korunması amacıyla güvenilir küresel dağıtım ağları (CDN) kullanılmaktadır."
      }
    ]
  },
  'terms-and-conditions': {
    title: "Kullanım Koşulları - TheWhiteScreen.org",
    metaDescription: "TheWhiteScreen.org kullanım koşulları: izin verilen kullanım, telif hakları ve sorumluluk reddi beyanları.",
    h1: "Kullanım Koşulları",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "TheWhiteScreen.org'a hoş geldiniz. Web sitemizi ziyaret ederek ve kullanarak aşağıdaki koşullara uymayı kabul etmiş sayılırsınız.",
      "Bu koşulların herhangi bir kısmını kabul etmiyorsanız, lütfen siteyi kullanmayı bırakınız."
    ],
    sections: [
      {
        heading: "1. İzin Verilen Kullanım",
        bullets: [
          "TheWhiteScreen.org'u kişisel, eğitsel, sanatsal veya profesyonel ekran testi amaçlarıyla ücretsiz olarak kullanabilirsiniz.",
          "Oluşturulan düz renk duvar kağıtlarını cihazlarınız için serbestçe indirebilirsiniz.",
          "Site altyapısını otomatik botlar veya kötü niyetli saldırılarla engellemeye veya aksatmaya çalışmak yasaktır."
        ]
      },
      {
        heading: "2. Garanti Reddi",
        content: "Sitemizdeki araçlar 'olduğu gibi' sunulmaktadır. Donanımsal ekran veya piksel arızalarını kalıcı olarak onaracağına dair hiçbir garanti verilmemektedir."
      },
      {
        heading: "3. Sorumluluk Sınırı",
        content: "TheWhiteScreen.org veya yöneticileri, bu sitedeki araçların veya içeriklerin kullanımından doğabilecek hiçbir zarardan sorumlu tutulamaz."
      }
    ]
  },
  'cookie-policy': {
    title: "Çerez Politikası - TheWhiteScreen.org",
    metaDescription: "TheWhiteScreen.org yerel depolama ve çerez politikası: minimum, işlevsel ve reklam takibi içermez.",
    h1: "Çerez Politikası",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "Bu Çerez Politikası, TheWhiteScreen.org'un tarayıcı çerezlerini ve yerel depolama teknolojilerini nasıl kullandığını açıklamaktadır.",
      "İstilacı reklam çerezleri içermeyen, şeffaf ve gizliliğe saygılı bir deneyim sunmayı taahhüt ediyoruz."
    ],
    sections: [
      {
        heading: "1. Çerezler ve Yerel Depolama Nedir?",
        content: "Çerezler ve localStorage, sitelerin ziyaretleriniz arasında arayüz tercihlerinizi hatırlamasını sağlayan küçük yerel veri dosyalarıdır."
      },
      {
        heading: "2. Bunları Nasıl Kullanıyoruz?",
        bullets: [
          "Tema Tercihleri: Açık veya koyu arayüz seçiminizin hatırlanması.",
          "Araç Ayarları: Parlaklık ve renk sıcaklığı sürgülerinin mevcut oturumunuzda korunması.",
          "Güvenlik: Kötü niyetli istekleri engelleyen CDN güvenlik doğrulamaları."
        ]
      },
      {
        heading: "3. Tercihlerinizi Yönetme",
        content: "İstediğiniz zaman tarayıcınızın gizlilik ayarlarından kaydedilen verileri ve çerezleri silebilirsiniz."
      }
    ]
  },
  license: {
    title: "Lisans ve Telif Hakları - TheWhiteScreen.org",
    metaDescription: "TheWhiteScreen.org lisans bilgileri: kamu malı (CC0) düz renk duvar kağıtları ve içerik hakları.",
    h1: "Lisans ve Telif Hakları",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "TheWhiteScreen.org, sunduğu tüm dijital içeriklerde şeffaf ve açık lisanslama standartlarını benimser.",
      "Hedefimiz, tüm kullanıcılarımıza gizli lisans bedelleri olmadan güvenilir ve ücretsiz araçlar sunmaktır."
    ],
    sections: [
      {
        heading: "1. İndirilen Duvar Kağıtları",
        content: "Sitemiz aracılığıyla üretilen tüm düz renk duvar kağıtları Creative Commons Zero (CC0 1.0 Universal) Kamu Malı lisansı altındadır. Herhangi bir atıfta bulunma zorunluluğu olmadan kişisel ve ticari amaçlarla serbestçe kullanılabilir."
      },
      {
        heading: "2. Yazılı Rehberler ve Site Tasarımı",
        content: "TheWhiteScreen.org'daki teknik makaleler, site arayüzü ve marka unsurları telif hakları kapsamında korunmakta olup izinsiz çoğaltılamaz."
      }
    ]
  }
};
`;

// Write src/content/legal_pl.ts and src/content/legal_tr.ts
fs.writeFileSync(path.resolve('src/content/legal_pl.ts'), legalPlContent, 'utf-8');
console.log('✓ src/content/legal_pl.ts generated');

fs.writeFileSync(path.resolve('src/content/legal_tr.ts'), legalTrContent, 'utf-8');
console.log('✓ src/content/legal_tr.ts generated');

// Update src/content/legal.ts to import LEGAL_PL and LEGAL_TR
const legalMainPath = path.resolve('src/content/legal.ts');
let legalMain = fs.readFileSync(legalMainPath, 'utf-8');

if (!legalMain.includes('legal_pl')) {
  legalMain = `import { LEGAL_PL } from './legal_pl';\nimport { LEGAL_TR } from './legal_tr';\n` + legalMain;
  
  legalMain = legalMain.replace(
    'nl: LEGAL_NL[id] || (item.content as any).nl,\n',
    `nl: LEGAL_NL[id] || (item.content as any).nl,\n      pl: LEGAL_PL[id] || (item.content as any).pl,\n      tr: LEGAL_TR[id] || (item.content as any).tr,\n`
  );
  
  fs.writeFileSync(legalMainPath, legalMain, 'utf-8');
  console.log('✓ src/content/legal.ts updated with LEGAL_PL and LEGAL_TR');
}
