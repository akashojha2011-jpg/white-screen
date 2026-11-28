import type { LanguageCode } from '../i18n/config';

export interface ThemeFAQ {
  q: string;
  a: string;
}

export interface LocalizedThemeContent {
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  featuresTitle: string;
  features: Array<{ title: string; desc: string }>;
  faqs: ThemeFAQ[];
}

export interface ThemeDefinition {
  id: string;
  cssBackground: string;
  contrastText: '#ffffff' | '#000000';
  names: Record<LanguageCode, string>;
  content: Record<LanguageCode, LocalizedThemeContent>;
}

export const THEME_META_PL_TR: Record<string, { plName: string; trName: string; moodPl: string; moodTr: string }> = {
  "sky-background": {
    "plName": "Błękitne Niebo",
    "trName": "Gündüz Gökyüzü",
    "moodPl": "spokojnego skupienia i świeżości",
    "moodTr": "ferahlatıcı odaklanma ve gün ışığı hissi"
  },
  "gradient-background": {
    "plName": "Nowoczesny Gradient",
    "trName": "Modern Renk Geçişi",
    "moodPl": "współczesnej estetyki i kreatywności",
    "moodTr": "modern estetik ve yaratıcı ilham"
  },
  "space-background": {
    "plName": "Głęboki Kosmos",
    "trName": "Derin Uzay",
    "moodPl": "pracy nocnej i głębokiej koncentracji",
    "moodTr": "gece çalışması ve derin odaklanma"
  },
  "forest-background": {
    "plName": "Naturalny Las",
    "trName": "Doğal Orman",
    "moodPl": "wizualnego spokoju i kontaktu z naturą",
    "moodTr": "göz dinlendirici huzur ve doğa uyumu"
  },
  "fire-background": {
    "plName": "Ciepły Ogień",
    "trName": "Ateş Parıltısı",
    "moodPl": "ciepłej energii i przytulnego klimatu",
    "moodTr": "sıcak enerji ve samimi ortam ışığı"
  },
  "wood-background": {
    "plName": "Naturalne Drewno",
    "trName": "Sıcak Ahşap",
    "moodPl": "klasycznej elegancji i nastroju pracowni",
    "moodTr": "klasik şıklık ve huzurlu stüdyo ortamı"
  },
  "water-background": {
    "plName": "Krystaliczna Woda",
    "trName": "Berrak Su",
    "moodPl": "orzeźwiającego wyciszenia i przejrzystości",
    "moodTr": "ferahlatıcı sakinlik ve dinginlik"
  },
  "paper-background": {
    "plName": "Naturalny Papier",
    "trName": "Doğal Kağıt",
    "moodPl": "komfortowego czytania i szkicowania",
    "moodTr": "parlamasız rahat okuma ve eskiz çizimi"
  },
  "city-background": {
    "plName": "Nocne Miasto",
    "trName": "Gece Şehri",
    "moodPl": "miejskiego rytmu i nowoczesnej produktywności",
    "moodTr": "modern şehir ritmi ve çalışma verimliliği"
  },
  "ocean-background": {
    "plName": "Głęboki Ocean",
    "trName": "Derin Okyanus",
    "moodPl": "głębokiego spokoju i redukcji stresu",
    "moodTr": "derin dinginlik ve zihinsel rahatlama"
  },
  "galaxy-background": {
    "plName": "Kosmiczna Galaktyka",
    "trName": "Kozmik Galaksi",
    "moodPl": "wieczornej inspiracji i wyobraźni",
    "moodTr": "gece ilhamı ve kozmik yaratıcılık"
  },
  "sunset-background": {
    "plName": "Ciepły Zachód Słońca",
    "trName": "Sıcak Gün Batımı",
    "moodPl": "wieczornego relaksu i przygotowania do snu",
    "moodTr": "akşam dinlenmesi ve huzurlu uykuya geçiş"
  },
  "silver-background": {
    "plName": "Metaliczne Srebro",
    "trName": "Metalik Gümüş",
    "moodPl": "technicznej precyzji i czystości formy",
    "moodTr": "teknik hassasiyet ve berrak netlik"
  },
  "snow-background": {
    "plName": "Czysty Śnieg",
    "trName": "Saf Kar",
    "moodPl": "absolutnej czystości i rozproszonego światła",
    "moodTr": "kusursuz saflık ve yumuşak dağınık ışık"
  },
  "carbon-fiber-background": {
    "plName": "Włókno Węglowe",
    "trName": "Karbon Fiber",
    "moodPl": "nowoczesnego stylu technologicznego i gamingu",
    "moodTr": "yüksek teknolojili oyun ve odaklanma ortamı"
  },
  "concrete-background": {
    "plName": "Architektoniczny Beton",
    "trName": "Endüstriyel Beton",
    "moodPl": "surowego minimalizmu i nowoczesnego designu",
    "moodTr": "modern minimalizm ve sade stüdyo tarzı"
  }
};

