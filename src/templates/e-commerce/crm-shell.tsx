import { LayoutDashboard, UserRound } from "lucide-react";
import type { ReactNode } from "react";

import { TemplateShell, type TemplateLocale } from "@/components/template-kit";
import { eCommerce } from "@/content/templates/e-commerce";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

/**
 * Shell de l'espace gestion : colonne latérale (`header="rail"`) à partir de
 * 1280 px, barre et menu en dessous. Marque, navigation du CRM, lien vers la
 * boutique, compte de démonstration en bas de colonne. Même thème que la
 * boutique.
 */
export function ECommerceCrmShell({
  locale,
  children,
}: {
  locale: TemplateLocale;
  children: ReactNode;
}) {
  const copy = getTemplateCopy(eCommerce, locale);
  const { paths } = eCommerce;

  return (
    <TemplateShell
      locale={locale}
      localeSwitch={hasTemplateLocale(eCommerce, "en")}
      theme={eCommerce.theme}
      header="rail"
      brand={{
        href: paths.crm,
        name: copy.brand.name,
        tagline: copy.crm.tagline,
        mark: (
          <div
            aria-hidden="true"
            className="flex size-10 items-center justify-center rounded-tpl bg-tpl-ink text-tpl-surface"
          >
            <LayoutDashboard className="size-5" />
          </div>
        ),
      }}
      nav={[
        { href: paths.crm, label: copy.crm.nav.dashboard },
        { href: paths.commandes, label: copy.crm.nav.orders },
        { href: paths.stocks, label: copy.crm.nav.stock },
        { href: paths.clients, label: copy.crm.nav.customers },
      ]}
      cta={{ href: paths.home, label: copy.crm.shopLink }}
      railFooter={
        <div className="flex items-start gap-3 text-tpl-xs text-tpl-ink-muted">
          <UserRound aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          <div>
            <p className="font-semibold text-tpl-ink">{copy.crm.account}</p>
            <p className="mt-1">{copy.crm.demo}</p>
          </div>
        </div>
      }
      footer={
        <footer className="border-t border-tpl-line px-4 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-7xl py-6 text-tpl-xs text-tpl-ink-muted">
            {copy.brand.name} · {copy.crm.tagline} · {copy.crm.demo}
          </p>
        </footer>
      }
    >
      {children}
    </TemplateShell>
  );
}
