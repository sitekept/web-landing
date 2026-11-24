import {
  TemplateHeading,
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { coffeeShop } from "@/content/templates/coffee-shop";
import { getTemplateCopy } from "@/content/templates/types";

import { ClosingBand, IconBadge, PriceRow } from "./parts";

export function CarteView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(coffeeShop, locale).carte;

  return (
    <>
      <TemplateSection density="compact" className="pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <TemplateHeading
              as="h1"
              scale="display"
              eyebrow={page.hero.eyebrow}
              title={page.hero.title}
              description={page.hero.description}
            />
            <nav aria-label={page.navLabel} className="mt-9">
              <ul className="flex flex-wrap gap-2">
                {page.categories.map((category) => (
                  <li key={category.id}>
                    <TemplateLink
                      href={`#${category.id}`}
                      variant="outline"
                      shape="pill"
                      icon={false}
                    >
                      {category.short}
                    </TemplateLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <TemplateMedia
            src={page.hero.image.src}
            alt={page.hero.image.alt}
            ratio="1/1"
            sizes="(min-width: 1024px) calc(34.5vw - 27px), calc(85vw - 18px)"
            priority
            className="border border-tpl-ink lg:rotate-2"
          />
        </div>
      </TemplateSection>

      {page.categories.map((category, index) => (
        <TemplateSection
          key={category.id}
          id={category.id}
          tone={index % 2 === 0 ? "raised" : "surface"}
          density="compact"
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="text-tpl-2xl leading-tpl-display text-balance">
                {category.name}
              </h2>
              <p className="mt-4 max-w-sm text-tpl-sm text-tpl-ink-muted">
                {category.note}
              </p>
            </div>
            <ul>
              {category.items.map((item) => (
                <PriceRow
                  key={item.name}
                  name={item.name}
                  price={item.price}
                  text={item.text}
                  tags={item.tags}
                />
              ))}
            </ul>
          </div>
        </TemplateSection>
      ))}

      <TemplateSection
        title={page.notes.title}
        titleScale="subtitle"
        density="compact"
      >
        <ul className="grid gap-4 md:grid-cols-2">
          {page.notes.items.map((item) => (
            <li key={item.title}>
              <TemplatePanel className="flex h-full items-start gap-4">
                <IconBadge icon={item.icon} />
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p className="mt-1 text-tpl-sm text-tpl-ink-muted">
                    {item.text}
                  </p>
                </div>
              </TemplatePanel>
            </li>
          ))}
        </ul>
      </TemplateSection>

      <ClosingBand
        locale={locale}
        title={page.closing.title}
        text={page.closing.text}
      />
    </>
  );
}
