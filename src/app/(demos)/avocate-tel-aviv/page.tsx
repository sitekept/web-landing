import { permanentRedirect } from "next/navigation";

/**
 * Redirection de l'ancienne URL. Cette route portait l'identité d'une cliente
 * réelle (nom, spécialisation, domaine) : elle est devenue le template
 * générique `/avocate`. Les quatre pages sont conservées en redirection
 * permanente pour ne pas laisser de lien mort.
 */
export default function LegacyAvocateTelAvivPage() {
  permanentRedirect("/avocate");
}
