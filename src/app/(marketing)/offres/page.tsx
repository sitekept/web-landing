import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadFunnelTrigger } from "@/features/lead-funnel/lead-funnel-trigger";
import { buildPageMetadata } from "@/lib/page-metadata";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  OfferCatalogJsonLd,
} from "@/components/structured-data";
import {
  PRICING,
  SITE_SCOPE,
  fiscalLabel,
  formatPrice,
  formatPriceWithTax,
  vatLegalNotice,
} from "@/content/pricing";

/**
 * Tous les montants viennent de la constante unique (src/content/pricing.ts).
 * Aucun prix n'est écrit en dur dans cette page. Le contenu suit
 * docs/offre-v2/registre-decisions.md et plan-v2.md § 3, 4 et 9.
 */
const SITE_PRICE = formatPrice(PRICING.site.amount);
const FOLLOW_UP_AMOUNT = formatPrice(PRICING.followUp.monthly);
const FOLLOW_UP_MONTHLY = formatPriceWithTax(PRICING.followUp.monthly, {
  period: "month",
});
const FOLLOW_UP_ANNUAL = formatPriceWithTax(PRICING.followUp.annual, {
  period: "year",
});
const CAMPAIGN_AMOUNT = formatPrice(PRICING.campaigns.minimumMonthly);
const CAMPAIGN_MONTHLY = formatPriceWithTax(PRICING.campaigns.minimumMonthly, {
  period: "month",
});

/** Libellés fiscaux : chaînes vides tant que la franchise de TVA s'applique. */
const SITE_TAX_LABEL = fiscalLabel(PRICING.site.amount);
const FOLLOW_UP_TAX_LABEL = fiscalLabel(PRICING.followUp.monthly, {
  period: "month",
});
const CAMPAIGN_TAX_LABEL = fiscalLabel(PRICING.campaigns.minimumMonthly, {
  period: "month",
});

const VAT_NOTICE = vatLegalNotice();
const MAX_PAGES = SITE_SCOPE.maxPages;
const CAMPAIGN_PAGES = SITE_SCOPE.campaignLandingPages;
const CAMPAIGN_PAGES_LABEL = `${CAMPAIGN_PAGES} ${
  CAMPAIGN_PAGES > 1 ? "pages dédiées" : "page dédiée"
} à vos campagnes publicitaires`;

export const metadata = buildPageMetadata({
  title: "Devis site internet : nos 3 offres | Sitekept",
  description: `Devis site internet : un site à ${SITE_PRICE} payé une fois, un suivi à ${FOLLOW_UP_MONTHLY} sans engagement, des campagnes dès ${CAMPAIGN_MONTHLY}. Comparez nos trois offres.`,
  path: "/offres",
});

/** Contenu du site de base, lu dans SITE_SCOPE (pas de nombre de pages en dur). */
const SITE_SCOPE_ITEMS = [
  `Jusqu'à ${MAX_PAGES} pages`,
  ...(SITE_SCOPE.contactForm ? ["Un formulaire de contact"] : []),
  ...(SITE_SCOPE.whatsappButtons ? ["Des boutons de contact WhatsApp"] : []),
  CAMPAIGN_PAGES_LABEL.charAt(0).toUpperCase() + CAMPAIGN_PAGES_LABEL.slice(1),
];

interface Block {
  title: string;
  paragraphs: string[];
}

const PRINCIPLES: Block[] = [
  {
    title: "Le site s'achète une fois",
    paragraphs: [
      "Paiement unique : le site et ses accès sont à votre nom. Aucun abonnement n'est nécessaire pour qu'il reste en ligne.",
    ],
  },
  {
    title: "L'accompagnement est optionnel",
    paragraphs: [
      "Il s'ajoute si vous le souhaitez. La formule mensuelle est sans engagement.",
    ],
  },
  {
    title: "Si vous arrêtez, le site reste",
    paragraphs: [
      "Il reste en ligne et reste à vous. Vous payez un service, pas le droit d'exister sur internet.",
    ],
  },
];

