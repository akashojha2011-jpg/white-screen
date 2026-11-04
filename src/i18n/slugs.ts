import type { LanguageCode } from './config';

export interface PageSlugMapping {
  id: string; // Internal canonical ID
  type: 'home' | 'color' | 'tool' | 'wallpaper' | 'theme' | 'guide' | 'legal';
  slugs: Record<LanguageCode, string>;
}

export const SLUG_REGISTRY: PageSlugMapping[] = [
  // 1. Home
  {
    id: 'home',
    type: 'home',
    slugs: {
      en: '',
      es: '',
      fr: '',
      de: '',
      pt: '',
      id: '',
    },
  },

  // 2. Color Pages (26)
  {
    id: 'white-screen',
    type: 'color',
    slugs: {
      en: 'white-screen',
      es: 'pantalla-blanca',
      fr: 'ecran-blanc',
      de: 'weisser-bildschirm',
      pt: 'tela-branca',
      id: 'layar-putih',
    },
  },
  {
    id: 'black-screen',
    type: 'color',
    slugs: {
      en: 'black-screen',
      es: 'pantalla-negra',
      fr: 'ecran-noir',
      de: 'schwarzer-bildschirm',
      pt: 'tela-preta',
      id: 'layar-hitam',
    },
  },
  {
    id: 'blue-screen',
    type: 'color',
    slugs: {
      en: 'blue-screen',
      es: 'pantalla-azul',
      fr: 'ecran-bleu',
      de: 'blauer-bildschirm',
      pt: 'tela-azul',
      id: 'layar-biru',
    },
  },
  {
    id: 'green-screen',
    type: 'color',
    slugs: {
      en: 'green-screen',
      es: 'pantalla-verde',
      fr: 'ecran-vert',
      de: 'gruener-bildschirm',
      pt: 'tela-verde',
      id: 'layar-hijau',
    },
  },
  {
    id: 'red-screen',
    type: 'color',
    slugs: {
      en: 'red-screen',
      es: 'pantalla-roja',
      fr: 'ecran-rouge',
      de: 'roter-bildschirm',
      pt: 'tela-vermelha',
      id: 'layar-merah',
    },
  },
  {
    id: 'yellow-screen',
    type: 'color',
    slugs: {
      en: 'yellow-screen',
      es: 'pantalla-amarilla',
      fr: 'ecran-jaune',
      de: 'gelber-bildschirm',
      pt: 'tela-amarela',
      id: 'layar-kuning',
    },
  },
  {
    id: 'orange-screen',
    type: 'color',
    slugs: {
      en: 'orange-screen',
      es: 'pantalla-naranja',
      fr: 'ecran-orange',
      de: 'oranger-bildschirm',
      pt: 'tela-laranja',
      id: 'layar-oranye',
    },
  },
  {
    id: 'pink-screen',
    type: 'color',
    slugs: {
      en: 'pink-screen',
      es: 'pantalla-rosa',
      fr: 'ecran-rose',
      de: 'rosa-bildschirm',
      pt: 'tela-rosa',
      id: 'layar-merah-muda',
    },
  },
  {
    id: 'purple-screen',
    type: 'color',
    slugs: {
      en: 'purple-screen',
      es: 'pantalla-morada',
      fr: 'ecran-violet',
      de: 'lila-bildschirm',
      pt: 'tela-roxa',
      id: 'layar-ungu',
    },
  },
  {
    id: 'gold-screen',
    type: 'color',
    slugs: {
      en: 'gold-screen',
      es: 'pantalla-dorada',
      fr: 'ecran-dore',
      de: 'goldener-bildschirm',
      pt: 'tela-dourada',
      id: 'layar-emas',
    },
  },
  {
    id: 'light-blue-screen',
    type: 'color',
    slugs: {
      en: 'light-blue-screen',
      es: 'pantalla-azul-claro',
      fr: 'ecran-bleu-clair',
      de: 'hellblauer-bildschirm',
      pt: 'tela-azul-claro',
      id: 'layar-biru-muda',
    },
  },
  {
    id: 'brown-screen',
    type: 'color',
    slugs: {
      en: 'brown-screen',
      es: 'pantalla-marron',
      fr: 'ecran-marron',
      de: 'brauner-bildschirm',
      pt: 'tela-marrom',
      id: 'layar-cokelat',
    },
  },
  {
    id: 'grey-screen',
    type: 'color',
    slugs: {
      en: 'grey-screen',
      es: 'pantalla-gris',
      fr: 'ecran-gris',
      de: 'grauer-bildschirm',
      pt: 'tela-cinza',
      id: 'layar-abu-abu',
    },
  },
  {
    id: 'neon-screen',
    type: 'color',
    slugs: {
      en: 'neon-screen',
      es: 'pantalla-neon',
      fr: 'ecran-neon',
      de: 'neon-bildschirm',
      pt: 'tela-neon',
      id: 'layar-neon',
    },
  },
  {
    id: 'olive-screen',
    type: 'color',
    slugs: {
      en: 'olive-screen',
      es: 'pantalla-oliva',
      fr: 'ecran-olive',
      de: 'olivgruener-bildschirm',
      pt: 'tela-oliva',
      id: 'layar-zaitun',
    },
  },
  {
    id: 'coral-screen',
    type: 'color',
    slugs: {
      en: 'coral-screen',
      es: 'pantalla-coral',
      fr: 'ecran-corail',
      de: 'korallen-bildschirm',
      pt: 'tela-coral',
      id: 'layar-koral',
    },
  },
  {
    id: 'navy-screen',
    type: 'color',
    slugs: {
      en: 'navy-screen',
      es: 'pantalla-azul-marino',
      fr: 'ecran-bleu-marine',
      de: 'marineblauer-bildschirm',
      pt: 'tela-azul-marinho',
      id: 'layar-biru-tua',
    },
  },
  {
    id: 'mint-screen',
    type: 'color',
    slugs: {
      en: 'mint-screen',
      es: 'pantalla-menta',
      fr: 'ecran-menthe',
      de: 'minzgruener-bildschirm',
      pt: 'tela-menta',
      id: 'layar-mint',
    },
  },
  {
    id: 'aqua-screen',
    type: 'color',
    slugs: {
      en: 'aqua-screen',
      es: 'pantalla-aqua',
      fr: 'ecran-aqua',
      de: 'tuerkis-bildschirm',
      pt: 'tela-aqua',
      id: 'layar-akuatik',
    },
  },
  {
    id: 'teal-screen',
    type: 'color',
    slugs: {
      en: 'teal-screen',
      es: 'pantalla-verde-azulado',
      fr: 'ecran-sarcelle',
      de: 'teal-bildschirm',
      pt: 'tela-verde-petroleo',
      id: 'layar-teal',
    },
  },
  {
    id: 'cream-screen',
    type: 'color',
    slugs: {
      en: 'cream-screen',
      es: 'pantalla-crema',
      fr: 'ecran-creme',
      de: 'creme-bildschirm',
      pt: 'tela-creme',
      id: 'layar-krem',
    },
  },
  {
    id: 'beige-screen',
    type: 'color',
    slugs: {
      en: 'beige-screen',
      es: 'pantalla-beige',
      fr: 'ecran-beige',
      de: 'beiger-bildschirm',
      pt: 'tela-bege',
      id: 'layar-krem-muda',
    },
  },
  {
    id: 'lavender-screen',
    type: 'color',
    slugs: {
      en: 'lavender-screen',
      es: 'pantalla-lavanda',
      fr: 'ecran-lavande',
      de: 'lavendel-bildschirm',
      pt: 'tela-lavanda',
      id: 'layar-lavender',
    },
  },
  {
    id: 'cyan-screen',
    type: 'color',
    slugs: {
      en: 'cyan-screen',
      es: 'pantalla-cian',
      fr: 'ecran-cyan',
      de: 'cyan-bildschirm',
      pt: 'tela-ciano',
      id: 'layar-sian',
    },
  },
  {
    id: 'maroon-screen',
    type: 'color',
    slugs: {
      en: 'maroon-screen',
      es: 'pantalla-granate',
      fr: 'ecran-bordeaux',
      de: 'kastanie-bildschirm',
      pt: 'tela-marrom-avermelhado',
      id: 'layar-marun',
    },
  },
  {
    id: 'violet-screen',
    type: 'color',
    slugs: {
      en: 'violet-screen',
      es: 'pantalla-violeta',
      fr: 'ecran-pourpre',
      de: 'violett-bildschirm',
      pt: 'tela-violeta',
      id: 'layar-violet',
    },
  },

  // 3. Tool Pages (15)
  {
    id: 'dead-pixel-test',
    type: 'tool',
    slugs: {
      en: 'dead-pixel-test',
      es: 'prueba-pixeles-muertos',
      fr: 'test-pixel-mort',
      de: 'pixelfehler-test',
      pt: 'teste-pixels-mortos',
      id: 'tes-piksel-mati',
    },
  },
  {
    id: 'screen-cleaning',
    type: 'tool',
    slugs: {
      en: 'screen-cleaning',
      es: 'limpiar-pantalla',
      fr: 'nettoyer-ecran',
      de: 'bildschirm-reinigen',
      pt: 'limpar-tela',
      id: 'membersihkan-layar',
    },
  },
  {
    id: 'zoom-ring-light',
    type: 'tool',
    slugs: {
      en: 'zoom-ring-light',
      es: 'luz-para-zoom',
      fr: 'eclairage-zoom',
      de: 'zoom-videobeleuchtung',
      pt: 'luz-para-zoom',
      id: 'lampu-video-zoom',
    },
  },
  {
    id: 'webcam-light',
    type: 'tool',
    slugs: {
      en: 'webcam-light',
      es: 'luz-para-camara-web',
      fr: 'lumiere-webcam',
      de: 'webcam-licht',
      pt: 'luz-para-webcam',
      id: 'lampu-webcam',
    },
  },
  {
    id: 'screen-flicker-test',
    type: 'tool',
    slugs: {
      en: 'screen-flicker-test',
      es: 'prueba-parpadeo-pantalla',
      fr: 'test-scintillement-ecran',
      de: 'bildschirm-flimmer-test',
      pt: 'teste-cintilacao-tela',
      id: 'tes-layar-berkedip',
    },
  },
  {
    id: 'backlight-bleed-test',
    type: 'tool',
    slugs: {
      en: 'backlight-bleed-test',
      es: 'prueba-fuga-de-luz',
      fr: 'test-fuite-de-lumiere',
      de: 'backlight-bleed-test',
      pt: 'teste-vazamento-luz',
      id: 'tes-kebocoran-cahaya',
    },
  },
  {
    id: 'oled-burn-in-test',
    type: 'tool',
    slugs: {
      en: 'oled-burn-in-test',
      es: 'prueba-burn-in-oled',
      fr: 'test-marquage-oled',
      de: 'oled-einbrenn-test',
      pt: 'teste-burn-in-oled',
      id: 'tes-burn-in-oled',
    },
  },
  {
    id: 'monitor-uniformity-test',
    type: 'tool',
    slugs: {
      en: 'monitor-uniformity-test',
      es: 'prueba-uniformidad-monitor',
      fr: 'test-uniformite-moniteur',
      de: 'monitor-homogenitaet-test',
      pt: 'teste-uniformidade-monitor',
      id: 'tes-keseragaman-monitor',
    },
  },
  {
    id: 'tracing-lightbox',
    type: 'tool',
    slugs: {
      en: 'tracing-lightbox',
      es: 'mesa-de-luz-para-dibujo',
      fr: 'table-lumineuse-dessin',
      de: 'zeichen-leuchttisch',
      pt: 'mesa-de-luz-desenho',
      id: 'meja-sinar-menjiplak',
    },
  },
  {
    id: 'photography-backdrop',
    type: 'tool',
    slugs: {
      en: 'photography-backdrop',
      es: 'fondo-para-fotografia',
      fr: 'fond-de-photographie',
      de: 'fotografie-hintergrund',
      pt: 'fundo-para-fotografia',
      id: 'latar-belakang-fotografi',
    },
  },
  {
    id: 'color-picker-fullscreen',
    type: 'tool',
    slugs: {
      en: 'color-picker-fullscreen',
      es: 'selector-color-pantalla-completa',
      fr: 'selecteur-couleur-plein-ecran',
      de: 'vollbild-farbwaehler',
      pt: 'seletor-cor-tela-cheia',
      id: 'pemilih-warna-layar-penuh',
    },
  },
  {
    id: 'fullscreen-rgb-cycle',
    type: 'tool',
    slugs: {
      en: 'fullscreen-rgb-cycle',
      es: 'ciclo-rgb-pantalla-completa',
      fr: 'cycle-rgb-plein-ecran',
      de: 'vollbild-rgb-zyklus',
      pt: 'ciclo-rgb-tela-cheia',
      id: 'siklus-rgb-layar-penuh',
    },
  },
  {
    id: 'black-screen-10-hours',
    type: 'tool',
    slugs: {
      en: 'black-screen-10-hours',
      es: 'pantalla-negra-10-horas',
      fr: 'ecran-noir-10-heures',
      de: 'schwarzer-bildschirm-10-stunden',
      pt: 'tela-preta-10-horas',
      id: 'layar-hitam-10-jam',
    },
  },
  {
    id: 'white-screen-1-hour',
    type: 'tool',
    slugs: {
      en: 'white-screen-1-hour',
      es: 'pantalla-blanca-1-hora',
      fr: 'ecran-blanc-1-heure',
      de: 'weisser-bildschirm-1-stunde',
      pt: 'tela-branca-1-hora',
      id: 'layar-putih-1-jam',
    },
  },
  {
    id: 'screen-timer',
    type: 'tool',
    slugs: {
      en: 'screen-timer',
      es: 'temporizador-pantalla',
      fr: 'minuteur-ecran',
      de: 'bildschirm-timer',
      pt: 'temporizador-tela',
      id: 'penghitung-waktu-layar',
    },
  },

  // 4. Wallpaper Pages
  {
    id: 'white-wallpaper',
    type: 'wallpaper',
    slugs: {
      en: 'white-wallpaper',
      es: 'fondo-blanco',
      fr: 'fond-ecran-blanc',
      de: 'weisses-hintergrundbild',
      pt: 'papel-de-parede-branco',
      id: 'wallpaper-putih',
    },
  },
  {
    id: 'white-wallpaper-4k',
    type: 'wallpaper',
    slugs: {
      en: 'white-wallpaper-4k',
      es: 'fondo-blanco-4k',
      fr: 'fond-ecran-blanc-4k',
      de: 'weisses-hintergrundbild-4k',
      pt: 'papel-de-parede-branco-4k',
      id: 'wallpaper-putih-4k',
    },
  },
  {
    id: 'white-wallpaper-8k',
    type: 'wallpaper',
    slugs: {
      en: 'white-wallpaper-8k',
      es: 'fondo-blanco-8k',
      fr: 'fond-ecran-blanc-8k',
      de: 'weisses-hintergrundbild-8k',
      pt: 'papel-de-parede-branco-8k',
      id: 'wallpaper-putih-8k',
    },
  },
  {
    id: 'white-background-for-iphone',
    type: 'wallpaper',
    slugs: {
      en: 'white-background-for-iphone',
      es: 'fondo-blanco-iphone',
      fr: 'fond-blanc-pour-iphone',
      de: 'weisser-hintergrund-iphone',
      pt: 'fundo-branco-para-iphone',
      id: 'latar-belakang-putih-iphone',
    },
  },
  {
    id: 'white-wallpaper-for-desktop',
    type: 'wallpaper',
    slugs: {
      en: 'white-wallpaper-for-desktop',
      es: 'fondo-blanco-escritorio',
      fr: 'fond-ecran-blanc-pc',
      de: 'weisses-hintergrundbild-desktop',
      pt: 'papel-de-parede-branco-pc',
      id: 'wallpaper-putih-desktop',
    },
  },
  {
    id: 'black-wallpaper',
    type: 'wallpaper',
    slugs: {
      en: 'black-wallpaper',
      es: 'fondo-negro',
      fr: 'fond-ecran-noir',
      de: 'schwarzes-hintergrundbild',
      pt: 'papel-de-parede-preto',
      id: 'wallpaper-hitam',
    },
  },
  {
    id: 'black-wallpaper-4k',
    type: 'wallpaper',
    slugs: {
      en: 'black-wallpaper-4k',
      es: 'fondo-negro-4k',
      fr: 'fond-ecran-noir-4k',
      de: 'schwarzes-hintergrundbild-4k',
      pt: 'papel-de-parede-preto-4k',
      id: 'wallpaper-hitam-4k',
    },
  },
  {
    id: 'blue-wallpaper',
    type: 'wallpaper',
    slugs: {
      en: 'blue-wallpaper',
      es: 'fondo-azul',
      fr: 'fond-ecran-bleu',
      de: 'blaues-hintergrundbild',
      pt: 'papel-de-parede-azul',
      id: 'wallpaper-biru',
    },
  },
  {
    id: 'green-wallpaper',
    type: 'wallpaper',
    slugs: {
      en: 'green-wallpaper',
      es: 'fondo-verde',
      fr: 'fond-ecran-vert',
      de: 'gruenes-hintergrundbild',
      pt: 'papel-de-parede-verde',
      id: 'wallpaper-hijau',
    },
  },
  {
    id: 'red-wallpaper',
    type: 'wallpaper',
    slugs: {
      en: 'red-wallpaper',
      es: 'fondo-rojo',
      fr: 'fond-ecran-rouge',
      de: 'rotes-hintergrundbild',
      pt: 'papel-de-parede-vermelho',
      id: 'wallpaper-merah',
    },
  },

  // 5. Theme Pages (16)
  {
    id: 'sky-background',
    type: 'theme',
    slugs: {
      en: 'sky-background',
      es: 'fondo-cielo',
      fr: 'fond-ecran-ciel',
      de: 'himmel-hintergrund',
      pt: 'fundo-ceu',
      id: 'latar-belakang-langit',
    },
  },
  {
    id: 'gradient-background',
    type: 'theme',
    slugs: {
      en: 'gradient-background',
      es: 'fondo-degradado',
      fr: 'fond-degrade',
      de: 'farbverlauf-hintergrund',
      pt: 'fundo-degrade',
      id: 'latar-belakang-gradasi',
    },
  },
  {
    id: 'space-background',
    type: 'theme',
    slugs: {
      en: 'space-background',
      es: 'fondo-espacial',
      fr: 'fond-espace',
      de: 'weltraum-hintergrund',
      pt: 'fundo-espaco',
      id: 'latar-belakang-luar-angkasa',
    },
  },
  {
    id: 'forest-background',
    type: 'theme',
    slugs: {
      en: 'forest-background',
      es: 'fondo-bosque',
      fr: 'fond-foret',
      de: 'wald-hintergrund',
      pt: 'fundo-floresta',
      id: 'latar-belakang-hutan',
    },
  },
  {
    id: 'fire-background',
    type: 'theme',
    slugs: {
      en: 'fire-background',
      es: 'fondo-fuego',
      fr: 'fond-feu',
      de: 'feuer-hintergrund',
      pt: 'fundo-fogo',
      id: 'latar-belakang-api',
    },
  },
  {
    id: 'wood-background',
    type: 'theme',
    slugs: {
      en: 'wood-background',
      es: 'fondo-madera',
      fr: 'fond-bois',
      de: 'holz-hintergrund',
      pt: 'fundo-madeira',
      id: 'latar-belakang-kayu',
    },
  },
  {
    id: 'water-background',
    type: 'theme',
    slugs: {
      en: 'water-background',
      es: 'fondo-agua',
      fr: 'fond-eau',
      de: 'wasser-hintergrund',
      pt: 'fundo-agua',
      id: 'latar-belakang-air',
    },
  },
  {
    id: 'paper-background',
    type: 'theme',
    slugs: {
      en: 'paper-background',
      es: 'fondo-papel',
      fr: 'fond-papier',
      de: 'papier-hintergrund',
      pt: 'fundo-papel',
      id: 'latar-belakang-kertas',
    },
  },
  {
    id: 'city-background',
    type: 'theme',
    slugs: {
      en: 'city-background',
      es: 'fondo-ciudad',
      fr: 'fond-ville',
      de: 'stadt-hintergrund',
      pt: 'fundo-cidade',
      id: 'latar-belakang-kota',
    },
  },
  {
    id: 'ocean-background',
    type: 'theme',
    slugs: {
      en: 'ocean-background',
      es: 'fondo-oceano',
      fr: 'fond-ocean',
      de: 'ozean-hintergrund',
      pt: 'fundo-oceano',
      id: 'latar-belakang-samudra',
    },
  },
  {
    id: 'galaxy-background',
    type: 'theme',
    slugs: {
      en: 'galaxy-background',
      es: 'fondo-galaxia',
      fr: 'fond-galaxie',
      de: 'galaxie-hintergrund',
      pt: 'fundo-galaxia',
      id: 'latar-belakang-galaksi',
    },
  },
  {
    id: 'sunset-background',
    type: 'theme',
    slugs: {
      en: 'sunset-background',
      es: 'fondo-atardecer',
      fr: 'fond-coucher-soleil',
      de: 'sonnenuntergang-hintergrund',
      pt: 'fundo-por-do-sol',
      id: 'latar-belakang-matahari-terbenam',
    },
  },
  {
    id: 'silver-background',
    type: 'theme',
    slugs: {
      en: 'silver-background',
      es: 'fondo-plateado',
      fr: 'fond-argent',
      de: 'silber-hintergrund',
      pt: 'fundo-prateado',
      id: 'latar-belakang-perak',
    },
  },
  {
    id: 'snow-background',
    type: 'theme',
    slugs: {
      en: 'snow-background',
      es: 'fondo-nieve',
      fr: 'fond-neige',
      de: 'schnee-hintergrund',
      pt: 'fundo-neve',
      id: 'latar-belakang-salju',
    },
  },
  {
    id: 'carbon-fiber-background',
    type: 'theme',
    slugs: {
      en: 'carbon-fiber-background',
      es: 'fondo-fibra-carbono',
      fr: 'fond-fibre-carbone',
      de: 'carbon-hintergrund',
      pt: 'fundo-fibra-carbono',
      id: 'latar-belakang-serat-karbon',
    },
  },
  {
    id: 'concrete-background',
    type: 'theme',
    slugs: {
      en: 'concrete-background',
      es: 'fondo-hormigon',
      fr: 'fond-beton',
      de: 'beton-hintergrund',
      pt: 'fundo-concreto',
      id: 'latar-belakang-beton',
    },
  },

  // 6. Guides (20)
  {
    id: 'how-to-clean-laptop-screen-safely',
    type: 'guide',
    slugs: {
      en: 'how-to-clean-laptop-screen-safely',
      es: 'como-limpiar-pantalla-laptop-seguridad',
      fr: 'comment-nettoyer-ecran-ordinateur-securite',
      de: 'laptop-bildschirm-sicher-reinigen-anleitung',
      pt: 'como-limpar-tela-notebook-com-seguranca',
      id: 'cara-membersihkan-layar-laptop-dengan-aman',
    },
  },
  {
    id: 'how-to-check-dead-pixels-iphone-monitor',
    type: 'guide',
    slugs: {
      en: 'how-to-check-dead-pixels-iphone-monitor',
      es: 'como-detectar-pixeles-muertos-pantalla',
      fr: 'comment-verifier-pixels-morts-ecran',
      de: 'pixelfehler-pruefen-monitor-smartphone',
      pt: 'como-verificar-pixels-mortos-monitor',
      id: 'cara-cek-piksel-mati-pada-layar',
    },
  },
  {
    id: 'can-white-screen-work-as-ring-light',
    type: 'guide',
    slugs: {
      en: 'can-white-screen-work-as-ring-light',
      es: 'usar-pantalla-blanca-como-luz-de-relleno',
      fr: 'utiliser-ecran-blanc-comme-eclairage-zoom',
      de: 'weisser-bildschirm-als-videolicht-fuer-zoom',
      pt: 'usar-tela-branca-como-anel-de-luz',
      id: 'menggunakan-layar-putih-sebagai-lampu-video',
    },
  },
  {
    id: 'oled-burn-in-causes-fixes-test',
    type: 'guide',
    slugs: {
      en: 'oled-burn-in-causes-fixes-test',
      es: 'causas-y-soluciones-burn-in-oled',
      fr: 'marquage-ecran-oled-causes-et-solutions',
      de: 'oled-burn-in-ursachen-und-test',
      pt: 'burn-in-oled-causas-e-como-testar',
      id: 'penyebab-burn-in-oled-dan-cara-tes',
    },
  },
  {
    id: 'backlight-bleed-vs-ips-glow',
    type: 'guide',
    slugs: {
      en: 'backlight-bleed-vs-ips-glow',
      es: 'fuga-de-luz-vs-ips-glow-diferencias',
      fr: 'fuite-de-lumiere-vs-ips-glow',
      de: 'backlight-bleed-vs-ips-glow-vergleich',
      pt: 'vazamento-de-luz-vs-ips-glow',
      id: 'perbedaan-backlight-bleed-dan-ips-glow',
    },
  },
  {
    id: 'turn-laptop-tablet-into-tracing-lightbox',
    type: 'guide',
    slugs: {
      en: 'turn-laptop-tablet-into-tracing-lightbox',
      es: 'convertir-pantalla-en-mesa-de-luz',
      fr: 'transformer-ecran-en-table-lumineuse',
      de: 'bildschirm-in-leuchttisch-verwandeln',
      pt: 'transformar-tela-em-mesa-de-luz',
      id: 'mengubah-layar-menjadi-meja-gambar-bercahaya',
    },
  },
  {
    id: 'monitor-color-luminance-uniformity-test',
    type: 'guide',
    slugs: {
      en: 'monitor-color-luminance-uniformity-test',
      es: 'guia-uniformidad-de-color-y-brillo',
      fr: 'guide-uniformite-couleur-luminance-moniteur',
      de: 'monitor-homogenitaet-und-farbtreue-anleitung',
      pt: 'guia-uniformidade-de-cor-do-monitor',
      id: 'panduan-keseragaman-warna-dan-kecerahan-layar',
    },
  },
  {
    id: 'screen-flicker-pwm-eye-strain-test',
    type: 'guide',
    slugs: {
      en: 'screen-flicker-pwm-eye-strain-test',
      es: 'parpadeo-pwm-fatiga-visual-guia',
      fr: 'scintillement-pwm-fatigue-oculaire',
      de: 'pwm-bildschirmflimmern-und-augenmuedigkeit',
      pt: 'cintilacao-pwm-e-fadiga-ocular',
      id: 'kedipan-layar-pwm-dan-kelelahan-mata',
    },
  },
  {
    id: 'red-screen-night-vision-astronomy-guide',
    type: 'guide',
    slugs: {
      en: 'red-screen-night-vision-astronomy-guide',
      es: 'pantalla-roja-vision-nocturna-astronomia',
      fr: 'lumiere-rouge-vision-nocturne-astronomie',
      de: 'rotes-licht-fuer-nachtsicht-und-astronomie',
      pt: 'luz-vermelha-para-visao-noturna-e-astronomia',
      id: 'cahaya-layar-merah-untuk-astronomi-dan-penglihatan-malam',
    },
  },
  {
    id: 'green-screen-lighting-zoom-streaming',
    type: 'guide',
    slugs: {
      en: 'green-screen-lighting-zoom-streaming',
      es: 'como-iluminar-pantalla-verde-croma',
      fr: 'eclairage-fond-vert-pour-streaming',
      de: 'greenscreen-beleuchtung-fuer-streaming-anleitung',
      pt: 'como-iluminar-tela-verde-para-streaming',
      id: 'cara-pencahayaan-green-screen-untuk-streaming',
    },
  },
  {
    id: 'black-screen-battery-savings-oled-amoled',
    type: 'guide',
    slugs: {
      en: 'black-screen-battery-savings-oled-amoled',
      es: 'ahorro-bateria-pantalla-negra-oled',
      fr: 'economie-batterie-ecran-noir-oled',
      de: 'schwarzer-bildschirm-akku-sparen-oled',
      pt: 'economia-de-bateria-tela-preta-oled',
      id: 'hemat-baterai-layar-hitam-oled',
    },
  },
  {
    id: 'macro-product-photography-screen-lighting',
    type: 'guide',
    slugs: {
      en: 'macro-product-photography-screen-lighting',
      es: 'fotografia-de-producto-con-luz-de-pantalla',
      fr: 'photographie-macro-eclairage-par-ecran',
      de: 'makrofotografie-mit-bildschirmbeleuchtung',
      pt: 'fotografia-de-produtos-com-luz-de-tela',
      id: 'fotografi-produk-dengan-pencahayaan-layar',
    },
  },
  {
    id: 'camera-white-balance-calibration-gray-screen',
    type: 'guide',
    slugs: {
      en: 'camera-white-balance-calibration-gray-screen',
      es: 'calibrar-balance-de-blancos-pantalla-gris',
      fr: 'calibrer-balance-des-blancs-carte-grise',
      de: 'weissabgleich-kalibrieren-mit-grauem-bildschirm',
      pt: 'calibrar-balanco-de-branco-tela-cinza',
      id: 'kalibrasi-white-balance-kamera-layar-abu-abu',
    },
  },
  {
    id: 'dual-monitor-ergonomics-secondary-screen-light',
    type: 'guide',
    slugs: {
      en: 'dual-monitor-ergonomics-secondary-screen-light',
      es: 'ergonomia-segunda-pantalla-fuente-de-luz',
      fr: 'ergonomie-double-ecran-source-lumiere',
      de: 'dual-monitor-ergonomie-als-lichtquelle',
      pt: 'ergonomia-segundo-monitor-como-luz',
      id: 'ergonomi-monitor-ganda-sebagai-sumber-cahaya',
    },
  },
  {
    id: 'fix-stuck-pixels-rgb-screen-cycling',
    type: 'guide',
    slugs: {
      en: 'fix-stuck-pixels-rgb-screen-cycling',
      es: 'reparar-pixeles-atascados-ciclo-rgb',
      fr: 'reparer-pixels-bloques-cyclage-rgb',
      de: 'haengende-pixel-reparieren-mit-rgb-zyklus',
      pt: 'como-desbloquear-pixels-presos-com-rgb',
      id: 'memperbaiki-piksel-macet-dengan-siklus-rgb',
    },
  },
  {
    id: 'screen-brightness-eye-comfort-day-night',
    type: 'guide',
    slugs: {
      en: 'screen-brightness-eye-comfort-day-night',
      es: 'brillo-de-pantalla-y-confort-visual',
      fr: 'luminosite-ecran-et-confort-des-yeux',
      de: 'bildschirmhelligkeit-und-augenschonung',
      pt: 'brilho-de-tela-e-conforto-visual',
      id: 'kecerahan-layar-dan-kenyamanan-mata',
    },
  },
  {
    id: 'fullscreen-color-screens-deep-focus-pomodoro',
    type: 'guide',
    slugs: {
      en: 'fullscreen-color-screens-deep-focus-pomodoro',
      es: 'pantalla-completa-para-concentracion-pomodoro',
      fr: 'ecrans-colores-pour-concentration-profonde',
      de: 'vollbildfarben-fuer-fokus-und-pomodoro',
      pt: 'telas-coloridas-para-foco-e-pomodoro',
      id: 'layar-warna-untuk-fokus-dan-produktivitas',
    },
  },
  {
    id: 'monitor-pixel-density-ppi-4k-8k-wallpapers',
    type: 'guide',
    slugs: {
      en: 'monitor-pixel-density-ppi-4k-8k-wallpapers',
      es: 'densidad-de-pixeles-ppi-fondos-4k-8k',
      fr: 'densite-pixels-ppi-fonds-ecran-4k-8k',
      de: 'pixeldichte-ppi-und-4k-8k-hintergruende',
      pt: 'densidade-de-pixels-ppi-papeis-4k-8k',
      id: 'kerapatan-piksel-ppi-dan-wallpaper-4k-8k',
    },
  },
  {
    id: 'how-to-test-laptop-displays-before-buying',
    type: 'guide',
    slugs: {
      en: 'how-to-test-laptop-displays-before-buying',
      es: 'como-probar-pantalla-laptop-antes-de-comprar',
      fr: 'comment-tester-ecran-pc-portable-avant-achat',
      de: 'laptop-bildschirm-vor-kauf-testen-leitfaden',
      pt: 'como-testar-tela-de-notebook-antes-de-comprar',
      id: 'cara-tes-layar-laptop-sebelum-membeli',
    },
  },
  {
    id: 'display-panel-types-oled-ips-va-tn-comparison',
    type: 'guide',
    slugs: {
      en: 'display-panel-types-oled-ips-va-tn-comparison',
      es: 'tipos-de-panel-oled-ips-va-tn-comparativa',
      fr: 'comparatif-dalles-oled-ips-va-tn',
      de: 'paneltypen-oled-ips-va-tn-im-vergleich',
      pt: 'tipos-de-paineis-oled-ips-va-tn-comparativo',
      id: 'perbandingan-panel-layar-oled-ips-va-dan-tn',
    },
  },

  // 7. Legal Pages (6)
  {
    id: 'about',
    type: 'legal',
    slugs: {
      en: 'about',
      es: 'acerca-de',
      fr: 'a-propos',
      de: 'ueber-uns',
      pt: 'sobre',
      id: 'tentang-kami',
    },
  },
  {
    id: 'contact',
    type: 'legal',
    slugs: {
      en: 'contact',
      es: 'contacto',
      fr: 'contact',
      de: 'kontakt',
      pt: 'contato',
      id: 'kontak',
    },
  },
  {
    id: 'privacy-policy',
    type: 'legal',
    slugs: {
      en: 'privacy-policy',
      es: 'politica-de-privacidad',
      fr: 'politique-de-confidentialite',
      de: 'datenschutz',
      pt: 'politica-de-privacidade',
      id: 'kebijakan-privasi',
    },
  },
  {
    id: 'terms-and-conditions',
    type: 'legal',
    slugs: {
      en: 'terms-and-conditions',
      es: 'terminos-y-condiciones',
      fr: 'conditions-generales',
      de: 'agb',
      pt: 'termos-e-condicoes',
      id: 'syarat-dan-ketentuan',
    },
  },
  {
    id: 'cookie-policy',
    type: 'legal',
    slugs: {
      en: 'cookie-policy',
      es: 'politica-de-cookies',
      fr: 'politique-de-cookies',
      de: 'cookie-richtlinie',
      pt: 'politica-de-cookies',
      id: 'kebijakan-cookie',
    },
  },
  {
    id: 'license',
    type: 'legal',
    slugs: {
      en: 'license',
      es: 'licencia',
      fr: 'licence',
      de: 'lizenz',
      pt: 'licenca',
      id: 'lisensi',
    },
  },
];

