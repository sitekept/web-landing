import { EditorialPanel, EditorialSection } from "../editorial-ui";

export default function ArchitecteInterieurContactPage() {
  return (
    <main className="bg-white">
      <EditorialSection
        eyebrow="Contact"
        title="La prise de contact est cadrée comme un brief de projet."
        description="Le site invite à formuler le lieu, le budget et le calendrier avec précision, fidèle à la posture du studio."
      >
        <div className="grid gap-4 xl:grid-cols-3">
          {[
            "Quel lieu ? Appartement, maison, hospitality ou autre programme.",
            "Quelle enveloppe ? Budget global, travaux seuls ou mobilier inclus.",
            "Quel tempo ? Démarrage souhaité, contraintes d'usage et marge de calendrier.",
          ].map((item) => (
            <EditorialPanel key={item}>
              <p className="text-sm leading-7 text-[#1d1816]/70">{item}</p>
            </EditorialPanel>
          ))}
        </div>
      </EditorialSection>
    </main>
  );
}
