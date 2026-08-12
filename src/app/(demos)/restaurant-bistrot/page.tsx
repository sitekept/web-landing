import { BistrotLink, BistrotSection } from "./bistrot-ui";

export default function RestaurantBistrotHomePage() {
  return (
    <main>
      <section className="relative min-h-[100svh] overflow-hidden bg-[#181211] pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-55"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,18,17,0.6),rgba(24,18,17,0.86))]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pt-18 pb-20 sm:px-6 lg:grid-cols-[1fr_0.78fr] lg:px-8">
          <div className="max-w-3xl self-end">
            <p className="text-xs font-semibold tracking-[0.34em] text-[#f5d3b2] uppercase">
              Hospitality immersive
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Une table qui se réserve pour son atmosphère avant même sa carte.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/74">
              Hero plein écran, ambiance d&rsquo;abord, réservation latérale et pages
              qui prolongent l&rsquo;attachement au lieu.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BistrotLink href="/restaurant-bistrot/reservation">
                Réserver une table
              </BistrotLink>
              <BistrotLink href="/restaurant-bistrot/menu" light>
                Découvrir la carte
              </BistrotLink>
            </div>
          </div>

          <div className="self-end border border-white/12 bg-[#231918]/82 p-6 backdrop-blur">
            <p className="text-xs font-semibold tracking-[0.32em] text-[#f5d3b2] uppercase">
              Ce soir au Sillon
            </p>
            <p className="mt-4 text-3xl leading-tight font-semibold text-white">
              Service du soir, assiettes à partager, cave vivante et quelques
              places au comptoir.
            </p>
            <div className="mt-8 grid gap-3">
              {[
                "Service midi et soir du mardi au samedi",
                "Tables de 2 à 8 et privatisation légère",
                "Cuisine courte, cave lisible, ambiance chaude",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-white/10 bg-white/6 px-4 py-4 text-sm text-white/76"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BistrotSection
        eyebrow="Le lieu"
        title="La homepage fonctionne comme un hall d'entrée, pas comme une fiche établissement."
        description="On installe d'abord la mémoire sensorielle du lieu, puis on laisse venir la carte, la réservation et l'histoire."
        className="bg-[#f5eadb] text-[#1d1515]"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Comptoir vivant",
            "Carte courte de saison",
            "Cave mobile mais lisible",
            "Privatisation de petits formats",
          ].map((item, index) => (
            <div
              key={item}
              className={`border p-6 text-lg font-semibold ${
                index % 2 === 0
                  ? "border-[#d8c6b2] bg-white"
                  : "border-[#2b211f] bg-[#2b211f] text-white"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </BistrotSection>
    </main>
  );
}
