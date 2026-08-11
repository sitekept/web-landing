import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";

/**
 * Bandeau affiché en tête des pages de démonstration de templates.
 *
 * Il répond à deux problèmes relevés par l'audit SEO :
 *  - ces pages se présentaient comme de vraies entreprises, sans aucune mention
 *    de leur nature de démonstration ;
 *  - elles étaient des culs-de-sac, sans lien de retour vers sitekept.com.
 *
 * Rendu par le layout racine quand le middleware a marqué la requête comme
 * démonstration, pour couvrir toutes les démos d'un seul endroit.
 */
export function DemoBanner() {
  return (
    <div className="relative z-50 bg-slate-900 px-4 py-2 text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-center text-xs leading-snug sm:text-sm">
        <span className="inline-flex items-center gap-1.5 font-semibold">
          <Info className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          Démonstration
        </span>
        <span className="text-slate-300">
          Entreprise fictive, coordonnées non attribuées.
        </span>
        <Link
          href="https://www.sitekept.com"
          className="inline-flex items-center gap-1 font-medium text-blue-300 underline underline-offset-4 hover:text-blue-200"
        >
          Site d&apos;exemple SiteKept
          <ArrowRight className="h-3 w-3" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
