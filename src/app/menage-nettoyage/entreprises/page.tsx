import { QuoteCard, QuoteSection } from "../quote-ui";

export default function MenageNettoyageEntreprisesPage() {
  return (
    <main className="bg-white">
      <QuoteSection
        kicker="Entreprises"
        title="La page pro parle circulation, accès et protocole, pas “prestations premium”."
        description="Cette route se distingue volontairement de l'offre résidentielle pour éviter un message hybride trop flou."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            "Bureaux compacts avec ouverture ou fermeture discrète.",
            "Cabinets et studios avec check-list d'hygiène et zones sensibles.",
            "Commerces à faible trafic avec remise en ordre quotidienne ou bihebdomadaire.",
          ].map((item) => (
            <QuoteCard key={item}>
              <p className="text-sm leading-7 text-[#163845]/70">{item}</p>
            </QuoteCard>
          ))}
        </div>
      </QuoteSection>
    </main>
  );
}
