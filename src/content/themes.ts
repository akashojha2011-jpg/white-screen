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
    names,
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
