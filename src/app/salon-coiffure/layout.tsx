import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

const navigation = [
  { href: "/salon-coiffure", label: "Accueil" },
  { href: "/salon-coiffure/prestations", label: "Prestations" },
  { href: "/salon-coiffure/stylists", label: "Stylists" },
  { href: "/salon-coiffure/lookbook", label: "Lookbook" },
  { href: "/salon-coiffure/reservation", label: "Réservation" },
  { href: "/salon-coiffure/journal", label: "Journal" },
  { href: "/salon-coiffure/contact", label: "Contact" },
];

export const metadata: Metadata = {
  title: "Studio Lune - Salon de coiffure",
  description:
    "Template lifestyle pour salon de coiffure avec collage éditorial, pages stylists, lookbook, journal et réservation.",
};

export default function SalonCoiffureLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f8eee7] text-[#261a1f]">
      <header className="sticky top-4 z-40 mx-auto mt-4 max-w-6xl px-4 sm:px-6">
        <div className="rounded-[999px] border border-white/60 bg-white/86 px-6 py-4 shadow-[0_24px_80px_rgba(61,28,38,0.12)] backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <Link href="/salon-coiffure" className="text-xl font-semibold">
                Studio Lune
              </Link>
              <p className="text-sm text-[#261a1f]/56">
                Couleur, coupe et styling signature
              </p>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-[#261a1f]/72">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-[#261a1f]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/salon-coiffure/reservation"
              className="inline-flex items-center justify-center rounded-[999px] bg-[#261a1f] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1b1215]"
            >
              Réserver
            </Link>
          </div>
        </div>
      </header>

      {children}

      <footer className="border-t border-[#e7d5ce] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div className="max-w-2xl">
            <p className="text-lg font-semibold">
              Un salon pensé comme une marque éditoriale avec booking très
              visible.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#261a1f]/68">
              Le style du site repose sur des courbes très larges, une
              navigation flottante et des moments visuels plus émotionnels que
              descriptifs.
            </p>
          </div>
          <div className="space-y-2 text-sm text-[#261a1f]/60 sm:text-right">
            <p>28 rue des Martyrs, Paris 9e</p>
            <p>bonjour@studio-lune.fr</p>
            <p>Mar-Sam 10h00-20h00</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
