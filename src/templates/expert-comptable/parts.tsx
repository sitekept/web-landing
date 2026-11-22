import {
  BookOpen,
  Compass,
  FileCheck,
  Handshake,
  Lightbulb,
  Sprout,
  Store,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { expertComptable } from "@/content/templates/expert-comptable";
import type { ExpertComptableIconKey } from "@/content/templates/expert-comptable";
import { getTemplateCopy } from "@/content/templates/types";
import { cn } from "@/lib/utils";

/**
 * Table des icônes du template : une entrée par clé `icon` de la copie
 * (`src/content/templates/expert-comptable.ts`). Une clé inconnue échoue au
 * `type-check`.
 */
export const ICONS: Record<ExpertComptableIconKey, LucideIcon> = {
  "book-open": BookOpen,
  compass: Compass,
  "file-check": FileCheck,
  handshake: Handshake,
  lightbulb: Lightbulb,
  sprout: Sprout,
  store: Store,
  user: User,
  users: Users,
};

/** Pastille d'icône : carré à filet, icône menthe. */
export function IconBox({ icon }: { icon: ExpertComptableIconKey }) {
  const Icon = ICONS[icon];

  return (
    <span
      aria-hidden="true"
      className="flex size-10 shrink-0 items-center justify-center rounded-tpl border border-tpl-ink/70 bg-tpl-raised text-tpl-accent"
    >
      <Icon className="size-5" />
    </span>
  );
}

/** Étiquette de colonne, majuscules espacées (en-têtes de registre). */
export function ColumnLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
      {children}
    </p>
  );
}

/**
 * Tête de page des sous-pages : titre `h1`, texte et, facultativement, une
 * photo (la seule image prioritaire de la page).
 */
export function PageHero({
  locale,
  eyebrow,
  title,
  description,
  image,
}: {
  locale: TemplateLocale;
  eyebrow: string;
  title: string;
  description: string;
  image?: { src: string; alt: string };
}) {
  const copy = getTemplateCopy(expertComptable, locale);
  const href = (path: string) => templateHref(locale, path);

  return (
    <TemplateSection density="compact" className="border-b border-tpl-line">
      <div
        className={
          image
            ? "grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
            : undefined
        }
      >
        <div>
          <TemplateHeading
            as="h1"
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TemplateLink href={href(expertComptable.paths.contact)}>
              {copy.cta.quote}
            </TemplateLink>
            <TemplateLink href={copy.phone.href} variant="outline" icon={false}>
              {copy.phone.label}
            </TemplateLink>
          </div>
        </div>
        {image ? (
          <TemplateMedia
            src={image.src}
            alt={image.alt}
            ratio="3/2"
            sizes="(min-width: 1280px) 520px, (min-width: 1024px) 42vw, 100vw"
            priority
          />
        ) : null}
      </div>
    </TemplateSection>
  );
}

/** Étapes numérotées, séparées par des filets (méthode, suite du contact). */
export function Steps({
  items,
  onDark = false,
}: {
  items: readonly { title: string; text: string }[];
  /** Sur fond inverse, le numéro prend l'encre (la menthe profonde y serait illisible). */
  onDark?: boolean;
}) {
  return (
    <ol className="grid gap-x-10 gap-y-8 md:grid-cols-3">
      {items.map((step, index) => (
        <li key={step.title} className="border-t-2 border-tpl-ink pt-5">
          <p
            className={cn(
              "font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight) tabular-nums",
              onDark ? "text-tpl-ink" : "text-tpl-accent"
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-3 font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
            {step.title}
          </h3>
          <p className="mt-2 max-w-tpl-measure text-tpl-sm text-tpl-ink-muted">
            {step.text}
          </p>
        </li>
      ))}
    </ol>
  );
}

/** Appel final : filets haut et bas, texte à gauche, deux liens à droite. */
export function ClosingCta({
  locale,
  title,
  text,
}: {
  locale: TemplateLocale;
  title?: string;
  text?: string;
}) {
  const copy = getTemplateCopy(expertComptable, locale);
  const href = (path: string) => templateHref(locale, path);

  return (
    <TemplateSection density="compact">
      <div className="grid gap-8 border-y-2 border-tpl-ink py-10 md:grid-cols-[1.4fr_1fr] md:items-center">
        <TemplateHeading
          eyebrow={copy.common.closing.eyebrow}
          title={title ?? copy.common.closing.title}
          description={text ?? copy.common.closing.text}
          scale="subtitle"
        />
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <TemplateLink href={href(expertComptable.paths.contact)}>
            {copy.cta.quote}
          </TemplateLink>
          <TemplateLink href={copy.phone.href} variant="outline" icon={false}>
            {copy.phone.label}
          </TemplateLink>
        </div>
      </div>
    </TemplateSection>
  );
}
