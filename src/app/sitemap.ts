import { MetadataRoute } from "next";
import { blogPosts } from "@/content/site-content";
import { metierPages } from "@/content/metier-pages";
import {
  absoluteUrl,
  getLanguageAlternates,
  localizePath,
} from "@/lib/localized-routes";

/**
 * Sitemap des pages commerciales uniquement.
 *
 * Les pages de démonstration de templates (/boulangerie, /dentiste, ...) en
 * sont volontairement exclues : elles sont servies en `noindex, follow` via
 * src/middleware.ts. Déclarer dans un sitemap des URLs qu'on demande par
 * ailleurs de ne pas indexer enverrait deux signaux contradictoires à Google.
 *
 * `lastModified` n'est renseigné que là où une date réelle existe : les
 * articles portent désormais `updatedAt`. Il reste omis sur les pages
 * statiques, faute de date de modification fiable — un `lastmod` égal à la
 * date de build est un signal de fraîcheur faux, que Google apprend à ignorer.
 *
 * Chaque page est déclarée dans ses deux langues, chacune portant ses
 * alternatives hreflang : l'anglais est servi sous /en avec des slugs propres.
 */
type SitemapEntry = MetadataRoute.Sitemap[number];

interface PageEntry {
  /** Chemin français de la page. */
  path: string;
  changeFrequency: NonNullable<SitemapEntry["changeFrequency"]>;
  priority: number;
  lastModified?: Date;
}

const pages: PageEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/templates", changeFrequency: "weekly", priority: 0.9 },
  { path: "/tarifs", changeFrequency: "monthly", priority: 0.9 },
  // Pages métier : cible « site internet {métier} », longue traîne à forte
  // intention commerciale.
  ...metierPages.map((page) => ({
    path: `/${page.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  })),
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/seo-geo", changeFrequency: "monthly", priority: 0.75 },
  ...blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
  { path: "/realization", changeFrequency: "monthly", priority: 0.6 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.2 },
  { path: "/mentions-legales", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, ...entry }) => {
    const alternates = { languages: getLanguageAlternates(path) };

    return (["fr", "en"] as const).map((locale) => ({
      url: absoluteUrl(localizePath(path, locale)),
      ...entry,
      alternates,
    }));
  });
}
