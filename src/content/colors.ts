import type { LanguageCode } from '../i18n/config';

export interface ColorFAQ {
  q: string;
  a: string;
}

export interface LocalizedColorContent {
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  useCasesTitle: string;
  useCases: Array<{ title: string; desc: string }>;
  deepDiveHeadings: Array<{ title: string; paragraphs: string[] }>;
  faqs: ColorFAQ[];
}

export interface ColorDefinition {
  id: string;
  hex: string;
  rgb: string;
  contrastText: '#000000' | '#ffffff';
  names: Record<LanguageCode, string>;
  content: Record<LanguageCode, LocalizedColorContent>;
}

// Helper to generate consistent, rich 600+ word copy per color
export const COLOR_META_PL_TR: Record<string, { plName: string; trName: string; usePl: string; useTr: string }> = {
  "white-screen": {
    "plName": "Biały",
    "trName": "Beyaz",
    "usePl": "czyszczenia monitora, testu pikseli, oświetlenia wideo i kalkowania",
    "useTr": "ekran temizleme, ölü piksel testi, kamera ışığı ve çizim masası"
  },
  "black-screen": {
    "plName": "Czarny",
    "trName": "Siyah",
    "usePl": "testu ekranów OLED, oszczędzania baterii i odpoczynku",
    "useTr": "OLED ekran testi, pil tasarrufu, uyku ve piksel tespiti"
  },
  "blue-screen": {
    "plName": "Niebieski",
    "trName": "Mavi",
    "usePl": "kalibracji subpikseli LCD, oświetlenia nocnego i relaksu",
    "useTr": "LCD alt piksel kalibrasyonu, gece ışığı ve ortam aydınlatması"
  },
  "green-screen": {
    "plName": "Zielony",
    "trName": "Yeşil",
    "usePl": "tła chroma key do streamingu i produkcji wideo",
    "useTr": "yayın ve video prodüksiyonu için yeşil ekran (chroma key)"
  },
  "red-screen": {
    "plName": "Czerwony",
    "trName": "Kırmızı",
    "usePl": "ochrony widzenia nocnego, astronomii i ciemni fotograficznej",
    "useTr": "gece görüşünü koruma, astronomi ve karanlık oda"
  },
  "yellow-screen": {
    "plName": "Żółty",
    "trName": "Sarı",
    "usePl": "czytania o wysokim kontraście i ciepłego oświetlenia",
    "useTr": "yüksek görünürlüklü okuma ışığı ve sıcak ortam aydınlatması"
  },
  "orange-screen": {
    "plName": "Pomarańczowy",
    "trName": "Turuncu",
    "usePl": "symulacji zachodu słońca i ochrony rytmu dobowego",
    "useTr": "gün batımı simülasyonu ve sirkadiyen ritim koruması"
  },
  "pink-screen": {
    "plName": "Różowy",
    "trName": "Pembe",
    "usePl": "delikatnego światła upiększającego do portretów i makijażu",
    "useTr": "portreler için yumuşak güzellik ışığı ve estetik aydınlatma"
  },
  "purple-screen": {
    "plName": "Fioletowy",
    "trName": "Mor",
    "usePl": "kreatywnego oświetlenia do streamingu i nastrojowego tła",
    "useTr": "yayınlar için yaratıcı ortam ışığı ve estetik arka plan"
  },
  "gold-screen": {
    "plName": "Złoty",
    "trName": "Altın",
    "usePl": "ciepłego oświetlenia odcieni skóry i fotografii golden hour",
    "useTr": "sıcak cilt tonu aydınlatması ve altın saat fotoğrafçılığı"
  },
  "light-blue-screen": {
    "plName": "Jasnoniebieski",
    "trName": "Açık Mavi",
    "usePl": "symulacji dziennego nieba i orzeźwiającego światła do pracy",
    "useTr": "gündüz gökyüzü simülasyonu ve zindelik veren çalışma ışığı"
  },
  "brown-screen": {
    "plName": "Brązowy",
    "trName": "Kahverengi",
    "usePl": "ciepłego matowego tła i przytulnej atmosfery bez odblasków",
    "useTr": "parlamayan sıcak toprak tonu arka plan ve stüdyo ortamı"
  },
  "grey-screen": {
    "plName": "Szary",
    "trName": "Gri",
    "usePl": "wzorca 18% szarości do kalibracji balansu bieli w aparatach",
    "useTr": "fotoğraf makinelerinde beyaz ayarı ve pozlama için %18 gri kart"
  },
  "neon-screen": {
    "plName": "Neonowy",
    "trName": "Neon",
    "usePl": "sprawdzania maksymalnej luminancji matrycy i sygnalizacji",
    "useTr": "maksimum panel parlaklığı kontrolü ve yüksek görünürlüklü sinyal"
  },
  "olive-screen": {
    "plName": "Oliwkowy",
    "trName": "Zeytin Yeşili",
    "usePl": "dyskretnego oświetlenia taktycznego i łagodnego zielonego światła",
    "useTr": "hafif taktik aydınlatma ve göz yormayan yeşil ışık"
  },
  "coral-screen": {
    "plName": "Koralowy",
    "trName": "Mercan",
    "usePl": "korzystnego oświetlenia twarzy podczas rozmów wideo",
    "useTr": "web kamerası için yüzü aydınlatan sıcak ve canlı ışık"
  },
  "navy-screen": {
    "plName": "Granatowy",
    "trName": "Lacivert",
    "usePl": "wysokokontrastowego tła do pracy nocnej bez rozpraszania",
    "useTr": "gece odaklanması için dikkat dağıtmayan koyu kontrastlı arka plan"
  },
  "mint-screen": {
    "plName": "Miętowy",
    "trName": "Nane Yeşili",
    "usePl": "ulgi dla zmęczonych oczu i relaksującego światła na biurku",
    "useTr": "yorgun gözleri dinlendirme ve ferahlatıcı masa aydınlatması"
  },
  "aqua-screen": {
    "plName": "Akwamaryna",
    "trName": "Su Yeşili",
    "usePl": "efektu odbicia wody i żywego tła w odcieniu cyjanu",
    "useTr": "su yansıması simülasyonu ve canlı camgöbeği arka plan"
  },
  "teal-screen": {
    "plName": "Morski",
    "trName": "Petrol Mavisi",
    "usePl": "kinowego kontrastu barwnego i nowoczesnej estetyki stoiska",
    "useTr": "sinematik renk kontrastı ve modern video stüdyosu ambiyansı"
  },
  "cream-screen": {
    "plName": "Kremowy",
    "trName": "Krem",
    "usePl": "miękkiego światła pergaminowego do czytania bez zmęczenia wzroku",
    "useTr": "göz yormayan yumuşak parşömen tonlu okuma ışığı"
  },
  "beige-screen": {
    "plName": "Beżowy",
    "trName": "Bej",
    "usePl": "neutralnego ciepłego tła do minimalistycznych prezentacji",
    "useTr": "minimalist sunumlar için nötr ve sıcak arka plan"
  },
  "lavender-screen": {
    "plName": "Lawendowy",
    "trName": "Lavanta",
    "usePl": "kojącego światła przed snem i wieczornego wyciszenia",
    "useTr": "uyku öncesi rahatlama ve huzurlu gece aydınlatması"
  },
  "cyan-screen": {
    "plName": "Cyjan",
    "trName": "Camgöbeği",
    "usePl": "energetycznego oświetlenia i wyrazistego akcentu wideo",
    "useTr": "enerjik stüdyo aydınlatması ve canlı video arka planı"
  },
  "maroon-screen": {
    "plName": "Bordowy",
    "trName": "Bordo",
    "usePl": "ciemnoczerwonego światła do ciemni fotograficznej i nocy",
    "useTr": "karanlık oda ve gece göz konforu için koyu kırmızı ışık"
  },
  "violet-screen": {
    "plName": "Fiołkowy",
    "trName": "Menekşe",
    "usePl": "neonowego klimatu i kreatywnego oświetlenia fotografii stołowej",
    "useTr": "canlı neon atmosferi ve yaratıcı masaüstü fotoğraf ışığı"
  }
};

