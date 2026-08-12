import { ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function ClinicSection({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("px-4 py-14 sm:px-6 lg:px-8 lg:py-16", className)}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.32em] text-[#2a5660]/66 uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12323a] sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-[#12323a]/72 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}

export function ClinicButton({
  href,
  children,
  kind = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  kind?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-[14px] border px-5 py-3 text-sm font-semibold transition duration-200",
        kind === "primary"
          ? "border-[#12323a] bg-[#12323a] text-white hover:bg-[#0e262d]"
          : "border-[#b8d9d7] bg-white text-[#12323a] hover:bg-[#eef8f7]",
        className
      )}
    >
      {children}
      <ArrowRight className="size-4" />
    </Link>
  );
}

export function ClinicCard({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "rounded-[16px] border border-[#d0e7e5] bg-white p-6 shadow-[0_18px_55px_rgba(18,50,58,0.06)]",
        className
      )}
    >
      <h3 className="text-xl font-semibold text-[#12323a]">{title}</h3>
      <div className="mt-3 text-sm leading-7 text-[#12323a]/72">{children}</div>
    </article>
  );
}

export function ClinicBookingPanel() {
  return (
    <div className="rounded-[16px] border border-[#b9ddda] bg-white p-5 shadow-[0_24px_80px_rgba(18,50,58,0.1)]">
      <div className="rounded-[14px] bg-[#12323a] p-5 text-white">
        <p className="text-xs font-semibold tracking-[0.24em] text-white/60 uppercase">
          Première disponibilité
        </p>
        <p className="mt-4 text-4xl font-semibold">Demain 10h40</p>
        <p className="mt-3 text-sm leading-6 text-white/74">
          Consultation de contrôle, douleur légère, devis esthétique ou première
          visite.
        </p>
      </div>

      <div className="mt-4 grid gap-3">
        {[
          "Radiographie ciblée si nécessaire",
          "Plan de traitement expliqué avant toute intervention",
          "Compte rendu clair envoyé après la visite",
        ].map((item) => (
          <div
            key={item}
            className="rounded-[14px] border border-[#d4e8e6] bg-[#f5fbfa] px-4 py-3 text-sm text-[#12323a]/74"
          >
            {item}
          </div>
        ))}
      </div>

      <Link
        href="/dentiste/rendez-vous"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-[14px] bg-[#12323a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0e262d]"
      >
        <CalendarDays className="size-4" />
        Prendre rendez-vous
      </Link>
    </div>
  );
}
