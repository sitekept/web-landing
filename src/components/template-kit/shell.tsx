import Link from "next/link";
import type { ReactNode } from "react";

import type { TemplateLocale } from "@/content/templates/types";
import { themeStyle, type TemplateThemeTokens } from "@/lib/template-theme";
import { cn } from "@/lib/utils";

import { templateHref } from "./href";
import { TemplateLink } from "./link";
import { TemplateShellNav, type TemplateShellNavLayout } from "./shell-nav";

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
 *
 * Trois en-têtes (`header`) :
 *  - `bar` (défaut) : barre collante pleine largeur, dans le flux ;
 *  - `floating` : carte centrée collante à `--tpl-header-gap` du haut (fond
 *    translucide, flou, ombre, rayon `--tpl-header-radius` : pilule ou cadre
 *    droit selon le thème), qui passe AU-DESSUS du premier bloc de la page et
 *    n'y réserve aucune place : la première section règle son padding haut avec
 *    `--tpl-header-offset` ;
 *  - `rail` : à partir de `xl`, colonne gauche collante pleine hauteur ; en
 *    dessous, la barre `bar` avec son menu. Un seul des deux est affiché (donc
 *    exposé aux lecteurs d'écran) à chaque largeur.
 * Le bandeau de démonstration (`DemoBanner`, `z-50`, non collant) reste au-dessus
 * et défile ; `topBar` en fait autant, sous lui.
 */

/**
 * Largeur commune du shell et des sections `wide` : le padding latéral va sur
 * l'élément pleine largeur, `max-w-7xl` sur le bloc intérieur (même motif que
 * `TemplateSection`). Poser les deux sur le même bloc rogne 32 px de chaque
 * côté du contenu : marque, navigation et pied de page se décaleraient vers
 * l'intérieur au-dessus de 1280 px. Les pieds de page des templates suivent le
 * même motif (voir `docs/templates.md`, section 3).
 */
const SHELL_GUTTER = "px-4 sm:px-6 lg:px-8";
const SHELL_WIDTH = "mx-auto max-w-7xl";

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

/** Forme de l'en-tête : barre dans le flux, carte flottante, colonne latérale. */
export type TemplateShellHeader = TemplateShellNavLayout;

/**
 * Ton du bandeau `topBar` : `raised` (fond `--tpl-raised`, bordure basse,
 * texte secondaire), `accent` (fond accent, texte `accent-ink`) ou `inverse`
 * (fond inverse, `data-tone="inverse"` : les jetons d'encre y sont rebindés).
 */
export type TemplateTopBarTone = "inverse" | "accent" | "raised" | "tint";

const TOP_BAR_TONE: Record<TemplateTopBarTone, string> = {
  inverse: "bg-tpl-inverse text-tpl-inverse-ink",
  accent: "bg-tpl-accent text-tpl-accent-ink",
  raised: "border-b border-tpl-line bg-tpl-raised text-tpl-ink-muted",
  tint: "border-b border-tpl-line bg-tpl-tint text-tpl-ink-muted",
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
   * contenu ni dans le pied de page. Elle porte `data-mobile-actions` (le
   * point de rupture où elle disparaît) : `globals.css` s'en sert pour réserver
   * sa hauteur au défilement vers un élément focalisé (`scroll-padding-bottom`),
   * voir « Dégagement du focus clavier ».
   */
  mobileActions?: ReactNode;
  /** Aspect de la barre (`surface` par défaut). */
  mobileActionsTone?: TemplateMobileActionsTone;
  /** Point de rupture où la barre disparaît (`xl` par défaut). */
  mobileActionsHideAt?: TemplateMobileActionsHideAt;
  /** Nom accessible de la barre (copie FR / EN) ; en pose le rôle `group`. */
  mobileActionsLabel?: string;
  /**
   * Bandeau au-dessus de l'en-tête (ville, domaine, annonce…). Non collant : il
   * défile avec la page. Aligné sur la largeur du contenu (`SHELL_GUTTER` /
   * `SHELL_WIDTH`), il range ses enfants en ligne, retour à la ligne, répartis
   * aux deux bouts : `<span>…</span><span>…</span>`. Avec `header="rail"`, il
   * se place en haut de la colonne de contenu, à droite de la colonne latérale.
   */
  topBar?: ReactNode;
  /** Ton du bandeau (`raised` par défaut). */
  topBarTone?: TemplateTopBarTone;
  /** Forme de l'en-tête (`bar` par défaut). */
  header?: TemplateShellHeader;
  /**
   * Ton de la carte `header="floating"` : `surface` (défaut) ou `inverse`
   * (carte sombre, `data-tone="inverse"`, menu mobile compris). Sans effet sur
   * les autres en-têtes.
   */
  headerTone?: "surface" | "inverse";
  /**
   * `header="rail"` : numérote les liens de la colonne (01, 02…). Les numéros
   * sont décoratifs (`aria-hidden`).
   */
  railNumbers?: boolean;
  /**
   * `header="rail"` : bloc libre en bas de la colonne (adresse, horaires…),
   * sous une ligne de séparation.
   */
  railFooter?: ReactNode;
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
  topBar,
  topBarTone = "raised",
  header = "bar",
  headerTone = "surface",
  railNumbers = false,
  railFooter,
  className,
  children,
}: TemplateShellProps) {
  const labels = LABELS[locale];
  const homeHref = templateHref(locale, brand.href);
  const floating = header === "floating";
  const rail = header === "rail";

  const navItems = nav.map((item) => ({
    href: templateHref(locale, item.href),
    label: item.label,
  }));
  const ctaLink = cta ? (
    <TemplateLink
      href={templateHref(locale, cta.href)}
      size="sm"
      variant={floating && headerTone === "inverse" ? "inverse" : "solid"}
      icon={cta.icon}
    >
      {cta.label}
    </TemplateLink>
  ) : undefined;

  const brandBlock = (
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
  );

  const barNav = (
    <TemplateShellNav
      items={navItems}
      homeHref={homeHref}
      locale={locale}
      showLocaleSwitch={localeSwitch}
      labels={{ menu: labels.menu, nav: labels.nav }}
      layout={floating ? "floating" : "bar"}
      cta={ctaLink}
    />
  );

  const topBarBlock = topBar ? (
    <div
      data-top-bar
      data-tone={topBarTone === "inverse" ? "inverse" : undefined}
      className={cn(SHELL_GUTTER, TOP_BAR_TONE[topBarTone])}
    >
      <div
        className={cn(
          SHELL_WIDTH,
          "flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2 text-tpl-xs font-medium"
        )}
      >
        {topBar}
      </div>
    </div>
  ) : null;

  const skipLink = (
    <a
      href="#contenu"
      className="sr-only rounded-tpl bg-tpl-accent px-4 py-2 text-tpl-sm font-semibold text-tpl-accent-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
    >
      {labels.skip}
    </a>
  );

  /** Barre collante : en-tête `bar`, et version étroite (sous `xl`) du `rail`. */
  const barHeader = (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-tpl-line bg-tpl-surface/95 backdrop-blur",
        SHELL_GUTTER,
        rail ? "xl:hidden" : null
      )}
    >
      <div
        className={cn(
          SHELL_WIDTH,
          "flex items-center justify-between gap-3 py-3 xl:gap-4"
        )}
      >
        {brandBlock}
        {barNav}
      </div>
    </header>
  );

  /**
   * Carte flottante : l'en-tête est un bloc collant de hauteur nulle, donc sans
   * place réservée dans le flux ; la carte (`relative`, ancre du panneau de
   * menu) déborde dessus. `--tpl-header-gap` au repos comme collée.
   */
  const floatingHeader = (
    <header
      data-floating-header
      className={cn("sticky top-0 z-40 h-0", SHELL_GUTTER)}
    >
      <div className={cn(SHELL_WIDTH, "pt-(--tpl-header-gap)")}>
        <div
          data-tone={headerTone === "inverse" ? "inverse" : undefined}
          className="relative rounded-[var(--tpl-header-radius)] border border-tpl-line bg-tpl-surface/95 px-5 text-tpl-ink shadow-tpl-lg backdrop-blur-md sm:px-6"
        >
          <div className="flex items-center justify-between gap-3 py-3 xl:gap-4">
            {brandBlock}
            {barNav}
          </div>
        </div>
      </div>
    </header>
  );

  const railHeader = (
    <header
      data-rail
      className="sticky top-0 hidden h-dvh w-[var(--tpl-rail-width)] shrink-0 flex-col self-start overflow-y-auto border-r border-tpl-line bg-tpl-raised px-8 py-10 xl:flex"
    >
      <div className="flex flex-col items-start gap-3">
        {brand.mark ? <div className="shrink-0">{brand.mark}</div> : null}
        <Link
          href={homeHref}
          className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
        >
          {brand.name}
        </Link>
        {brand.tagline ? (
          <p className="text-tpl-sm text-tpl-ink-muted">{brand.tagline}</p>
        ) : null}
      </div>
      <div className="mt-10 flex flex-col gap-6">
        <TemplateShellNav
          items={navItems}
          homeHref={homeHref}
          locale={locale}
          showLocaleSwitch={localeSwitch}
          labels={{ menu: labels.menu, nav: labels.nav }}
          layout="rail"
          numbered={railNumbers}
          cta={ctaLink}
        />
      </div>
      {railFooter ? (
        <div className="mt-auto border-t border-tpl-line pt-6 text-tpl-sm text-tpl-ink-muted">
          {railFooter}
        </div>
      ) : null}
    </header>
  );

  const mainBlock = (
    <>
      <main id="contenu" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>

      {footer}

      {mobileActions ? (
        <div
          role={mobileActionsLabel ? "group" : undefined}
          aria-label={mobileActionsLabel}
          data-mobile-actions={mobileActionsHideAt}
          className={cn(
            "sticky bottom-0 z-30",
            MOBILE_ACTIONS_TONE[mobileActionsTone],
            MOBILE_ACTIONS_HIDE_AT[mobileActionsHideAt]
          )}
        >
          {mobileActions}
        </div>
      ) : null}
    </>
  );

  return (
    <div
      data-template
      data-header={header === "bar" ? undefined : header}
      style={theme ? themeStyle(theme) : undefined}
      className={cn(
        "flex min-h-dvh flex-col bg-tpl-surface font-tpl-text text-tpl-ink",
        rail ? "xl:flex-row" : null,
        className
      )}
    >
      {skipLink}

      {rail ? (
        <>
          {railHeader}
          <div className="flex min-w-0 flex-1 flex-col">
            {topBarBlock}
            {barHeader}
            {mainBlock}
          </div>
        </>
      ) : (
        <>
          {topBarBlock}
          {floating ? floatingHeader : barHeader}
          {mainBlock}
        </>
      )}
    </div>
  );
}
