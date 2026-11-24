import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { getTemplateCopy } from "@/content/templates/types";

import { BLOCK_TITLE, CtaBand } from "./parts";

/** Journal : trois notes courtes, lues en entier sur la page. */
export function JournalView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(architecteInterieur, locale).journal;

  return (
    <>
      <TemplateSection density="compact" tone="surface">
        <TemplateHeading
          as="h1"
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />
        <div className="@container mt-12 border-t border-tpl-ink">
          {page.items.map((note, index) => (
            <article
              key={note.title}
              className="grid gap-x-12 gap-y-3 border-b border-tpl-line py-8 @3xl:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]"
            >
              <p className="text-tpl-sm text-tpl-ink-muted">
                <span aria-hidden="true" className="tabular-nums">
                  {String(index + 1).padStart(2, "0")} ·{" "}
                </span>
                {note.minutes}
              </p>
              <div>
                <h2 className={BLOCK_TITLE}>{note.title}</h2>
                <p className="mt-3 max-w-tpl-measure text-tpl-base text-pretty text-tpl-ink-muted">
                  {note.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </TemplateSection>
      <CtaBand
        locale={locale}
        title={page.contact.title}
        text={page.contact.text}
      />
    </>
  );
}
