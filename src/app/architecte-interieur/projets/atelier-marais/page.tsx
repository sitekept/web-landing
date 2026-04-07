import { EditorialPanel, EditorialSection } from "../../editorial-ui";

export default function AtelierMaraisProjectPage() {
  return (
    <main className="bg-white">
      <EditorialSection
        eyebrow="Étude de cas"
        title="Appartement atelier, Le Marais"
        description="Une fiche projet pensée comme un chapitre de dossier: contexte, parti pris, matières et résultat d'usage."
      >
        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4">
            {[
              "Conserver l'épaisseur ancienne du lieu tout en allégeant sa lecture.",
              "Faire exister la cuisine comme pièce d'architecture, pas comme bloc ajouté.",
              "Installer une palette pierre, noyer fumé et textile ivoire sans sur-signer le projet.",
            ].map((item) => (
              <EditorialPanel key={item}>
                <p className="text-sm leading-7 text-[#1d1816]/70">{item}</p>
              </EditorialPanel>
            ))}
          </div>

          <EditorialPanel className="bg-[#1d1816] text-white">
            <p className="text-xs font-semibold tracking-[0.3em] text-white/46 uppercase">
              Résultat
            </p>
            <p className="mt-4 text-3xl leading-tight font-semibold">
              Un appartement plus calme, plus traversant et plus cohérent, sans
              perdre sa gravité parisienne.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div
                className="min-h-[210px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80')",
                }}
              />
              <div
                className="min-h-[210px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80')",
                }}
              />
            </div>
          </EditorialPanel>
        </div>
      </EditorialSection>
    </main>
  );
}
