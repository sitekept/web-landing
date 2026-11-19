import { blogPosts, type SiteLocale } from "@/content/site-content";
import { metierPages } from "@/content/metier-pages";
import { metierPagesEn } from "@/content/metier-pages-en";
import { SITE_URL } from "@/lib/site-url";
import { STATIC_PATH_MAP, localizeHref, type PathMap } from "@/lib/i18n-paths";

/**
 * Table complète français → anglais : pages fixes, articles et pages métier.
 * Chaque article et chaque page métier porte son slug anglais dans le contenu.
 */
export const PATH_MAP: PathMap = {
  ...STATIC_PATH_MAP,
  ...Object.fromEntries(
    blogPosts.map((post) => [`/blog/${post.slug}`, `/en/blog/${post.enSlug}`])
  ),
  ...Object.fromEntries(
    metierPages.map((page) => [
      `/${page.slug}`,
      `/en/${metierPagesEn[page.slug].slug}`,
    ])
  ),
};

/** Chemin de la page dans la langue demandée, à partir du chemin français. */
export function localizePath(frenchPath: string, locale: SiteLocale): string {
  return localizeHref(frenchPath, locale, PATH_MAP);
}

/** Fabrique un traducteur de liens pour une langue donnée. */
export function linkLocalizer(locale: SiteLocale) {
  return (frenchPath: string) => localizePath(frenchPath, locale);
}

export function absoluteUrl(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

/** Alternatives hreflang d'une page, à partir de son chemin français. */
export function getLanguageAlternates(frenchPath: string) {
  const fr = absoluteUrl(frenchPath);
  const en = absoluteUrl(localizePath(frenchPath, "en"));

  return {
    fr,
    en,
    "x-default": fr,
  };
}
