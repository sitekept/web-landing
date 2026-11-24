import { Coffee, Phone } from "lucide-react";
import type { ReactNode } from "react";

import {
  TemplateLink,
  TemplateShell,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { coffeeShop } from "@/content/templates/coffee-shop";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

/**
 * Shell du template coffee-shop : marque, navigation, CTA téléphone, barre
 * d'actions collée en bas sur mobile et pied de page. Tous les textes
 * viennent de la copie ; le sélecteur FR / EN se déduit de la définition.
 *
 * Direction typographique : Inter en graisses 800 à 900, posées ici sur les
 * titres (le kit les laisse à `font-semibold`), avec un interlignage serré en
 * grande taille. Les classes de variante passent devant celles du kit.
 */
const DISPLAY_WEIGHT =
  "[&_h1]:font-black [&_h1]:tracking-tighter [&_h1]:leading-[0.98] [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h3]:font-bold [&_h3]:tracking-tight [&_header_div.min-w-0>a]:font-extrabold [&_header_div.min-w-0>a]:tracking-tight";

export function CoffeeShopShell({
  locale,
  children,
}: {
  locale: TemplateLocale;
  children: ReactNode;
}) {
  const copy = getTemplateCopy(coffeeShop, locale);
  const { paths } = coffeeShop;

  return (
    <TemplateShell
      locale={locale}
      localeSwitch={hasTemplateLocale(coffeeShop, "en")}
      theme={coffeeShop.theme}
      className={DISPLAY_WEIGHT}
      brand={{
        href: paths.home,
        name: copy.brand.name,
        tagline: copy.brand.tagline,
        mark: (
          <span
            aria-hidden="true"
            className="flex size-11 items-center justify-center rounded-tpl bg-tpl-accent text-tpl-accent-ink"
          >
            <Coffee className="size-5" />
          </span>
        ),
      }}
      nav={[
        { href: paths.home, label: copy.nav.home },
        { href: paths.carte, label: copy.nav.carte },
        { href: paths.aPropos, label: copy.nav.aPropos },
        { href: paths.infos, label: copy.nav.infos },
      ]}
      cta={{
        href: copy.phone.href,
        label: copy.phone.label,
        icon: <Phone aria-hidden="true" className="size-4" />,
      }}
      footer={
        <footer className="border-t border-tpl-line bg-tpl-raised px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 py-12 lg:grid-cols-[1.3fr_1fr_1fr]">
            <div className="max-w-md">
              <p className="font-tpl-display text-tpl-xl leading-tpl-display font-extrabold tracking-tight text-balance">
                {copy.footer.title}
              </p>
              <p className="mt-3 text-tpl-sm text-tpl-ink-muted">
                {copy.footer.text}
              </p>
            </div>
            <div>
              <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
                {copy.common.hoursLabel}
              </p>
              <dl className="mt-4 space-y-2 text-tpl-sm">
                {copy.common.hoursShort.map((row) => (
                  <div key={row.day} className="flex flex-col">
                    <dt className="text-tpl-ink-muted">{row.day}</dt>
                    <dd className="font-semibold tabular-nums">{row.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
                {copy.footer.contactLabel}
              </p>
              <ul className="mt-4 space-y-2 text-tpl-sm">
                <li>
                  <a
                    href={copy.phone.href}
                    className="inline-flex min-h-11 items-center font-semibold tabular-nums underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                  >
                    {copy.phone.label}
                  </a>
                </li>
                <li>{copy.common.email}</li>
                <li className="text-tpl-ink-muted">
                  {copy.common.address.join(", ")}
                </li>
              </ul>
            </div>
          </div>
        </footer>
      }
      mobileActionsLabel={copy.footer.barLabel}
      mobileActions={
        <>
          <TemplateLink
            href={copy.phone.href}
            shape="pill"
            icon={<Phone aria-hidden="true" className="size-4" />}
            className="flex-1"
          >
            {copy.cta.call}
          </TemplateLink>
          <TemplateLink
            href={templateHref(locale, paths.carte)}
            variant="outline"
            shape="pill"
            icon={false}
            className="flex-1"
          >
            {copy.cta.carte}
          </TemplateLink>
        </>
      }
    >
      {children}
    </TemplateShell>
  );
}
