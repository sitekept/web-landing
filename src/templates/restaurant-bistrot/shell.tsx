import { CalendarCheck, Phone } from "lucide-react";
import type { ReactNode } from "react";

import {
  TemplateLink,
  TemplateShell,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

import { HoursList } from "./parts";

/**
 * Shell du template restaurant-bistrot : en-tête flottant à cadre droit, fond
 * sombre translucide, au-dessus du premier bloc ; pied de page sombre (adresse,
 * horaires, contact) ; barre « réserver / appeler » sur mobile. Tous les textes
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
  const { common } = copy;

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
      mobileActionsLabel={common.quickActions}
      mobileActions={
        <>
          <TemplateLink
            href={copy.phone.href}
            variant="outline"
            icon={<Phone aria-hidden="true" className="size-4" />}
            className="flex-1"
          >
            {copy.cta.call}
          </TemplateLink>
          <TemplateLink
            href={templateHref(locale, paths.reservation)}
            icon={<CalendarCheck aria-hidden="true" className="size-4" />}
            className="flex-1"
          >
            {copy.cta.book}
          </TemplateLink>
        </>
      }
      footer={
        <footer
          data-tone="inverse"
          className="border-t border-tpl-line bg-tpl-raised px-4 text-tpl-ink sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-10 py-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                {copy.brand.name}
              </p>
              <p className="mt-3 max-w-md text-tpl-sm text-tpl-ink-muted">
                {copy.footer.text}
              </p>
            </div>
            <div className="lg:col-span-4">
              <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
                {common.hoursLabel}
              </p>
              <HoursList rows={common.hours} className="mt-3 text-tpl-sm" />
            </div>
            <div className="lg:col-span-3">
              <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
                {copy.footer.contactLabel}
              </p>
              <address className="mt-3 space-y-2 text-tpl-sm text-tpl-ink-muted not-italic">
                <p>{common.address}</p>
                <p className="tabular-nums">
                  <a
                    href={copy.phone.href}
                    className="underline-offset-4 hover:underline"
                  >
                    {copy.phone.label}
                  </a>
                </p>
                <p>{common.email}</p>
              </address>
            </div>
          </div>
        </footer>
      }
    >
      {children}
    </TemplateShell>
  );
}
