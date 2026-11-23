import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { getTemplateCopy } from "@/content/templates/types";

import {
  BANNER_SIZES,
  BLOCK_TITLE,
  CtaBand,
  PORTRAIT,
  ProjectFacts,
  ROW_TITLE,
  photoSizes,
} from "./parts";

/**
 * Étude de cas « Appartement atelier, centre-ville » (URL `atelier-marais`
 * conservée) : fiche chiffrée, grande photo, point de départ, travaux,
 * matières et résultat.
 */
export function AtelierMaraisView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(architecteInterieur, locale);
  const page = copy.atelierMarais;
  const project = copy.projects.items[0];
  const { paths } = architecteInterieur;

  return (
    <>
      <TemplateSection density="compact" tone="surface" width="narrow">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-12">
          <div>
            <TemplateHeading
              as="h1"
              eyebrow={page.eyebrow}
              title={page.title}
              description={page.description}
            />
          </div>
          <div className="lg:pt-8">
            <ProjectFacts project={project} labels={copy.projects.factLabels} />
          </div>
        </div>
        <div className="mt-12">
          <TemplateMedia
            src={page.banner.src}
            alt={page.banner.alt}
            ratio="16/9"
            rounded="none"
            priority
            sizes={BANNER_SIZES}
          />
        </div>
      </TemplateSection>

      <TemplateSection density="compact" tone="tint" width="narrow">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-12">
          <div>
            <h2 className={BLOCK_TITLE}>{page.brief.title}</h2>
            <p className="mt-4 max-w-tpl-measure text-tpl-base text-pretty text-tpl-ink-muted">
              {page.brief.text}
            </p>
            <h2 className={`${BLOCK_TITLE} mt-12`}>{page.approach.title}</h2>
            <ol className="mt-4 border-t border-tpl-ink">
              {page.approach.points.map((point, index) => (
                <li
                  key={point}
                  className="grid grid-cols-[2.5rem_1fr] gap-x-3 border-b border-tpl-line py-4 text-tpl-base text-pretty"
                >
                  <span
                    aria-hidden="true"
                    className="font-semibold text-tpl-ink-muted tabular-nums"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <TemplateMedia
                src={page.approach.imageSite.src}
                alt={page.approach.imageSite.alt}
                ratio="3/2"
                rounded="none"
                sizes={photoSizes(7, "narrow")}
              />
            </div>
          </div>
          <div>
            <TemplateMedia
              src={page.materials.image.src}
              alt={page.materials.image.alt}
              ratio="4/5"
              rounded="none"
              sizes={photoSizes(5, "narrow")}
              className={PORTRAIT}
            />
            <h2 className={`${BLOCK_TITLE} mt-10`}>{page.materials.title}</h2>
            <dl className="mt-4 border-t border-tpl-ink">
              {page.materials.items.map((item) => (
                <div key={item.name} className="border-b border-tpl-line py-4">
                  <dt className={ROW_TITLE}>{item.name}</dt>
                  <dd className="mt-1 text-tpl-sm text-tpl-ink-muted">
                    {item.text}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </TemplateSection>

      <TemplateSection density="compact" tone="raised" width="narrow">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          <h2 className={`${BLOCK_TITLE}`}>{page.result.title}</h2>
          <div>
            <p className="max-w-tpl-measure font-tpl-display text-tpl-lg leading-snug font-(weight:--tpl-display-weight) text-pretty">
              {page.result.text}
            </p>
            <div className="mt-6">
              <TemplateLink
                href={templateHref(locale, paths.projets)}
                variant="outline"
                shape="square"
                icon={false}
                className="border-tpl-ink"
              >
                {page.next.back}
              </TemplateLink>
            </div>
          </div>
        </div>
      </TemplateSection>

      <CtaBand locale={locale} title={page.next.title} text={page.next.text} />
    </>
  );
}
