import {
  TemplateHeading,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { garageAuto } from "@/content/templates/garage-auto";
import { getTemplateCopy } from "@/content/templates/types";

import { ClosingBand } from "./closing";
import { CustomWorks, SampleQuote } from "./devis-sample";
import { QuoteFormSection } from "./devis-form";
import { PageHero } from "./parts";

export function DevisView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(garageAuto, locale).devis;

  return (
    <>
      <PageHero
        aside={
          <TemplateMedia
            src={page.hero.image.src}
            alt={page.hero.image.alt}
            ratio="4/3"
            sizes="(min-width: 1024px) 45vw, 100vw"
            rounded="none"
            priority
          />
        }
      >
        <TemplateHeading
          as="h1"
          scale="title"
          eyebrow={page.hero.eyebrow}
          title={page.hero.title}
          description={page.hero.description}
        />
      </PageHero>
      <QuoteFormSection locale={locale} />
      <SampleQuote locale={locale} />
      <CustomWorks locale={locale} />
      <ClosingBand
        locale={locale}
        skip="devis"
        title={page.closing.title}
        description={page.closing.description}
      />
    </>
  );
}