const SITE_BLOCKS: Block[] = [
  {
    title: "Un design sur mesure",
    paragraphs: [
      "Votre site est créé sur mesure pour vous. Les templates de notre site sont des exemples pour vous aider à vous projeter, pas le site livré.",
    ],
  },
  {
    title: "Vos textes : vous choisissez",
    paragraphs: [
      "Vous nous envoyez vos textes, ou vous répondez à un questionnaire de 10 minutes et nous les rédigeons pour vous. La rédaction est incluse, dans la limite des pages prévues et de vos 2 séries de retours.",
    ],
  },
  {
    title: "Mentions légales et confidentialité",
    paragraphs: [
      "Nous rédigeons les mentions légales et la politique de confidentialité de votre site. Elles sont incluses.",
    ],
  },
  {
    title: "Votre nom de domaine",
    paragraphs: [
      "Le nom de domaine est offert la première année, et il est à votre nom. Dès la 2e année, vous le renouvelez vous-même, à son prix public, auprès de l'organisme qui l'enregistre.",
    ],
  },
  {
    title: "Mise en ligne",
    paragraphs: [
      "Votre site est en ligne 48 h après réception de vos éléments complets. Ce délai ne part pas du versement de l'acompte : il part du moment où nous avons tout reçu.",
    ],
  },
  {
    title: "Paiement",
    paragraphs: [
      "Un acompte de 30 % est demandé pour démarrer le projet. Le solde est dû à la livraison. Le paiement s'effectue par virement bancaire ou par carte bancaire.",
    ],
  },
];

const PROJECT_STEPS: Block[] = [
  {
    title: "Vous nous envoyez vos éléments",
    paragraphs: [
      "Il nous faut vos textes (ou vos réponses au questionnaire de 10 minutes), votre logo et vos photos. Le délai de 48 h court à partir de la réception de vos éléments complets.",
    ],
  },
  {
    title: "Nous créons, vous relisez",
    paragraphs: [
      "Deux séries de retours sont incluses avant la livraison. Au-delà, nous vous proposons un devis.",
    ],
  },
  {
    title: "Une pause si vous ne répondez plus",
    paragraphs: [
      "Sans réponse de votre part pendant 15 jours, le projet est mis en pause. La date de livraison est alors décalée.",
    ],
  },
  {
    title: "Après la mise en ligne",
    paragraphs: [
      "Nous corrigeons gratuitement les anomalies (ce qui ne fonctionne pas comme prévu) pendant 30 jours. Ce qui sort du forfait, comme une nouvelle page, une nouvelle fonctionnalité ou une refonte, est chiffré sur devis.",
    ],
  },
];

const FOLLOW_UP_BLOCKS: Block[] = [
  {
    title: "2 modifications par mois",
    paragraphs: [
      "Une modification est un changement sur une page existante : un texte, une photo, des horaires, des tarifs, une actualité. Elles ne se cumulent pas d'un mois sur l'autre, et nous les traitons sous 5 jours ouvrés.",
      "Une nouvelle page, une nouvelle fonctionnalité ou une refonte sort du suivi : elle est chiffrée sur devis.",
    ],
  },
  {
    title: "Pour quels sites",
    paragraphs: [
      "Le suivi est ouvert à tous les sites, y compris ceux faits ailleurs. Pour un site que nous n'avons pas livré, nous commençons par un audit technique avant la souscription.",
    ],
  },
  {
    title: "Le premier mois offert",
    paragraphs: [
      "Le premier mois est offert si vous souscrivez à la livraison de votre site, avec la formule mensuelle. La formule annuelle n'est pas concernée.",
    ],
  },
  {
    title: "Si vous arrêtez",
    paragraphs: [
      "La formule mensuelle est sans engagement : vous arrêtez quand vous le souhaitez. La formule annuelle n'est pas remboursée au prorata si vous l'arrêtez en cours d'année. Dans tous les cas, le site reste en ligne et à vous.",
    ],
  },
];

/** Liste du suivi de visibilité : plan initial § 1.5, en langage simple. */
const VISIBILITY_ITEMS = [
  "Nous surveillons votre site dans la Google Search Console, l'outil de Google qui montre comment votre site apparaît dans les recherches.",
  "Une fois par mois, nous optimisons une page de votre site pour qu'elle soit mieux comprise des moteurs de recherche.",
  "Chaque mois, vous recevez un rapport sur la place de votre site dans les résultats.",
  "Nous vérifions si votre site apparaît dans les réponses des moteurs d'IA.",
];

