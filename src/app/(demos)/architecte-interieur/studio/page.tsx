import { EditorialPanel, EditorialSection } from "../editorial-ui";

export default function ArchitecteInterieurStudioPage() {
  return (
    <main className="bg-white">
      <EditorialSection
        eyebrow="Studio"
        title="Le studio se présente comme une discipline de regard et de retenue."
        description="Cette page remplace volontairement le banal “à propos” par une formulation plus proche d'un manifeste."
      >
        <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
          <EditorialPanel className="bg-[#f7f2ea]">
            <p className="text-sm leading-8 text-[#1d1816]/72">
              Atelier Minéral travaille des lieux qui gagnent en calme, en
              lisibilité et en ancrage. Le studio cherche moins à “styliser” un
              intérieur qu&rsquo;à clarifier ses masses, ses circulations et sa
              présence sensible.
            </p>
          </EditorialPanel>
          <div className="grid gap-4">
            {[
              "Résidentiel principal et secondaire",
              "Hospitality intimiste",
              "Accompagnement à distance avec cadrage très écrit",
            ].map((item) => (
              <EditorialPanel key={item}>
                <p className="text-sm leading-7 text-[#1d1816]/70">{item}</p>
              </EditorialPanel>
            ))}
          </div>
        </div>
      </EditorialSection>
    </main>
  );
}
