import { ArrowRight } from "lucide-react";
import Link from "next/link";

import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import {
  ECOMMERCE_CATEGORIES,
  ECOMMERCE_IMAGES,
  ECOMMERCE_PRODUCTS,
  eCommerce,
} from "@/content/templates/e-commerce";
import { getTemplateCopy } from "@/content/templates/types";

import {
  BackofficeSection,
  ReviewsSection,
  StorySection,
} from "./home-sections";
import { ICONS, ProductCard } from "./parts";

/**
 * Accueil de la boutique : héros à photo, engagements, catégories, meilleures
 * ventes, ateliers, avis clients et aperçu de l'espace gestion.
 */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(eCommerce, locale);
  const { hero } = copy.home;
  const href = (path: string) => templateHref(locale, path);
  const bestsellers = [...ECOMMERCE_PRODUCTS]
    .sort((a, b) => b.sold30 - a.sold30)
    .slice(0, 4);

  return (
    <>
      <TemplateSection density="compact">
        <div className="grid items-center gap-10 lg:grid-cols-[5fr_7fr] lg:gap-14">
          <div>
            <TemplateHeading
              as="h1"
              eyebrow={hero.eyebrow}
              title={hero.title}
              description={hero.description}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TemplateLink href={href(eCommerce.paths.boutique)} shape="pill">
                {hero.primary}
              </TemplateLink>
              <TemplateLink
                href={`${href(eCommerce.paths.boutique)}?tri=nouveautes`}
                variant="outline"
                shape="pill"
                icon={false}
              >
                {hero.secondary}
              </TemplateLink>
            </div>
          </div>
          <TemplateMedia
            src={ECOMMERCE_IMAGES.hero}
            alt={hero.alt}
            ratio="3/2"
            priority
            sizes="(min-width: 1344px) 700px, (min-width: 1024px) calc(58vw - 64px), calc(100vw - 32px)"
          />
        </div>
      </TemplateSection>

      <section className="border-y border-tpl-line bg-tpl-raised px-4 sm:px-6 lg:px-8">
        <ul className="mx-auto grid max-w-7xl gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {copy.home.promises.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <li key={item.title} className="flex gap-3">
                <Icon
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-tpl-accent"
                />
                <div>
                  <p className="text-tpl-sm font-semibold">{item.title}</p>
                  <p className="text-tpl-sm text-tpl-ink-muted">{item.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <TemplateSection title={copy.home.categories.title} titleScale="subtitle">
        <ul className="grid gap-6 md:grid-cols-3">
          {ECOMMERCE_CATEGORIES.map((key) => {
            const category = copy.categories[key];
            return (
              <li key={key}>
                <Link
                  href={`${href(eCommerce.paths.boutique)}?categorie=${key}`}
                  className="group block rounded-tpl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tpl-ink"
                >
                  <TemplateMedia
                    src={ECOMMERCE_IMAGES[key]}
                    alt={category.alt}
                    ratio="4/5"
                    sizes="(min-width: 1344px) 390px, (min-width: 768px) calc(33vw - 32px), calc(100vw - 32px)"
                  />
                  <span className="mt-4 flex items-center justify-between gap-3">
                    <span className="font-tpl-display text-tpl-xl font-(weight:--tpl-display-weight)">
                      {category.label}
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      className="size-5 text-tpl-accent transition-transform duration-200 group-hover:translate-x-1 motion-reduce:group-hover:translate-none"
                    />
                  </span>
                  <span className="mt-1 block text-tpl-sm text-tpl-ink-muted">
                    {category.text}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </TemplateSection>

      <TemplateSection tone="raised" className="border-y border-tpl-line">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <TemplateHeading
            eyebrow={copy.home.bestsellers.eyebrow}
            title={copy.home.bestsellers.title}
            description={copy.home.bestsellers.description}
          />
          <TemplateLink
            href={href(eCommerce.paths.boutique)}
            variant="ghost"
            className="shrink-0 self-start md:self-auto"
          >
            {copy.home.bestsellers.cta}
          </TemplateLink>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {bestsellers.map((item) => (
            <li key={item.id}>
              <ProductCard locale={locale} item={item} />
            </li>
          ))}
        </ul>
      </TemplateSection>

      <StorySection locale={locale} />
      <ReviewsSection locale={locale} />
      <BackofficeSection locale={locale} />
    </>
  );
}
