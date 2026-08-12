import { EditorialPanel, EditorialSection } from "../editorial-ui";

export default function ArchitecteInterieurMethodePage() {
  return (
    <main className="bg-[#ece4d8]">
      <EditorialSection
        eyebrow="Méthode"
        title="Le process se lit comme un enchaînement d'arbitrages, pas comme une liste de livrables."
        description="Le studio montre comment naît une direction spatiale, de l'écoute au suivi d'exécution."
      >
        <div className="grid gap-4 xl:grid-cols-4">
          {[
            "01. Écoute des usages, des routines et des tensions du lieu.",
            "02. Mise en ordre des volumes, des circulations et des lignes de vue.",
            "03. Calibration des matières, de la lumière et des niveaux de présence.",
            "04. Suivi des choix pour que le chantier ne dilue pas le projet.",
          ].map((item, index) => (
            <EditorialPanel
              key={item}
              className={index === 2 ? "bg-[#1d1816] text-white" : ""}
            >
              <p className="text-sm leading-7">{item}</p>
            </EditorialPanel>
          ))}
        </div>
      </EditorialSection>
    </main>
  );
}
