import {
  Award,
  CalendarClock,
  CircleCheckBig,
  ClipboardCheck,
  ClipboardList,
  Cpu,
  FileText,
  LocateFixed,
  MapPin,
  Microscope,
  ParkingCircle,
  Shield,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  TrainFront,
  UserRound,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import {
  TemplateCard,
  type TemplateCardElevation,
} from "@/components/template-kit";
import type { DentisteIconKey } from "@/content/templates/dentiste";

/**
 * Table des icônes du template : une entrée par clé `icon` de la copie
 * (`src/content/templates/dentiste.ts`). Le type `Record<DentisteIconKey, …>`
 * exige une entrée par clé utilisée et refuse une clé inconnue : une faute de
 * frappe dans la copie échoue au `type-check`.
 */
export const ICONS: Record<DentisteIconKey, LucideIcon> = {
  award: Award,
  "calendar-clock": CalendarClock,
  "circle-check-big": CircleCheckBig,
  "clipboard-check": ClipboardCheck,
  "clipboard-list": ClipboardList,
  cpu: Cpu,
  "file-text": FileText,
  "locate-fixed": LocateFixed,
  "map-pin": MapPin,
  microscope: Microscope,
  "parking-circle": ParkingCircle,
  shield: Shield,
  "shield-check": ShieldCheck,
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  syringe: Syringe,
  "train-front": TrainFront,
  "user-round": UserRound,
  workflow: Workflow,
};

/**
 * Carte à icône, partagée par les vues du cabinet. Aucun texte : tout vient de
 * la copie ; l'icône se choisit par sa clé (`icon`).
 *
 * `inverse` pose la carte sur le fond inverse du template (`data-tone`, qui
 * rebinde les tokens d'encre et de surface pour les descendants).
 */
export function IconCard({
  icon,
  title,
  children,
  inverse = false,
  elevation = "flat",
  className,
}: {
  icon: DentisteIconKey;
  title: string;
  children: ReactNode;
  inverse?: boolean;
  elevation?: TemplateCardElevation;
  className?: string;
}) {
  const Icon = ICONS[icon];
  const card = (
    <TemplateCard
      title={
        <span className="flex flex-col items-start gap-4">
          <Icon
            aria-hidden="true"
            className={
              inverse ? "size-5 text-tpl-ink" : "size-5 text-tpl-ink-muted"
            }
          />
          <span>{title}</span>
        </span>
      }
      elevation={elevation}
      className={`h-full ${className ?? ""}`}
    >
      {children}
    </TemplateCard>
  );

  return inverse ? (
    <div data-tone="inverse" className="h-full">
      {card}
    </div>
  ) : (
    card
  );
}
