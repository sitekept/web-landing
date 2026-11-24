import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import {
  ECOMMERCE_CATEGORIES,
  ECOMMERCE_PRODUCTS,
  eCommerce,
} from "@/content/templates/e-commerce";
import { getTemplateCopy } from "@/content/templates/types";

import { Catalog } from "./catalog";
import { ProductCard, SIZES } from "./parts";

/** Boutique : titre, puis catalogue filtrable (cartes rendues côté serveur). */
export function ShopView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(eCommerce, locale);

  return (
    <TemplateSection density="compact">
      <TemplateHeading
        as="h1"
        eyebrow={copy.shop.eyebrow}
        title={copy.shop.title}
        description={copy.shop.description}
      />
      <div className="mt-10">
        <Catalog
          categories={ECOMMERCE_CATEGORIES.map((key) => ({
            key,
            label: copy.categories[key].label,
          }))}
          labels={copy.shop}
          items={ECOMMERCE_PRODUCTS.map((item) => ({
            id: item.id,
            category: item.category,
            price: item.price,
            sold: item.sold30,
            isNew: item.isNew,
            card: (
              <ProductCard
                locale={locale}
                item={item}
                sizes={SIZES.card3}
                headingLevel="h2"
              />
            ),
          }))}
        />
      </div>
    </TemplateSection>
  );
}
