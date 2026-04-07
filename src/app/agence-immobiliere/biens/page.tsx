import Link from "next/link";

import { RealtyCard, RealtySection } from "../realty-ui";

const listings = [
  {
    title: "Appartement vue lac",
    meta: "Annecy-le-Vieux · 82 m² · 2 chambres · terrasse",
    href: "/agence-immobiliere/biens/appartement-vue-lac",
  },
  {
    title: "Maison d'architecte",
    meta: "Veyrier · 215 m² · jardin · bureau",
    href: "/agence-immobiliere/estimation",
  },
  {
    title: "Loft traversant",
    meta: "Lyon 6e · 126 m² · terrasse sud",
    href: "/agence-immobiliere/agents",
  },
];

export default function AgenceImmobiliereBiensPage() {
  return (
    <main className="bg-white">
      <RealtySection
        eyebrow="Biens"
        title="La page listings garde la logique du moteur de recherche et de la comparaison rapide."
        description="Filtres simulés, cartes lisibles et projection immédiate vers la fiche détaillée."
      >
        <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
          <RealtyCard className="self-start bg-[#f4f7f2]">
            <p className="text-xs font-semibold tracking-[0.28em] text-[#507163] uppercase">
              Filtres
            </p>
            <div className="mt-5 space-y-3">
              {["Type de bien", "Budget", "Quartier", "Extérieur"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-[14px] border border-[#d7ddd7] bg-white px-4 py-4 text-sm text-[#16211d]/70"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </RealtyCard>

          <div className="space-y-4">
            {listings.map((listing) => (
              <RealtyCard
                key={listing.title}
                className="grid gap-4 lg:grid-cols-[1fr_auto]"
              >
                <div>
                  <h2 className="text-2xl font-semibold">{listing.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#16211d]/70">
                    {listing.meta}
                  </p>
                </div>
                <Link
                  href={listing.href}
                  className="self-center text-sm font-semibold underline underline-offset-4"
                >
                  Ouvrir
                </Link>
              </RealtyCard>
            ))}
          </div>
        </div>
      </RealtySection>
    </main>
  );
}