export const COLOR_META_JA_KO: Record<string, { jaName: string; koName: string; useJa: string; useKo: string }> = {
  "white-screen": {
    "jaName": "白い",
    "koName": "하얀색",
    "useJa": "画面のホコリ掃除、ドット抜けテスト、Zoom用照明、トレース台",
    "useKo": "모니터 청소, 불량화소 테스트, 화상회의 조명 및 트레이싱"
  },
  "black-screen": {
    "jaName": "黒い",
    "koName": "검은색",
    "useJa": "OLEDディスプレイのテスト、バッテリー節約、睡眠と休息",
    "useKo": "OLED 디스플레이 테스트, 배터리 절약, 수면 및 불량화소 검출"
  },
  "blue-screen": {
    "jaName": "青い",
    "koName": "파란색",
    "useJa": "LCDサブピクセル検査、夜間アンビエント照明、リラックス",
    "useKo": "LCD 서브픽셀 검사, 야간 무드등 및 편안한 분위기 조성"
  },
  "green-screen": {
    "jaName": "緑の",
    "koName": "초록색",
    "useJa": "動画配信や合成用クロマキー（グリーンバック）背景",
    "useKo": "영상 제작 및 스트리밍을 위한 크로마키 합성 배경"
  },
  "red-screen": {
    "jaName": "赤い",
    "koName": "빨간색",
    "useJa": "暗所視力（暗順応）の維持、天体観測、写真の暗室作業",
    "useKo": "야간 암순응 유지, 천체 관측 및 사진 암실 작업"
  },
  "yellow-screen": {
    "jaName": "黄色い",
    "koName": "노란색",
    "useJa": "高コントラストな読書灯や温かみのある間接照明",
    "useKo": "고대비 독서 조명 및 따뜻한 실내 분위기 연출"
  },
  "orange-screen": {
    "jaName": "オレンジ",
    "koName": "주황색",
    "useJa": "夕日シミュレーションやブルーライトを抑えた体内時計ケア",
    "useKo": "일몰 시뮬레이션 및 생체 리듬 보호를 위한 저자극 조명"
  },
  "pink-screen": {
    "jaName": "ピンク",
    "koName": "핑크색",
    "useJa": "ポートレート撮影やメイク用の柔らかな美肌フェイスライト",
    "useKo": "인물 사진 촬영 및 메이크업을 위한 화사한 피부톤 조명"
  },
  "purple-screen": {
    "jaName": "紫の",
    "koName": "보라색",
    "useJa": "配信用のクリエイティブなムード照明やスタイリッシュな背景",
    "useKo": "스트리밍을 위한 감각적인 분위기 조명 및 배경 연출"
  },
  "gold-screen": {
    "jaName": "ゴールド",
    "koName": "골드",
    "useJa": "肌を温かく照らすゴールデンアワー風の高級ライティング",
    "useKo": "따뜻한 골든 아워 인물 사진 및 고급스러운 분위기 조명"
  },
  "light-blue-screen": {
    "jaName": "水色",
    "koName": "하늘색",
    "useJa": "青空シミュレーションと午前中の集中力を高める爽やかな光",
    "useKo": "맑은 하늘 시뮬레이션 및 아침 집중력을 높이는 상쾌한 조명"
  },
  "brown-screen": {
    "jaName": "茶色",
    "koName": "갈색",
    "useJa": "反射を抑えた温かみのあるアースカラーのスタジオ背景",
    "useKo": "눈부심이 적은 차분한 어스톤 배경 및 아늑한 스튜디오 무드"
  },
  "grey-screen": {
    "jaName": "グレー",
    "koName": "회색",
    "useJa": "カメラのホワイトバランス調整と露出設定用18%標準グレー",
    "useKo": "카메라 화이트 밸런스 보정 및 노출 측정을 위한 18% 표준 그레이"
  },
  "neon-screen": {
    "jaName": "ネオン",
    "koName": "네온",
    "useJa": "ディスプレイの最大輝度チェックと高い視認性のシグナル",
    "useKo": "패널 최대 밝기 테스트 및 고시인성 시각 신호"
  },
  "olive-screen": {
    "jaName": "オリーブ",
    "koName": "올리브색",
    "useJa": "眩しさを抑えた落ち着いたタクティカルグリーン照明",
    "useKo": "자극이 적은 차분한 그린 톤의 전술적 조명"
  },
  "coral-screen": {
    "jaName": "コーラル",
    "koName": "코랄",
    "useJa": "Webカメラで顔色を健康的に見せる温かい美顔ライト",
    "useKo": "웹캠 화상회의에서 얼굴 생기를 더해주는 화사한 조명"
  },
  "navy-screen": {
    "jaName": "ネイビー",
    "koName": "네이비",
    "useJa": "夜間の作業に集中できる高コントラストで落ち着いた暗色背景",
    "useKo": "야간 작업 시 눈 피로를 덜어주는 고대비 다크 배경"
  },
  "mint-screen": {
    "jaName": "ミント",
    "koName": "민트색",
    "useJa": "目の疲れを癒やしデスク周りを爽やかに照らすリフレッシュ光",
    "useKo": "피로한 눈을 쉬게 하고 데스크를 상쾌하게 비추는 조명"
  },
  "aqua-screen": {
    "jaName": "アクア",
    "koName": "아쿠아",
    "useJa": "水面のきらめき効果と鮮やかなシアンブルーの演出光",
    "useKo": "물결 반사 시뮬레이션 및 청량한 시안 블루 배경"
  },
  "teal-screen": {
    "jaName": "ティール",
    "koName": "청록색",
    "useJa": "映画のようなカラーグレーディングと洗練されたスタジオ背景",
    "useKo": "시네마틱 색감 연출 및 감각적인 스튜디오 배경"
  },
  "cream-screen": {
    "jaName": "クリーム",
    "koName": "크림색",
    "useJa": "羊皮紙のような優しい光で目の疲れを抑える長時間の読書灯",
    "useKo": "양피지처럼 부드러운 빛으로 눈 피로를 줄이는 독서 조명"
  },
  "beige-screen": {
    "jaName": "ベージュ",
    "koName": "베이지색",
    "useJa": "ミニマルなデザインやモックアップに最適な温かみのあるニュートラル背景",
    "useKo": "미니멀한 디자인과 프레젠테이션을 위한 따뜻한 뉴트럴 배경"
  },
  "lavender-screen": {
    "jaName": "ラベンダー",
    "koName": "라벤더",
    "useJa": "就寝前のリラックスと穏やかな入眠を促すナイトライト",
    "useKo": "취침 전 긴장을 완화하고 편안한 수면을 돕는 은은한 조명"
  },
  "cyan-screen": {
    "jaName": "シアン",
    "koName": "시안",
    "useJa": "エネルギッシュな高輝度ブルーグリーン光と鮮明なアクセント",
    "useKo": "에너지 넘치는 밝은 청록색 빛과 역동적인 영상 배경"
  },
  "maroon-screen": {
    "jaName": "マルーン",
    "koName": "마룬",
    "useJa": "暗室作業や夜間の目の負担を最小限に抑える深い赤色光",
    "useKo": "암실 작업 및 야간 시각 보호를 위한 깊은 붉은색 조명"
  },
  "violet-screen": {
    "jaName": "バイオレット",
    "koName": "바이올렛",
    "useJa": "鮮やかなネオンの雰囲気とクリエイティブな物撮り用ライティング",
    "useKo": "선명한 네온 무드 및 창의적인 소품 사진 촬영 조명"
  }
};

