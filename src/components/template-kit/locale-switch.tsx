"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  TEMPLATE_LOCALES,
  type TemplateLocale,
} from "@/content/templates/types";
import { switchTemplateLocale } from "./href";

/**
 * Sélecteur FR / EN d'un template : pointe vers la même page dans l'autre
 * langue. Client uniquement pour lire le chemin courant (`usePathname`) ; le
 * rendu initial est complet côté serveur, les pages restent statiques.
 *
 * `clsx` et non `cn()` : aucune fusion de classes n'est nécessaire ici, et
 * tailwind-merge pèserait dans le JS client de chaque page du template.
 * `className` s'ajoute donc sans écraser les classes de base.
 *
 * Accessibilité : le texte visible (« FR ») reste dans le nom accessible, que
 * complète le nom de la langue pour les lecteurs d'écran (« FR Français »,
 * critère « label in name »). Le nom de la navigation est dans la langue de la
 * page courante.
 */

const LANGUAGES: Record<TemplateLocale, { short: string; name: string }> = {
  fr: { short: "FR", name: "Français" },
  en: { short: "EN", name: "English" },
};

const NAV_LABEL: Record<TemplateLocale, string> = {
  fr: "Langue",
  en: "Language",
};

export type TemplateLocaleSwitchProps = {
  /** Langue de la page courante. */
  locale: TemplateLocale;
  className?: string;
};

export function TemplateLocaleSwitch({
  locale,
  className,
}: TemplateLocaleSwitchProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label={NAV_LABEL[locale]}
      className={clsx("flex shrink-0 items-center gap-1", className)}
    >
      {TEMPLATE_LOCALES.map((target) => {
        const isCurrent = target === locale;

        return (
          <Link
            key={target}
            href={switchTemplateLocale(pathname, target)}
            hrefLang={target}
            lang={target}
            aria-current={isCurrent ? "true" : undefined}
            className={clsx(
              "inline-flex min-h-11 min-w-11 items-center justify-center rounded-tpl px-2 text-tpl-xs font-semibold tracking-wide",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink",
              isCurrent
                ? "bg-tpl-ink text-tpl-surface"
                : "text-tpl-ink-muted hover:bg-tpl-ink/5 hover:text-tpl-ink"
            )}
          >
            {LANGUAGES[target].short}
            <span className="sr-only"> {LANGUAGES[target].name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
