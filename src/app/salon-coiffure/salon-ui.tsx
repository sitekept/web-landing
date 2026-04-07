import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SalonSection({
  kicker,
  title,
  description,
  children,
  className,
}: {
  kicker: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("px-4 py-16 sm:px-6 lg:px-8", className)}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.34em] text-[#8a5d65]/62 uppercase">
            {kicker}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#261a1f] sm:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-[#261a1f]/72 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}

export function SalonPillLink({
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
      className={cn(
        "inline-flex items-center gap-2 rounded-[999px] px-5 py-3 text-sm font-semibold transition duration-300",
        light
          ? "bg-white text-[#261a1f] hover:-translate-y-0.5 hover:bg-[#fff5f1]"
          : "bg-[#261a1f] text-white hover:-translate-y-0.5 hover:bg-[#1b1215]"
      )}
    >
      {children}
      <ArrowRight className="size-4" />
    </Link>
  );
}

export function SalonCard({
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
        "rounded-[42px] border border-[#ead9d2] bg-white p-6 shadow-[0_24px_80px_rgba(61,28,38,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_95px_rgba(61,28,38,0.16)]",
        className
      )}
    >
      <h3 className="text-2xl font-semibold text-[#261a1f]">{title}</h3>
      <div className="mt-4 text-sm leading-7 text-[#261a1f]/72">{children}</div>
    </article>
  );
}
