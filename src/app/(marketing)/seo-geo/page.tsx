import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getBlogPostBySlug,
  getLocalizedText,
  getLocalizedValue,
  seoGeoPageContent,
} from "@/content/site-content";
import { buildPageMetadata } from "@/lib/page-metadata";
import { getSiteLocale } from "@/lib/site-messages";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/structured-data";

/**
 * Page pilier SEO/GEO.
 *
 * Prudence rédactionnelle assumée : aucun moteur de réponse ne publie ses
 * critères de sélection des sources. Tout ce qui est affirmé ici porte sur des
 * mécaniques observables — exploration, indexation, citation — et les limites
 * de ce que l'on sait sont dites explicitement. Une agence qui vend du GEO en
 * prétendant connaître l'algorithme se disqualifie auprès des lecteurs
 * avertis.
 */

const SEO_VS_GEO = [
  {
    aspect: "La question posée",
    seo: "Quelques mots-clés tapés dans une barre de recherche.",
    geo: "Une question entière, souvent longue et formulée à l'oral.",
  },
  {
    aspect: "Ce que reçoit l'utilisateur",
    seo: "Une liste de liens qu'il ouvre lui-même.",
    geo: "Une réponse rédigée, avec quelques sources citées.",
  },
  {
    aspect: "Ce qui vous amène du trafic",
    seo: "Votre position dans la liste.",
    geo: "Le fait d'être cité dans la réponse, et que la citation donne envie de cliquer.",
  },
  {
    aspect: "Le format qui fonctionne",
    seo: "Une page complète qui couvre un sujet.",
    geo: "Un passage court qui répond exactement à une question, extractible tel quel.",
  },
];

const CITABLE = [
  {
    title: "Répondre avant d'argumenter",
    detail:
      "Une page qui donne sa réponse dans les deux premières phrases est reprise ; une page qui plante le décor pendant six paragraphes ne l'est pas. Le raisonnement peut suivre, mais il ne doit pas précéder.",
  },
  {
    title: "Écrire les questions telles qu'on les pose",
    detail:
      "« Combien coûte un site internet ? » plutôt que « Nos tarifs ». Un intertitre formulé comme une question réelle correspond littéralement à ce que l'utilisateur a tapé.",
  },
  {
    title: "Donner des éléments vérifiables",
    detail:
      "Chiffres, délais, conditions, dates. Une phrase qui contient une donnée précise est bien plus citable qu'une phrase d'ambiance, parce qu'elle apporte quelque chose que le modèle ne peut pas produire seul.",
  },
  {
    title: "Dire les limites de ce que vous avancez",
    detail:
      "Contre-intuitif, et pourtant décisif. Un contenu qui reconnaît les cas où sa solution ne convient pas est perçu comme plus fiable, par les lecteurs comme par les systèmes entraînés à repérer le discours purement promotionnel.",
  },
  {
    title: "Rester lisible sans mise en forme",
    detail:
      "Un passage extrait perd vos couleurs, vos encadrés et vos icônes. S'il ne se comprend plus une fois réduit à du texte brut, il ne sera pas repris.",
  },
  {
    title: "Ne pas enfermer l'information dans une image ou un PDF",
    detail:
      "Une carte de restaurant en photo, des tarifs dans un PDF, un tableau en capture d'écran : ce contenu est invisible pour l'indexation comme pour les moteurs de réponse.",
  },
];

const SEO_GEO_FAQ = [
  {
    question: "Quelle est la différence entre le SEO et le GEO ?",
    answer:
      "Le SEO vise à placer votre page dans une liste de résultats, où l'utilisateur choisit sur quoi cliquer. Le GEO (generative engine optimization) vise à faire citer votre contenu dans une réponse rédigée par une IA, qui ne propose que quelques sources. Les deux reposent sur un site explorable, rapide et clair.",
  },
  {
    question: "Faut-il bloquer les robots des IA dans son robots.txt ?",
    answer:
      "Pour une entreprise qui cherche des clients, il vaut généralement mieux laisser entrer les robots de recherche des IA. Les bloquer peut vous retirer de leurs réponses, alors que d'autres robots servent à entraîner les modèles. Sitekept laisse ces robots accéder à son contenu ; un éditeur dont le contenu est le produit peut choisir l'inverse.",
  },
  {
    question: "Le GEO remplace-t-il le référencement classique ?",
    answer:
      "Non, et rien n'indique aujourd'hui que ce sera le cas. Les moteurs de réponse s'appuient largement sur des index de recherche pour trouver leurs sources. Un site invisible pour Google a peu de chances d'être cité par une IA : le GEO est une couche supplémentaire, pas un remplacement.",
  },
  {
    question: "Combien de temps avant de voir des résultats ?",
    answer:
      "Comptez quelques semaines avant de juger l'effet d'une correction technique : indexation, vitesse, structure. Le positionnement sur des requêtes concurrentielles se compte en mois et dépend du contenu publié, de sa régularité. Personne ne contrôle l'algorithme, donc personne ne peut garantir un classement ni un délai précis.",
  },
];

