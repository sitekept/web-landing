import { ArrowLeft, Check, Truck } from "lucide-react";
import Link from "next/link";

import {
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import {
  ECOMMERCE_PRODUCTS,
  eCommerce,
  type ECommerceProductId,
} from "@/content/templates/e-commerce";
import { getTemplateCopy } from "@/content/templates/types";

import { ProductPurchase } from "./cart-controls";
import { formatPrice, getProduct } from "./lib";
import { ProductCard, Rating, SIZES, StockNote } from "./parts";

/**
 * Fiche produit : photo, nom (`h1`), note, prix, disponibilité, quantité et
 * ajout au panier, détails, livraison, puis trois produits de la même
 * catégorie.
 */
export function ProductView({
  locale,
  id,
}: {
  locale: TemplateLocale;
  id: ECommerceProductId;
}) {
  const copy = getTemplateCopy(eCommerce, locale);
  const item = getProduct(id);
  if (!item) return null;
  const text = copy.products[id];
  const categoryLabel = copy.categories[item.category].label;
  const related = ECOMMERCE_PRODUCTS.filter(
    (entry) => entry.category === item.category && entry.id !== item.id
  )
    .sort((a, b) => b.sold30 - a.sold30)
    .slice(0, 3);

  return (
    <>
      <TemplateSection density="compact">
        <Link
          href={templateHref(locale, eCommerce.paths.boutique)}
          className="inline-flex min-h-11 items-center gap-2 text-tpl-sm font-medium text-tpl-ink-muted underline-offset-4 hover:text-tpl-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          {copy.product.back}
        </Link>
        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <TemplateMedia
            src={item.image}
            alt={text.alt}
            ratio="4/5"
            priority
            sizes={SIZES.detail}
          />
          <div className="lg:py-6">
            <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
              {categoryLabel}
              {item.isNew ? ` · ${copy.product.isNew}` : null}
            </p>
            <h1 className="mt-3 font-tpl-display text-tpl-3xl leading-tpl-display font-(weight:--tpl-display-weight) text-balance">
              {text.name}
            </h1>
            <p className="mt-2 text-tpl-base text-tpl-ink-muted">
              {text.short}
            </p>
            <div className="mt-4">
              <Rating
                locale={locale}
                rating={item.rating}
                reviews={item.reviews}
              />
            </div>
            <p className="mt-6 text-tpl-2xl font-semibold tabular-nums">
              {formatPrice(item.price, locale)}
            </p>
            <div className="mt-3">
              <StockNote
                locale={locale}
                stock={item.stock}
                threshold={item.threshold}
              />
            </div>
            <p className="mt-6 max-w-tpl-measure text-tpl-base text-pretty">
              {text.description}
            </p>
            <div className="mt-8">
              <ProductPurchase
                id={item.id}
                stock={item.stock}
                labels={{
                  quantity: copy.product.quantity,
                  decrease: copy.product.decrease,
                  increase: copy.product.increase,
                  add: copy.product.add,
                  soldOut: copy.product.soldOut,
                }}
              />
            </div>
            <div className="mt-10 grid gap-8 border-t border-tpl-line pt-8 sm:grid-cols-2">
              <div>
                <h2 className="text-tpl-sm font-semibold">
                  {copy.product.detailsTitle}
                </h2>
                <ul className="mt-3 space-y-2">
                  {text.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-tpl-sm text-tpl-ink-muted"
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-tpl-accent"
                      />
                      {detail}
                    </li>
                  ))}
                  <li className="text-tpl-xs text-tpl-ink-muted tabular-nums">
                    {item.sku}
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="flex items-center gap-2 text-tpl-sm font-semibold">
                  <Truck
                    aria-hidden="true"
                    className="size-4 text-tpl-accent"
                  />
                  {copy.product.deliveryTitle}
                </h2>
                <p className="mt-3 text-tpl-sm text-tpl-ink-muted">
                  {copy.product.delivery}
                </p>
              </div>
            </div>
          </div>
        </div>
      </TemplateSection>

      {related.length > 0 ? (
        <TemplateSection
          tone="raised"
          title={copy.product.relatedTitle}
          titleScale="subtitle"
          className="border-t border-tpl-line"
        >
          <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3">
            {related.map((entry) => (
              <li key={entry.id}>
                <ProductCard locale={locale} item={entry} sizes={SIZES.card3} />
              </li>
            ))}
          </ul>
        </TemplateSection>
      ) : null}
    </>
  );
}
