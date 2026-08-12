import { ClipboardCheck, FileText, LocateFixed } from "lucide-react";

import { ClinicButton, ClinicSection } from "../clinic-ui";

export default function DentistePremiereVisitePage() {
  return (
    <main>
      <ClinicSection
        eyebrow="Première visite"
        title="Une page dédiée pour réduire l'incertitude avant la première consultation."
        description="Le cabinet explique quoi apporter, comment venir et comment la consultation sera conduite."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              icon: ClipboardCheck,
              title: "Avant la venue",
              text: "Ordonnances récentes, radio disponible, mutuelle si utile et motif de consultation déjà clarifié.",
            },
            {
              icon: FileText,
              title: "Pendant le rendez-vous",
              text: "Échange, bilan, radios ciblées si nécessaires puis proposition de plan de traitement.",
            },
            {
              icon: LocateFixed,
              title: "Après la consultation",
              text: "Compte rendu, consignes, prochain rendez-vous ou devis selon le parcours retenu.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[16px] border border-[#d0e7e5] bg-white p-6"
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

        <div className="mt-8">
          <ClinicButton href="/dentiste/rendez-vous">
            Réserver ma première visite
          </ClinicButton>
        </div>
      </ClinicSection>
    </main>
  );
}
