import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { metierPages, getMetierPageBySlug } from "@/content/metier-pages";
import { buildPageMetadata } from "@/lib/page-metadata";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/structured-data";

interface MetierPageProps {
  params: Promise<{ metier: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return metierPages.map((page) => ({ metier: page.slug }));
}

export async function generateMetadata({
  params,
}: MetierPageProps): Promise<Metadata> {
  const { metier } = await params;
  const page = getMetierPageBySlug(metier);

  if (!page) {
    return {};
  }

  return buildPageMetadata({
    title: page.seoTitle,
    description: page.seoDescription,
    path: `/${page.slug}`,
  });
}

export default async function MetierLandingPage({ params }: MetierPageProps) {
  const { metier } = await params;
  const page = getMetierPageBySlug(metier);

  if (!page) {
    notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Modèles de sites", path: "/templates" },
          { name: page.h1, path: `/${page.slug}` },
        ]}
      />
      <FaqJsonLd items={page.faq} />

      <section className="bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] px-6 pb-16 pt-28 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
            Site internet par métier
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {page.h1}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">{page.intro}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/#contact">
                Demander un devis
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={`/${page.demoSlug}`}>Voir la démo</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Ce que cherchent vos clients, et dans quel état d&apos;esprit
          </h2>
          <p className="mt-4 text-slate-600">
            Toutes les visites ne se valent pas. Un site efficace pour{" "}
            {page.label} répond aux trois situations qui amènent réellement
            quelqu&apos;un à vous chercher.
          </p>
          <ul className="mt-8 space-y-5">
            {page.searchIntent.map((item) => (
              <li
                key={item}
                className="border-l-2 border-blue-100 pl-5 text-slate-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Ce que votre site doit faire
          </h2>
          <dl className="mt-10 space-y-8">
            {page.siteMustDo.map((item) => (
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
            Ce qu&apos;il faut préparer pour tenir les 48h
          </h2>
          <p className="mt-4 text-slate-600">
            Le délai court à partir de la réception de l&apos;acompte et de vos
            contenus. C&apos;est presque toujours la préparation des éléments
            ci-dessous, et non le développement, qui détermine la date de mise
            en ligne.
          </p>
          <ul className="mt-8 space-y-3">
            {page.toPrepare.map((item) => (
              <li key={item} className="flex gap-3 text-slate-700">
                <Check
                  className="mt-1 h-4 w-4 shrink-0 text-blue-600"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-slate-600">
            La rédaction complète des textes et les photographies ne sont pas
            comprises dans le tarif de base&nbsp;; le détail de ce qui est
            inclus figure sur la{" "}
            <Link
              href="/tarifs"
              className="font-medium text-blue-700 underline underline-offset-4"
            >
              page tarifs
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Un modèle déjà pensé pour {page.label}
          </h2>
          <p className="mt-4 text-slate-600">
            Plutôt que de repartir d&apos;une page blanche, nous adaptons une
            base construite autour des besoins réels du métier. C&apos;est ce
            qui rend le tarif et le délai possibles. Vous pouvez la parcourir
            avant de décider&nbsp;: c&apos;est une démonstration publique, avec
            des coordonnées fictives.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link href={`/${page.demoSlug}`}>
                {page.demoName}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            {page.secondaryDemo ? (
              <Button asChild variant="outline">
                <Link href={`/${page.secondaryDemo.slug}`}>
                  {page.secondaryDemo.name}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            ) : null}
          </div>
          {page.secondaryDemo ? (
            <p className="mt-4 text-sm text-slate-600">
              {page.secondaryDemo.note}
            </p>
          ) : null}
          <p className="mt-6 text-sm text-slate-500">
            Voir aussi{" "}
            <Link
              href="/templates"
              className="font-medium text-blue-700 underline underline-offset-4"
            >
              tous les modèles par métier
            </Link>{" "}
            et{" "}
            <Link
              href="/realization"
              className="font-medium text-blue-700 underline underline-offset-4"
            >
              nos réalisations
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Combien coûte un site pour {page.label}&nbsp;?
          </h2>
          <p className="mt-4 text-slate-600">
            Le site vitrine essentiel est à 500&nbsp;€ en tarif de lancement, au
            lieu de 600&nbsp;€. C&apos;est un paiement unique&nbsp;: il n&apos;y
            a pas d&apos;abonnement à régler pour que le site reste en ligne, et
            le nom de domaine est offert la première année.
          </p>
          <p className="mt-4 text-slate-600">
            Ce tarif couvre la conception, le développement, la mise en ligne et
            une structure optimisée pour le référencement. Il ne couvre pas la
            rédaction complète de vos textes, les photographies, ni les
            fonctionnalités sur mesure — boutique, réservation propre, espace
            client — qui font l&apos;objet d&apos;un devis séparé.
          </p>
          <p className="mt-4 text-slate-600">
            Le détail de ce qui est inclus, les modalités de paiement et la
            comparaison entre paiement unique et abonnement figurent sur la{" "}
            <Link
              href="/tarifs"
              className="font-medium text-blue-700 underline underline-offset-4"
            >
              page tarifs
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Questions fréquentes
          </h2>
          <dl className="mt-10 space-y-8">
            {page.faq.map((item) => (
              <div key={item.question}>
                <dt className="text-lg font-semibold text-slate-900">
                  {item.question}
                </dt>
                <dd className="mt-2 text-slate-600">{item.answer}</dd>
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
          <p className="mt-4 text-lg text-slate-300">
            Décrivez votre activité et ce que vous attendez du site. Nous
            revenons vers vous avec un cadre précis&nbsp;: ce qui est inclus, le
            délai, et le prix.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/#contact">
                Demander un devis
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
