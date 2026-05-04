import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export function AvocateSection({
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
          <p className="text-xs font-semibold text-[#7b5c48] uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-[#2b1d17] sm:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 text-base leading-7 text-[#3a2820]/72">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function AvocatePanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[8px] border border-[#dacdbf] bg-white p-6 ${className}`}
    >
      {children}
    </div>
  );
}

export function AvocateLink({
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
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-[6px] border px-5 py-3 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-[#8a654e] focus-visible:ring-offset-2 focus-visible:outline-none ${
        inverted
          ? "border-white/22 bg-white text-[#2b1d17] hover:bg-[#f5eadc]"
          : "border-[#3a2820] bg-[#3a2820] text-white hover:bg-[#2b1d17]"
      }`}
    >
      {children}
      <ArrowUpRight aria-hidden="true" className="size-4" />
    </Link>
  );
}

export function DetailList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-sm leading-7 text-[#3a2820]/74"
        >
          <span
            aria-hidden="true"
            className="mt-3 h-px w-5 shrink-0 bg-[#8a654e]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