export const THEME_META_JA_KO: Record<string, { jaName: string; koName: string; moodJa: string; moodKo: string }> = {
  "sky-background": {
    "jaName": "青空の背景",
    "koName": "맑은 하늘 배경",
    "moodJa": "爽やかな集中と青空のインスピレーション",
    "moodKo": "상쾌한 몰입과 푸른 하늘의 영감"
  },
  "gradient-background": {
    "jaName": "グラデーション背景",
    "koName": "그라데이션 배경",
    "moodJa": "洗練されたモダンな美意識とクリエイティブな発想",
    "moodKo": "세련된 현대적 미감과 창의적 디자인 영감"
  },
  "space-background": {
    "jaName": "宇宙の背景",
    "koName": "우주 배경",
    "moodJa": "夜間の深い集中と神秘的な宇宙の広がり",
    "moodKo": "야간 집중과 깊은 우주의 몰입감"
  },
  "forest-background": {
    "jaName": "森林の背景",
    "koName": "숲속 배경",
    "moodJa": "植物の癒やしとストレスを和らげる静寂",
    "moodKo": "자연의 편안함과 스트레스 완화"
  },
  "fire-background": {
    "jaName": "炎の背景",
    "koName": "불꽃 배경",
    "moodJa": "温かく活力をもたらす暖炉のようなぬくもり",
    "moodKo": "따뜻하고 활력을 주는 아늑한 분위기"
  },
  "wood-background": {
    "jaName": "木目の背景",
    "koName": "원목 배경",
    "moodJa": "温かみのあるアースカラーと落ち着いた空間",
    "moodKo": "자연스러운 원목 톤과 차분한 스튜디오 무드"
  },
  "water-background": {
    "jaName": "水面の背景",
    "koName": "물결 배경",
    "moodJa": "清らかな水の透明感と精神的な落ち着き",
    "moodKo": "청량한 물의 투명함과 마음의 평온"
  },
  "paper-background": {
    "jaName": "紙の背景",
    "koName": "종이 질감 배경",
    "moodJa": "反射のない羊皮紙のような快適な読書空間",
    "moodKo": "눈부심 없는 양피지 독서 및 작업 환경"
  },
  "city-background": {
    "jaName": "都市の背景",
    "koName": "도시 배경",
    "moodJa": "洗練された都会的な作業意欲とテクノロジーの美学",
    "moodKo": "세련된 도시의 감성과 현대적인 업무 몰입"
  },
  "ocean-background": {
    "jaName": "深海の背景",
    "koName": "바다 배경",
    "moodJa": "静かな海の底のような瞑想的ライティング",
    "moodKo": "깊은 바다의 고요함과 명상적인 분위기"
  },
  "galaxy-background": {
    "jaName": "銀河の背景",
    "koName": "은하수 배경",
    "moodJa": "星空を見上げるような天体への思いを馳せる夜",
    "moodKo": "별빛 가득한 밤하늘의 낭만과 평온"
  },
  "sunset-background": {
    "jaName": "夕焼けの背景",
    "koName": "노을 배경",
    "moodJa": "夕暮れ時の黄金色の光と一日の終わりのリラックス",
    "moodKo": "황금빛 석양과 하루를 마무리하는 휴식"
  },
  "silver-background": {
    "jaName": "シルバーの背景",
    "koName": "실버 배경",
    "moodJa": "スタイリッシュなメタリックミニマリズム",
    "moodKo": "세련된 메탈릭 미니멀리즘과 모던 디자인"
  },
  "snow-background": {
    "jaName": "雪景色の背景",
    "koName": "설경 배경",
    "moodJa": "凛とした冬の清涼感と澄んだ空気",
    "moodKo": "깨끗한 겨울의 청량감과 맑은 분위기"
  },
  "carbon-fiber-background": {
    "jaName": "カーボンファイバーの背景",
    "koName": "카본 파이버 배경",
    "moodJa": "ハイテクなモータースポーツ感とゲーミングの興奮",
    "moodKo": "하이테크 모터스포츠 감성과 게이밍 무드"
  },
  "concrete-background": {
    "jaName": "コンクリートの背景",
    "koName": "콘크리트 배경",
    "moodJa": "無機質なブルータリズム建築のモダンスタジオ感",
    "moodKo": "모던 브루탈리즘 건축미와 세련된 스튜디오 스타일"
  }
};

export const THEME_META_RU: Record<string, { ruName: string; moodRu: string }> = {
  "sky-background": {
    "ruName": "Фон Небо",
    "moodRu": "дневной свежести и вдохновения ясного неба"
  },
  "gradient-background": {
    "ruName": "Градиентный фон",
    "moodRu": "современной визуальной эстетики и творческой концентрации"
  },
  "space-background": {
    "ruName": "Космический фон",
    "moodRu": "ночного глубокого погружения и космического спокойствия"
  },
  "forest-background": {
    "ruName": "Лесной фон",
    "moodRu": "природной растительной гармонии и снятия стресса"
  },
  "fire-background": {
    "ruName": "Огненный фон",
    "moodRu": "согревающего пламени и домашнего уютного тепла"
  },
  "wood-background": {
    "ruName": "Древесный фон",
    "moodRu": "натурального теплого дерева и студийного комфорта"
  },
  "water-background": {
    "ruName": "Водный фон",
    "moodRu": "кристальной прозрачности воды и душевного равновесия"
  },
  "paper-background": {
    "ruName": "Бумажный фон",
    "moodRu": "текстуры пергамента для комфортного чтения без бликов"
  },
  "city-background": {
    "ruName": "Городской фон",
    "moodRu": "урбанистической продуктивности и технологичной эстетики"
  },
  "ocean-background": {
    "ruName": "Океанский фон",
    "moodRu": "глубоководного умиротворения и медитативного света"
  },
  "galaxy-background": {
    "ruName": "Галактический фон",
    "moodRu": "звездного неба и созерцания космических далей"
  },
  "sunset-background": {
    "ruName": "Закатный фон",
    "moodRu": "золотых вечерних сумерек и неторопливого отдыха"
  },
  "silver-background": {
    "ruName": "Серебряный фон",
    "moodRu": "стильного металлического минимализма и строгого дизайна"
  },
  "snow-background": {
    "ruName": "Снежный фон",
    "moodRu": "морозной зимней чистоты и прозрачного горного воздуха"
  },
  "carbon-fiber-background": {
    "ruName": "Фон Углеволокно",
    "moodRu": "высокотехнологичной автоспортивной текстуры и геймерской атмосферы"
  },
  "concrete-background": {
    "ruName": "Бетонный фон",
    "moodRu": "бруталистской архитектурной эстетики и городского лофта"
  }
};

