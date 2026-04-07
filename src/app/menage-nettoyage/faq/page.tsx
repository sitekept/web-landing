import { QuoteCard, QuoteSection } from "../quote-ui";

export default function MenageNettoyageFaqPage() {
  return (
    <main className="bg-[#edf7fa]">
      <QuoteSection
        kicker="FAQ"
        title="Les réponses lèvent les doutes pratiques qui bloquent un devis rapide."
        description="Le style reste très court, très fonctionnel, fidèle à la logique de la template."
      >
        <div className="space-y-4">
          {[
            {
              q: "Fournissez-vous les produits ?",
              a: "Oui, ou nous adaptons les consommables déjà présents si le site préfère garder ses références.",
            },
            {
              q: "Peut-on commencer par un grand ménage puis passer en entretien ?",
              a: "Oui, c'est même un schéma courant pour repartir sur une base nette avant fréquence régulière.",
            },
            {
              q: "Quels éléments sont nécessaires pour chiffrer ?",
              a: "Type de lieu, surface approximative, fréquence visée, accessibilité et zone d'intervention.",
            },
          ].map((item) => (
            <QuoteCard key={item.q}>
              <h2 className="text-xl font-semibold">{item.q}</h2>
              <p className="mt-3 text-sm leading-7 text-[#163845]/70">
                {item.a}
              </p>
            </QuoteCard>
          ))}
        </div>
      </QuoteSection>
    </main>
  );
}
