import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

const navigation = [
  { href: "/menage-nettoyage", label: "Devis" },
  { href: "/menage-nettoyage/formules", label: "Formules" },
  { href: "/menage-nettoyage/zones", label: "Zones" },
  { href: "/menage-nettoyage/entreprises", label: "Entreprises" },
  { href: "/menage-nettoyage/faq", label: "FAQ" },
];

export const metadata: Metadata = {
  title: "Maison Nette - Services de Ménage & Nettoyage",
  description:
    "Template devis-first pour entreprise de ménage et nettoyage avec stepper visible, zones couvertes et pages dédiées aux formules et entreprises.",
};

export default function MenageNettoyageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f4fbfd] text-[#163845]">
      <header className="sticky top-0 z-40 border-b border-[#d5e6eb] bg-[#f4fbfd]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <Link href="/menage-nettoyage" className="text-xl font-semibold">
              Maison Nette
            </Link>
            <p className="text-sm text-[#163845]/58">
              Devis ménage résidentiel et nettoyage professionnel
            </p>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm font-medium text-[#163845]/70">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-[#163845]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/menage-nettoyage#devis"
            className="inline-flex items-center justify-center rounded-[20px] bg-[#163845] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f2932]"
          >
            Obtenir un devis
          </Link>
        </div>

        <div className="border-t border-[#d5e6eb] bg-white">
          <div className="mx-auto grid max-w-7xl gap-3 px-4 py-3 text-xs font-semibold tracking-[0.28em] text-[#2d7785] uppercase sm:px-6 lg:grid-cols-4 lg:px-8">
            <span>1. Besoin</span>
            <span>2. Surface</span>
            <span>3. Fréquence</span>
            <span>4. Proposition</span>
          </div>
        </div>
      </header>

      {children}

      <footer className="border-t border-[#d5e6eb] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div className="max-w-2xl">
            <p className="text-lg font-semibold">
              Une template pensée comme un devis guidé, pas comme une vitrine
              service générique.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#163845]/68">
              Le langage privilégie les check-lists, la progression et les
              preuves simples pour réduire la friction dès les premières
              secondes.
            </p>
          </div>
          <div className="space-y-2 text-sm text-[#163845]/58 sm:text-right">
            <p>Paris intra-muros & première couronne</p>
            <p>bonjour@maisonnette.fr</p>
            <p>Lun-Sam 8h00-19h00</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
