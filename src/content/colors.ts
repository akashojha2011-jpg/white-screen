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
  primaryUseId: string
): ColorDefinition {
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
    },
  };
}

// 26 Colors defined per specification
export const ALL_COLORS: ColorDefinition[] = [
  buildColorCopy('white-screen', '#ffffff', '255, 255, 255', 'White', 'Blanca', 'Blanc', 'Weißer', 'Branca', 'Putih', 'monitor cleaning and Zoom lighting', 'limpieza de monitor e iluminación Zoom', 'nettoyage d\'écran et éclairage Zoom', 'Monitor-Reinigung und Videobeleuchtung', 'limpeza de monitor e iluminação Zoom', 'membersihkan monitor dan lampu video call'),
  buildColorCopy('black-screen', '#000000', '0, 0, 0', 'Black', 'Negra', 'Noir', 'Schwarzer', 'Preta', 'Hitam', 'OLED display testing, battery saving, and sleep relaxation', 'pruebas de pantalla OLED, ahorro de batería y descanso', 'tests d\'écran OLED, économie de batterie et sommeil', 'OLED-Displaytests, Akkusparen und Schlafentspannung', 'testes de tela OLED, economia de bateria e sono', 'uji layar OLED, hemat baterai, dan istirahat tidur'),
  buildColorCopy('blue-screen', '#0000ff', '0, 0, 255', 'Blue', 'Azul', 'Bleu', 'Blauer', 'Azul', 'Biru', 'LCD stuck subpixel detection and cool ambient backdrop', 'detección de subpíxeles atascados en LCD y fondo relajante', 'détection de sous-pixels bloqués LCD et lumière froide', 'Erkennung hängender Subpixel auf LCDs und kühles Licht', 'detecção de subpixels presos em LCD e luz ambiente fria', 'deteksi sub-piksel macet pada LCD dan latar sejuk'),
  buildColorCopy('green-screen', '#00ff00', '0, 255, 0', 'Green', 'Verde', 'Vert', 'Grüner', 'Verde', 'Hijau', 'chroma key background replacement and video production', 'efectos de croma e incrustación de video', 'incrustation fond vert (chroma key) et production vidéo', 'Chroma-Keying, Greenscreen-Aufnahmen und Videoproduktion', 'efeitos de chroma key e produção de vídeo', 'latar chroma key untuk produksi video dan streaming'),
  buildColorCopy('red-screen', '#ff0000', '255, 0, 0', 'Red', 'Roja', 'Rouge', 'Roter', 'Vermelha', 'Merah', 'preserving night vision, astronomy observation, and darkrooms', 'preservación de visión nocturna y astronomía', 'préservation de la vision nocturne et astronomie', 'Erhalt der Nachtsicht, Astronomie und Dunkelkammer', 'preservação da visão noturna e astronomia', 'menjaga penglihatan malam, astronomi, dan kamar gelap'),
  buildColorCopy('yellow-screen', '#ffff00', '255, 255, 0', 'Yellow', 'Amarilla', 'Jaune', 'Gelber', 'Amarela', 'Kuning', 'high-visibility reading light and warm ambient glow', 'luz de lectura de alta visibilidad y confort visual', 'lumière de lecture chaude et haute visibilité', 'warmes Leselicht und augenschonende Ausleuchtung', 'luz de leitura de alta visibilidade e conforto visual', 'lampu baca kontras tinggi dan pencahayaan hangat'),
  buildColorCopy('orange-screen', '#ffa500', '255, 165, 0', 'Orange', 'Naranja', 'Orange', 'Oranger', 'Laranja', 'Oranye', 'sunset color simulation and circadian rhythm protection', 'simulación de atardecer y luz cálida para descanso', 'simulation de coucher de soleil et lumière relaxante', 'Sonnenuntergangs-Simulation und zirkadianer Schutz', 'simulação de pôr do sol e luz quente relaxante', 'simulasi matahari terbenam dan cahaya relaksasi'),
  buildColorCopy('pink-screen', '#ffc0cb', '255, 192, 203', 'Pink', 'Rosa', 'Rose', 'Rosa', 'Rosa', 'Merah Muda', 'gentle beauty fill light and soft aesthetic portrait glow', 'luz suave de belleza y tono cálido para retratos', 'lumière douce pour beauté et portraits esthétiques', 'weiches Schönheitslicht und stimmungsvolle Porträts', 'iluminação suave para beleza e retratos estéticos', 'lampu lembut kecantikan dan estetika potret'),
  buildColorCopy('purple-screen', '#800080', '128, 0, 128', 'Purple', 'Morada', 'Violet', 'Lila', 'Roxa', 'Ungu', 'creative mood lighting and vibrant ambient streaming backdrops', 'iluminación creativa para streaming y ambiente moderno', 'éclairage d\'ambiance créatif et décors de streaming', 'kreative Streaming-Beleuchtung und stimmungsvolle Akzente', 'iluminação criativa para streams e ambientes modernos', 'pencahayaan kreatif untuk live streaming dan estetika'),
  buildColorCopy('gold-screen', '#ffd700', '255, 215, 0', 'Gold', 'Dorada', 'Doré', 'Goldener', 'Dourada', 'Emas', 'luxurious warm skin-tone illumination and golden hour photography', 'iluminación dorada cálida para tonos de piel y fotografía', 'éclairage chaleureux doré pour portraits et photographie', 'warme Porträtausleuchtung im Stil der goldenen Stunde', 'iluminação dourada suave para tons de pele e fotos', 'pencahayaan keemasan untuk rona kulit dan foto'),
  buildColorCopy('light-blue-screen', '#add8e6', '173, 216, 230', 'Light Blue', 'Azul Claro', 'Bleu Clair', 'Hellblauer', 'Azul Claro', 'Biru Muda', 'daylight sky simulation and morning alertness lighting', 'simulación de cielo diurno y luz estimulante', 'simulation de ciel diurne et lumière matinale apaisante', 'Tageslicht-Simulation und morgendliche Frische', 'simulação de céu claro e iluminação suave matinal', 'simulasi langit siang hari dan pencahayaan segar'),
  buildColorCopy('brown-screen', '#8b4513', '139, 69, 19', 'Brown', 'Marrón', 'Marron', 'Brauner', 'Marrom', 'Cokelat', 'earthy low-glare backdrop and warm acoustic studio mood', 'fondo terroso de bajo brillo y ambiente cálido', 'fond terreux à faible reflet et ambiance feutrée', 'matter erdfarbener Hintergrund und blendfreie Raumstimmung', 'fundo terroso de baixo reflexo e clima acolhedor', 'latar hangat alami dan pencahayaan minim silau'),
  buildColorCopy('grey-screen', '#808080', '128, 128, 128', 'Grey', 'Gris', 'Gris', 'Grauer', 'Cinza', 'Abu-Abu', '18% middle gray exposure and camera white-balance calibration', 'calibración de balance de blancos y exposición al 18%', 'carte grise 18% pour étalonnage photo et balance des blancs', '18% Graukarte für Weißabgleich und Belichtungsmessung', 'calibração de balanço de branco e exposição a 18%', 'kartu abu-abu 18% untuk kalibrasi white balance kamera'),
  buildColorCopy('neon-screen', '#39ff14', '57, 255, 20', 'Neon', 'Neón', 'Néon', 'Neon', 'Neon', 'Neon', 'maximum display luminescence check and high-visibility signaling', 'comprobación de brillo máximo y señalización de alto impacto', 'test de luminance maximale et signalisation percutante', 'Prüfung maximaler Panelleuchtkraft und Signalwirkung', 'teste de brilho máximo e sinalização de alto impacto', 'uji kecerahan maksimal panel dan visibilitas tinggi'),
  buildColorCopy('olive-screen', '#808000', '128, 128, 0', 'Olive', 'Oliva', 'Olive', 'Olivgrüner', 'Oliva', 'Zaitun', 'subdued tactical green lighting and gentle low-intensity illumination', 'iluminación táctica tenue y luz verde de baja intensidad', 'éclairage discret et lumière verte douce non éblouissante', 'gedeckte taktische Ausleuchtung und sanftes Dämmerlicht', 'iluminação tática suave e luz verde de baixa intensidade', 'pencahayaan redup taktis dan warna hijau lembut'),
  buildColorCopy('coral-screen', '#ff7f50', '255, 127, 80', 'Coral', 'Coral', 'Corail', 'Korallen', 'Coral', 'Koral', 'flattering webcam skin illumination and vibrant soft warm glow', 'iluminación favorecedora para el rostro en cámara web', 'teinte valorisante pour le teint devant la webcam', 'schmeichelhafte Ausleuchtung von Hauttönen vor der Webcam', 'iluminação favorável para o rosto em videochamadas', 'pencahayaan penunjang rona wajah saat panggilan webcam'),
  buildColorCopy('navy-screen', '#000080', '0, 0, 128', 'Navy', 'Azul Marino', 'Bleu Marine', 'Marineblauer', 'Azul Marinho', 'Biru Tua', 'deep contrast backdrop and nighttime distraction-free work', 'fondo de alto contraste y trabajo nocturno sin distracciones', 'arrière-plan sombre à fort contraste pour travail de nuit', 'kontrastreicher dunkler Hintergrund für konzentriertes Arbeiten', 'fundo escuro de alto contraste para trabalho noturno', 'latar kontras gelap untuk kerja malam bebas gangguan'),
  buildColorCopy('mint-screen', '#98ff98', '152, 255, 152', 'Mint', 'Menta', 'Menthe', 'Minzgrüner', 'Menta', 'Mint', 'refreshing visual relief and calming creative desk lighting', 'alivio visual refrescante y luz relajante para el escritorio', 'repos visuel et lumière apaisante pour espace de création', 'entspannende Lichtstimmung und Erholung für müde Augen', 'alívio visual refrescante e luz relaxante para a mesa', 'penyegar mata lelah dan pencahayaan meja kerja yang rileks'),
  buildColorCopy('aqua-screen', '#00ffff', '0, 255, 255', 'Aqua', 'Aqua', 'Aqua', 'Türkis', 'Aqua', 'Akuatik', 'water surface reflection lighting and vibrant cyan backdrop', 'simulación de reflejos de agua y fondo cian luminoso', 'simulation de reflets aquatiques et fond cyan éclatant', 'Wasserspiegelungs-Effekte und lebendiger Cyan-Hintergrund', 'simulação de reflexos de água e fundo ciano vibrante', 'simulasi pantulan air dan latar cyan cerah'),
  buildColorCopy('teal-screen', '#008080', '0, 128, 128', 'Teal', 'Verde Azulado', 'Sarcelle', 'Teal', 'Verde-Petróleo', 'Teal', 'cinematic color grading contrast and modern aesthetic studio tint', 'contraste cinematográfico y estética moderna para video', 'contraste cinématographique et ambiance moderne de studio', 'cinematischer Farbkontrast und moderne Studio-Ästhetik', 'contraste cinematográfico e estética moderna de estúdio', 'kontras warna sinematik dan estetika studio modern'),
  buildColorCopy('cream-screen', '#fffdd0', '255, 253, 208', 'Cream', 'Crema', 'Crème', 'Creme', 'Creme', 'Krem', 'soft parchment paper reading light and gentle anti-fatigue glow', 'luz suave tono pergamino para lectura prolongada sin fatiga', 'lumière douce type parchemin pour lecture sans fatigue', 'sanftes pergamentfarbenes Leselicht gegen Augenbelastung', 'luz suave tom pergaminho para leitura sem cansaço visual', 'lampu baca selembut perkamen untuk mengurangi lelah mata'),
  buildColorCopy('beige-screen', '#f5f5dc', '245, 245, 220', 'Beige', 'Beige', 'Beige', 'Beiger', 'Bege', 'Krem Muda', 'neutral warm minimalist backdrop and architectural mockups', 'fondo neutro minimalista y maquetas arquitectónicas', 'fond neutre chaleureux et maquettes graphiques épurées', 'neutraler warmer Hintergrund für minimalistische Präsentationen', 'fundo neutro minimalista e apresentações visuais', 'latar netral hangat minimalis dan presentasi desain'),
  buildColorCopy('lavender-screen', '#e6e6fa', '230, 230, 250', 'Lavender', 'Lavanda', 'Lavande', 'Lavendel', 'Lavanda', 'Lavender', 'soothing bedtime ambient light and gentle sleep preparation', 'luz relajante para antes de dormir y descanso nocturno', 'lumière douce relaxante pour la préparation au sommeil', 'beruhigendes Einschlaflicht und sanfte Abendbeleuchtung', 'luz relaxante para antes de dormir e descanso noturno', 'cahaya rileks menjelang tidur dan suasana tenang'),
  buildColorCopy('cyan-screen', '#00e5ff', '0, 229, 255', 'Cyan', 'Cian', 'Cyan', 'Cyan', 'Ciano', 'Sian', 'crisp high-energy illumination and video background tinting', 'iluminación enérgica y tinte vibrante para fondos de video', 'éclairage dynamique et teinte lumineuse pour arrière-plans', 'energiegeladene Studio-Ausleuchtung und kräftige Farbtupfer', 'iluminação vibrante e coloração para fundos de vídeo', 'pencahayaan berenergi dan aksen warna video yang hidup'),
  buildColorCopy('maroon-screen', '#800000', '128, 0, 0', 'Maroon', 'Granate', 'Bordeaux', 'Kastanienbrauner', 'Marrom-Avermelhado', 'Marun', 'deep red darkroom lighting and low-light eye comfort', 'luz roja profunda para cuartos oscuros y lectura nocturna', 'lumière rouge profond pour laboratoire photo et vision nocturne', 'dunkelrotes Licht für Fotolabore und blendfreies Nachtsehen', 'luz vermelha profunda para laboratórios e leitura no escuro', 'cahaya merah tua untuk kamar gelap dan kenyamanan malam'),
  buildColorCopy('violet-screen', '#ee82ee', '238, 130, 238', 'Violet', 'Violeta', 'Pourpre', 'Violett', 'Violeta', 'Violet', 'vibrant neon ambiance and creative desktop photo lighting', 'ambiente de neón vibrante e iluminación creativa de escritorio', 'ambiance néon dynamique et éclairage créatif de bureau', 'lebendige Neon-Atmosphäre und kreatives Desktop-Fotolicht', 'ambiente de néon vibrante e iluminação criativa de estúdio', 'suasana neon cerah dan pencahayaan foto meja kreatif')
];

export function getColorById(id: string): ColorDefinition | undefined {
  return ALL_COLORS.find(c => c.id === id);
}
