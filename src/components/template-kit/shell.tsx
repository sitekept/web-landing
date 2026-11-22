import Link from "next/link";
import type { ReactNode } from "react";

import type { TemplateLocale } from "@/content/templates/types";
import { themeStyle, type TemplateThemeTokens } from "@/lib/template-theme";
import { cn } from "@/lib/utils";

import { templateHref } from "./href";
import { TemplateLink } from "./link";
import { TemplateShellNav } from "./shell-nav";

/**
 * Coquille d'un template : racine `[data-template]` (thème, fond, texte),
 * lien d'évitement, en-tête (marque, navigation, CTA, sélecteur FR / EN),
 * contenu et pied de page.
 *
 * Composant serveur : seule la navigation (`shell-nav.tsx`) et le sélecteur de
 * langue (`locale-switch.tsx`) sont client, pour que les pages restent
 * statiques. Ne pose pas `<html lang>` : c'est le layout racine du groupe de
 * routes (`(demos)` en `fr`, `(demos-en)` en `en`).
 *
 * Tous les `href` reçus (marque, navigation, CTA) sont des chemins du site de
 * démonstration en français (`/dentiste/soins`) ; le shell les localise avec
 * `templateHref`.
 *
 * Règle du kit : un nouveau besoin visuel devient d'abord un token. Il ne
 * devient un enum (prop) que s'il change le DOM ou la structure, et jamais un
 * nom de template.
 */

const LABELS: Record<
  TemplateLocale,
  { skip: string; menu: string; nav: string }
> = {
  fr: {
    skip: "Aller au contenu",
    menu: "Menu",
    nav: "Navigation principale",
  },
  en: {
    skip: "Skip to content",
    menu: "Menu",
    nav: "Main navigation",
  },
};

export type TemplateShellBrand = {
  /** Accueil du template, ex. `/dentiste`. */
  href: string;
  name: string;
  tagline?: string;
  /** Pastille avant le nom (initiales, logo décoratif…). */
  mark?: ReactNode;
};

export type TemplateNavItem = {
  href: string;
  label: string;
};

export type TemplateShellCta = {
  href: string;
  label: string;
  /** Voir `TemplateLink` : flèche par défaut, `false` pour aucune. */
  icon?: ReactNode | false;
};

/**
 * Ton de la barre d'actions mobile : `surface` (fond de page à 95 % + flou,
 * bordure `line`, boutons côte à côte) ou `accent` (fond accent, bordure
 * d'encre, un seul bloc plein largeur : le contenu règle son propre padding).
 */
export type TemplateMobileActionsTone = "surface" | "accent";

/** Largeur d'écran à partir de laquelle la barre disparaît (la navigation prend le relais). */
export type TemplateMobileActionsHideAt = "md" | "xl";

/** Classes littérales : Tailwind ne génère pas de classe construite à la volée. */
const MOBILE_ACTIONS_TONE: Record<TemplateMobileActionsTone, string> = {
  surface:
    "flex gap-2 border-t border-tpl-line bg-tpl-surface/95 px-4 py-3 backdrop-blur",
  accent: "border-t border-tpl-ink bg-tpl-accent",
};

const MOBILE_ACTIONS_HIDE_AT: Record<TemplateMobileActionsHideAt, string> = {
  md: "md:hidden",
  xl: "xl:hidden",
};

export type TemplateShellProps = {
  locale: TemplateLocale;
  brand: TemplateShellBrand;
  nav: readonly TemplateNavItem[];
  cta?: TemplateShellCta;
  /**
   * Affiche le sélecteur FR / EN (`false` par défaut). Un template l'active
   * quand sa définition a une copie anglaise (`hasTemplateLocale`).
   */
  localeSwitch?: boolean;
  /** Tokens du template (voir `themeStyle`) ; sans eux, les replis neutres. */
  theme?: TemplateThemeTokens;
  footer?: ReactNode;
  /**
   * Barre d'actions collée en bas de l'écran sur mobile (appeler, réserver…),
   * rendue après le pied de page. Elle est `sticky` en fin de page, pas
   * `fixed` : en bas du défilement elle se pose sous le pied de page au lieu
   * de le recouvrir, donc aucune réserve de padding n'est à prévoir dans le
   * contenu ni dans le pied de page.
   */
  mobileActions?: ReactNode;
  /** Aspect de la barre (`surface` par défaut). */
  mobileActionsTone?: TemplateMobileActionsTone;
  /** Point de rupture où la barre disparaît (`xl` par défaut). */
  mobileActionsHideAt?: TemplateMobileActionsHideAt;
  /** Nom accessible de la barre (copie FR / EN) ; en pose le rôle `group`. */
  mobileActionsLabel?: string;
  className?: string;
  children: ReactNode;
};

export function TemplateShell({
  locale,
  brand,
  nav,
  cta,
  localeSwitch = false,
  theme,
  footer,
  mobileActions,
  mobileActionsTone = "surface",
  mobileActionsHideAt = "xl",
  mobileActionsLabel,
  className,
  children,
}: TemplateShellProps) {
  const labels = LABELS[locale];
  const homeHref = templateHref(locale, brand.href);

  return (
    <div
      data-template
      style={theme ? themeStyle(theme) : undefined}
      className={cn(
        "flex min-h-dvh flex-col bg-tpl-surface font-tpl-text text-tpl-ink",
        className
      )}
    >
      <a
        href="#contenu"
        className="sr-only rounded-tpl bg-tpl-accent px-4 py-2 text-tpl-sm font-semibold text-tpl-accent-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
      >
        {labels.skip}
      </a>

      <header className="sticky top-0 z-40 border-b border-tpl-line bg-tpl-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8 xl:gap-4">
          <div className="flex min-w-0 items-center gap-3">
            {brand.mark ? <div className="shrink-0">{brand.mark}</div> : null}
            <div className="min-w-0">
              <Link
                href={homeHref}
                className="block truncate font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
              >
                {brand.name}
              </Link>
              {brand.tagline ? (
                <p className="hidden truncate text-tpl-xs text-tpl-ink-muted sm:block xl:hidden 2xl:block">
                  {brand.tagline}
                </p>
              ) : null}
            </div>
          </div>

          <TemplateShellNav
            items={nav.map((item) => ({
              href: templateHref(locale, item.href),
              label: item.label,
            }))}
            homeHref={homeHref}
            locale={locale}
            showLocaleSwitch={localeSwitch}
            labels={{ menu: labels.menu, nav: labels.nav }}
            cta={
              cta ? (
                <TemplateLink
                  href={templateHref(locale, cta.href)}
                  size="sm"
                  icon={cta.icon}
                >
                  {cta.label}
                </TemplateLink>
              ) : undefined
            }
          />
        </div>
      </header>

      <main id="contenu" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>

      {footer}

      {mobileActions ? (
        <div
          role={mobileActionsLabel ? "group" : undefined}
          aria-label={mobileActionsLabel}
          className={cn(
            "sticky bottom-0 z-30",
            MOBILE_ACTIONS_TONE[mobileActionsTone],
            MOBILE_ACTIONS_HIDE_AT[mobileActionsHideAt]
          )}
        >
          {mobileActions}
        </div>
      ) : null}
    </div>
  );
}
