import { RealtyCard, RealtySection } from "../realty-ui";

export default function AgenceImmobiliereAgentsPage() {
  return (
    <main className="bg-[#f2f4ef]">
      <RealtySection
        eyebrow="Agents"
        title="Les agents sont montrés comme des profils de terrain, reliés à des zones et des usages."
        description="Cette page renforce la confiance sans reprendre la grammaire plus institutionnelle d'autres templates."
      >
        <div className="grid gap-4 xl:grid-cols-3">
          {[
            "Élise · estimation et maisons familiales autour d'Annecy.",
            "Romain · appartements premium, vues et négociation sensible.",
            "Nora · relation vendeurs, diffusion et coordination des visites.",
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