function buildColorCopy(
  colorId: string,
  hex: string,
  rgb: string,
  enName: string,
  esName: string,
  frName: string,
  deName: string,
  ptName: string,
  idName: string,
  primaryUseEn: string,
  primaryUseEs: string,
  primaryUseFr: string,
  primaryUseDe: string,
  primaryUsePt: string,
  primaryUseId: string,
  itName: string = enName,
  nlName: string = enName,
  primaryUseIt: string = primaryUseEn,
  primaryUseNl: string = primaryUseEn
): ColorDefinition {
  const metaPlTr = COLOR_META_PL_TR[colorId] || { plName: enName, trName: enName, usePl: primaryUseEn, useTr: primaryUseEn };
  const plName = metaPlTr.plName;
  const trName = metaPlTr.trName;
  const primaryUsePl = metaPlTr.usePl;
  const primaryUseTr = metaPlTr.useTr;
  const metaJaKo = COLOR_META_JA_KO[colorId] || { jaName: enName, koName: enName, useJa: primaryUseEn, useKo: primaryUseEn };
  const jaName = metaJaKo.jaName;
  const koName = metaJaKo.koName;
  const primaryUseJa = metaJaKo.useJa;
  const primaryUseKo = metaJaKo.useKo;

  return {
    id: colorId,
    hex,
    rgb,
    contrastText: ['#ffffff', '#fff', '#ffff00', '#00ffff', '#fffdd0', '#f5f5dc', '#e6e6fa', '#98ff98', '#ff7f50', '#ffd700', '#39ff14'].some(c => c.toLowerCase() === hex.toLowerCase()) ? '#000000' : '#ffffff',
    names: {
      en: enName,
      es: esName,
      fr: frName,
      de: deName,
      pt: ptName,
      id: idName,
      it: itName,
      nl: nlName,
      pl: plName,
      tr: trName,
      ja: jaName,
      ko: koName,
    },
    content: {
      en: {
        title: `${enName} Screen – Fullscreen ${enName} Background & Display Tool`,
        metaDescription: `Instant fullscreen ${enName.toLowerCase()} screen online tool. Ideal for ${primaryUseEn}, display testing, ambient lighting, and high-res wallpaper downloads.`,
        h1: `${enName} Screen (Fullscreen Display Tool)`,
        intro: `Display a clean, pure ${enName.toLowerCase()} screen (${hex}) at full brightness across your entire monitor, tablet, or smartphone. Whether you need ${enName.toLowerCase()} illumination for ${primaryUseEn}, technical pixel calibration, or a distraction-free digital backdrop, our browser tool provides instantaneous, ad-free full-screen output without software installation.`,
        useCasesTitle: `Practical Applications for a ${enName} Screen`,
        useCases: [
          {
            title: "Display Testing & Visual Calibration",
            desc: `Filling your display with a single solid field of ${enName.toLowerCase()} (${rgb}) allows you to inspect sub-pixel responsiveness, identify uneven backlight distribution, and check for panel uniformity issues across edge and center zones.`,
          },
          {
            title: `Specialized Lighting & ${primaryUseEn}`,
            desc: `Your monitor or tablet becomes a dedicated soft lightbox emitting a uniform, glare-free beam of ${enName.toLowerCase()} light. This is widely used in desktop setups, studio photography, and creative videography.`,
          },
          {
            title: "Distraction-Free Minimalist Backdrop",
            desc: `Hide cluttered desktop icons, browser tabs, and notification panels. A fullscreen ${enName.toLowerCase()} canvas provides an immaculate backdrop for focus work, video calls, or aesthetic studio backgrounds.`,
          },
          {
            title: "Hardware & Surface Inspection",
            desc: `The high luminous contrast of ${enName.toLowerCase()} makes physical dust motes, smudges, and micro-scratches immediately detectable across anti-glare, matte, and glossy display coatings.`,
          },
        ],
        deepDiveHeadings: [
          {
            title: `Why Use an Online Fullscreen ${enName} Screen?`,
            paragraphs: [
              `Operating system screensavers and static graphic files often introduce compression artifacts, gradients, or OS interface overlays that disrupt critical display checks. Our online ${enName.toLowerCase()} screen engine renders directly inside your browser canvas using native 32-bit sRGB color profiles, ensuring 100% color accuracy from corner to corner.`,
              `By tapping into the HTML5 Fullscreen API with automatic Screen Wake Lock integration, your device stays illuminated continuously at your desired brightness level without entering sleep mode or triggering power-saving dimming.`,
            ],
          },
          {
            title: `Optimizing ${enName} Lighting in Workspace Environments`,
            paragraphs: [
              `Positioning a secondary monitor or tablet displaying ${enName.toLowerCase()} light alongside your primary workspace introduces balanced ambient fill illumination. This reduces eye fatigue by softening the harsh contrast between high-luminance active windows and dim surrounding room environments.`,
              `For mobile creators, holding a smartphone or iPad displaying a pure ${enName.toLowerCase()} screen creates a portable light modifier for macro photography, product unboxings, and subtle facial rim lighting during webcam calls.`,
            ],
          },
          {
            title: "Download High-Resolution Solid Wallpapers",
            paragraphs: [
              `Need this exact shade offline? Our integrated client-side canvas generator lets you export lossless PNG, JPG, and WEBP wallpaper files in standard 1080p Full HD, 2K QHD, 4K UHD, 5K Retina, and 8K Ultra HD resolutions with zero compression artifacts.`,
            ],
          },
        ],
        faqs: [
          {
            q: `What is a ${enName.toLowerCase()} screen used for?`,
            a: `A ${enName.toLowerCase()} screen is primarily used for ${primaryUseEn}, display sub-pixel calibration, photography lighting, and creating a distraction-free ambient glow on computers and mobile devices.`,
          },
          {
            q: `How do I make my entire screen ${enName.toLowerCase()}?`,
            a: `Click the 'Go Fullscreen' button or tap anywhere on the preview canvas. Your browser will instantly maximize the ${enName.toLowerCase()} display and hide all tabs and toolbars. Press ESC to exit.`,
          },
          {
            q: `What are the exact digital color codes for this ${enName.toLowerCase()} screen?`,
            a: `This screen displays HEX color code ${hex} with decimal RGB coordinates of ${rgb}.`,
          },
          {
            q: `Will my screen turn off or go to sleep while in fullscreen?`,
            a: `No. Our application automatically requests a Screen Wake Lock in supported modern browsers, keeping your screen active continuously until you close the tab or exit fullscreen.`,
          },
          {
            q: `Can I download this ${enName.toLowerCase()} background in 4K or 8K?`,
            a: `Yes! Scroll down to the wallpaper section to download lossless PNG, WEBP, or JPG wallpapers rendered in 1080p, 2K, 4K, 5K, 8K, mobile, or square resolutions.`,
          },
        ],
      },

      es: {
        title: `Pantalla ${esName} – Fondo ${esName} Completo y Herramienta de Monitor`,
        metaDescription: `Herramienta de pantalla ${esName.toLowerCase()} completa en línea. Ideal para ${primaryUseEs}, calibración de pantalla, iluminación y descarga de fondos en 4K.`,
        h1: `Pantalla ${esName} (Herramienta de Pantalla Completa)`,
        intro: `Muestra una pantalla ${esName.toLowerCase()} pura (${hex}) con brillo total en tu monitor, tableta o smartphone. Ya sea que necesites luz ${esName.toLowerCase()} para ${primaryUseEs}, verificación de píxeles o un fondo sin distracciones, nuestra herramienta web te brinda pantalla completa al instante sin instalar nada.`,
        useCasesTitle: `Usos Prácticos de una Pantalla ${esName}`,
        useCases: [
          {
            title: "Pruebas de Pantalla y Calibración Visual",
            desc: `Llenar tu pantalla con un campo sólido de color ${esName.toLowerCase()} (${rgb}) permite inspeccionar la respuesta de subpíxeles, detectar fugas de luz y comprobar la uniformidad del panel.`,
          },
          {
            title: `Iluminación Especializada y ${primaryUseEs}`,
            desc: `Tu monitor o tableta se convierte en una caja de luz suave que emite iluminación uniforme sin reflejos para fotografía, videollamadas y trabajo creativo.`,
          },
          {
            title: "Fondo Minimalista sin Distracciones",
            desc: `Oculta iconos, pestañas y notificaciones con un fondo ${esName.toLowerCase()} limpio para concentrarte al máximo o personalizar tu espacio de trabajo.`,
          },
          {
            title: "Inspección de Polvo y Superficies",
            desc: `El contraste luminoso resalta de inmediato motas de polvo, huellas dactilares y manchas en pantallas mates o brillantes.`,
          },
        ],
        deepDiveHeadings: [
          {
            title: `¿Por Qué Usar una Pantalla ${esName} en Línea?`,
            paragraphs: [
              `Las imágenes estáticas y protectores de pantalla a menudo incluyen gradientes o artefactos de compresión. Nuestra herramienta genera el color puro en el navegador en espacio sRGB de 32 bits para garantizar uniformidad perfecta de esquina a esquina.`,
              `Gracias a la integración de la API de Pantalla Completa y Bloqueo de Suspensión (Wake Lock), tu monitor permanecerá encendido continuamente sin entrar en reposo.`,
            ],
          },
          {
            title: `Optimización de Luz ${esName} en el Espacio de Trabajo`,
            paragraphs: [
              `Colocar una pantalla secundaria con luz ${esName.toLowerCase()} equilibra la iluminación ambiental, reduciendo la fatiga ocular ocasionada por el contraste con habitaciones oscuras.`,
              `Para creadores móviles, usar un teléfono o tableta con pantalla ${esName.toLowerCase()} sirve como difusor de luz portátil para fotos macro o videollamadas.`,
            ],
          },
          {
            title: "Descarga de Fondos en Alta Definición",
            paragraphs: [
              `¿Necesitas este color sin conexión? Usa nuestro generador para descargar archivos PNG, JPG y WEBP en resoluciones Full HD, 2K, 4K, 5K y 8K sin pérdida de calidad.`,
            ],
          },
        ],
        faqs: [
          {
            q: `¿Para qué se utiliza una pantalla ${esName.toLowerCase()}?`,
            a: `Se utiliza para ${primaryUseEs}, calibración de monitores, iluminación en fotografía y creación de un ambiente de trabajo libre de distracciones.`,
          },
          {
            q: `¿Cómo pongo mi pantalla totalmente ${esName.toLowerCase()}?`,
            a: `Haz clic en el botón 'Pantalla Completa' o toca el área de vista previa. El navegador ocultará automáticamente todas las barras y menús. Presiona ESC para salir.`,
          },
          {
            q: `¿Cuáles son los códigos de color exactos de esta pantalla?`,
            a: `Esta pantalla utiliza el código HEX ${hex} y las coordenadas RGB decimales ${rgb}.`,
          },
          {
            q: `¿Se apagará mi pantalla mientras esté en modo completo?`,
            a: `No. Nuestra aplicación activa el bloqueo de suspensión en navegadores compatibles para mantener la pantalla siempre encendida.`,
          },
          {
            q: `¿Puedo descargar este fondo en resolución 4K u 8K?`,
            a: `¡Sí! Desplázate a la sección de descargas para obtener imágenes PNG, WEBP o JPG en 1080p, 2K, 4K, 5K, 8K y formato móvil.`,
          },
        ],
      },

      fr: {
        title: `Écran ${frName} – Fond ${frName} Plein Écran et Outil d'Affichage`,
        metaDescription: `Outil écran ${frName.toLowerCase()} plein écran gratuit en ligne. Parfait pour ${primaryUseFr}, test de pixels, éclairage doux et téléchargement de fonds d'écran 4K.`,
        h1: `Écran ${frName} (Outil Plein Écran)`,
        intro: `Affichez un écran ${frName.toLowerCase()} pur (${hex}) à luminosité maximale sur votre moniteur, tablette ou smartphone. Que vous cherchiez un éclairage pour ${primaryUseFr}, un étalonnage de pixels ou un fond sans distraction, notre utilitaire web vous offre un affichage plein écran instantané sans aucun téléchargement requis.`,
        useCasesTitle: `Applications Pratiques d'un Écran ${frName}`,
        useCases: [
          {
            title: "Test d'Écran et Étalonnage Visuel",
            desc: `Afficher une surface monochrome ${frName.toLowerCase()} (${rgb}) permet de vérifier la réactivité des sous-pixels, de déceler les fuites de rétroéclairage et d'examiner l'uniformité de la dalle.`,
          },
          {
            title: `Éclairage Spécifique et ${primaryUseFr}`,
            desc: `Votre écran devient une source lumineuse douce et homogène, sans scintillement, très appréciée pour la photographie, la visio et les projets créatifs.`,
          },
          {
            title: "Arrière-Plan Épuré et Concentration",
            desc: `Masquez le désordre du bureau, les fenêtres actives et les notifications pour créer un espace de travail propice à la concentration profonde.`,
          },
          {
            title: "Inspection des Saletés et Poussières",
            desc: `Le contraste lumineux met immédiatement en évidence la poussière, les traces de doigts et les micro-rayures sur les revêtements mats ou brillants.`,
          },
        ],
        deepDiveHeadings: [
          {
            title: `Pourquoi Utiliser un Écran ${frName} en Ligne ?`,
            paragraphs: [
              `Les images téléchargées ou économiseurs d'écran intègrent souvent de la compression ou des dégradés parasites. Notre outil génère la teinte pure en sRGB 32 bits dans votre navigateur pour une précision colorimétrique sans faille.`,
              `Grâce à l'API Fullscreen et au verrouillage de veille (Wake Lock), votre écran reste allumé en continu sans interruption.`,
            ],
          },
          {
            title: `Optimisation de la Lumière ${frName} au Travail`,
            paragraphs: [
              `Un écran secondaire diffusant une lumière ${frName.toLowerCase()} diffuse un éclairage d'appoint qui soulage la fatigue oculaire dans les pièces sombres.`,
              `Sur mobile ou tablette, l'écran ${frName.toLowerCase()} devient une boîte à lumière portative pour vos prises de vue macro ou vos appels vidéo.`,
            ],
          },
          {
            title: "Téléchargement d'Images en Haute Résolution",
            paragraphs: [
              `Vous avez besoin de ce fond hors ligne ? Utilisez notre outil de téléchargement intégré pour exporter des fichiers PNG, JPG et WEBP en 1080p, 2K, 4K, 5K et 8K.`,
            ],
          },
        ],
        faqs: [
          {
            q: `À quoi sert un écran ${frName.toLowerCase()} ?`,
            a: `Il sert notamment à ${primaryUseFr}, au contrôle des pixels défectueux, à l'éclairage de prise de vue et à la création d'un fond de travail épuré.`,
          },
          {
            q: `Comment mettre mon écran totalement ${frName.toLowerCase()} ?`,
            a: `Cliquez sur le bouton 'Passer en Plein Écran' ou touchez la fenêtre de prévisualisation. Appuyez sur Échap pour quitter le plein écran.`,
          },
          {
            q: `Quels sont les codes couleur exacts de cet écran ?`,
            a: `Cette page affiche le code HEX ${hex} et les valeurs RVB décimales ${rgb}.`,
          },
          {
            q: `Mon écran risque-t-il de se mettre en veille ?`,
            a: `Non. Notre application active le verrouillage de veille sur les navigateurs compatibles pour maintenir l'écran actif en continu.`,
          },
          {
            q: `Puis-je télécharger ce fond d'écran en 4K ou 8K ?`,
            a: `Oui ! Rendez-vous dans la section de téléchargement pour obtenir des images nettes en formats PNG, WEBP ou JPG en 1080p, 2K, 4K, 5K et 8K.`,
          },
        ],
      },

      de: {
        title: `${deName} Bildschirm – Vollbild ${deName} Hintergrund & Display-Tool`,
        metaDescription: `Kostenloser Vollbild-${deName.toLowerCase()}-Bildschirm online. Perfekt für ${primaryUseDe}, Display-Kalibrierung, Videobeleuchtung und 4K Wallpaper-Downloads.`,
        h1: `${deName} Bildschirm (Vollbild Display Tool)`,
        intro: `Stellen Sie einen absolut reinen ${deName.toLowerCase()}en Bildschirm (${hex}) mit voller Helligkeit auf Ihrem Monitor, Tablet oder Smartphone dar. Ob für ${primaryUseDe}, Pixelfehlertests oder als blendfreie Lichtquelle – unser Online-Tool bietet sofortige Vollbildanzeige ohne Software-Installation.`,
        useCasesTitle: `Praktische Anwendungsbereiche für einen ${deName}en Bildschirm`,
        useCases: [
          {
            title: "Monitor-Prüfung & Visuelle Kalibrierung",
            desc: `Eine homogene Fläche in ${deName.toLowerCase()} (${rgb}) erleichtert die Inspektion von Subpixeln, das Erkennen von Lichthöfen (Backlight Bleed) und die Überprüfung der Panelausleuchtung.`,
          },
          {
            title: `Spezialisierte Ausleuchtung & ${primaryUseDe}`,
            desc: `Verwandeln Sie Ihren Bildschirm in ein blendfreies Leuchtpanel für Fotografie, Videocalls und kreative Beleuchtungseffekte.`,
          },
          {
            title: "Ablenkungsfreier Minimalistischer Arbeitsbereich",
            desc: `Blenden Sie störende Symbole, Taskleisten und Benachrichtigungen aus, um eine beruhigende Arbeitsumgebung zu schaffen.`,
          },
          {
            title: "Erkennung von Staub & Display-Verschmutzung",
            desc: `Durch den hohen Kontrast treten Staubkörnchen, Fingerabdrücke und Schlieren auf matten wie glänzenden Oberflächen sofort zutage.`,
          },
        ],
        deepDiveHeadings: [
          {
            title: `Warum ein Online-Tool für ${deName}en Bildschirm nutzen?`,
            paragraphs: [
              `Statische Bilddateien oder Bildschirmschoner weisen oft Kompressionsartefakte auf. Unser Browser-Tool rendert das reine Farbfeld im nativen sRGB-Farbraum mit 32-Bit Farbtiefe direkt auf der Canvas.`,
              `Die integrierte Wake-Lock-API sorgt dafür, dass Ihr Display während der Nutzung dauerhaft aktiv bleibt und nicht in den Ruhezustand wechselt.`,
            ],
          },
          {
            title: `Optimierung der ${deName}en Beleuchtung am Schreibtisch`,
            paragraphs: [
              `Ein Zweitbildschirm mit ${deName.toLowerCase()}er Beleuchtung sorgt für eine angenehme Hintergrundaufhellung, die den harten Kontrast im abgedunkelten Raum mildert und die Augen schont.`,
              `Auf Tablets und Smartphones entsteht so eine flexible Softbox für Makroaufnahmen oder weiche Porträtausleuchtung vor der Webcam.`,
            ],
          },
          {
            title: "Hochauflösende Hintergründe Herunterladen",
            paragraphs: [
              `Sie möchten diesen Farbton offline nutzen? Nutzen Sie unseren integrierten Download-Bereich für verlustfreie PNG-, JPG- und WEBP-Dateien in 1080p, 2K, 4K, 5K und 8K.`,
            ],
          },
        ],
        faqs: [
          {
            q: `Wofür wird ein ${deName.toLowerCase()}er Bildschirm verwendet?`,
            a: `Hauptsächlich für ${primaryUseDe}, zur Monitor-Kalibrierung, als weiches Fotolicht und zur Schaffung einer ruhigen, ablenkungsfreien Arbeitsfläche.`,
          },
          {
            q: `Wie aktiviere ich den Vollbildmodus in ${deName.toLowerCase()}?`,
            a: `Klicken Sie einfach auf 'Vollbild Aktivieren' oder tippen Sie auf die Vorschaufläche. Mit der ESC-Taste kehren Sie jederzeit zurück.`,
          },
          {
            q: `Welche Farbwerte hat dieser Bildschirm?`,
            a: `Das Display nutzt den HEX-Farbcode ${hex} sowie die dezimalen RGB-Werte ${rgb}.`,
          },
          {
            q: `Schaltet sich mein Monitor während der Nutzung ab?`,
            a: `Nein. In modernen Browsern verhindert die automatische Wake-Lock-Schnittstelle das Abschalten des Displays.`,
          },
          {
            q: `Kann ich diesen Hintergrund in 4K oder 8K herunterladen?`,
            a: `Ja! Im Download-Bereich stehen hochauflösende Wallpaper in PNG, WEBP und JPG in 1080p bis 8K zur Verfügung.`,
          },
        ],
      },

      pt: {
        title: `Tela ${ptName} – Fundo ${ptName} em Tela Cheia e Utilitário de Monitor`,
        metaDescription: `Ferramenta online gratuita de tela ${ptName.toLowerCase()} cheia. Ideal para ${primaryUsePt}, teste de pixels, iluminação suave e download de papéis de parede 4K.`,
        h1: `Tela ${ptName} (Ferramenta em Tela Cheia)`,
        intro: `Exiba uma tela ${ptName.toLowerCase()} pura (${hex}) com brilho máximo no seu monitor, tablet ou celular. Seja para ${primaryUsePt}, inspeção de pixels ou fundo livre de distrações, nossa ferramenta online oferece tela cheia instantânea sem downloads ou cadastros.`,
        useCasesTitle: `Aplicações Práticas de uma Tela ${ptName}`,
        useCases: [
          {
            title: "Testes de Display e Calibração Visual",
            desc: `Cobrir o monitor com uma cor sólida ${ptName.toLowerCase()} (${rgb}) permite verificar a resposta dos subpixels, detectar vazamentos de luz e examinar a uniformidade do painel.`,
          },
          {
            title: `Iluminação Especial e ${primaryUsePt}`,
            desc: `Seu monitor vira um painel de luz suave e uniforme para fotos de produtos, transmissões ao vivo e iluminação facial em videochamadas.`,
          },
          {
            title: "Espaço de Trabalho Minimalista e Foco",
            desc: `Oculte ícones e notificações com uma tela limpa, ideal para aumentar a concentração ou criar um clima agradável no ambiente.`,
          },
          {
            title: "Detecção de Poeira e Marcas no Vidro",
            desc: `O contraste brilhante revela imediatamente marcas de dedos, manchas de gordura e poeira acumulada na tela do computador.`,
          },
        ],
        deepDiveHeadings: [
          {
            title: `Por Que Usar uma Tela ${ptName} Online?`,
            paragraphs: [
              `Imagens estáticas salvas costumam conter artefatos de compressão ou gradientes. Nosso motor web renderiza a cor pura em espaço de cores sRGB de 32 bits com fidelidade visual total.`,
              `Com a API Fullscreen e o bloqueio de suspensão automático (Wake Lock), seu visor permanece aceso continuamente sem escurecer ou entrar em repouso.`,
            ],
          },
          {
            title: `Otimizando a Luz ${ptName} no Escritório`,
            paragraphs: [
              `Usar um monitor secundário emitindo luz ${ptName.toLowerCase()} equilibra a luminosidade ambiente, diminuindo o cansaço visual causado pelo contraste com quartos escuros.`,
              `No celular ou tablet, transforma-se em um iluminador portátil para fotos macro ou luz de apoio para chamadas no Zoom.`,
            ],
          },
          {
            title: "Download de Papéis de Parede em Alta Resolução",
            paragraphs: [
              `Deseja usar essa cor offline? Nosso gerador permite baixar arquivos PNG, JPG e WEBP em Full HD, 2K, 4K, 5K e 8K sem compressão.`,
            ],
          },
        ],
        faqs: [
          {
            q: `Para que serve uma tela ${ptName.toLowerCase()}?`,
            a: `Ela é utilizada para ${primaryUsePt}, calibração de monitores, iluminação de fotos e eliminação de distrações visuais no computador.`,
          },
          {
            q: `Como colocar minha tela totalmente ${ptName.toLowerCase()}?`,
            a: `Basta clicar no botão 'Tela Cheia' ou tocar na janela de pré-visualização. Pressione a tecla ESC para sair a qualquer instante.`,
          },
          {
            q: `Quais são as especificações exatas dessa cor?`,
            a: `Esta tela utiliza o código HEX ${hex} e os valores RGB decimais ${rgb}.`,
          },
          {
            q: `Meu computador vai suspender ou apagar a tela?`,
            a: `Não. O sistema ativa o bloqueio de suspensão para manter a tela sempre acesa durante a exibição em tela cheia.`,
          },
          {
            q: `Posso baixar esse papel de parede em 4K ou 8K?`,
            a: `Sim! Acesse a seção de downloads para baixar imagens nítidas em PNG, WEBP ou JPG nas resoluções 1080p até 8K.`,
          },
        ],
      },

      id: {
        title: `Layar ${idName} – Latar Belakang ${idName} Layar Penuh & Alat Monitor`,
        metaDescription: `Alat layar ${idName.toLowerCase()} penuh online gratis. Sangat cocok untuk ${primaryUseId}, uji piksel monitor, pencahayaan video call, dan unduhan wallpaper 4K.`,
        h1: `Layar ${idName} (Alat Tampilan Layar Penuh)`,
        intro: `Tampilkan layar ${idName.toLowerCase()} murni (${hex}) dengan kecerahan penuh di monitor PC, laptop, tablet, atau smartphone Anda. Baik untuk keperluan ${primaryUseId}, pengujian piksel rusak, atau latar belakang kerja yang bersih tanpa gangguan, alat web kami menyediakan mode layar penuh seketika tanpa perlu unduh aplikasi.`,
        useCasesTitle: `Kegunaan Praktis Layar ${idName}`,
        useCases: [
          {
            title: "Uji Panel Layar dan Kalibrasi Visual",
            desc: `Mengisi layar dengan warna polos ${idName.toLowerCase()} (${rgb}) memudahkan pemeriksaan respon sub-piksel, mendeteksi kebocoran cahaya latar (backlight bleed), dan menguji keseragaman warna panel.`,
          },
          {
            title: `Pencahayaan Khusus dan ${primaryUseId}`,
            desc: `Monitor Anda berfungsi layaknya softbox digital yang memancarkan cahaya lembut bebas silau untuk fotografi produk, live streaming, dan rapat video call.`,
          },
          {
            title: "Latar Belakang Minimalis Bebas Gangguan",
            desc: `Sembunyikan ikon desktop yang berantakan dan bilah notifikasi dengan tampilan polos untuk membantu Anda fokus belajar atau bekerja.`,
          },
          {
            title: "Pemeriksaan Debu dan Noda Layar",
            desc: `Cahaya yang seragam membuat partikel debu, bekas sidik jari, dan noda minyak pada layar LCD, OLED, atau LED terlihat dengan sangat jelas.`,
          },
        ],
        deepDiveHeadings: [
          {
            title: `Mengapa Menggunakan Layar ${idName} Online?`,
            paragraphs: [
              `File gambar atau screensaver sering kali memiliki degradasi warna atau artefak kompresi. Alat kami merender warna murni dalam ruang sRGB 32-bit langsung di peramban Anda untuk memastikan akurasi 100%.`,
              `Dengan dukungan Screen Wake Lock API, layar Anda akan tetap menyala terus-menerus tanpa masuk ke mode tidur atau meredup otomatis.`,
            ],
          },
          {
            title: `Mengoptimalkan Pencahayaan ${idName} di Ruang Kerja`,
            paragraphs: [
              `Menempatkan monitor kedua dengan warna ${idName.toLowerCase()} memberikan pencahayaan pengisi yang seimbang, mengurangi ketegangan mata akibat kontras ruangan gelap.`,
              `Pada tablet atau ponsel pintar, layar ini dapat dimanfaatkan sebagai lampu portable untuk foto makro dan pencahayaan wajah saat webcam.`,
            ],
          },
          {
            title: "Unduh Wallpaper Resolusi Tinggi",
            paragraphs: [
              `Perlu warna ini saat offline? Manfaatkan fitur unduhan kanvas kami untuk menyimpan file PNG, JPG, dan WEBP dalam resolusi 1080p, 2K, 4K, 5K, dan 8K tanpa kompresi.`,
            ],
          },
        ],
        faqs: [
          {
            q: `Untuk apa layar ${idName.toLowerCase()} digunakan?`,
            a: `Layar ${idName.toLowerCase()} umumnya digunakan untuk ${primaryUseId}, kalibrasi layar monitor, pencahayaan foto, dan menciptakan latar belakang kerja yang bersih.`,
          },
          {
            q: `Bagaimana cara mengubah seluruh layar menjadi ${idName.toLowerCase()}?`,
            a: `Cukup klik tombol 'Layar Penuh' atau ketuk area tampilan. Peramban akan menyembunyikan semua tab dan taskbar. Tekan ESC untuk keluar.`,
          },
          {
            q: `Berapa kode warna digital layar ini?`,
            a: `Layar ini menampilkan kode warna HEX ${hex} dengan nilai desimal RGB ${rgb}.`,
          },
          {
            q: `Apakah layar akan otomatis mati atau tidur saat digunakan?`,
            a: `Tidak. Sistem secara otomatis mengaktifkan Screen Wake Lock agar layar Anda tetap menyala terus selama dalam mode layar penuh.`,
          },
          {
            q: `Apakah saya bisa mengunduh wallpaper ini dalam resolusi 4K atau 8K?`,
            a: `Ya! Buka bagian unduhan untuk mengunduh gambar beresolusi Full HD, 2K, 4K, 5K, dan 8K dalam format PNG, WEBP, atau JPG.`,
          },
        ],
      },

      it: {
        title: `Schermo ${itName} – Sfondo ${itName} Completo e Strumento Monitor`,
        metaDescription: `Strumento online per schermo ${itName.toLowerCase()} a schermo intero. Ideale per ${primaryUseIt}, calibrazione monitor e sfondi in 4K.`,
        h1: `Schermo ${itName} (Strumento a Schermo Intero)`,
        intro: `Mostra uno schermo ${itName.toLowerCase()} puro (${hex}) a piena luminosità sul tuo monitor, tablet o smartphone. Che tu abbia bisogno di luce ${itName.toLowerCase()} per ${primaryUseIt}, verifica dei pixel o uno sfondo senza distrazioni, il nostro strumento web ti offre schermo intero istantaneo senza installare nulla.`,
        useCasesTitle: `Applicazioni Pratiche di uno Schermo ${itName}`,
        useCases: [
          {
            title: "Test del Display e Calibrazione Visiva",
            desc: `Riempire lo schermo con un campo solido di colore ${itName.toLowerCase()} (${rgb}) consente di ispezionare la risposta dei sub-pixel e verificare l'uniformità del pannello.`,
          },
          {
            title: `Illuminazione Specializzata e ${primaryUseIt}`,
            desc: `Il tuo monitor o tablet si trasforma in un softbox uniforme che emette luce antiriflesso per fotografia e videochiamate.`,
          },
          {
            title: "Sfondo Minimalista Senza Distrazioni",
            desc: `Nascondi icone, schede e notifiche con uno sfondo pulito ${itName.toLowerCase()} per concentrarti al massimo.`,
          },
          {
            title: "Ispezione di Polvere e Superfici",
            desc: `L'alto contrasto luminoso fa risaltare subito particelle di polvere, impronte e aloni su display lucidi o opachi.`,
          },
        ],
        deepDiveHeadings: [
          {
            title: `Perché Usare uno Schermo ${itName} Online?`,
            paragraphs: [
              `I file grafici statici e gli screensaver spesso contengono gradienti o artefatti di compressione. Il nostro strumento genera il colore puro nel browser nello spazio colore sRGB a 32 bit per garantire uniformità perfetta da bordo a bordo.`,
              `Grazie all'API Fullscreen e all'integrazione Screen Wake Lock, il display rimane acceso continuamente al livello di luminosità desiderato senza andare in sospensione.`,
            ],
          },
          {
            title: `Ottimizzazione della Luce ${itName} nell'Ambiente di Lavoro`,
            paragraphs: [
              `Posizionare un secondo monitor con luce ${itName.toLowerCase()} ammorbidisce il contrasto della stanza, riducendo l'affaticamento visivo durante lunghe ore di lavoro.`,
              `Per i creator mobile, uno smartphone o tablet con schermo ${itName.toLowerCase()} funge da softbox portatile per macrofotografia o illuminazione da webcam.`,
            ],
          },
          {
            title: "Download Sfondi in Alta Risoluzione",
            paragraphs: [
              `Vuoi usare questa tonalità offline? Usa il nostro generatore per salvare sfondi PNG, JPG e WEBP lossless in 1080p, 2K, 4K, 5K e 8K.`,
            ],
          },
        ],
        faqs: [
          {
            q: `A cosa serve uno schermo ${itName.toLowerCase()}?`,
            a: `Viene utilizzato per ${primaryUseIt}, calibrazione dei display, illuminazione per foto e video e come sfondo rilassante.`,
          },
          {
            q: `Come imposto lo schermo intero ${itName.toLowerCase()}?`,
            a: `Fai clic sul pulsante 'Schermo Intero' o tocca l'area di anteprima. Premi ESC per uscire.`,
          },
          {
            q: `Quali sono i codici esatti di questo schermo ${itName.toLowerCase()}?`,
            a: `Questo schermo ha codice colore HEX ${hex} e coordinate RGB decimali ${rgb}.`,
          },
          {
            q: `Lo schermo andrà in stand-by durante la visualizzazione?`,
            a: `No. L'applicazione richiede il blocco di sospensione (Wake Lock) per mantenere il monitor attivo costantemente.`,
          },
          {
            q: `Posso scaricare questo sfondo ${itName.toLowerCase()} in 4K o 8K?`,
            a: `Certamente! Scorri fino alla sezione download per salvare l'immagine nella risoluzione desiderata senza compressione.`,
          },
        ],
      },

      nl: {
        title: `${nlName} Scherm – Volledig ${nlName} Achtergrond & Display Tool`,
        metaDescription: `Directe online tool voor een volledig ${nlName.toLowerCase()} scherm. Ideaal voor ${primaryUseNl}, schermkalibratie, verlichting en 4K downloads.`,
        h1: `${nlName} Scherm (Volledig Scherm Tool)`,
        intro: `Toon een zuiver ${nlName.toLowerCase()} scherm (${hex}) op volle helderheid over je gehele monitor, tablet of smartphone. Of je nu ${nlName.toLowerCase()} licht nodig hebt voor ${primaryUseNl}, pixeltests of een rustige achtergrond, onze browser-tool biedt direct volledig scherm zonder downloads.`,
        useCasesTitle: `Praktische Toepassingen voor een ${nlName} Scherm`,
        useCases: [
          {
            title: "Displaytests en Visuele Kalibratie",
            desc: `Door je scherm te vullen met een egaal ${nlName.toLowerCase()} kleurvlak (${rgb}) kun je subpixel-reactietijden controleren en schermuniformiteit inspecteren.`,
          },
          {
            title: `Gespecialiseerde Verlichting en ${primaryUseNl}`,
            desc: `Je monitor of tablet verandert in een zachte lichtbak die gelijkmatig, ontspiegeld ${nlName.toLowerCase()} licht uitstraalt voor fotografie en videobellen.`,
          },
          {
            title: "Afleidingsvrije Minimalistische Achtergrond",
            desc: `Verberg drukke bureaubladpictogrammen en meldingen met een strak ${nlName.toLowerCase()} scherm om optimaal te focussen.`,
          },
          {
            title: "Stof- en Scherminformatie Inspectie",
            desc: `Het sterke lichtcontrast maakt stofjes, vingerafdrukken en vlekken op matte en glanzende schermen direct zichtbaar.`,
          },
        ],
        deepDiveHeadings: [
          {
            title: `Waarom een Online Volledig ${nlName} Scherm Gebruiken?`,
            paragraphs: [
              `Statische afbeeldingsbestanden bevatten vaak compressieverliezen of kleurverlopen. Onze browser-tool genereert de pure kleur rechtstreeks in 32-bits sRGB voor 100% kleurechtheid van hoek tot hoek.`,
              `Dankzij de HTML5 Fullscreen API en automatische Screen Wake Lock integratie blijft je scherm continu actief zonder in de slaapstand te vallen.`,
            ],
          },
          {
            title: `Optimalisatie van ${nlName} Licht in je Werkruimte`,
            paragraphs: [
              `Een tweede scherm met zacht ${nlName.toLowerCase()} licht verzacht het contrast met een donkere kamer en vermindert vermoeide ogen aanzienlijk.`,
              `Voor mobiele makers is een tablet of smartphone met een ${nlName.toLowerCase()} scherm een handige draagbare lichtbron voor productfoto's en webcamverlichting.`,
            ],
          },
          {
            title: "Download Hoge Resolutie Effen Achtergronden",
            paragraphs: [
              `Wil je deze tint offline bewaren? Gebruik onze generator om lossless PNG, JPG en WEBP achtergronden te downloaden in 1080p, 2K, 4K, 5K en 8K.`,
            ],
          },
        ],
        faqs: [
          {
            q: `Waarvoor wordt een ${nlName.toLowerCase()} scherm gebruikt?`,
            a: `Het wordt gebruikt voor ${primaryUseNl}, schermkalibratie, verlichting bij fotografie en een afleidingsvrije werkomgeving.`,
          },
          {
            q: `Hoe maak ik mijn hele scherm ${nlName.toLowerCase()}?`,
            a: `Klik op de knop 'Volledig Scherm' of tik op het voorbeeldvenster. Druk op ESC om weer af te sluiten.`,
          },
          {
            q: `Wat zijn de exacte kleurcodes van dit ${nlName.toLowerCase()} scherm?`,
            a: `Dit scherm heeft HEX-kleurcode ${hex} en decimale RGB-waarden van ${rgb}.`,
          },
          {
            q: `Gaat mijn scherm op zwart of in slaapstand in volledig scherm?`,
            a: `Nee. Onze tool activeert automatisch een Screen Wake Lock zodat je display continu verlicht blijft.`,
          },
          {
            q: `Kan ik deze ${nlName.toLowerCase()} achtergrond downloaden in 4K of 8K?`,
            a: `Ja! Blader naar beneden om haarscherpe PNG-, WEBP- of JPG-afbeeldingen op te slaan in de gewenste resolutie.`,
          },
        ],
      },
      pl: {
        title: `${plName} Ekran – Pełnoekranowe Narzędzie i Jednolite Tło`,
        metaDescription: `Czysty ${plName.toLowerCase()} ekran online w trybie pełnoekranowym. Idealny do: ${primaryUsePl}, kalibracji monitora i tapet 4K.`,
        h1: `${plName} Ekran (Narzędzie Pełnoekranowe)`,
        intro: `Wyświetl jednolity ${plName.toLowerCase()} ekran (${hex}) z maksymalną jasnością na monitorze komputera, tablecie lub smartfonie. Niezależnie od tego, czy potrzebujesz światła do: ${primaryUsePl}, testowania matrycy czy tła bez rozpraszaczy, nasza aplikacja działa od razu w przeglądarce bez instalowania dodatkowego oprogramowania.`,
        useCasesTitle: `Praktyczne Zastosowania: ${plName} Ekran`,
        useCases: [
          {
            title: "Test Wyświetlacza i Weryfikacja Subpikseli",
            desc: `Wypełnienie całej matrycy jednolitym kolorem ${plName.toLowerCase()} (${rgb}) pozwala dokładnie ocenić równomierność podświetlenia i sprawność pikseli.`,
          },
          {
            title: `Oświetlenie do Kamery i ${primaryUsePl}`,
            desc: `Wykorzystaj monitor jako bezodblaskowe źródło rozproszonego światła do rozmów wideo, portretów i pracy kreatywnej.`,
          },
          {
            title: "Minimalistyczne Tło Bez Rozpraszaczy",
            desc: `Ukryj ikony pulpitu, karty i powiadomienia, tworząc czyste środowisko pracy sprzyjające skupieniu.`,
          },
          {
            title: "Wykrywanie Kurzu i Zabrudzeń Matrycy",
            desc: `Maksymalna jasność ułatwia natychmiastowe zlokalizowanie kurzu, odcisków palców i smug na powierzchni ekranu.`,
          },
        ],
        deepDiveHeadings: [
          {
            title: `Dlaczego Warto Wybrać Pełnoekranowy ${plName} Ekran Online?`,
            paragraphs: [
              `Statyczne pliki graficzne często zawierają artefakty kompresji lub niepożądane gradienty. Nasze narzędzie generuje czysty kolor programowo w 32-bitowej przestrzeni sRGB, zapewniając 100% jednolitości od krawędzi do krawędzi.`,
              `Dzięki obsłudze HTML5 Fullscreen API oraz blokadzie uśpienia Screen Wake Lock Twój wyświetlacz pozostaje stale aktywny bez wygaszania.`,
            ],
          },
          {
            title: `Optymalne Wykorzystanie Światła w Przestrzeni Pracy`,
            paragraphs: [
              `Ustawienie drugiego monitora z kolorem ${plName.toLowerCase()} redukuje kontrast ze zbyt ciemnym otoczeniem, zmniejszając zmęczenie wzroku.`,
              `W warunkach mobilnych smartfon lub tablet z kolorem ${plName.toLowerCase()} doskonale zastępuje przenośną lampę do zdjęć produktowych.`,
            ],
          },
          {
            title: "Pobieranie Tapet w Najwyższej Rozdzielczości",
            paragraphs: [
              `Chcesz zapisać ten odcień na dysku? Skorzystaj z poniższego panelu, aby pobrać bezstratne tapety PNG, WEBP i JPG w jakości 1080p, 2K, 4K, 5K oraz 8K.`,
            ],
          },
        ],
        faqs: [
          {
            q: `Do czego służy ${plName.toLowerCase()} ekran?`,
            a: `Jest używany do: ${primaryUsePl}, kalibracji monitora, oświetlenia wideo i tworzenia estetycznego tła.`,
          },
          {
            q: `Jak włączyć pełny ekran dla tego koloru?`,
            a: `Kliknij przycisk 'Pełny Ekran' lub dotknij okna podglądu. Aby wyjść, naciśnij klawisz ESC.`,
          },
          {
            q: `Jakie są dokładne parametry barwne tego ekranu?`,
            a: `Kolor ma kod HEX ${hex} oraz wartości dziesiętne RGB ${rgb}.`,
          },
          {
            q: `Czy ekran wyłączy się automatycznie podczas używania?`,
            a: `Nie. Nasza aplikacja automatycznie aktywuje Screen Wake Lock, zapobiegając wygaszeniu monitora.`,
          },
          {
            q: `Czy mogę pobrać tę tapetę w rozdzielczości 4K lub 8K?`,
            a: `Tak! W sekcji pobierania możesz zapisać grafikę w formacie PNG, WEBP lub JPG w wybranej rozdzielczości.`,
          },
        ],
      },
      tr: {
        title: `${trName} Ekran – Tam Ekran Monitör ve Saf Renk Aracı`,
        metaDescription: `Çevrimiçi saf ${trName.toLowerCase()} tam ekran aracı. ${primaryUseTr}, ekran testi ve 4K duvar kağıtları için %100 ücretsiz.`,
        h1: `${trName} Ekran (Tam Ekran Aracı)`,
        intro: `Monitörünüzde, tabletinizde veya telefonunuzda saf ${trName.toLowerCase()} ekranı (${hex}) tam parlaklıkta görüntüleyin. İster ${primaryUseTr} için homojen ışığa, ister piksel kontrolüne veya dikkat dağıtmayan bir arka plana ihtiyacınız olsun, tarayıcı tabanlı aracımız anında tam ekran sağlar.`,
        useCasesTitle: `${trName} Ekranın Pratik Kullanım Alanları`,
        useCases: [
          {
            title: "Ekran Testi ve Alt Piksel Denetimi",
            desc: `Tüm paneli saf ${trName.toLowerCase()} (${rgb}) rengiyle kaplamak, alt piksellerin tepkisini ve panel homojenliğini net biçimde görmenizi sağlar.`,
          },
          {
            title: `Özel Aydınlatma ve ${primaryUseTr}`,
            desc: `Ekranınız, görüntülü görüşmeler veya fotoğraf çekimleri için yumuşak ve parlamasız bir ışık kutusuna dönüşür.`,
          },
          {
            title: "Dikkat Dağıtmayan Sade Çalışma Alanı",
            desc: `Masaüstü simgelerini, bildirimleri ve sekmeleri gizleyerek konsantrasyonu artıran sade bir atmosfer oluşturun.`,
          },
          {
            title: "Yüzey Tozu ve Leke Tespiti",
            desc: `Homojen parlak ışık, ekran camı üzerindeki toz zerreciklerini ve parmak izlerini anında görünür kılar.`,
          },
        ],
        deepDiveHeadings: [
          {
            title: `Neden Çevrimiçi ${trName} Ekran Aracını Tercih Etmelisiniz?`,
            paragraphs: [
              `Statik resim dosyalarında sıkıştırma bozulmaları veya renk geçişleri olabilir. Aracımız saf rengi 32-bit sRGB renk uzayında doğrudan tarayıcıda oluşturarak köşeden köşeye kusursuz homojenlik sunar.`,
              `HTML5 Tam Ekran API'si ve Ekran Uyku Kilidi (Screen Wake Lock) sayesinde monitörünüz kapanmadan veya kararmadan sürekli açık kalır.`,
            ],
          },
          {
            title: `Çalışma Alanında ${trName} Işık Optimizasyonu`,
            paragraphs: [
              `İkinci bir monitörde ${trName.toLowerCase()} ekran açmak oda kontrastını yumuşatarak göz yorgunluğunu belirgin şekilde azaltır.`,
              `Mobil kullanıcılar için akıllı telefon veya tablet, ürün çekimleri veya web kamerası için taşınabilir bir ışık paneline dönüşür.`,
            ],
          },
          {
            title: "Yüksek Çözünürlüklü Düz Renk Duvar Kağıdı İndirme",
            paragraphs: [
              `Bu rengi çevrimdışı kullanmak ister misiniz? 1080p, 2K, 4K, 5K ve 8K çözünürlüklerde kayıpsız PNG, WEBP ve JPG formatlarında indirin.`,
            ],
          },
        ],
        faqs: [
          {
            q: `${trName} ekran ne için kullanılır?`,
            a: `${primaryUseTr}, monitör kalibrasyonu, video aydınlatması ve dinlendirici arka plan için yaygın olarak kullanılır.`,
          },
          {
            q: `Nasıl tam ekran yapabilirim?`,
            a: `'Tam Ekran' butonuna tıklayın veya önizleme penceresine dokunun. Çıkmak için klavyeden ESC tuşuna basın.`,
          },
          {
            q: `Bu ekranın tam renk kodları nelerdir?`,
            a: `Bu ekran HEX ${hex} koduna ve RGB ${rgb} sayısal değerlerine sahiptir.`,
          },
          {
            q: `Kullanım sırasında ekran otomatik olarak kapanır mı?`,
            a: `Hayır. Ekran Uyku Kilidi (Screen Wake Lock) teknolojisi sayesinde tam ekranda ekranınız sürekli açık kalır.`,
          },
          {
            q: `Bu arka planı 4K veya 8K olarak indirebilir miyim?`,
            a: `Evet! İndirme bölümünden PNG, WEBP veya JPG formatında yüksek çözünürlükte kaydedebilirsiniz.`,
          },
        ],
      },
      ja: {
        title: `${jaName}画面 – 全画面${jaName}背景＆ディスプレイツール`,
        metaDescription: `オンラインで使える全画面${jaName}画面ツール。${primaryUseJa}、モニターテスト、4K壁紙の保存に最適。`,
        h1: `${jaName}画面（全画面表示ツール）`,
        intro: `モニターやタブレット、スマートフォン全体に鮮やかな${jaName}画面（${hex}）を最大輝度で表示します。${primaryUseJa}、ピクセルチェック、集中できるシンプルな背景として、ブラウザ上でインストール不要ですぐに使えます。`,
        useCasesTitle: `${jaName}画面の実用的な活用シーン`,
        useCases: [
          {
            title: "ディスプレイの点検と視覚テスト",
            desc: `画面全体を単色（${rgb}）で表示することで、ドット抜けや輝点、バックライトの光漏れ、色ムラを瞬時に見つけることができます。`,
          },
          {
            title: `専用照明と${primaryUseJa}`,
            desc: `お使いの画面を均一な面光源として活用し、チラつきのないソフトな光で写真撮影やWeb会議を明るく照らします。`,
          },
          {
            title: "作業に集中できるミニマル背景",
            desc: `デスクトップのアイコンやタスクバー、通知を隠し、視覚的なノイズのない落ち着いた作業環境を作ります。`,
          },
          {
            title: "画面のホコリ・汚れのチェック",
            desc: `均一な明るい背景を表示することで、表面の微細なホコリや指紋の汚れがはっきりと見え、安全にクリーニングできます。`,
          },
        ],
        deepDiveHeadings: [
          {
            title: `なぜオンラインの${jaName}画面ツールが選ばれるのか？`,
            paragraphs: [
              `ダウンロードした静止画像やスクリーンセーバーには圧縮ノイズや意図しないグラデーションが含まれることがあります。当ツールはブラウザ内で32ビットsRGB色空間の純粋なカラーコードを生成するため、端から端まで完璧に均一です。`,
              `HTML5 Fullscreen APIとScreen Wake Lock APIに対応しており、作業中に画面が勝手に暗くなったりスリープに入る心配がありません。`,
            ],
          },
          {
            title: "デスク環境における最適なライティング活用",
            paragraphs: [
              `サブモニターに${jaName}画面を表示しておくことで、部屋の明暗差を和らげ長時間のパソコン作業による目の疲れを軽減します。`,
              `スマートフォンやタブレットを簡易的な撮影用ライトボックスとして使い、小物のマクロ撮影などに活用することもできます。`,
            ],
          },
          {
            title: "高解像度壁紙の無料ダウンロード",
            paragraphs: [
              `オフラインでもこのカラーを使用したい場合は、下のダウンロードエリアから1080p、2K、4K、5K、8KのPNG、WEBP、JPG形式でロスレス保存できます。`,
            ],
          },
        ],
        faqs: [
          {
            q: `${jaName}画面はどのような用途に使われますか？`,
            a: `${primaryUseJa}、液晶モニターの点検、Webカメラ用補助光、シンプルなデスクトップ背景などに幅広く使われています。`,
          },
          {
            q: `全画面で表示するにはどうすればよいですか？`,
            a: `「全画面表示」ボタンをクリックするかプレビュー画面をタップしてください。終了するにはキーボードのESCキーを押します。`,
          },
          {
            q: `この画面の正確なカラーコードは何ですか？`,
            a: `カラーコードはHEX「${hex}」、RGB値は「${rgb}」です。`,
          },
          {
            q: `使用中に画面が勝手に消えることはありますか？`,
            a: `いいえ。ブラウザの画面スリープ防止機能（Wake Lock）が自動的に働くため、全画面表示中は画面が点灯し続けます。`,
          },
          {
            q: `4Kや8Kの壁紙として保存できますか？`,
            a: `はい！ページ内のダウンロード機能から、PNG、WEBP、JPG形式でお好きな解像度の単色画像を生成してダウンロードできます。`,
          },
        ],
      },
      ko: {
        title: `${koName} 화면 – 전체화면 단색 배경 및 모니터 도구`,
        metaDescription: `온라인 순수 ${koName} 전체화면 도구입니다. ${primaryUseKo}, 모니터 점검 및 4K 배경화면 다운로드에 적합합니다.`,
        h1: `${koName} 화면 (전체화면 도구)`,
        intro: `모니터, 태블릿, 스마트폰 전체에 순수한 ${koName} 화면(${hex})을 최대 밝기로 띄워보세요. ${primaryUseKo}, 픽셀 테스트, 집중을 위한 깔끔한 배경 등 어떤 목적이든 별도 프로그램 설치 없이 브라우저에서 바로 사용할 수 있습니다.`,
        useCasesTitle: `${koName} 화면의 주요 활용 사례`,
        useCases: [
          {
            title: "디스플레이 정밀 검사 및 서브픽셀 확인",
            desc: `화면 전체를 균일한 단색(${rgb})으로 채워 불량화소, 빛샘 현상 및 패널 밝기 균일도를 쉽게 점검할 수 있습니다.`,
          },
          {
            title: `특수 조명 및 ${primaryUseKo}`,
            desc: `모니터를 부드럽고 균일한 면조명으로 활용하여 사진 촬영, 영상 통화 시 얼굴을 화사하게 비춥니다.`,
          },
          {
            title: "방해요소 없는 미니멀 데스크 배경",
            desc: `복잡한 바탕화면 아이콘과 작업표시줄을 가리고 깔끔한 화면을 유지하여 깊은 몰입과 집중을 돕습니다.`,
          },
          {
            title: "모니터 표면 먼지 및 얼룩 청소",
            desc: `균일하고 밝은 빛으로 화면 표면의 미세 먼지와 지문을 쉽게 발견하여 안전하게 닦아낼 수 있습니다.`,
          },
        ],
        deepDiveHeadings: [
          {
            title: `왜 온라인 ${koName} 화면 도구를 사용해야 할까요?`,
            paragraphs: [
              `인터넷에서 다운로드한 일반 이미지나 배경화면에는 압축 왜곡이나 그라데이션 노이즈가 포함되어 있을 수 있습니다. 본 도구는 브라우저 내부에서 32비트 sRGB 색공간으로 순수한 단색을 직접 렌더링하여 완벽한 균일성을 보장합니다.`,
              `HTML5 전체화면 모드와 화면 꺼짐 방지(Wake Lock) API가 적용되어 있어 사용 중 화면이 꺼지지 않고 계속 켜져 있습니다.`,
            ],
          },
          {
            title: "업무 및 작업 공간에서의 조명 최적화",
            paragraphs: [
              `서브 모니터에 ${koName} 화면을 띄워두면 어두운 방에서 눈의 피로를 유발하는 대비차를 줄여 눈을 편안하게 보호합니다.`,
              `스마트폰이나 태블릿을 휴대용 미니 조명으로 활용하여 소품이나 화장품 촬영 시 보조광으로 쓰기 좋습니다.`,
            ],
          },
          {
            title: "초고화질 무손실 배경화면 다운로드",
            paragraphs: [
              `오프라인에서도 이 색상을 사용하고 싶다면 하단 다운로드 영역에서 1080p, 2K, 4K, 5K, 8K 해상도의 PNG, WEBP, JPG 이미지를 바로 다운로드할 수 있습니다.`,
            ],
          },
        ],
        faqs: [
          {
            q: `${koName} 화면은 주로 어디에 사용되나요?`,
            a: `${primaryUseKo}, 모니터 불량화소 검사, 화상회의 조명 및 깔끔한 배경 화면으로 널리 사용됩니다.`,
          },
          {
            q: `전체화면으로 보려면 어떻게 하나요?`,
            a: `'전체화면' 버튼을 클릭하거나 미리보기 화면을 누르면 즉시 전체화면으로 전환됩니다. 종료하려면 키보드의 ESC 키를 누르세요.`,
          },
          {
            q: `이 화면의 정확한 색상 코드는 무엇인가요?`,
            a: `HEX 색상 코드는 ${hex}이며, RGB 값은 ${rgb}입니다.`,
          },
          {
            q: `사용 중에 화면이 절전 모드로 꺼지나요?`,
            a: `아닙니다. 화면 꺼짐 방지(Wake Lock) 기능이 지원 브라우저에서 자동으로 작동하여 화면이 계속 켜져 있습니다.`,
          },
          {
            q: `이 배경을 4K나 8K로 다운로드할 수 있나요?`,
            a: `네! 페이지 하단의 다운로드 옵션에서 원하는 해상도를 선택하여 고화질 이미지로 저장할 수 있습니다.`,
          },
        ],
      },
    },
  };
}

