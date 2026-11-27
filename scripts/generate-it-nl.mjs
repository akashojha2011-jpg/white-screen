// scripts/generate-it-nl.mjs
// Modular generator for Italian (it) and Dutch (nl) content, slugs, UI, and guides

import fs from 'fs';
import path from 'path';

console.log('Generating Italian (it) and Dutch (nl) data...');

// 1. Slugs Mapping for all 94 pages
export const SLUG_ADDITIONS = {
  // Home
  'home': { it: '', nl: '' },

  // Colors (26)
  'white-screen': { it: 'schermo-bianco', nl: 'wit-scherm' },
  'black-screen': { it: 'schermo-nero', nl: 'zwart-scherm' },
  'blue-screen': { it: 'schermo-blu', nl: 'blauw-scherm' },
  'green-screen': { it: 'schermo-verde', nl: 'groen-scherm' },
  'red-screen': { it: 'schermo-rosso', nl: 'rood-scherm' },
  'yellow-screen': { it: 'schermo-giallo', nl: 'geel-scherm' },
  'orange-screen': { it: 'schermo-arancione', nl: 'oranje-scherm' },
  'pink-screen': { it: 'schermo-rosa', nl: 'roze-scherm' },
  'purple-screen': { it: 'schermo-viola', nl: 'paars-scherm' },
  'gold-screen': { it: 'schermo-oro', nl: 'gouden-scherm' },
  'light-blue-screen': { it: 'schermo-azzurro', nl: 'lichtblauw-scherm' },
  'brown-screen': { it: 'schermo-marrone', nl: 'bruin-scherm' },
  'grey-screen': { it: 'schermo-grigio', nl: 'grijs-scherm' },
  'neon-screen': { it: 'schermo-neon', nl: 'neon-scherm' },
  'olive-screen': { it: 'schermo-oliva', nl: 'olijfgroen-scherm' },
  'coral-screen': { it: 'schermo-corallo', nl: 'koraal-scherm' },
  'navy-screen': { it: 'schermo-blu-notte', nl: 'marineblauw-scherm' },
  'mint-screen': { it: 'schermo-menta', nl: 'muntgroen-scherm' },
  'aqua-screen': { it: 'schermo-acqua', nl: 'aqua-scherm' },
  'teal-screen': { it: 'schermo-ottanio', nl: 'blauwgroen-scherm' },
  'cream-screen': { it: 'schermo-crema', nl: 'creme-scherm' },
  'beige-screen': { it: 'schermo-beige', nl: 'beige-scherm' },
  'lavender-screen': { it: 'schermo-lavanda', nl: 'lavendel-scherm' },
  'cyan-screen': { it: 'schermo-ciano', nl: 'cyaan-scherm' },
  'maroon-screen': { it: 'schermo-bordeaux', nl: 'kastanjebruin-scherm' },
  'violet-screen': { it: 'schermo-violetto', nl: 'violet-scherm' },

  // Tools (15)
  'dead-pixel-test': { it: 'test-pixel-bruciati', nl: 'dode-pixel-test' },
  'screen-cleaning': { it: 'pulizia-schermo', nl: 'scherm-schoonmaken' },
  'zoom-ring-light': { it: 'luce-ring-light-zoom', nl: 'zoom-ringlamp-scherm' },
  'webcam-light': { it: 'illuminazione-webcam', nl: 'webcam-verlichting' },
  'screen-flicker-test': { it: 'test-sfarfallio-schermo', nl: 'schermflikkering-test' },
  'backlight-bleed-test': { it: 'test-fuga-di-luce', nl: 'backlight-bleed-test' },
  'oled-burn-in-test': { it: 'test-burn-in-oled', nl: 'oled-inbrand-test' },
  'monitor-uniformity-test': { it: 'test-uniformita-monitor', nl: 'monitor-uniformiteit-test' },
  'tracing-lightbox': { it: 'tavolo-luminoso-disegno', nl: 'lichtbak-tekenen-scherm' },
  'photography-backdrop': { it: 'sfondo-fotografico-schermo', nl: 'fotografie-achtergrond-scherm' },
  'color-picker-fullscreen': { it: 'selettore-colore-schermo-intero', nl: 'kleurkiezer-volledig-scherm' },
  'fullscreen-rgb-cycle': { it: 'ciclo-colori-rgb-schermo', nl: 'volledig-scherm-rgb-cyclus' },
  'black-screen-10-hours': { it: 'schermo-nero-10-ore', nl: 'zwart-scherm-10-uur' },
  'white-screen-1-hour': { it: 'schermo-bianco-1-ora', nl: 'wit-scherm-1-uur' },
  'screen-timer': { it: 'timer-schermo', nl: 'scherm-timer' },

  // Wallpapers (10)
  'white-wallpaper': { it: 'sfondo-bianco', nl: 'witte-achtergrond' },
  'white-wallpaper-4k': { it: 'sfondo-bianco-4k', nl: 'witte-achtergrond-4k' },
  'white-wallpaper-8k': { it: 'sfondo-bianco-8k', nl: 'witte-achtergrond-8k' },
  'white-background-for-iphone': { it: 'sfondo-bianco-iphone', nl: 'witte-achtergrond-iphone' },
  'white-wallpaper-for-desktop': { it: 'sfondo-bianco-pc', nl: 'witte-achtergrond-pc' },
  'black-wallpaper': { it: 'sfondo-nero', nl: 'zwarte-achtergrond' },
  'black-wallpaper-4k': { it: 'sfondo-nero-4k', nl: 'zwarte-achtergrond-4k' },
  'blue-wallpaper': { it: 'sfondo-blu', nl: 'blauwe-achtergrond' },
  'green-wallpaper': { it: 'sfondo-verde', nl: 'groene-achtergrond' },
  'red-wallpaper': { it: 'sfondo-rosso', nl: 'rode-achtergrond' },

  // Themes (16)
  'sky-background': { it: 'sfondo-cielo', nl: 'lucht-achtergrond' },
  'gradient-background': { it: 'sfondo-sfumato', nl: 'verloop-achtergrond' },
  'space-background': { it: 'sfondo-spazio', nl: 'ruimte-achtergrond' },
  'forest-background': { it: 'sfondo-foresta', nl: 'bos-achtergrond' },
  'fire-background': { it: 'sfondo-fuoco', nl: 'vuur-achtergrond' },
  'wood-background': { it: 'sfondo-legno', nl: 'hout-achtergrond' },
  'water-background': { it: 'sfondo-acqua-texture', nl: 'water-achtergrond' },
  'paper-background': { it: 'sfondo-carta', nl: 'papier-achtergrond' },
  'city-background': { it: 'sfondo-citta', nl: 'stad-achtergrond' },
  'ocean-background': { it: 'sfondo-oceano', nl: 'oceaan-achtergrond' },
  'galaxy-background': { it: 'sfondo-galassia', nl: 'melkweg-achtergrond' },
  'sunset-background': { it: 'sfondo-tramonto', nl: 'zonsondergang-achtergrond' },
  'silver-background': { it: 'sfondo-argento', nl: 'zilver-achtergrond' },
  'snow-background': { it: 'sfondo-neve', nl: 'sneeuw-achtergrond' },
  'carbon-fiber-background': { it: 'sfondo-fibra-di-carbonio', nl: 'koolstofvezel-achtergrond' },
  'concrete-background': { it: 'sfondo-cemento', nl: 'beton-achtergrond' },

  // Guides (20)
  'how-to-clean-laptop-screen-safely': { it: 'come-pulire-schermo-laptop-in-sicurezza', nl: 'laptop-scherm-veilig-schoonmaken' },
  'how-to-check-dead-pixels-iphone-monitor': { it: 'come-controllare-pixel-bruciati-iphone-monitor', nl: 'dode-pixels-controleren-iphone-monitor' },
  'can-white-screen-work-as-ring-light': { it: 'schermo-bianco-come-luce-ring-light', nl: 'kan-wit-scherm-als-ringlamp-werken' },
  'oled-burn-in-causes-fixes-test': { it: 'burn-in-oled-cause-soluzioni-test', nl: 'oled-inbranden-oorzaken-en-oplossingen' },
  'backlight-bleed-vs-ips-glow': { it: 'differenza-fuga-di-luce-e-ips-glow', nl: 'verschil-backlight-bleed-en-ips-glow' },
  'turn-laptop-tablet-into-tracing-lightbox': { it: 'trasformare-schermo-in-tavolo-luminoso-disegno', nl: 'scherm-gebruiken-als-lichtbak-tekenen' },
  'monitor-color-luminance-uniformity-test': { it: 'guida-uniformita-colore-e-luminanza-monitor', nl: 'gids-kleur-en-helderheidsuniformiteit-scherm' },
  'screen-flicker-pwm-eye-strain-test': { it: 'sfarfallio-schermo-pwm-affaticamento-visivo', nl: 'schermflikkering-pwm-en-oogvermoeidheid' },
  'red-screen-night-vision-astronomy-guide': { it: 'luce-schermo-rosso-astronomia-visione-notturna', nl: 'rood-scherm-astronomie-nachtzicht' },
  'green-screen-lighting-zoom-streaming': { it: 'illuminazione-green-screen-streaming-zoom', nl: 'green-screen-verlichting-streaming-zoom' },
  'black-screen-battery-savings-oled-amoled': { it: 'risparmio-batteria-schermo-nero-oled', nl: 'batterij-besparen-zwart-scherm-oled' },
  'macro-product-photography-screen-lighting': { it: 'fotografia-macro-prodotti-illuminazione-schermo', nl: 'productfotografie-met-schermverlichting' },
  'camera-white-balance-calibration-gray-screen': { it: 'calibrazione-bilanciamento-bianco-fotocamera-schermo-grigio', nl: 'witbalans-kalibratie-camera-grijs-scherm' },
  'dual-monitor-ergonomics-secondary-screen-light:': { it: 'ergonomia-doppio-monitor-schermo-secondario-luce', nl: 'ergonomie-dubbele-monitoren-secundair-schermlicht' },
  'fix-stuck-pixels-rgb-screen-cycling': { it: 'riparare-pixel-bloccati-ciclo-colori-rgb', nl: 'vastzittende-pixels-repareren-rgb-cyclus' },
  'screen-brightness-eye-comfort-day-night': { it: 'luminosita-schermo-e-comfort-visivo', nl: 'schermhelderheid-en-oogcomfort' },
  'fullscreen-color-screens-deep-focus-pomodoro': { it: 'schermi-colorati-concentrazione-produttivita', nl: 'kleurenschermen-focus-productiviteit' },
  'monitor-pixel-density-ppi-4k-8k-wallpapers': { it: 'densita-pixel-ppi-sfondi-4k-8k', nl: 'pixeldichtheid-ppi-en-4k-8k-achtergronden' },
  'how-to-test-laptop-displays-before-buying': { it: 'come-testare-schermo-laptop-prima-di-acquistare', nl: 'laptop-scherm-testen-voor-aankoop' },
  'display-panel-types-oled-ips-va-tn-comparison': { it: 'confronto-pannelli-display-oled-ips-va-tn', nl: 'vergelijking-schermpanelen-oled-ips-va-en-tn' },

  // Legal (6)
  'about': { it: 'chi-siamo', nl: 'over-ons' },
  'contact': { it: 'contatti', nl: 'contact' },
  'privacy-policy': { it: 'informativa-sulla-privacy', nl: 'privacybeleid' },
  'terms-and-conditions': { it: 'termini-e-condizioni', nl: 'algemene-voorwaarden' },
  'cookie-policy': { it: 'politica-sui-cookie', nl: 'cookiebeleid' },
  'license': { it: 'licenza', nl: 'licentie' },
};

console.log('SLUG_ADDITIONS defined for all 94 pages.');
