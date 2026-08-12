import {
  EditorialLink,
  EditorialPanel,
  EditorialSection,
} from "./editorial-ui";

const chapters = [
  {
    title: "Appartement atelier, Le Marais",
    note: "Décloisonner sans effacer la mémoire du lieu.",
    href: "/architecte-interieur/projets/atelier-marais",
  },
  {
    title: "Maison patio, Rueil",
    note: "Réarticuler la vie familiale autour de la lumière.",
    href: "/architecte-interieur/projets",
  },
  {
    title: "Suite d'hôtel confidentielle",
    note: "Produire de la retenue, pas de l'effet décoratif.",
    href: "/architecte-interieur/journal",
  },
];

export default function ArchitecteInterieurHomePage() {
  return (
    <main>
      <section className="overflow-hidden border-b border-[#d6ccbf] bg-[#f3efe7] px-6 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 xl:grid-cols-[1fr_0.95fr]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.34em] text-[#77695d] uppercase">
              Portfolio chapitre / case-study
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl xl:text-7xl">
              Ici, la page d&rsquo;accueil lit comme un manifeste de studio, pas comme
              une vente en deux boutons.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#1d1816]/72">
              La structure privilégie le texte long, les images décalées, le
              rythme éditorial et des points d&rsquo;entrée vers les projets plutôt
              qu&rsquo;une mécanique classique de landing.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <EditorialLink href="/architecte-interieur/projets">
                Lire les projets
              </EditorialLink>
              <EditorialLink href="/architecte-interieur/contact">
                Ouvrir un brief
              </EditorialLink>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-[0.75fr_1.25fr]">
            <div className="grid gap-5 pt-10">
              <div
                className="min-h-[240px] border border-[#d6ccbf] bg-cover bg-center transition duration-700 hover:-translate-y-2"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80')",
                }}
              />
              <EditorialPanel className="bg-[#ece4d8]">
                <p className="text-xs font-semibold tracking-[0.28em] text-[#77695d] uppercase">
                  Position
                </p>
                <p className="mt-4 text-2xl leading-tight font-semibold">
                  Moins de séduction instantanée, plus de densité, de matière et
                  de justesse d&rsquo;usage.
                </p>
              </EditorialPanel>
            </div>

            <div
              className="min-h-[560px] border border-[#d6ccbf] bg-cover bg-center transition duration-700 hover:translate-y-2"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80')",
              }}
            />
          </div>
        </div>
      </section>

      <EditorialSection
        eyebrow="Chapitres"
        title="La homepage ouvre d'abord trois axes de lecture, comme un sommaire."
        description="Chaque entrée fonctionne comme un début de récit. On ne scrolle pas une suite de “services”, on choisit une intention."
        className="bg-white"
      >
        <div className="space-y-4">
          {chapters.map((chapter, index) => (
            <a
              key={chapter.title}
              href={chapter.href}
              className="group grid gap-4 border border-[#d6ccbf] p-6 transition hover:bg-[#f6f0e8] lg:grid-cols-[120px_1fr_auto]"
            >
              <p className="text-xs font-semibold tracking-[0.3em] text-[#77695d] uppercase">
                Chapitre 0{index + 1}
              </p>
              <div>
                <h2 className="text-3xl font-semibold">{chapter.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#1d1816]/68">
                  {chapter.note}
                </p>
              </div>
              <div className="self-start text-sm font-semibold text-[#1d1816]/48 transition group-hover:text-[#1d1816]">
                Lire
              </div>
            </a>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection
        eyebrow="Récits de projet"
        title="Les études de cas apparaissent comme des pages de chapitre, pas comme des cartes produit."
        className="bg-[#ece4d8]"
      >
        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <EditorialPanel className="bg-[#1d1816] text-white">
            <p className="text-xs font-semibold tracking-[0.3em] text-white/46 uppercase">
              Cas phare
            </p>
            <p className="mt-4 text-3xl leading-tight font-semibold">
              Atelier Marais: ouverture des lignes de vue, cuisine minérale,
              lumière traversante et présence maîtrisée du mobilier.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/72">
              Cette zone remplace volontairement les témoignages ou statistiques
              classiques. La preuve, ici, passe par la qualité du récit.
            </p>
          </EditorialPanel>

          <div className="grid gap-4">
            {[
              "Les textes parlent de circulation, densité visuelle et matières, pas de slogans lifestyle.",
              "Le studio se vend à travers ses arbitrages, pas à travers un grand nombre de visuels identiques.",
              "Le journal sert d'extension éditoriale pour maintenir l'impression d'un studio qui pense vraiment ses lieux.",
            ].map((item) => (
              <EditorialPanel key={item}>
                <p className="text-sm leading-7 text-[#1d1816]/70">{item}</p>
              </EditorialPanel>
            ))}
          </div>
        </div>
      </EditorialSection>

      <EditorialSection
        eyebrow="Journal"
        title="Une dernière séquence éditoriale prolonge la voix du studio au lieu d'empiler un footer call-to-action."
        className="bg-white"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Comment une cuisine peut structurer un appartement sans devenir un showroom.",
            "Rendre une chambre d'hôtel plus calme en retirant, pas en ajoutant.",
            "Pourquoi les transitions entre pièces comptent autant que les pièces elles-mêmes.",
          ].map((item, index) => (
            <EditorialPanel
              key={item}
              className={index === 1 ? "bg-[#ece4d8]" : ""}
            >
              <p className="text-sm leading-7 text-[#1d1816]/72">{item}</p>
            </EditorialPanel>
          ))}
        </div>
      </EditorialSection>
    </main>
  );
}
