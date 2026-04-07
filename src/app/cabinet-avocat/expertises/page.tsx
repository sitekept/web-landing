import { DossierBlock, DossierSection } from "../dossier-ui";

export default function CabinetAvocatExpertisesPage() {
  return (
    <main className="bg-white">
      <DossierSection
        eyebrow="Expertises"
        title="Les expertises sont limitées, nommées clairement et assumées sans dispersion."
        description="La page ne cherche pas à tout couvrir. Elle pose simplement le champ réel du cabinet."
      >
        <div className="grid gap-4 xl:grid-cols-3">
          {[
            "Contentieux commercial et stratégie de pression utile.",
            "Contrats, rupture et négociation avant cristallisation du litige.",
            "Pré-contentieux dirigeant, associés et situations de blocage.",
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
