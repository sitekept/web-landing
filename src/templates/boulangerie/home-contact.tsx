import {
  TemplateHeading,
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { boulangerie } from "@/content/templates/boulangerie";
import { getTemplateCopy } from "@/content/templates/types";

import { ANCHORS, InfoRow } from "./parts";

/** Contact : coordonnées à gauche, bloc « commande rapide » orange à droite. */
export function HomeContact({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(boulangerie, locale);
  const page = copy.contact;

  return (
    <TemplateSection id={ANCHORS.contact} tone="tint" density="compact">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <TemplatePanel className="p-8 shadow-tpl-sm">
          <TemplateHeading
            eyebrow={page.eyebrow}
            title={page.title}
            scale="subtitle"
          />
          <div className="mt-8 space-y-5 text-tpl-sm text-tpl-ink-muted">
            <InfoRow icon="address">{copy.common.addressFull}</InfoRow>
            <InfoRow icon="hours">{copy.common.hours}</InfoRow>
            <InfoRow icon="phone">{copy.phone.label}</InfoRow>
          </div>
        </TemplatePanel>

        <div className="rounded-tpl bg-tpl-accent p-8 text-tpl-accent-ink shadow-tpl-lg">
          <p className="text-tpl-sm tracking-tpl-eyebrow uppercase">
            {page.quick.eyebrow}
          </p>
          <h3 className="mt-3 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
            {page.quick.title}
          </h3>
          <p className="mt-5 max-w-xl text-tpl-base">{page.quick.text}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <TemplateLink
              href={copy.phone.href}
              variant="inverse"
              icon={false}
              className="rounded-lg px-6"
            >
              {page.quick.order}
            </TemplateLink>
            <TemplateLink
              href={copy.common.quoteHref}
              variant="outline"
              icon={false}
              className="rounded-lg border-tpl-accent-ink px-6 text-tpl-accent-ink hover:border-tpl-accent-ink hover:bg-tpl-accent-ink/10"
            >
              {page.quick.quote}
            </TemplateLink>
          </div>
        </div>
      </div>
    </TemplateSection>
  );
}
