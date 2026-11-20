import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { TestimonialsMarquee } from "@/components/template-kit/vendor/testimonials-marquee";
import { createurCulinaire } from "@/content/templates/createur-culinaire";
import { getTemplateCopy } from "@/content/templates/types";

import { ordinal, RULE, toRating } from "./parts";

/** Manifeste : l'étiquette à gauche, une phrase en grand serif à droite. */
export function HomeManifesto({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(createurCulinaire, locale).home.manifesto;

  return (
    <TemplateSection className={RULE}>
      <div className="grid gap-8 lg:grid-cols-[1fr_3fr] lg:gap-12">
        <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase lg:pt-4">
          {page.eyebrow}
        </p>
        <TemplateHeading
          title={page.title}
          description={page.description}
          className="max-w-none"
        />
      </div>
    </TemplateSection>
  );
}

/** Décalage vertical de chaque carte : les trois univers descendent en escalier. */
const STAGGER = ["", "md:mt-14", "md:mt-28"] as const;

/** Trois univers en cartes image, en escalier à partir de `md`. */
export function HomeUniverses({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(createurCulinaire, locale).home.universes;
  const { paths } = createurCulinaire;
  const targets = [paths.creations, paths.creations, paths.evenements];

  return (
    <TemplateSection tone="raised" eyebrow={page.eyebrow} title={page.title}>
      <ul className="grid gap-14 md:grid-cols-3 md:gap-8 md:pb-28 lg:gap-12">
        {page.items.map((item, index) => (
          <li key={item.title} className={STAGGER[index]}>
            <article>
              <TemplateMedia
                src={item.image.src}
                alt={item.image.alt}
                ratio="3/4"
                rounded="none"
                sizes="(min-width: 1280px) 400px, (min-width: 768px) 30vw, 100vw"
              />
              <div className="mt-6 flex items-baseline gap-4">
                <span
                  aria-hidden="true"
                  className="font-tpl-display text-tpl-xl text-tpl-accent"
                >
                  {ordinal(index)}
                </span>
                <h3 className="font-tpl-display text-tpl-xl">{item.title}</h3>
              </div>
              <p className="mt-3 max-w-sm text-tpl-sm text-tpl-ink-muted">
                {item.text}
              </p>
              <TemplateLink
                href={templateHref(locale, targets[index])}
                variant="ghost"
                shape="square"
                className="mt-2 -ml-5"
              >
                {item.link}
              </TemplateLink>
            </article>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}

/** Preuve : bande d'avis défilante pleine largeur. */
export function HomeProof({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(createurCulinaire, locale).home.proof;

  return (
    <TemplateSection
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <div className="-mx-4 sm:-mx-6 lg:-mx-8">
        <TestimonialsMarquee
          label={page.label}
          tone="surface"
          durationSeconds={64}
          items={page.items.map((item) => ({
            quote: item.quote,
            name: item.name,
            detail: item.detail,
            rating: toRating(item.rating),
            ratingLabel: item.ratingLabel,
          }))}
        />
      </div>
    </TemplateSection>
  );
}

/** Rupture : grande image pleine largeur, citation en retrait sur fond inverse. */
export function HomePause({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(createurCulinaire, locale).home.pause;

  return (
    <section className="bg-tpl-surface pb-16 sm:pb-24">
      <TemplateMedia
        src={page.image.src}
        alt={page.image.alt}
        ratio="4/3"
        rounded="none"
        sizes="100vw"
        className="lg:aspect-[21/9]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <figure
          data-tone="inverse"
          className="relative -mt-14 bg-tpl-inverse p-8 text-tpl-inverse-ink sm:-mt-20 sm:max-w-2xl sm:p-12 lg:-mt-32 lg:ml-auto lg:max-w-3xl lg:p-14"
        >
          <blockquote>
            <p className="font-tpl-display text-tpl-2xl">{page.quote}</p>
          </blockquote>
          <figcaption className="mt-8 border-t border-tpl-line pt-4 text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
            {page.author}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/** Comment commander : quatre étapes numérotées sous un filet. */
export function HomeSteps({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(createurCulinaire, locale).home.steps;

  return (
    <TemplateSection tone="raised" eyebrow={page.eyebrow} title={page.title}>
      <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {page.items.map((item, index) => (
          <li key={item.title} className={`${RULE} pt-5`}>
            <span
              aria-hidden="true"
              className="font-tpl-display text-tpl-2xl text-tpl-accent"
            >
              {ordinal(index)}
            </span>
            <h3 className="mt-3 font-tpl-display text-tpl-xl">{item.title}</h3>
            <p className="mt-3 text-tpl-sm text-tpl-ink-muted">{item.text}</p>
          </li>
        ))}
      </ol>
    </TemplateSection>
  );
}
