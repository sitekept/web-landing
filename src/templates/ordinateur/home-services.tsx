import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { ordinateur } from "@/content/templates/ordinateur";
import { getTemplateCopy } from "@/content/templates/types";

import { ANCHORS } from "./parts";

/** Services : deux colonnes (ordinateurs, smartphones), trois lignes à vignette et prix. */
export function HomeServices({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(ordinateur, locale);
  const page = copy.services;

  return (
    <TemplateSection
      id={ANCHORS.services}
      tone="raised"
      density="compact"
      align="center"
      title={page.title}
      description={page.description}
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {page.groups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-6 font-tpl-display text-tpl-lg leading-tpl-display font-semibold">
              {group.title}
            </h3>
            <ul className="space-y-8">
              {group.items.map((item) => (
                <li key={item.name}>
                  <TemplatePanel className="flex items-center gap-4 border-transparent bg-tpl-surface/50 p-4">
                    <TemplateMedia
                      src={item.image.src}
                      alt={item.image.alt}
                      ratio="1/1"
                      sizes="80px"
                      className="size-20 shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-tpl-display text-tpl-base leading-snug font-semibold">
                        {item.name}
                      </h4>
                      <p className="mt-1 text-tpl-sm text-tpl-ink-muted">
                        {item.description}
                      </p>
                    </div>
                    <p className="shrink-0 text-tpl-base font-bold text-tpl-accent">
                      {item.price}
                    </p>
                  </TemplatePanel>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </TemplateSection>
  );
}
