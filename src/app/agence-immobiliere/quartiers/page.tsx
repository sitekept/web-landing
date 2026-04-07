import { RealtyCard, RealtySection } from "../realty-ui";

export default function AgenceImmobiliereQuartiersPage() {
  return (
    <main className="bg-[#f2f4ef]">
      <RealtySection
        eyebrow="Quartiers"
        title="Les quartiers sont traités comme des contextes de vie, pas comme une simple taxonomie SEO."
        description="Cette page donne une profondeur locale au modèle et soutient la logique de recherche du hero."
      >
        <div className="grid gap-4 xl:grid-cols-4">
          {[
            "Annecy-le-Vieux · vue, calme résidentiel et accès lac.",
            "Albigny · promenade, lumière et biens très désirés.",
            "Vieille ville · caractère, patrimoine et usage plus urbain.",
            "Veyrier · jardins, maisons et respiration plus familiale.",
          ].map((item, index) => (
            <RealtyCard
              key={item}
              className={index === 0 ? "bg-[#16211d] text-white" : ""}
            >
              <p className="text-sm leading-7">{item}</p>
            </RealtyCard>
          ))}
        </div>
      </RealtySection>
    </main>
  );
}
