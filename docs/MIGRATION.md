# URL Migration & Google Search Console Checklist
**Project**: TheWhiteScreen.org  
**Target Host**: `https://www.thewhitescreen.org`  
**Standard**: 301 Permanent Redirects, Trailing Slash Always, Canonical Consistency

---

## 1. Migration Strategy Overview

The previous iteration of the site suffered from:
1. Inconsistent URL formatting (mix of slash and non-slash URLs resulting in duplicate indexing).
2. Malformed XML sitemaps containing HTML content or broken URLs.
3. English UI text leakage on international paths causing soft 404s and search de-indexing.
4. Non-reciprocal or missing `hreflang` tags.

### Core Architectural Rules:
- **Canonical Host**: `https://www.thewhitescreen.org` (strictly `www` and `https`).
- **Trailing Slash**: Mandatory `trailingSlash: 'always'` on all indexable content paths.
- **Status Code**: Every non-canonical request is redirected via `301 Moved Permanently`.
- **Sitemap**: `/sitemap-index.xml` referencing language-specific sitemaps (`sitemap-en.xml`, `sitemap-es.xml`, `sitemap-fr.xml`, `sitemap-de.xml`, `sitemap-pt.xml`, `sitemap-id.xml`).

---

## 2. Comprehensive Old to New URL Redirect Map

| Legacy / Incoming Pattern | Canonical Destination | Status Code | Notes |
|:---|:---|:---:|:---|
| `http://thewhitescreen.org/*` | `https://www.thewhitescreen.org/*` | 301 | Enforce HTTPS & WWW |
| `https://thewhitescreen.org/*` | `https://www.thewhitescreen.org/*` | 301 | Enforce WWW subdomain |
| `https://www.thewhitescreen.org/white-screen` | `https://www.thewhitescreen.org/` | 301 | English white screen tool is canonical at root |
| `https://www.thewhitescreen.org/white-screen/` | `https://www.thewhitescreen.org/` | 301 | Consolidated to root |
| `https://www.thewhitescreen.org/sitemap.xml` | `https://www.thewhitescreen.org/sitemap-index.xml` | 301 | Legacy sitemap redirect |
| `https://www.thewhitescreen.org/sitemap` | `https://www.thewhitescreen.org/sitemap-index.xml` | 301 | Non-extension sitemap redirect |
| `https://www.thewhitescreen.org/es` | `https://www.thewhitescreen.org/es/` | 301 | Missing trailing slash |
| `https://www.thewhitescreen.org/fr` | `https://www.thewhitescreen.org/fr/` | 301 | Missing trailing slash |
| `https://www.thewhitescreen.org/de` | `https://www.thewhitescreen.org/de/` | 301 | Missing trailing slash |
| `https://www.thewhitescreen.org/pt` | `https://www.thewhitescreen.org/pt/` | 301 | Missing trailing slash |
| `https://www.thewhitescreen.org/id` | `https://www.thewhitescreen.org/id/` | 301 | Missing trailing slash |
| `https://www.thewhitescreen.org/about` | `https://www.thewhitescreen.org/about/` | 301 | Enforce trailing slash |
| `https://www.thewhitescreen.org/contact` | `https://www.thewhitescreen.org/contact/` | 301 | Enforce trailing slash |
| `https://www.thewhitescreen.org/privacy-policy` | `https://www.thewhitescreen.org/privacy-policy/` | 301 | Enforce trailing slash |
| `https://www.thewhitescreen.org/terms-and-conditions` | `https://www.thewhitescreen.org/terms-and-conditions/` | 301 | Enforce trailing slash |
| `https://www.thewhitescreen.org/cookie-policy` | `https://www.thewhitescreen.org/cookie-policy/` | 301 | Enforce trailing slash |
| `https://www.thewhitescreen.org/license` | `https://www.thewhitescreen.org/license/` | 301 | Enforce trailing slash |
| `https://www.thewhitescreen.org/dead-pixel-test` | `https://www.thewhitescreen.org/dead-pixel-test/` | 301 | Enforce trailing slash |
| `https://www.thewhitescreen.org/screen-cleaning` | `https://www.thewhitescreen.org/screen-cleaning/` | 301 | Enforce trailing slash |
| `https://www.thewhitescreen.org/zoom-ring-light` | `https://www.thewhitescreen.org/zoom-ring-light/` | 301 | Enforce trailing slash |

