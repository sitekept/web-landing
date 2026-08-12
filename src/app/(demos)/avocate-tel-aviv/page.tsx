import Link from "next/link";

import {
  AvocateLink,
  AvocatePanel,
  AvocateSection,
  DetailList,
} from "./avocate-ui";
import { ContactForm } from "./contact-form";

const expertiseCards = [
  {
    title: "Immobilier",
    text: "Sécurisation des acquisitions, ventes, documents contractuels, vérifications préalables et situations litigieuses.",
    items: [
      "Acquisition et vente",
      "Contrats et documents",
      "Litiges immobiliers",
    ],
  },
  {
    title: "Successions France-Israël",
    text: "Lecture transfrontalière des dossiers familiaux, biens, héritiers, documents français et démarches en Israël.",
    items: [
      "Biens situés en France ou en Israël",
      "Coordination notariale",
      "Documents et héritiers",
    ],
  },
];

const methodSteps = [
  "Qualification du dossier, des juridictions concernées et des documents disponibles.",
  "Lecture des risques, des interlocuteurs et des délais utiles avant toute démarche.",
  "Plan d’action clair: sécuriser, négocier, transmettre, contester ou coordonner.",
];

const blogPreview = [
  "Acheter un bien en Israël quand une partie du dossier est française",
  "Succession France-Israël: les premiers documents à réunir",
  "Pourquoi cadrer le dossier avant de contacter plusieurs interlocuteurs",
];

export default function AvocateTelAvivPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-[#d8c9ba] bg-[#2b1d17] px-4 py-20 text-white sm:px-6 lg:min-h-[620px] lg:px-8 lg:py-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-42"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(43,29,23,0.92)_0%,rgba(43,29,23,0.76)_42%,rgba(43,29,23,0.38)_100%)]" />

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#e7d7c6] uppercase">
              Avocate à Tel Aviv
            </p>
            <h1 className="mt-5 font-serif text-5xl font-semibold text-white sm:text-6xl lg:text-7xl">
              Cabinet d&apos;avocat Rebecca Zarroug
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              Accompagnement juridique en immobilier et successions
              France-Israël, avec une lecture claire des documents, des risques
              et des interlocuteurs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AvocateLink href="/avocate-tel-aviv/contact" inverted>
                Prendre contact
              </AvocateLink>
              <Link
                href="/avocate-tel-aviv/expertises"
                className="inline-flex min-h-11 items-center justify-center rounded-[6px] border border-white/34 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2b1d17] focus-visible:outline-none"
              >
                Voir les expertises
              </Link>
            </div>
          </div>

          <div className="border-l border-white/24 pl-6 text-sm leading-7 text-white/78 lg:max-w-md">
            <p className="font-semibold text-white">
              Dossiers traités avec sobriété, précision et coordination.
            </p>
            <p className="mt-4">
              L’alpha présente un parcours simple: comprendre le champ
              d’intervention, lire quelques contenus de blog, puis envoyer une
              demande structurée depuis le module de contact.
            </p>
          </div>
        </div>
      </section>

      <AvocateSection
        className="bg-[#f7efe5]"
        eyebrow="Expertises"
        title="Deux champs assumés pour des dossiers souvent sensibles."
        description="Le site évite la dispersion et met en avant les situations où la coordination entre droit, documents et interlocuteurs devient déterminante."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {expertiseCards.map((card) => (
            <AvocatePanel key={card.title}>
              <h3 className="font-serif text-2xl font-semibold text-[#2b1d17]">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#3a2820]/72">
                {card.text}
              </p>
              <div className="mt-6">
                <DetailList items={card.items} />
              </div>
            </AvocatePanel>
          ))}
        </div>
      </AvocateSection>

      <AvocateSection
        className="border-y border-[#d8c9ba] bg-white"
        eyebrow="Méthode"
        title="Une première lecture structurée avant d’engager une démarche."
        description="Chaque échange doit permettre de situer le dossier, d’identifier les pièces utiles et de prioriser les prochaines actions."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {methodSteps.map((step, index) => (
            <AvocatePanel key={step} className="bg-[#fffaf4]">
              <p className="text-sm font-semibold text-[#8a654e]">
                Étape {index + 1}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#3a2820]/74">{step}</p>
            </AvocatePanel>
          ))}
        </div>
      </AvocateSection>

      <AvocateSection
        className="bg-[#efe1d1]"
        eyebrow="France-Israël"
        title="Un positionnement pensé pour les dossiers transfrontaliers."
        description="Immobilier, héritiers, actes, coordonnées notariales, traductions et temporalités administratives doivent être mis dans le bon ordre."
      >
        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="overflow-hidden rounded-[8px] border border-[#cbb8a5] bg-[#2b1d17]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80"
              alt="Documents juridiques et livres de droit sur un bureau"
              className="aspect-[4/3] h-full w-full object-cover opacity-82"
              loading="lazy"
            />
          </div>
          <AvocatePanel>
            <h3 className="font-serif text-2xl font-semibold text-[#2b1d17]">
              Clarifier les responsabilités et les pièces dès le départ.
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#3a2820]/72">
              L’objectif de l’alpha est de rendre lisible la spécialité du
              cabinet sans multiplier les promesses: un visiteur doit comprendre
              rapidement si son sujet relève de l’immobilier, d’une succession
              ou d’une coordination France-Israël.
            </p>
            <div className="mt-6">
              <DetailList
                items={[
                  "Dossier situé à Tel Aviv, en Israël ou lié à un actif français.",
                  "Documents déjà disponibles à vérifier et organiser.",
                  "Prochaine action à définir avant tout échange prolongé.",
                ]}
              />
            </div>
          </AvocatePanel>
        </div>
      </AvocateSection>

      <AvocateSection
        className="bg-[#fffaf4]"
        eyebrow="Blog"
        title="Une page blog prévue pour installer l’expertise."
        description="Pour l’alpha, les contenus restent en placeholder lorem ipsum, avec trois entrées visibles et une structure prête à enrichir."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {blogPreview.map((item) => (
            <Link
              key={item}
              href="/avocate-tel-aviv/blog"
              className="rounded-[8px] border border-[#d8c9ba] bg-white p-6 transition hover:border-[#8a654e] focus-visible:ring-2 focus-visible:ring-[#8a654e] focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <p className="text-xs font-semibold text-[#8a654e] uppercase">
                Note de blog
              </p>
              <h3 className="mt-4 font-serif text-xl font-semibold text-[#2b1d17]">
                {item}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#3a2820]/68">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                vitae sem sed lorem tempor posuere.
              </p>
            </Link>
          ))}
        </div>
      </AvocateSection>

      <AvocateSection
        className="border-t border-[#d8c9ba] bg-white"
        eyebrow="Contact"
        title="Un module de contact prêt pour l’intégration API."
        description="Le formulaire fonctionne en front-only dans cette alpha: il bloque l’envoi réseau et confirme localement la demande."
      >
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <AvocatePanel className="bg-[#fffaf4]">
            <h3 className="font-serif text-2xl font-semibold text-[#2b1d17]">
              Informations utiles
            </h3>
            <DetailList
              items={[
                "Sujet immobilier ou successoral.",
                "Lien avec la France, Israël ou les deux pays.",
                "Documents déjà reçus, signés ou demandés.",
                "Délais connus ou urgence particulière.",
              ]}
            />
          </AvocatePanel>
          <ContactForm compact />
        </div>
      </AvocateSection>
    </main>
  );
}
