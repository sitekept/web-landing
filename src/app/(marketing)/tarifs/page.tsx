import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildPageMetadata } from "@/lib/page-metadata";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/structured-data";

export const metadata = buildPageMetadata({
  title: "Prix d'un site internet en 2026 | Sitekept",
  description:
    "Combien coûte un site internet ? Notre offre à partir de 500€ sans abonnement, ce qui est inclus, et les modalités de paiement. Tarifs détaillés.",
  path: "/tarifs",
});

/**
 * Toutes les données de cette page proviennent des conditions réelles du site
 * (messages/fr.json → services.pricing et terms.sections.pricing). Aucun prix
 * de concurrent n'est avancé : la comparaison porte sur ce qui est
 * structurellement différent d'un modèle à l'autre, pas sur des montants qui
 * ne seraient pas vérifiables.
 */

const INCLUDED = [
  "Conception et développement du site",
  "Mise en ligne en 48h après réception de l'acompte et des contenus",
  "Nom de domaine offert la première année",
  "Déploiement et hébergement mis en place",
  "Structure optimisée pour le référencement dès la livraison",
  "Dépôt de code transféré à votre nom",
];

const NOT_INCLUDED = [
  "Rédaction complète des contenus éditoriaux",
  "Photographies et séances photo",
  "Fonctionnalités sur mesure (boutique, réservation, espace client)",
];

const FAQ = [
  {
    question: "Combien coûte un site internet chez Sitekept ?",
    answer:
      "Le site vitrine essentiel est à 500€ en tarif de lancement, au lieu de 600€. Ce prix est public et ne comporte aucun abonnement obligatoire. Les projets nécessitant des fonctionnalités spécifiques font l'objet d'un devis personnalisé, établi selon la complexité technique.",
  },
  {
    question: "Y a-t-il un abonnement à payer chaque mois ?",
    answer:
      "Non. Le prix couvre la réalisation et la mise en ligne du site. Il n'y a pas d'abonnement imposé pour que le site continue d'exister. Le nom de domaine est offert la première année ; son renouvellement les années suivantes reste à votre charge, directement auprès du registrar, à son tarif public.",
  },
  {
    question: "Quelles sont les modalités de paiement ?",
    answer:
      "Un acompte de 30 % est demandé pour démarrer le projet, le solde est dû à la livraison du site. Les tarifs sont indiqués en euros toutes taxes comprises. Le paiement s'effectue par virement bancaire ou par carte bancaire.",
  },
  {
    question: "Le site m'appartient-il vraiment ?",
    answer:
      "Oui. Le code est développé puis déposé sur un dépôt à votre nom, et les accès vous sont remis. Vous pouvez faire évoluer le site, changer de prestataire ou l'héberger ailleurs sans avoir à repartir de zéro.",
  },
  {
    question: "Le délai de 48h est-il réaliste ?",
    answer:
      "Il s'applique aux projets simples et court à partir de la réception de l'acompte et de vos contenus. C'est le délai de mise en ligne, pas le délai depuis le premier contact : plus vos textes et images sont prêts, plus il est tenu facilement.",
  },
  {
    question: "Que se passe-t-il si mon besoin est plus complexe ?",
    answer:
      "Les besoins spécifiques — boutique en ligne, système de réservation, espace client, intégrations métier — sortent du cadre du site vitrine essentiel et font l'objet d'un devis sur mesure, chiffré selon la complexité technique réelle.",
  },
];

const MODELS = [
  {
    model: "Sitekept",
    payment: "Paiement unique",
    ownership: "Code et domaine à votre nom",
    leaving: "Vous partez avec le site",
  },
  {
    model: "Créateur de site en ligne",
    payment: "Abonnement mensuel permanent",
    ownership: "Site hébergé sur la plateforme",
    leaving: "Le site cesse d'être en ligne à l'arrêt de l'abonnement",
  },
  {
    model: "Prestataire sans transfert de code",
    payment: "Variable",
    ownership: "Le code reste chez le prestataire",
    leaving: "Reconstruction nécessaire pour changer",
  },
];

