# Technical & Architectural Decisions (ADR)
**Project**: TheWhiteScreen.org
**Role**: Senior Technical SEO & Frontend Infrastructure Engineer

This document outlines all architectural, SEO, infrastructure, and technical decisions made during the design and build of TheWhiteScreen.org.

---

## 1. Static Generation Architecture & Framework Choice

- **Framework**: Astro (Static Site Generation mode: `output: "static"`).
- **Rationale**: Search engines demand pre-rendered, crawlable HTML with 0ms hydration blocking. Astro delivers 100% pre-rendered HTML by default with zero client-side JavaScript overhead for content pages.
- **Content Collections & Typing**: All page data (26 colors, 15 specialized tools, 16 background themes, wallpapers, 20 comprehensive guides, and 6 legal pages) are managed via typed JSON and Markdown content structures under `/src/content/`, rather than being hardcoded in UI components.
- **Hydration Policy**: Only the interactive full-screen canvas/utility component hydrates as an isolated vanilla TypeScript island. If JavaScript is disabled, the page continues to present complete editorial copy, full resolution specs, instructions, FAQ accordions (HTML `<details>` fallback), and semantic links.

---

## 2. URL Structure, Trailing Slashes & Canonical Rules

- **Host & Protocol**: Canonical hostname is strictly `https://www.thewhitescreen.org`.
  - Non-www (`thewhitescreen.org`) 301-redirects to `www.thewhitescreen.org`.
  - HTTP 301-redirects to HTTPS.
- **Trailing Slash Policy**: Strict `trailingSlash: 'always'` in Astro. Every content URL ends with `/` (e.g. `https://www.thewhitescreen.org/black-screen/`).
- **No Query Parameters or Hashes for Indexation**: Every color, tool, theme, wallpaper, and guide page has its own dedicated, clean, lowercase slug.
- **Self-Referential Canonicals**: Every page outputs an absolute canonical link matching its exact URL, scheme, host, and trailing slash.
- **Internal Linking Enforcement**: All internal links across header, footer, contextual copy, and "Related Tools" blocks use absolute or root-relative paths with the mandatory trailing slash. A build-time check (`npm run seo:check`) validates that no internal links redirect or omit trailing slashes.

---

## 3. Multilingual Strategy & Localized Slugs

- **Active Published Languages**:
  The site now publishes 8 fully localized languages (totaling 751 pre-rendered static HTML pages):
  1. **en**: English (Root `/`)
  2. **es**: Español (`/es/`)
  3. **fr**: Français (`/fr/`)
  4. **de**: Deutsch (`/de/`)
  5. **pt**: Português (`/pt/`)
  6. **id**: Bahasa Indonesia (`/id/`)
  7. **it**: Italiano (`/it/`)
  8. **nl**: Nederlands (`/nl/`)
- **Localized Slugs**:
  Non-English pages do not use generic English slugs. Instead, `/src/i18n/slugs.ts` maps semantic slugs based on local search volume:
  - English: `/white-screen/`
  - Spanish: `/es/pantalla-blanca/`
  - French: `/fr/ecran-blanc/`
  - German: `/de/weisser-bildschirm/`
  - Portuguese: `/pt/tela-branca/`
  - Indonesian: `/id/layar-putih/`
  - Italian: `/it/schermo-bianco/`
  - Dutch: `/nl/wit-scherm/`
- **Zero English Fallback**:
  The i18n dictionary system requires every translation key to be present in each published language. The build-time SEO audit script fails if any non-English page contains untranslated placeholder text or fallback English strings.
- **Reciprocal Hreflang Tags**:
  Every translated page emits `<link rel="alternate" hreflang="xx" href="...">` for all 8 published translations of that specific entity, plus `hreflang="x-default"` pointing to the canonical English version. Only pages that actually exist in a given language are emitted.

---

## 4. Interactive Island & Accessibility (WCAG AA)

