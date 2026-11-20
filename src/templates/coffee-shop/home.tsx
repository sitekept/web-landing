import {
  TemplateHeading,
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { coffeeShop } from "@/content/templates/coffee-shop";
import { getTemplateCopy } from "@/content/templates/types";

import { BeansSection, MenuSection, PicksSection } from "./home-offer";
import { ReviewsSection, TerraceSection, VisitSection } from "./home-proof";
import { ICONS, Pill } from "./parts";

/** Hero typographique : titre très gras, photo et horaires collés comme un autocollant. */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(coffeeShop, locale);
  const { paths } = coffeeShop;
  const page = copy.home.hero;
  const href = (path: string) => templateHref(locale, path);

  return (
    <>
      <TemplateSection density="compact" className="overflow-x-clip pt-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <TemplateHeading
              as="h1"
              scale="display"
              eyebrow={page.eyebrow}
              title={page.title}
              description={page.description}
            />
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <TemplateLink href={href(paths.carte)} shape="pill">
                {copy.cta.carte}
              </TemplateLink>
              <TemplateLink
                href={href(paths.infos)}
                variant="outline"
                shape="pill"
                icon={false}
              >
                {copy.cta.visit}
              </TemplateLink>
            </div>
            <ul className="mt-9 flex flex-wrap gap-2">
              {page.facts.map((fact) => {
                const Icon = ICONS[fact.icon];

                return (
                  <li key={fact.text}>
                    <Pill>
                      <Icon aria-hidden="true" className="size-4" />
                      {fact.text}
                    </Pill>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative pb-6 lg:pb-0">
            <TemplateMedia
              src={page.image.src}
              alt={page.image.alt}
              ratio="4/5"
              sizes="(min-width: 1280px) 480px, (min-width: 1024px) 40vw, 100vw"
              priority
              className="border border-tpl-ink"
            />
            <TemplatePanel className="absolute bottom-0 left-3 w-64 border-tpl-ink p-4 shadow-tpl-lg lg:-bottom-6 lg:-left-6 lg:-rotate-2">
              <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
                {copy.common.hoursLabel}
              </p>
              <dl className="mt-3 space-y-1.5 text-tpl-sm">
                {copy.common.hoursShort.map((row) => (
                  <div key={row.day} className="flex justify-between gap-3">
                    <dt className="text-tpl-ink-muted">{row.day}</dt>
                    <dd className="font-extrabold whitespace-nowrap tabular-nums">
                      {row.time}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 border-t border-tpl-line pt-3 text-tpl-xs text-tpl-ink-muted">
                {copy.common.kitchenNote}
              </p>
            </TemplatePanel>
          </div>
        </div>
      </TemplateSection>

      <PicksSection locale={locale} />
      <BeansSection locale={locale} />
      <ReviewsSection locale={locale} />
      <TerraceSection locale={locale} />
      <MenuSection locale={locale} />
      <VisitSection locale={locale} />
    </>
  );
}
