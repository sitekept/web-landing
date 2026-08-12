import Link from "next/link";
import type { ReactNode } from "react";

export function EditorialSection({
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
    <section className={`px-6 py-14 sm:px-8 lg:px-12 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.34em] text-[#77695d] uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#1d1816] sm:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-[#1d1816]/66">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function EditorialLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center border border-[#bcae9f] px-5 py-3 text-sm font-semibold text-[#1d1816] transition hover:-translate-y-0.5 hover:bg-[#1d1816] hover:text-white"
    >
      {children}
    </Link>
  );
}

export function EditorialPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`border border-[#d6ccbf] bg-white p-6 ${className}`}>
      {children}
    </div>
  );
}
