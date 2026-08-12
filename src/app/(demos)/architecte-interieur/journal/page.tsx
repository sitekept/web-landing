import { EditorialPanel, EditorialSection } from "../editorial-ui";

export default function ArchitecteInterieurJournalPage() {
  return (
    <main className="bg-[#f3efe7]">
      <EditorialSection
        eyebrow="Journal"
        title="Le journal prolonge la voix du studio et nourrit la perception d'expertise."
        description="Chaque note reste courte et réflexive, en cohérence avec la structure très éditoriale de la template."
      >
        <div className="space-y-4">
          {[
            "Pourquoi la densité visuelle d'une cuisine doit souvent être réduite plutôt qu'accentuée.",
            "Comment choisir un textile qui calme une pièce au lieu de simplement l'habiller.",
            "Ce que l'on apprend d'un projet quand on observe les seuils entre les pièces.",
          ].map((item, index) => (
            <EditorialPanel
              key={item}
              className={index === 1 ? "bg-white" : "bg-[#ece4d8]"}
            >
              <p className="text-sm leading-7 text-[#1d1816]/72">{item}</p>
            </EditorialPanel>
          ))}
        </div>
      </EditorialSection>
    </main>
  );
}
