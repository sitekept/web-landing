import { MapPin, ParkingCircle, TrainFront } from "lucide-react";

import { ClinicSection } from "../clinic-ui";

export default function DentisteContactPage() {
  return (
    <main className="bg-white">
      <ClinicSection
        eyebrow="Contact"
        title="Adresse, accès et rythme du cabinet dans une page courte, presque logistique."
        description="Une page contact de cabinet doit répondre aux questions pratiques plus qu'ajouter du storytelling."
      >
        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4">
            {[
              "15 avenue du Parc, 92300 Levallois-Perret",
              "01 84 12 00 18",
              "contact@novasourire.fr",
              "Lun-Ven 8h30-19h00, Sam 9h00-13h00",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[16px] border border-[#d0e7e5] bg-[#f7fcfc] px-5 py-4 text-sm text-[#12323a]/72"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="grid gap-4">
            {[
              {
                icon: MapPin,
                title: "Accès immédiat",
                text: "Cabinet à 4 minutes de la gare Clichy-Levallois, accès PMR et façade lisible.",
              },
              {
                icon: TrainFront,
                title: "Transport",
                text: "Métro ligne 3, bus 274 et station Vélib' à proximité directe.",
              },
              {
                icon: ParkingCircle,
                title: "Stationnement",
                text: "Parking Indigo à quelques minutes et dépose minute devant la clinique.",
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
        </div>
      </ClinicSection>
    </main>
  );
}
