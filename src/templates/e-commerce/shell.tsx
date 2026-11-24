import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import {
  TemplateShell,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import {
  ECOMMERCE_CATEGORIES,
  ECOMMERCE_PRODUCTS,
  eCommerce,
} from "@/content/templates/e-commerce";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

import { CartProvider, CartToast } from "./cart-context";
import { CartBar } from "./cart-bar";

/**
 * Shell de la boutique : bandeau livraison et retours, marque, navigation
 * (accueil, boutique, espace gestion), CTA panier, barre de panier mobile
 * (client), bulle d'ajout et pied de page à colonnes. Le panier (contexte
 * client) enveloppe tout le shell, pour que la barre mobile, la bulle et les
 * pages lisent le même état.
 */
export function ECommerceShell({
  locale,
  children,
}: {
  locale: TemplateLocale;
  children: ReactNode;
}) {
  const copy = getTemplateCopy(eCommerce, locale);
  const { paths } = eCommerce;
  const cartHref = templateHref(locale, paths.panier);
  const names = Object.fromEntries(
    ECOMMERCE_PRODUCTS.map((item) => [item.id, copy.products[item.id].name])
  );
  const footerLink =
    "inline-flex min-h-6 items-center underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink";

  return (
    <CartProvider>
      <TemplateShell
        locale={locale}
        localeSwitch={hasTemplateLocale(eCommerce, "en")}
        theme={eCommerce.theme}
        topBar={
          <>
            <span>{copy.topBar.shipping}</span>
            <span>{copy.topBar.returns}</span>
          </>
        }
        topBarTone="tint"
        brand={{
          href: paths.home,
          name: copy.brand.name,
          tagline: copy.brand.tagline,
          mark: (
            <div
              aria-hidden="true"
              className="flex size-10 items-center justify-center rounded-tpl-pill bg-tpl-accent text-tpl-accent-ink"
            >
              <ShoppingBag className="size-5" />
            </div>
          ),
        }}
        nav={[
          { href: paths.home, label: copy.nav.home },
          { href: paths.boutique, label: copy.nav.shop },
          { href: paths.crm, label: copy.nav.crm },
        ]}
        cta={{
          href: paths.panier,
          label: copy.nav.cart,
          icon: <ShoppingBag aria-hidden="true" className="size-4" />,
        }}
        mobileActionsLabel={copy.cartBar.label}
        mobileActions={
          <CartBar locale={locale} cartHref={cartHref} labels={copy.cartBar} />
        }
        footer={
          <footer className="border-t border-tpl-line bg-tpl-tint px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
              <div className="max-w-sm">
                <p className="font-tpl-display text-tpl-xl font-(weight:--tpl-display-weight)">
                  {copy.brand.name}
                </p>
                <p className="mt-3 text-tpl-sm text-tpl-ink-muted">
                  {copy.footer.text}
                </p>
              </div>
              <div className="space-y-2 text-tpl-sm">
                <p className="font-semibold">{copy.footer.shopTitle}</p>
                <ul className="space-y-1">
                  {ECOMMERCE_CATEGORIES.map((key) => (
                    <li key={key}>
                      <Link
                        href={`${templateHref(locale, paths.boutique)}?categorie=${key}`}
                        className={footerLink}
                      >
                        {copy.categories[key].label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href={templateHref(locale, paths.crm)}
                      className={footerLink}
                    >
                      {copy.nav.crm}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-2 text-tpl-sm">
                <p className="font-semibold">{copy.footer.helpTitle}</p>
                <ul className="space-y-1 text-tpl-ink-muted">
                  {copy.footer.help.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2 text-tpl-sm">
                <p className="font-semibold">{copy.footer.contactTitle}</p>
                <p className="text-tpl-ink-muted">{copy.footer.email}</p>
                <p className="text-tpl-ink-muted tabular-nums">
                  {copy.footer.phone}
                </p>
                <p className="pt-2 text-tpl-xs text-tpl-ink-muted">
                  {copy.footer.demo}
                </p>
              </div>
            </div>
          </footer>
        }
      >
        {children}
        <CartToast names={names} cartHref={cartHref} labels={copy.toast} />
      </TemplateShell>
    </CartProvider>
  );
}
