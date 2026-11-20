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
import type { ReactNode } from "react";

import { TemplateLink, type TemplateLocale } from "@/components/template-kit";
import type { ReparationMobileIconKey } from "@/content/templates/reparation-mobile";
import { reparationMobile } from "@/content/templates/reparation-mobile";
import { getTemplateCopy } from "@/content/templates/types";
import { templateHref } from "@/lib/template-href";

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

/** Eyebrow en pastille, avec un point d'accent. */
export function PillEyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-tpl-pill border border-tpl-line bg-tpl-raised px-3.5 py-1.5 text-tpl-ink">
      <span aria-hidden="true" className="size-2 rounded-full bg-tpl-accent" />
      {children}
    </span>
  );
}

/** Titre de page ou de section : gras serré, identité du template. */
export const HEADING_CLASS =
  "[&_h1]:font-extrabold [&_h1]:tracking-tight [&_h1]:[hyphens:manual] [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:[hyphens:manual] [&_h3]:[hyphens:manual]";

/** Deux boutons en pilule : devis (plein) et appel (contour). */
export function QuoteCallActions({
  locale,
  inverse = false,
}: {
  locale: TemplateLocale;
  inverse?: boolean;
}) {
  const copy = getTemplateCopy(reparationMobile, locale);

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <TemplateLink
        href={templateHref(locale, reparationMobile.paths.contact)}
        shape="pill"
        variant={inverse ? "inverse" : "solid"}
      >
        {copy.cta.quote}
      </TemplateLink>
      <TemplateLink
        href={copy.phone.href}
        shape="pill"
        variant="outline"
        icon={<Phone aria-hidden="true" className="size-4" />}
        className={inverse ? "border-tpl-ink/60" : "bg-tpl-raised"}
      >
        {copy.cta.callWithNumber}
      </TemplateLink>
    </div>
  );
}

/** Liste d'horaires (dl) partagée par l'accueil et le contact. */
export function HoursList({ locale }: { locale: TemplateLocale }) {
  const { hours } = getTemplateCopy(reparationMobile, locale);

  return (
    <div>
      <p className="text-tpl-sm font-semibold">{hours.label}</p>
      <dl className="mt-3 divide-y divide-tpl-line text-tpl-sm">
        {hours.items.map((item) => (
          <div key={item.day} className="flex justify-between gap-4 py-2.5">
            <dt className="text-tpl-ink-muted">{item.day}</dt>
            <dd className="font-semibold">{item.time}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-tpl-xs text-tpl-ink-muted">{hours.homeNote}</p>
    </div>
  );
}

/** Hero court des sous-pages : titre, texte, actions et visuel optionnel. */
export function PageHero({
  heading,
  actions,
  media,
}: {
  /** titre principal de la vue (h1). */
  heading: ReactNode;
  actions?: ReactNode;
  media?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-tpl-line px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 size-96 rounded-full bg-tpl-accent/15 blur-3xl"
      />
      <div
        className={`relative mx-auto grid max-w-7xl items-center gap-10 ${
          media ? "lg:grid-cols-[1.15fr_0.85fr] lg:gap-16" : ""
        }`}
      >
        <div className={HEADING_CLASS}>
          {heading}
          {actions ? <div className="mt-8">{actions}</div> : null}
        </div>
        {media}
      </div>
    </section>
  );
}

/**
 * Bande de clôture sur l'accent : titre, texte et deux boutons. Texte en
 * `accent-ink` (bleu nuit) sur l'accent, boutons clairs.
 */
export function CallBand({
  locale,
  eyebrow,
  title,
  description,
  secondary,
}: {
  locale: TemplateLocale;
  eyebrow?: string;
  title: string;
  description: string;
  secondary?: { href: string; label: string };
}) {
  const copy = getTemplateCopy(reparationMobile, locale);

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-tpl bg-tpl-accent p-8 text-tpl-accent-ink shadow-tpl-lg sm:p-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          {eyebrow ? (
            <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 font-tpl-display text-tpl-xl font-extrabold tracking-tight text-balance">
            {title}
          </h2>
          <p className="mt-4 max-w-tpl-measure text-tpl-base">{description}</p>
        </div>
        <div className="flex flex-col gap-3">
          <TemplateLink
            href={copy.phone.href}
            shape="pill"
            variant="inverse"
            icon={<Phone aria-hidden="true" className="size-4" />}
          >
            {copy.cta.callWithNumber}
          </TemplateLink>
          <TemplateLink
            href={
              secondary?.href ??
              templateHref(locale, reparationMobile.paths.contact)
            }
            shape="pill"
            variant="outline"
            className="border-tpl-accent-ink/60 text-tpl-accent-ink hover:bg-tpl-accent-ink/10"
          >
            {secondary?.label ?? copy.cta.quote}
          </TemplateLink>
        </div>
      </div>
    </section>
  );
}
