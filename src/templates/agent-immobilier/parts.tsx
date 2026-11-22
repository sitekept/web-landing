import {
  Calendar,
  CalendarCheck,
  Camera,
  ChartColumn,
  Coffee,
  DoorOpen,
  FileCheck,
  FileText,
  Handshake,
  House,
  KeyRound,
  MailCheck,
  PhoneCall,
  Ruler,
  Scale,
  Tag,
  ThumbsUp,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { agentImmobilier } from "@/content/templates/agent-immobilier";
import type { AgentImmobilierIconKey } from "@/content/templates/agent-immobilier";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * Table des icônes du template : une entrée par clé `icon` de la copie
 * (`src/content/templates/agent-immobilier.ts`). Le type
 * `Record<AgentImmobilierIconKey, …>` exige une entrée par clé utilisée et
 * refuse une clé inconnue.
 */
export const ICONS: Record<AgentImmobilierIconKey, LucideIcon> = {
  "bar-chart": ChartColumn,
  calendar: Calendar,
  "calendar-check": CalendarCheck,
  camera: Camera,
  coffee: Coffee,
  "door-open": DoorOpen,
  "file-check": FileCheck,
  "file-text": FileText,
  handshake: Handshake,
  house: House,
  "key-round": KeyRound,
  "mail-check": MailCheck,
  "phone-call": PhoneCall,
  ruler: Ruler,
  scale: Scale,
  tag: Tag,
  "thumbs-up": ThumbsUp,
};

/** Icône décorative nue, teintée de l'accent. */
export function AccentIcon({
  icon,
  className = "size-6",
  tone = "accent",
}: {
  icon: AgentImmobilierIconKey;
  className?: string;
  /** `ink` sur un fond inverse, où l'accent ne se lit pas. */
  tone?: "accent" | "ink";
}) {
  const Icon = ICONS[icon];

  return (
    <Icon
      aria-hidden="true"
      className={`${className} ${tone === "ink" ? "text-tpl-ink" : "text-tpl-accent"}`}
    />
  );
}

/** Fond d'encart teinté de l'accent, dérivé des tokens (aucune couleur littérale). */
export const TINT =
  "bg-[color-mix(in_oklch,var(--tpl-accent)_9%,var(--tpl-surface))]";

/** Fine règle d'accent posée avant un petit titre (signature visuelle du template). */
export function Rule({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
      <span aria-hidden="true" className="h-px w-8 bg-tpl-accent" />
      {children}
    </p>
  );
}

/** Bande de fin de page : appel, e-mail et prise de contact. */
export function ClosingBand({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agentImmobilier, locale);

  return (
    <TemplateSection
      tone="inverse"
      density="compact"
      eyebrow={copy.common.closing.eyebrow}
      title={copy.common.closing.title}
      description={copy.common.closing.text}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <TemplateLink
          href={templateHref(locale, agentImmobilier.paths.estimation)}
          variant="inverse"
        >
          {copy.cta.estimate}
        </TemplateLink>
        <TemplateLink href={copy.phone.href} variant="outline" icon={false}>
          {copy.phone.label}
        </TemplateLink>
      </div>
    </TemplateSection>
  );
}
