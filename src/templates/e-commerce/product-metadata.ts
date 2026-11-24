import type { Metadata } from "next";

import {
  eCommerce,
  eCommerceProductPath,
  type ECommerceProductId,
} from "@/content/templates/e-commerce";
import type { TemplateLocale } from "@/content/templates/types";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";

/**
 * Métadonnées d'une fiche produit (`/e-commerce/produit/<id>`).
 *
 * Les fiches ne sont pas des pages de `paths` (une par produit) : on passe à
 * `buildTemplatePageMetadata` une définition réduite à la seule page
 * `produit`, avec le chemin et le titre de ce produit dans chaque langue. Le
 * reste (noindex, Open Graph, Twitter, hreflang FR / EN) est le même que pour
 * toute page de template.
 */
export function buildProductMetadata(
  id: ECommerceProductId,
  locale: TemplateLocale
): Metadata {
  const meta = (lang: TemplateLocale) => {
    const copy = eCommerce.copy[lang];
    const text = copy.products[id];
    return {
      meta: {
        produit: {
          title: `${text.name} - ${copy.brand.name}`,
          description: `${text.short}. ${text.description}`,
        },
      },
    };
  };

  return buildTemplatePageMetadata(
    {
      slug: eCommerce.slug,
      paths: { produit: eCommerceProductPath(id) },
      copy: { fr: meta("fr"), en: meta("en") },
    },
    locale,
    "produit"
  );
}
