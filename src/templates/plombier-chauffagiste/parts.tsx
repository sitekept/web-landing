import {
  Ban,
  Bath,
  Clock,
  Cog,
  Droplets,
  FileSignature,
  Flame,
  Gauge,
  HandCoins,
  Heater,
  ListChecks,
  Mail,
  MapPin,
  Phone,
  Receipt,
  ScanSearch,
  Thermometer,
  Toilet,
  TriangleAlert,
  Waves,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { PlombierChauffagisteIconKey } from "@/content/templates/plombier-chauffagiste";

/**
 * Table des icônes du template : une entrée par clé `icon` de la copie
 * (`src/content/templates/plombier-chauffagiste.ts`). Une clé inconnue échoue au
 * `type-check`.
 */
export const ICONS: Record<PlombierChauffagisteIconKey, LucideIcon> = {
  ban: Ban,
  bath: Bath,
  clock: Clock,
  cog: Cog,
  droplets: Droplets,
  "file-signature": FileSignature,
  flame: Flame,
  gauge: Gauge,
  "hand-coins": HandCoins,
  heater: Heater,
  "list-checks": ListChecks,
  mail: Mail,
  "map-pin": MapPin,
  phone: Phone,
  receipt: Receipt,
  "scan-search": ScanSearch,
  thermometer: Thermometer,
  toilet: Toilet,
  "triangle-alert": TriangleAlert,
  waves: Waves,
  wrench: Wrench,
};

/** Les deux métiers : l'eau est portée par le teal, la chaleur par l'ambre. */
export type Trade = "water" | "heat";

const TRADE_BADGE: Record<Trade, string> = {
  water: "bg-tpl-inverse text-tpl-inverse-ink",
  heat: "bg-tpl-accent text-tpl-accent-ink",
};

/** Pastille d'icône, teal pour la plomberie et ambre pour le chauffage. */
export function IconBadge({
  icon,
  trade,
  className,
}: {
  icon: PlombierChauffagisteIconKey;
  trade: Trade;
  className?: string;
}) {
  const Icon = ICONS[icon];

  return (
    <span
      aria-hidden="true"
      className={`flex size-11 shrink-0 items-center justify-center rounded-tpl ${TRADE_BADGE[trade]} ${className ?? ""}`}
    >
      <Icon className="size-5" />
    </span>
  );
}

/** Marque : une goutte (teal) et une flamme (ambre) qui se chevauchent à peine. */
export function BrandMark() {
  return (
    <span aria-hidden="true" className="relative flex h-9 w-15 items-center">
      <span className="absolute left-0 flex size-9 items-center justify-center rounded-tpl-pill bg-tpl-inverse text-tpl-inverse-ink">
        <Droplets className="size-4" />
      </span>
      <span className="absolute left-6 flex size-9 items-center justify-center rounded-tpl-pill border-2 border-tpl-surface bg-tpl-accent text-tpl-accent-ink">
        <Flame className="size-4" />
      </span>
    </span>
  );
}
