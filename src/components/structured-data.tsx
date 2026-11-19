import type { SiteLocale } from "@/content/site-content";
import { absoluteUrl, localizePath } from "@/lib/localized-routes";
import { SITE_URL } from "@/lib/site-url";

const ORGANIZATION_COPY = {
  fr: {
    description:
      "Sitekept conçoit et livre des sites professionnels en 48 h, sans abonnement imposé, avec déploiement inclus et optimisation SEO.",
    priceRange: "À partir de 500 €",
    serviceType: [
      "Création de site internet",
      "Site vitrine",
      "Refonte de site web",
      "Optimisation SEO",
    ],
    inLanguage: "fr-FR",
  },
  en: {
    description:
      "Sitekept designs and delivers professional websites in 48 hours, with no mandatory subscription, deployment included and SEO built in.",
    priceRange: "From €500",
    serviceType: [
      "Website design",
      "Business website",
      "Website redesign",
      "SEO optimization",
    ],
    inLanguage: "en-US",
  },
} as const;

/**
 * Données structurées de l'entité éditrice.
 *
 * Règle appliquée ici : aucune donnée non vérifiable n'est déclarée. Les
 * coordonnées proviennent du footer et des pages légales
 * (src/components/footer.tsx, messages/fr.json).
 *
 * Volontairement ABSENTS, faute de donnée disponible aujourd'hui :
 *  - `address` : la raison sociale, la forme juridique, le SIREN et l'adresse
 *    sont encore « À COMPLÉTER » dans messages/fr.json. Déclarer une adresse
 *    inventée serait une fausse déclaration.
 *  - `sameAs` : aucun profil social n'est lié depuis le site. À ajouter dès
 *    qu'une page LinkedIn d'entreprise est reliée depuis le footer.
 *  - `aggregateRating` : à n'ajouter QUE si des avis réels et vérifiables
 *    existent. Un rating fabriqué expose à une action manuelle Google.
 */
export function OrganizationJsonLd({ locale }: { locale: SiteLocale }) {
  const copy = ORGANIZATION_COPY[locale];
  const websiteUrl = absoluteUrl(localizePath("/", locale));

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#organization`,
        name: "Sitekept",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo-sitekept-rond.webp`,
        },
        image: `${SITE_URL}/opengraph-image`,
        description: copy.description,
        email: "sitekept@gmail.com",
        telephone: "+33651179925",
        priceRange: copy.priceRange,
        areaServed: {
          "@type": "Country",
          name: "France",
        },
        availableLanguage: ["fr", "en"],
        serviceType: copy.serviceType,
      },
      {
        "@type": "WebSite",
        "@id": `${websiteUrl}#website`,
        url: websiteUrl,
        name: "Sitekept",
        inLanguage: copy.inLanguage,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface BlogPostingJsonLdProps {
  /** Chemin de l'article dans la langue de la page. */
  path: string;
  headline: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  locale: string;
}

/**
 * Schéma d'article. `datePublished` et `author` sont obligatoires côté Google
 * pour l'éligibilité aux résultats enrichis d'article — ils n'existaient pas
 * dans le contenu avant l'ajout des champs correspondants à `BlogPost`.
 */
export function BlogPostingJsonLd({
  path,
  headline,
  description,
  publishedAt,
  updatedAt,
  author,
  locale,
}: BlogPostingJsonLdProps) {
  const url = absoluteUrl(path);

  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    headline,
    description,
    datePublished: publishedAt,
    dateModified: updatedAt,
    inLanguage: locale === "fr" ? "fr-FR" : "en-US",
    author: { "@type": "Organization", name: author, url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#organization` },
    image: `${SITE_URL}/opengraph-image`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * FAQ. À n'utiliser que si les questions/réponses sont réellement visibles
 * sur la page : Google exige que le contenu balisé soit présent à l'écran.
 */
export function FaqJsonLd({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Fil d'Ariane. `items` est ordonné de la racine à la page courante ; le
 * dernier élément est la page elle-même.
 */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