// 26 Colors defined per specification
export const ALL_COLORS: ColorDefinition[] = [
  buildColorCopy('white-screen', '#ffffff', '255, 255, 255', 'White', 'Blanca', 'Blanc', 'Weißer', 'Branca', 'Putih', 'monitor cleaning and Zoom lighting', 'limpieza de monitor e iluminación Zoom', 'nettoyage d\'écran et éclairage Zoom', 'Monitor-Reinigung und Videobeleuchtung', 'limpeza de monitor e iluminação Zoom', 'membersihkan monitor dan lampu video call', 'Bianco', 'Wit', 'pulizia monitor, test pixel bruciati, luce per videochiamate e tavolo luminoso', 'monitorreiniging, dode pixel testen, videoverlichting en overtrekken'),
  buildColorCopy('black-screen', '#000000', '0, 0, 0', 'Black', 'Negra', 'Noir', 'Schwarzer', 'Preta', 'Hitam', 'OLED display testing, battery saving, and sleep relaxation', 'pruebas de pantalla OLED, ahorro de batería y descanso', 'tests d\'écran OLED, économie de batterie et sommeil', 'OLED-Displaytests, Akkusparen und Schlafentspannung', 'testes de tela OLED, economia de bateria e sono', 'uji layar OLED, hemat baterai, dan istirahat tidur', 'Nero', 'Zwart', 'test display OLED, risparmio batteria, sonno e rilevamento pixel bloccati', 'OLED-schermtesten, batterijbesparing, slapen en detecteren van defecte pixels'),
  buildColorCopy('blue-screen', '#0000ff', '0, 0, 255', 'Blue', 'Azul', 'Bleu', 'Blauer', 'Azul', 'Biru', 'LCD stuck subpixel detection and cool ambient backdrop', 'detección de subpíxeles atascados en LCD y fondo relajante', 'détection de sous-pixels bloqués LCD et lumière froide', 'Erkennung hängender Subpixel auf LCDs und kühles Licht', 'detecção de subpixels presos em LCD e luz ambiente fria', 'deteksi sub-piksel macet pada LCD dan latar sejuk'),
  buildColorCopy('green-screen', '#00ff00', '0, 255, 0', 'Green', 'Verde', 'Vert', 'Grüner', 'Verde', 'Hijau', 'chroma key background replacement and video production', 'efectos de croma e incrustación de video', 'incrustation fond vert (chroma key) et production vidéo', 'Chroma-Keying, Greenscreen-Aufnahmen und Videoproduktion', 'efeitos de chroma key e produção de vídeo', 'latar chroma key untuk produksi video dan streaming'),
  buildColorCopy('red-screen', '#ff0000', '255, 0, 0', 'Red', 'Roja', 'Rouge', 'Roter', 'Vermelha', 'Merah', 'preserving night vision, astronomy observation, and darkrooms', 'preservación de visión nocturna y astronomía', 'préservation de la vision nocturne et astronomie', 'Erhalt der Nachtsicht, Astronomie und Dunkelkammer', 'preservação da visão noturna e astronomia', 'menjaga penglihatan malam, astronomi, dan kamar gelap', 'Rosso', 'Rood', 'preservazione della visione notturna, astronomia e test sub-pixel rossi', 'behoud van nachtzicht, astronomie en testen van rode subpixels'),
  buildColorCopy('yellow-screen', '#ffff00', '255, 255, 0', 'Yellow', 'Amarilla', 'Jaune', 'Gelber', 'Amarela', 'Kuning', 'high-visibility reading light and warm ambient glow', 'luz de lectura de alta visibilidad y confort visual', 'lumière de lecture chaude et haute visibilité', 'warmes Leselicht und augenschonende Ausleuchtung', 'luz de leitura de alta visibilidade e conforto visual', 'lampu baca kontras tinggi dan pencahayaan hangat', 'Giallo', 'Geel', 'luce di lettura ad alta visibilità e bagliore ambientale caldo', 'hoog-contrast leeslicht en warme sfeerverlichting'),
  buildColorCopy('orange-screen', '#ffa500', '255, 165, 0', 'Orange', 'Naranja', 'Orange', 'Oranger', 'Laranja', 'Oranye', 'sunset color simulation and circadian rhythm protection', 'simulación de atardecer y luz cálida para descanso', 'simulation de coucher de soleil et lumière relaxante', 'Sonnenuntergangs-Simulation und zirkadianer Schutz', 'simulação de pôr do sol e luz quente relaxante', 'simulasi matahari terbenam dan cahaya relaksasi', 'Arancione', 'Oranje', 'simulazione del tramonto e protezione del ritmo circadiano', 'zonsondergangsimulatie en bescherming van het dag-nachtritme'),
  buildColorCopy('pink-screen', '#ffc0cb', '255, 192, 203', 'Pink', 'Rosa', 'Rose', 'Rosa', 'Rosa', 'Merah Muda', 'gentle beauty fill light and soft aesthetic portrait glow', 'luz suave de belleza y tono cálido para retratos', 'lumière douce pour beauté et portraits esthétiques', 'weiches Schönheitslicht und stimmungsvolle Porträts', 'iluminação suave para beleza e retratos estéticos', 'lampu lembut kecantikan dan estetika potret'),
  buildColorCopy('purple-screen', '#800080', '128, 0, 128', 'Purple', 'Morada', 'Violet', 'Lila', 'Roxa', 'Ungu', 'creative mood lighting and vibrant ambient streaming backdrops', 'iluminación creativa para streaming y ambiente moderno', 'éclairage d\'ambiance créatif et décors de streaming', 'kreative Streaming-Beleuchtung und stimmungsvolle Akzente', 'iluminação criativa para streams e ambientes modernos', 'pencahayaan kreatif untuk live streaming dan estetika', 'Viola', 'Paars', 'illuminazione creativa per streaming e sfondi d\'atmosfera', 'creatieve sfeerverlichting en levendige streaming-achtergronden'),
  buildColorCopy('gold-screen', '#ffd700', '255, 215, 0', 'Gold', 'Dorada', 'Doré', 'Goldener', 'Dourada', 'Emas', 'luxurious warm skin-tone illumination and golden hour photography', 'iluminación dorada cálida para tonos de piel y fotografía', 'éclairage chaleureux doré pour portraits et photographie', 'warme Porträtausleuchtung im Stil der goldenen Stunde', 'iluminação dourada suave para tons de pele e fotos', 'pencahayaan keemasan untuk rona kulit dan foto', 'Oro', 'Goud', 'illuminazione calda per toni della pelle e fotografia golden hour', 'warme huidskleurverlichting en fotografie tijdens het gouden uur'),
  buildColorCopy('light-blue-screen', '#add8e6', '173, 216, 230', 'Light Blue', 'Azul Claro', 'Bleu Clair', 'Hellblauer', 'Azul Claro', 'Biru Muda', 'daylight sky simulation and morning alertness lighting', 'simulación de cielo diurno y luz estimulante', 'simulation de ciel diurne et lumière matinale apaisante', 'Tageslicht-Simulation und morgendliche Frische', 'simulação de céu claro e iluminação suave matinal', 'simulasi langit siang hari dan pencahayaan segar', 'Azzurro', 'Lichtblauw', 'simulazione del cielo diurno e luce rinfrescante per la concentrazione', 'daglicht-hemelsimulatie en ochtendfrisheid voor concentratie'),
  buildColorCopy('brown-screen', '#8b4513', '139, 69, 19', 'Brown', 'Marrón', 'Marron', 'Brauner', 'Marrom', 'Cokelat', 'earthy low-glare backdrop and warm acoustic studio mood', 'fondo terroso de bajo brillo y ambiente cálido', 'fond terreux à faible reflet et ambiance feutrée', 'matter erdfarbener Hintergrund und blendfreie Raumstimmung', 'fundo terroso de baixo reflexo e clima acolhedor', 'latar hangat alami dan pencahayaan minim silau', 'Marrone', 'Bruin', 'sfondo caldo a basso riflesso per ambienti di lavoro rilassanti', 'matte aardetint achtergrond en verblindingsvrije sfeer'),
  buildColorCopy('grey-screen', '#808080', '128, 128, 128', 'Grey', 'Gris', 'Gris', 'Grauer', 'Cinza', 'Abu-Abu', '18% middle gray exposure and camera white-balance calibration', 'calibración de balance de blancos y exposición al 18%', 'carte grise 18% pour étalonnage photo et balance des blancs', '18% Graukarte für Weißabgleich und Belichtungsmessung', 'calibração de balanço de branco e exposição a 18%', 'kartu abu-abu 18% untuk kalibrasi white balance kamera', 'Grigio', 'Grijs', 'cartoncino grigio 18% per calibrazione bilanciamento del bianco della fotocamera', '18% grijskaart voor witbalans-kalibratie en belichtingsmeting'),
  buildColorCopy('neon-screen', '#39ff14', '57, 255, 20', 'Neon', 'Neón', 'Néon', 'Neon', 'Neon', 'Neon', 'maximum display luminescence check and high-visibility signaling', 'comprobación de brillo máximo y señalización de alto impacto', 'test de luminance maximale et signalisation percutante', 'Prüfung maximaler Panelleuchtkraft und Signalwirkung', 'teste de brilho máximo e sinalização de alto impacto', 'uji kecerahan maksimal panel dan visibilitas tinggi'),
  buildColorCopy('olive-screen', '#808000', '128, 128, 0', 'Olive', 'Oliva', 'Olive', 'Olivgrüner', 'Oliva', 'Zaitun', 'subdued tactical green lighting and gentle low-intensity illumination', 'iluminación táctica tenue y luz verde de baja intensidad', 'éclairage discret et lumière verte douce non éblouissante', 'gedeckte taktische Ausleuchtung und sanftes Dämmerlicht', 'iluminação tática suave e luz verde de baixa intensidade', 'pencahayaan redup taktis dan warna hijau lembut'),
  buildColorCopy('coral-screen', '#ff7f50', '255, 127, 80', 'Coral', 'Coral', 'Corail', 'Korallen', 'Coral', 'Koral', 'flattering webcam skin illumination and vibrant soft warm glow', 'iluminación favorecedora para el rostro en cámara web', 'teinte valorisante pour le teint devant la webcam', 'schmeichelhafte Ausleuchtung von Hauttönen vor der Webcam', 'iluminação favorável para o rosto em videochamadas', 'pencahayaan penunjang rona wajah saat panggilan webcam', 'Corallo', 'Koraal', 'illuminazione calda e valorizzante per il viso durante videochiamate', 'flatteuze gezichtsverlichting voor webcams en warme gloed'),
  buildColorCopy('navy-screen', '#000080', '0, 0, 128', 'Navy', 'Azul Marino', 'Bleu Marine', 'Marineblauer', 'Azul Marinho', 'Biru Tua', 'deep contrast backdrop and nighttime distraction-free work', 'fondo de alto contraste y trabajo nocturno sin distracciones', 'arrière-plan sombre à fort contraste pour travail de nuit', 'kontrastreicher dunkler Hintergrund für konzentriertes Arbeiten', 'fundo escuro de alto contraste para trabalho noturno', 'latar kontras gelap untuk kerja malam bebas gangguan', 'Blu Notte', 'Marineblauw', 'sfondo ad alto contrasto per sessioni di lavoro notturne senza distrazioni', 'donkere contrastrijke achtergrond voor geconcentreerd nachtwerk'),
  buildColorCopy('mint-screen', '#98ff98', '152, 255, 152', 'Mint', 'Menta', 'Menthe', 'Minzgrüner', 'Menta', 'Mint', 'refreshing visual relief and calming creative desk lighting', 'alivio visual refrescante y luz relajante para el escritorio', 'repos visuel et lumière apaisante pour espace de création', 'entspannende Lichtstimmung und Erholung für müde Augen', 'alívio visual refrescante e luz relaxante para a mesa', 'penyegar mata lelah dan pencahayaan meja kerja yang rileks'),
  buildColorCopy('aqua-screen', '#00ffff', '0, 255, 255', 'Aqua', 'Aqua', 'Aqua', 'Türkis', 'Aqua', 'Akuatik', 'water surface reflection lighting and vibrant cyan backdrop', 'simulación de reflejos de agua y fondo cian luminoso', 'simulation de reflets aquatiques et fond cyan éclatant', 'Wasserspiegelungs-Effekte und lebendiger Cyan-Hintergrund', 'simulação de reflexos de água e fundo ciano vibrante', 'simulasi pantulan air dan latar cyan cerah', 'Acqua', 'Aqua', 'simulazione di riflessi d\'acqua e sfondo ciano vibrante', 'waterspiegelingseffecten en levendige cyaan achtergrond'),
  buildColorCopy('teal-screen', '#008080', '0, 128, 128', 'Teal', 'Verde Azulado', 'Sarcelle', 'Teal', 'Verde-Petróleo', 'Teal', 'cinematic color grading contrast and modern aesthetic studio tint', 'contraste cinematográfico y estética moderna para video', 'contraste cinématographique et ambiance moderne de studio', 'cinematischer Farbkontrast und moderne Studio-Ästhetik', 'contraste cinematográfico e estética moderna de estúdio', 'kontras warna sinematik dan estetika studio modern', 'Ottanio', 'Blauwgroen', 'contrasto cinematografico e moderna estetica da studio video', 'filmisch kleurcontrast en moderne studio-esthetiek'),
  buildColorCopy('cream-screen', '#fffdd0', '255, 253, 208', 'Cream', 'Crema', 'Crème', 'Creme', 'Creme', 'Krem', 'soft parchment paper reading light and gentle anti-fatigue glow', 'luz suave tono pergamino para lectura prolongada sin fatiga', 'lumière douce type parchemin pour lecture sans fatigue', 'sanftes pergamentfarbenes Leselicht gegen Augenbelastung', 'luz suave tom pergaminho para leitura sem cansaço visual', 'lampu baca selembut perkamen untuk mengurangi lelah mata'),
  buildColorCopy('beige-screen', '#f5f5dc', '245, 245, 220', 'Beige', 'Beige', 'Beige', 'Beiger', 'Bege', 'Krem Muda', 'neutral warm minimalist backdrop and architectural mockups', 'fondo neutro minimalista y maquetas arquitectónicas', 'fond neutre chaleureux et maquettes graphiques épurées', 'neutraler warmer Hintergrund für minimalistische Präsentationen', 'fundo neutro minimalista e apresentações visuais', 'latar netral hangat minimalis dan presentasi desain'),
  buildColorCopy('lavender-screen', '#e6e6fa', '230, 230, 250', 'Lavender', 'Lavanda', 'Lavande', 'Lavendel', 'Lavanda', 'Lavender', 'soothing bedtime ambient light and gentle sleep preparation', 'luz relajante para antes de dormir y descanso nocturno', 'lumière douce relaxante pour la préparation au sommeil', 'beruhigendes Einschlaflicht und sanfte Abendbeleuchtung', 'luz relaxante para antes de dormir e descanso noturno', 'cahaya rileks menjelang tidur dan suasana tenang'),
  buildColorCopy('cyan-screen', '#00e5ff', '0, 229, 255', 'Cyan', 'Cian', 'Cyan', 'Cyan', 'Ciano', 'Sian', 'crisp high-energy illumination and video background tinting', 'iluminación enérgica y tinte vibrante para fondos de video', 'éclairage dynamique et teinte lumineuse pour arrière-plans', 'energiegeladene Studio-Ausleuchtung und kräftige Farbtupfer', 'iluminação vibrante e coloração para fundos de vídeo', 'pencahayaan berenergi dan aksen warna video yang hidup'),
  buildColorCopy('maroon-screen', '#800000', '128, 0, 0', 'Maroon', 'Granate', 'Bordeaux', 'Kastanienbrauner', 'Marrom-Avermelhado', 'Marun', 'deep red darkroom lighting and low-light eye comfort', 'luz roja profunda para cuartos oscuros y lectura nocturna', 'lumière rouge profond pour laboratoire photo et vision nocturne', 'dunkelrotes Licht für Fotolabore und blendfreies Nachtsehen', 'luz vermelha profunda para laboratórios e leitura no escuro', 'cahaya merah tua untuk kamar gelap dan kenyamanan malam'),
  buildColorCopy('violet-screen', '#ee82ee', '238, 130, 238', 'Violet', 'Violeta', 'Pourpre', 'Violett', 'Violeta', 'Violet', 'vibrant neon ambiance and creative desktop photo lighting', 'ambiente de neón vibrante e iluminación creativa de escritorio', 'ambiance néon dynamique et éclairage créatif de bureau', 'lebendige Neon-Atmosphäre und kreatives Desktop-Fotolicht', 'ambiente de néon vibrante e iluminação criativa de estúdio', 'suasana neon cerah dan pencahayaan foto meja kreatif', 'Violetto', 'Violet', 'atmosfera neon e illuminazione creativa per fotografia da tavolo', 'levendige neon-sfeer en creatieve bureaufotografie')
];

export function getColorById(id: string): ColorDefinition | undefined {
  return ALL_COLORS.find(c => c.id === id);
}
