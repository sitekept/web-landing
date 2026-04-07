import { Sparkles, Star } from "lucide-react";

import { SalonCard, SalonPillLink, SalonSection } from "./salon-ui";

const collageImages = [
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
];

export default function SalonCoiffureHomePage() {
  return (
    <main>
      <section className="overflow-hidden bg-[radial-gradient(circle_at_top_left,#f2d2c8,transparent_35%),linear-gradient(180deg,#f8eee7_0%,#fff7f2_100%)] pt-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 pt-8 pb-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-24">
          <div className="max-w-3xl self-center">
            <p className="inline-flex items-center gap-2 rounded-[999px] bg-white px-4 py-2 text-xs font-semibold tracking-[0.32em] text-[#8a5d65] uppercase shadow-[0_12px_30px_rgba(61,28,38,0.08)]">
              <Sparkles className="size-4" />
              Marque lifestyle / booking visuel
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Un salon qui se réserve comme une adresse, pas comme un agenda
              gris.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#261a1f]/72">
              Hero collage, nav flottante, carte de réservation suspendue et
              pages éditoriales. Ici, le site vend une vibe autant qu&rsquo;un
              service.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <SalonPillLink href="/salon-coiffure/reservation">
                Réserver un créneau
              </SalonPillLink>
              <SalonPillLink href="/salon-coiffure/lookbook" light>
                Voir le lookbook
              </SalonPillLink>
            </div>
          </div>

          <div className="relative grid gap-4 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="grid gap-4 pt-10">
              <div
                className="min-h-[220px] rounded-[48px] bg-cover bg-center"
                style={{ backgroundImage: `url('${collageImages[0]}')` }}
              />
              <div className="rounded-[46px] bg-[#261a1f] p-6 text-white">
                <p className="text-xs font-semibold tracking-[0.3em] text-[#f2c6cf] uppercase">
                  Signature
                </p>
                <p className="mt-4 text-2xl leading-tight font-semibold">
                  Lumière douce, coupes mobiles, couleur lisible et expérience
                  très habitée.
                </p>
              </div>
            </div>

            <div className="relative">
              <div
                className="min-h-[520px] rounded-[56px] bg-cover bg-center shadow-[0_28px_90px_rgba(61,28,38,0.18)]"
                style={{ backgroundImage: `url('${collageImages[1]}')` }}
              />
              <div className="absolute right-6 -bottom-6 left-6 rounded-[40px] border border-white/60 bg-white/90 p-5 shadow-[0_24px_80px_rgba(61,28,38,0.14)] backdrop-blur transition duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-2 text-[#8a5d65]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-7 text-[#261a1f]/72">
                  Réservation couleur, coupe ou gloss avec choix du bon créneau
                  avant même de voir l&rsquo;équipe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SalonSection
        kicker="Narration"
        title="Le site est rythmé comme un magazine court, pas comme une brochure service."
        description="La homepage ne déroule pas un bloc services standard: elle alterne desirability, preuve sociale et entrée vers les pages lookbook ou stylists."
        className="bg-white"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <SalonCard title="Couleurs lumineuses">
            Balayages et gloss mis en scène à travers des intentions visuelles,
            pas une simple grille de tarifs.
          </SalonCard>
          <SalonCard title="Stylists identifiées">
            Le site renvoie vers des profils, des gestes et des résultats
            attendus, pour qualifier la réservation.
          </SalonCard>
          <SalonCard title="Journal de salon">
            Une page éditoriale sert de preuve de goût et casse l&rsquo;effet booking
            trop utilitaire.
          </SalonCard>
        </div>
      </SalonSection>

      <SalonSection
        kicker="Lookbook"
        title="Des capsules de style remplacent la liste traditionnelle de prestations."
        className="bg-[#f7e7de]"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Brushing souple et léger",
            "Blond beige naturel",
            "Bob texturé très net",
            "Soin gloss miroir",
          ].map((item, index) => (
            <div
              key={item}
              className={`rounded-[44px] p-6 transition duration-500 hover:-translate-y-2 ${
                index % 2 === 0 ? "bg-white" : "bg-[#261a1f] text-white"
              }`}
            >
              <p className="text-xl font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </SalonSection>
    </main>
  );
}
