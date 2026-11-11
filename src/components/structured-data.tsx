import { PRICING, formatPrice } from "@/content/pricing";
import { SITE_URL } from "@/lib/site-url";

/**
 * Sérialise un bloc JSON-LD pour une balise <script>. Le « < » est échappé
 * (\u003c, JSON valide) pour qu'aucune donnée ne puisse fermer la balise.
 */
function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/** Page LinkedIn de l'entreprise, fournie par Joseph le 10 novembre 2026. */
const LINKEDIN_COMPANY_URL = "https://www.linkedin.com/company/sitekept/";

/**
 * Données structurées de l'entité éditrice.
 *
 * Règle appliquée ici : aucune donnée non vérifiable n'est déclarée. Les
 * coordonnées proviennent du footer et des pages légales
 * (src/components/footer.tsx, messages/fr.json).
 *
 * Cette entité n'est déclarée qu'UNE fois par page, ici, depuis le layout
 * marketing (`@id` = `${SITE_URL}/#organization`). Les autres blocs la
 * désignent par cet `@id` (provider, publisher) et ne la redéclarent pas.
 *
 * `sameAs` : la page LinkedIn de l'entreprise, fournie par Joseph. Le lien
 * texte visible vers cette page existe désormais dans le footer
 * (src/components/footer.tsx). Aucun autre profil n'est déclaré.
 *
 * Volontairement ABSENTS, faute de donnée disponible aujourd'hui :
 *  - `address` : la raison sociale, la forme juridique, le SIREN et l'adresse
 *    sont encore « À COMPLÉTER » dans messages/fr.json. Déclarer une adresse
 *    inventée serait une fausse déclaration.
 *  - `aggregateRating` : à n'ajouter QUE si des avis réels et vérifiables
 *    existent. Un rating fabriqué expose à une action manuelle Google.
 *
 * `knowsLanguage` et `knowsAbout` remplacent `availableLanguage` et
 * `serviceType` : ces deux propriétés ne s'appliquent pas à une Organization
 * dans le vocabulaire schema.org (elles relèvent de ContactPoint et de
 * Service). Les valeurs sont inchangées ; les services sont décrits par les
 * blocs Service des pages concernées.
 *
 * `priceRange` est construit à partir de la constante unique des prix
 * (src/content/pricing.ts, plan-v2 § 6 bis). `valueAddedTaxIncluded` n'est
 * pas déclaré : tant que la franchise en base s'applique, aucune TVA n'est
 * facturée.
 */
export function OrganizationJsonLd() {
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
        description:
          "Sitekept crée des sites internet professionnels sur mesure pour artisans, commerces et indépendants, mis en ligne 48 h après réception des éléments du client.",
        sameAs: [LINKEDIN_COMPANY_URL],
        email: "sitekept@gmail.com",
        telephone: "+33651179925",
        priceRange: formatPrice(PRICING.site.amount),
        areaServed: {
          "@type": "Country",
          name: "France",
        },
        knowsLanguage: ["fr", "en"],
        knowsAbout: [
          "Création de site internet",
          "Site vitrine",
          "Refonte de site web",
          "Optimisation SEO",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Sitekept",
        inLanguage: "fr-FR",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}

interface BlogPostingJsonLdProps {
  slug: string;
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
 *
 * `author` reprend la signature affichée à l'écran (« Équipe Sitekept »),
 * déclarée comme Organization sans `@id` : c'est une signature d'équipe, pas
 * une seconde déclaration de l'entité éditrice. Aucune Person n'est inventée.
 * Un auteur nommé et visible relève de la tâche 0.6.
 */
export function BlogPostingJsonLd({
  slug,
  headline,
  description,
  publishedAt,
  updatedAt,
  author,
  locale,
}: BlogPostingJsonLdProps) {
  const url = `${SITE_URL}/blog/${slug}`;

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
    inLanguage: locale === "fr" ? "fr-FR" : "en",
    author: { "@type": "Organization", name: author, url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#organization` },
    image: `${SITE_URL}/opengraph-image`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
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
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
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
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}

interface ServiceJsonLdProps {
  /** Chemin de la page qui présente le service, par exemple `/seo-geo`. */
  path: string;
  name: string;
  description: string;
  serviceType: string;
  /** Public visé, uniquement si la page le nomme (page métier). */
  audienceType?: string;
}

/**
 * Service présenté par la page. Le prestataire est l'entité éditrice, citée
 * par son `@id` : elle est déclarée une seule fois par le layout marketing.
 *
 * Volontairement ABSENTS : `offers`, prix et monnaie. Les prix viendront
 * d'une constante unique, avec le balisage OfferCatalog (plan-v2 § 9,
 * phase 4).
 */
export function ServiceJsonLd({
  path,
  name,
  description,
  serviceType,
  audienceType,
}: ServiceJsonLdProps) {
  const url = `${SITE_URL}${path}`;

  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    url,
    name,
    description,
    serviceType,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "France" },
    ...(audienceType
      ? { audience: { "@type": "Audience", audienceType } }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
