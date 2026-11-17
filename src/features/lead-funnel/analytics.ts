/**
 * Envoi d'un événement GA4, seulement après l'accord du visiteur.
 *
 * `window.gtag` n'existe que si le visiteur a accepté la mesure d'audience :
 * `cookie-consent.tsx` le remet à `undefined` en cas de refus ou de retrait
 * (voir docs/seo/03b-consentement.md). Ce garde-fou est donc le seul contrôle
 * du consentement. Ne jamais passer de donnée personnelle dans `params`.
 */
export function sendAnalyticsEvent(
  name: string,
  params: Record<string, string | number>
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", name, params);
}
