export {};

declare global {
  interface Window {
    /**
     * Injecté par <GoogleAnalytics> (@next/third-parties/google) après
     * l'hydratation. Optionnel : absent si NEXT_PUBLIC_GA_ID n'est pas défini,
     * ou si un bloqueur de publicité empêche le chargement du tag.
     */
    gtag?: (
      command: "event" | "config" | "set",
      targetOrName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}
