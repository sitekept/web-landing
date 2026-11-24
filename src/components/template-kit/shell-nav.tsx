"use client";

import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";

import type { TemplateLocale } from "@/content/templates/types";
import { TemplateLocaleSwitch } from "./locale-switch";

/**
 * Partie interactive de l'en-tête de `TemplateShell` : navigation (page
 * courante marquée `aria-current`) et menu mobile. Seule partie client du
 * shell, pour que le reste reste rendu côté serveur.
 *
 * `clsx` et non `cn()` : aucune fusion de classes n'est nécessaire ici, et
 * tailwind-merge pèserait dans le JS client de chaque page du template.
 *
 * Trois présentations (`layout`), qui partagent le même module pour ne pas
 * ajouter de fichier client aux pages :
 *  - `bar` : liens en ligne à partir de `xl`, bouton de menu en dessous ; le
 *    panneau s'ouvre sous la barre, pleine largeur ;
 *  - `floating` : idem, mais le panneau est une carte posée sous la carte
 *    d'en-tête flottante ;
 *  - `rail` : liste verticale (colonne latérale, à partir de `xl`), CTA et
 *    sélecteur de langue en dessous ; ni bouton ni panneau.
 *
 * Liens d'ancre (`/page#section`, templates mono-page) : jamais `aria-current`,
 * toutes les ancres seraient sinon « courantes » sur la page qui les porte.
 */

export type TemplateShellNavLabels = {
  /** Nom accessible du bouton de menu mobile. */
  menu: string;
  /** Nom accessible de la navigation. */
  nav: string;
};

export type TemplateShellNavLayout = "bar" | "floating" | "rail";

export type TemplateShellNavProps = {
  /** Liens déjà localisés (`templateHref` appliqué par `TemplateShell`). */
  items: readonly { href: string; label: string }[];
  /** Accueil localisé : sa page ne marque pas les sous-pages comme courantes. */
  homeHref: string;
  locale: TemplateLocale;
  showLocaleSwitch: boolean;
  /** CTA rendu par le serveur ; placé dans l'en-tête et dans le menu mobile. */
  cta?: ReactNode;
  labels: TemplateShellNavLabels;
  /** Présentation (`bar` par défaut). */
  layout?: TemplateShellNavLayout;
  /** `layout="rail"` : numérote les liens (01, 02…). */
  numbered?: boolean;
};

