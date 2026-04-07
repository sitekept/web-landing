import { QuoteCard, QuoteSection } from "../quote-ui";

export default function MenageNettoyageZonesPage() {
  return (
    <main className="bg-[#edf7fa]">
      <QuoteSection
        kicker="Zones"
        title="Les zones sont structurées par logique de passage, pas juste par liste de villes."
        description="Le site assume un maillage concret avec créneaux associés, ce qui rend la promesse plus crédible."
      >
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <QuoteCard className="bg-[#163845] text-white">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#9ed8e1] uppercase">
              Tournées
            </p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-white/78">
              <p>Lundi / Jeudi: Paris rive droite et nord-est.</p>
              <p>Mardi / Vendredi: ouest parisien et Issy-Vanves-Boulogne.</p>
              <p>
                Mercredi / Samedi: Vincennes, Montreuil et interventions
                ponctuelles.
              </p>
            </div>
          </QuoteCard>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Paris 8e à 12e",
              "Paris 15e à 17e",
              "Boulogne, Issy, Sèvres",
              "Levallois, Neuilly, Clichy",
              "Montreuil, Vincennes, Bagnolet",
              "Clamart, Vanves, Malakoff",
            ].map((item) => (
              <QuoteCard key={item}>
                <p className="text-sm font-semibold">{item}</p>
              </QuoteCard>
            ))}
          </div>
        </div>
      </QuoteSection>
    </main>
  );
}
