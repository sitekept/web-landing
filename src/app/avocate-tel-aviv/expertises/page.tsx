import { AvocatePanel, AvocateSection, DetailList } from "../avocate-ui";

const expertises = [
  {
    title: "Immobilier",
    intro:
      "Accompagner les opérations et difficultés immobilières avec une attention particulière aux documents, aux engagements et aux interlocuteurs.",
    items: [
      "Acquisition ou vente d’un bien en Israël avec parties francophones.",
      "Vérification des documents transmis avant engagement.",
      "Lecture contractuelle, négociation et sécurisation des étapes.",
      "Litige, retard, inexécution ou blocage dans une opération.",
    ],
  },
  {
    title: "Successions France-Israël",
    intro:
      "Cadrer les dossiers successoraux où les héritiers, les biens, les documents ou les administrations se trouvent entre deux pays.",
    items: [
      "Identification des héritiers, biens et documents disponibles.",
      "Coordination avec notaires, conseils et interlocuteurs familiaux.",
      "Organisation des pièces françaises et israéliennes utiles au dossier.",
      "Lecture des délais, demandes complémentaires et points de blocage.",
    ],
  },
];

export default function AvocateExpertisesPage() {
  return (
    <main className="bg-[#fffaf4]">
      <AvocateSection
        eyebrow="Expertises"
        title="Immobilier et successions, avec une lecture France-Israël."
        description="La page détaille les deux champs d’intervention présentés sur l’accueil, sans élargir artificiellement le périmètre."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {expertises.map((expertise) => (
            <AvocatePanel key={expertise.title}>
              <p className="text-xs font-semibold text-[#8a654e] uppercase">
                Domaine
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-[#2b1d17]">
                {expertise.title}
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#3a2820]/72">
                {expertise.intro}
              </p>
              <div className="mt-7">
                <DetailList items={expertise.items} />
              </div>
            </AvocatePanel>
          ))}
        </div>
      </AvocateSection>

      <AvocateSection
        className="border-t border-[#d8c9ba] bg-[#efe1d1]"
        eyebrow="Dossier"
        title="Ce qu’un premier message doit permettre de comprendre."
        description="La prise de contact doit situer le sujet, les pays concernés, les documents disponibles et l’objectif immédiat."
      >
        <div className="grid gap-4 lg:grid-cols-4">
          {[
            "Nature du dossier",
            "Pays concernés",
            "Documents reçus",
            "Délai ou urgence",
          ].map((item) => (
            <AvocatePanel key={item} className="bg-white">
              <p className="font-serif text-xl font-semibold text-[#2b1d17]">
                {item}
              </p>
            </AvocatePanel>
          ))}
        </div>
      </AvocateSection>
    </main>
  );
}
