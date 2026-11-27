import type { LanguageCode } from '../i18n/config';

export interface WallpaperFAQ {
  q: string;
  a: string;
}

export interface LocalizedWallpaperContent {
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  featuresTitle: string;
  features: Array<{ title: string; desc: string }>;
  faqs: WallpaperFAQ[];
}

export interface WallpaperDefinition {
  id: string;
  colorHex: string;
  contrastText: '#000000' | '#ffffff';
  defaultResolution: 'fhd' | 'qhd' | 'uhd4k' | 'retina5k' | 'uhd8k' | 'mobile' | 'square';
  names: Record<LanguageCode, string>;
  content: Record<LanguageCode, LocalizedWallpaperContent>;
}

export const WALLPAPER_META_PL_TR: Record<string, { plName: string; trName: string }> = {
  "white-wallpaper": {
    "plName": "Biała Tapeta HD",
    "trName": "Beyaz Duvar Kağıdı HD"
  },
  "white-wallpaper-4k": {
    "plName": "Biała Tapeta 4K Ultra HD",
    "trName": "Beyaz Duvar Kağıdı 4K Ultra HD"
  },
  "white-wallpaper-8k": {
    "plName": "Biała Tapeta 8K Ultra HD",
    "trName": "Beyaz Duvar Kağıdı 8K Ultra HD"
  },
  "white-background-for-iphone": {
    "plName": "Białe Tło na iPhone",
    "trName": "iPhone İçin Beyaz Arka Plan"
  },
  "white-wallpaper-for-desktop": {
    "plName": "Biała Tapeta na Pulpit PC",
    "trName": "Masaüstü PC İçin Beyaz Duvar Kağıdı"
  },
  "black-wallpaper": {
    "plName": "Czarna Tapeta HD",
    "trName": "Siyah Duvar Kağıdı HD"
  },
  "black-wallpaper-4k": {
    "plName": "Czarna Tapeta 4K Ultra HD",
    "trName": "Siyah Duvar Kağıdı 4K Ultra HD"
  },
  "blue-wallpaper": {
    "plName": "Niebieska Tapeta HD",
    "trName": "Mavi Duvar Kağıdı HD"
  },
  "green-wallpaper": {
    "plName": "Zielona Tapeta HD",
    "trName": "Yeşil Duvar Kağıdı HD"
  },
  "red-wallpaper": {
    "plName": "Czerwona Tapeta HD",
    "trName": "Kırmızı Duvar Kağıdı HD"
  }
};

export const WALLPAPER_META_JA_KO: Record<string, { jaName: string; koName: string }> = {
  "white-wallpaper": {
    "jaName": "白の壁紙 HD",
    "koName": "하얀색 배경화면 HD"
  },
  "white-wallpaper-4k": {
    "jaName": "白の壁紙 4K Ultra HD",
    "koName": "하얀색 배경화면 4K Ultra HD"
  },
  "white-wallpaper-8k": {
    "jaName": "白の壁紙 8K Ultra HD",
    "koName": "하얀색 배경화면 8K Ultra HD"
  },
  "white-background-for-iphone": {
    "jaName": "iPhone用 白い背景",
    "koName": "아이폰용 하얀 배경화면"
  },
  "white-wallpaper-for-desktop": {
    "jaName": "PCデスクトップ用 白の壁紙",
    "koName": "데스크톱 PC용 하얀 배경화면"
  },
  "black-wallpaper": {
    "jaName": "黒の壁紙 HD",
    "koName": "검은색 배경화면 HD"
  },
  "black-wallpaper-4k": {
    "jaName": "黒の壁紙 4K Ultra HD",
    "koName": "검은색 배경화면 4K Ultra HD"
  },
  "blue-wallpaper": {
    "jaName": "青の壁紙 4K",
    "koName": "파란색 배경화면 4K"
  },
  "green-wallpaper": {
    "jaName": "緑の壁紙 4K",
    "koName": "초록색 배경화면 4K"
  },
  "red-wallpaper": {
    "jaName": "赤の壁紙 4K",
    "koName": "빨간색 배경화면 4K"
  }
};

