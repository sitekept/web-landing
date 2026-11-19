import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getBlogPostBySlug,
  getLocalizedText,
  getLocalizedValue,
  seoGeoPageContent,
  type SiteLocale,
} from "@/content/site-content";
import { buildPageMetadata } from "@/lib/page-metadata";
import { linkLocalizer } from "@/lib/localized-routes";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/structured-data";

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

type LinkFn = (frenchPath: string) => string;

const linkClassName = "font-medium text-blue-700 underline underline-offset-4";

const COPY = {
  fr: {
    metaTitle: "SEO et GEO : rendre votre site visible | Sitekept",
    metaDescription:
      "Comment un site devient visible sur Google et dans les réponses IA : structure, contenu, vitesse. Nos sites sont optimisés dès la livraison.",
    breadcrumbHome: "Accueil",
    breadcrumbPage: "SEO et GEO",
    seoVsGeo: [
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
    ],
    citable: [
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
    ],
    faq: [
      {
        question: "Quelle est la différence entre le SEO et le GEO ?",
        answer:
          "Le SEO vise à faire apparaître votre page dans une liste de résultats, où l'utilisateur choisit ensuite sur quoi cliquer. Le GEO — generative engine optimization — vise à être cité dans une réponse rédigée par une intelligence artificielle, qui ne propose que quelques sources. Les deux reposent largement sur les mêmes fondations techniques : un site explorable, rapide, clairement structuré. Le GEO y ajoute une exigence de formulation, parce qu'un passage doit pouvoir être extrait et compris hors de son contexte.",
      },
      {
        question: "Faut-il bloquer les robots des IA dans son robots.txt ?",
        answer:
          "C'est un arbitrage, pas une évidence. Les bloquer protège votre contenu d'être réutilisé pour entraîner des modèles, mais vous retire aussi des réponses que ces systèmes produisent — donc d'un canal d'acquisition. Pour une entreprise qui cherche des clients, l'ouverture est généralement le bon choix. Pour un éditeur dont le contenu est le produit, la réponse peut être inverse. Le site de Sitekept laisse ces robots accéder au contenu, et c'est un choix délibéré.",
      },
      {
        question: "Le GEO remplace-t-il le référencement classique ?",
        answer:
          "Non, et rien n'indique aujourd'hui que ce sera le cas. La recherche classique reste très majoritaire en volume, et les moteurs de réponse s'appuient eux-mêmes largement sur des index de recherche pour aller chercher leurs sources. Un site invisible pour Google a peu de chances d'être cité par une IA. Le GEO est une couche supplémentaire, pas un remplacement.",
      },
      {
        question: "Combien de temps avant de voir des résultats ?",
        answer:
          "Les corrections techniques — indexation, vitesse, structure — produisent leurs effets en quelques semaines. Le positionnement sur des requêtes concurrentielles se compte en mois, et dépend surtout du contenu publié et de sa régularité. Méfiez-vous de tout prestataire qui promet une position ou un délai précis : personne ne contrôle l'algorithme, et personne ne peut garantir un classement.",
      },
    ],
    differenceTitle: "SEO et GEO\u00a0: quelle différence, concrètement",
    differenceIntro: (
      <>
        Le SEO consiste à apparaître dans une liste de résultats. Le GEO —
        <em> generative engine optimization</em> — consiste à être cité dans
        une réponse rédigée par une intelligence artificielle. La distinction
        paraît mince&nbsp;; elle change pourtant la façon d&apos;écrire une
        page.
      </>
    ),
    tableSeo: "Recherche classique",
    tableGeo: "Moteur de réponse",
    differenceOutro:
      "La conséquence pratique est simple\u00a0: sur une liste de résultats, dix positions sont visibles et l'utilisateur arbitre. Dans une réponse générée, deux ou trois sources sont citées. La concurrence pour y figurer est donc plus dure, et le format du contenu compte davantage que sa longueur.",
    howTitle: "Comment un moteur de réponse choisit ce qu'il cite",
    howParagraphs: [
      "Commençons par ce que personne ne sait\u00a0: aucun de ces systèmes ne publie ses critères de sélection des sources. Toute agence qui prétend connaître l'algorithme invente. En revanche, la mécanique générale est observable, et elle suffit à travailler sérieusement.",
      "La plupart des moteurs de réponse ne puisent pas dans leur mémoire d'entraînement pour répondre à une question d'actualité ou locale. Ils lancent une recherche, récupèrent quelques pages, en extraient les passages utiles, puis rédigent une synthèse en citant leurs sources. Trois conditions découlent de ce fonctionnement.",
    ],
    conditions: [
      {
        title: "Être trouvable.",
        detail:
          "Si votre page n'est pas indexée, ou si vos robots.txt interdisent l'accès aux explorateurs concernés, la question est réglée avant même de se poser.",
      },
      {
        title: "Être compréhensible sans contexte.",
        detail:
          "Le système extrait un passage, pas votre page entière. Ce passage doit se suffire à lui-même une fois sorti de sa mise en page.",
      },
      {
        title: "Apporter quelque chose de vérifiable.",
        detail:
          "Un modèle sait déjà rédiger des généralités. Ce qu'il va chercher dehors, ce sont des faits qu'il ne possède pas\u00a0: des prix, des délais, des conditions, des dates.",
      },
    ],
    rulesTitle: "Six règles pour rendre une page citable",
    rulesIntro:
      "Elles ne relèvent d'aucune astuce technique. Ce sont des principes de rédaction, applicables à n'importe quel site, et qui améliorent aussi la lisibilité pour les humains — ce qui reste, au passage, le meilleur indicateur.",
    unchangedTitle: "Ce qui n'a pas changé",
    unchangedParagraphs: [
      "L'arrivée des moteurs de réponse n'a rendu obsolète aucun fondamental. Elle les a plutôt rendus plus déterminants, parce qu'un site mal construit est écarté plus tôt dans la chaîne.",
      "Un site doit toujours être explorable et indexable, servir une seule adresse canonique, se charger vite, être lisible sur mobile, et présenter une hiérarchie de titres cohérente. Il doit toujours déclarer ce qu'il est au moyen de données structurées, et toujours proposer un contenu qui répond réellement à une intention. Ce socle sert la recherche classique\u00a0; il conditionne aussi l'accès aux réponses génératives.",
      "Autrement dit\u00a0: il n'existe pas de raccourci GEO qui dispenserait du travail SEO. Un site invisible pour Google a très peu de chances d'être cité par une intelligence artificielle, puisque celle-ci s'appuie largement sur les mêmes index.",
    ],
    deliveryTitle:
      "Ce que nous faisons à la livraison, et ce que nous ne promettons pas",
    deliveryParagraphs: [
      "Chaque site livré part avec les fondations en place\u00a0: une structure de titres cohérente, des balises title et description propres à chaque page, une adresse canonique unique, un sitemap et un fichier robots.txt corrects, des données structurées décrivant l'activité, des images optimisées et un rendu rapide.",
      "Ce que nous ne promettons pas, en revanche\u00a0: une position dans les résultats, un délai pour l'obtenir, ou une citation par tel ou tel assistant. Personne ne contrôle ces classements, et un prestataire qui les garantit vend une certitude qu'il ne possède pas. Ce qui se garantit, c'est la qualité des fondations — le reste dépend du contenu publié ensuite, et de sa régularité.",
    ],
    faqTitle: "Questions fréquentes sur le SEO et le GEO",
    closing: (href: LinkFn) => (
      <>
        Pour aller plus loin&nbsp;: notre{" "}
        <Link href={href("/blog")} className={linkClassName}>
          blog
        </Link>{" "}
        détaille chacun de ces sujets, et la{" "}
        <Link href={href("/tarifs")} className={linkClassName}>
          page tarifs
        </Link>{" "}
        précise ce qui est inclus dans un site livré.
      </>
    ),
  },
  en: {
    metaTitle: "SEO and GEO: making your website visible | Sitekept",
    metaDescription:
      "How a website becomes visible on Google and in AI answers: structure, content, speed. Our websites are optimized from day one.",
    breadcrumbHome: "Home",
    breadcrumbPage: "SEO and GEO",
    seoVsGeo: [
      {
        aspect: "The question asked",
        seo: "A few keywords typed into a search bar.",
        geo: "A full question, often long and phrased the way people speak.",
      },
      {
        aspect: "What the user gets",
        seo: "A list of links they open themselves.",
        geo: "A written answer, with a few cited sources.",
      },
      {
        aspect: "What brings you traffic",
        seo: "Your position in the list.",
        geo: "Being cited in the answer, with a citation that makes people want to click.",
      },
      {
        aspect: "The format that works",
        seo: "A comprehensive page that covers a topic.",
        geo: "A short passage that answers one question exactly and can be extracted as is.",
      },
    ],
    citable: [
      {
        title: "Answer before you argue",
        detail:
          "A page that gives its answer in the first two sentences gets picked up; a page that spends six paragraphs setting the scene does not. The reasoning can follow, but it must not come first.",
      },
      {
        title: "Write questions the way people ask them",
        detail:
          "“How much does a website cost?” rather than “Our pricing”. A subheading phrased as a real question literally matches what the user typed.",
      },
      {
        title: "Provide verifiable facts",
        detail:
          "Figures, timeframes, conditions, dates. A sentence that contains a precise piece of data is far more citable than a generic one, because it brings something the model cannot produce on its own.",
      },
      {
        title: "State the limits of your claims",
        detail:
          "Counterintuitive, yet decisive. Content that acknowledges when its solution is not the right fit is seen as more trustworthy, by readers and by systems trained to spot purely promotional language.",
      },
      {
        title: "Stay readable without formatting",
        detail:
          "An extracted passage loses your colors, boxes and icons. If it no longer makes sense once reduced to plain text, it will not be used.",
      },
      {
        title: "Don't lock information inside an image or a PDF",
        detail:
          "A restaurant menu as a photo, prices in a PDF, a table as a screenshot: this content is invisible to indexing and to answer engines alike.",
      },
    ],
    faq: [
      {
        question: "What is the difference between SEO and GEO?",
        answer:
          "SEO aims to get your page into a list of results, where the user then chooses what to click. GEO — generative engine optimization — aims to get you cited in an answer written by artificial intelligence, which offers only a handful of sources. Both rely largely on the same technical foundations: a website that is crawlable, fast and clearly structured. GEO adds a requirement on wording, because a passage must be extractable and understandable out of context.",
      },
      {
        question: "Should you block AI crawlers in your robots.txt?",
        answer:
          "It is a trade-off, not a given. Blocking them prevents your content from being reused to train models, but it also removes you from the answers these systems produce — and therefore from an acquisition channel. For a business looking for customers, staying open is usually the right choice. For a publisher whose content is the product, the answer may be the opposite. The Sitekept website lets these crawlers access its content, and that is a deliberate choice.",
      },
      {
        question: "Is GEO replacing traditional SEO?",
        answer:
          "No, and nothing currently suggests that it will. Traditional search still accounts for the vast majority of volume, and answer engines themselves rely heavily on search indexes to find their sources. A website that is invisible to Google has little chance of being cited by an AI. GEO is an additional layer, not a replacement.",
      },
      {
        question: "How long before you see results?",
        answer:
          "Technical fixes — indexing, speed, structure — take effect within a few weeks. Ranking for competitive queries takes months, and depends mostly on the content you publish and how consistently you publish it. Be wary of any provider who promises a specific position or timeframe: no one controls the algorithm, and no one can guarantee a ranking.",
      },
    ],
    differenceTitle: "SEO and GEO: what is the difference, in practice?",
    differenceIntro: (
      <>
        SEO is about appearing in a list of results. GEO —{" "}
        <em>generative engine optimization</em> — is about being cited in an
        answer written by artificial intelligence. The distinction may seem
        slight, yet it changes the way a page should be written.
      </>
    ),
    tableSeo: "Traditional search",
    tableGeo: "Answer engine",
    differenceOutro:
      "The practical consequence is simple: in a list of results, ten positions are visible and the user decides. In a generated answer, two or three sources are cited. Competition to appear there is therefore tougher, and the format of the content matters more than its length.",
    howTitle: "How an answer engine chooses what to cite",
    howParagraphs: [
      "Let's start with what nobody knows: none of these systems publishes its criteria for selecting sources. Any agency that claims to know the algorithm is making it up. The general mechanics, however, can be observed, and they are enough to do serious work.",
      "Most answer engines do not draw on their training data to answer a question about current events or a local query. They run a search, retrieve a few pages, extract the useful passages, then write a summary that cites its sources. Three conditions follow from how this works.",
    ],
    conditions: [
      {
        title: "Be findable.",
        detail:
          "If your page is not indexed, or if your robots.txt blocks the crawlers in question, the matter is settled before it even comes up.",
      },
      {
        title: "Be understandable without context.",
        detail:
          "The system extracts a passage, not your whole page. That passage has to stand on its own once it is taken out of its layout.",
      },
      {
        title: "Bring something verifiable.",
        detail:
          "A model can already write generalities. What it looks for elsewhere are facts it does not have: prices, timeframes, conditions, dates.",
      },
    ],
    rulesTitle: "Six rules for making a page citable",
    rulesIntro:
      "None of them is a technical trick. They are writing principles that apply to any website and also make it easier for humans to read — which, incidentally, remains the best indicator.",
    unchangedTitle: "What hasn't changed",
    unchangedParagraphs: [
      "The arrival of answer engines has not made any of the fundamentals obsolete. If anything, it has made them more decisive, because a poorly built website is ruled out earlier in the chain.",
      "A website still needs to be crawlable and indexable, serve a single canonical URL, load quickly, read well on mobile and have a consistent heading hierarchy. It still needs to declare what it is through structured data, and to offer content that genuinely meets a search intent. This foundation serves traditional search, and it also determines access to generative answers.",
      "In other words, there is no GEO shortcut that lets you skip the SEO work. A website that is invisible to Google has very little chance of being cited by artificial intelligence, since AI relies largely on the same indexes.",
    ],
    deliveryTitle: "What we do at delivery, and what we don't promise",
    deliveryParagraphs: [
      "Every website we deliver comes with the foundations in place: a consistent heading structure, a unique title and description tag for each page, a single canonical URL, a correct sitemap and robots.txt file, structured data describing the business, optimized images and fast rendering.",
      "What we do not promise, on the other hand, is a position in the results, a timeframe for reaching it, or a citation by any particular assistant. No one controls these rankings, and a provider who guarantees them is selling a certainty they do not have. What can be guaranteed is the quality of the foundations — the rest depends on the content you publish afterwards, and how consistently you publish it.",
    ],
    faqTitle: "Frequently asked questions about SEO and GEO",
    closing: (href: LinkFn) => (
      <>
        To go further, our{" "}
        <Link href={href("/blog")} className={linkClassName}>
          blog
        </Link>{" "}
        covers each of these topics in detail, and our{" "}
        <Link href={href("/tarifs")} className={linkClassName}>
          pricing page
        </Link>{" "}
        explains what is included in every website we deliver.
      </>
    ),
  },
};

