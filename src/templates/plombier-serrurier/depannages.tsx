import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { plombierSerrurier } from "@/content/templates/plombier-serrurier";
import { getTemplateCopy } from "@/content/templates/types";

import { ClosingPanel } from "./closing";
import { LimitsSection, ReflexesSection } from "./depannages-extras";
import { VoletSection } from "./depannages-volet";

/** Dépannages : hero avec ancres, volet plomberie, volet serrurerie, réflexes, limites, contact. */
export function DepannagesView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(plombierSerrurier, locale);
  const page = copy.depannages;
  const { paths } = plombierSerrurier;

  return (
    <>
      <TemplateSection density="compact" className="border-b border-tpl-line">
        <TemplateHeading
          as="h1"
          scale="title"
          eyebrow={page.hero.eyebrow}
          title={page.hero.title}
          description={page.hero.description}
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {page.hero.jumps.map((jump, index) => (
            <TemplateLink
              key={jump.anchor}
              href={templateHref(locale, `${paths.depannages}#${jump.anchor}`)}
              variant={index === 0 ? "solid" : "outline"}
              shape="pill"
              className={index === 0 ? "" : "bg-tpl-raised"}
            >
              {jump.label}
            </TemplateLink>
          ))}
        </div>
      </TemplateSection>
      <VoletSection
        volet={page.plumbing}
        trade="water"
        fromLabel={page.fromLabel}
        tone="surface"
      />
      <VoletSection
        volet={page.locks}
        trade="lock"
        fromLabel={page.fromLabel}
        tone="raised"
        flip
      />
      <ReflexesSection locale={locale} />
      <LimitsSection locale={locale} />
      <ClosingPanel
        locale={locale}
        eyebrow={page.closing.eyebrow}
        title={page.closing.title}
        description={page.closing.description}
      />
    </>
  );
}
