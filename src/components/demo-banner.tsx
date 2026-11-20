import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";

import type { TemplateLocale } from "@/content/templates/types";

const COPY: Record<
  TemplateLocale,
  { label: string; notice: string; linkLabel: string; linkHref: string }
> = {
  fr: {
    label: "Démonstration",
    notice: "Entreprise fictive, coordonnées non attribuées.",
    linkLabel: "Site d'exemple SiteKept",
    linkHref: "https://www.sitekept.com",
  },
  en: {
    label: "Demo",
    notice: "Fictional business, placeholder contact details.",
    linkLabel: "SiteKept example site",
    // Le site anglais : le retour d'une démo anglaise reste dans la langue.
    linkHref: "/en",
  },
};

/**
 * Bandeau affiché en tête des pages de démonstration de templates.
 *
 * Il répond à deux problèmes relevés par l'audit SEO :
 *  - ces pages se présentaient comme de vraies entreprises, sans aucune mention
 *    de leur nature de démonstration ;
 *  - elles étaient des culs-de-sac, sans lien de retour vers sitekept.com.
 *
 * Rendu par le layout du groupe de routes `(demos)` (français) ou
 * `(demos-en)` (anglais, lien de retour vers `/en`), pour couvrir toutes les
 * démos d'un seul endroit et de façon statique, sans dépendre du middleware.
 */
export function DemoBanner({ locale = "fr" }: { locale?: TemplateLocale }) {
  const copy = COPY[locale];

  return (
    <div className="relative z-50 bg-slate-900 px-4 py-2 text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-center text-xs leading-snug sm:text-sm">
        <span className="inline-flex items-center gap-1.5 font-semibold">
          <Info className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {copy.label}
        </span>
        <span className="text-slate-300">
          {copy.notice}
        </span>
        <Link
          href={copy.linkHref}
          className="inline-flex items-center gap-1 font-medium text-blue-300 underline underline-offset-4 hover:text-blue-200"
        >
          {copy.linkLabel}
          <ArrowRight className="h-3 w-3" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
