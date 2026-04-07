import { RealtyCard, RealtySection } from "../realty-ui";

export default function AgenceImmobiliereEstimationPage() {
  return (
    <main className="bg-white">
      <RealtySection
        eyebrow="Estimation"
        title="Le tunnel vendeur reste séparé du parcours acheteur."
        description="La page collecte les éléments utiles à une mise en marché cohérente sans brouiller la recherche de biens."
      >
        <div className="grid gap-4 xl:grid-cols-[1fr_1fr_1fr]">
          {[
            "Adresse, type de bien et surface habitable.",
            "État général, extérieurs, vue et éléments différenciants.",
            "Calendrier de vente, objectif de prix et disponibilité pour visite.",
          ].map((item) => (
            <RealtyCard key={item}>
              <p className="text-sm leading-7 text-[#16211d]/72">{item}</p>
            </RealtyCard>
          ))}
        </div>
      </RealtySection>
    </main>
  );
}
