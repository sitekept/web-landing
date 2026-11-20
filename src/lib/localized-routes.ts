import { blogPosts, type SiteLocale } from "@/content/site-content";
import { metierPages } from "@/content/metier-pages";
import { metierPagesEn } from "@/content/metier-pages-en";
import {
  publicTemplates,
  templateServesLocale,
} from "@/content/templates/registry";
import { SITE_URL } from "@/lib/site-url";
import { STATIC_PATH_MAP, localizeHref, type PathMap } from "@/lib/i18n-paths";

/**
 * Table complète français → anglais : pages fixes, articles, pages métier et
 * démos de templates. Chaque article et chaque page métier porte son slug
 * anglais dans le contenu ; une démo a une entrée `/<slug>` → `/en/<slug>` si
 * et seulement si le registre déclare une version anglaise du template
 * (`locales` contient `"en"`). Les autres démos restent absentes de la table :
 * le site anglais renvoie alors vers la démo française.
 *
 * Cette table sert aux liens et au sélecteur de langue, jamais au sitemap ni
 * aux hreflang du site, qui ne parcourent que leurs propres listes de pages
 * (les démos sont `noindex`, voir `src/app/sitemap.ts`).
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
  ...Object.fromEntries(
    publicTemplates
      .filter((template) => templateServesLocale(template, "en"))
      .map((template) => [`/${template.slug}`, `/en/${template.slug}`])
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
