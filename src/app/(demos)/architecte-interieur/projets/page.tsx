import { EditorialSection } from "../editorial-ui";

const projects = [
  {
    title: "Appartement atelier, Le Marais",
    summary:
      "Décloisonnement, cuisine minérale et vues traversantes comme fil directeur.",
    href: "/architecte-interieur/projets/atelier-marais",
  },
  {
    title: "Maison patio, Rueil",
    summary:
      "Séquence de pièces recentrée sur le jardin et le calme du cœur d'îlot.",
    href: "/architecte-interieur/contact",
  },
  {
    title: "Suite confidentielle",
    summary:
      "Hospitality dense, détails réduits et lumière rasante travaillée comme matière.",
    href: "/architecte-interieur/journal",
  },
];

export default function ArchitecteInterieurProjetsPage() {
  return (
    <main className="bg-[#f3efe7]">
      <EditorialSection
        eyebrow="Projets"
        title="La page projets fonctionne comme un sommaire long de cas d'étude."
        description="Chaque entrée pose d'abord une intention, puis ouvre la suite du récit."
      >
        <div className="space-y-4">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.href}
              className="grid gap-4 border border-[#d6ccbf] bg-white p-6 transition hover:bg-[#f7f2ea] lg:grid-cols-[120px_1fr]"
            >
              <p className="text-xs font-semibold tracking-[0.3em] text-[#77695d] uppercase">
                Projet 0{index + 1}
              </p>
              <div>
                <h2 className="text-3xl font-semibold">{project.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#1d1816]/70">
                  {project.summary}
                </p>
              </div>
            </a>
          ))}
        </div>
      </EditorialSection>
    </main>
  );
}