/**
 * Sources officielles affichées sous chaque réponse de la FAQ. Elles ne font
 * pas partie du balisage FAQPage : la réponse balisée reste identique au texte
 * visible, la source la suit dans un paragraphe distinct.
 */
const SEO_GEO_FAQ_SOURCES: { href: string; label: string }[][] = [
  [
    {
      href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr",
      label: "Google Search Central, Bien débuter en référencement naturel (SEO)",
    },
  ],
  [
    {
      href: "https://developers.openai.com/api/docs/bots",
      label: "OpenAI, Overview of OpenAI Crawlers",
    },
    {
      href: "https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler",
      label: "Anthropic, robots d'exploration",
    },
    {
      href: "https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers?hl=fr",
      label: "Google, robots d'exploration communs",
    },
    {
      href: "https://docs.perplexity.ai/docs/resources/perplexity-crawlers",
      label: "Perplexity, Perplexity Crawlers",
    },
  ],
  [
    {
      href: "https://developers.google.com/search/docs/appearance/ai-features?hl=fr",
      label: "Google Search Central, Fonctionnalités d'IA et votre site Web",
    },
  ],
  [
    {
      href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr",
      label: "Google Search Central, Bien débuter en référencement naturel (SEO)",
    },
    {
      href: "https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=fr",
      label: "Google Search Central, Avez-vous besoin d'un référenceur ?",
    },
  ],
];

/** Phrase qui précise ce que la source confirme, sous chaque réponse. */
const SEO_GEO_FAQ_SOURCE_NOTES = [
  "Google définit le SEO ainsi : aider les moteurs de recherche à interpréter votre contenu et les internautes à trouver votre site.",
  "Ces éditeurs distinguent leurs robots selon l'usage : recherche, requête d'un utilisateur ou entraînement des modèles.",
  "Pour Google, une page doit être indexée et pouvoir s'afficher avec un extrait pour apparaître comme lien dans ses réponses IA.",
  "Google conseille d'attendre quelques semaines pour évaluer un changement, et rappelle que personne ne peut garantir la première position.",
];

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getSiteLocale();

  return buildPageMetadata({
    title:
      locale === "fr"
        ? "Référencement SEO et GEO : rendre un site visible | Sitekept"
        : "SEO and GEO: making your website visible | Sitekept",
    description:
      locale === "fr"
        ? "Comment un site devient visible sur Google et dans les réponses IA : structure, contenu, vitesse. Nos sites sont optimisés dès la livraison."
        : "Understand why organic search matters, what a website needs to be truly optimized, and how to go deeper on the Sitekept blog.",
    path: "/seo-geo",
  });
}

