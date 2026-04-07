import { BistrotSection } from "../bistrot-ui";

export default function RestaurantBistrotContactPage() {
  return (
    <main className="bg-[#221918] pt-28 text-white">
      <BistrotSection
        eyebrow="Contact"
        title="Une page brève pour venir, appeler ou écrire."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            "17 rue Keller, Paris 11e",
            "Mar-Sam, 12h-14h30 et 19h-22h30",
            "reservation@lesillon.fr",
          ].map((item) => (
            <div
              key={item}
              className="border border-white/10 bg-white/6 p-6 text-sm leading-7 text-white/76"
            >
              {item}
            </div>
          ))}
        </div>
      </BistrotSection>
    </main>
  );
}
