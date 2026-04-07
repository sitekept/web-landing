import { RealtyCard, RealtySection } from "../../realty-ui";

export default function AppartementVueLacPage() {
  return (
    <main className="bg-[#f2f4ef]">
      <RealtySection
        eyebrow="Fiche bien"
        title="Appartement vue lac"
        description="La fiche est pensée comme une vraie page produit immobilière: informations clés, projection et prise de visite."
      >
        <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <div
            className="min-h-[420px] rounded-[18px] border border-[#d7ddd7] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80')",
            }}
          />

          <div className="grid gap-4">
            <RealtyCard>
              <p className="text-sm leading-7 text-[#16211d]/72">
                82 m², séjour traversant, terrasse filante et rénovation 2023
                dans un registre sobre et lumineux.
              </p>
            </RealtyCard>
            <RealtyCard>
              <p className="text-sm leading-7 text-[#16211d]/72">
                À 6 minutes à pied du lac, cave et stationnement inclus,
                copropriété calme et charges maîtrisées.
              </p>
            </RealtyCard>
            <RealtyCard className="bg-[#16211d] text-white">
              <p className="text-xs font-semibold tracking-[0.28em] text-[#a9c3b5] uppercase">
                Contact visite
              </p>
              <p className="mt-4 text-2xl font-semibold">
                La fiche garde un objectif net: déclencher une visite ou une
                demande d&rsquo;information qualifiée.
              </p>
            </RealtyCard>
          </div>
        </div>
      </RealtySection>
    </main>
  );
}
