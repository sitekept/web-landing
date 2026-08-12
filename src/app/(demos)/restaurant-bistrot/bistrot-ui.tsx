import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function BistrotSection({
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
    <section className={cn("px-4 py-16 sm:px-6 lg:px-8", className)}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.34em] text-current/58 uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-current/72 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}

export function BistrotLink({
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
        "inline-flex items-center gap-2 border px-5 py-3 text-sm font-semibold transition duration-300",
        light
          ? "border-[#f2e3d1] bg-[#f5eadb] text-[#1d1515] hover:bg-[#ead8c1]"
          : "border-white/12 bg-white/8 text-white hover:bg-white/14"
      )}
    >
      {children}
      <ArrowRight className="size-4" />
    </Link>
  );
}
