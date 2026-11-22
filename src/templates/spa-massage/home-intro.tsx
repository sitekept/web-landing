import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { spaMassage } from "@/content/templates/spa-massage";
import { getTemplateCopy } from "@/content/templates/types";

/** Signature de l'institut : phrase en serif et bande de chiffres. */
export function HomeSignature({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(spaMassage, locale).home.signature;

  return (
    <TemplateSection tone="raised">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-20">
        <TemplateHeading
          eyebrow={page.eyebrow}
          title={page.title}
          scale="title"
        />
        <p className="max-w-tpl-measure text-tpl-base text-pretty text-tpl-ink-muted">
          {page.text}
        </p>
      </div>
      <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-tpl-line pt-10 lg:grid-cols-4">
        {page.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2">
            <dt className="order-2 max-w-[18ch] text-tpl-sm text-tpl-ink-muted">
              {stat.label}
            </dt>
            <dd className="order-1 font-tpl-display text-tpl-2xl leading-tpl-display text-tpl-accent">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </TemplateSection>
  );
}

/** Trois soins phares : image haute, nom en serif, durée et prix. */
export function HomeFeatured({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(spaMassage, locale);
  const page = copy.home.featured;

  return (
    <TemplateSection
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <ul className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
        {page.items.map((item, index) => (
          <li key={item.name} className={index === 1 ? "md:mt-16" : undefined}>
            <article>
              <TemplateMedia
                src={item.image.src}
                alt={item.image.alt}
                ratio="4/5"
                sizes="(min-width: 1280px) 380px, (min-width: 768px) 30vw, 100vw"
              />
              <h3 className="mt-6 font-tpl-display text-tpl-xl font-(weight:--tpl-display-weight) text-balance">
                {item.name}
              </h3>
              <p className="mt-2 flex items-center gap-3 text-tpl-sm tabular-nums">
                <span className="text-tpl-ink-muted">{item.duration}</span>
                <span aria-hidden="true" className="h-px w-6 bg-tpl-accent" />
                <span className="font-medium text-tpl-accent">
                  {item.price}
                </span>
              </p>
              <p className="mt-3 text-tpl-sm text-tpl-ink-muted">{item.text}</p>
            </article>
          </li>
        ))}
      </ul>
      <div className="mt-14">
        <TemplateLink
          href={templateHref(locale, spaMassage.paths.soins)}
          variant="outline"
          shape="pill"
        >
          {copy.cta.seeMenu}
        </TemplateLink>
      </div>
    </TemplateSection>
  );
}