---

## 3. Server Configuration Artifacts

### Cloudflare Pages (`public/_redirects`)
Already committed and active in `public/_redirects`:
```text
/sitemap.xml /sitemap-index.xml 301
/sitemap /sitemap-index.xml 301
/fr /fr/ 301
/es /es/ 301
/de /de/ 301
/pt /pt/ 301
/id /id/ 301
/about /about/ 301
/contact /contact/ 301
/privacy-policy /privacy-policy/ 301
/terms-and-conditions /terms-and-conditions/ 301
/cookie-policy /cookie-policy/ 301
/license /license/ 301
/white-screen / 301
```

### Vercel (`vercel.json`)
Already committed and active in `vercel.json`:
```json
{
  "trailingSlash": true,
  "redirects": [
    { "source": "/sitemap.xml", "destination": "/sitemap-index.xml", "permanent": true },
    { "source": "/white-screen/", "destination": "/", "permanent": true }
  ]
}
```

---

## 4. Google Search Console Action Checklist

Execute following deployment to clear indexation errors and restore search dominance:

### Phase 1: Property Verification & Clean Sitemaps Submission
- [ ] **Verify Domain Property**: Ensure `https://www.thewhitescreen.org` is verified via DNS TXT record or HTML verification tag (`google-site-verification` included in Layout `<head>`).
- [ ] **Remove Old Sitemaps**: In GSC > *Sitemaps*, delete any failed or legacy `sitemap.xml` entries that showed parse errors.
- [ ] **Submit New Sitemap Index**: Submit `https://www.thewhitescreen.org/sitemap-index.xml`.
- [ ] **Verify Language Sitemaps**: Confirm GSC successfully fetches all 6 child sitemaps:
  - `/sitemap-en.xml` (94 URLs)
  - `/sitemap-es.xml` (94 URLs)
  - `/sitemap-fr.xml` (94 URLs)
  - `/sitemap-de.xml` (94 URLs)
  - `/sitemap-pt.xml` (94 URLs)
  - `/sitemap-id.xml` (94 URLs)

### Phase 2: Live URL Inspection & Reciprocal Hreflang Validation
- [ ] **Test Live URL on Root**: In GSC > *URL Inspection*, test `https://www.thewhitescreen.org/`.
  - Confirm: "Page is indexable", "User-declared canonical" matches "Google-selected canonical".
- [ ] **Test International URLs**: Inspect `/es/pantalla-blanca/`, `/fr/ecran-blanc/`, and `/de/weisser-bildschirm/`.
  - Confirm that Google detects valid alternate links for all 6 languages + x-default.
- [ ] **Request Indexing for Hub Pages**: Request indexing on the 10 top traffic hubs:
  - `https://www.thewhitescreen.org/`
  - `https://www.thewhitescreen.org/black-screen/`
  - `https://www.thewhitescreen.org/dead-pixel-test/`
  - `https://www.thewhitescreen.org/zoom-ring-light/`
  - `https://www.thewhitescreen.org/white-wallpaper-4k/`
  - `https://www.thewhitescreen.org/how-to-clean-laptop-screen-safely/`

### Phase 3: Monitoring Index Coverage & Core Web Vitals
- [ ] **Monitor Page Indexing Report**:
  - Check "Page with redirect": Verify that incoming non-slash and http requests are recognized as valid 301 redirects.
  - Check "Alternative page with proper canonical tag": Confirm non-canonical variants are attributed correctly.
  - Zero "Soft 404" errors: Ensure no non-English pages are flagged for empty or untranslated content.
- [ ] **Verify Core Web Vitals**:
  - Mobile LCP < 1.8s (zero blocking scripts, CSS inlined, SVG/Canvas rendering).
  - CLS = 0.00 (static dimensions set on canvas preview box).
  - INP < 100ms (lightweight vanilla TypeScript islands).