export const SITE_ORIGIN = 'https://www.thewhitescreen.org';

/**
 * Returns canonical URL with strict trailing slash
 */
export function getCanonicalUrl(pageId: string, lang: LanguageCode): string {
  const item = SLUG_REGISTRY.find(p => p.id === pageId);
  if (!item) {
    throw new Error(`Page ID not found in SLUG_REGISTRY: ${pageId}`);
  }

  const slug = item.slugs[lang];
  if (lang === 'en') {
    return slug ? `${SITE_ORIGIN}/${slug}/` : `${SITE_ORIGIN}/`;
  }
  return slug ? `${SITE_ORIGIN}/${lang}/${slug}/` : `${SITE_ORIGIN}/${lang}/`;
}

/**
 * Returns relative path with strict trailing slash
 */
export function getRelativePath(pageId: string, lang: LanguageCode): string {
  const item = SLUG_REGISTRY.find(p => p.id === pageId);
  if (!item) {
    throw new Error(`Page ID not found in SLUG_REGISTRY: ${pageId}`);
  }

  const slug = item.slugs[lang];
  if (lang === 'en') {
    return slug ? `/${slug}/` : `/`;
  }
  return slug ? `/${lang}/${slug}/` : `/${lang}/`;
}

/**
 * Returns reciprocal hreflang links for a given page ID
 */
export function getHreflangs(pageId: string): Array<{ lang: string; href: string }> {
  const item = SLUG_REGISTRY.find(p => p.id === pageId);
  if (!item) return [];

  const hreflangs: Array<{ lang: string; href: string }> = [];

  for (const [langCode, slug] of Object.entries(item.slugs)) {
    const href = langCode === 'en'
      ? (slug ? `${SITE_ORIGIN}/${slug}/` : `${SITE_ORIGIN}/`)
      : (slug ? `${SITE_ORIGIN}/${langCode}/${slug}/` : `${SITE_ORIGIN}/${langCode}/`);

    hreflangs.push({ lang: langCode, href });
  }

  // x-default points to English
  const enSlug = item.slugs.en;
  const xDefault = enSlug ? `${SITE_ORIGIN}/${enSlug}/` : `${SITE_ORIGIN}/`;
  hreflangs.push({ lang: 'x-default', href: xDefault });

  return hreflangs;
}
