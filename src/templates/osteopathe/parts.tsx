import {
  Activity,
  Armchair,
  BookOpen,
  CreditCard,
  Dumbbell,
  FileText,
  Footprints,
  GraduationCap,
  Heart,
  Pill,
  Shirt,
  Sun,
  Sunrise,
  UserRound,
  Users,
  Wind,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import {
  TemplateCard,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { osteopathe } from "@/content/templates/osteopathe";
import type { OsteopatheIconKey } from "@/content/templates/osteopathe";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * Table des icônes du template : une entrée par clé `icon` de la copie
 * (`src/content/templates/osteopathe.ts`). Le type `Record<OsteopatheIconKey, …>`
 * exige une entrée par clé utilisée et refuse une clé inconnue.
 */
export const ICONS: Record<OsteopatheIconKey, LucideIcon> = {
  activity: Activity,
  armchair: Armchair,
  "book-open": BookOpen,
  "credit-card": CreditCard,
  dumbbell: Dumbbell,
  "file-text": FileText,
  footprints: Footprints,
  "graduation-cap": GraduationCap,
  heart: Heart,
  pill: Pill,
  shirt: Shirt,
  sun: Sun,
  sunrise: Sunrise,
  "user-round": UserRound,
  users: Users,
  wind: Wind,
};

/** Pastille ronde portant une icône décorative. */
export function IconBadge({ icon }: { icon: OsteopatheIconKey }) {
  const Icon = ICONS[icon];

  return (
    <span
      aria-hidden="true"
      className="flex size-11 shrink-0 items-center justify-center rounded-tpl-pill bg-tpl-surface text-tpl-accent"
    >
      <Icon className="size-5" />
    </span>
  );
}

/** Carte à icône : l'icône se choisit par sa clé, tout le texte vient de la copie. */
export function IconCard({
  icon,
  title,
  children,
  className,
}: {
  icon: OsteopatheIconKey;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <TemplateCard
      elevation="flat"
      className={`h-full ${className ?? ""}`}
      icon={<IconBadge icon={icon} />}
      title={title}
    >
      {children}
    </TemplateCard>
  );
}

/** Bande inverse de fin de page : question, texte, appel et prise de rendez-vous. */
export function ClosingCta({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(osteopathe, locale);

  return (
    <TemplateSection
      tone="inverse"
      density="compact"
      title={copy.common.closing.title}
      description={copy.common.closing.text}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <TemplateLink
          href={templateHref(locale, osteopathe.paths.rendezVous)}
          variant="inverse"
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
    </TemplateSection>
  );
}
