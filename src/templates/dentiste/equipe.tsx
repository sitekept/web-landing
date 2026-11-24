import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { dentiste } from "@/content/templates/dentiste";
import { getTemplateCopy } from "@/content/templates/types";

import { ClosingBand } from "./closing";
import { IconBadge, PageIntro } from "./parts";

/**
 * Équipe : ouverture avec photo portrait, trois membres (initiales, nom et
 * fonction à gauche, rôle à droite, 4 / 8 colonnes), puis la façon de
 * travailler en trois colonnes ouvertes par un filet épais.
 */
export function EquipeView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(dentiste, locale).equipe;

  return (
    <>
      <PageIntro {...page.intro} ratio="4/5" />

      <TemplateSection>
        <ul
          aria-label={page.membersLabel}
          className="divide-y divide-tpl-line border-y border-tpl-line"
        >
          {page.members.map((member) => (
            <li
              key={member.name}
              className="grid gap-4 py-8 lg:grid-cols-12 lg:gap-14"
            >
              <div className="flex items-center gap-4 lg:col-span-4">
                <span
                  aria-hidden="true"
                  className="flex size-14 shrink-0 items-center justify-center rounded-tpl bg-tpl-tint font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight)"
                >
                  {member.initials}
                </span>
                <div>
                  <h2 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                    {member.name}
                  </h2>
                  <p className="text-tpl-sm text-tpl-ink-muted">
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="max-w-tpl-measure text-tpl-base text-tpl-ink-muted lg:col-span-8">
                {member.text}
              </p>
            </li>
          ))}
        </ul>
      </TemplateSection>

      <TemplateSection tone="tint">
        <TemplateHeading
          scale="subtitle"
          eyebrow={page.practice.eyebrow}
          title={page.practice.title}
        />
        <ul className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-3">
          {page.practice.items.map((item) => (
            <li key={item.title} className="border-t-4 border-tpl-ink pt-5">
              <IconBadge icon={item.icon} />
              <h3 className="mt-4 font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                {item.title}
              </h3>
              <p className="mt-2 text-tpl-sm text-tpl-ink-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </TemplateSection>

      <ClosingBand locale={locale} />
    </>
  );
}