function buildWallpaper(
  id: string,
  colorHex: string,
  contrastText: '#000000' | '#ffffff',
  defaultResolution: 'fhd' | 'qhd' | 'uhd4k' | 'retina5k' | 'uhd8k' | 'mobile' | 'square',
  names: Record<LanguageCode, string>,
  resLabel: string
): WallpaperDefinition {
  const enName = names.en;
  const esName = names.es;
  const frName = names.fr;
  const deName = names.de;
  const ptName = names.pt;
  const idName = names.id;
  const itName = names.it || names.en;
  const nlName = names.nl || names.en;
  const metaPlTr = WALLPAPER_META_PL_TR[id] || { plName: names.en, trName: names.en };
  const plName = names.pl || metaPlTr.plName;
  const trName = names.tr || metaPlTr.trName;
  const metaJaKo = WALLPAPER_META_JA_KO[id] || { jaName: names.en, koName: names.en };
  const jaName = names.ja || metaJaKo.jaName;
  const koName = names.ko || metaJaKo.koName;

  return {
    id,
    colorHex,
    contrastText,
    defaultResolution,
    names: {
      ...names,
      pl: plName,
      tr: trName,
      ja: jaName,
      ko: koName,
    },
    content: {
      en: {
        title: `${enName} – Free Lossless High-Resolution Background Download`,
        metaDescription: `Download pure ${enName.toLowerCase()} in PNG, JPG, and WEBP. Ultra HD lossless background images for desktop, iPhone, iPad, and monitors.`,
        h1: `${enName} (Lossless Wallpaper Download)`,
        intro: `Generate and download pristine ${enName.toLowerCase()} background images directly from your browser. Rendered locally on an HTML5 canvas in 100% lossless sRGB quality without compression artifacts or watermarks.`,
        featuresTitle: `Specifications & Export Features`,
        features: [
          { title: "Multiple Formats Available", desc: "Export in lossless PNG (uncompressed), modern WEBP (high efficiency), or universal standard JPEG." },
          { title: "Pixel-Perfect Sharpness", desc: `Rendered specifically for ${resLabel} displays to eliminate blurry upscaling or pixel distortion.` },
          { title: "Zero Ads or Paywalls", desc: "100% free downloads without accounts, cookies, or software installation." },
          { title: "All Device Ratios Included", desc: "Optimized for 16:9 desktop monitors, 9:16 mobile phone lockscreens, and 1:1 square displays." },
        ],
        faqs: [
          { q: `How do I download this ${enName.toLowerCase()}?`, a: "Select your desired image format and resolution in the download box, then click 'Download Wallpaper Image'." },
          { q: "Is the image truly lossless?", a: "Yes, our PNG exports are rendered directly from uncompressed browser canvas memory." },
          { q: "Can I use this image for commercial projects?", a: "Yes, all solid backgrounds generated here are completely royalty-free for personal and commercial usage." },
          { q: "Which format is best for desktop wallpaper?", a: "PNG offers the highest uncompressed fidelity, while WEBP provides the smallest file size." },
          { q: "Does it work on iPhone and Android?", a: "Yes, select 'Mobile Portrait (1080 × 1920)' for a perfect vertical lock screen fit." },
        ],
      },
      es: {
        title: `${esName} – Descarga Gratuita de Fondos en Alta Definición`,
        metaDescription: `Descarga ${esName.toLowerCase()} en formato PNG, JPG y WEBP. Imágenes de fondo limpias y sin compresión para PC, iPhone y monitores.`,
        h1: `${esName} (Descarga de Fondo de Pantalla)`,
        intro: `Genera y descarga imágenes de ${esName.toLowerCase()} limpias directamente en tu navegador. Creadas en canvas HTML5 en calidad sRGB sin marcas de agua ni pérdida de detalle.`,
        featuresTitle: `Especificaciones de Descarga`,
        features: [
          { title: "Formatos PNG, JPG y WEBP", desc: "Elige entre PNG de máxima calidad sin compresión, WEBP eficiente o JPEG universal." },
          { title: `Nitidez Absoluta en ${resLabel}`, desc: "Renderizado exacto para pantallas modernas sin escalado borroso." },
          { title: "Completamente Gratuito", desc: "Descargas instantáneas sin registros, límites ni publicidad engañosa." },
          { title: "Formatos para Móvil y Escritorio", desc: "Proporciones optimizadas para pantallas panorámicas 16:9 y teléfonos 9:16." },
        ],
        faqs: [
          { q: `¿Cómo descargo este ${esName.toLowerCase()}?`, a: "Elige el formato y la resolución en el panel inferior y haz clic en 'Descargar Fondo de Pantalla'." },
          { q: "¿La imagen tiene marcas de agua?", a: "No, las imágenes son 100% limpias y sin ninguna marca comercial." },
          { q: "¿Puedo usarlo en proyectos comerciales?", a: "Sí, todos los fondos generados son de libre uso personal y comercial." },
          { q: "¿Qué formato es mejor?", a: "PNG ofrece la máxima calidad visual sin compresión." },
          { q: "¿Sirve para iPhone y Android?", a: "Sí, selecciona la resolución Móvil Vertical (1080 × 1920)." },
        ],
      },
      fr: {
        title: `${frName} – Téléchargement Gratuit de Fond d'Écran Haute Résolution`,
        metaDescription: `Téléchargez ${frName.toLowerCase()} en PNG, JPG et WEBP. Fonds d'écran purs sans compression pour PC, iPhone, iPad et écrans 4K.`,
        h1: `${frName} (Téléchargement de Fond d'Écran)`,
        intro: `Générez et téléchargez des fonds d'écran ${frName.toLowerCase()} purs directement depuis votre navigateur. Créés via canvas HTML5 en sRGB parfait sans aucune compression dégradante.`,
        featuresTitle: `Caractéristiques d'Exportation`,
        features: [
          { title: "Formats PNG, WEBP et JPG", desc: "Choisissez PNG pour une fidélité sans perte, WEBP pour la légèreté ou JPG pour la compatibilité." },
          { title: `Netteté Parfaite sur ${resLabel}`, desc: "Calculé au pixel près pour éviter tout flou de mise à l'échelle." },
          { title: "Gratuit et Sans Inscription", desc: "Téléchargements directs et illimités sans création de compte." },
          { title: "Ratios PC et Mobiles", desc: "Tailles adaptées aux écrans 16:9 ainsi qu'aux smartphones en mode portrait 9:16." },
        ],
        faqs: [
          { q: `Comment télécharger ce ${frName.toLowerCase()} ?`, a: "Choisissez le format et la résolution souhaitée puis cliquez sur 'Télécharger le Fond d'Écran'." },
          { q: "L'image est-elle sans perte ?", a: "Oui, les exports PNG proviennent directement de la mémoire graphique sans compression." },
          { q: "Puis-je l'utiliser pour un projet pro ?", a: "Oui, toutes les images créées sont totalement libres de droits." },
          { q: "Quel est le meilleur format ?", a: "Le format PNG assure la plus grande pureté visuelle." },
          { q: "Convient-il aux smartphones ?", a: "Oui, l'option Mobile Portrait (1080 × 1920) est spécialement prévue pour les téléphones." },
        ],
      },
      de: {
        title: `${deName} – Kostenloser Download in Höchster Auflösung`,
        metaDescription: `Laden Sie ${deName.toLowerCase()} als PNG, JPG und WEBP herunter. Verlustfreie Hintergründe für Desktop, iPhone und 4K-Monitore.`,
        h1: `${deName} (Wallpaper-Download)`,
        intro: `Erstellen und laden Sie makellose ${deName.toLowerCase()}e Hintergründe direkt im Browser herunter. Gerendert in unkomprimiertem sRGB ohne störende Wasserzeichen.`,
        featuresTitle: `Export-Funktionen & Spezifikationen`,
        features: [
          { title: "PNG, WEBP und JPG zur Wahl", desc: "Verlustfreies PNG für höchste Reinheit oder platzsparendes WEBP." },
          { title: `Präzise Schärfe für ${resLabel}`, desc: "Exakt auf moderne Monitore abgestimmt ohne unscharfe Interpolation." },
          { title: "100% Kostenlos & Ohne Anmeldung", desc: "Direkter Download ohne Wartezeiten oder Werbebanner." },
          { title: "Passende Formate für PC & Handy", desc: "Optimiert für Breitbildmonitore (16:9) und Smartphones (9:16)." },
        ],
        faqs: [
          { q: `Wie lade ich diesen ${deName.toLowerCase()}en Hintergrund herunter?`, a: "Wählen Sie Format und Auflösung im Kasten aus und klicken Sie auf 'Hintergrundbild Herunterladen'." },
          { q: "Ist die Bilddatei verlustfrei?", a: "Ja, PNG-Dateien werden direkt ohne Bildkompression aus dem Speicher exportiert." },
          { q: "Darf das Bild kommerziell genutzt werden?", a: "Ja, alle erzeugten Farbflächen sind vollständig lizenzfrei nutzbar." },
          { q: "Welches Format ist optimal?", a: "PNG liefert die beste Bildqualität für Desktop-Hintergründe." },
          { q: "Passt das Wallpaper auf Handys?", a: "Wählen Sie dafür einfach 'Smartphone Hochformat (1080 × 1920)'." },
        ],
      },
      pt: {
        title: `${ptName} – Download Gratuito em Altíssima Resolução`,
        metaDescription: `Baixe ${ptName.toLowerCase()} em PNG, JPG e WEBP. Papéis de parede limpos e sem compressão para computadores, iPhone e celulares.`,
        h1: `${ptName} (Download de Papel de Parede)`,
        intro: `Gere e baixe papéis de parede ${ptName.toLowerCase()} direto no seu navegador. Renderizados em canvas HTML5 com fidelidade sRGB sem marcas d'água ou compressão visual.`,
        featuresTitle: `Especificações e Formatos`,
        features: [
          { title: "Formatos PNG, WEBP e JPG", desc: "PNG para máxima nitidez sem perdas ou WEBP para arquivos leves." },
          { title: `Perfeição em ${resLabel}`, desc: "Calculado na resolução exata para evitar imagens embaçadas." },
          { title: "Totalmente Grátis", desc: "Downloads imediatos sem necessidade de cadastro ou pagamento." },
          { title: "Dimensões para PC e Celulares", desc: "Compatível com monitores 16:9 e telas verticais de smartphones." },
        ],
        faqs: [
          { q: `Como baixar este ${ptName.toLowerCase()}?`, a: "Selecione o formato e a resolução desejada e clique em 'Baixar Papel de Parede'." },
          { q: "A imagem tem boa qualidade?", a: "Sim, os arquivos PNG são criados diretamente na memória do navegador sem perdas." },
          { q: "Posso usar para fins comerciais?", a: "Sim, todos os fundos gerados aqui são livres de direitos autorais." },
          { q: "Qual o formato recomendado?", a: "O formato PNG oferece a melhor nitidez para telas de computador." },
          { q: "Serve no iPhone e Android?", a: "Sim, escolha a opção Celular Vertical (1080 × 1920)." },
        ],
      },
      id: {
        title: `${idName} – Unduh Wallpaper Resolusi Tinggi Tanpa Kompresi`,
        metaDescription: `Unduh ${idName.toLowerCase()} dalam format PNG, JPG, dan WEBP. Gambar latar belakang bersih tanpa kompresi untuk PC, iPhone, dan Android.`,
        h1: `${idName} (Unduh Wallpaper Polos)`,
        intro: `Buat dan unduh gambar latar belakang ${idName.toLowerCase()} langsung dari peramban Anda. Dibuat dengan kanvas HTML5 berkualitas tinggi dalam ruang sRGB murni tanpa watermark.`,
        featuresTitle: `Spesifikasi Ekspor Gambar`,
        features: [
          { title: "Format PNG, WEBP, dan JPG", desc: "Pilih PNG untuk kualitas lossless tanpa kompresi atau WEBP untuk ukuran file hemat." },
          { title: `Ketajaman Penuh untuk ${resLabel}`, desc: "Dibuat presisi sesuai ukuran layar agar gambar tidak buram atau pecah." },
          { title: "100% Gratis Tanpa Batasan", desc: "Unduh kapan saja tanpa perlu mendaftar akun atau berlangganan." },
          { title: "Ukuran untuk PC dan Smartphone", desc: "Tersedia rasio 16:9 untuk monitor serta format vertikal untuk layar ponsel." },
        ],
        faqs: [
          { q: `Bagaimana cara mengunduh ${idName.toLowerCase()} ini?`, a: "Pilih format gambar dan resolusi yang diinginkan, lalu klik tombol 'Unduh Gambar Wallpaper'." },
          { q: "Apakah gambarnya benar-benar jernih?", a: "Sangat jernih, file PNG diekspor langsung dari kanvas memori tanpa kompresi yang merusak warna." },
          { q: "Bolehkah dipakai untuk proyek komersial?", a: "Boleh, semua wallpaper warna polos ini bebas royalti untuk kebutuhan pribadi maupun komersial." },
          { q: "Format apa yang paling disarankan?", a: "Format PNG sangat dianjurkan untuk kualitas visual terbaik di layar PC." },
          { q: "Bisa untuk wallpaper HP iPhone dan Android?", a: "Bisa, pilih resolusi 'Ponsel Potret (1080 × 1920)' agar pas di layar HP Anda." },
        ],
      },
      it: {
        title: `${itName} – Download Gratuito Sfondo ad Alta Risoluzione`,
        metaDescription: `Scarica ${itName.toLowerCase()} in formato PNG, JPG e WEBP. Immagini di sfondo lossless ad altissima definizione per PC, iPhone e monitor.`,
        h1: `${itName} (Download Sfondo Senza Perdita)`,
        intro: `Genera e scarica sfondi puliti ${itName.toLowerCase()} direttamente dal browser. Renderizzati localmente su canvas HTML5 in qualità sRGB lossless senza watermark.`,
        featuresTitle: "Specifiche e Funzionalità di Esportazione",
        features: [
          { title: "Formati Multipli Disponibili", desc: "Esporta in PNG lossless (non compresso), WEBP moderno o JPEG universale." },
          { title: `Nitidezza Perfetta per Display ${resLabel}`, desc: "Calcolato su misura per evitare scalature sfocate o distorsioni visive." },
          { title: "Zero Pubblicità o Limiti", desc: "Download gratuiti al 100% senza account, registrazioni o software." },
          { title: "Tutte le Risoluzioni Supportate", desc: "Ottimizzato per monitor 16:9, schermi smartphone 9:16 e formati quadrati." },
        ],
        faqs: [
          { q: `Come posso scaricare questo ${itName.toLowerCase()}?`, a: "Scegli il formato e la risoluzione desiderati nel box di download e clicca su 'Scarica Immagine di Sfondo'." },
          { q: "L'immagine è davvero lossless?", a: "Sì, i file PNG sono generati direttamente dalla memoria canvas del browser senza alcuna compressione distruttiva." },
          { q: "Posso usarlo per scopi commerciali?", a: "Sì, tutti gli sfondi a tinta unita sono completamente gratuiti per uso personale e commerciale." },
          { q: "Quale formato è consigliato per il desktop?", a: "Il formato PNG assicura la massima fedeltà visiva senza compressione." },
          { q: "Funziona su iPhone e Android?", a: "Certamente, seleziona 'Mobile Smartphone (1080 × 1920)' per una visualizzazione perfetta." },
        ],
      },
      nl: {
        title: `${nlName} – Gratis Lossless Hoge Resolutie Achtergrond Download`,
        metaDescription: `Download zuivere ${nlName.toLowerCase()} in PNG, JPG en WEBP. Ultra HD lossless achtergronden voor pc, iPhone, iPad en monitoren.`,
        h1: `${nlName} (Lossless Achtergrond Download)`,
        intro: `Genereer en download haarscherpe ${nlName.toLowerCase()} achtergrondafbeeldingen direct in je browser. Gemaakt op een HTML5 canvas in 100% verliesvrije sRGB-kwaliteit.`,
        featuresTitle: "Specificaties & Exportfuncties",
        features: [
          { title: "Meerdere Bestandsformaten", desc: "Kies uit lossless PNG, efficiënte WEBP of standaard JPEG." },
          { title: `Pixel-Perfecte Scherpte voor ${resLabel}`, desc: "Nauwkeurig afgestemd op moderne schermen om onscherpe opkalering te voorkomen." },
          { title: "Zonder Advertenties of Betaalmuren", desc: "100% gratis downloads zonder registratie of software-installatie." },
          { title: "Alle Beeldverhoudingen Beschikbaar", desc: "Geoptimaliseerd voor 16:9 desktops, 9:16 smartphone-vergrendelschermen en vierkante displays." },
        ],
        faqs: [
          { q: `Hoe download ik deze ${nlName.toLowerCase()}?`, a: "Kies het gewenste formaat en de resolutie in het downloadpaneel en klik op 'Download Achtergrondafbeelding'." },
          { q: "Is de afbeelding daadwerkelijk verliesvrij?", a: "Ja, onze PNG-exports worden direct vanuit het browser-canvasgeheugen opgeslagen zonder kwaliteitsverlies." },
          { q: "Mag ik deze achtergrond commercieel gebruiken?", a: "Ja, alle gegenereerde effen achtergronden zijn royaltyvrij voor persoonlijk en commercieel gebruik." },
          { q: "Welk formaat is het beste voor een computerscherm?", a: "PNG levert de allerhoogste ongecomprimeerde beeldkwaliteit." },
          { q: "Werkt dit op iPhone en Android?", a: "Ja, kies 'Mobiele Smartphone (1080 × 1920)' voor een vlekkeloze verticale weergave." },
        ],
      },
      pl: {
        title: `${plName} – Pobierz Bezpłatnie Tapetę w Wysokiej Rozdzielczości`,
        metaDescription: `Pobierz ${plName.toLowerCase()} w formatach PNG, JPG i WEBP. Bezstratne obrazy tła w jakości HD, 4K i 8K na komputer, telefon i tablet.`,
        h1: `${plName} (Bezstratne Pobieranie Tła)`,
        intro: `Generuj i pobieraj czyste tło ${plName.toLowerCase()} bezpośrednio w przeglądarce. Obrazy są renderowane lokalnie na płótnie HTML5 w 100% bezstratnej jakości sRGB bez żadnych znaków wodnych.`,
        featuresTitle: "Specyfikacja i Opcje Eksportu",
        features: [
          { title: "Wiele Formatów Plików", desc: "Zapisuj w bezstratnym formacie PNG, nowoczesnym WEBP lub uniwersalnym JPEG." },
          { title: `Perfekcyjne Dopasowanie: ${resLabel}`, desc: "Optymalnie przygotowane dla Twojego ekranu bez rozmycia i zniekształceń." },
          { title: "Bez Rejestracji i Opłat", desc: "100% darmowe pobieranie bez zakładania konta czy pobierania aplikacji." },
          { title: "Wszystkie Proporcje Ekranu", desc: "Dopasowane do monitorów panoramicznych 16:9, ekranów smartfonów 9:16 i formatów kwadratowych." },
        ],
        faqs: [
          { q: `Jak pobrać tę tapetę (${plName.toLowerCase()})?`, a: "Wybierz format i rozdzielczość w panelu pobierania, a następnie kliknij 'Pobierz Obraz Tła'." },
          { q: "Czy obraz jest rzeczywiście bezstratny?", a: "Tak, pliki PNG są generowane bezpośrednio z pamięci canvas przeglądarki bez kompresji stratnej." },
          { q: "Czy mogę używać tej tapety komercyjnie?", a: "Tak, wszystkie generowane jednolite tła są objęte domeną publiczną i wolne do użytku osobistego oraz komercyjnego." },
          { q: "Jaki format jest najlepszy na komputer?", a: "Format PNG zapewnia najwyższą, nieskompresowaną wierność kolorów." },
          { q: "Czy działa na iPhone i Androidzie?", a: "Oczywiście, wybierz 'Smartfon Mobilny (1080 × 1920)' dla idealnego dopasowania pionowego." },
        ],
      },
      tr: {
        title: `${trName} – Ücretsiz Yüksek Çözünürlüklü Duvar Kağıdı İndir`,
        metaDescription: `Kayıpsız ${trName.toLowerCase()} PNG, JPG ve WEBP formatlarında indirin. PC, iPhone ve monitörler için ultra yüksek çözünürlüklü arka planlar.`,
        h1: `${trName} (Kayıpsız Duvar Kağıdı İndir)`,
        intro: `Doğrudan tarayıcınızda saf ${trName.toLowerCase()} arka planı oluşturun ve indirin. HTML5 canvas üzerinde filigransız ve %100 kayıpsız sRGB kalitesinde yerel olarak üretilir.`,
        featuresTitle: "Teknik Özellikler ve Dışa Aktarma",
        features: [
          { title: "Çoklu Dosya Formatı", desc: "Kayıpsız PNG, modern WEBP veya standart JPEG formatlarında kaydedin." },
          { title: `${resLabel} İçin Piksel Hassasiyeti`, desc: "Bulanık ölçeklendirmeyi önlemek için modern panellere tam uyumlu üretilir." },
          { title: "Ücretsiz ve Reklamsız", desc: "Kayıt olmadan veya yazılım yüklemeden %100 ücretsiz indirin." },
          { title: "Tüm En-Boy Oranları Desteklenir", desc: "16:9 masaüstü, 9:16 akıllı telefon kilit ekranı ve kare profil ölçüleri mevcuttur." },
        ],
        faqs: [
          { q: `Bu ${trName.toLowerCase()} nasıl indirilir?`, a: "İndirme panelinden istediğiniz formatı ve çözünürlüğü seçip 'Arka Plan Resmini İndir' butonuna tıklayın." },
          { q: "Görüntü gerçekten kayıpsız mı?", a: "Evet, PNG dosyaları doğrudan tarayıcının canvas belleğinden sıkıştırma kaybı olmadan aktarılır." },
          { q: "Ticari amaçla kullanabilir miyim?", a: "Evet, üretilen tüm düz renk duvar kağıtları kamu malıdır ve ticari kullanım dahil serbesttir." },
          { q: "Masaüstü için en uygun format hangisidir?", a: "PNG formatı en yüksek görsel kaliteyi ve renk doğruluğunu sağlar." },
          { q: "iPhone ve Android cihazlarda çalışır mı?", a: "Evet, dikey ekrana tam oturması için 'Mobil Akıllı Telefon (1080 × 1920)' seçeneğini kullanın." },
        ],
      },
      ja: {
        title: `${jaName} – 高解像度・無圧縮壁紙の無料ダウンロード`,
        metaDescription: `純粋な${jaName.toLowerCase()}をPNG、JPG、WEBP形式で無料ダウンロード。PC、iPhone、iPad、4Kモニター用の超高解像度壁紙。`,
        h1: `${jaName}（ロスレス壁紙ダウンロード）`,
        intro: `ブラウザ上で即座に高画質${jaName.toLowerCase()}を生成してダウンロードできます。HTML5 Canvasにより完全なロスレスsRGB品質でレンダリングされ、画質の劣化や不要な透かしロゴはありません。`,
        featuresTitle: "仕様とエクスポート機能",
        features: [
          { title: "選べる3つの保存形式", desc: "最高品質で完全無圧縮のPNG、軽量なWEBP、汎用性の高い標準JPEGから選択できます。" },
          { title: `${resLabel}に最適化された精細さ`, desc: "最新ディスプレイのピクセル比率に合わせて生成されるため、ぼやけのないシャープな表示が可能です。" },
          { title: "広告や登録一切不要", desc: "会員登録やアプリのインストール不要で、今すぐ完全無料で保存できます。" },
          { title: "スマホ用とPC用の両方に対応", desc: "16:9のワイドモニター、9:16のスマホ画面、正方形アイコンサイズまで網羅。" },
        ],
        faqs: [
          { q: `この${jaName.toLowerCase()}をダウンロードするにはどうすればよいですか？`, a: "下部のダウンロードパネルで希望のファイル形式と解像度を選択し、「壁紙をダウンロード」をクリックしてください。" },
          { q: "画像に圧縮による劣化はありませんか？", a: "はい。PNG形式のエクスポートはブラウザのCanvasメモリから直接無圧縮で書き出されるため、100%ロスレス品質です。" },
          { q: "商用利用は可能ですか？", a: "はい。生成された単色壁紙はすべてパブリックドメイン（CC0）扱いとなり、個人・商用を問わず自由にご利用いただけます。" },
          { q: "パソコンのデスクトップにはどの形式がおすすめですか？", a: "PNG形式が最もノイズのない純粋な色合いを表示できるため推奨されます。" },
          { q: "iPhoneやAndroidスマホにも対応していますか？", a: "はい。「スマートフォン縦画面 (1080 × 1920)」を選択すれば、縦向きの画面にぴったり合います。" },
        ],
      },
      ko: {
        title: `${koName} – 초고화질 무손실 배경화면 무료 다운로드`,
        metaDescription: `순수한 ${koName.toLowerCase()}을 PNG, JPG, WEBP 형식으로 다운로드하세요. PC, 스마트폰, 4K 모니터를 위한 무손실 초고해상도 배경 이미지.`,
        h1: `${koName} (무손실 배경화면 다운로드)`,
        intro: `브라우저에서 직접 깨끗한 ${koName.toLowerCase()} 이미지를 생성하고 다운로드하세요. HTML5 캔버스를 통해 100% 무손실 sRGB 화질로 로컬에서 렌더링되며 워터마크나 압축 노이즈가 전혀 없습니다.`,
        featuresTitle: "기술 사양 및 다운로드 기능",
        features: [
          { title: "다양한 파일 형식 지원", desc: "무손실 최고 화질의 PNG, 가벼운 최신 WEBP, 호환성 높은 표준 JPEG를 지원합니다." },
          { title: `${resLabel} 디스플레이에 완벽한 해상도`, desc: "모던 모니터 규격에 맞춰 픽셀 단위로 생성되어 확대 시 흐려짐이 없습니다." },
          { title: "회원가입 없는 100% 무료", desc: "결제나 로그인, 별도 프로그램 설치 없이 즉시 무제한 다운로드할 수 있습니다." },
          { title: "데스크톱 및 모바일 전 규격", desc: "16:9 와이드 모니터부터 9:16 스마트폰 잠금화면, 정사각형 규격까지 모두 제공합니다." },
        ],
        faqs: [
          { q: `이 ${koName.toLowerCase()}을 어떻게 다운로드하나요?`, a: "하단 다운로드 패널에서 원하는 형식과 해상도를 선택한 뒤 '배경화면 다운로드' 버튼을 누르면 즉시 저장됩니다." },
          { q: "이미지가 실제로 무손실 품질인가요?", a: "네, PNG 형식은 브라우저 캔버스 메모리에서 직접 무압축으로 출력되어 화질 손실이 전혀 없습니다." },
          { q: "상업적 용도로 사용해도 되나요?", a: "네, 생성된 모든 단색 배경화면은 퍼블릭 도메인으로 개인 및 상업적 목적 모두 자유롭게 이용 가능합니다." },
          { q: "컴퓨터 모니터용으로는 어떤 형식이 가장 좋나요?", a: "PNG 형식을 선택하시면 왜곡 없이 가장 선명한 단색을 표현할 수 있습니다." },
          { q: "아이폰과 안드로이드 기기에서도 잘 맞나요?", a: "네, '모바일 스마트폰 (1080 × 1920)' 옵션을 선택하시면 세로 화면에 완벽하게 맞춤 다운로드됩니다." },
        ],
      },
    },
  };
}

