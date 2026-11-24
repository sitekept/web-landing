import Link from "next/link";

import {
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { avocate } from "@/content/templates/avocate";
import { getTemplateCopy } from "@/content/templates/types";

import { CARD_TITLE, ContactFormCard, DetailList } from "./parts";

/** Trois entrées de blog, chacune est un lien vers la page blog. */
export function BlogSection({ locale }: { locale: TemplateLocale }) {
  const { blog } = getTemplateCopy(avocate, locale).home;

  return (
    <TemplateSection
      density="compact"
      eyebrow={blog.eyebrow}
      title={blog.title}
      description={blog.description}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {blog.posts.map((post, index) => (
          <Link
            key={post}
            href={templateHref(locale, avocate.paths.blog)}
            className="group block rounded-tpl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
          >
            <TemplatePanel className="h-full transition group-hover:border-tpl-ink-muted">
              <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
                {blog.label}
              </p>
              <h3 className={`${CARD_TITLE} mt-4 text-tpl-lg`}>{post}</h3>
              <p className="mt-4 text-tpl-sm leading-7 text-tpl-ink-muted">
                {blog.excerpts[index]}
              </p>
            </TemplatePanel>
          </Link>
        ))}
      </div>
    </TemplateSection>
  );
}

/** Contact : informations utiles à gauche, formulaire de démonstration à droite. */
export function ContactSection({ locale }: { locale: TemplateLocale }) {
  const { contact } = getTemplateCopy(avocate, locale).home;

  return (
    <TemplateSection
      tone="raised"
      density="compact"
      className="border-t border-tpl-line"
      eyebrow={contact.eyebrow}
      title={contact.title}
      description={contact.description}
    >
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <TemplatePanel tone="surface">
          <h3 className={`${CARD_TITLE} text-tpl-xl`}>{contact.info.title}</h3>
          <div className="mt-4">
            <DetailList items={contact.info.items} />
          </div>
        </TemplatePanel>
        <ContactFormCard locale={locale} />
      </div>
    </TemplateSection>
  );
}
