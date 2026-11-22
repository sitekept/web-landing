import type { ReactNode } from "react";

import { TemplateShell, type TemplateLocale } from "@/components/template-kit";
import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

/**
 * Shell du template restaurant-bistrot : en-tête flottant à cadre droit, fond
 * sombre translucide, au-dessus du héros ; pied de page sombre. Tous les textes
 * viennent de la copie.
 */
export function RestaurantBistrotShell({
  locale,
  children,
}: {
  locale: TemplateLocale;
  children: ReactNode;
}) {
  const copy = getTemplateCopy(restaurantBistrot, locale);
  const { paths } = restaurantBistrot;

  return (
    <TemplateShell
      locale={locale}
      localeSwitch={hasTemplateLocale(restaurantBistrot, "en")}
      theme={restaurantBistrot.theme}
      header="floating"
      headerTone="inverse"
      brand={{
        href: paths.home,
        name: copy.brand.name,
        tagline: copy.brand.tagline,
      }}
      nav={[
        { href: paths.home, label: copy.nav.home },
        { href: paths.menu, label: copy.nav.menu },
        { href: paths.reservation, label: copy.nav.reservation },
        { href: paths.galerie, label: copy.nav.galerie },
        { href: paths.histoire, label: copy.nav.histoire },
        { href: paths.privatisation, label: copy.nav.privatisation },
        { href: paths.contact, label: copy.nav.contact },
      ]}
      cta={{
        href: paths.reservation,
        label: copy.cta.book,
        icon: false,
      }}
      footer={
        <footer
          data-tone="inverse"
          className="border-t border-tpl-line bg-tpl-raised px-4 text-tpl-ink sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-8 py-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="text-tpl-lg font-semibold">{copy.footer.title}</p>
              <p className="mt-3 text-tpl-sm text-tpl-ink-muted">
                {copy.footer.text}
              </p>
            </div>
            <div className="space-y-2 text-tpl-sm text-tpl-ink-muted sm:text-right">
              <p>{copy.footer.address}</p>
              <p>{copy.footer.email}</p>
              <p>{copy.footer.hours}</p>
            </div>
          </div>
        </footer>
      }
    >
      {children}
    </TemplateShell>
  );
}
