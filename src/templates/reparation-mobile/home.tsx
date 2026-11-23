import { Clock } from "lucide-react";

import {
  TemplateHeading,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { reparationMobile } from "@/content/templates/reparation-mobile";
import { getTemplateCopy } from "@/content/templates/types";
import { templateHref } from "@/lib/template-href";

import { Brands, HomeService, Popular, Proof, Steps } from "./home-sections";
import {
  CallBand,
  HEADING_CLASS,
  IconChip,
  PillEyebrow,
  QuoteCallActions,
} from "./parts";

function Hero({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(reparationMobile, locale);
  const page = copy.home.hero;

  return (
    <section className="relative overflow-hidden px-4 pt-10 pb-14 sm:px-6 lg:px-8 lg:pt-16 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -right-28 size-[30rem] rounded-full bg-tpl-accent/20 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <div className={HEADING_CLASS}>
            <TemplateHeading
              as="h1"
              scale="title"
              eyebrow={<PillEyebrow>{page.eyebrow}</PillEyebrow>}
              title={page.title}
              description={page.description}
            />
          </div>
          <div className="mt-8">
            <QuoteCallActions locale={locale} />
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {page.trust.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <IconChip icon={item.icon} className="size-10" />
                <div>
                  <p className="text-tpl-sm font-semibold">{item.title}</p>
                  <p className="text-tpl-xs text-tpl-ink-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <TemplateMedia
            src={page.image.src}
            alt={page.image.alt}
            ratio="4/5"
            sizes="(min-width: 640px) 828px, calc(95.5vw - 18px)"
            priority
            className="aspect-[4/3] shadow-tpl-lg sm:aspect-[4/5]"
          />
          <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-tpl-pill bg-tpl-raised py-2 pr-5 pl-2 shadow-tpl-lg">
            <span
              aria-hidden="true"
              className="flex size-10 items-center justify-center rounded-tpl-pill bg-tpl-accent text-tpl-accent-ink"
            >
              <Clock className="size-5" />
            </span>
            <p className="text-tpl-xs leading-tight text-tpl-ink-muted">
              {page.badge.label}
              <span className="block text-tpl-base font-extrabold text-tpl-ink">
                {page.badge.value}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(reparationMobile, locale);
  const band = copy.home.contactBand;

  return (
    <>
      <Hero locale={locale} />
      <Steps locale={locale} />
      <Popular locale={locale} />
      <Proof locale={locale} />
      <HomeService locale={locale} />
      <Brands locale={locale} />
      <CallBand
        locale={locale}
        eyebrow={band.eyebrow}
        title={band.title}
        description={band.description}
        secondary={{
          href: templateHref(locale, reparationMobile.paths.contact),
          label: copy.cta.quote,
        }}
      />
    </>
  );
}