export const ALL_WALLPAPERS: WallpaperDefinition[] = [
  buildWallpaper('white-wallpaper', '#ffffff', '#000000', 'fhd', { en: 'White Wallpaper', es: 'Fondo Blanco', fr: 'Fond d\'Écran Blanc', de: 'Weißes Hintergrundbild', pt: 'Papel de Parede Branco', id: 'Wallpaper Putih' }, 'Full HD 1080p'),
  buildWallpaper('white-wallpaper-4k', '#ffffff', '#000000', 'uhd4k', { en: 'White Wallpaper 4K', es: 'Fondo Blanco 4K', fr: 'Fond d\'Écran Blanc 4K', de: 'Weißes Hintergrundbild 4K', pt: 'Papel de Parede Branco 4K', id: 'Wallpaper Putih 4K' }, '4K Ultra HD (3840 × 2160)'),
  buildWallpaper('white-wallpaper-8k', '#ffffff', '#000000', 'uhd8k', { en: 'White Wallpaper 8K', es: 'Fondo Blanco 8K', fr: 'Fond d\'Écran Blanc 8K', de: 'Weißes Hintergrundbild 8K', pt: 'Papel de Parede Branco 8K', id: 'Wallpaper Putih 8K' }, '8K Ultra HD (7680 × 4320)'),
  buildWallpaper('white-background-for-iphone', '#ffffff', '#000000', 'mobile', { en: 'White Background for iPhone', es: 'Fondo Blanco para iPhone', fr: 'Fond Blanc pour iPhone', de: 'Weißer Hintergrund für iPhone', pt: 'Fundo Branco para iPhone', id: 'Latar Belakang Putih iPhone' }, 'iPhone & Smartphone Portrait'),
  buildWallpaper('white-wallpaper-for-desktop', '#ffffff', '#000000', 'qhd', { en: 'White Wallpaper for Desktop', es: 'Fondo Blanco para Escritorio', fr: 'Fond d\'Écran Blanc PC', de: 'Weißes Hintergrundbild Desktop', pt: 'Papel de Parede Branco PC', id: 'Wallpaper Putih Desktop' }, 'Desktop QHD & 4K'),
  buildWallpaper('black-wallpaper', '#000000', '#ffffff', 'fhd', { en: 'Black Wallpaper', es: 'Fondo Negro', fr: 'Fond d\'Écran Noir', de: 'Schwarzes Hintergrundbild', pt: 'Papel de Parede Preto', id: 'Wallpaper Hitam' }, 'Full HD 1080p'),
  buildWallpaper('black-wallpaper-4k', '#000000', '#ffffff', 'uhd4k', { en: 'Black Wallpaper 4K', es: 'Fondo Negro 4K', fr: 'Fond d\'Écran Noir 4K', de: 'Schwarzes Hintergrundbild 4K', pt: 'Papel de Parede Preto 4K', id: 'Wallpaper Hitam 4K' }, '4K Ultra HD (3840 × 2160)'),
  buildWallpaper('blue-wallpaper', '#0000ff', '#ffffff', 'uhd4k', { en: 'Blue Wallpaper', es: 'Fondo Azul', fr: 'Fond d\'Écran Bleu', de: 'Blaues Hintergrundbild', pt: 'Papel de Parede Azul', id: 'Wallpaper Biru' }, '4K Ultra HD'),
  buildWallpaper('green-wallpaper', '#00ff00', '#000000', 'uhd4k', { en: 'Green Wallpaper', es: 'Fondo Verde', fr: 'Fond d\'Écran Vert', de: 'Grünes Hintergrundbild', pt: 'Papel de Parede Verde', id: 'Wallpaper Hijau' }, '4K Ultra HD'),
  buildWallpaper('red-wallpaper', '#ff0000', '#ffffff', 'uhd4k', { en: 'Red Wallpaper', es: 'Fondo Rojo', fr: 'Fond d\'Écran Rouge', de: 'Rotes Hintergrundbild', pt: 'Papel de Parede Vermelho', id: 'Wallpaper Merah' }, '4K Ultra HD')
];

export function getWallpaperById(id: string): WallpaperDefinition | undefined {
  return ALL_WALLPAPERS.find(w => w.id === id);
}
