import { BistrotSection } from "../bistrot-ui";

export default function RestaurantBistrotMenuPage() {
  return (
    <main className="bg-[#f5eadb] pt-28 text-[#1d1515]">
      <BistrotSection
        eyebrow="Carte"
        title="Une carte présentée comme un rythme de service, pas comme un PDF figé."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            "Entrées · poireaux vinaigrette fumée, truite crue, brioche chaude",
            "Plats · volaille rôtie, gnocchi, poisson selon arrivage",
            "Desserts · crème caramel, mousse chocolat, compote rôtie",
          ].map((item) => (
            <div
              key={item}
              className="border border-[#d8c6b2] bg-white p-6 text-sm leading-7"
            >
              {item}
            </div>
          ))}
        </div>
      </BistrotSection>
    </main>
  );
}
