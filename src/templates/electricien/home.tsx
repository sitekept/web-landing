import { Phone } from "lucide-react";

import {
  TemplateHeading,
  TemplateLink,
  TemplatePanel,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { electricien } from "@/content/templates/electricien";
import { getTemplateCopy } from "@/content/templates/types";

import { ClosingBand } from "./closing";
import { EmergencySection, WorksPreview } from "./home-emergency";
import {
  CommitmentsBand,
  ReviewsSection,
  ServicesSection,
} from "./home-sections";
import { GridBackdrop, HazardStripe } from "./parts";

export function HomeView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(electricien, locale);
  const { paths } = electricien;
  const page = copy.home;
  const href = (path: string) => templateHref(locale, path);

  return (
    <>
      <GridBackdrop className="py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <TemplateHeading
              as="h1"
              scale="title"
              eyebrow={page.hero.eyebrow}
              title={page.hero.title}
              description={page.hero.description}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TemplateLink
                href={copy.phone.href}
                icon={<Phone aria-hidden="true" className="size-5" />}
                className="min-h-12 text-tpl-base font-extrabold tabular-nums"
              >
                {copy.cta.call} {copy.phone.label}
              </TemplateLink>
              <TemplateLink
                href={href(paths.contact)}
                variant="outline"
                className="min-h-12 bg-tpl-raised"
              >
                {copy.cta.quote}
              </TemplateLink>
            </div>
          </div>

          <TemplatePanel className="overflow-hidden border-tpl-ink p-0 shadow-tpl-lg">
            <p className="bg-tpl-inverse px-5 py-3 text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-inverse-ink uppercase">
              {page.hero.ticket.eyebrow}
            </p>
            <dl className="divide-y divide-tpl-line">
              {page.hero.ticket.rows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-4 px-5 py-4"
                >
                  <dt className="text-tpl-sm text-tpl-ink-muted">
                    {row.label}
                  </dt>
                  <dd className="text-tpl-xl leading-none font-extrabold tracking-tighter tabular-nums">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="border-t border-tpl-line bg-tpl-surface px-5 py-3 text-tpl-xs text-tpl-ink-muted">
              {page.hero.ticket.note}
            </p>
          </TemplatePanel>
        </div>
      </GridBackdrop>
      <HazardStripe />

      <CommitmentsBand locale={locale} />
      <ServicesSection locale={locale} />
      <ReviewsSection locale={locale} />
      <EmergencySection locale={locale} />
      <WorksPreview locale={locale} />
      <ClosingBand
        locale={locale}
        title={page.closing.title}
        description={page.closing.description}
      />
    </>
  );
}
