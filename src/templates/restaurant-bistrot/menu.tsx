import {
  TemplateHeading,
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { PriceList } from "@/components/template-kit/vendor/price-list";
import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { getTemplateCopy } from "@/content/templates/types";

import { FIRST_SECTION_TOP } from "./parts";

/** Menu : la carte (7/12) et les formules avec une photo (5/12), puis la cave sur fond sombre. */
export function MenuView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(restaurantBistrot, locale);
  const { menu } = copy;

  return (
    <>
      <TemplateSection
        as="h1"
        tone="surface"
        eyebrow={menu.eyebrow}
        title={menu.title}
        description={menu.description}
        className={FIRST_SECTION_TOP}
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-7">
            <PriceList groups={menu.groups} titleAs="h2" />
            <p className="mt-10 max-w-tpl-measure border-t border-tpl-line pt-5 text-tpl-sm text-tpl-ink-muted">
              {menu.notes}
            </p>
          </div>
          <div className="grid content-start gap-6 lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <TemplatePanel tone="inverse" className="p-8">
              <PriceList groups={[menu.formulas]} titleAs="h2" />
              <div className="mt-8">
                <TemplateLink
                  href={templateHref(
                    locale,
                    restaurantBistrot.paths.reservation
                  )}
                  variant="inverse"
                >
                  {copy.cta.bookTable}
                </TemplateLink>
              </div>
            </TemplatePanel>
            <TemplateMedia
              src={menu.image.src}
              alt={menu.image.alt}
              ratio="3/2"
              sizes="(min-width: 1280px) 469px, (min-width: 1024px) 36vw, 92vw"
            />
          </div>
        </div>
      </TemplateSection>

      <TemplateSection tone="inverse">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-5">
            <TemplateHeading
              title={menu.cave.title}
              description={menu.cave.description}
            />
            <PriceList
              groups={menu.cave.groups}
              titleAs="h3"
              className="mt-10"
            />
          </div>
          <div className="lg:col-span-7">
            <TemplateMedia
              src={menu.cave.image.src}
              alt={menu.cave.image.alt}
              ratio="3/2"
              sizes="(min-width: 1280px) 683px, (min-width: 1024px) 52vw, 92vw"
            />
          </div>
        </div>
      </TemplateSection>
    </>
  );
}
