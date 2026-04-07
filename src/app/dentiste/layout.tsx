import { CalendarDays, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

const navigation = [
  { href: "/dentiste", label: "Accueil" },
  { href: "/dentiste/soins", label: "Soins" },
  { href: "/dentiste/technologies", label: "Technologies" },
  { href: "/dentiste/equipe", label: "Équipe" },
  { href: "/dentiste/premiere-visite", label: "Première visite" },
  { href: "/dentiste/rendez-vous", label: "Rendez-vous" },
  { href: "/dentiste/contact", label: "Contact" },
];

export const metadata: Metadata = {
  title: "Clinique Nova Sourire - Cabinet dentaire",
  description:
    "Template de cabinet dentaire avec rail de réservation, pages cliniques dédiées et hiérarchie de soins structurée.",
};

export default function DentisteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#eef8f7] text-[#12323a]">
      <header className="sticky top-0 z-40 border-b border-[#c9e5e3] bg-[#eef8f7]/96 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-[14px] bg-[#12323a] text-sm font-semibold text-white">
              NS
            </div>
            <div>
              <Link href="/dentiste" className="text-xl font-semibold">
                Clinique Nova Sourire
              </Link>
              <p className="text-sm text-[#12323a]/60">
                Dentisterie esthétique, familiale et implantaire
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-[#12323a]/72">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-[#12323a]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href="tel:+33184120018"
            className="inline-flex items-center gap-2 rounded-[14px] border border-[#b6d8d5] bg-white px-4 py-2 text-sm font-medium text-[#12323a]"
          >
            <Phone className="size-4" />
            01 84 12 00 18
          </a>
        </div>
      </header>

      <div className="relative">
        {children}

        <aside className="pointer-events-none fixed top-28 right-5 z-30 hidden w-64 xl:block">
          <div className="pointer-events-auto rounded-[14px] border border-[#b6d8d5] bg-white p-4 shadow-[0_24px_70px_rgba(18,50,58,0.12)]">
            <p className="text-xs font-semibold tracking-[0.28em] text-[#2a5660]/62 uppercase">
              Rail rendez-vous
            </p>
            <p className="mt-3 text-lg leading-tight font-semibold">
              Consultation, douleur, contrôle ou devis esthétique.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#12323a]/70">
              Une entrée de conversion visible sur toutes les pages du cabinet.
            </p>
            <Link
              href="/dentiste/rendez-vous"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-[14px] bg-[#12323a] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0e262d]"
            >
              <CalendarDays className="size-4" />
              Prendre rendez-vous
            </Link>
          </div>
        </aside>
      </div>

      <footer className="border-t border-[#c9e5e3] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div className="max-w-2xl">
            <p className="text-lg font-semibold">
              Un site clinique, calme et structuré autour de la réservation.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#12323a]/70">
              La grammaire visuelle est volontairement stricte: rayons contenus,
              lignes propres, information hiérarchisée et aucune mise en scène
              “spa”.
            </p>
          </div>
          <div className="space-y-2 text-sm text-[#12323a]/70 sm:text-right">
            <p>15 avenue du Parc, Levallois-Perret</p>
            <p>Lun-Ven 8h30-19h00, Sam 9h00-13h00</p>
            <p>contact@novasourire.fr</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
