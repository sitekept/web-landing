import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

const navigation = [
  { href: "/restaurant-bistrot", label: "Accueil" },
  { href: "/restaurant-bistrot/menu", label: "Menu" },
  { href: "/restaurant-bistrot/reservation", label: "Réservation" },
  { href: "/restaurant-bistrot/galerie", label: "Galerie" },
  { href: "/restaurant-bistrot/histoire", label: "Histoire" },
  { href: "/restaurant-bistrot/privatisation", label: "Privatisation" },
  { href: "/restaurant-bistrot/contact", label: "Contact" },
];

export const metadata: Metadata = {
  title: "Le Sillon - Restaurant Bistrot",
  description:
    "Template immersive pour restaurant bistrot avec overlay navigation, réservation et pages éditoriales d'hospitalité.",
};

export default function RestaurantBistrotLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#181211] text-[#f5eadb]">
      <header className="fixed inset-x-0 top-0 z-40 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border border-white/10 bg-[#181211]/86 px-5 py-4 backdrop-blur lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Link href="/restaurant-bistrot" className="text-xl font-semibold">
              Le Sillon
            </Link>
            <p className="text-sm text-white/52">
              Bistrot de quartier, cave vivante et cuisine de saison
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-white/72">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/restaurant-bistrot/reservation"
            className="inline-flex items-center justify-center border border-[#f2e3d1] bg-[#f5eadb] px-5 py-3 text-sm font-semibold text-[#181211] transition hover:bg-[#ead8c1]"
          >
            Réserver
          </Link>
        </div>
      </header>

      {children}

      <footer className="border-t border-white/10 bg-[#221918]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div className="max-w-2xl">
            <p className="text-lg font-semibold">
              Une template d&rsquo;hospitalité qui vend le lieu, la lumière et le
              rythme du service.
            </p>
            <p className="mt-3 text-sm leading-6 text-white/64">
              La structure privilégie les séquences immersives et les décisions
              de réservation plutôt qu&rsquo;un simple empilement d&rsquo;informations.
            </p>
          </div>
          <div className="space-y-2 text-sm text-white/56 sm:text-right">
            <p>17 rue Keller, Paris 11e</p>
            <p>reservation@lesillon.fr</p>
            <p>Mar-Sam service midi & soir</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
