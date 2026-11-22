import {
  Ban,
  Bath,
  Clock,
  DoorOpen,
  Droplets,
  FileSignature,
  HandCoins,
  KeyRound,
  ListChecks,
  Lock,
  Mail,
  MapPin,
  Phone,
  Receipt,
  ScanSearch,
  ShieldCheck,
  Toilet,
  Unlock,
  Waves,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { PlombierSerrurierIconKey } from "@/content/templates/plombier-serrurier";

/**
 * Table des icônes du template : une entrée par clé `icon` de la copie
 * (`src/content/templates/plombier-serrurier.ts`). Une clé inconnue échoue au
 * `type-check`.
 */
export const ICONS: Record<PlombierSerrurierIconKey, LucideIcon> = {
  ban: Ban,
  bath: Bath,
  clock: Clock,
  "door-open": DoorOpen,
  droplets: Droplets,
  "file-signature": FileSignature,
  "hand-coins": HandCoins,
  "key-round": KeyRound,
  "list-checks": ListChecks,
  lock: Lock,
  mail: Mail,
  "map-pin": MapPin,
  phone: Phone,
  receipt: Receipt,
  "scan-search": ScanSearch,
  "shield-check": ShieldCheck,
  toilet: Toilet,
  unlock: Unlock,
  waves: Waves,
  wrench: Wrench,
};

/** Les deux métiers : l'eau est portée par le teal, la serrure par l'ambre. */
export type Trade = "water" | "lock";

const TRADE_BADGE: Record<Trade, string> = {
  water: "bg-tpl-inverse text-tpl-inverse-ink",
  lock: "bg-tpl-accent text-tpl-accent-ink",
};

/** Pastille d'icône, teal pour la plomberie et ambre pour la serrurerie. */
export function IconBadge({
  icon,
  trade,
  className,
}: {
  icon: PlombierSerrurierIconKey;
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

/** Marque : une goutte (teal) et une clé (ambre) qui se chevauchent à peine. */
export function BrandMark() {
  return (
    <span aria-hidden="true" className="relative flex h-9 w-15 items-center">
      <span className="absolute left-0 flex size-9 items-center justify-center rounded-tpl-pill bg-tpl-inverse text-tpl-inverse-ink">
        <Droplets className="size-4" />
      </span>
      <span className="absolute left-6 flex size-9 items-center justify-center rounded-tpl-pill border-2 border-tpl-surface bg-tpl-accent text-tpl-accent-ink">
        <KeyRound className="size-4" />
      </span>
    </span>
  );
}
