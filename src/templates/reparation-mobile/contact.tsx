import {
  TemplateCard,
  TemplateHeading,
  TemplatePanel,
  type TemplateLocale,
} from "@/components/template-kit";
import { templateHref } from "@/lib/template-href";
import { TemplateDemoForm } from "@/components/template-kit/demo-form";
import { reparationMobile } from "@/content/templates/reparation-mobile";
import { getTemplateCopy } from "@/content/templates/types";

import { CallBand, HoursList, IconChip, PageHero, PillEyebrow } from "./parts";

export function ContactView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(reparationMobile, locale);
  const page = copy.contact;
  const labels = page.form.fields;

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
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <TemplateCard
            title={page.form.title}
            titleAs="h2"
            elevation="floating"
            className="p-6 sm:p-8"
          >
            <p className="mb-6">{page.form.description}</p>
            <TemplateDemoForm
              locale={locale}
              submitLabel={page.form.submit}
              fields={[
                {
                  name: "name",
                  label: labels.name,
                  autoComplete: "name",
                  required: true,
                  width: "half",
                },
                {
                  name: "phone",
                  label: labels.phone,
                  type: "tel",
                  autoComplete: "tel",
                  required: true,
                  width: "half",
                },
                {
                  name: "email",
                  label: labels.email,
                  type: "email",
                  autoComplete: "email",
                },
                {
                  name: "device",
                  label: labels.device,
                  placeholder: labels.devicePlaceholder,
                  required: true,
                },
                {
                  name: "issue",
                  label: labels.issue,
                  type: "select",
                  placeholder: labels.issuePlaceholder,
                  options: page.form.issueOptions,
                  required: true,
                  width: "half",
                },
                {
                  name: "mode",
                  label: labels.mode,
                  type: "select",
                  placeholder: labels.modePlaceholder,
                  options: page.form.modeOptions,
                  required: true,
                  width: "half",
                },
                {
                  name: "message",
                  label: labels.message,
                  type: "textarea",
                  placeholder: labels.messagePlaceholder,
                },
              ]}
            />
          </TemplateCard>

          <div className="grid content-start gap-5">
            <TemplatePanel className="shadow-tpl-sm">
              <p className="text-tpl-sm font-semibold">{copy.details.label}</p>
              <ul className="mt-4 grid gap-4">
                {copy.details.items.map((item) => (
                  <li key={item.label} className="flex items-center gap-4">
                    <IconChip icon={item.icon} />
                    <div className="min-w-0">
                      <p className="text-tpl-xs text-tpl-ink-muted">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="inline-flex min-h-11 items-center text-tpl-base font-semibold break-words underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-tpl-base font-semibold">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </TemplatePanel>

            <TemplatePanel className="shadow-tpl-sm">
              <HoursList locale={locale} />
            </TemplatePanel>

            <div
              data-tone="inverse"
              className="rounded-tpl bg-tpl-inverse p-6 text-tpl-ink shadow-tpl-sm"
            >
              <h2 className="font-tpl-display text-tpl-lg font-extrabold">
                {page.homeCard.title}
              </h2>
              <p className="mt-2 text-tpl-sm text-tpl-ink-muted">
                {page.homeCard.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallBand
        locale={locale}
        title={page.closing.title}
        description={page.closing.description}
        secondary={{
          href: templateHref(locale, reparationMobile.paths.faq),
          label: copy.cta.readFaq,
        }}
      />
    </>
  );
}
