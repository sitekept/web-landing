/**
 * Kit partagé des micro-sites de démonstration (`src/app/(demos)/<slug>/`).
 *
 * Composants serveur, sans JavaScript client, stylés uniquement par les tokens
 * `--tpl-*` (voir `src/lib/template-theme.ts`). À rendre sous un élément
 * `[data-template]`.
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
