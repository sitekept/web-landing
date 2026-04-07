import { ShieldCheck, Sparkles, Syringe } from "lucide-react";

import { ClinicButton, ClinicCard, ClinicSection } from "../clinic-ui";

const treatments = [
  {
    title: "Prévention & contrôle",
    text: "Consultation de contrôle, détartrage, radios ciblées et logique de suivi annuel.",
  },
  {
    title: "Soins conservateurs",
    text: "Traitement de caries et restauration avec discours simple et décision visible.",
  },
  {
    title: "Esthétique du sourire",
    text: "Blanchiment, facettes et harmonisation avec mise en situation avant validation.",
  },
  {
    title: "Implants & réhabilitation",
    text: "Parcours plus long présenté comme une suite d'étapes claires et comparables.",
  },
];

export default function DentisteSoinsPage() {
  return (
    <main>
      <ClinicSection
        eyebrow="Soins"
        title="Les soins sont classés selon la logique patient, pas selon l'organisation interne du cabinet."
        description="Cette page reste clinique et lisible: bénéfice, niveau d'engagement, mode de suivi."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {treatments.map((item) => (
            <ClinicCard key={item.title} title={item.title}>
              {item.text}
            </ClinicCard>
          ))}
        </div>
      </ClinicSection>

      <ClinicSection
        eyebrow="Principes"
        title="Trois garde-fous maintiennent la confiance."
        className="bg-white"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Diagnostic visible",
              text: "Le patient comprend ce qui est observé avant qu'une solution lui soit proposée.",
            },
            {
              icon: Syringe,
              title: "Intervention proportionnée",
              text: "Le site évite le ton spectaculaire et hiérarchise clairement l'utilité du soin.",
            },
            {
              icon: Sparkles,
              title: "Esthétique cadrée",
              text: "Les traitements premium sont montrés sans basculer dans un imaginaire cosmétique.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[16px] bg-[#12323a] p-6 text-white"
              >
                <Icon className="size-5 text-[#8ad7cf]" />
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/74">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ClinicButton href="/dentiste/rendez-vous">
            Prendre rendez-vous
          </ClinicButton>
          <ClinicButton href="/dentiste/technologies" kind="secondary">
            Voir les technologies
          </ClinicButton>
        </div>
      </ClinicSection>
    </main>
  );
}
