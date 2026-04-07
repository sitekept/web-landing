import { Award, Microscope, UserRound } from "lucide-react";

import { ClinicButton, ClinicSection } from "../clinic-ui";

const team = [
  {
    name: "Dr Inès Morvan",
    role: "Chirurgien-dentiste, esthétique et réhabilitation",
  },
  {
    name: "Dr Mehdi Karam",
    role: "Implantologie et chirurgie guidée",
  },
  {
    name: "Léna Puech",
    role: "Coordinatrice de parcours et relation patient",
  },
];

export default function DentisteEquipePage() {
  return (
    <main>
      <ClinicSection
        eyebrow="Équipe"
        title="Le cabinet se présente comme une chaîne clinique continue, pas comme des profils isolés."
        description="Les rôles sont décrits selon ce qu'ils changent pour le patient dans son parcours."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="rounded-[16px] border border-[#d0e7e5] bg-white p-6"
            >
              <UserRound className="size-5 text-[#2a5660]" />
              <h3 className="mt-4 text-2xl font-semibold text-[#12323a]">
                {member.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#12323a]/72">
                {member.role}
              </p>
            </article>
          ))}
        </div>
      </ClinicSection>

      <ClinicSection
        eyebrow="Pratique"
        title="Le site souligne la compétence par la méthode, pas par la posture."
        className="bg-white"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              icon: Award,
              title: "Formation continue",
              text: "Le cabinet montre des standards, pas une accumulation d'effets d'autorité.",
            },
            {
              icon: Microscope,
              title: "Équipement ciblé",
              text: "La technologie est montrée seulement lorsqu'elle change vraiment le niveau de diagnostic.",
            },
            {
              icon: UserRound,
              title: "Continuité du suivi",
              text: "Le patient sait qui prend le relais à chaque étape importante du parcours.",
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

        <div className="mt-8">
          <ClinicButton href="/dentiste/contact">Venir au cabinet</ClinicButton>
        </div>
      </ClinicSection>
    </main>
  );
}
