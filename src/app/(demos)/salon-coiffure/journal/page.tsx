import { SalonCard, SalonSection } from "../salon-ui";

export default function SalonCoiffureJournalPage() {
  return (
    <main className="bg-[#f8eee7]">
      <SalonSection
        kicker="Journal"
        title="Une page éditoriale pour donner du goût au site et sortir du simple tunnel de réservation."
        description="Le journal renforce la marque, inspire les clientes et rend le salon plus mémorable."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            "Le blond d'hiver sans effet plat",
            "Comment choisir une coupe qui bouge vraiment",
            "Trois routines brillance qui tiennent entre deux rendez-vous",
          ].map((item) => (
            <SalonCard key={item} title={item}>
              Des sujets courts, inspirants et utiles qui prolongent le ton du
              salon au-delà du booking.
            </SalonCard>
          ))}
        </div>
      </SalonSection>
    </main>
  );
}
