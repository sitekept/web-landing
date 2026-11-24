import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { avocate } from "@/content/templates/avocate";
import { getTemplateCopy } from "@/content/templates/types";

import { CARD_TITLE } from "./parts";

/** Blog : trois articles. */
export function BlogView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(avocate, locale).blog;

  return (
    <TemplateSection
      as="h1"
      density="compact"
      eyebrow={page.hero.eyebrow}
      title={page.hero.title}
      description={page.hero.description}
    >
      <div className="space-y-4">
        {page.posts.map((post, index) => (
          <TemplatePanel key={post}>
            <div className="grid gap-5 lg:grid-cols-[160px_1fr]">
              <div>
                <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
                  {page.articleLabel} 0{index + 1}
                </p>
                <p className="mt-2 text-tpl-sm text-tpl-ink-muted">
                  {page.placeholder}
                </p>
              </div>
              <div>
                <h2 className={`${CARD_TITLE} text-tpl-xl`}>{post}</h2>
                <p className="mt-4 text-tpl-sm leading-7 text-tpl-ink-muted">
                  {page.excerpts[index]}
                </p>
              </div>
            </div>
          </TemplatePanel>
        ))}
      </div>
    </TemplateSection>
  );
}
