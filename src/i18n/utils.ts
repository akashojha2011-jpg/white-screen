import { ui, defaultLang, languages } from './ui';

export function getLangFromUrl(url: URL): keyof typeof ui {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]): any {
    return ui[lang]?.[key] ?? ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, targetLang: string = lang) {
    const cleanPath = path.replace(/^\/(en|fr|de|es|pt|tr|id|pl|nl|it|ar|ja|ko|ru)(\/|$)/, '/');
    const formattedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
    
    if (targetLang === defaultLang) {
      return formattedPath === '//' ? '/' : formattedPath;
    }
    
    return `/${targetLang}${formattedPath === '/' ? '' : formattedPath}`;
  };
}

export function getHreflangLinks(url: URL, siteOrigin: string = 'https://www.thewhitescreen.org') {
  const currentPath = url.pathname;
  const cleanPath = currentPath.replace(/^\/(en|fr|de|es|pt|tr|id|pl|nl|it|ar|ja|ko|ru)(\/|$)/, '/');
  let normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  if (!normalizedPath.endsWith('/')) {
    normalizedPath += '/';
  }

  const hreflangs: Array<{ lang: string; href: string }> = [];

  for (const langCode of Object.keys(languages)) {
    let href = '';
    if (langCode === defaultLang) {
      href = `${siteOrigin}${normalizedPath}`;
    } else {
      const subPath = normalizedPath === '/' ? '/' : normalizedPath;
      href = `${siteOrigin}/${langCode}${subPath}`;
    }
    hreflangs.push({ lang: langCode, href });
  }

  // x-default points to default language (en)
  hreflangs.push({ lang: 'x-default', href: `${siteOrigin}${normalizedPath}` });

  return hreflangs;
}
