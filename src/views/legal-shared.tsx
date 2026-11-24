import type { SiteLocale } from "@/content/site-content";

/** Date de dernière mise à jour commune aux trois pages légales. */
export function formatLegalUpdateDate(locale: SiteLocale): string {
  return locale === "fr" ? "1er janvier 2025" : "January 1, 2025";
}

/**
 * Les pages légales anglaises sont des traductions de courtoisie : c'est le
 * texte français qui engage, ce que la version anglaise doit dire.
 */
export function LegalTranslationNote({ locale }: { locale: SiteLocale }) {
  if (locale === "fr") {
    return null;
  }

  return (
    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400">
      This English version is provided for convenience. In the event of any
      discrepancy, the French version prevails.
    </p>
  );
}
