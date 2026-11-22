import {
  Calendar,
  CalendarCheck,
  Camera,
  ChartColumn,
  Clock,
  Coffee,
  DoorOpen,
  FileCheck,
  FileText,
  Footprints,
  Handshake,
  House,
  KeyRound,
  MailCheck,
  Moon,
  PhoneCall,
  Plus,
  Ruler,
  Scale,
  Search,
  Sun,
  Tag,
  ThumbsUp,
  Users,
  type LucideIcon,
} from "lucide-react";

import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import type { AgenceImmobiliereIconKey } from "@/content/templates/agence-immobiliere";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * Table des icônes du template : une entrée par clé `icon` de la copie
 * (`src/content/templates/agence-immobiliere.ts`). Le type
 * `Record<AgenceImmobiliereIconKey, …>` exige une entrée par clé utilisée et
 * refuse une clé inconnue.
 */
export const ICONS: Record<AgenceImmobiliereIconKey, LucideIcon> = {
  "bar-chart": ChartColumn,
  calendar: Calendar,
  "calendar-check": CalendarCheck,
  camera: Camera,
  clock: Clock,
  coffee: Coffee,
  "door-open": DoorOpen,
  "file-check": FileCheck,
  "file-text": FileText,
  footprints: Footprints,
  handshake: Handshake,
  house: House,
  "key-round": KeyRound,
  "mail-check": MailCheck,
  moon: Moon,
  "phone-call": PhoneCall,
  ruler: Ruler,
  scale: Scale,
  search: Search,
  sun: Sun,
  tag: Tag,
  "thumbs-up": ThumbsUp,
  users: Users,
};

/** Icône décorative nue, teintée de l'accent. */
export function AccentIcon({
  icon,
  className = "size-6",
  tone = "accent",
}: {
  icon: AgenceImmobiliereIconKey;
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

/** Lien de contact souligné, avec anneau de focus. */
export const LINK_FOCUS =
  "underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink";

/** Questions fréquentes : éléments `details` natifs, accessibles au clavier. */
export function FaqList({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  return (
    <div className="mt-10 max-w-3xl divide-y divide-tpl-line border-y border-tpl-line">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-tpl-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink [&::-webkit-details-marker]:hidden">
            {item.question}
            <Plus
              aria-hidden="true"
              className="size-5 shrink-0 text-tpl-accent transition-transform group-open:rotate-45 motion-reduce:transition-none"
            />
          </summary>
          <p className="mt-3 max-w-tpl-measure text-tpl-sm text-tpl-ink-muted">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}

/** Bande de fin de page : appel, e-mail et prise de contact. */
export function ClosingBand({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agenceImmobiliere, locale);

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
          href={templateHref(locale, agenceImmobiliere.paths.estimation)}
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
