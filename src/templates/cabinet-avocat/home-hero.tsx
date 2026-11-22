import {
  TemplateHeading,
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { cabinetAvocat } from "@/content/templates/cabinet-avocat";
import { getTemplateCopy } from "@/content/templates/types";

const LABEL =
  "text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase";

/** Hero de l'accueil : titre `h1` et appels à l'action, sommaire des pièces à droite. */
export function HomeHero({ locale }: { locale: TemplateLocale }) {
  const { hero, summary } = getTemplateCopy(cabinetAvocat, locale).home;
  const { paths } = cabinetAvocat;
  const href = (path: string) => templateHref(locale, path);

  return (
    <TemplateSection density="compact" className="border-b border-tpl-line">
      <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
        <div>
          <TemplateHeading
            as="h1"
            scale="title"
            eyebrow={hero.eyebrow}
            title={hero.title}
            description={hero.description}
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TemplateLink
              href={href(paths.consultation)}
              variant="outline"
              icon={false}
              className="bg-tpl-raised hover:border-tpl-ink hover:bg-tpl-raised"
            >
              {hero.primary}
            </TemplateLink>
            <TemplateLink
              href={href(paths.publications)}
              variant="outline"
              icon={false}
              className="bg-tpl-raised hover:border-tpl-ink hover:bg-tpl-raised"
            >
              {hero.secondary}
            </TemplateLink>
          </div>
        </div>

        <TemplatePanel>
          <div className={`flex items-center justify-between gap-4 ${LABEL}`}>
            <span>{summary.label}</span>
            <span>{summary.version}</span>
          </div>
          <ol className="mt-6 divide-y divide-tpl-line">
            {summary.items.map((item) => (
              <li
                key={item.code}
                className="grid gap-3 py-4 sm:grid-cols-[8rem_1fr]"
              >
                <p className={LABEL}>{item.code}</p>
                <p className="text-tpl-sm text-tpl-ink-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </TemplatePanel>
      </div>
    </TemplateSection>
  );
}
