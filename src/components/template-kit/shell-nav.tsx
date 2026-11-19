"use client";

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
import { cn } from "@/lib/utils";

import { TemplateLocaleSwitch } from "./locale-switch";

/**
 * Partie interactive de l'en-tête de `TemplateShell` : navigation (page
 * courante marquée `aria-current`) et menu mobile. Seule partie client du
 * shell, pour que le reste reste rendu côté serveur.
 */

export type TemplateShellNavLabels = {
  /** Nom accessible du bouton de menu mobile. */
  menu: string;
  /** Nom accessible de la navigation. */
  nav: string;
};

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
};

function pathOf(href: string): string {
  return href.split(/[?#]/)[0];
}

function trimTrailingSlash(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
}

const LINK_FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink";

export function TemplateShellNav({
  items,
  homeHref,
  locale,
  showLocaleSwitch,
  cta,
  labels,
}: TemplateShellNavProps) {
  const pathname = trimTrailingSlash(usePathname());
  const home = trimTrailingSlash(pathOf(homeHref));
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function isCurrent(href: string): boolean {
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

  return (
    <>
      <nav
        aria-label={labels.nav}
        className="hidden flex-1 justify-center lg:flex"
      >
        <ul className="flex flex-wrap items-center justify-center gap-x-1">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-tpl px-3 text-tpl-sm font-medium text-tpl-ink-muted underline-offset-8 hover:text-tpl-ink aria-[current=page]:text-tpl-ink aria-[current=page]:underline",
                  LINK_FOCUS
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden items-center gap-3 lg:flex">
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
        className={cn(
          "inline-flex size-11 items-center justify-center rounded-tpl border border-tpl-line text-tpl-ink hover:bg-tpl-ink/5 lg:hidden",
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
        id={panelId}
        hidden={!open}
        onClick={closeOnLinkClick}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-tpl-line bg-tpl-surface px-4 pt-2 pb-6 shadow-tpl-lg sm:px-6 lg:hidden"
      >
        <nav aria-label={labels.nav}>
          <ul>
            {items.map((item) => (
              <li key={item.href} className="border-b border-tpl-line">
                <Link
                  href={item.href}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  className={cn(
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
