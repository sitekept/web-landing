import { ArrowRight, Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";
import type { ComponentType } from "react";

import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { patisserie } from "@/content/templates/patisserie";
import { getTemplateCopy } from "@/content/templates/types";

import { ANCHORS } from "./parts";

const ROW_ICON = "mt-1 size-4 shrink-0 text-tpl-eyebrow";

function Row({
  icon: Icon,
  children,
}: {
  icon: ComponentType<{ className?: string; "aria-hidden"?: "true" }>;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <Icon aria-hidden="true" className={ROW_ICON} />
      <span>{children}</span>
    </li>
  );
}

/** Conciergerie : coordonnées à gauche, panneau sombre avec appels à l’action à droite. */
export function HomeContact({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(patisserie, locale).contact;
  const link =
    "-my-1.75 inline-flex min-h-9 items-center underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink";

  return (
    <TemplateSection
      id={ANCHORS.contact}
      tone="inverse"
      density="compact"
      width="narrow"
    >
      <div className="rounded-[2.5rem] border border-tpl-line bg-tpl-surface p-8 shadow-tpl-lg sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <TemplateHeading
              eyebrow={page.eyebrow}
              title={page.title}
              scale="title"
            />
            <ul className="mt-8 space-y-5 text-tpl-sm text-tpl-ink-muted">
              <Row icon={MapPin}>{page.address}</Row>
              <Row icon={Clock}>{page.hours}</Row>
              <Row icon={Phone}>
                <a href={page.phone.href} className={link}>
                  {page.phone.label}
                </a>
              </Row>
              <Row icon={Mail}>
                <a href={page.email.href} className={link}>
                  {page.email.label}
                </a>
              </Row>
              <Row icon={Calendar}>{page.special}</Row>
            </ul>
          </div>

          <div className="rounded-tpl bg-tpl-inverse-ink p-8 text-tpl-inverse">
            <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-accent uppercase">
              {page.panel.eyebrow}
            </p>
            <p className="mt-5 text-tpl-base text-tpl-inverse/80">
              {page.panel.text}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <TemplateLink href={page.email.href} icon={false}>
                {page.panel.request}
              </TemplateLink>
              <TemplateLink
                href={page.phone.href}
                variant="outline"
                icon={false}
                className="border-tpl-inverse/30 text-tpl-inverse hover:border-tpl-inverse/50 hover:bg-tpl-inverse/10"
              >
                {page.panel.appointment}
              </TemplateLink>
            </div>
            <TemplateLink
              href={templateHref(
                locale,
                `${patisserie.paths.home}#${ANCHORS.collections}`
              )}
              variant="ghost"
              size="sm"
              icon={<ArrowRight aria-hidden="true" className="size-4" />}
              className="mt-8 px-0 font-semibold text-tpl-accent hover:bg-transparent"
            >
              {page.panel.back}
            </TemplateLink>
          </div>
        </div>
      </div>
    </TemplateSection>
  );
}
