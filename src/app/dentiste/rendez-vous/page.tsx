import { CalendarClock, CircleCheckBig, ClipboardList } from "lucide-react";

import { ClinicButton, ClinicSection } from "../clinic-ui";

export default function DentisteRendezVousPage() {
  return (
    <main>
      <ClinicSection
        eyebrow="Rendez-vous"
        title="La page de réservation agit comme un pré-tri clinique, pas comme un simple bouton final."
        description="Elle distingue les motifs, la temporalité et le niveau de préparation attendu avant venue au cabinet."
      >
        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[16px] bg-[#12323a] p-6 text-white">
            <p className="text-xs font-semibold tracking-[0.28em] text-[#8ad7cf] uppercase">
              Trois motifs principaux
            </p>
            <div className="mt-5 space-y-3">
              {[
                "Première consultation et bilan global",
                "Douleur légère ou besoin de contrôle rapide",
                "Projet esthétique ou réhabilitation plus long",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-[14px] border border-white/10 bg-white/8 px-4 py-4"
                >
                  <p className="text-xs font-semibold tracking-[0.22em] text-white/50 uppercase">
                    Motif 0{index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/76">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {[
              {
                icon: ClipboardList,
                title: "Premier échange",
                text: "Motif, antécédents utiles, documents éventuels et niveau d'urgence.",
              },
              {
                icon: CalendarClock,
                title: "Choix du créneau",
                text: "Le site met en avant les temporalités réalistes selon le type de besoin.",
              },
              {
                icon: CircleCheckBig,
                title: "Confirmation claire",
                text: "Adresse, accès, préparation et durée estimée sont envoyés sans ambiguïté.",
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
                  <p className="mt-3 text-sm leading-6 text-[#12323a]/72">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="tel:+33184120018"
            className="inline-flex items-center justify-center rounded-[14px] border border-[#12323a] bg-[#12323a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0e262d]"
          >
            Appeler le secrétariat
          </a>
          <ClinicButton href="/dentiste/premiere-visite" kind="secondary">
            Préparer ma visite
          </ClinicButton>
        </div>
      </ClinicSection>
    </main>
  );
}