export default function TarifsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Tarifs", path: "/tarifs" },
        ]}
      />
      <FaqJsonLd items={FAQ} />

      <section className="bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] px-6 pb-16 pt-28 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
            Tarifs
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Combien coûte un site internet professionnel&nbsp;?
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Un site vitrine complet à partir de 500&nbsp;€, sans abonnement
            imposé, livré en 48h et transféré à votre nom. Cette page détaille
            ce que le prix couvre, ce qu&apos;il ne couvre pas, et comment se
            déroule le paiement.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Nos deux formules
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border-2 border-blue-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
                Tarif de lancement
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">
                Site vitrine essentiel
              </h3>
              <p className="mt-2 text-slate-600">
                Pour démarrer une présence professionnelle sérieuse, sans coût
                récurrent.
              </p>
              <p className="mt-6 flex items-baseline gap-3">
                <span className="text-4xl font-bold text-slate-950">500 €</span>
                <span className="text-lg text-slate-400 line-through">
                  600 €
                </span>
              </p>
              <p className="mt-1 text-sm text-slate-500">
                TTC, paiement unique. Domaine offert 1 an.
              </p>
              <Button asChild className="mt-8 w-full bg-blue-600 hover:bg-blue-700">
                <Link href="/#contact">
                  Demander un devis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Sur devis
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">
                Fonctionnalités avancées
              </h3>
              <p className="mt-2 text-slate-600">
                Boutique, réservation, espace client, intégrations métier.
              </p>
              <p className="mt-6 text-4xl font-bold text-slate-950">
                Sur mesure
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Tarif établi selon la complexité technique réelle.
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-8 w-full border-slate-300"
              >
                <Link href="/#contact">
                  Décrire mon projet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Ce que le prix comprend
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Inclus</h3>
              <ul className="mt-4 space-y-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-blue-600"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Non inclus
              </h3>
              <ul className="mt-4 space-y-3">
                {NOT_INCLUDED.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-600">
                    <Minus
                      className="mt-1 h-4 w-4 shrink-0 text-slate-400"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-slate-500">
                Ces éléments peuvent être ajoutés au projet&nbsp;: ils sont
                alors chiffrés séparément, avant démarrage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Paiement unique ou abonnement&nbsp;: ce qui change vraiment
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            La différence de prix entre deux solutions se juge mal sur le
            montant du premier mois. Ce qui compte, c&apos;est ce qu&apos;il
            reste entre vos mains le jour où vous voulez changer.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-3 pr-4 font-semibold text-slate-900">
                    Modèle
                  </th>
                  <th className="pb-3 pr-4 font-semibold text-slate-900">
                    Paiement
                  </th>
                  <th className="pb-3 pr-4 font-semibold text-slate-900">
                    Propriété
                  </th>
                  <th className="pb-3 font-semibold text-slate-900">
                    Si vous partez
                  </th>
                </tr>
              </thead>
              <tbody>
                {MODELS.map((row) => (
                  <tr key={row.model} className="border-b border-slate-100">
                    <td className="py-4 pr-4 font-medium text-slate-900">
                      {row.model}
                    </td>
                    <td className="py-4 pr-4 text-slate-600">{row.payment}</td>
                    <td className="py-4 pr-4 text-slate-600">
                      {row.ownership}
                    </td>
                    <td className="py-4 text-slate-600">{row.leaving}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Nous ne comparons pas de montants&nbsp;: les tarifs des autres
            prestataires varient trop pour qu&apos;une moyenne veuille dire
            quelque chose. La colonne qui compte est la dernière.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Questions fréquentes sur le prix d&apos;un site
          </h2>
          <dl className="mt-10 space-y-8">
            {FAQ.map((item) => (
              <div key={item.question}>
                <dt className="text-lg font-semibold text-slate-900">
                  {item.question}
                </dt>
                <dd className="mt-2 leading-7 text-slate-600">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Un devis clair, sous 24h
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Décrivez votre activité et votre objectif. Nous revenons vers vous
            avec un cadre simple&nbsp;: ce qui est faisable, à quel prix, et
            dans quel délai.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/#contact">
                Demander un devis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-600 bg-transparent text-white hover:bg-slate-800"
            >
              <Link href="/realization">Voir nos réalisations</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
