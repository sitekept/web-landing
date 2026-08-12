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
];

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getSiteLocale();

  return buildPageMetadata({
    title:
      locale === "fr"
        ? "SEO et GEO : rendre votre site visible | Sitekept"
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
            SEO et GEO&nbsp;: quelle différence, concrètement
          </h2>
          <p className="mt-4 text-slate-600">
            Le SEO consiste à apparaître dans une liste de résultats. Le GEO —
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
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Comment un moteur de réponse choisit ce qu&apos;il cite
          </h2>
          <p className="mt-4 text-slate-600">
            Commençons par ce que personne ne sait&nbsp;: aucun de ces systèmes
            ne publie ses critères de sélection des sources. Toute agence qui
            prétend connaître l&apos;algorithme invente. En revanche, la
            mécanique générale est observable, et elle suffit à travailler
            sérieusement.
          </p>
          <p className="mt-4 text-slate-600">
            La plupart des moteurs de réponse ne puisent pas dans leur mémoire
            d&apos;entraînement pour répondre à une question d&apos;actualité ou
            locale. Ils lancent une recherche, récupèrent quelques pages, en
            extraient les passages utiles, puis rédigent une synthèse en citant
            leurs sources. Trois conditions découlent de ce fonctionnement.
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
          <p className="mt-4 text-slate-600">
            Un site doit toujours être explorable et indexable, servir une seule
            adresse canonique, se charger vite, être lisible sur mobile, et
            présenter une hiérarchie de titres cohérente. Il doit toujours
            déclarer ce qu&apos;il est au moyen de données structurées, et
            toujours proposer un contenu qui répond réellement à une intention.
            Ce socle sert la recherche classique&nbsp;; il conditionne aussi
            l&apos;accès aux réponses génératives.
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
            Chaque site livré part avec les fondations en place&nbsp;: une
            structure de titres cohérente, des balises title et description
            propres à chaque page, une adresse canonique unique, un sitemap et
            un fichier robots.txt corrects, des données structurées décrivant
            l&apos;activité, des images optimisées et un rendu rapide.
          </p>
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
            {SEO_GEO_FAQ.map((item) => (
              <div key={item.question}>
                <dt className="text-lg font-semibold text-slate-900">
                  {item.question}
                </dt>
                <dd className="mt-2 text-slate-600">{item.answer}</dd>
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
