import {
  TemplateCard,
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { coffeeShop } from "@/content/templates/coffee-shop";
import { getTemplateCopy } from "@/content/templates/types";

import { GroupsSection } from "./infos-groups";
import { ICONS } from "./parts";

export function InfosView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(coffeeShop, locale);
  const page = copy.infos;

  return (
    <>
      <TemplateSection density="compact" className="pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <TemplateHeading
            as="h1"
            scale="title"
            eyebrow={page.hero.eyebrow}
            title={page.hero.title}
            description={page.hero.description}
          />
          <TemplateMedia
            src={page.hero.image.src}
            alt={page.hero.image.alt}
            ratio="3/2"
            sizes="(min-width: 1280px) 500px, (min-width: 1024px) 40vw, 100vw"
            priority
            className="border border-tpl-ink"
          />
        </div>
      </TemplateSection>

      <TemplateSection tone="raised" density="compact">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr_1.2fr]">
          <TemplateCard title={page.hours.title} titleAs="h2" elevation="flat">
            <dl className="mt-1 divide-y divide-tpl-line">
              {page.hours.rows.map((row) => (
                <div key={row.day} className="flex justify-between gap-4 py-2">
                  <dt>{row.day}</dt>
                  <dd className="font-bold whitespace-nowrap text-tpl-ink tabular-nums">
                    {row.time}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-tpl-xs">{page.hours.note}</p>
          </TemplateCard>

          <TemplateCard
            title={page.address.title}
            titleAs="h2"
            elevation="flat"
          >
            <p className="mt-1 text-tpl-base text-tpl-ink">
              {copy.common.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <dl className="mt-5 space-y-3">
              <div>
                <dt className="text-tpl-xs font-semibold tracking-tpl-eyebrow uppercase">
                  {page.address.phoneLabel}
                </dt>
                <dd>
                  <a
                    href={copy.phone.href}
                    className="inline-flex min-h-11 items-center font-extrabold text-tpl-ink tabular-nums underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                  >
                    {copy.phone.label}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-tpl-xs font-semibold tracking-tpl-eyebrow uppercase">
                  {page.address.emailLabel}
                </dt>
                <dd className="text-tpl-ink">{copy.common.email}</dd>
              </div>
            </dl>
          </TemplateCard>

          <TemplateCard title={page.access.title} titleAs="h2" elevation="flat">
            <ul className="mt-1 space-y-4">
              {page.access.items.map((item) => {
                const Icon = ICONS[item.icon];

                return (
                  <li key={item.title} className="flex items-start gap-3">
                    <Icon
                      aria-hidden="true"
                      className="mt-0.5 size-5 shrink-0 text-tpl-ink"
                    />
                    <div>
                      <p className="font-bold text-tpl-ink">{item.title}</p>
                      <p>{item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </TemplateCard>
        </div>
      </TemplateSection>

      <GroupsSection locale={locale} />
    </>
  );
}