const CAMPAIGN_STEPS: Block[] = [
  {
    title: "L'audit gratuit",
    paragraphs: [
      "Nous regardons votre activité et nous vérifions que la publicité a un sens pour vous, avant tout engagement.",
    ],
  },
  {
    title: "La mise en place",
    paragraphs: [
      "Nous mettons vos campagnes en place sur vos comptes publicitaires, à votre nom.",
    ],
  },
  {
    title: "Le pilotage et le compte rendu",
    paragraphs: [
      "Nous suivons vos campagnes et nous vous envoyons un compte rendu chaque mois.",
    ],
  },
];

const CAMPAIGN_BLOCKS: Block[] = [
  {
    title: "Honoraires et budget média, deux choses",
    paragraphs: [
      `Nos honoraires, à partir de ${CAMPAIGN_MONTHLY}, paient le travail de gestion. Le budget média est l'argent dépensé en publicité : vous le payez directement aux plateformes, sur vos comptes, à votre nom.`,
    ],
  },
  {
    title: "Ce que la publicité ne fait pas",
    paragraphs: [
      "La publicité achète des visites. Elle ne répare pas une offre qui ne donne pas envie de vous contacter. Si l'audit montre que votre budget serait gaspillé, nous vous le disons avant que vous le dépensiez.",
    ],
  },
  {
    title: "Aucune promesse de résultat",
    paragraphs: [
      "Nous ne promettons aucun résultat. L'audit gratuit sert à vérifier que la publicité a un sens pour votre activité avant d'engager un budget.",
    ],
  },
  {
    title: "Durée et préavis",
    paragraphs: [
      "Pour arrêter, un préavis de 30 jours s'applique. Nous conseillons de prévoir au moins 3 mois.",
    ],
  },
];

const COMPARISON = [
  {
    label: "Paiement",
    site: `${SITE_PRICE}, en une seule fois`,
    followUp: `${FOLLOW_UP_MONTHLY}, ou ${FOLLOW_UP_ANNUAL}`,
    campaigns: `À partir de ${CAMPAIGN_MONTHLY}, plus le budget média payé aux plateformes`,
  },
  {
    label: "Engagement",
    site: "Aucun abonnement",
    followUp: "Aucun en mensuel. L'annuel n'est pas remboursé au prorata",
    campaigns: "Préavis de 30 jours, minimum de 3 mois conseillé",
  },
  {
    label: "Ce que vous possédez",
    site: "Le site et ses accès, à votre nom",
    followUp: "Votre site, avec ou sans le suivi",
    campaigns: "Vos comptes publicitaires, à votre nom",
  },
  {
    label: "Si vous arrêtez",
    site: "Rien à arrêter : le site reste en ligne et à vous",
    followUp: "Le site reste en ligne et à vous",
    campaigns: "Les campagnes s'arrêtent, vos comptes restent à vous",
  },
  {
    label: "Pour qui",
    site: "Les professionnels qui démarrent leur présence en ligne",
    followUp:
      "Ceux qui veulent un site tenu à jour et suivi, même fait ailleurs",
    campaigns:
      "Ceux qui veulent essayer la publicité en ligne, après l'audit gratuit",
  },
];