function buildTheme(
  id: string,
  cssBackground: string,
  contrastText: '#ffffff' | '#000000',
  names: Record<LanguageCode, string>,
  moodEn: string,
  moodEs: string,
  moodFr: string,
  moodDe: string,
  moodPt: string,
  moodId: string,
  moodIt: string = moodEn,
  moodNl: string = moodEn
): ThemeDefinition {
  const nameIt = names.it || names.en;
  const nameNl = names.nl || names.en;
  const metaPlTr = THEME_META_PL_TR[id] || { plName: names.en, trName: names.en, moodPl: moodEn, moodTr: moodEn };
  const namePl = names.pl || metaPlTr.plName;
  const nameTr = names.tr || metaPlTr.trName;
  const moodPl = metaPlTr.moodPl;
  const moodTr = metaPlTr.moodTr;
  const metaJaKo = THEME_META_JA_KO[id] || { jaName: names.en, koName: names.en, moodJa: moodEn, moodKo: moodEn };
  const nameJa = names.ja || metaJaKo.jaName;
  const nameKo = names.ko || metaJaKo.koName;
  const moodJa = metaJaKo.moodJa;
  const moodKo = metaJaKo.moodKo;
  const metaRu = THEME_META_RU[id] || { ruName: names.en, moodRu: moodEn };
  const nameRu = names.ru || metaRu.ruName;
  const moodRu = metaRu.moodRu;
  const nameEn = names.en;
  const nameEs = names.es;
  const nameFr = names.fr;
  const nameDe = names.de;
  const namePt = names.pt;
  const nameId = names.id;

  return {
    id,
    cssBackground,
    contrastText,
    names: {
      ...names,
      pl: namePl,
      tr: nameTr,
      ja: nameJa,
      ko: nameKo,
      ru: nameRu,
    },
    content: {
      en: {
        title: `${nameEn} – Fullscreen Ambient CSS Background & Screen Tool`,
        metaDescription: `Immersive fullscreen ${nameEn.toLowerCase()} generated with lightweight CSS gradients. Perfect for ${moodEn}, video calls, desktop wallpaper, and focus.`,
        h1: `${nameEn} (Fullscreen CSS Theme)`,
        intro: `Display an ambient ${nameEn.toLowerCase()} across your screen without heavy image downloads or video buffering. Engineered with pure CSS gradients, this theme delivers instant, 60fps responsive illumination for ${moodEn}.`,
        featuresTitle: `Why Choose the ${nameEn} Theme?`,
        features: [
          { title: "Pure CSS & Zero Image Lag", desc: "Crafted entirely using mathematical vector CSS gradients. Loads in 0 milliseconds with zero bandwidth consumption." },
          { title: `Ambient ${moodEn}`, desc: "Transforms your display into a calming ambient light source for workspaces and creative studios." },
          { title: "Full Resolution Scaling", desc: "Renders perfectly crisp on 1080p, 4K, and 8K monitors without pixelation or compression artifacts." },
          { title: "Screen Wake Lock Enabled", desc: "Keeps your background glowing continuously without monitor timeouts." },
        ],
        faqs: [
          { q: `What is the ${nameEn.toLowerCase()} theme used for?`, a: `It is used as an ambient backdrop for ${moodEn}, an artistic webcam light, and an aesthetic fullscreen screen saver.` },
          { q: "Does it slow down my computer?", a: "No, it uses pure CSS rendering with virtually 0% CPU and GPU load." },
          { q: "Can I use it on multiple monitors?", a: "Yes, open this page on any secondary display to create a matching ambient aesthetic." },
          { q: "Can I download a wallpaper of this theme?", a: "Yes, use the wallpaper generator below to export this theme in 4K or 8K." },
          { q: "Is it free and without ads?", a: "Yes, completely free with no registration or advertisements." },
        ],
      },
      es: {
        title: `${nameEs} – Fondo Ambiental en Pantalla Completa y CSS Puro`,
        metaDescription: `Fondo inmersivo ${nameEs.toLowerCase()} generado con gradientes CSS ligeros. Ideal para ${moodEs}, videollamadas y concentración.`,
        h1: `${nameEs} (Tema CSS en Pantalla Completa)`,
        intro: `Muestra un ${nameEs.toLowerCase()} ambiental en tu monitor sin descargar imágenes pesadas. Diseñado con gradientes CSS puros para una iluminación fluida y relajante orientada a ${moodEs}.`,
        featuresTitle: `Ventajas del Tema ${nameEs}`,
        features: [
          { title: "CSS Puro sin Cargas Pesadas", desc: "Creado con gradientes vectoriales. Carga en 0 milisegundos sin consumir datos." },
          { title: `Ambiente Ideal para ${moodEs}`, desc: "Transforma tu pantalla en una lámpara ambiental decorativa para tu espacio de trabajo." },
          { title: "Nitidez Total en 4K y 8K", desc: "Se adapta a cualquier resolución sin pixelarse ni perder definición." },
          { title: "Pantalla Siempre Encendida", desc: "Mantiene la iluminación activa sin entrar en modo suspensión." },
        ],
        faqs: [
          { q: `¿Para qué sirve el tema de ${nameEs.toLowerCase()}?`, a: `Sirve como fondo ambiental para ${moodEs}, luz decorativa para videollamadas o salvapantallas estético.` },
          { q: "¿Ralentiza el ordenador?", a: "No, el consumo de procesador y batería es prácticamente nulo." },
          { q: "¿Funciona en varios monitores?", a: "Sí, puedes abrirlo en pantallas secundarias para una atmósfera envolvente." },
          { q: "¿Puedo descargarlo como fondo de pantalla?", a: "Sí, descárgalo en 4K u 8K desde la sección inferior." },
          { q: "¿Es gratuito?", a: "Completamente gratuito y libre de anuncios." },
        ],
      },
      fr: {
        title: `${nameFr} – Fond d'Écran d'Ambiance Plein Écran en Pur CSS`,
        metaDescription: `Thème immersif ${nameFr.toLowerCase()} généré par dégradés CSS légers. Idéal pour ${moodFr}, visioconférences et concentration.`,
        h1: `${nameFr} (Thème CSS Plein Écran)`,
        intro: `Affichez un fond ${nameFr.toLowerCase()} sur votre écran sans aucun temps de chargement. Conçu en dégradés CSS mathématiques, il procure un éclairage d'ambiance parfait pour ${moodFr}.`,
        featuresTitle: `Points Forts du Thème ${nameFr}`,
        features: [
          { title: "100% CSS Ultra Léger", desc: "Aucun fichier image lourd à télécharger. Affichage instantané en 0 ms." },
          { title: `Atmosphère Parfaite pour ${moodFr}`, desc: "Diffuse une douce lumière décorative sur votre bureau ou studio." },
          { title: "Netteté Absolue 4K et 8K", desc: "Épouse parfaitement la résolution native de votre moniteur sans pixellisation." },
          { title: "Anti-Mise en Veille", desc: "La fonction Wake Lock garde votre écran allumé sans coupure." },
        ],
        faqs: [
          { q: `À quoi sert le thème ${nameFr.toLowerCase()} ?`, a: `À créer une ambiance visuelle apaisante pour ${moodFr}, servir de fond vidéo ou de veilleuse esthétique.` },
          { q: "Consomme-t-il beaucoup d'énergie ?", a: "Non, le rendu CSS vectoriel utilise moins de 1% des ressources de votre appareil." },
          { q: "Est-il adapté au multi-écran ?", a: "Oui, parfait pour habiller un deuxième écran au bureau." },
          { q: "Puis-je le télécharger en image ?", a: "Oui, exportez-le en 4K ou 8K dans l'outil de téléchargement ci-dessous." },
          { q: "Est-ce gratuit ?", a: "Totalement gratuit et sans publicité." },
        ],
      },
      de: {
        title: `${nameDe} – Vollbild-Ambient-Hintergrund in Reiner CSS-Technik`,
        metaDescription: `Immersiver ${nameDe.toLowerCase()} mit sanften CSS-Farbverläufen. Perfekt für ${moodDe}, Videocalls und konzentriertes Arbeiten.`,
        h1: `${nameDe} (Vollbild-CSS-Theme)`,
        intro: `Bringen Sie einen stimmungsvollen ${nameDe.toLowerCase()} ohne Bilddateien auf Ihren Monitor. Mathematische CSS-Verläufe erzeugen ein blendfreies Ambient-Licht für ${moodDe}.`,
        featuresTitle: `Vorteile des ${nameDe}-Themes`,
        features: [
          { title: "Reines CSS & 0ms Ladezeit", desc: "Ganz ohne Bilddateien gerendert; spart Datenvolumen und lädt blitzschnell." },
          { title: `Stimmungsvolle Beleuchtung für ${moodDe}`, desc: "Verwandelt Displays in sanfte Leuchtkörper für moderne Arbeitsplätze." },
          { title: "Verlustfreie 4K/8K-Skalierung", desc: "Bleibt auf jedem Monitor gestochen scharf ohne Artefakte." },
          { title: "Dauerhaft aktiv", desc: "Bleibt dank Wake-Lock durchgehend eingeschaltet." },
        ],
        faqs: [
          { q: `Wofür wird das ${nameDe.toLowerCase()}-Theme genutzt?`, a: `Als beruhigendes Umgebungslicht für ${moodDe}, Hintergrund für Videocalls oder ästhetischer Bildschirmschoner.` },
          { q: "Belastet es die Grafikkarte?", a: "Nein, die Auslastung von CPU und GPU liegt nahe null." },
          { q: "Geht das auf mehreren Bildschirmen?", a: "Ja, hervorragend geeignet für ein stimmiges Setup mit Zweitmonitoren." },
          { q: "Kann ich ein Wallpaper herunterladen?", a: "Ja, im Download-Bereich unten als verlustfreies 4K- oder 8K-Bild." },
          { q: "Ist das Theme kostenlos?", a: "Ja, 100% kostenfrei ohne Registrierung." },
        ],
      },
      pt: {
        title: `${namePt} – Fundo de Tela Ambiente em Tela Cheia em Puro CSS`,
        metaDescription: `Tema imersivo ${namePt.toLowerCase()} gerado por gradientes leves em CSS. Perfeito para ${moodPt}, chamadas de vídeo e foco no trabalho.`,
        h1: `${namePt} (Tema CSS em Tela Cheia)`,
        intro: `Exiba um lindo ${namePt.toLowerCase()} no seu computador sem baixar imagens pesadas. Construído com gradientes vetoriais em CSS para uma luz suave e elegante voltada a ${moodPt}.`,
        featuresTitle: `Vantagens do Tema ${namePt}`,
        features: [
          { title: "Puro CSS com Carregamento Instantâneo", desc: "Sem arquivos de imagem pesados. Abre em 0 milissegundos sem gastar franquia." },
          { title: `Iluminação Perfeita para ${moodPt}`, desc: "Transforma seu monitor em uma luminária decorativa e suave para seu espaço." },
          { title: "Resolução Impecável em 4K e 8K", desc: "Adapta-se perfeitamente a qualquer tela sem perder nitidez ou granular." },
          { title: "Sem Apagar a Tela", desc: "O bloqueio de suspensão mantém a atmosfera contínua no ambiente." },
        ],
        faqs: [
          { q: `Para que serve o tema ${namePt.toLowerCase()}?`, a: `Serve como luz decorativa para ${moodPt}, fundo estético para videochamadas e protetor de tela.` },
          { q: "Consome muita bateria?", a: "Não, o consumo de bateria e processamento é praticamente zero." },
          { q: "Funciona em vários monitores?", a: "Sim, perfeito para colocar na tela secundária do seu setup." },
          { q: "Posso baixar como papel de parede?", a: "Sim, exporte em 4K ou 8K na seção de downloads logo abaixo." },
          { q: "É gratuito?", a: "Sim, completamente gratuito e sem anúncios." },
        ],
      },
      id: {
        title: `${nameId} – Latar Belakang Gradasi Layar Penuh Murni CSS`,
        metaDescription: `Tema layar penuh ${nameId.toLowerCase()} dengan gradasi CSS ringan. Sangat cocok untuk ${moodId}, video call, dan fokus kerja.`,
        h1: `${nameId} (Tema Layar Penuh CSS)`,
        intro: `Hadirkan ${nameId.toLowerCase()} yang menenangkan di monitor Anda tanpa perlu mengunduh gambar berukuran besar. Dibuat dengan gradasi murni CSS untuk pencahayaan lembut yang cocok untuk ${moodId}.`,
        featuresTitle: `Kelebihan Tema ${nameId}`,
        features: [
          { title: "Murni CSS Tanpa Beban Kuota", desc: "Dibuat tanpa file gambar berukuran besar, terbuka dalam 0 milidetik seketika." },
          { title: `Pencahayaan Estetik untuk ${moodId}`, desc: "Mengubah monitor Anda menjadi sumber cahaya ambient yang menenangkan di meja kerja." },
          { title: "Ketajaman Penuh di Layar 4K & 8K", desc: "Menyesuaikan secara otomatis ke semua resolusi layar tanpa pecah atau buram." },
          { title: "Layar Menyala Tanpa Mati", desc: "Fitur wake lock menjaga lampu layar tetap menyala menemani aktivitas Anda." },
        ],
        faqs: [
          { q: `Untuk apa tema ${nameId.toLowerCase()} digunakan?`, a: `Digunakan sebagai pencahayaan estetik untuk ${moodId}, latar video call yang rapi, dan screensaver santai.` },
          { q: "Apakah membebani laptop?", a: "Tidak, pemakaian prosesor dan baterai sangat hemat mendekati 0%." },
          { q: "Bisa untuk monitor ganda?", a: "Bisa, sangat cocok ditaruh di monitor kedua agar meja kerja terlihat keren." },
          { q: "Bisakah diunduh sebagai wallpaper?", a: "Bisa, unduh dalam format 4K atau 8K pada bagian download di bawah." },
          { q: "Apakah alat ini gratis?", a: "Sepenuhnya gratis tanpa biaya dan tanpa iklan." },
        ],
      },
      it: {
        title: `${nameIt} – Sfondo Ambientale a Schermo Intero in Puro CSS`,
        metaDescription: `Tema immersivo ${nameIt.toLowerCase()} generato con gradienti CSS leggeri. Perfetto per ${moodIt}, videochiamate e concentrazione.`,
        h1: `${nameIt} (Tema CSS a Schermo Intero)`,
        intro: `Mostra uno sfondo ${nameIt.toLowerCase()} sul tuo monitor senza scaricare pesanti file immagine. Progettato con gradienti matematici CSS per un'illuminazione fluida ideale per ${moodIt}.`,
        featuresTitle: `Vantaggi del Tema ${nameIt}`,
        features: [
          { title: "100% CSS Senza Ritardi", desc: "Realizzato con gradienti vettoriali. Si carica in 0 millisecondi con zero consumo di banda." },
          { title: `Atmosfera Ideale per ${moodIt}`, desc: "Trasforma il tuo display in una lampada decorativa uniforme per il tuo ambiente creativo." },
          { title: "Definizione Perfetta in 4K e 8K", desc: "Si adatta alla risoluzione nativa del monitor senza alcuna perdita di dettaglio." },
          { title: "Schermo Sempre Acceso (Wake Lock)", desc: "Mantiene l'illuminazione attiva senza che il monitor entri in risparmio energetico." },
        ],
        faqs: [
          { q: `A cosa serve il tema ${nameIt.toLowerCase()}?`, a: `Viene usato come sfondo d'ambiente per ${moodIt}, luce da webcam o salvaschermo rilassante.` },
          { q: "Rallenta il computer?", a: "No, il rendering CSS consuma virtualmente zero risorse di CPU e scheda video." },
          { q: "Posso usarlo su più monitor?", a: "Sì, aprilo su uno schermo secondario per un'atmosfera uniforme e confortevole." },
          { q: "Posso scaricarlo come sfondo?", a: "Certamente, usa il generatore sottostante per esportarlo in 4K o 8K." },
          { q: "È gratuito e senza pubblicità?", a: "Completamente gratuito e privo di annunci pubblicitari." },
        ],
      },
      nl: {
        title: `${nameNl} – Volledig Scherm Sfeerachtergrond in Puur CSS`,
        metaDescription: `Meeslepend ${nameNl.toLowerCase()} thema gegenereerd met lichte CSS-verlopen. Ideaal voor ${moodNl}, videobellen en focus.`,
        h1: `${nameNl} (Volledig Scherm CSS Thema)`,
        intro: `Toon een sfeervol ${nameNl.toLowerCase()} thema op je scherm zonder zware afbeeldingsbestanden. Gemaakt met wiskundige CSS-verlopen voor directe verlichting afgestemd op ${moodNl}.`,
        featuresTitle: `Voordelen van het ${nameNl} Thema`,
        features: [
          { title: "Puur CSS Zonder Laadtijd", desc: "Volledig ontworpen met vectoriële CSS-verlopen. Laadt in 0 milliseconden zonder dataverbruik." },
          { title: `Sfeer Ideaal voor ${moodNl}`, desc: "Transformeert je monitor in een rustgevende lichtbron voor je werkruimte." },
          { title: "Haarscherpe Weergave in 4K en 8K", desc: "Schaalt perfect mee met elk type beeldscherm zonder compressieverlies." },
          { title: "Scherm Blijft Continu Verlicht", desc: "Screen Wake Lock voorkomt dat je scherm in slaapstand valt." },
        ],
        faqs: [
          { q: `Waarvoor wordt het ${nameNl.toLowerCase()} thema gebruikt?`, a: `Als rustgevende achtergrond voor ${moodNl}, webcamverlichting of esthetische screensaver.` },
          { q: "Vertraagt dit mijn computer?", a: "Nee, de zuivere CSS-rendering vraagt nauwelijks rekenkracht van processor of videokaart." },
          { q: "Kan ik dit op meerdere schermen gebruiken?", a: "Ja, open het op een tweede monitor voor een harmonieuze werkplek." },
          { q: "Kan ik dit downloaden als achtergrond?", a: "Zeker, gebruik de generator hieronder om het thema in 4K of 8K te exporteren." },
          { q: "Is het gratis?", a: "Volledig gratis en zonder storende advertenties." },
        ],
      },
      pl: {
        title: `${namePl} – Pełnoekranowe Tło Nastrojowe w Czystym CSS`,
        metaDescription: `Klimatyczne tło ${namePl.toLowerCase()} oparte na lekkich gradientach CSS. Idealne do: ${moodPl}, wideorozmów i pracy.`,
        h1: `${namePl} (Pełnoekranowy Motyw CSS)`,
        intro: `Wyświetl nastrojowy motyw ${namePl.toLowerCase()} na całym ekranie bez konieczności pobierania ciężkich plików graficznych. Zbudowany z wektorowych gradientów CSS zapewnia natychmiastowe ładowanie i płynne światło sprzyjające: ${moodPl}.`,
        featuresTitle: `Zalety Motywu ${namePl}`,
        features: [
          { title: "100% Czysty CSS", desc: "Generowany matematycznie w przeglądarce. Ładuje się natychmiast bez obciążania łącza." },
          { title: `Idealna Atmosfera: ${moodPl}`, desc: "Zamienia monitor lub tablet w estetyczną lampę nastrojową do Twojego stanowiska." },
          { title: "Perfekcyjna Ostrość 4K i 8K", desc: "Automatycznie dopasowuje się do natywnej rozdzielczości ekranu bez utraty jakości." },
          { title: "Ekran Zawsze Aktywny", desc: "Wbudowana blokada Screen Wake Lock zapobiega wygaszaniu monitora." },
        ],
        faqs: [
          { q: `Do czego służy motyw ${namePl.toLowerCase()}?`, a: `Jako nastrojowe tło podczas: ${moodPl}, doświetlenie do kamery lub estetyczny wygaszacz.` },
          { q: "Czy obciąża komputer?", a: "Nie, lekki kod CSS zużywa znikome zasoby procesora i karty graficznej." },
          { q: "Czy mogę używać go na drugim monitorze?", a: "Tak, doskonale sprawdza się jako stałe źródło miękkiego światła na dodatkowym ekranie." },
          { q: "Czy można pobrać to tło jako tapetę?", a: "Tak, skorzystaj z narzędzia poniżej, aby wyeksportować grafikę w jakości 4K lub 8K." },
          { q: "Czy narzędzie jest bezpłatne?", a: "Całkowicie bezpłatne i wolne od nachalnych reklam." },
        ],
      },
      tr: {
        title: `${nameTr} – Saf CSS ile Tam Ekran Ortam Arka Planı`,
        metaDescription: `Hafif CSS gradyanlarıyla oluşturulmuş etkileyici ${nameTr.toLowerCase()} teması. ${moodTr}, video görüşmeler ve odaklanma için ideal.`,
        h1: `${nameTr} (Tam Ekran CSS Teması)`,
        intro: `Ağır resim dosyaları indirmeden ekranınızda ${nameTr.toLowerCase()} ambiyansını yaşayın. Saf CSS renk geçişleriyle tasarlanan bu tema, ${moodTr} için anında gecikmesiz aydınlatma sunar.`,
        featuresTitle: `${nameTr} Temasının Avantajları`,
        features: [
          { title: "%100 Saf CSS ile Sıfır Gecikme", desc: "Matematiksel CSS gradyanlarıyla oluşturulmuştur. Kota harcamadan anında açılır." },
          { title: `${moodTr} İçin İdeal Ambiyans`, desc: "Monitörünüzü veya tabletinizi çalışma alanınız için dinlendirici bir ışık paneline dönüştürür." },
          { title: "4K ve 8K Kusursuz Keskinlik", desc: "Bozulma veya pikselleşme olmadan ekranınızın doğal çözünürlüğüne tam uyum sağlar." },
          { title: "Ekran Sürekli Açık Kalır", desc: "Ekran Uyku Kilidi sayesinde ekranınız bekleme moduna geçmez." },
        ],
        faqs: [
          { q: `${nameTr.toLowerCase()} teması ne için kullanılır?`, a: `${moodTr}, görüntülü görüşmelerde arka plan ışığı veya dinlendirici ekran koruyucu olarak kullanılır.` },
          { q: "Bilgisayarı yavaşlatır mı?", a: "Hayır, saf CSS tarayıcı tarafından donanım hızlandırmalı olarak sıfır yük ile işlenir." },
          { q: "Birden fazla monitörde kullanabilir miyim?", a: "Evet, ikinci bir ekranda açarak odanızda dengeli ve hoş bir ışık sağlayabilirsiniz." },
          { q: "Duvar kağıdı olarak indirebilir miyim?", a: "Elbette, aşağıdaki paneli kullanarak 4K veya 8K formatında kaydedebilirsiniz." },
          { q: "Tamamen ücretsiz mi?", a: "Evet, %100 ücretsizdir ve reklam içermez." },
        ],
      },
      ja: {
        title: `${nameJa} – 全画面CSSアンビエント背景＆スクリーンツール`,
        metaDescription: `軽量なCSSグラデーションで生成された${nameJa.toLowerCase()}。${moodJa}、Web会議、作業集中に最適。`,
        h1: `${nameJa}（全画面CSSテーマ）`,
        intro: `重い画像ファイルを読み込むことなく、美しい${nameJa.toLowerCase()}を画面いっぱいに表示します。CSSグラデーション技術により、0秒で遅延なく${moodJa}の雰囲気を再現します。`,
        featuresTitle: `${nameJa}テーマの特徴`,
        features: [
          { title: "完全CSS＆画像ロードゼロ", desc: "ブラウザのCSSベクトル処理だけで描画。通信量を消費せず瞬時に表示されます。" },
          { title: `${moodJa}に最適な光`, desc: "お使いのモニターやタブレットをお部屋の落ち着いたムードライトに変えます。" },
          { title: "4K・8Kでも一切ぼやけない", desc: "画像ではないため、どんな高解像度ディスプレイでも常に最高峰のシャープネスを保ちます。" },
          { title: "画面スリープ防止対応", desc: "Screen Wake Lockにより、全画面表示中に画面が消灯することはありません。" },
        ],
        faqs: [
          { q: `${nameJa.toLowerCase()}テーマはどのような用途に使えますか？`, a: `${moodJa}、オンライン会議の背景照明、シンプルなデスクトップ演出などに活用できます。`, },
          { q: "パソコンの動作が重くなりませんか？", a: "いいえ。軽量なCSS処理のため、CPUやGPUにほとんど負荷をかけません。" },
          { q: "マルチモニターで使えますか？", a: "はい。サブディスプレイで表示しておくことで、作業空間に統一感のある快適な明かりをプラスできます。" },
          { q: "壁紙としてダウンロードできますか？", a: "はい。ページ下部のダウンロード機能から4Kや8Kの画像として保存可能です。" },
          { q: "料金はかかりますか？", a: "完全無料でお使いいただけます。広告の邪魔もありません。" },
        ],
      },
      ko: {
        title: `${nameKo} – 순수 CSS 전체화면 무드 배경 및 디스플레이 도구`,
        metaDescription: `가벼운 CSS 그라데이션으로 생성된 감각적인 ${nameKo.toLowerCase()}입니다. ${moodKo}, 화상 회의 및 집중에 이상적입니다.`,
        h1: `${nameKo} (전체화면 CSS 테마)`,
        intro: `무거운 이미지 파일 다운로드 없이 브라우저에서 아름다운 ${nameKo.toLowerCase()}을 화면 가득 느껴보세요. 순수 CSS 코드로 제작되어 트래픽 낭비 없이 ${moodKo}를 위한 빛을 즉시 연출합니다.`,
        featuresTitle: `${nameKo} 테마의 주요 장점`,
        features: [
          { title: "순수 CSS로 0초 로딩", desc: "수학적 CSS 그라데이션으로 구현되어 다운로드 시간 없이 즉시 렌더링됩니다." },
          { title: `${moodKo}에 완벽한 분위기`, desc: "모니터나 태블릿을 작업 공간을 위한 감성적인 무드 조명으로 전환합니다." },
          { title: "4K 및 8K 완벽한 선명도", desc: "비트맵 이미지가 아니므로 어떤 대형 고해상도 디스플레이에서도 화질 저하가 없습니다." },
          { title: "화면 꺼짐 방지 자동 적용", desc: "화면 꺼짐 방지(Screen Wake Lock)가 작동하여 작업 중 화면이 꺼지지 않습니다." },
        ],
        faqs: [
          { q: `${nameKo.toLowerCase()} 테마는 어디에 쓰이나요?`, a: `${moodKo}, 화상 회의 배경 보조광, 감각적인 데스크테리어 화면으로 널리 사용됩니다.` },
          { q: "컴퓨터 속도가 느려지지 않나요?", a: "전혀 그렇지 않습니다. 가벼운 CSS 속성만 사용하여 시스템 리소스를 거의 차지하지 않습니다." },
          { q: "보조 모니터에서 사용할 수 있나요?", a: "네! 서브 모니터에 전체화면으로 띄워두면 방 안의 조도 균형을 맞추는 데 훌륭합니다." },
          { q: "배경화면으로 저장할 수 있나요?", a: "네, 하단의 다운로드 영역에서 4K, 8K 무손실 이미지로 바로 다운로드할 수 있습니다." },
          { q: "무료로 이용할 수 있나요?", a: "완전 무료이며 성가신 광고나 회원가입 요구가 없습니다." },
        ],
      },
      ru: {
        title: `${nameRu} – Полноэкранный фоновый CSS-градиент и инструмент для монитора`,
        metaDescription: `Полноэкранный ${nameRu.toLowerCase()} на чистом CSS без тяжелых изображений. Идеально для ${moodRu}, видеозвонков и спокойной работы.`,
        h1: `${nameRu} (Полноэкранная CSS-тема)`,
        intro: `Наполните экран мягким фоном ${nameRu.toLowerCase()} без необходимости загружать тяжелые графические файлы. Благодаря векторным CSS-градиентам тема отображается мгновенно с частотой 60 кадров/сек для ${moodRu}.`,
        featuresTitle: `Преимущества темы «${nameRu}»`,
        features: [
          { title: "Чистый CSS без загрузки картинок", desc: "Генерируется непосредственно видеоядром браузера: моментальная загрузка без расхода трафика." },
          { title: `Идеально для: ${moodRu}`, desc: "Превращает монитор или планшет в уютный рассеянный источник света для комнаты." },
          { title: "Абсолютная четкость в 4K и 8K", desc: "Поскольку это векторная заливка, графика остается кристально четкой на любых дисплеях Retina и Ultra HD." },
          { title: "Защита от перехода в спящий режим", desc: "Функция Screen Wake Lock предотвращает автовыключение дисплея во время использования." },
        ],
        faqs: [
          { q: `Для чего лучше всего подходит тема «${nameRu.toLowerCase()}»?`, a: `Отлично подходит для ${moodRu}, мягкой подсветки лица при видеоконференциях и создания эстетичного рабочего пространства.` },
          { q: "Замедляет ли эта страница работу компьютера?", a: "Нет, чистый CSS-градиент практически не нагружает процессор и видеокарту." },
          { q: "Можно ли использовать на втором мониторе?", a: "Да! Развернув тему во весь экран на дополнительном дисплее, вы получите стильный рассеянный свет." },
          { q: "Можно ли скачать эту тему как обои?", a: "Да, на панели внизу можно мгновенно сгенерировать файл высокого разрешения вплоть до 8K без сжатия." },
          { q: "Инструмент действительно бесплатен?", a: "Да, сервис полностью бесплатен, не содержит рекламы и не требует регистрации." },
        ],
      },
    },
  };
}

