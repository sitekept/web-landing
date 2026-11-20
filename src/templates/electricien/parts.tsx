import {
  BadgeCheck,
  BatteryCharging,
  Hammer,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  PlugZap,
  Receipt,
  Search,
  ShieldCheck,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import type { ElectricienIconKey } from "@/content/templates/electricien";

/**
 * Table des icônes du template : une entrée par clé `icon` de la copie
 * (`src/content/templates/electricien.ts`). Une clé inconnue échoue au
 * `type-check`.
 */
export const ICONS: Record<ElectricienIconKey, LucideIcon> = {
  "badge-check": BadgeCheck,
  "battery-charging": BatteryCharging,
  hammer: Hammer,
  lightbulb: Lightbulb,
  mail: Mail,
  "map-pin": MapPin,
  phone: Phone,
  "plug-zap": PlugZap,
  receipt: Receipt,
  search: Search,
  "shield-check": ShieldCheck,
  wrench: Wrench,
  zap: Zap,
};

/** Une note de 1 à 5 : la copie stocke un nombre, le composant d'avis attend l'union. */
export function toRating(value: number): 1 | 2 | 3 | 4 | 5 {
  if (value >= 5) return 5;
  if (value >= 4) return 4;
  if (value >= 3) return 3;
  if (value >= 2) return 2;
  return 1;
}

/** Pastille d'icône : carré jaune de sécurité, encre sombre. */
export function IconBadge({ icon }: { icon: ElectricienIconKey }) {
  const Icon = ICONS[icon];

  return (
    <span
      aria-hidden="true"
      className="flex size-11 shrink-0 items-center justify-center rounded-tpl bg-tpl-accent text-tpl-accent-ink"
    >
      <Icon className="size-5" />
    </span>
  );
}

/** Bande de balisage (jaune et graphite), motif du template, en CSS et tokens. */
export function HazardStripe() {
  return (
    <div
      aria-hidden="true"
      className="h-2 w-full bg-[repeating-linear-gradient(-45deg,var(--tpl-accent)_0_14px,var(--tpl-ink)_14px_28px)]"
    />
  );
}

/**
 * Fond de page d'en-tête : quadrillage fin (traits `--tpl-line`) qui s'estompe
 * vers le bas, sur la surface du template. Le contenu passe devant.
 */
export function GridBackdrop({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`relative overflow-hidden border-b border-tpl-line bg-tpl-surface px-4 sm:px-6 lg:px-8 ${className ?? ""}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--tpl-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--tpl-line)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,black,transparent_90%)] bg-[size:44px_44px] opacity-60"
      />
      <div className="relative mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
