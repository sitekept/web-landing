import {
  Download,
  Images,
  MessageCircle,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import {
  TemplateMedia,
  type TemplateMediaRatio,
} from "@/components/template-kit/media";
import { photographe } from "@/content/templates/photographe";
import type { PhotographeIconKey } from "@/content/templates/photographe";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * Table des icônes du template : une entrée par clé `icon` de la copie
 * (`src/content/templates/photographe.ts`). Le type
 * `Record<PhotographeIconKey, …>` exige une entrée par clé utilisée et refuse
 * une clé inconnue.
 */
export const ICONS: Record<PhotographeIconKey, LucideIcon> = {
  download: Download,
  images: Images,
  "message-circle": MessageCircle,
  "sliders-horizontal": SlidersHorizontal,
};

/** Icône au trait fin, décorative. */
export function LineIcon({ icon }: { icon: PhotographeIconKey }) {
  const Icon = ICONS[icon];

  return <Icon aria-hidden="true" strokeWidth={1.25} className="size-7" />;
}

/** Petite étiquette typographique : numéro d'index et libellé, en capitales. */
export function IndexLabel({
  index,
  children,
}: {
  index: number;
  children: ReactNode;
}) {
  return (
    <span className="inline-flex items-baseline gap-3">
      <span className="tabular-nums">{String(index).padStart(2, "0")}</span>
      <span>{children}</span>
    </span>
  );
}

/** Image et légende d'une planche : légende d'une ligne, en petit. */
export function Plate({
  src,
  alt,
  caption,
  ratio,
  sizes,
  priority,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio: TemplateMediaRatio;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={className}>
      <TemplateMedia
        src={src}
        alt={alt}
        ratio={ratio}
        sizes={sizes}
        priority={priority}
        rounded="none"
      />
      {caption ? (
        <figcaption className="mt-3 text-tpl-xs text-tpl-ink-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

/** Bande inverse de fin de page : question, texte, demande de date et appel. */
export function ClosingBand({
  locale,
  title,
  text,
  tone = "inverse",
}: {
  locale: TemplateLocale;
  title?: string;
  text?: string;
  /** `inverse` (défaut) ou `surface` quand la section précédente est déjà sombre. */
  tone?: "inverse" | "surface";
}) {
  const copy = getTemplateCopy(photographe, locale);
  const inverse = tone === "inverse";

  return (
    <TemplateSection
      tone={tone}
      density="regular"
      title={title ?? copy.common.closing.title}
      description={text ?? copy.common.closing.text}
      titleScale="subtitle"
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <TemplateLink
          href={templateHref(locale, photographe.paths.contact)}
          variant={inverse ? "inverse" : "solid"}
          shape="square"
          icon={inverse ? undefined : false}
        >
          {copy.cta.request}
        </TemplateLink>
        <TemplateLink
          href={copy.phone.href}
          variant="outline"
          shape="square"
          icon={false}
        >
          {copy.phone.label}
        </TemplateLink>
      </div>
    </TemplateSection>
  );
}
