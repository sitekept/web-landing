import {
  TemplateHeading,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import {
  ECOMMERCE_PRODUCTS,
  eCommerce,
  eCommerceProductPath,
} from "@/content/templates/e-commerce";
import { getTemplateCopy } from "@/content/templates/types";

import { CartView } from "./cart-view";

/** Page panier : titre, puis le panier client (lignes, récapitulatif, adresse). */
export function CartPageView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(eCommerce, locale);

  return (
    <TemplateSection density="compact">
      <TemplateHeading
        as="h1"
        eyebrow={copy.cart.eyebrow}
        title={copy.cart.title}
      />
      <div className="mt-10">
        <CartView
          locale={locale}
          copy={copy.cart}
          shopHref={templateHref(locale, eCommerce.paths.boutique)}
          products={ECOMMERCE_PRODUCTS.map((item) => ({
            id: item.id,
            name: copy.products[item.id].name,
            short: copy.products[item.id].short,
            price: item.price,
            stock: item.stock,
            image: item.image,
            href: templateHref(locale, eCommerceProductPath(item.id)),
          }))}
        />
      </div>
    </TemplateSection>
  );
}
