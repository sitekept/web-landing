import { SalonCard, SalonSection } from "../salon-ui";

export default function SalonCoiffureStylistsPage() {
  return (
    <main className="bg-white">
      <SalonSection
        kicker="Stylists"
        title="Chaque coiffeur est présenté comme une signature de style."
        description="La page aide le client à choisir une personne, pas seulement une case dans un planning."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            "Lina · coupe et mouvement",
            "Maëlys · blond, glow et finitions lumière",
            "Noah · texture, styling et événements",
          ].map((item) => (
            <SalonCard key={item} title={item}>
              Chaque profil est relié à un rendu attendu et à un type de
              réservation, ce qui renforce le booking.
            </SalonCard>
          ))}
        </div>
      </SalonSection>
    </main>
  );
}
