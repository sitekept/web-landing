import { SalonCard, SalonSection } from "../salon-ui";

export default function SalonCoiffurePrestationsPage() {
  return (
    <main>
      <SalonSection
        kicker="Prestations"
        title="Les prestations sont racontées par résultat désiré et durée de rendez-vous."
        description="Le salon garde une écriture lifestyle tout en qualifiant le bon créneau."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Coupe & mouvement",
              text: "45 à 60 min, consultation rapide, coupe nette et finition souple.",
            },
            {
              title: "Balayage lumière",
              text: "2h30 à 3h30, diagnostic couleur, contouring et gloss d'équilibre.",
            },
            {
              title: "Soin signature",
              text: "30 à 45 min, cuir chevelu, matière et finition très brillante.",
            },
          ].map((item) => (
            <SalonCard key={item.title} title={item.title}>
              {item.text}
            </SalonCard>
          ))}
        </div>
      </SalonSection>
    </main>
  );
}
