import Link from "next/link";
import type { ReactNode } from "react";

export function DossierSection({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`px-4 py-16 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.32em] text-[#6b5d4b] uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-[#16181d]/68">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function DossierLink({
  href,
  children,
  inverted = false,
}: {
  href: string;
  children: ReactNode;
  inverted?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center border px-5 py-3 text-sm font-semibold transition ${
        inverted
          ? "border-white/12 bg-white/6 text-white hover:border-white/30 hover:bg-white/10"
          : "border-[#cfc5b6] bg-white text-[#16181d] hover:border-[#16181d]"
      }`}
    >
      {children}
    </Link>
  );
}

export function DossierBlock({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`border border-[#d9d1c5] bg-white p-6 ${className}`}>
      {children}
    </div>
  );
}
