import {
  Bus,
  CalendarCheck,
  Car,
  CircleParking,
  ClipboardCheck,
  Clock,
  FileText,
  Gauge,
  KeyRound,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  Receipt,
  ScanSearch,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import type { GarageAutoIconKey } from "@/content/templates/garage-auto";
import { cn } from "@/lib/utils";

/**
 * Table des icônes du template : une entrée par clé `icon` de la copie
 * (`src/content/templates/garage-auto.ts`). Une clé inconnue échoue au
 * `type-check`.
 */
export const ICONS: Record<GarageAutoIconKey, LucideIcon> = {
  bus: Bus,
  "calendar-check": CalendarCheck,
  car: Car,
  "circle-parking": CircleParking,
  "clipboard-check": ClipboardCheck,
  clock: Clock,
  "file-text": FileText,
  gauge: Gauge,
  "key-round": KeyRound,
  mail: Mail,
  "map-pin": MapPin,
  "package-check": PackageCheck,
  phone: Phone,
  receipt: Receipt,
  "scan-search": ScanSearch,
  wrench: Wrench,
};

/** Pastille d'icône : carré d'encre, pictogramme clair. Décorative. */
export function IconBadge({ icon }: { icon: GarageAutoIconKey }) {
  const Icon = ICONS[icon];

  return (
    <span
      aria-hidden="true"
      className="flex size-11 shrink-0 items-center justify-center rounded-tpl bg-tpl-ink text-tpl-surface"
    >
      <Icon className="size-5" />
    </span>
  );
}

/** Trait rouge court posé au-dessus d'un en-tête : signature du template. */
export function SignalBar({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("block h-1.5 w-16 bg-tpl-accent", className)}
    />
  );
}

/**
 * En-tête de page : béton clair, filet d'encre épais en bas, trait rouge
 * au-dessus du titre. `aside` (image, fiche) se place à droite dès `lg`.
 */
export function PageHero({
  children,
  aside,
}: {
  children: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="border-b-4 border-tpl-ink bg-tpl-surface px-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          "mx-auto grid max-w-7xl gap-10 py-12 lg:py-16",
          aside ? "lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14" : null
        )}
      >
        <div>
          <SignalBar className="mb-6" />
          {children}
        </div>
        {aside}
      </div>
    </section>
  );
}
