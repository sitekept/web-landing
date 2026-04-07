const images = [
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1200&q=80",
];

export default function RestaurantBistrotGaleriePage() {
  return (
    <main className="bg-[#f5eadb] px-4 py-28 text-[#1d1515] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.34em] text-[#7d5f4c] uppercase">
            Galerie
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Salle, lumière, assiette: la galerie raconte le lieu entier.
          </h1>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {images.map((image, index) => (
            <div
              key={image}
              className={`bg-cover bg-center transition duration-500 hover:scale-[1.01] ${
                index % 2 === 0 ? "min-h-[320px]" : "min-h-[420px]"
              }`}
              style={{ backgroundImage: `url('${image}')` }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
