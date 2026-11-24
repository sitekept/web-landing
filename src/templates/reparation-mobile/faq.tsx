import { ChevronDown } from "lucide-react";

import {
  TemplateHeading,
  TemplatePanel,
  TemplateLink,
  type TemplateLocale,
} from "@/components/template-kit";
import { reparationMobile } from "@/content/templates/reparation-mobile";
import { getTemplateCopy } from "@/content/templates/types";
import { templateHref } from "@/lib/template-href";

import { CallBand, PageHero, PillEyebrow } from "./parts";

export function FaqView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(reparationMobile, locale);
  const page = copy.faq;
  const contactHref = templateHref(locale, reparationMobile.paths.contact);

  return (
    <>
      <PageHero
        heading={
          <TemplateHeading
            as="h1"
            scale="title"
            eyebrow={<PillEyebrow>{page.hero.eyebrow}</PillEyebrow>}
            title={page.hero.title}
            description={page.hero.description}
          />
        }
      />

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <ul aria-label={page.listLabel} className="grid gap-3">
            {page.items.map((item) => (
              <li key={item.question}>
                <details className="group rounded-tpl border border-tpl-line bg-tpl-raised shadow-tpl-sm open:border-tpl-ink/40">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-tpl px-5 py-4 text-tpl-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <ChevronDown
                      aria-hidden="true"
                      className="size-5 shrink-0 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
                    />
                  </summary>
                  <p className="px-5 pb-5 text-tpl-sm text-tpl-ink-muted">
                    {item.answer}
                  </p>
                </details>
              </li>
            ))}
          </ul>

          <aside className="lg:sticky lg:top-28 lg:order-first lg:self-start">
            <TemplatePanel className="shadow-tpl-sm">
              <p className="font-tpl-display text-tpl-lg font-extrabold">
                {page.aside.title}
              </p>
              <p className="mt-3 text-tpl-sm text-tpl-ink-muted">
                {page.aside.text}
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <TemplateLink href={copy.phone.href} shape="pill" icon={false}>
                  {copy.cta.callWithNumber}
                </TemplateLink>
                <TemplateLink
                  href={contactHref}
                  shape="pill"
                  variant="outline"
                  icon={false}
                >
                  {copy.cta.writeUs}
                </TemplateLink>
              </div>
            </TemplatePanel>
          </aside>
        </div>
      </section>

      <CallBand
        locale={locale}
        eyebrow={copy.home.contactBand.eyebrow}
        title={copy.home.contactBand.title}
        description={copy.home.contactBand.description}
      />
    </>
  );
}
