const FALLBACK_BASE_URL = "https://www.sitekept.com";

/**
 * URL canonique du site, normalisée.
 *
 * La valeur vient de NEXT_PUBLIC_BASE_URL. Elle est nettoyée des espaces,
 * tabulations et sauts de ligne parasites (un copier-coller dans l'interface
 * Vercel avait déjà introduit une tabulation en tête, qui se retrouvait dans
 * les balises canonical et dans les <loc> du sitemap), et du slash final pour
 * que les concaténations `${baseUrl}${path}` restent correctes.
 */
function normalizeBaseUrl(value: string | undefined): string {
  const cleaned = value?.replace(/\s/g, "");

  if (!cleaned) {
    return FALLBACK_BASE_URL;
  }

  try {
    // Valide l'URL et rejette une valeur malformée plutôt que de la propager
    // dans toutes les métadonnées du site.
    new URL(cleaned);
  } catch {
    return FALLBACK_BASE_URL;
  }

  return cleaned.replace(/\/+$/, "");
}

export const SITE_URL = normalizeBaseUrl(process.env.NEXT_PUBLIC_BASE_URL);
