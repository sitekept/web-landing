import {
  Clock,
  Cpu,
  Database,
  Laptop,
  Mail,
  MapPin,
  Phone,
  Receipt,
  Shield,
  Store,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { OrdinateurIconKey } from "@/content/templates/ordinateur";

/**
 * Table des icônes du template : une entrée par clé `icon` de la copie
 * (`src/content/templates/ordinateur.ts`).
 */
export const ICONS: Record<OrdinateurIconKey, LucideIcon> = {
  clock: Clock,
  cpu: Cpu,
  database: Database,
  laptop: Laptop,
  mail: Mail,
  mapPin: MapPin,
  phone: Phone,
  receipt: Receipt,
  shield: Shield,
  store: Store,
  truck: Truck,
  wrench: Wrench,
};

/**
 * `id` des sections : cibles des ancres de la navigation
 * (`/ordinateur#reparations`), les mêmes en français et en anglais.
 */
export const ANCHORS = {
  home: "accueil",
  repairs: "reparations",
  process: "deroule",
  business: "entreprises",
  workshop: "atelier",
  contact: "contact",
} as const;

/** Bouton plein sur fond graphite : vert citron des sur-titres, texte graphite. */
export const LIME_BUTTON =
  "bg-tpl-eyebrow text-tpl-inverse hover:bg-tpl-eyebrow/90";

/** Lien de texte (téléphone, e-mail) : focus visible sur tous les fonds. */
export const TEXT_LINK =
  "underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink";