- **Vanilla TS Island**: The interactive screen tool is implemented in pure TypeScript without React, Vue, or heavy external state libraries.
- **Fullscreen API**: Supports standard `requestFullscreen()` with WebKit fallback (`webkitRequestFullscreen()`) for Safari and iOS mobile browsers.
- **Screen Wake Lock API**: Uses `navigator.wakeLock.request('screen')` with visibility change listeners to ensure mobile and laptop screens do not dim or go to sleep during monitor cleaning or video call lighting.
- **Lighting Controls**: Color picker with dual HEX/RGB inputs, brightness slider (10% to 100%), and color temperature warmth slider (2700K to 6500K) for Zoom/webcam fill lighting.
- **RGB Auto-Cycle Pixel Test**: Configurable cycle timer (3s, 5s, 10s) rotating through pure Red, Green, Blue, White, and Black for identifying stuck and dead subpixels.
- **Keyboard Shortcuts**:
  - `F`: Toggle Fullscreen
  - `1`-`9`: Quick color jump
  - `ArrowLeft` / `ArrowRight`: Step through spectrum
  - `Esc`: Exit Fullscreen
- **Accessibility**:
  - Semantic ARIA attributes (`aria-label`, `role="region"`, `aria-expanded`).
  - High-contrast visual focus rings.
  - Respects `prefers-reduced-motion` for transitions.
  - Directional `dir="rtl"` support built into the HTML shell for Arabic expansion.

---

## 5. Client-Side High-Resolution Wallpaper Generation

- **Canvas 2D Offscreen Engine**:
  Rather than storing hundreds of megabytes of static blank raster images in git, wallpapers are generated client-side at download time using an HTML5 Canvas buffer.
- **Supported Resolutions & Aspect Ratios**:
  - Full HD (1920 × 1080, 16:9)
  - 2K QHD (2560 × 1440, 16:9)
  - 4K UHD (3840 × 2160, 16:9)
  - 5K Retina (5120 × 2880, 16:9)
  - 8K UHD (7680 × 4320, 16:9)
  - Mobile Portrait (1080 × 1920, 9:16)
  - Square / Tablet (2048 × 2048, 1:1)
- **Supported Formats**: Lossless PNG, high-efficiency WEBP, and standard JPEG.

---

## 6. On-Page Technical SEO & Schema Markup

- **Title Tags**: 50-60 characters, front-loading the primary keyword followed by the brand separator (e.g. `White Screen – Fullscreen Bright Display & Lighting Tool`).
- **Meta Descriptions**: 140-155 characters with clear value proposition and call to action.
- **Single H1**: Exactly one `<h1>` per page matching the page's search intent.
- **Structured Data (JSON-LD)**:
  - `WebSite`: Sitelinks search box & publisher info.
  - `Organization`: Brand metadata, logo, and contact info.
  - `WebApplication`: Operating system `All`, category `UtilitiesApplication`, price `0 USD`.
  - `BreadcrumbList`: Structured hierarchy linking back to Home and category hubs.
  - `FAQPage`: Schema entity matching the on-page FAQs to enhance rich snippet eligibility.
  - `Article`: Applied to all 20 guides with `author`, `publisher`, `datePublished`, and `dateModified`.
- **OpenGraph & Twitter Cards**: Dynamic SVG-based social share previews outputting `1200x630` graphics.

---

## 7. Performance & Core Web Vitals (CWV)

- **Target Metrics**: Mobile Lighthouse 98+, LCP < 1.2s, CLS 0.00, INP < 100ms.
- **Font Strategy**: System native font stack (`system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto...`). Zero external HTTP font requests, zero render blocking, zero layout shifts.
- **CSS Strategy**: Tailwind CSS compiling into a single atomic stylesheet inlined or preloaded at build time.
- **Asset Weight**: Total page weight under 80KB (gzipped < 25KB) per page.

---

## 8. Sitemaps & Robots Architecture

- **Sitemap Index**: `/sitemap-index.xml` referencing language-specific sitemaps:
  - `/sitemap-en.xml`
  - `/sitemap-es.xml`
  - `/sitemap-fr.xml`
  - `/sitemap-de.xml`
  - `/sitemap-pt.xml`
  - `/sitemap-id.xml`
- **Accurate Lastmod**: Dates extracted from content release records, not build timestamps, preserving crawl budget.
- **Robots.txt**: Clean allow-all policy with explicit `Sitemap: https://www.thewhitescreen.org/sitemap-index.xml` declaration.
- **Redirects**: Comprehensive 301 redirection rules for legacy paths and trailing-slash normalization via `_redirects` and `vercel.json`.
