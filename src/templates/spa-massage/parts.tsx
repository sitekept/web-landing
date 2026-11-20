import {
  Accessibility,
  Coffee,
  Droplets,
  Sparkles,
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
import {
  spaMassage,
  type SpaMassageIconKey,
} from "@/content/templates/spa-massage";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * Table des icônes du template : une entrée par clé `icon` de la copie
 * (`src/content/templates/spa-massage.ts`). Une clé inconnue échoue au
 * `type-check`.
 */
export const ICONS: Record<SpaMassageIconKey, LucideIcon> = {
  accessibility: Accessibility,
  coffee: Coffee,
  droplets: Droplets,
  sparkles: Sparkles,
};

/** Une note de 1 à 5 : la copie stocke un nombre, le composant d'avis attend l'union. */
export function toRating(value: number): 1 | 2 | 3 | 4 | 5 {
  if (value >= 5) return 5;
  if (value >= 4) return 4;
  if (value >= 3) return 3;
  if (value >= 2) return 2;
  return 1;
}

/** Pastille d'icône : anneau laiton, fond transparent (de la lumière, pas du relief). */
export function IconRing({ icon }: { icon: SpaMassageIconKey }) {
  const Icon = ICONS[icon];

  return (
    <span
      aria-hidden="true"
      className="flex size-12 shrink-0 items-center justify-center rounded-tpl-pill border border-tpl-accent/60 text-tpl-accent"
    >
      <Icon className="size-5" strokeWidth={1.5} />
    </span>
  );
}

/**
 * Halo laiton posé derrière un en-tête : un dégradé radial fait avec les
 * tokens, qui s'éteint avant les bords. Le contenu passe devant.
 */
export function Glow({ children }: { children: ReactNode }) {
  return (
    <div className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(48rem_26rem_at_80%_0%,color-mix(in_oklch,var(--tpl-accent)_16%,transparent),transparent_70%)]"
      />
      {children}
    </div>
  );
}

/**
 * Enveloppe de l'en-tête court des sous-pages : halo laiton puis section
 * compacte. Le titre `h1` est rendu par la vue elle-même.
 */
export function PageHero({ children }: { children: ReactNode }) {
  return (
    <Glow>
      <TemplateSection density="compact" className="pb-0">
        {children}
      </TemplateSection>
    </Glow>
  );
}

/** Mention « massages de bien-être » : filet laiton à gauche, texte discret. */
export function WellnessNotice({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-tpl-measure border-l-2 border-tpl-accent pl-4 text-tpl-sm text-tpl-ink-muted">
      {children}
    </p>
  );
}

/** Appel final de page : titre serif, texte, réserver et appeler. */
export function ClosingCta({
  locale,
  title,
  text,
}: {
  locale: TemplateLocale;
  title: string;
  text: string;
}) {
  return (
    <Glow>
      <TemplateSection tone="raised" density="spacious" align="center">
        <div className="mx-auto max-w-3xl text-center">
          <TemplateHeading
            title={title}
            description={text}
            align="center"
            scale="title"
          />
          <ClosingActions locale={locale} />
        </div>
      </TemplateSection>
    </Glow>
  );
}

function ClosingActions({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(spaMassage, locale);

  return (
    <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
      <TemplateLink
        href={templateHref(locale, spaMassage.paths.reservation)}
        shape="pill"
      >
        {copy.cta.book}
      </TemplateLink>
      <TemplateLink
        href={copy.phone.href}
        variant="outline"
        shape="pill"
        icon={false}
      >
        {copy.phone.label}
      </TemplateLink>
    </div>
  );
}
