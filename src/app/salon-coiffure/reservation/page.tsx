import { SalonPillLink, SalonSection } from "../salon-ui";

export default function SalonCoiffureReservationPage() {
  return (
    <main className="bg-white">
      <SalonSection
        kicker="Réservation"
        title="La réservation est présentée comme une expérience choisie, pas comme un tableau horaire brut."
        description="Chaque entrée décrit le type de rendez-vous, le temps et l'intention beauté."
      >
        <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-4">
            {[
              "Coupe signature · 45 min",
              "Balayage lumière · 3h",
              "Gloss + soin profond · 1h15",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[40px] border border-[#ead9d2] bg-[#fff8f4] p-6 text-sm leading-7 text-[#261a1f]/74"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="rounded-[44px] bg-[#261a1f] p-6 text-white">
            <p className="text-xs font-semibold tracking-[0.32em] text-[#f2c6cf] uppercase">
              Booking
            </p>
            <p className="mt-4 text-3xl leading-tight font-semibold">
              Le bon styliste, le bon créneau, la bonne promesse de résultat.
            </p>
            <div className="mt-8">
              <SalonPillLink href="/salon-coiffure/stylists" light>
                Choisir un styliste
              </SalonPillLink>
            </div>
          </div>
        </div>
      </SalonSection>
    </main>
  );
}