const FAQ = [
  {
    question: "Pourquoi proposer un abonnement si le site s'achète une fois ?",
    answer: `Ce sont deux choses séparées. Le site s'achète une fois, ${SITE_PRICE}, et reste à vous sans abonnement. Le suivi est un service facultatif, pour les modifications et la visibilité.`,
  },
  {
    question: "Si j'arrête le suivi, est-ce que je perds mon site ?",
    answer:
      "Non, le site reste en ligne et à vous, et aucun abonnement n'est nécessaire pour qu'il existe. La formule mensuelle est sans engagement. La formule annuelle n'est pas remboursée au prorata si vous l'arrêtez en cours d'année.",
  },
  {
    question: `Que couvre le suivi à ${FOLLOW_UP_MONTHLY} ?`,
    answer: `Le suivi comprend 2 modifications par mois, non cumulables, traitées sous 5 jours ouvrés. Il comprend aussi un suivi de votre visibilité : Search Console surveillée et une optimisation par mois. Vous recevez un rapport sur la place de votre site dans les résultats, et une veille dans les réponses des moteurs d'IA.`,
  },
  {
    question: "Que se passe-t-il si je n'utilise pas mes 2 modifications ?",
    answer:
      "Elles ne se cumulent pas. Une modification non utilisée un mois n'est pas reportée sur le mois suivant.",
  },
  {
    question: "Pouvez-vous suivre un site que vous n'avez pas fait ?",
    answer:
      "Oui, le suivi est ouvert aux sites faits ailleurs. Nous commençons par un audit technique de votre site, avant la souscription.",
  },
  {
    question: "Garantissez-vous d'être premier sur Google ?",
    answer:
      "Non. Personne ne peut garantir une première place sur Google, ni nous ni un autre prestataire. Nous nous engageons sur le travail décrit et sur un compte rendu chaque mois.",
  },
  {
    question: "Combien faut-il de budget pour commencer la publicité ?",
    answer: `La gestion de vos campagnes démarre à ${CAMPAIGN_MONTHLY}, hors budget média. Le budget média s'ajoute à nos honoraires : c'est l'argent dépensé en publicité, payé directement aux plateformes. Nous en parlons ensemble pendant l'audit gratuit, sans promettre de montant.`,
  },
  {
    question: "Je n'ai ni le temps ni les textes : comment ça se passe ?",
    answer:
      "Vous avez le choix. Soit vous nous envoyez vos textes, soit vous répondez à un questionnaire de 10 minutes et nous rédigeons pour vous. La rédaction est incluse, dans la limite du nombre de pages prévu à votre devis et de vos deux séries de retours.",
  },
  {
    question: "Que se passe-t-il si je ne réponds pas à vos questions ?",
    answer:
      "Sans réponse de votre part pendant 15 jours, le projet est mis en pause et la date de livraison est décalée. Le délai de 48 h court à partir de la réception de vos éléments complets, pas du premier contact.",
  },
  {
    question: "Combien de retours puis-je demander ?",
    answer:
      "Deux séries de retours sont incluses avant la livraison. Au-delà, nous vous proposons un devis.",
  },
  {
    question: "Le premier mois de suivi est offert : à quelles conditions ?",
    answer:
      "Le premier mois est offert si vous souscrivez à la livraison de votre site, avec la formule mensuelle. La formule annuelle n'est pas concernée.",
  },
];

