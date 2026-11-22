import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { getTemplateCopy } from "@/content/templates/types";

/** Contact : adresse, horaires et téléphone, trois blocs sur fond blanc. */
export function ContactView({ locale }: { locale: TemplateLocale }) {
  const { contact } = getTemplateCopy(salonCoiffure, locale);
  const panel = "text-tpl-sm text-tpl-ink-muted";

  return (
    <TemplateSection
      as="h1"
      tone="raised"
      density="compact"
      titleScale="subtitle"
      className="flex-1 pt-[calc(var(--tpl-header-offset)+4rem)]"
      eyebrow={contact.eyebrow}
      title={contact.title}
      description={contact.description}
    >
      <ul className="grid gap-4 lg:grid-cols-3">
        <li>
          <TemplatePanel tone="surface" className={panel}>
            {contact.address}
          </TemplatePanel>
        </li>
        <li>
          <TemplatePanel tone="surface" className={panel}>
            {contact.hours}
          </TemplatePanel>
        </li>
        <li>
          <TemplatePanel tone="surface" className={panel}>
            <a
              href={contact.phone.href}
              className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tpl-ink"
            >
              {contact.phone.label}
            </a>
          </TemplatePanel>
        </li>
      </ul>
    </TemplateSection>
  );
}
