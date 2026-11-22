import type { TemplateLocale } from "@/components/template-kit";
import { expertComptable } from "@/content/templates/expert-comptable";
import { getTemplateCopy } from "@/content/templates/types";

import { MissionsCalendar } from "./missions-calendar";
import { MissionsList } from "./missions-list";
import { MissionsProfiles } from "./missions-profiles";
import { ClosingCta, PageHero } from "./parts";

/** Missions : registre détaillé, calendrier d'une année type, profils, appel final. */
export function MissionsView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(expertComptable, locale).missionsPage;

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        image={page.hero.image}
      />
      <MissionsList locale={locale} />
      <MissionsCalendar locale={locale} />
      <MissionsProfiles locale={locale} />
      <ClosingCta
        locale={locale}
        title={page.closing.title}
        text={page.closing.text}
      />
    </>
  );
}
