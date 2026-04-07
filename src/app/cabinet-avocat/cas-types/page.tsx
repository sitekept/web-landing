import { DossierBlock, DossierSection } from "../dossier-ui";

export default function CabinetAvocatCasTypesPage() {
  return (
    <main className="bg-[#f5f1ea]">
      <DossierSection
        eyebrow="Cas-types"
        title="Les cas-types servent de grille de projection rapide pour le prospect."
        description="Le langage reste factuel pour garder la cohérence documentaire de la template."
      >
        <div className="space-y-4">
          {[
            "Conflit entre associés avec urgence de gouvernance ou sortie à négocier.",
            "Rupture brutale de relation commerciale ou inexécution contractuelle documentée.",
            "Recouvrement à forte dimension stratégique où l'enjeu dépasse la seule facture.",
          ].map((item, index) => (
            <DossierBlock
              key={item}
              className={index === 1 ? "bg-white" : "bg-[#fbf8f3]"}
            >
              <p className="text-sm leading-7 text-[#16181d]/72">{item}</p>
            </DossierBlock>
          ))}
        </div>
      </DossierSection>
    </main>
  );
}
