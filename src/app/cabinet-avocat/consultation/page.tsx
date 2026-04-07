import { DossierBlock, DossierSection } from "../dossier-ui";

export default function CabinetAvocatConsultationPage() {
  return (
    <main className="bg-white">
      <DossierSection
        eyebrow="Consultation"
        title="La conversion principale est une consultation initiale cadrée."
        description="La page liste les informations attendues pour rendre le premier échange plus utile et plus rapide."
      >
        <div className="grid gap-4 xl:grid-cols-[1fr_1fr_1fr]">
          {[
            "Sujet, parties en présence et niveau d'urgence réel.",
            "Pièces déjà disponibles et étapes déjà engagées.",
            "Objectif recherché: négocier, sécuriser, interrompre ou agir vite.",
          ].map((item) => (
            <DossierBlock key={item}>
              <p className="text-sm leading-7 text-[#16181d]/72">{item}</p>
            </DossierBlock>
          ))}
        </div>
      </DossierSection>
    </main>
  );
}
