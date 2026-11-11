import { blogPosts } from "@/content/site-content";
import { metierPages } from "@/content/metier-pages";
import {
  PRICING,
  formatPrice,
  vatLegalNotice,
} from "@/content/pricing";
import { SITE_URL } from "@/lib/site-url";

/**
 * /llms.txt, généré au build à partir des mêmes données que le site.
 *
 * Règle : n'y écrire que des faits déjà affichés sur le site (home, /tarifs,
 * pages métier). Les prix et la mention de TVA viennent de la constante
 * unique (src/content/pricing.ts), les liens de `metierPages` et `blogPosts`,
 * l'URL de base de `SITE_URL` (la même que le sitemap). Aucun montant en dur
 * ici. Pas de promesse de position dans les résultats de recherche.
 */
export const dynamic = "force-static";

/** Prix sans espace insécable : le fichier est lu comme du texte brut. */
function price(amount: number, period?: "month" | "year"): string {
  return formatPrice(amount, { period }).replace(/ /g, " ");
}

/** Libellés des pages métier dont le nom diffère du champ `metier`. */
const METIER_LABEL_OVERRIDES: Record<string, string> = {
  "site-internet-dentiste": "Cabinet dentaire",
  "site-internet-avocat": "Cabinet d'avocat",
};

function metierLabel(slug: string, metier: string): string {
  return (
    METIER_LABEL_OVERRIDES[slug] ??
    metier.charAt(0).toUpperCase() + metier.slice(1)
  );
}

function link(label: string, path: string, note?: string): string {
  return `- [${label}](${SITE_URL}${path})${note ? `: ${note}` : ""}`;
}

function buildLlmsTxt(): string {
  const sitePrice = price(PRICING.site.amount);
  const followUpMonthly = price(PRICING.followUp.monthly, "month");
  const followUpAnnual = price(PRICING.followUp.annual, "year");
  const vatNotice = vatLegalNotice();

  const priceLine = vatNotice
    ? `- Prix du site : ${sitePrice}, payé une seule fois. ${vatNotice}.`
    : `- Prix du site : ${sitePrice}, payé une seule fois.`;

  const lines: string[] = [
    "# Sitekept",
    "",
    "> Sitekept crée des sites internet sur mesure pour les professionnels et les petites entreprises. Le site est livré au client, avec le code et les accès.",
    "",
    "## L'offre",
    "",
    "- Public visé : artisans, indépendants et PME locales.",
    "- Chaque site est créé sur mesure. Les modèles présentés sur le site sont des exemples pour se projeter.",
    priceLine,
    "- Délai : le site est en ligne 48 h après réception des éléments complets.",
    "- La rédaction des textes est incluse, avec un questionnaire de 10 minutes, dans la limite des pages prévues au devis.",
    "- Les mentions légales et la politique de confidentialité du site sont rédigées pour le client.",
    "- Le nom de domaine est offert la première année.",
    "- Le code et les accès techniques sont transmis au client.",
    "- Aucun abonnement n'est nécessaire pour que le site existe.",
    `- Accompagnement facultatif « Suivi & Visibilité » : ${followUpMonthly} sans engagement, ou ${followUpAnnual}. Le premier mois est offert à la livraison pour la formule mensuelle. L'arrêter ne touche pas au site.`,
    "- Aucune position dans les résultats de recherche n'est promise : personne ne contrôle l'algorithme des moteurs.",
    "",
    "## Pages principales",
    "",
    link("Accueil", "", "présentation de l'offre et formulaire de devis"),
    link("Tarifs", "/tarifs", "ce qui est inclus et ce qui est facturé à part"),
    link("Templates", "/templates", "exemples de sites par métier"),
    link("Réalisations", "/realization", "sites déjà livrés"),
    link(
      "SEO et GEO",
      "/seo-geo",
      "comment un site devient visible sur Google et dans les réponses des IA"
    ),
    link(
      "Blog",
      "/blog",
      "guides sur la propriété du site, la livraison, le référencement"
    ),
    "",
    "## Pages par métier",
    "",
    ...metierPages.map((page) =>
      link(metierLabel(page.slug, page.metier), `/${page.slug}`)
    ),
    "",
    "## Articles",
    "",
    ...blogPosts.map((post) => link(post.title.fr, `/blog/${post.slug}`)),
    "",
  ];

  return lines.join("\n");
}

export function GET(): Response {
  return new Response(buildLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
