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
    linkLabel: "Site d’exemple Sitekept",
    linkHref: "https://www.sitekept.com",
  },
  en: {
    label: "Demo",
    notice: "Fictional business, placeholder contact details.",
    linkLabel: "Sitekept example site",
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
          // Cible de 24 px de haut au moins (WCAG 2.5.8) : le manque (`1lh` =
          // interligne du lien) est ajouté en padding puis retiré par la marge
          // négative, donc le bandeau garde la hauteur que le texte seul lui
          // donnait. Contour de focus de 2 px, blanc sur le fond slate-900 du
          // bandeau (environ 17:1).
          className="[--link-pad:max(0px,calc((1.5rem-1lh)/2))] -my-(--link-pad) inline-flex items-center gap-1 py-(--link-pad) font-medium text-blue-300 underline underline-offset-4 hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {copy.linkLabel}
          <ArrowRight className="h-3 w-3" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
