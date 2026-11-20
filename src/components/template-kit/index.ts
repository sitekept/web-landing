/**
 * Kit partagé des micro-sites de démonstration (`src/app/(demos)/<slug>/`).
 *
 * Composants serveur, stylés uniquement par les tokens `--tpl-*` (voir
 * `src/lib/template-theme.ts`), à rendre sous un élément `[data-template]` (ce
 * que fait `TemplateShell`). Les seules parties client sont la navigation et
 * le sélecteur de langue du shell, et `TemplateDemoForm`.
 *
 * `TemplateMedia` et `TemplateDemoForm` ne sont PAS dans ce barrel : un import
 * depuis `@/components/template-kit` tire tout le barrel, et `TemplateDemoForm`
 * (client) alourdirait le JS des pages qui n'ont pas de formulaire. On les
 * importe par module :
 *
 * ```ts
 * import { TemplateMedia } from "@/components/template-kit/media";
 * import { TemplateDemoForm } from "@/components/template-kit/demo-form";
 * ```
 *
 * Règle du kit : un nouveau besoin visuel devient d'abord un token. Il ne
 * devient un enum (prop) que s'il change le DOM ou la structure, et jamais un
 * nom de template.
 */

export { TemplateHeading, TemplateSection } from "./section";
export type {
  TemplateAlign,
  TemplateHeadingLevel,
  TemplateHeadingProps,
  TemplateSectionDensity,
  TemplateSectionProps,
  TemplateSectionTone,
  TemplateSectionWidth,
  TemplateTitleScale,
} from "./section";

export { TemplateLink } from "./link";
export type {
  TemplateLinkProps,
  TemplateLinkShape,
  TemplateLinkSize,
  TemplateLinkVariant,
} from "./link";

export { TemplateCard, TemplatePanel } from "./card";
export type {
  TemplateCardElevation,
  TemplateCardProps,
  TemplateCardTitleLevel,
  TemplatePanelProps,
  TemplatePanelTone,
} from "./card";

export { TemplateShell } from "./shell";
export type {
  TemplateNavItem,
  TemplateShellBrand,
  TemplateShellCta,
  TemplateShellProps,
} from "./shell";

export { TemplateLocaleSwitch } from "./locale-switch";
export type { TemplateLocaleSwitchProps } from "./locale-switch";

export {
  switchTemplateLocale,
  templateHref,
  templateLocaleFromPathname,
} from "./href";

export { TEMPLATE_LOCALES } from "@/content/templates/types";
export type { TemplateLocale } from "@/content/templates/types";
