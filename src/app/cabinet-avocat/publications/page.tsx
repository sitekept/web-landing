import { DossierBlock, DossierSection } from "../dossier-ui";

export default function CabinetAvocatPublicationsPage() {
  return (
    <main className="bg-[#f5f1ea]">
      <DossierSection
        eyebrow="Publications"
        title="Les publications renforcent la perception de lecture et de maîtrise."
        description="Ici, elles sont traitées comme des notes de dossier, pas comme un blog marketing."
      >
        <div className="space-y-4">
          {[
            "Négocier avant de menacer: quand la lettre doit ouvrir une trajectoire plutôt que fermer la discussion.",
            "Conflit entre associés: ce qu'il faut cadrer avant toute prise de position émotionnelle.",
            "Contentieux commercial: comment distinguer l'affichage de fermeté de la stratégie réellement utile.",
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
