import {
  Award,
  Clock,
  Mail,
  MapPin,
  Phone,
  Shield,
  Smartphone,
  Star,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { OrdinateurIconKey } from "@/content/templates/ordinateur";

/**
 * Table des icônes du template : une entrée par clé `icon` de la copie
 * (`src/content/templates/ordinateur.ts`).
 */
export const ICONS: Record<OrdinateurIconKey, LucideIcon> = {
  award: Award,
  clock: Clock,
  mail: Mail,
  mapPin: MapPin,
  phone: Phone,
  shield: Shield,
  smartphone: Smartphone,
  users: Users,
  wrench: Wrench,
};

/**
 * `id` des sections : cibles des ancres de la navigation
 * (`/ordinateur#services`), les mêmes en français et en anglais.
 */
export const ANCHORS = {
  home: "accueil",
  services: "services",
  about: "apropos",
  gallery: "galerie",
  contact: "contact",
} as const;

/** Cinq étoiles pleines, décrites une seule fois pour les lecteurs d'écran. */
export function Stars({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="flex items-center text-tpl-accent"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} aria-hidden="true" className="size-5 fill-current" />
      ))}
    </div>
  );
}
