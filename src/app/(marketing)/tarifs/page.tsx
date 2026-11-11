import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildPageMetadata } from "@/lib/page-metadata";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/structured-data";
import {
  PRICING,
  fiscalLabel,
  formatPrice,
  formatPriceWithTax,
  vatLegalNotice,
} from "@/content/pricing";

/** Prix et libellé fiscal : tout vient de la constante unique (src/content/pricing.ts). */
const SITE_PRICE = formatPrice(PRICING.site.amount);
const SITE_TAX_LABEL = fiscalLabel(PRICING.site.amount);
const FOLLOW_UP_MONTHLY = formatPriceWithTax(PRICING.followUp.monthly, {
  period: "month",
});
const FOLLOW_UP_ANNUAL = formatPriceWithTax(PRICING.followUp.annual, {
  period: "year",
});
const VAT_NOTICE = vatLegalNotice();

export const metadata = buildPageMetadata({
  title: "Prix d'un site internet en 2026 | Sitekept",
  description: `Prix d'un site internet : ${SITE_PRICE} payé une fois, sans abonnement imposé. Ce qui est inclus, les modalités de paiement et l'accompagnement en option.`,
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
  "Conception et développement de votre site, sur mesure",
  "Mise en ligne 48 h après réception de vos éléments complets et de l'acompte",
  "Rédaction de vos textes à partir d'un questionnaire de 10 minutes, si vous le souhaitez",
  "Rédaction des mentions légales et de la politique de confidentialité",
  "Nom de domaine offert la première année",
  "Mise en ligne et hébergement mis en place",
  "Structure optimisée pour le référencement dès la livraison",
  "Le site et ses accès sont à votre nom",
];

const NOT_INCLUDED = [
  "Une page de plus que celles prévues au devis",
  "Une nouvelle fonctionnalité (boutique, réservation, espace client)",
  "Une refonte du site",
  "Les séances photo",
];

const FAQ = [
  {
    question: "Combien coûte un site internet chez Sitekept ?",
    answer:
      `Le site vitrine essentiel coûte ${SITE_PRICE}, payé une seule fois. Ce prix est public, et aucun abonnement n'est nécessaire pour que le site existe. Les projets avec des fonctionnalités spécifiques font l'objet d'un devis personnalisé, établi selon la complexité technique.`,
  },
  {
    question: "Y a-t-il un abonnement à payer chaque mois ?",
    answer:
      `Non, aucun abonnement n'est nécessaire pour que votre site existe : vous le payez une fois. En option, l'accompagnement « Suivi & Visibilité » assure des modifications et un suivi de votre visibilité, à ${FOLLOW_UP_MONTHLY} sans engagement ou ${FOLLOW_UP_ANNUAL}. Si vous l'arrêtez, le site reste en ligne et à vous, code compris.`,
  },
  {
    question: "Quelles sont les modalités de paiement ?",
    answer:
      `Un acompte de 30 % est demandé pour démarrer le projet, le solde est dû à la livraison du site. Les tarifs sont indiqués en euros${SITE_TAX_LABEL ? ` ${SITE_TAX_LABEL}` : ""}. Le paiement s'effectue par virement bancaire ou par carte bancaire.`,
  },
  {
    question: "Le site m'appartient-il vraiment ?",
    answer:
      "Oui. Votre site vous appartient, comme votre enseigne : le site et ses accès sont à votre nom. Vous pouvez le faire évoluer, changer de prestataire ou l'héberger ailleurs sans repartir de zéro.",
  },
  {
    question: "Le délai de 48 h après réception de mes éléments est-il réaliste ?",
    answer:
      "Oui, pour les projets simples. Les 48 h courent dès la réception de vos éléments complets et de l'acompte, pas du premier contact. Plus vos textes et images sont prêts, plus le délai est facile à tenir.",
  },
  {
    question: "Que se passe-t-il si mon besoin est plus complexe ?",
    answer:
      "Les besoins spécifiques sortent du cadre du site vitrine essentiel : boutique en ligne, système de réservation, espace client, intégrations métier. Ils font l'objet d'un devis sur mesure, chiffré selon la complexité technique réelle.",
  },
  {
    question: `Un site à ${SITE_PRICE} est-il de moins bonne qualité ?`,
    answer:
      "Le prix vient de notre méthode, pas d'un travail bâclé. Votre site est créé sur mesure pour vous, et nous ne facturons ni temps commercial ni gestion de projet. Ce qui n'est pas inclus, nous le disons : les séances photo, les fonctionnalités avancées, les pages au-delà du devis et les refontes.",
  },
  {
    question: "Faut-il payer l'hébergement en plus ?",
    answer:
      "La mise en ligne et l'hébergement sont mis en place dans le cadre du projet, selon les modalités du devis. Le seul coût récurrent obligatoire est le renouvellement du nom de domaine, dès la deuxième année. Il est offert la première année, puis réglé directement à l'organisme qui l'enregistre, à son prix public, sans marge de notre part.",
  },
];

/**
 * Facteurs de prix : contenu éditorial, pas de chiffres avancés sur des
 * prestataires tiers. Chaque ligne explique un déterminant réel du devis.
 */
const PRICE_FACTORS = [
  {
    factor: "Le nombre de pages",
    detail:
      "Un site de cinq pages ne demande pas le même travail qu'un site de quarante. C'est le facteur le plus simple à estimer, et souvent le seul que l'on vous demande au départ.",
  },
  {
    factor: "La méthode de travail",
    detail:
      "Un site sur mesure peut coûter plus ou moins cher selon la méthode de travail de celui qui le crée. Une méthode rodée évite de tout reprendre à zéro : c'est un levier d'écart de prix important, dont on parle peu.",
  },
  {
    factor: "Les fonctionnalités",
    detail:
      "Un site vitrine présente une activité. Dès qu'il faut vendre en ligne, gérer des réservations ou ouvrir un espace client, le travail change de nature, et le prix aussi.",
  },
  {
    factor: "Qui produit les contenus",
    detail:
      "Textes, photos, mentions légales : chez certains prestataires, leur production s'ajoute au devis. Chez nous, la rédaction des textes est incluse dans la limite des pages prévues au devis, avec les mentions légales et la politique de confidentialité. Si vous fournissez vos textes, le projet avance plus vite.",
  },
  {
    factor: "Ce qui se passe après la livraison",
    detail:
      "Hébergement, maintenance, corrections, évolutions. Un prix affiché bas cache parfois un abonnement dont l'arrêt fait disparaître le site. C'est là que les additions divergent le plus.",
  },
];

/**
 * Approches du marché décrites par leur structure de coût, sans nommer de
 * prestataire ni avancer de tarif qui ne serait pas vérifiable. Les fourchettes
 * sont des ordres de grandeur observés sur le marché français, à vérifier au
 * cas par cas.
 */
const APPROACHES = [
  {
    name: "Le faire soi-même",
    cost: "Abonnement mensuel",
    reality:
      "Le coût affiché est faible, mais le temps que vous y passez ne l'est pas, et le résultat dépend entièrement de vos compétences. Le site cesse d'exister si l'abonnement s'arrête.",
  },
  {
    name: "Éditeur en ligne par abonnement",
    cost: "Abonnement mensuel pour que le site existe",
    reality:
      "Mise en route rapide, mais vous louez votre présence : si l'abonnement s'arrête, le site disparaît. Au bout de quelques années, le cumul dépasse souvent le prix d'un site développé, et vous ne possédez toujours rien.",
  },
  {
    name: "Freelance",
    cost: "Paiement au projet",
    reality:
      "Bon rapport qualité-prix, très variable selon la personne. La question à poser dès le premier échange : le code et les accès vous sont-ils remis à la fin ?",
  },
  {
    name: "Agence traditionnelle",
    cost: "Paiement au projet, montant plus élevé",
    reality:
      "Accompagnement complet, adapté aux projets complexes. Souvent surdimensionné — et surfacturé — pour un simple site vitrine de PME ou d'artisan.",
  },
];

/**
 * Checklist volontairement neutre : elle vaut pour n'importe quel prestataire,
 * nous compris. C'est ce qui la rend utile — et citable.
 */
const QUESTIONS_TO_ASK = [
  "Le site et son code m'appartiennent-ils, avec tous les accès à mon nom ?",
  "Le nom de domaine est-il déposé à mon nom ou à celui du prestataire ?",
  "Que se passe-t-il si j'arrête de payer, dans six mois ou dans cinq ans ?",
  "Puis-je confier les évolutions à quelqu'un d'autre sans tout reconstruire ?",
  "Qu'est-ce qui est exclu du devis : textes, photos, mentions légales ?",
  "La TVA s'ajoute-t-elle au prix annoncé, et l'acompte est-il remboursable ?",
];

const MODELS = [
  {
    model: "Sitekept",
    payment: "Paiement unique pour le site, accompagnement en option",
    ownership: "Code et domaine à votre nom",
    leaving: "Vous partez avec le site, même pendant l'accompagnement",
  },
  {
    model: "Créateur de site en ligne",
    payment: "Abonnement mensuel pour que le site existe",
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
            Le prix d&apos;un site internet vitrine chez Sitekept est de{" "}
            {SITE_PRICE}, payé une seule fois, sans abonnement imposé. Votre
            site est en ligne 48 h après réception de vos éléments, et
            transféré à votre nom. Cette page détaille ce que ce prix couvre,
            ce qu&apos;il ne couvre pas, et comment se déroule le paiement.
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
                Offre de départ
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">
                Site vitrine essentiel
              </h3>
              <p className="mt-2 text-slate-600">
                Pour démarrer une présence professionnelle sérieuse, payée une
                seule fois.
              </p>
              <p className="mt-6 flex items-baseline gap-3">
                <span className="text-4xl font-bold text-slate-950">
                  {SITE_PRICE}
                </span>
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {SITE_TAX_LABEL
                  ? `${SITE_TAX_LABEL}, paiement unique.`
                  : "Paiement unique."}{" "}
                Domaine offert 1 an.
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

          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Accompagnement optionnel
            </p>
            <h3 className="mt-3 text-2xl font-bold text-slate-950">
              Et après la livraison&nbsp;?
            </h3>
            <p className="mt-2 text-slate-600">
              Votre site est à vous dès la livraison et reste en ligne. En
              option, l&apos;accompagnement «&nbsp;Suivi &amp; Visibilité&nbsp;»
              comprend deux modifications par mois, non cumulables, et un suivi
              de votre visibilité. Il coûte {FOLLOW_UP_MONTHLY} sans
              engagement, ou {FOLLOW_UP_ANNUAL}.
            </p>
            <p className="mt-2 text-slate-600">
              Le premier mois est offert à la livraison, pour la formule
              mensuelle seulement. Si vous arrêtez, la dépense s&apos;arrête et
              le site reste en ligne, à vous. La formule annuelle n&apos;est pas
              remboursée en cours d&apos;année.
            </p>
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
                Ces ajouts se font sur devis, chiffrés avant tout démarrage. La
                rédaction est plafonnée au nombre de pages prévu au devis, dans
                le cadre de deux séries de retours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Pourquoi les prix d&apos;un site varient autant
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Quand on cherche combien coûte un site internet, on tombe sur tout
            et son contraire. Ce n&apos;est pas que le marché est opaque&nbsp;:
            c&apos;est que le mot «&nbsp;site&nbsp;» recouvre des travaux très
            différents. Cinq éléments expliquent l&apos;essentiel de
            l&apos;écart.
          </p>

          <dl className="mt-10 space-y-6">
            {PRICE_FACTORS.map((item) => (
              <div
                key={item.factor}
                className="border-l-2 border-blue-100 pl-5"
              >
                <dt className="text-lg font-semibold text-slate-900">
                  {item.factor}
                </dt>
                <dd className="mt-2 text-slate-600">{item.detail}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 max-w-3xl text-slate-600">
            Pour un site vitrine, ces facteurs se ramènent le plus souvent à une
            question&nbsp;: achetez-vous un site, ou louez-vous votre
            présence&nbsp;?
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Les quatre façons de faire faire un site
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Chacune a sa logique et son public. Aucune n&apos;est mauvaise en
            soi&nbsp;: elles ne répondent simplement pas au même besoin ni au
            même budget.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {APPROACHES.map((item) => (
              <div
                key={item.name}
                className="rounded-lg border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-blue-700">
                  {item.cost}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.reality}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm text-slate-500">
            Nous ne publions pas de fourchettes chiffrées pour les autres
            approches. Les tarifs varient trop d&apos;un prestataire à
            l&apos;autre, et d&apos;une année à l&apos;autre, pour qu&apos;une
            moyenne soit honnête. Demandez plutôt un devis à chacun, et
            comparez ce qui reste entre vos mains à la fin.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Le calcul à faire&nbsp;: le coût sur cinq ans
          </h2>
          <p className="mt-4 text-slate-600">
            Un site n&apos;est pas un achat qu&apos;on refait tous les six mois.
            Il sert trois à cinq ans en général. La bonne comparaison est donc
            le total sur toute cette durée, pas le prix d&apos;entrée.
          </p>
          <p className="mt-4 text-slate-600">
            Ce qui coûte cher, ce n&apos;est pas de payer un service chaque
            mois. C&apos;est de payer pour que le site continue d&apos;exister,
            c&apos;est-à-dire de louer sa présence.
          </p>
          <p className="mt-4 text-slate-600">
            Prenons des exemples, qui ne sont pas nos tarifs. Un abonnement à
            20&nbsp;€ par mois coûte 1&nbsp;200&nbsp;€ sur cinq ans. À
            30&nbsp;€, cela fait 1&nbsp;800&nbsp;€&nbsp;; à 50&nbsp;€,
            3&nbsp;000&nbsp;€.
          </p>
          <p className="mt-4 text-slate-600">
            Ces abonnements ne servent qu&apos;à garder votre site en ligne. Si
            vous arrêtez de payer, il ne vous reste rien&nbsp;: ni le site, ni
            le code, ni, parfois, le nom de domaine.
          </p>
          <p className="mt-4 text-slate-600">
            Un paiement unique de {SITE_PRICE} reste {SITE_PRICE} la cinquième
            année. Le seul coût récurrent obligatoire est le renouvellement du
            nom de domaine, dès la deuxième année. Il se règle directement à
            l&apos;organisme qui l&apos;enregistre, à son prix public, quelques
            dizaines d&apos;euros par an, sans marge de notre part.
          </p>
          <p className="mt-4 text-slate-600">
            Ce raisonnement a une limite qu&apos;il faut dire&nbsp;: un site
            qu&apos;on ne touche jamais vieillit. Si votre activité change, il
            faudra le faire évoluer, et cela a un coût. Mais vous décidez de
            cette dépense, et vous pouvez la confier à qui vous voulez&nbsp;:
            le site est à vous.
          </p>
          <p className="mt-4 text-slate-600">
            Appliquons le même test à notre accompagnement optionnel. Si vous
            l&apos;arrêtez, la dépense s&apos;arrête et le site reste en ligne,
            à vous. Vous payez un service, pas le droit d&apos;exister sur
            internet.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Acheter son site ou louer sa présence
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
          <p className="mt-2 text-sm text-slate-500">
            Pour approfondir, lisez notre guide{" "}
            <Link
              href="/blog/louer-ou-posseder-son-site-internet"
              className="font-medium text-blue-700 underline underline-offset-4"
            >
              louer ou posséder son site internet
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Six questions à poser à tout prestataire avant de signer
          </h2>
          <p className="mt-4 text-slate-600">
            Y compris à nous. Un devis se compare mal sur le seul montant&nbsp;:
            deux offres au même prix peuvent vous laisser dans des situations
            très différentes. Ces six questions font apparaître l&apos;écart
            avant la signature.
          </p>

          <ol className="mt-8 space-y-4">
            {QUESTIONS_TO_ASK.map((question, index) => (
              <li key={question} className="flex gap-4">
                <span
                  className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-700"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <span className="text-slate-700">{question}</span>
              </li>
            ))}
          </ol>

          <p className="mt-8 text-slate-600">
            Si une réponse est évasive, ce n&apos;est pas nécessairement de
            mauvaise foi&nbsp;: beaucoup de prestataires n&apos;ont simplement
            jamais eu à la formuler. Mais c&apos;est le moment de la faire
            écrire dans le devis plutôt qu&apos;après la mise en ligne.
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
          {VAT_NOTICE ? (
            <p className="mt-6 text-sm text-slate-400">{VAT_NOTICE}</p>
          ) : null}
        </div>
      </section>
    </>
  );
}
