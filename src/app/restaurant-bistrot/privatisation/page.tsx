import { BistrotLink, BistrotSection } from "../bistrot-ui";

export default function RestaurantBistrotPrivatisationPage() {
  return (
    <main className="bg-[#221918] pt-28 text-white">
      <BistrotSection
        eyebrow="Privatisation"
        title="Une page dédiée aux formats de groupe et à la privatisation légère."
        description="Le lieu n'a pas besoin d'un énorme dispositif événementiel pour vendre des formats choisis et désirables."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            "Dîner équipe 12 à 20 personnes",
            "Lancement discret ou repas presse",
            "Anniversaire intime avec menu court",
          ].map((item) => (
            <div
              key={item}
              className="border border-white/10 bg-white/6 p-6 text-sm leading-7 text-white/76"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <BistrotLink href="/restaurant-bistrot/contact" light>
            Contacter le restaurant
          </BistrotLink>
        </div>
      </BistrotSection>
    </main>
  );
}
