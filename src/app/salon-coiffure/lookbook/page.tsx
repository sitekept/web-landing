const images = [
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
];

export default function SalonCoiffureLookbookPage() {
  return (
    <main className="bg-[#f8eee7] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.34em] text-[#8a5d65]/62 uppercase">
            Lookbook
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#261a1f] sm:text-5xl">
            Une galerie souple et généreuse, plus proche d&rsquo;un moodboard que d&rsquo;un
            portfolio rigide.
          </h1>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {images.map((image, index) => (
            <div
              key={image}
              className={`bg-cover bg-center transition duration-500 hover:-translate-y-2 ${
                index % 2 === 0
                  ? "min-h-[320px] rounded-[56px]"
                  : "min-h-[420px] rounded-[42px]"
              }`}
              style={{ backgroundImage: `url('${image}')` }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
