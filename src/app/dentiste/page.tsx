import { Cpu, ShieldCheck, Stethoscope } from "lucide-react";

import {
  ClinicBookingPanel,
  ClinicButton,
  ClinicCard,
  ClinicSection,
} from "./clinic-ui";

const routes = [
  "Contrôle et prévention",
  "Douleur ou urgence légère",
  "Esthétique du sourire",
  "Implants et réhabilitation",
];

export default function DentistePage() {
  return (
    <main>
      <section className="border-b border-[#cfe5e3] bg-[linear-gradient(135deg,#dff4f2_0%,#eef8f7_38%,#ffffff_38%,#ffffff_100%)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-[14px] border border-[#b7d9d6] bg-white px-4 py-2 text-xs font-semibold tracking-[0.3em] text-[#2a5660] uppercase">
              Clinique premium structurée
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-[#12323a] sm:text-6xl lg:text-7xl">
              Une clinique qui rassure par l&rsquo;information, puis convertit par la
              clarté du parcours.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#12323a]/74">
              Ici, le hero ne vend pas une ambiance. Il organise la confiance:
              spécialités visibles, réservation immédiate, méthode médicale et
              absence totale de friction dans la prise de contact.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ClinicButton href="/dentiste/rendez-vous">
                Prendre rendez-vous
              </ClinicButton>
              <ClinicButton href="/dentiste/premiere-visite" kind="secondary">
                Préparer ma première visite
              </ClinicButton>
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-2">
              {routes.map((route, index) => (
                <div
                  key={route}
                  className="rounded-[14px] border border-[#cfe5e3] bg-white px-4 py-4 text-sm text-[#12323a]/74 transition hover:border-[#9ccac6] hover:bg-[#f6fbfb]"
                >
                  <p className="text-xs font-semibold tracking-[0.24em] text-[#2a5660]/60 uppercase">
                    Parcours 0{index + 1}
                  </p>
                  <p className="mt-2 font-medium text-[#12323a]">{route}</p>
                </div>
              ))}
            </div>
          </div>

          <ClinicBookingPanel />
        </div>
      </section>

      <ClinicSection
        eyebrow="Signal clinique"
        title="Le site parle comme un cabinet précis, pas comme une landing beauté."
        description="L'information médicale est hiérarchisée, la réservation reste dominante et les preuves sont montrées avant les promesses."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            "6 pôles de soins lisibles dès l'accueil.",
            "48h pour un premier rendez-vous standard.",
            "4,9/5 sur la qualité des explications et du suivi.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[14px] border border-[#d0e7e5] bg-white px-5 py-5 text-sm text-[#12323a]/76 shadow-[0_16px_40px_rgba(18,50,58,0.05)]"
            >
              {item}
            </div>
          ))}
        </div>
      </ClinicSection>

      <ClinicSection
        eyebrow="Technologies"
        title="Une homepage construite comme une feuille de route clinique."
        description="La deuxième séquence ne duplique pas un bloc cartes générique: elle installe immédiatement la logique de diagnostic et d'accompagnement."
        className="bg-white"
      >
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4">
            {[
              {
                icon: Cpu,
                title: "Imagerie ciblée",
                text: "Le diagnostic est montré et commenté au patient avant toute décision.",
              },
              {
                icon: ShieldCheck,
                title: "Protocoles stricts",
                text: "La structure du site met aussi l'hygiène au premier plan dans le discours.",
              },
              {
                icon: Stethoscope,
                title: "Plan de traitement lisible",
                text: "Chaque proposition clinique est séquencée, chiffrée et expliquée.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <ClinicCard key={item.title} title={item.title}>
                  <div className="mb-4 flex size-11 items-center justify-center rounded-[12px] bg-[#12323a] text-white">
                    <Icon className="size-5" />
                  </div>
                  {item.text}
                </ClinicCard>
              );
            })}
          </div>

          <div className="rounded-[16px] border border-[#d0e7e5] bg-[#12323a] p-6 text-white">
            <p className="text-xs font-semibold tracking-[0.28em] text-[#8cd4ce] uppercase">
              Décision médicale
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold">
              Le patient voit où il en est, ce qu&rsquo;on propose, et pourquoi.
            </h2>
            <div className="mt-8 space-y-3">
              {[
                "Imagerie si utile, jamais décorative.",
                "Options de traitement rendues comparables.",
                "Calendrier et suivi expliqués avant validation.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[14px] border border-white/12 bg-white/8 px-4 py-4 text-sm text-white/76"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ClinicSection>

      <ClinicSection
        eyebrow="Parcours patient"
        title="Une timeline verticale remplace la grille standard de services."
        description="Le visiteur comprend comment se déroule une visite complète avant même d'ouvrir les pages secondaires."
      >
        <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="rounded-[16px] bg-[#12323a] p-6 text-white">
            <p className="text-sm leading-7 text-white/74">
              Le rythme de page est volontairement plus séquencé que sur les
              autres templates: triage, diagnostic, plan, suivi.
            </p>
          </div>
          <div className="space-y-4 border-l border-[#bddbd8] pl-6">
            {[
              "Préparer la visite: motif, documents, informations de santé.",
              "Consultation: bilan, radios ciblées si besoin, explications directes.",
              "Planifier la suite: devis, étapes, délais et contacts utiles.",
            ].map((item, index) => (
              <div key={item} className="relative rounded-[14px] bg-white p-5">
                <div className="absolute top-6 left-[-36px] flex size-5 items-center justify-center rounded-full border border-[#a9d0cc] bg-[#eef8f7] text-[10px] font-semibold text-[#12323a]">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-[#12323a]/74">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </ClinicSection>

      <ClinicSection
        eyebrow="Cabinet"
        title="Une dernière séquence plus humaine, mais toujours tenue par la logique clinique."
        description="Le site finit sur l'équipe, l'hygiène et l'accès, sans retomber dans un hero bis."
        className="bg-white"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <ClinicCard title="Équipe coordonnée">
            Le cabinet présente des rôles clairs, sans dilution du parcours
            entre plusieurs interlocuteurs.
          </ClinicCard>
          <ClinicCard title="Hygiène documentée">
            Les protocoles et équipements sont montrés comme une preuve de
            méthode, pas comme un argument marketing flou.
          </ClinicCard>
          <ClinicCard title="Première visite fluide">
            La page dédiée explique comment venir, quoi apporter et comment la
            consultation sera cadrée.
          </ClinicCard>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ClinicButton href="/dentiste/technologies">
            Voir les technologies
          </ClinicButton>
          <ClinicButton href="/dentiste/contact" kind="secondary">
            Venir au cabinet
          </ClinicButton>
        </div>
      </ClinicSection>
    </main>
  );
}
