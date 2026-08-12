import Link from "next/link";
import type { ReactNode } from "react";

export function RealtySection({
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
          <p className="text-xs font-semibold tracking-[0.32em] text-[#507163] uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#16211d] sm:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-[#16211d]/68">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function RealtyLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-[18px] px-5 py-3 text-sm font-semibold transition ${
        light
          ? "border border-[#cfd6d0] bg-white text-[#16211d] hover:bg-[#f3f6f1]"
          : "bg-[#16211d] text-white hover:-translate-y-0.5 hover:bg-[#0f1714]"
      }`}
    >
      {children}
    </Link>
  );
}

export function RealtyCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[18px] border border-[#d7ddd7] bg-white p-6 shadow-[0_20px_60px_rgba(22,33,29,0.06)] ${className}`}
    >
      {children}
    </div>
  );
}
