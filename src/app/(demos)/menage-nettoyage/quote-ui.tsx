import Link from "next/link";
import type { ReactNode } from "react";

type QuoteSectionProps = {
  kicker: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function QuoteSection({
  kicker,
  title,
  description,
  children,
  className = "",
}: QuoteSectionProps) {
  return (
    <section className={`px-4 py-16 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.32em] text-[#2d7785] uppercase">
            {kicker}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-[#163845]/68">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function QuoteLink({
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
      className={`inline-flex items-center justify-center rounded-[20px] px-5 py-3 text-sm font-semibold transition ${
        light
          ? "border border-[#c7dfe5] bg-white text-[#163845] hover:bg-[#f4fbfd]"
          : "bg-[#163845] text-white hover:-translate-y-0.5 hover:bg-[#0f2932]"
      }`}
    >
      {children}
    </Link>
  );
}

export function QuoteCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[22px] border border-[#cfe2e7] bg-white p-6 shadow-[0_20px_60px_rgba(22,56,69,0.06)] ${className}`}
    >
      {children}
    </div>
  );
}