export function seoGeoMetadata(locale: SiteLocale): Metadata {
  const copy = COPY[locale];

  return buildPageMetadata({
    title: copy.metaTitle,
    description: copy.metaDescription,
    path: "/seo-geo",
    locale,
  });
}

export function SeoGeoView({ locale }: { locale: SiteLocale }) {
  const copy = COPY[locale];
  const href = linkLocalizer(locale);
  const seoArticle = getBlogPostBySlug(
    "pourquoi-optimisation-referencement-naturel-importante"
  );
  const visibilityArticle = getBlogPostBySlug("site-optimise-seo-geo");

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: copy.breadcrumbHome, path: href("/") },
          { name: copy.breadcrumbPage, path: href("/seo-geo") },
        ]}
      />
      <FaqJsonLd items={copy.faq} />

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
                <Link href={href(`/blog/${seoArticle.slug}`)}>
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
              {getLocalizedValue(seoGeoPageContent.optimizationParagraphs, locale).map(
                (paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                )
              )}
            </div>
            {visibilityArticle ? (
              <Button
                asChild
                variant="outline"
                className="mt-6 border-blue-200 bg-white text-slate-900 hover:bg-blue-50"
              >
                <Link href={href(`/blog/${visibilityArticle.slug}`)}>
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
            {copy.differenceTitle}
          </h2>
          <p className="mt-4 text-slate-600">{copy.differenceIntro}</p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-300">
                  <th className="pb-3 pr-4 font-semibold text-slate-900"></th>
                  <th className="pb-3 pr-4 font-semibold text-slate-900">
                    {copy.tableSeo}
                  </th>
                  <th className="pb-3 font-semibold text-slate-900">
                    {copy.tableGeo}
                  </th>
                </tr>
              </thead>
              <tbody>
                {copy.seoVsGeo.map((row) => (
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

          <p className="mt-8 text-slate-600">{copy.differenceOutro}</p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            {copy.howTitle}
          </h2>
          {copy.howParagraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-slate-600">
              {paragraph}
            </p>
          ))}
          <ol className="mt-8 space-y-5">
            {copy.conditions.map((condition) => (
              <li
                key={condition.title}
                className="border-l-2 border-blue-100 pl-5"
              >
                <span className="font-semibold text-slate-900">
                  {condition.title}
                </span>{" "}
                <span className="text-slate-700">{condition.detail}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            {copy.rulesTitle}
          </h2>
          <p className="mt-4 text-slate-600">{copy.rulesIntro}</p>
          <dl className="mt-10 space-y-8">
            {copy.citable.map((item) => (
              <div key={item.title}>
                <dt className="text-lg font-semibold text-slate-900">
                  {item.title}
                </dt>
                <dd className="mt-2 text-slate-600">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            {copy.unchangedTitle}
          </h2>
          {copy.unchangedParagraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-slate-600">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            {copy.deliveryTitle}
          </h2>
          {copy.deliveryParagraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-slate-600">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
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
                <dd className="mt-2 text-slate-600">{item.answer}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-slate-600">{copy.closing(href)}</p>
        </div>
      </section>
    </>
  );
}
