import { SITE_URL } from "@/lib/site-url";

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
          "Sitekept conçoit et livre des sites professionnels en 48 h, sans abonnement imposé, avec déploiement inclus et optimisation SEO.",
        email: "sitekept@gmail.com",
        telephone: "+33651179925",
        priceRange: "À partir de 500 €",
        areaServed: {
          "@type": "Country",
          name: "France",
        },
        availableLanguage: ["fr", "en"],
        serviceType: [
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
