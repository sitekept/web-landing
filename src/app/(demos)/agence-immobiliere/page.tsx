import Link from "next/link";

import { RealtyCard, RealtyLink, RealtySection } from "./realty-ui";

const featured = [
  {
    title: "Appartement vue lac",
    meta: "Annecy-le-Vieux · 82 m² · 2 chambres · terrasse",
    href: "/agence-immobiliere/biens/appartement-vue-lac",
  },
  {
    title: "Maison d'architecte",
    meta: "Veyrier · 215 m² · jardin · bureau",
    href: "/agence-immobiliere/biens",
  },
  {
    title: "Loft traversant",
    meta: "Lyon 6e · 126 m² · terrasse sud",
    href: "/agence-immobiliere/biens",
  },
];

export default function AgenceImmobiliereHomePage() {
  return (
    <main>
      <section className="bg-[radial-gradient(circle_at_top_right,#dbe5de,transparent_36%),linear-gradient(180deg,#f2f4ef_0%,#eff3ed_100%)] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[0.92fr_1.08fr]">
          <RealtyCard className="self-start">
            <p className="text-xs font-semibold tracking-[0.32em] text-[#507163] uppercase">
              Explorateur de biens
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
              Le hero commence par un moteur de recherche, pas par un slogan.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#16211d]/72">
              Type de bien, zone, budget, mode de vie: la homepage met
              immédiatement l&rsquo;utilisateur en posture d&rsquo;exploration.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Appartement", "Maison", "Annecy-le-Vieux", "700k - 1.2M"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-[16px] border border-[#d7ddd7] bg-[#f7faf6] px-4 py-4 text-sm font-medium text-[#16211d]/76"
                  >
                    {item}
                  </div>
                )
              )}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <RealtyLink href="/agence-immobiliere/biens">
                Explorer les biens
              </RealtyLink>
              <RealtyLink href="/agence-immobiliere/estimation" light>
                Estimer mon bien
              </RealtyLink>
            </div>
          </RealtyCard>

          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div
              className="min-h-[420px] rounded-[20px] border border-[#d7ddd7] bg-cover bg-center shadow-[0_28px_90px_rgba(22,33,29,0.08)]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,rgba(22,33,29,0.05),rgba(22,33,29,0.28)),url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80')",
              }}
            />

            <RealtyCard className="bg-[#16211d] text-white">
              <p className="text-xs font-semibold tracking-[0.32em] text-[#a9c3b5] uppercase">
                Bien mis en avant
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                Appartement vue lac
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/74">
                Terrasse filante, séjour traversant et rénovation sobre. La
                carte agit comme un raccourci direct vers la fiche bien.
              </p>
              <Link
                href="/agence-immobiliere/biens/appartement-vue-lac"
                className="mt-6 inline-flex text-sm font-semibold underline underline-offset-4"
              >
                Voir la fiche
              </Link>
            </RealtyCard>
          </div>
        </div>
      </section>

      <RealtySection
        className="bg-white"
        eyebrow="Sélection active"
        title="Le site enchaîne sur une grille de biens et non sur des bénéfices génériques."
        description="Cette section simule un flux de recherche recentré sur les annonces réellement consultables."
      >
        <div className="grid gap-4 xl:grid-cols-3">
          {featured.map((item) => (
            <RealtyCard
              key={item.title}
              className="transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(22,33,29,0.1)]"
            >
              <p className="text-2xl font-semibold">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-[#16211d]/70">
                {item.meta}
              </p>
              <Link
                href={item.href}
                className="mt-5 inline-flex text-sm font-semibold underline underline-offset-4"
              >
                Consulter le bien
              </Link>
            </RealtyCard>
          ))}
        </div>
      </RealtySection>

      <RealtySection
        className="bg-[#eef2ed]"
        eyebrow="Quartiers"
        title="Le parcours d'achat passe aussi par le territoire, pas seulement par les annonces."
        description="La homepage ouvre vers des quartiers pour ancrer la recherche dans un mode de vie."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Annecy-le-Vieux · résidentiel et lac",
            "Vieille ville · centralité et patrimoine",
            "Albigny · promenade et vues ouvertes",
            "Veyrier · maisons et jardins",
          ].map((item, index) => (
            <div
              key={item}
              className={`rounded-[18px] border p-6 text-sm leading-7 font-semibold transition ${
                index === 2
                  ? "border-[#16211d] bg-[#16211d] text-white"
                  : "border-[#d7ddd7] bg-white text-[#16211d]"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </RealtySection>

      <RealtySection
        className="bg-white"
        eyebrow="Accompagnement"
        title="La home sépare clairement l'entrée acquéreur et l'entrée vendeur."
        description="Cette distinction structure tout le modèle et évite le site vitrine immobilier trop flou."
      >
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
          <RealtyCard>
            <p className="text-xs font-semibold tracking-[0.28em] text-[#507163] uppercase">
              Acheter
            </p>
            <p className="mt-4 text-2xl font-semibold">
              Recherche, visites ciblées, négociation et projection de quartier.
            </p>
          </RealtyCard>
          <RealtyCard className="bg-[#16211d] text-white">
            <p className="text-xs font-semibold tracking-[0.28em] text-[#a9c3b5] uppercase">
              Vendre
            </p>
            <p className="mt-4 text-2xl font-semibold">
              Estimation, stratégie de mise en marché et sélection acquéreur.
            </p>
          </RealtyCard>
        </div>
      </RealtySection>
    </main>
  );
}
