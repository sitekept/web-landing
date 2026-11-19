import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SiteLocale } from "@/content/site-content";
import { buildPageMetadata } from "@/lib/page-metadata";
import { linkLocalizer } from "@/lib/localized-routes";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/structured-data";

/**
 * Toutes les données de cette page proviennent des conditions réelles du site
 * (messages/fr.json → services.pricing et terms.sections.pricing). Aucun prix
 * de concurrent n'est avancé : la comparaison porte sur ce qui est
 * structurellement différent d'un modèle à l'autre, pas sur des montants qui
 * ne seraient pas vérifiables.
 *
 * PRICE_FACTORS : contenu éditorial, pas de chiffres avancés sur des
 * prestataires tiers. Chaque ligne explique un déterminant réel du devis.
 *
 * APPROACHES : approches du marché décrites par leur structure de coût, sans
 * nommer de prestataire ni avancer de tarif qui ne serait pas vérifiable.
 *
 * QUESTIONS_TO_ASK : checklist volontairement neutre, elle vaut pour n'importe
 * quel prestataire, nous compris. C'est ce qui la rend utile — et citable.
 */

const NBSP = " ";

const COPY = {
  fr: {
    metaTitle: "Prix d'un site internet en 2026 | Sitekept",
    metaDescription:
      "Combien coûte un site internet ? Notre offre à partir de 500€ sans abonnement, ce qui est inclus, et les modalités de paiement. Tarifs détaillés.",
    breadcrumbHome: "Accueil",
    breadcrumbPage: "Tarifs",
    eyebrow: "Tarifs",
    title: `Combien coûte un site internet professionnel${NBSP}?`,
    intro: `Un site vitrine complet à partir de 500${NBSP}€, sans abonnement imposé, livré en 48h et transféré à votre nom. Cette page détaille ce que le prix couvre, ce qu'il ne couvre pas, et comment se déroule le paiement.`,
    plansTitle: "Nos deux formules",
    essential: {
      badge: "Tarif de lancement",
      name: "Site vitrine essentiel",
      description:
        "Pour démarrer une présence professionnelle sérieuse, sans coût récurrent.",
      price: "500 €",
      oldPrice: "600 €",
      note: "TTC, paiement unique. Domaine offert 1 an.",
      cta: "Demander un devis",
    },
    advanced: {
      badge: "Sur devis",
      name: "Fonctionnalités avancées",
      description: "Boutique, réservation, espace client, intégrations métier.",
      price: "Sur mesure",
      note: "Tarif établi selon la complexité technique réelle.",
      cta: "Décrire mon projet",
    },
    includedTitle: "Ce que le prix comprend",
    includedLabel: "Inclus",
    notIncludedLabel: "Non inclus",
    included: [
      "Conception et développement du site",
      "Mise en ligne en 48h après réception de l'acompte et des contenus",
      "Nom de domaine offert la première année",
      "Déploiement et hébergement mis en place",
      "Structure optimisée pour le référencement dès la livraison",
      "Dépôt de code transféré à votre nom",
    ],
    notIncluded: [
      "Rédaction complète des contenus éditoriaux",
      "Photographies et séances photo",
      "Fonctionnalités sur mesure (boutique, réservation, espace client)",
    ],
    notIncludedNote: `Ces éléments peuvent être ajoutés au projet${NBSP}: ils sont alors chiffrés séparément, avant démarrage.`,
    factorsTitle:
      "Pourquoi les prix vont de quelques euros par mois à plusieurs milliers d'euros",
    factorsIntro: `Quand on cherche combien coûte un site internet, on tombe sur tout et son contraire. Ce n'est pas que le marché est opaque${NBSP}: c'est que le mot «${NBSP}site${NBSP}» recouvre des travaux très différents. Cinq éléments expliquent l'essentiel de l'écart.`,
    factors: [
      {
        factor: "Le nombre de pages",
        detail:
          "Un site de cinq pages ne demande pas le même travail qu'un site de quarante. C'est le facteur le plus simple à estimer, et souvent le seul que l'on vous demande au départ.",
      },
      {
        factor: "Sur-mesure ou base existante",
        detail:
          "Partir d'une base éprouvée et l'adapter à votre activité coûte nettement moins cher que dessiner chaque écran depuis une page blanche. C'est le principal levier d'écart de prix, et celui dont on parle le moins.",
      },
      {
        factor: "Les fonctionnalités",
        detail:
          "Un site vitrine présente une activité. Dès qu'il faut vendre en ligne, gérer des réservations, ouvrir un espace client ou se connecter à un logiciel métier, le travail change de nature et le prix aussi.",
      },
      {
        factor: "Qui produit les contenus",
        detail:
          "Textes, photos, mentions légales : si le prestataire les rédige et les produit, cela s'ajoute au devis. Si vous les fournissez, le projet avance plus vite et coûte moins cher.",
      },
      {
        factor: "Ce qui se passe après la livraison",
        detail:
          "Hébergement, maintenance, corrections, évolutions. Un prix affiché bas s'accompagne parfois d'un engagement mensuel qui, lui, ne s'arrête jamais. C'est là que les additions divergent le plus.",
      },
    ],
    factorsOutro: `Pour un site vitrine de PME, d'artisan ou d'indépendant, ces cinq facteurs se ramènent le plus souvent à une seule question de fond${NBSP}: payez-vous une fois, ou payez-vous indéfiniment${NBSP}?`,
    approachesTitle: "Les quatre façons de faire faire un site",
    approachesIntro: `Chacune a sa logique et son public. Aucune n'est mauvaise en soi${NBSP}: elles ne répondent simplement pas au même besoin ni au même budget.`,
    approaches: [
      {
        name: "Le faire soi-même",
        cost: "Abonnement mensuel",
        reality:
          "Le coût affiché est faible, mais le temps que vous y passez ne l'est pas, et le résultat dépend entièrement de vos compétences. Le site cesse d'exister si l'abonnement s'arrête.",
      },
      {
        name: "Éditeur en ligne par abonnement",
        cost: "Abonnement mensuel, sans fin",
        reality:
          "Mise en route rapide, mais vous louez votre présence. Au bout de quelques années, le cumul dépasse souvent le prix d'un site développé, et vous ne possédez toujours rien.",
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
    ],
    approachesNote: `Nous ne publions pas de fourchettes chiffrées pour les autres approches${NBSP}: les tarifs varient trop d'un prestataire à l'autre et d'une année sur l'autre pour qu'une moyenne soit honnête. Demandez plutôt un devis à chacun, et comparez ce qui reste entre vos mains à la fin.`,
    fiveYearTitle: `Le calcul à faire${NBSP}: le coût sur cinq ans`,
    fiveYearParagraphs: [
      "Un site n'est pas un achat qu'on refait tous les six mois. La bonne unité de comparaison n'est donc pas le prix d'entrée, mais le total sur la durée de vie réelle du site — trois à cinq ans en général.",
      `L'arithmétique est simple, et vous pouvez la faire avec les chiffres de n'importe quelle offre. Un abonnement à 20${NBSP}€ par mois représente 1${NBSP}200${NBSP}€ sur cinq ans. À 30${NBSP}€${NBSP}: 1${NBSP}800${NBSP}€. À 50${NBSP}€${NBSP}: 3${NBSP}000${NBSP}€. Et à la fin de ces cinq ans, si vous arrêtez de payer, il ne vous reste rien${NBSP}: ni le site, ni le code, ni, parfois, le nom de domaine.`,
      `Un paiement unique de 500${NBSP}€ reste 500${NBSP}€ la cinquième année. Le seul coût récurrent est le renouvellement du nom de domaine à partir de la deuxième année, payé directement au registrar, à son tarif public — de l'ordre de quelques dizaines d'euros par an, sans marge de notre part.`,
      `Ce raisonnement a une limite qu'il faut dire${NBSP}: un site qu'on ne touche jamais vieillit. Si votre activité change, il faudra le faire évoluer, et cela représente un coût. La différence est qu'il s'agit alors d'une dépense que vous décidez, quand vous le décidez, et que vous pouvez confier à qui vous voulez — puisque le code est à vous.`,
    ],
    modelsTitle: `Paiement unique ou abonnement${NBSP}: ce qui change vraiment`,
    modelsIntro:
      "La différence de prix entre deux solutions se juge mal sur le montant du premier mois. Ce qui compte, c'est ce qu'il reste entre vos mains le jour où vous voulez changer.",
    modelsHeaders: {
      model: "Modèle",
      payment: "Paiement",
      ownership: "Propriété",
      leaving: "Si vous partez",
    },
    models: [
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
    ],
    modelsNote: `Nous ne comparons pas de montants${NBSP}: les tarifs des autres prestataires varient trop pour qu'une moyenne veuille dire quelque chose. La colonne qui compte est la dernière.`,
    questionsTitle:
      "Six questions à poser avant de signer, à n'importe quel prestataire",
    questionsIntro: `Y compris à nous. Un devis se compare mal sur le seul montant${NBSP}: deux propositions au même prix peuvent vous laisser dans des situations radicalement différentes trois ans plus tard. Ces six questions font apparaître l'écart avant que vous ne vous engagiez.`,
    questions: [
      "Le code source m'est-il remis, et sur un dépôt à mon nom ?",
      "Le nom de domaine est-il déposé à mon nom ou à celui du prestataire ?",
      "Que se passe-t-il si j'arrête de payer, dans six mois ou dans cinq ans ?",
      "Puis-je confier les évolutions à quelqu'un d'autre sans tout reconstruire ?",
      "Qu'est-ce qui est exclu du devis : textes, photos, mentions légales ?",
      "Le prix affiché est-il TTC, et l'acompte est-il remboursable ?",
    ],
    questionsOutro: `Si une réponse est évasive, ce n'est pas nécessairement de mauvaise foi${NBSP}: beaucoup de prestataires n'ont simplement jamais eu à la formuler. Mais c'est le moment de la faire écrire dans le devis plutôt qu'après la mise en ligne.`,
    faqTitle: "Questions fréquentes sur le prix d'un site",
    faq: [
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
      {
        question: "Un site à 500 € est-il de moins bonne qualité ?",
        answer:
          "Le prix vient de la méthode, pas d'un travail bâclé. Nous partons de bases éprouvées et adaptées à chaque métier plutôt que de redessiner chaque écran depuis une page blanche, et nous ne facturons pas de temps commercial ni de gestion de projet sur un site vitrine. Ce qui est réellement moins couvert qu'en agence, nous le disons : la production éditoriale, les photos et les fonctionnalités sur mesure ne sont pas comprises dans ce tarif.",
      },
      {
        question: "Faut-il payer l'hébergement en plus ?",
        answer:
          "La mise en ligne et l'hébergement sont mis en place dans le cadre du projet, et les modalités précises figurent sur le devis. Le seul coût récurrent prévu est le renouvellement du nom de domaine à partir de la deuxième année : il est offert la première, puis payé directement au registrar à son tarif public, sans marge de notre part.",
      },
    ],
    ctaTitle: "Un devis clair, sous 24h",
    ctaDescription: `Décrivez votre activité et votre objectif. Nous revenons vers vous avec un cadre simple${NBSP}: ce qui est faisable, à quel prix, et dans quel délai.`,
    ctaPrimary: "Demander un devis",
    ctaSecondary: "Voir nos réalisations",
  },
  en: {
    metaTitle: "How much does a website cost in 2026? | Sitekept",
    metaDescription:
      "How much does a website cost? Our offer from €500 with no subscription, what is included, and how payment works. Detailed pricing.",
    breadcrumbHome: "Home",
    breadcrumbPage: "Pricing",
    eyebrow: "Pricing",
    title: "How much does a professional website cost?",
    intro:
      "A complete business website from €500, with no mandatory subscription, delivered in 48 hours and transferred to your name. This page explains what the price covers, what it does not cover, and how payment works.",
    plansTitle: "Our two packages",
    essential: {
      badge: "Launch price",
      name: "Essential business website",
      description:
        "To get a serious professional presence off the ground, with no recurring cost.",
      price: "€500",
      oldPrice: "€600",
      note: "VAT included, one-time payment. Domain free for 1 year.",
      cta: "Request a quote",
    },
    advanced: {
      badge: "Quote-based",
      name: "Advanced features",
      description: "Online store, booking system, client portal, industry-specific integrations.",
      price: "Custom",
      note: "Priced according to actual technical complexity.",
      cta: "Describe my project",
    },
    includedTitle: "What the price includes",
    includedLabel: "Included",
    notIncludedLabel: "Not included",
    included: [
      "Website design and development",
      "Launch within 48 hours of receiving the deposit and your content",
      "Free domain name for the first year",
      "Deployment and hosting set up",
      "SEO-friendly structure from day one",
      "Code repository transferred to your name",
    ],
    notIncluded: [
      "Full copywriting of your editorial content",
      "Photography and photo shoots",
      "Custom features (online store, booking system, client portal)",
    ],
    notIncludedNote:
      "These items can be added to the project: they are then quoted separately, before work begins.",
    factorsTitle:
      "Why prices range from a few euros a month to several thousand euros",
    factorsIntro:
      "When you look up how much a website costs, you find wildly conflicting answers. It is not that the market is opaque: it is that the word “website” covers very different kinds of work. Five factors explain most of the gap.",
    factors: [
      {
        factor: "The number of pages",
        detail:
          "A five-page website does not take the same amount of work as a forty-page one. It is the easiest factor to estimate, and often the only one you are asked about at the start.",
      },
      {
        factor: "Custom-built or based on an existing template",
        detail:
          "Starting from a proven template and adapting it to your business costs significantly less than designing every screen from a blank page. It is the main driver of price differences, and the one people talk about least.",
      },
      {
        factor: "Features",
        detail:
          "A business website presents what you do. As soon as you need to sell online, manage bookings, offer a client portal or connect to industry-specific software, the nature of the work changes, and so does the price.",
      },
      {
        factor: "Who produces the content",
        detail:
          "Copy, photos, legal notices: if the provider writes and produces them, that is added to the quote. If you supply them, the project moves faster and costs less.",
      },
      {
        factor: "What happens after delivery",
        detail:
          "Hosting, maintenance, fixes, updates. A low advertised price sometimes comes with a monthly commitment that never ends. That is where the bills diverge the most.",
      },
    ],
    factorsOutro:
      "For a small-business, tradesperson or freelancer website, these five factors usually boil down to one fundamental question: do you pay once, or do you pay forever?",
    approachesTitle: "The four ways to get a website built",
    approachesIntro:
      "Each has its own logic and its own audience. None is bad in itself: they simply do not meet the same need or the same budget.",
    approaches: [
      {
        name: "Doing it yourself",
        cost: "Monthly subscription",
        reality:
          "The advertised cost is low, but the time you spend on it is not, and the result depends entirely on your skills. The website disappears if the subscription ends.",
      },
      {
        name: "Subscription-based online website builder",
        cost: "Open-ended monthly subscription",
        reality:
          "Quick to get started, but you are renting your presence. After a few years, the total often exceeds the price of a website built for you, and you still own nothing.",
      },
      {
        name: "Freelancer",
        cost: "Per-project payment",
        reality:
          "Good value for money, though it varies a lot from one person to another. The question to ask in your very first conversation: will the code and access credentials be handed over to you at the end?",
      },
      {
        name: "Traditional agency",
        cost: "Per-project payment, higher amount",
        reality:
          "Full-service support, well suited to complex projects. Often oversized — and overpriced — for a simple small-business or tradesperson website.",
      },
    ],
    approachesNote:
      "We do not publish price ranges for the other approaches: rates vary too much from one provider to another and from one year to the next for an average to be honest. Instead, ask each of them for a quote, and compare what remains in your hands at the end.",
    fiveYearTitle: "The math that matters: the cost over five years",
    fiveYearParagraphs: [
      "A website is not something you buy again every six months. The right basis for comparison is therefore not the initial price, but the total over the website's actual lifespan — usually three to five years.",
      "The arithmetic is simple, and you can do it with the figures from any offer. A €20-a-month subscription adds up to €1,200 over five years. At €30, it is €1,800. At €50, €3,000. And at the end of those five years, if you stop paying, you are left with nothing: not the website, not the code and sometimes not even the domain name.",
      "A one-time payment of €500 is still €500 in year five. The only recurring cost is the domain name renewal from the second year onwards, paid directly to the registrar at its public rate — typically a few tens of euros per year, with no markup from us.",
      "This reasoning has a limit worth stating: a website that is never touched gets outdated. If your business changes, the website will need to evolve, and that comes at a cost. The difference is that it is then an expense you decide on, when you decide on it, and that you can entrust to anyone you like — since the code is yours.",
    ],
    modelsTitle: "One-time payment or subscription: what really changes",
    modelsIntro:
      "The price difference between two solutions is hard to judge from the first month's bill. What matters is what remains in your hands the day you want to make a change.",
    modelsHeaders: {
      model: "Model",
      payment: "Payment",
      ownership: "Ownership",
      leaving: "If you leave",
    },
    models: [
      {
        model: "Sitekept",
        payment: "One-time payment",
        ownership: "Code and domain in your name",
        leaving: "You leave with the website",
      },
      {
        model: "Online website builder",
        payment: "Ongoing monthly subscription",
        ownership: "Website hosted on the platform",
        leaving: "The website goes offline when the subscription ends",
      },
      {
        model: "Provider that does not transfer the code",
        payment: "Variable",
        ownership: "The code stays with the provider",
        leaving: "A rebuild is needed to switch",
      },
    ],
    modelsNote:
      "We do not compare amounts: other providers' rates vary too much for an average to mean anything. The column that matters is the last one.",
    questionsTitle: "Six questions to ask any provider before signing",
    questionsIntro:
      "Including us. A quote is hard to compare on price alone: two proposals at the same price can leave you in radically different situations three years later. These six questions reveal the difference before you commit.",
    questions: [
      "Will the source code be handed over to me, in a repository in my name?",
      "Is the domain name registered in my name or in the provider's?",
      "What happens if I stop paying, in six months or in five years?",
      "Can I have someone else make changes without rebuilding everything?",
      "What is excluded from the quote: copy, photos, legal notices?",
      "Does the quoted price include VAT, and is the deposit refundable?",
    ],
    questionsOutro:
      "If an answer is evasive, it is not necessarily in bad faith: many providers have simply never had to put it into words. But now is the time to have it written into the quote, rather than after the website goes live.",
    faqTitle: "Frequently asked questions about website pricing",
    faq: [
      {
        question: "How much does a website cost at Sitekept?",
        answer:
          "The essential business website costs €500 at our launch price, instead of €600. This price is public and comes with no mandatory subscription. Projects that require specific features are quoted individually, based on their technical complexity.",
      },
      {
        question: "Is there a monthly subscription to pay?",
        answer:
          "No. The price covers building the website and putting it online. There is no mandatory subscription to keep the website running. The domain name is free for the first year; renewing it in the following years is your responsibility, directly with the registrar, at its public rate.",
      },
      {
        question: "How does payment work?",
        answer:
          "A 30% deposit is required to start the project, and the balance is due when the website is delivered. Prices are stated in euros, all taxes included. Payment is made by bank transfer or by card.",
      },
      {
        question: "Do I really own the website?",
        answer:
          "Yes. The code is developed and then placed in a repository in your name, and the access credentials are handed over to you. You can update the website, switch providers or host it elsewhere without having to start from scratch.",
      },
      {
        question: "Is the 48-hour turnaround realistic?",
        answer:
          "It applies to simple projects and starts once we have received the deposit and your content. It is the time to launch, not the time from first contact: the more ready your copy and images are, the easier the deadline is to meet.",
      },
      {
        question: "What if my needs are more complex?",
        answer:
          "Specific needs — an online store, a booking system, a client portal, industry-specific integrations — fall outside the scope of the essential business website and are quoted separately, based on their actual technical complexity.",
      },
      {
        question: "Is a €500 website lower in quality?",
        answer:
          "The price comes from the method, not from cutting corners. We start from proven templates adapted to each trade rather than redesigning every screen from a blank page, and we do not bill sales time or project management on a business website. Where we genuinely cover less than an agency, we say so: content production, photos and custom features are not included in this price.",
      },
      {
        question: "Do I have to pay extra for hosting?",
        answer:
          "Launch and hosting are set up as part of the project, and the exact terms are set out in the quote. The only planned recurring cost is the domain name renewal from the second year: it is free for the first year, then paid directly to the registrar at its public rate, with no markup from us.",
      },
    ],
    ctaTitle: "A clear quote within 24 hours",
    ctaDescription:
      "Tell us about your business and your goal. We will get back to you with a simple outline: what is feasible, at what price, and in what timeframe.",
    ctaPrimary: "Request a quote",
    ctaSecondary: "See our work",
  },
};

export function pricingMetadata(locale: SiteLocale): Metadata {
  const copy = COPY[locale];

  return buildPageMetadata({
    title: copy.metaTitle,
    description: copy.metaDescription,
    path: "/tarifs",
    locale,
  });
}

export function PricingView({ locale }: { locale: SiteLocale }) {
  const copy = COPY[locale];
  const href = linkLocalizer(locale);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: copy.breadcrumbHome, path: href("/") },
          { name: copy.breadcrumbPage, path: href("/tarifs") },
        ]}
      />
      <FaqJsonLd items={copy.faq} />

      <section className="bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] px-6 pb-16 pt-28 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
            {copy.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">{copy.intro}</p>
        </div>
      </section>

      <section className="bg-white px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            {copy.plansTitle}
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border-2 border-blue-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
                {copy.essential.badge}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">
                {copy.essential.name}
              </h3>
              <p className="mt-2 text-slate-600">{copy.essential.description}</p>
              <p className="mt-6 flex items-baseline gap-3">
                <span className="text-4xl font-bold text-slate-950">
                  {copy.essential.price}
                </span>
                <span className="text-lg text-slate-400 line-through">
                  {copy.essential.oldPrice}
                </span>
              </p>
              <p className="mt-1 text-sm text-slate-500">{copy.essential.note}</p>
              <Button asChild className="mt-8 w-full bg-blue-600 hover:bg-blue-700">
                <Link href={href("/#contact")}>
                  {copy.essential.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                {copy.advanced.badge}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">
                {copy.advanced.name}
              </h3>
              <p className="mt-2 text-slate-600">{copy.advanced.description}</p>
              <p className="mt-6 text-4xl font-bold text-slate-950">
                {copy.advanced.price}
              </p>
              <p className="mt-1 text-sm text-slate-500">{copy.advanced.note}</p>
              <Button
                asChild
                variant="outline"
                className="mt-8 w-full border-slate-300"
              >
                <Link href={href("/#contact")}>
                  {copy.advanced.cta}
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
            {copy.includedTitle}
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                {copy.includedLabel}
              </h3>
              <ul className="mt-4 space-y-3">
                {copy.included.map((item) => (
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
                {copy.notIncludedLabel}
              </h3>
              <ul className="mt-4 space-y-3">
                {copy.notIncluded.map((item) => (
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
                {copy.notIncludedNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            {copy.factorsTitle}
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600">{copy.factorsIntro}</p>

          <dl className="mt-10 space-y-6">
            {copy.factors.map((item) => (
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

          <p className="mt-8 max-w-3xl text-slate-600">{copy.factorsOutro}</p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            {copy.approachesTitle}
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600">{copy.approachesIntro}</p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {copy.approaches.map((item) => (
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
            {copy.approachesNote}
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            {copy.fiveYearTitle}
          </h2>
          {copy.fiveYearParagraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-slate-600">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            {copy.modelsTitle}
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600">{copy.modelsIntro}</p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-3 pr-4 font-semibold text-slate-900">
                    {copy.modelsHeaders.model}
                  </th>
                  <th className="pb-3 pr-4 font-semibold text-slate-900">
                    {copy.modelsHeaders.payment}
                  </th>
                  <th className="pb-3 pr-4 font-semibold text-slate-900">
                    {copy.modelsHeaders.ownership}
                  </th>
                  <th className="pb-3 font-semibold text-slate-900">
                    {copy.modelsHeaders.leaving}
                  </th>
                </tr>
              </thead>
              <tbody>
                {copy.models.map((row) => (
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

          <p className="mt-6 text-sm text-slate-500">{copy.modelsNote}</p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            {copy.questionsTitle}
          </h2>
          <p className="mt-4 text-slate-600">{copy.questionsIntro}</p>

          <ol className="mt-8 space-y-4">
            {copy.questions.map((question, index) => (
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

          <p className="mt-8 text-slate-600">{copy.questionsOutro}</p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            {copy.faqTitle}
          </h2>
          <dl className="mt-10 space-y-8">
            {copy.faq.map((item) => (
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
            {copy.ctaTitle}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            {copy.ctaDescription}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href={href("/#contact")}>
                {copy.ctaPrimary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-600 bg-transparent text-white hover:bg-slate-800"
            >
              <Link href={href("/realization")}>{copy.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
