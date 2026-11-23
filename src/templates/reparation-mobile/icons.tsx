import {
  BadgeCheck,
  BatteryCharging,
  Camera,
  CalendarClock,
  CircleCheckBig,
  DatabaseBackup,
  Droplets,
  HandCoins,
  House,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  PlugZap,
  ReceiptText,
  ScanSearch,
  ShieldCheck,
  Smartphone,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { ReparationMobileIconKey } from "@/content/templates/reparation-mobile";

/**
 * Table des icônes : une entrée par clé `icon` de la copie
 * (`src/content/templates/reparation-mobile.ts`). Une clé inconnue échoue au
 * `type-check`.
 */
export const ICONS: Record<ReparationMobileIconKey, LucideIcon> = {
  "badge-check": BadgeCheck,
  "battery-charging": BatteryCharging,
  "calendar-clock": CalendarClock,
  camera: Camera,
  "circle-check-big": CircleCheckBig,
  "database-backup": DatabaseBackup,
  droplets: Droplets,
  "hand-coins": HandCoins,
  house: House,
  mail: Mail,
  "map-pin": MapPin,
  "message-square-text": MessageSquareText,
  phone: Phone,
  "plug-zap": PlugZap,
  "receipt-text": ReceiptText,
  "scan-search": ScanSearch,
  "shield-check": ShieldCheck,
  smartphone: Smartphone,
  truck: Truck,
  wrench: Wrench,
};

/** Pastille d'icône : accent sur fond clair, ou accent sur fond inverse. */
export function IconChip({
  icon,
  className = "",
}: {
  icon: ReparationMobileIconKey;
  className?: string;
}) {
  const Icon = ICONS[icon];

  return (
    <span
      aria-hidden="true"
      className={`flex size-11 shrink-0 items-center justify-center rounded-tpl-pill bg-tpl-accent text-tpl-accent-ink ${className}`}
    >
      <Icon className="size-5" />
    </span>
  );
}