export const ALL_THEMES: ThemeDefinition[] = [
  buildTheme('sky-background', 'linear-gradient(180deg, #2980b9 0%, #6dd5fa 60%, #ffffff 100%)', '#ffffff', { en: 'Sky Background', es: 'Fondo de Cielo', fr: 'Fond Ciel', de: 'Himmel-Hintergrund', pt: 'Fondo de Céu', id: 'Latar Belakang Langit' }, 'daytime freshness and blue sky inspiration', 'frescura diurna e inspiración de cielo azul', 'fraîcheur matinale et inspiration ciel ouvert', 'Tagesfrische und Weitblick', 'frescor diurno e inspiração de céu aberto', 'kesegaran siang hari dan suasana langit biru'),
  buildTheme('gradient-background', 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', '#ffffff', { en: 'Gradient Background', es: 'Fondo Degradado', fr: 'Fond Dégradé', de: 'Farbverlauf-Hintergrund', pt: 'Fundo Degradê', id: 'Latar Belakang Gradasi' }, 'modern visual aesthetics and creative design focus', 'estética visual moderna y diseño creativo', 'esthétique moderne et créativité visuelle', 'moderne Ästhetik und kreatives Schaffen', 'estética moderna e foco visual criativo', 'estetika modern dan fokus desain kreatif'),
  buildTheme('space-background', 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)', '#ffffff', { en: 'Space Background', es: 'Fondo Espacial', fr: 'Fond Espace', de: 'Weltraum-Hintergrund', pt: 'Fundo Espacial', id: 'Latar Belakang Luar Angkasa' }, 'cosmic deep focus and nighttime immersion', 'inmersión nocturna y concentración cósmica', 'immersion nocturne et concentration profonde', 'kosmische Tiefe und nächtliche Konzentration', 'imersão noturna e concentração profunda', 'fokus malam hari dan ketenangan luar angkasa'),
  buildTheme('forest-background', 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)', '#ffffff', { en: 'Forest Background', es: 'Fondo de Bosque', fr: 'Fond Forêt', de: 'Wald-Hintergrund', pt: 'Fundo de Floresta', id: 'Latar Belakang Hutan' }, 'natural botanical calm and anti-stress focus', 'calma botánica y reducción de estrés', 'calme végétal et sérénité anti-stress', 'botanische Ruhe und Stressabbau', 'calma natural e redução de estresse', 'ketenangan alami dan pereda stres'),
  buildTheme('fire-background', 'linear-gradient(180deg, #f12711 0%, #f5af19 100%)', '#ffffff', { en: 'Fire Background', es: 'Fondo de Fuego', fr: 'Fond Feu', de: 'Feuer-Hintergrund', pt: 'Fundo de Fogo', id: 'Latar Belakang Api' }, 'warm energizing flame illumination and cozy room vibes', 'calidez de fuego energizante y ambiente acogedor', 'chaleur stimulante et ambiance coin du feu', 'wärmende Flammenstimmung und Gemütlichkeit', 'calor energizante e clima aconchegante', 'kehangatan api yang berenergi dan nyaman'),
  buildTheme('wood-background', 'linear-gradient(135deg, #3e2723 0%, #5d4037 50%, #4e342e 100%)', '#ffffff', { en: 'Wood Background', es: 'Fondo de Madera', fr: 'Fond Bois', de: 'Holz-Hintergrund', pt: 'Fundo de Madeira', id: 'Latar Belakang Kayu' }, 'organic earthy warmth and acoustic studio ambiance', 'calidez orgánica terrosa y ambiente acústico', 'chaleur organique et ambiance studio acoustique', 'organische Wärme und rustikales Studioflair', 'calor orgânico terroso e ambiente de estúdio', 'nuansa kayu alami dan kehangatan ruang'),
  buildTheme('water-background', 'linear-gradient(180deg, #00c6ff 0%, #0072ff 100%)', '#ffffff', { en: 'Water Background', es: 'Fondo de Agua', fr: 'Fond Eau', de: 'Wasser-Hintergrund', pt: 'Fundo de Água', id: 'Latar Belakang Air' }, 'refreshing aquatic clarity and mental calmness', 'claridad acuática refrescante y paz mental', 'clarté aquatique et sérénité mentale', 'erfrischende Wasserklarheit und mentale Ruhe', 'clareza aquática refrescante e tranquilidade mental', 'kesegaran air dan ketenangan pikiran'),
  buildTheme('paper-background', 'linear-gradient(180deg, #fdfbf7 0%, #ebedee 100%)', '#000000', { en: 'Paper Background', es: 'Fondo de Papel', fr: 'Fond Papier', de: 'Papier-Hintergrund', pt: 'Fundo de Papel', id: 'Latar Belakang Kertas' }, 'minimalist parchment paper reading and glare-free writing', 'lectura en textura pergamino sin reflejos', 'lecture type parchemin et écriture sans reflets', 'blendfreies Lesen wie auf feinstem Papier', 'leitura confortável estilo pergaminho sem reflexos', 'suasana membaca selembut kertas tanpa silau'),
  buildTheme('city-background', 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)', '#ffffff', { en: 'City Background', es: 'Fondo de Ciudad', fr: 'Fond Ville', de: 'Stadt-Hintergrund', pt: 'Fundo de Cidade', id: 'Latar Belakang Kota' }, 'urban sleek productivity and modern tech backdrop', 'productividad urbana moderna y estilo tecnológico', 'productivité urbaine moderne et ambiance technologique', 'urbane Produktivität und moderne Technologie-Ästhetik', 'produtividade urbana e estilo tecnológico moderno', 'produktivitas perkotaan modern dan nuansa teknologi'),
  buildTheme('ocean-background', 'linear-gradient(180deg, #0f2027 0%, #203a43 50%, #2c5364 100%)', '#ffffff', { en: 'Ocean Background', es: 'Fondo de Océano', fr: 'Fond Océan', de: 'Ozean-Hintergrund', pt: 'Fundo de Oceano', id: 'Latar Belakang Samudra' }, 'deep sea tranquility and meditative workspace lighting', 'tranquilidad marina profunda y luz meditativa', 'quiétude des grands fonds marins et lumière méditative', 'Tiefsee-Ruhe und meditative Beleuchtung', 'tranquilidade do fundo do mar e iluminação meditativa', 'kedamaian laut dalam dan pencahayaan meditatif'),
  buildTheme('galaxy-background', 'linear-gradient(135deg, #000428 0%, #004e92 100%)', '#ffffff', { en: 'Galaxy Background', es: 'Fondo de Galaxia', fr: 'Fond Galaxie', de: 'Galaxie-Hintergrund', pt: 'Fundo de Galáxia', id: 'Latar Belakang Galaksi' }, 'celestial contemplation and starry night mood', 'contemplación celeste y noche estrellada', 'contemplation céleste et atmosphère de nuit étoilée', 'himmliche Weite und funkelnde Nachtstimmung', 'contemplação cósmica e clima de noite estrelada', 'keindahan kosmik dan suasana malam berbintang'),
  buildTheme('sunset-background', 'linear-gradient(180deg, #ff7e5f 0%, #feb47b 100%)', '#ffffff', { en: 'Sunset Background', es: 'Fondo de Atardecer', fr: 'Fond Coucher de Soleil', de: 'Sonnenuntergang-Hintergrund', pt: 'Fundo de Pôr do Sol', id: 'Latar Belakang Matahari Terbenam' }, 'golden dusk tranquility and evening unwind relaxation', 'tranquilidad dorada del atardecer y relajación nocturna', 'douceur du crépuscule et relaxation de fin de journée', 'goldene Abenddämmerung und behagliches Entspannen', 'tranquilidade dourada do entardecer e relaxamento noturno', 'ketenangan senja keemasan untuk melepas lelah sore hari'),
  buildTheme('silver-background', 'linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)', '#ffffff', { en: 'Silver Background', es: 'Fondo Plateado', fr: 'Fond Argenté', de: 'Silber-Hintergrund', pt: 'Fundo Prateado', id: 'Latar Belakang Perak' }, 'sleek metallic minimalism and industrial design elegance', 'minimalismo metálico elegante y diseño industrial', 'minimalisme métallique épuré et design industriel', 'metallischer Minimalismus und edles Industriedesign', 'minimalismo metálico elegante e design industrial', 'minimalisme logam elegan dan desain modern'),
  buildTheme('snow-background', 'linear-gradient(180deg, #e6dada 0%, #274046 100%)', '#ffffff', { en: 'Snow Background', es: 'Fondo de Nieve', fr: 'Fond Neige', de: 'Schnee-Hintergrund', pt: 'Fundo de Neve', id: 'Latar Belakang Salju' }, 'crisp winter freshness and clean alpine atmosphere', 'frescura invernal alpina y pureza blanca', 'fraîcheur hivernale pure et ambiance alpine vivifiante', 'klare Winterfrische und alpine Reinheit', 'frescor do inverno alpino e ar puro', 'kesegaran salju musim dingin dan udara bersih'),
  buildTheme('carbon-fiber-background', 'radial-gradient(black 15%, transparent 16%) 0 0, radial-gradient(black 15%, transparent 16%) 8px 8px, radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px, radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px; background-color:#282828; background-size:16px 16px', '#ffffff', { en: 'Carbon Fiber Background', es: 'Fondo de Fibra de Carbono', fr: 'Fond Fibre de Carbone', de: 'Carbon-Hintergrund', pt: 'Fundo de Fibra de Carbono', id: 'Latar Belakang Serat Karbon' }, 'high-tech automotive textures and stealth gaming mood', 'textura automotriz de alta tecnología y estilo sigiloso', 'texture automobile high-tech et ambiance furtive', 'High-Tech-Sportwagenoptik und Stealth-Gaming-Flair', 'textura automotiva de alta tecnologia e estilo discreto', 'tekstur teknologi tinggi bergaya otomotif dan gaming'),
  buildTheme('concrete-background', 'linear-gradient(135deg, #d3cbb8 0%, #6d6027 100%)', '#ffffff', { en: 'Concrete Background', es: 'Fondo de Hormigón', fr: 'Fond Béton', de: 'Beton-Hintergrund', pt: 'Fundo de Concreto', id: 'Latar Belakang Beton' }, 'brutalist architectural textures and urban studio styling', 'arquitectura brutalista moderna y estilo de estudio urbano', 'esthétique brutaliste architecturale et style urbain', 'brutalistische Architektur-Ästhetik und urbanes Flair', 'estética arquitetônica brutalista e estilo moderno', 'estetika arsitektur brutalist dan gaya studio urban')
];

export function getThemeById(id: string): ThemeDefinition | undefined {
  return ALL_THEMES.find(t => t.id === id);
}
