import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { PriceList } from "@/components/template-kit/vendor/price-list";
import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { getTemplateCopy } from "@/content/templates/types";

/** La carte : texte et prix à gauche (5/12), trois photos de plats à droite (7/12). */
export function CarteSection({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(restaurantBistrot, locale);
  const page = copy.home.carte;
  const [main, ...others] = page.images;

  return (
    <TemplateSection tone="surface">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-5">
          <TemplateHeading
            eyebrow={page.eyebrow}
            title={page.title}
            description={page.description}
          />
          <PriceList groups={[page.group]} titleAs="h3" className="mt-10" />
          <p className="mt-8 max-w-tpl-measure border-t border-tpl-line pt-5 text-tpl-sm text-tpl-ink-muted">
            {page.formulas}
          </p>
          <div className="mt-8">
            <TemplateLink
              href={templateHref(locale, restaurantBistrot.paths.menu)}
            >
              {copy.cta.seeFullMenu}
            </TemplateLink>
          </div>
        </div>

        <div className="grid grid-cols-2 content-start gap-4 lg:col-span-7">
          <TemplateMedia
            src={main.src}
            alt={main.alt}
            ratio="3/2"
            sizes="(min-width: 1280px) 683px, (min-width: 1024px) 52vw, 92vw"
            className="col-span-2"
          />
          {others.map((image) => (
            <TemplateMedia
              key={image.src}
              src={image.src}
              alt={image.alt}
              ratio="3/2"
              sizes="(min-width: 1344px) 299px, (min-width: 1024px) calc(24.79vw - 34px), (min-width: 640px) calc(42.5vw - 27px), calc(42.5vw - 20px)"
            />
          ))}
        </div>
      </div>
    </TemplateSection>
  );
}
