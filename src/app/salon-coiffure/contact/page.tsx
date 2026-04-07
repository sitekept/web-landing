import { SalonSection } from "../salon-ui";

export default function SalonCoiffureContactPage() {
  return (
    <main className="bg-white">
      <SalonSection
        kicker="Contact"
        title="Une page courte qui finalise la venue au salon."
        description="Adresse, horaires, téléphone et quartier suffisent ici à fermer le parcours."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            "28 rue des Martyrs, Paris 9e",
            "Mardi au samedi, 10h00-20h00",
            "01 85 44 02 71",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[42px] border border-[#ead9d2] bg-[#fff8f4] p-6 text-sm leading-7 text-[#261a1f]/74"
            >
              {item}
            </div>
          ))}
        </div>
      </SalonSection>
    </main>
  );
}