function pathOf(href: string): string {
  return href.split(/[?#]/)[0];
}

function trimTrailingSlash(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Colonne `rail` basse : le sélecteur de langue passe du bas de la colonne
 * (sous la navigation) à son haut (sous la marque), pour rester visible sans
 * faire défiler la colonne. La colonne est un conteneur de taille (`shell.tsx`) :
 * 44 rem de haut, en `rem` de la racine, donc le seuil suit le texte agrandi
 * (la navigation grandit avec lui). Le sélecteur absent est `display: none`, pas
 * exposé aux lecteurs d'écran.
 */
const RAIL_SHORT_HIDDEN = "[@container(max-height:44rem)]:hidden";

const LINK_FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink";

export function TemplateShellNav({
  items,
  homeHref,
  locale,
  showLocaleSwitch,
  cta,
  labels,
  layout = "bar",
  numbered = false,
}: TemplateShellNavProps) {
  const pathname = trimTrailingSlash(usePathname());
  const home = trimTrailingSlash(pathOf(homeHref));
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Menu mobile ouvert : le focus entre dans le panneau (premier lien), Tab et
  // Maj+Tab bouclent sur le bouton et le panneau, Échap ferme et rend le focus
  // au bouton. Le piège disparaît avec l'état `open` (fermeture par un lien
  // comprise) : rien ne reste attaché au document.
  useEffect(() => {
    if (!open) {
      return;
    }

    const panel = panelRef.current;

    /** Éléments atteignables au clavier : le bouton, puis le contenu du panneau. */
    function cycle(): HTMLElement[] {
      const inside = Array.from(
        panel?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []
      );
      const items = buttonRef.current
        ? [buttonRef.current, ...inside]
        : inside;

      return items.filter((element) => element.getClientRects().length > 0);
    }

    panel?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();

        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const items = cycle();

      if (items.length === 0) {
        return;
      }

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      const inside = active instanceof HTMLElement && items.includes(active);

      if (event.shiftKey && (!inside || active === first)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (!inside || active === last)) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function isCurrent(href: string): boolean {
    if (href.includes("#")) {
      return false;
    }

    const target = trimTrailingSlash(pathOf(href));

    return (
      pathname === target ||
      (target !== home && pathname.startsWith(`${target}/`))
    );
  }

  /** Un clic sur un lien (ou le CTA) du menu mobile le referme. */
  function closeOnLinkClick(event: MouseEvent<HTMLElement>) {
    if ((event.target as HTMLElement).closest("a")) {
      setOpen(false);
    }
  }

  if (layout === "rail") {
    return (
      <>
        <nav aria-label={labels.nav} className="mt-10">
          <ul>
            {items.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  className={clsx(
                    "flex min-h-11 items-center justify-between gap-3 border-t border-tpl-line py-3 text-tpl-sm font-medium text-tpl-ink-muted transition-[padding] hover:pl-2 hover:text-tpl-ink aria-[current=page]:text-tpl-ink aria-[current=page]:underline aria-[current=page]:underline-offset-8 motion-reduce:transition-none motion-reduce:hover:pl-0",
                    LINK_FOCUS
                  )}
                >
                  <span>{item.label}</span>
                  {numbered ? (
                    <span
                      aria-hidden="true"
                      className="text-tpl-xs tabular-nums"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {cta || showLocaleSwitch ? (
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            {cta}
            {showLocaleSwitch ? (
              <TemplateLocaleSwitch
                locale={locale}
                className={RAIL_SHORT_HIDDEN}
              />
            ) : null}
          </div>
        ) : null}
      </>
    );
  }

  const floating = layout === "floating";

  return (
    <>
      <nav
        aria-label={labels.nav}
        className="hidden grow shrink-0 justify-center xl:@min-[78rem]:flex"
      >
        <ul className="flex flex-nowrap items-center justify-center gap-x-0.5">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                className={clsx(
                  "inline-flex min-h-11 items-center rounded-tpl px-2 text-tpl-sm font-medium whitespace-nowrap text-tpl-ink-muted underline-offset-8 hover:text-tpl-ink aria-[current=page]:text-tpl-ink aria-[current=page]:underline",
                  LINK_FOCUS
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden shrink-0 items-center gap-3 whitespace-nowrap xl:@min-[78rem]:flex">
        {cta}
        {showLocaleSwitch ? <TemplateLocaleSwitch locale={locale} /> : null}
      </div>

      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={labels.menu}
        onClick={() => setOpen((value) => !value)}
        className={clsx(
          "inline-flex size-11 items-center justify-center rounded-tpl border border-tpl-line text-tpl-ink hover:bg-tpl-ink/5 xl:@min-[78rem]:hidden",
          LINK_FOCUS
        )}
      >
        {open ? (
          <X aria-hidden="true" className="size-5" />
        ) : (
          <Menu aria-hidden="true" className="size-5" />
        )}
      </button>

      <div
        ref={panelRef}
        id={panelId}
        hidden={!open}
        onClick={closeOnLinkClick}
        className={clsx(
          "absolute inset-x-0 top-full overflow-y-auto border-tpl-line bg-tpl-surface pt-2 pb-6 shadow-tpl-lg xl:@min-[78rem]:hidden",
          floating
            ? "mt-2 max-h-[calc(100dvh-var(--tpl-header-offset)-1rem)] rounded-tpl border px-5 sm:px-6"
            : "max-h-[calc(100dvh-4.5rem)] border-b px-4 sm:px-6"
        )}
      >
        <nav aria-label={labels.nav}>
          <ul>
            {items.map((item) => (
              <li key={item.href} className="border-b border-tpl-line">
                <Link
                  href={item.href}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  className={clsx(
                    "flex min-h-12 items-center text-tpl-base font-medium text-tpl-ink-muted aria-[current=page]:text-tpl-ink aria-[current=page]:underline aria-[current=page]:underline-offset-8",
                    LINK_FOCUS
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {cta || showLocaleSwitch ? (
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            {cta}
            {showLocaleSwitch ? <TemplateLocaleSwitch locale={locale} /> : null}
          </div>
        ) : null}
      </div>
    </>
  );
}
