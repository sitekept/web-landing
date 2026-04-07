import { Cpu, Shield, Workflow } from "lucide-react";

import { ClinicSection } from "../clinic-ui";

export default function DentisteTechnologiesPage() {
  return (
    <main>
      <ClinicSection
        eyebrow="Technologies"
        title="La technologie est racontée comme un outil de décision, pas comme un décor premium."
        description="Cette page précise pourquoi chaque outil existe dans le parcours clinique, et ce qu'il change concrètement pour le patient."
        className="bg-white"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              icon: Cpu,
              title: "Imagerie ciblée",
              text: "Radiographie ponctuelle ou imagerie guidée selon le cas, jamais affichée comme gadget.",
            },
            {
              icon: Workflow,
              title: "Protocole numérique",
              text: "Le cabinet structure mieux ses étapes, ses devis et ses suivis grâce à des outils de coordination.",
            },
            {
              icon: Shield,
              title: "Traçabilité clinique",
              text: "Photos, comptes rendus et recommandations restent rattachés au parcours du patient.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[16px] border border-[#d0e7e5] bg-[#f7fcfc] p-6"
              >
                <Icon className="size-5 text-[#2a5660]" />
                <h3 className="mt-4 text-2xl font-semibold text-[#12323a]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#12323a]/72">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </ClinicSection>
    </main>
  );
}
