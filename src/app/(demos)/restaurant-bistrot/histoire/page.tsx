import { BistrotSection } from "../bistrot-ui";

export default function RestaurantBistrotHistoirePage() {
  return (
    <main className="bg-[#f5eadb] pt-28 text-[#1d1515]">
      <BistrotSection
        eyebrow="Histoire"
        title="Une page éditoriale pour raconter la salle, la cave et la manière de recevoir."
      >
        <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="border border-[#d8c6b2] bg-white p-6 text-sm leading-7">
            Le Sillon est pensé comme un bistrot contemporain: service vivant,
            lumière chaude, assiettes courtes et cave active.
          </div>
          <div className="border border-[#2b211f] bg-[#2b211f] p-6 text-sm leading-7 text-white/74">
            La page histoire ajoute de l&rsquo;attachement et de la mémoire au site.
            Elle évite l&rsquo;effet “établissement standard” et soutient la
            réservation.
          </div>
        </div>
      </BistrotSection>
    </main>
  );
}
