import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

const navigation = [
  { href: "/avocate", label: "Accueil" },
  { href: "/avocate/expertises", label: "Expertises" },
  { href: "/avocate/blog", label: "Blog" },
  { href: "/avocate/contact", label: "Contact" },
];

export const metadata: Metadata = {
  title: "Votre cabinet - Avocate au barreau",
  description:
    "Modèle de site pour une avocate : conseil et contentieux en droit immobilier, successions et droit de la famille.",
};

export default function AvocateLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f7efe5] text-[#2b1d17]">
      <header className="sticky top-0 z-50 border-b border-[#d8c9ba] bg-[#fffaf4]/96 backdrop-blur">
        <div className="border-b border-[#e7ddd2] bg-[#3a2820] text-[#fffaf4]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs font-medium sm:px-6 lg:px-8">
            <span>Votre ville</span>
            <span>Immobilier, successions et droit de la famille</span>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <Link
              href="/avocate"
              className="font-serif text-xl font-semibold text-[#2b1d17]"
            >
              Votre cabinet
            </Link>
            <p className="mt-1 text-sm text-[#3a2820]/64">
              Avocate au barreau — conseil et contentieux
            </p>
          </div>

          <nav
            aria-label="Navigation principale"
            className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#3a2820]/74"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="min-h-11 content-center underline-offset-4 transition hover:text-[#2b1d17] hover:underline focus-visible:ring-2 focus-visible:ring-[#8a654e] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/avocate/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-[6px] border border-[#3a2820] bg-[#3a2820] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2b1d17] focus-visible:ring-2 focus-visible:ring-[#8a654e] focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Prendre contact
          </Link>
        </div>
      </header>

      {children}

      <footer className="border-t border-[#d8c9ba] bg-[#fffaf4]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div className="max-w-2xl">
            <p className="font-serif text-xl font-semibold text-[#2b1d17]">
              Votre cabinet
            </p>
            <p className="mt-3 text-sm leading-6 text-[#3a2820]/68">
              Modèle de site professionnel pour présenter les expertises en
              droit immobilier, successions et droit de la famille, avec une
              prise de contact front-only.
            </p>
          </div>
          <div className="space-y-2 text-sm text-[#3a2820]/64 sm:text-right">
            <p>Votre ville</p>
            <p>contact@exemple.fr</p>
            <p>01 00 00 00 00</p>
            <p>Sur rendez-vous</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
