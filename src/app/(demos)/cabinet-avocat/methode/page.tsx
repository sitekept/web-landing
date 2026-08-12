import { DossierBlock, DossierSection } from "../dossier-ui";

export default function CabinetAvocatMethodePage() {
  return (
    <main className="bg-white">
      <DossierSection
        eyebrow="Méthode"
        title="Comprendre, cadrer, agir: trois mouvements suffisent à rendre le cabinet concret."
        description="La page est volontairement resserrée pour rester au service de la consultation."
      >
        <div className="grid gap-4 xl:grid-cols-3">
          {[
            "Comprendre le dossier, les pièces décisives et le véritable levier du rapport de force.",
            "Cadrer les risques, les options et la séquence la plus cohérente à court terme.",
            "Agir par courrier, négociation, protocole ou contentieux si c'est la bonne voie.",
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