function BlockList({ items }: { items: Block[] }) {
  return (
    <div className="mt-10 space-y-8">
      {items.map((item) => (
        <div key={item.title} className="border-l-2 border-blue-100 pl-5">
          <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
          {item.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-2 text-slate-600">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

function NumberedSteps({ items }: { items: Block[] }) {
  return (
    <ol className="mt-8 space-y-6">
      {items.map((item, index) => (
        <li key={item.title} className="flex gap-4">
          <span
            className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-700"
            aria-hidden="true"
          >
            {index + 1}
          </span>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {item.title}
            </h3>
            {item.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-1 text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex-1 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm text-slate-700">
          <Check
            className="mt-1 h-4 w-4 shrink-0 text-blue-600"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function OffresPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Offres", path: "/offres" },
        ]}
      />
      <OfferCatalogJsonLd />
      <FaqJsonLd items={FAQ} />

      <section className="bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] px-6 pb-16 pt-28 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
            Nos offres
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Devis site internet&nbsp;: trois offres claires
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Pour votre devis site internet, choisissez parmi trois offres&nbsp;:
            un site payé une seule fois, un suivi optionnel et des campagnes
            publicitaires. Chaque offre a son prix affiché sur cette page. Le
            site s&apos;achète une fois&nbsp;; le reste est facultatif.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Le principe&nbsp;: votre site vous appartient
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Votre site vous appartient, comme votre enseigne. Vous le payez une
            fois, et il reste à vous, que vous preniez un accompagnement ou non.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PRINCIPLES.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-sm text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Les trois offres : site, suivi, campagnes
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Vous choisissez ce dont vous avez besoin&nbsp;: une offre, deux ou
            les trois.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
                Site
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">
                Site vitrine
              </h3>
              <p className="mt-6 text-sm text-slate-500">Paiement unique</p>
              <p className="mt-1 flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-slate-950">
                  {SITE_PRICE}
                </span>
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {SITE_TAX_LABEL ? `${SITE_TAX_LABEL}. ` : ""}
                Nom de domaine offert la première année.
              </p>
              <CheckList
                items={[
                  ...SITE_SCOPE_ITEMS,
                  "Design sur mesure",
                  `Mise en ligne 48 h après réception de vos éléments complets`,
                ]}
              />
              <Button
                asChild
                className="mt-8 w-full bg-blue-600 hover:bg-blue-700"
              >
                <LeadFunnelTrigger offers={["site"]}>
                  Demander un devis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </LeadFunnelTrigger>
              </Button>
            </div>

            <div className="flex flex-col rounded-xl border-2 border-blue-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
                Suivi
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">
                Suivi &amp; Visibilité
              </h3>
              <p className="mt-6 text-sm text-slate-500">Sans engagement</p>
              <p className="mt-1 flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-slate-950">
                  {FOLLOW_UP_AMOUNT}
                </span>
                <span className="text-base font-medium text-slate-600">
                  /mois
                </span>
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {FOLLOW_UP_TAX_LABEL ? `${FOLLOW_UP_TAX_LABEL}. ` : ""}
                Ou {FOLLOW_UP_ANNUAL}.
              </p>
              <CheckList
                items={[
                  "2 modifications par mois, non cumulables",
                  "Suivi de votre visibilité sur Google et dans les réponses des moteurs d'IA",
                  "Premier mois offert si vous souscrivez à la livraison de votre site (formule mensuelle)",
                ]}
              />
              <Button
                asChild
                className="mt-8 w-full bg-blue-600 hover:bg-blue-700"
              >
                <LeadFunnelTrigger offers={["suivi"]}>
                  Demander l&apos;abonnement
                  <ArrowRight className="ml-2 h-4 w-4" />
                </LeadFunnelTrigger>
              </Button>
            </div>

            <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
                Publicité
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">
                Campagnes publicitaires
              </h3>
              <p className="mt-6 text-sm text-slate-500">À partir de</p>
              <p className="mt-1 flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-slate-950">
                  {CAMPAIGN_AMOUNT}
                </span>
                <span className="text-base font-medium text-slate-600">
                  /mois
                </span>
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {CAMPAIGN_TAX_LABEL ? `${CAMPAIGN_TAX_LABEL}. ` : ""}+ budget
                média, payé aux plateformes.
              </p>
              <CheckList
                items={[
                  "Google Ads, Meta (Facebook, Instagram) et TikTok",
                  "Audit gratuit avant tout engagement",
                  "Compte rendu chaque mois",
                ]}
              />
              <Button
                asChild
                className="mt-8 w-full bg-blue-600 hover:bg-blue-700"
              >
                <LeadFunnelTrigger offers={["campagnes"]}>
                  Demander un audit gratuit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </LeadFunnelTrigger>
              </Button>
            </div>
          </div>

          {VAT_NOTICE ? (
            <p className="mt-6 text-sm text-slate-500">{VAT_NOTICE}</p>
          ) : null}

          <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Fonctionnalités avancées, sur devis
            </h3>
            <p className="mt-2 text-slate-600">
              Boutique en ligne, réservation, espace client, intégrations
              métier. Le prix est établi selon la complexité réelle, avant tout
              démarrage.
            </p>
            <p className="mt-4">
              <LeadFunnelTrigger className="font-medium text-blue-700 underline underline-offset-4">
                Décrire mon projet
              </LeadFunnelTrigger>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Le site en détail&nbsp;: ce qui est inclus
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Pour {SITE_PRICE}, vous recevez un site complet, prêt à présenter
            votre activité. Voici ce qu&apos;il contient. Au-delà, c&apos;est
            sur devis.
          </p>

          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {SITE_SCOPE_ITEMS.map((item) => (
              <li key={item} className="flex gap-3 text-slate-700">
                <Check
                  className="mt-1 h-4 w-4 shrink-0 text-blue-600"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <BlockList items={SITE_BLOCKS} />

          <p className="mt-8 text-sm text-slate-500">
            Pour approfondir, lisez{" "}
            <Link
              href="/tarifs"
              className="font-medium text-blue-700 underline underline-offset-4"
            >
              Comprendre le prix d&apos;un site internet
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Comment ça se passe, étape par étape
          </h2>
          <p className="mt-4 text-slate-600">
            Vous nous envoyez vos éléments, puis nous créons votre site, en
            ligne 48&nbsp;h après réception de vos éléments complets. Vous avez
            deux séries de retours avant la livraison. Sans réponse pendant 15
            jours, le projet est mis en pause et la livraison est décalée.
          </p>

          <NumberedSteps items={PROJECT_STEPS} />
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Suivi &amp; Visibilité en détail
          </h2>
          <p className="mt-4 text-slate-600">
            Le suivi coûte {FOLLOW_UP_MONTHLY} sans engagement, ou{" "}
            {FOLLOW_UP_ANNUAL}. Il garde votre site à jour et suit sa
            visibilité.
          </p>

          <BlockList items={FOLLOW_UP_BLOCKS.slice(0, 1)} />

          <div className="mt-8 border-l-2 border-blue-100 pl-5">
            <h3 className="text-lg font-semibold text-slate-900">
              Un suivi de votre visibilité
            </h3>
            <p className="mt-2 text-slate-600">
              Chaque mois, nous nous occupons de votre visibilité sur Google et
              dans les réponses des moteurs d&apos;IA&nbsp;:
            </p>
            <ul className="mt-3 space-y-3">
              {VISIBILITY_ITEMS.map((item) => (
                <li key={item} className="flex gap-3 text-slate-700">
                  <Check
                    className="mt-1 h-4 w-4 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-slate-600">
              Aucun classement ne peut être garanti, ni par nous ni par
              personne. Nous nous engageons sur le travail décrit et sur un
              compte rendu chaque mois.
            </p>
          </div>

          <BlockList items={FOLLOW_UP_BLOCKS.slice(1)} />
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Campagnes publicitaires en détail
          </h2>
          <p className="mt-4 text-slate-600">
            Nous créons et pilotons vos publicités sur Google Ads (recherche et
            Maps), sur Meta (Facebook et Instagram) et sur TikTok. La gestion
            démarre à {CAMPAIGN_MONTHLY}, hors budget média.
          </p>
          <p className="mt-4 text-slate-600">
            La publicité est payante. Le référencement naturel local, sans
            publicité payante, est expliqué sur{" "}
            <Link
              href="/seo-geo"
              className="font-medium text-blue-700 underline underline-offset-4"
            >
              notre page SEO et GEO
            </Link>
            .
          </p>

          <NumberedSteps items={CAMPAIGN_STEPS} />
          <BlockList items={CAMPAIGN_BLOCKS} />
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Les trois offres côte à côte
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Ce qui change d&apos;une offre à l&apos;autre&nbsp;: le paiement,
            l&apos;engagement, et ce qui reste à vous si vous arrêtez.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-3 pr-4 font-semibold text-slate-900">
                    Critère
                  </th>
                  <th className="pb-3 pr-4 font-semibold text-slate-900">
                    Site vitrine
                  </th>
                  <th className="pb-3 pr-4 font-semibold text-slate-900">
                    Suivi &amp; Visibilité
                  </th>
                  <th className="pb-3 font-semibold text-slate-900">
                    Campagnes
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.label} className="border-b border-slate-100">
                    <th
                      scope="row"
                      className="py-4 pr-4 text-left font-medium text-slate-900"
                    >
                      {row.label}
                    </th>
                    <td className="py-4 pr-4 text-slate-600">{row.site}</td>
                    <td className="py-4 pr-4 text-slate-600">
                      {row.followUp}
                    </td>
                    <td className="py-4 text-slate-600">{row.campaigns}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Questions fréquentes sur nos offres
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
            Parlons de votre projet
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Votre site coûte {SITE_PRICE}, payé une seule fois, avec{" "}
            {CAMPAIGN_PAGES_LABEL}. Il est en ligne 48&nbsp;h après réception de
            vos éléments complets. Décrivez votre activité pour démarrer.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <LeadFunnelTrigger>
                Demander un devis
                <ArrowRight className="ml-2 h-4 w-4" />
              </LeadFunnelTrigger>
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
