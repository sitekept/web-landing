import { BistrotLink, BistrotSection } from "../bistrot-ui";

export default function RestaurantBistrotReservationPage() {
  return (
    <main className="bg-[#221918] pt-28 text-white">
      <BistrotSection
        eyebrow="Réservation"
        title="La réservation reste une décision d'ambiance et de service."
        description="On réserve un déjeuner, un dîner ou une privatisation légère, pas un simple créneau."
      >
        <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
          <div className="grid gap-4">
            {[
              "Déjeuner · service continu de 12h à 14h30",
              "Dîner · 19h à 22h30, cuisine courte et cave vivante",
              "Groupes · petits formats et privatisation légère sur demande",
            ].map((item) => (
              <div
                key={item}
                className="border border-white/10 bg-white/6 p-6 text-sm leading-7 text-white/76"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="border border-white/10 bg-[#181211] p-6">
            <p className="text-3xl leading-tight font-semibold">
              Une table se réserve ici parce qu&rsquo;on a déjà envie d&rsquo;y être.
            </p>
            <div className="mt-8">
              <BistrotLink href="/restaurant-bistrot/privatisation" light>
                Voir la privatisation
              </BistrotLink>
            </div>
          </div>
        </div>
      </BistrotSection>
    </main>
  );
}
