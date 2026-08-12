import { MetadataRoute } from "next";
import { blogPosts } from "@/content/site-content";
import { metierPages } from "@/content/metier-pages";
import { SITE_URL } from "@/lib/site-url";

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
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/templates`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tarifs`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Pages métier : cible « site internet {métier} », longue traîne à forte
    // intention commerciale.
    ...metierPages.map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    {
      url: `${baseUrl}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/seo-geo`,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${baseUrl}/realization`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
