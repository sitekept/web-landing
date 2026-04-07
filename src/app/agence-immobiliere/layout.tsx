import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

const navigation = [
  { href: "/agence-immobiliere", label: "Accueil" },
  { href: "/agence-immobiliere/biens", label: "Biens" },
  { href: "/agence-immobiliere/services", label: "Services" },
  { href: "/agence-immobiliere/agents", label: "Agents" },
  { href: "/agence-immobiliere/quartiers", label: "Quartiers" },
  { href: "/agence-immobiliere/estimation", label: "Estimation" },
];

export const metadata: Metadata = {
  title: "Maison Latitude - Agence immobilière",
  description:
    "Template immobilière orientée recherche avec moteur de découverte, fiches biens, quartiers et estimation vendeur.",
};

export default function AgenceImmobiliereLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f2f4ef] text-[#16211d]">
      <header className="sticky top-0 z-40 border-b border-[#d7ddd7] bg-[#f2f4ef]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <Link href="/agence-immobiliere" className="text-xl font-semibold">
              Maison Latitude
            </Link>
            <p className="text-sm text-[#16211d]/58">
              Recherche de biens, stratégie vendeur et accompagnement local
            </p>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm font-medium text-[#16211d]/72">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#16211d]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/agence-immobiliere/estimation"
            className="inline-flex items-center justify-center rounded-[18px] bg-[#16211d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f1714]"
          >
            Estimer mon bien
          </Link>
        </div>

        <div className="border-t border-[#d7ddd7] bg-white">
          <div className="mx-auto grid max-w-7xl gap-3 px-4 py-3 text-xs font-semibold tracking-[0.28em] text-[#507163] uppercase sm:grid-cols-3 sm:px-6 lg:px-8">
            <span>Achat</span>
            <span>Vente</span>
            <span>Quartiers</span>
          </div>
        </div>
      </header>

      {children}

      <footer className="border-t border-[#d7ddd7] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div className="max-w-2xl">
            <p className="text-lg font-semibold">
              Une template pensée comme un explorateur immobilier, avec des
              entrées distinctes pour acquéreurs et vendeurs.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#16211d]/68">
              Le hero pousse la recherche, les fiches biens servent de preuve
              produit et la page estimation garde un tunnel vendeur séparé.
            </p>
          </div>
          <div className="space-y-2 text-sm text-[#16211d]/58 sm:text-right">
            <p>Annecy & bassin lémanique</p>
            <p>bonjour@maisonlatitude.fr</p>
            <p>Lun-Sam sur rendez-vous</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