export default async function SeoGeoPage() {
  const locale = await getSiteLocale();
  const seoArticle = getBlogPostBySlug(
    "pourquoi-optimisation-referencement-naturel-importante"
  );
  const visibilityArticle = getBlogPostBySlug("site-optimise-seo-geo");

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "SEO et GEO", path: "/seo-geo" },
        ]}
      />
      <ServiceJsonLd
        path="/seo-geo"
        name="Optimisation SEO et GEO"
        description={getLocalizedText(seoGeoPageContent.intro, locale)}
        serviceType="Optimisation SEO"
      />
      <FaqJsonLd items={SEO_GEO_FAQ} />

      <section className="bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] px-6 pb-14 pt-28 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
            {getLocalizedText(seoGeoPageContent.eyebrow, locale)}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {getLocalizedText(seoGeoPageContent.title, locale)}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {getLocalizedText(seoGeoPageContent.intro, locale)}
          </p>
        </div>
      </section>

      <section className="bg-white px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-10">
          <section className="rounded-md border border-blue-100 bg-slate-50 p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              {getLocalizedText(seoGeoPageContent.importanceTitle, locale)}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-slate-700">
              {getLocalizedValue(seoGeoPageContent.importanceParagraphs, locale).map(
                (paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                )
              )}
            </div>
            {seoArticle ? (
              <Button
                asChild
                variant="outline"
                className="mt-6 border-blue-200 bg-white text-slate-900 hover:bg-blue-50"
              >
                <Link href={`/blog/${seoArticle.slug}`}>
                  {getLocalizedText(seoGeoPageContent.primaryCta, locale)}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : null}
          </section>

          <section className="rounded-md border border-blue-100 bg-slate-50 p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              {getLocalizedText(seoGeoPageContent.optimizationTitle, locale)}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-slate-700">
              <p>
                {
                  getLocalizedValue(
                    seoGeoPageContent.optimizationParagraphs,
                    locale
                  )[0]
                }
              </p>
            </div>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
              {getLocalizedValue(seoGeoPageContent.optimizationBullets, locale).map(
                (bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                    <span>{bullet}</span>
                  </li>
                )
              )}
            </ul>
            <div className="mt-6 space-y-4 text-base leading-8 text-slate-700">
              {getLocalizedValue(seoGeoPageContent.optimizationParagraphs, locale)
                .slice(1)
                .map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Source Google&nbsp;:{" "}
              <a
                href="https://developers.google.com/search/docs/appearance/ai-features?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-700 underline underline-offset-4"
              >
                Fonctionnalités d&apos;IA et votre site Web
              </a>
              . Les bonnes pratiques SEO restent valables pour ces fonctions,
              sans exigence technique supplémentaire.
            </p>
            {visibilityArticle ? (
              <Button
                asChild
                variant="outline"
                className="mt-6 border-blue-200 bg-white text-slate-900 hover:bg-blue-50"
              >
                <Link href={`/blog/${visibilityArticle.slug}`}>
                  {getLocalizedText(seoGeoPageContent.secondaryCta, locale)}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : null}
          </section>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Quelle différence, concrètement, entre le SEO et le GEO&nbsp;?
          </h2>
          <p className="mt-4 text-slate-600">
            Le SEO consiste à apparaître dans une liste de résultats que
            l&apos;utilisateur parcourt. Le GEO —
            <em> generative engine optimization</em> — consiste à être cité dans
            une réponse rédigée par une intelligence artificielle. La
            distinction paraît mince&nbsp;; elle change pourtant la façon
            d&apos;écrire une page.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-300">
                  <th className="pb-3 pr-4 font-semibold text-slate-900"></th>
                  <th className="pb-3 pr-4 font-semibold text-slate-900">
                    Recherche classique
                  </th>
                  <th className="pb-3 font-semibold text-slate-900">
                    Moteur de réponse
                  </th>
                </tr>
              </thead>
              <tbody>
                {SEO_VS_GEO.map((row) => (
                  <tr key={row.aspect} className="border-b border-slate-200">
                    <td className="py-4 pr-4 font-medium text-slate-900">
                      {row.aspect}
                    </td>
                    <td className="py-4 pr-4 text-slate-600">{row.seo}</td>
                    <td className="py-4 text-slate-600">{row.geo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-slate-600">
            La conséquence pratique est simple&nbsp;: sur une liste de
            résultats, dix positions sont visibles et l&apos;utilisateur
            arbitre. Dans une réponse générée, deux ou trois sources sont
            citées. La concurrence pour y figurer est donc plus dure, et le
            format du contenu compte davantage que sa longueur.
          </p>
          <p className="mt-4 text-slate-600">
            Pour les bases, lisez notre article{" "}
            <Link
              href="/blog/qu-est-ce-que-le-seo-et-le-geo"
              className="font-medium text-blue-700 underline underline-offset-4"
            >
              SEO et GEO, c&apos;est quoi&nbsp;?
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Comment un moteur de réponse choisit-il ce qu&apos;il cite&nbsp;?
          </h2>
          <p className="mt-4 text-slate-600">
            Pour une question d&apos;actualité ou locale, la plupart des moteurs
            de réponse lancent d&apos;abord une recherche. Ils récupèrent
            quelques pages, en extraient les passages utiles, puis rédigent une
            synthèse en citant leurs sources. Aucun de ces systèmes ne publie
            ses critères de sélection&nbsp;: toute agence qui prétend les
            connaître invente.
          </p>
          <p className="mt-4 text-slate-600">
            La mécanique générale est observable, et elle suffit à travailler
            sérieusement. Trois conditions en découlent.
          </p>
          <ol className="mt-8 space-y-5">
            <li className="border-l-2 border-blue-100 pl-5">
              <span className="font-semibold text-slate-900">
                Être trouvable.
              </span>{" "}
              <span className="text-slate-700">
                Si votre page n&apos;est pas indexée, ou si vos robots.txt
                interdisent l&apos;accès aux explorateurs concernés, la question
                est réglée avant même de se poser.
              </span>
            </li>
            <li className="border-l-2 border-blue-100 pl-5">
              <span className="font-semibold text-slate-900">
                Être compréhensible sans contexte.
              </span>{" "}
              <span className="text-slate-700">
                Le système extrait un passage, pas votre page entière. Ce
                passage doit se suffire à lui-même une fois sorti de sa mise en
                page.
              </span>
            </li>
            <li className="border-l-2 border-blue-100 pl-5">
              <span className="font-semibold text-slate-900">
                Apporter quelque chose de vérifiable.
              </span>{" "}
              <span className="text-slate-700">
                Un modèle sait déjà rédiger des généralités. Ce qu&apos;il va
                chercher dehors, ce sont des faits qu&apos;il ne possède
                pas&nbsp;: des prix, des délais, des conditions, des dates.
              </span>
            </li>
          </ol>
          <p className="mt-6 text-sm text-slate-600">
            Source Google&nbsp;:{" "}
            <a
              href="https://developers.google.com/search/docs/appearance/ai-features?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-700 underline underline-offset-4"
            >
              Fonctionnalités d&apos;IA et votre site Web
            </a>
            . Une page doit être indexée et pouvoir s&apos;afficher avec un
            extrait pour apparaître comme lien dans ses réponses IA.
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Source OpenAI&nbsp;:{" "}
            <a
              href="https://developers.openai.com/api/docs/bots"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-700 underline underline-offset-4"
            >
              Overview of OpenAI Crawlers
            </a>
            . Le robot de recherche OAI-SearchBot et le robot d&apos;entraînement
            GPTBot se gèrent séparément dans le fichier robots.txt.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Six règles pour rendre une page citable
          </h2>
          <p className="mt-4 text-slate-600">
            Elles ne relèvent d&apos;aucune astuce technique. Ce sont des
            principes de rédaction, applicables à n&apos;importe quel site, et
            qui améliorent aussi la lisibilité pour les humains — ce qui reste,
            au passage, le meilleur indicateur.
          </p>
          <dl className="mt-10 space-y-8">
            {CITABLE.map((item) => (
              <div key={item.title}>
                <dt className="text-lg font-semibold text-slate-900">
                  {item.title}
                </dt>
                <dd className="mt-2 text-slate-600">{item.detail}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm text-slate-600">
            Source Google&nbsp;:{" "}
            <a
              href="https://developers.google.com/search/docs/appearance/ai-features?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-700 underline underline-offset-4"
            >
              Fonctionnalités d&apos;IA et votre site Web
            </a>
            . Elle conseille de rendre le contenu important disponible sous
            forme de texte.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Ce qui n&apos;a pas changé
          </h2>
          <p className="mt-4 text-slate-600">
            L&apos;arrivée des moteurs de réponse n&apos;a rendu obsolète aucun
            fondamental. Elle les a plutôt rendus plus déterminants, parce
            qu&apos;un site mal construit est écarté plus tôt dans la chaîne.
          </p>
          <p className="mt-4 text-slate-600">Un site doit toujours&nbsp;:</p>
          <ul className="mt-8 space-y-5">
            <li className="border-l-2 border-blue-100 pl-5 text-slate-700">
              être explorable et indexable&nbsp;;
            </li>
            <li className="border-l-2 border-blue-100 pl-5 text-slate-700">
              servir une seule adresse canonique&nbsp;;
            </li>
            <li className="border-l-2 border-blue-100 pl-5 text-slate-700">
              se charger vite et être lisible sur mobile&nbsp;;
            </li>
            <li className="border-l-2 border-blue-100 pl-5 text-slate-700">
              présenter une hiérarchie de titres cohérente&nbsp;;
            </li>
            <li className="border-l-2 border-blue-100 pl-5 text-slate-700">
              déclarer ce qu&apos;il est au moyen de données structurées&nbsp;;
            </li>
            <li className="border-l-2 border-blue-100 pl-5 text-slate-700">
              proposer un contenu qui répond réellement à une intention.
            </li>
          </ul>
          <p className="mt-8 text-slate-600">
            Ce socle sert la recherche classique&nbsp;; il conditionne aussi
            l&apos;accès aux réponses génératives.
          </p>
          <p className="mt-4 text-slate-600">
            Pour vérifier ces points avant une mise en ligne, suivez la{" "}
            <Link
              href="/blog/checklist-seo-avant-mise-en-ligne"
              className="font-medium text-blue-700 underline underline-offset-4"
            >
              checklist SEO
            </Link>
            .
          </p>
          <p className="mt-4 text-sm text-slate-600">
            Sources Google&nbsp;:{" "}
            <a
              href="https://developers.google.com/search/docs/essentials?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-700 underline underline-offset-4"
            >
              Essentiels de la recherche Google
            </a>{" "}
            et{" "}
            <a
              href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-700 underline underline-offset-4"
            >
              Présentation du balisage de données structurées
            </a>
            .
          </p>
          <p className="mt-4 text-slate-600">
            Autrement dit&nbsp;: il n&apos;existe pas de raccourci GEO qui
            dispenserait du travail SEO. Un site invisible pour Google a très
            peu de chances d&apos;être cité par une intelligence artificielle,
            puisque celle-ci s&apos;appuie largement sur les mêmes index.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Ce que nous faisons à la livraison, et ce que nous ne promettons pas
          </h2>
          <p className="mt-4 text-slate-600">
            Chaque site livré part avec les fondations en place&nbsp;:
          </p>
          <ul className="mt-8 space-y-5">
            <li className="border-l-2 border-blue-100 pl-5 text-slate-700">
              une structure de titres cohérente&nbsp;;
            </li>
            <li className="border-l-2 border-blue-100 pl-5 text-slate-700">
              des balises title et description propres à chaque page&nbsp;;
            </li>
            <li className="border-l-2 border-blue-100 pl-5 text-slate-700">
              une adresse canonique unique&nbsp;;
            </li>
            <li className="border-l-2 border-blue-100 pl-5 text-slate-700">
              un sitemap et un fichier robots.txt corrects&nbsp;;
            </li>
            <li className="border-l-2 border-blue-100 pl-5 text-slate-700">
              des données structurées décrivant l&apos;activité&nbsp;;
            </li>
            <li className="border-l-2 border-blue-100 pl-5 text-slate-700">
              des images optimisées et un rendu rapide.
            </li>
          </ul>
          <p className="mt-4 text-slate-600">
            Ce que nous ne promettons pas, en revanche&nbsp;: une position dans
            les résultats, un délai pour l&apos;obtenir, ou une citation par tel
            ou tel assistant. Personne ne contrôle ces classements, et un
            prestataire qui les garantit vend une certitude qu&apos;il ne
            possède pas. Ce qui se garantit, c&apos;est la qualité des
            fondations — le reste dépend du contenu publié ensuite, et de sa
            régularité.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Questions fréquentes sur le SEO et le GEO
          </h2>
          <dl className="mt-10 space-y-8">
            {SEO_GEO_FAQ.map((item, index) => (
              <div key={item.question}>
                <dt className="text-lg font-semibold text-slate-900">
                  {item.question}
                </dt>
                <dd className="mt-2 text-slate-600">{item.answer}</dd>
                <dd className="mt-2 text-sm text-slate-600">
                  {SEO_GEO_FAQ_SOURCE_NOTES[index]} Sources&nbsp;:{" "}
                  {SEO_GEO_FAQ_SOURCES[index].map((source, sourceIndex) => (
                    <span key={source.href}>
                      {sourceIndex > 0 ? " ; " : null}
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-700 underline underline-offset-4"
                      >
                        {source.label}
                      </a>
                    </span>
                  ))}
                  .
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-slate-600">
            Pour aller plus loin&nbsp;: notre{" "}
            <Link
              href="/blog"
              className="font-medium text-blue-700 underline underline-offset-4"
            >
              blog
            </Link>{" "}
            détaille chacun de ces sujets, et la{" "}
            <Link
              href="/tarifs"
              className="font-medium text-blue-700 underline underline-offset-4"
            >
              page tarifs
            </Link>{" "}
            précise ce qui est inclus dans un site livré.
          </p>
        </div>
      </section>
    </>
  );
}
