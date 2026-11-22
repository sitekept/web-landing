import {
  Award,
  Calendar,
  Clock,
  Gift,
  MapPin,
  Phone,
  Sparkles,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import type { BoulangerieIconKey } from "@/content/templates/boulangerie";

/**
 * Table des icônes du template : une entrée par clé `icon` de la copie
 * (`src/content/templates/boulangerie.ts`).
 */
export const ICONS: Record<BoulangerieIconKey, LucideIcon> = {
  award: Award,
  calendar: Calendar,
  gift: Gift,
  phone: Phone,
  sparkles: Sparkles,
  users: Users,
};

/** `id` des sections : cibles des ancres de la navigation (`/boulangerie#vitrine`). */
export const ANCHORS = {
  home: "accueil",
  showcase: "vitrine",
  services: "services",
  contact: "contact",
} as const;

/** Pastille ronde portant une icône décorative. */
export function IconBadge({ icon }: { icon: BoulangerieIconKey }) {
  const Icon = ICONS[icon];

  return (
    <div
      aria-hidden="true"
      className="flex size-11 shrink-0 items-center justify-center rounded-tpl-pill bg-tpl-accent/10 text-tpl-accent"
    >
      <Icon className="size-5" />
    </div>
  );
}

/** Ligne d'information (adresse, horaires, téléphone) : icône puis texte. */
export function InfoRow({
  icon,
  children,
  className,
}: {
  icon: "address" | "hours" | "phone";
  children: ReactNode;
  className?: string;
}) {
  const Icon = icon === "address" ? MapPin : icon === "hours" ? Clock : Phone;

  return (
    <div className={`flex items-start gap-3 ${className ?? ""}`}>
      <Icon
        aria-hidden="true"
        className="mt-0.5 size-4 shrink-0 text-tpl-accent"
      />
      <span>{children}</span>
    </div>
  );
}

/** Cinq étoiles pleines, décrites une seule fois pour les lecteurs d'écran. */
export function Stars({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="flex items-center gap-1 text-tpl-eyebrow"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} aria-hidden="true" className="size-4 fill-current" />
      ))}
    </div>
  );
}
