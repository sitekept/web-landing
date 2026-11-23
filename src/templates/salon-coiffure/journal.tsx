import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { getTemplateCopy } from "@/content/templates/types";

import { PageIntro, SIZES } from "./parts";

const TAG =
  "text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase";

/**
 * Journal : le premier conseil en grand (photo 7/12, texte 5/12), les deux
 * suivants côte à côte, chacun avec un lien vers la réservation.
 */
export function JournalView({ locale }: { locale: TemplateLocale }) {
  const { journal } = getTemplateCopy(salonCoiffure, locale);
  const [featured, ...others] = journal.items;
  const bookHref = templateHref(locale, salonCoiffure.paths.reservation);

  return (
    <>
      <PageIntro title={journal.title} description={journal.description} />
      <TemplateSection tone="surface" density="compact">
        <article className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <TemplateMedia
              src={featured.image.src}
              alt={featured.image.alt}
              ratio="4/3"
              priority
              sizes={SIZES.COL7_G64}
            />
          </div>
          <div className="lg:col-span-5">
            <p className={TAG}>
              {featured.tag} · {featured.read}
            </p>
            <h2 className="mt-4 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight) text-balance">
              {featured.title}
            </h2>
            <p className="mt-4 text-tpl-base text-pretty text-tpl-ink-muted">
              {featured.text}
            </p>
            <div className="mt-6">
              <TemplateLink href={bookHref} shape="pill">
                {featured.link}
              </TemplateLink>
            </div>
          </div>
        </article>
        <div className="mt-16 grid gap-12 border-t border-tpl-line pt-12 md:grid-cols-2">
          {others.map((item) => (
            <article key={item.title}>
              <TemplateMedia
                src={item.image.src}
                alt={item.image.alt}
                ratio="4/3"
                sizes={SIZES.HALVES}
              />
              <p className={`mt-6 ${TAG}`}>
                {item.tag} · {item.read}
              </p>
              <h2 className="mt-3 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight) text-balance">
                {item.title}
              </h2>
              <p className="mt-3 text-tpl-base text-pretty text-tpl-ink-muted">
                {item.text}
              </p>
              <div className="mt-4">
                <TemplateLink href={bookHref} variant="outline" shape="pill">
                  {item.link}
                </TemplateLink>
              </div>
            </article>
          ))}
        </div>
      </TemplateSection>
    </>
  );
}
