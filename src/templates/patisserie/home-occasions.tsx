import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { patisserie } from "@/content/templates/patisserie";
import { getTemplateCopy } from "@/content/templates/types";

/** Occasions : carte claire à gauche, trois cartes sombres numérotées à droite. */
export function HomeOccasions({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(patisserie, locale).occasions;

  return (
    <TemplateSection
      tone="inverse"
      density="compact"
      eyebrow={page.eyebrow}
      title={page.title}
      titleScale="title"
    >
      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <TemplatePanel
          tone="surface"
          className="rounded-[2.25rem] p-8 shadow-tpl-sm"
        >
          <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
            {page.panel.eyebrow}
          </p>
          <h3 className="mt-5 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
            {page.panel.title}
          </h3>
          <p className="mt-6 text-tpl-base text-tpl-ink-muted">
            {page.panel.text}
          </p>
        </TemplatePanel>

        <ul className="grid gap-4 sm:grid-cols-3">
          {page.items.map((occasion, index) => (
            <li
              key={occasion}
              className="rounded-3xl bg-tpl-inverse-ink p-7 text-tpl-inverse shadow-tpl-sm"
            >
              <div
                aria-hidden="true"
                className="flex size-11 items-center justify-center rounded-tpl-pill bg-tpl-accent text-tpl-accent-ink"
              >
                0{index + 1}
              </div>
              <p className="mt-6 text-tpl-lg text-tpl-inverse/85">{occasion}</p>
            </li>
          ))}
        </ul>
      </div>
    </TemplateSection>
  );
}
