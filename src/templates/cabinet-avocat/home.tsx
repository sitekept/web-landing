import {
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { cabinetAvocat } from "@/content/templates/cabinet-avocat";
import { getTemplateCopy } from "@/content/templates/types";

import { HomeHero } from "./home-hero";
import { ItemList } from "./parts";

/**
 * Accueil : hero (sommaire des pièces), signaux sur fond blanc, cas-types sur
 * fond sombre, puis une dernière zone beige vers les expertises et la
 * consultation.
 */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  const { signals, cases, reading } = getTemplateCopy(
    cabinetAvocat,
    locale
  ).home;
  const { paths } = cabinetAvocat;
  const href = (path: string) => templateHref(locale, path);
  const linkClass = "bg-tpl-raised hover:border-tpl-ink hover:bg-tpl-raised";

  return (
    <>
      <HomeHero locale={locale} />

      <TemplateSection
        tone="raised"
        eyebrow={signals.eyebrow}
        title={signals.title}
        description={signals.description}
      >
        <ItemList items={signals.items} columns={2} />
      </TemplateSection>

      <TemplateSection
        tone="inverse"
        eyebrow={cases.eyebrow}
        title={cases.title}
        description={cases.description}
      >
        <ItemList items={cases.items} columns={3} tone="inverse" />
      </TemplateSection>

      <TemplateSection
        tone="tint"
        eyebrow={reading.eyebrow}
        title={reading.title}
        description={reading.description}
      >
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <TemplatePanel>
            <p className="text-tpl-sm leading-8 text-tpl-ink-muted">
              {reading.text}
            </p>
          </TemplatePanel>
          <div className="grid gap-4">
            <TemplateLink
              href={href(paths.expertises)}
              variant="outline"
              icon={false}
              className={linkClass}
            >
              {reading.expertises}
            </TemplateLink>
            <TemplateLink
              href={href(paths.consultation)}
              variant="outline"
              icon={false}
              className={linkClass}
            >
              {reading.consultation}
            </TemplateLink>
          </div>
        </div>
      </TemplateSection>
    </>
  );
}
