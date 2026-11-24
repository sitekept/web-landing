/**
 * Liens internes des templates : les fonctions pures vivent dans
 * `@/lib/template-href` (une lib ne doit pas dépendre de `components/`), et le
 * kit les réexporte pour que son API reste la même.
 */
export {
  switchTemplateLocale,
  templateHref,
  templateLocaleFromPathname,
} from "@/lib/template-href";
