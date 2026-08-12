import { QuoteCard, QuoteSection } from "../quote-ui";

export default function MenageNettoyageFormulesPage() {
  return (
    <main className="bg-white">
      <QuoteSection
        kicker="Formules"
        title="Les formules sont comparées comme des scénarios d'intervention, pas comme une liste plate."
        description="Chaque bloc explicite le rythme, le type de lieu et le niveau de profondeur attendu."
      >
        <div className="grid gap-4 xl:grid-cols-4">
          {[
            {
              title: "Essentiel",
              text: "Appartement jusqu'à 70 m², entretien régulier, cuisine, sanitaires, sols et poussières.",
            },
            {
              title: "Confort",
              text: "Familles et maisons compactes avec rotation linge, rangements légers et passage hebdomadaire.",
            },
            {
              title: "Intensif",
              text: "Grand ménage ponctuel, vitres intérieures, reprise approfondie et remise au net complète.",
            },
            {
              title: "Professionnel",
              text: "Petits bureaux, cabinets ou showrooms avec protocoles d'ouverture ou fermeture.",
            },
          ].map((item, index) => (
            <QuoteCard
              key={item.title}
              className={index === 1 ? "bg-[#163845] text-white" : ""}
            >
              <p className="text-xs font-semibold tracking-[0.28em] text-[#2d7785] uppercase">
                {item.title}
              </p>
              <p
                className={`mt-4 text-sm leading-7 ${
                  index === 1 ? "text-white/78" : "text-[#163845]/70"
                }`}
              >
                {item.text}
              </p>
            </QuoteCard>
          ))}
        </div>
      </QuoteSection>
    </main>
  );
}
