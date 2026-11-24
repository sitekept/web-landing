/**
 * Fait défiler la page jusqu'à l'élément `id`. Défilement animé, sauf si le
 * visiteur a demandé moins d'animations (`prefers-reduced-motion: reduce`) :
 * il est alors immédiat. À appeler depuis un gestionnaire d'événement.
 */
export function scrollToSection(id: string): void {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
}
