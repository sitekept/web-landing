import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

const navigation = [
  { href: "/cabinet-avocat", label: "Accueil" },
  { href: "/cabinet-avocat/expertises", label: "Expertises" },
  { href: "/cabinet-avocat/cas-types", label: "Cas types" },
  { href: "/cabinet-avocat/methode", label: "Méthode" },
  { href: "/cabinet-avocat/publications", label: "Publications" },
  { href: "/cabinet-avocat/consultation", label: "Consultation" },
];

export const metadata: Metadata = {
  title: "Cabinet Valmont - Avocat en droit des affaires",
  description:
    "Template documentaire pour cabinet d'avocat avec pages d'expertises, cas types, publications et consultation.",
};

export default function CabinetAvocatLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f5f1ea] text-[#16181d]">
      <div className="border-b border-[#d9d1c5] bg-[#ece4d7]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-xs font-semibold tracking-[0.3em] text-[#6b5d4b] uppercase sm:px-6 lg:px-8">
          <span>Dossier 24-041</span>
          <span>Conseil & contentieux</span>
        </div>
      </div>

      <header className="border-b border-[#d9d1c5] bg-[#f5f1ea]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <Link href="/cabinet-avocat" className="text-xl font-semibold">
              Cabinet Valmont
            </Link>
            <p className="text-sm text-[#16181d]/58">
              Droit des affaires, contentieux commercial et stratégie
            </p>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm font-medium text-[#16181d]/72">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="underline-offset-4 transition hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/cabinet-avocat/consultation"
            className="inline-flex items-center justify-center border border-[#16181d] bg-[#16181d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f1115]"
          >
            Demander une consultation
          </Link>
        </div>
      </header>

      {children}

      <footer className="border-t border-[#d9d1c5] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div className="max-w-2xl">
            <p className="text-lg font-semibold">
              Une template juridique qui assume une forme de lecture sobre et
              documentaire.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#16181d]/66">
              Les preuves passent par les dossiers, les cas-types et les
              publications, pas par une rhétorique institutionnelle vide.
            </p>
          </div>
          <div className="space-y-2 text-sm text-[#16181d]/58 sm:text-right">
            <p>Paris 8e</p>
            <p>contact@cabinetvalmont.fr</p>
            <p>01 77 31 00 43</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
