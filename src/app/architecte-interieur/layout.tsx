import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

const navigation = [
  { href: "/architecte-interieur", label: "Accueil" },
  { href: "/architecte-interieur/projets", label: "Projets" },
  { href: "/architecte-interieur/methode", label: "Méthode" },
  { href: "/architecte-interieur/studio", label: "Studio" },
  { href: "/architecte-interieur/journal", label: "Journal" },
  { href: "/architecte-interieur/contact", label: "Contact" },
];

export const metadata: Metadata = {
  title: "Atelier Minéral - Architecte d'intérieur",
  description:
    "Template éditoriale pour studio d'architecture intérieure avec rail de navigation, projets en chapitres et journal de studio.",
};

export default function ArchitecteInterieurLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f3efe7] text-[#1d1816] lg:grid lg:grid-cols-[290px_1fr]">
      <aside className="hidden border-r border-[#d6ccbf] bg-[#ece4d8] lg:block">
        <div className="sticky top-0 flex min-h-screen flex-col px-8 py-10">
          <div>
            <Link
              href="/architecte-interieur"
              className="text-2xl font-semibold"
            >
              Atelier Minéral
            </Link>
            <p className="mt-3 text-sm leading-6 text-[#1d1816]/60">
              Studio résidentiel et hospitality raconté comme une suite de
              chapitres, pas comme une galerie générique.
            </p>
          </div>

          <nav className="mt-12 flex flex-col gap-4 text-sm font-medium">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between border-t border-[#cdbfad] py-3 transition hover:pl-2"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#1d1816]/38 group-hover:text-[#1d1816]/60">
                  0{index + 1}
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto border-t border-[#cdbfad] pt-6 text-sm leading-6 text-[#1d1816]/58">
            <p>Paris, Lyon, Genève</p>
            <p>contact@atelier-mineral.fr</p>
            <p>Études sur rendez-vous</p>
          </div>
        </div>
      </aside>

      <div className="min-w-0">
        <header className="border-b border-[#d6ccbf] bg-[#f3efe7] px-4 py-4 sm:px-6 lg:hidden">
          <Link href="/architecte-interieur" className="text-xl font-semibold">
            Atelier Minéral
          </Link>
          <nav className="mt-4 flex flex-wrap gap-4 text-sm font-medium text-[#1d1816]/72">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        {children}
      </div>
    </div>
  );
}
