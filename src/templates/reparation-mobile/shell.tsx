import { Phone, Smartphone } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import {
  TemplateLink,
  TemplateShell,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { reparationMobile } from "@/content/templates/reparation-mobile";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";

/**
 * Shell du template : marque, navigation, CTA téléphone, barre d'actions fixe
 * sur mobile et pied de page inverse. Tous les textes viennent de la copie ;
 * le sélecteur FR / EN se déduit de la définition.
 */
export function ReparationMobileShell({
  locale,
  children,
}: {
  locale: TemplateLocale;
  children: ReactNode;
}) {
  const copy = getTemplateCopy(reparationMobile, locale);
  const { paths } = reparationMobile;
  const nav = [
    { href: paths.home, label: copy.nav.home },
    { href: paths.reparations, label: copy.nav.reparations },
    { href: paths.faq, label: copy.nav.faq },
    { href: paths.contact, label: copy.nav.contact },
  ];

  return (
    <TemplateShell
      locale={locale}
      localeSwitch={hasTemplateLocale(reparationMobile, "en")}
      theme={reparationMobile.theme}
      brand={{
        href: paths.home,
        name: copy.brand.name,
        tagline: copy.brand.tagline,
        mark: (
          <span
            aria-hidden="true"
            className="flex size-11 items-center justify-center rounded-tpl-pill bg-tpl-accent text-tpl-accent-ink"
          >
            <Smartphone className="size-5" />
          </span>
        ),
      }}
      nav={nav}
      cta={{
        href: copy.phone.href,
        label: copy.phone.label,
        icon: <Phone aria-hidden="true" className="size-4" />,
      }}
      footer={
        <>
          <footer
            data-tone="inverse"
            className="bg-tpl-inverse px-4 pt-12 pb-28 text-tpl-inverse-ink sm:px-6 md:pb-12 lg:px-8"
          >
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
              <div>
                <p className="font-tpl-display text-tpl-lg font-extrabold">
                  {copy.brand.name}
                </p>
                <p className="mt-3 max-w-tpl-measure text-tpl-sm text-tpl-ink-muted">
                  {copy.footer.text}
                </p>
              </div>
              <nav aria-label={copy.footer.navLabel}>
                <ul className="grid gap-1">
                  {nav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={templateHref(locale, item.href)}
                        className="inline-flex min-h-11 items-center text-tpl-sm font-medium underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <address className="grid gap-2 text-tpl-sm text-tpl-ink-muted not-italic">
                {copy.details.items.map((item) => (
                  <p key={item.label}>{item.value}</p>
                ))}
                <p>
                  {copy.hours.items[0].day}{" "}
                  <span className="font-semibold text-tpl-ink">
                    {copy.hours.items[0].time}
                  </span>
                </p>
              </address>
            </div>
          </footer>

          <nav
            aria-label={copy.mobileBar.label}
            className="fixed inset-x-0 bottom-0 z-30 flex gap-3 border-t border-tpl-line bg-tpl-surface/95 px-4 py-3 backdrop-blur md:hidden"
          >
            <TemplateLink
              href={templateHref(locale, paths.contact)}
              shape="pill"
              icon={false}
              className="flex-1"
            >
              {copy.mobileBar.quote}
            </TemplateLink>
            <TemplateLink
              href={copy.phone.href}
              shape="pill"
              variant="outline"
              icon={<Phone aria-hidden="true" className="size-4" />}
              className="flex-1 bg-tpl-raised"
            >
              {copy.mobileBar.call}
            </TemplateLink>
          </nav>
        </>
      }
    >
      {children}
    </TemplateShell>
  );
}
