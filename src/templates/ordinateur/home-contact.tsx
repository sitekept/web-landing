import {
  TemplateHeading,
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateDemoForm } from "@/components/template-kit/demo-form";
import { ordinateur } from "@/content/templates/ordinateur";
import { getTemplateCopy } from "@/content/templates/types";

import { ANCHORS, ICONS, TEXT_LINK } from "./parts";

/**
 * Contact : deux façons de remettre la machine, coordonnées et horaires à
 * gauche (7 colonnes), formulaire de prise en charge à droite (5).
 */
export function HomeContact({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(ordinateur, locale);
  const page = copy.contact;
  const form = page.form;
  const AddressIcon = ICONS[page.address.icon];
  const HoursIcon = ICONS[page.hours.icon];
  const PhoneIcon = ICONS[page.phoneInfo.icon];
  const MailIcon = ICONS[page.emailInfo.icon];
  const iconClass = "mt-1 size-5 shrink-0 text-tpl-accent";

  return (
    <TemplateSection id={ANCHORS.contact} tone="tint" density="compact">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <TemplateHeading
            id="contact-titre"
            title={page.title}
            description={page.description}
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {page.options.map((option) => {
              const Icon = ICONS[option.icon];

              return (
                <li
                  key={option.title}
                  className="border-t-2 border-tpl-ink pt-4"
                >
                  <Icon aria-hidden="true" className="size-6 text-tpl-accent" />
                  <h3 className="mt-3 font-semibold">{option.title}</h3>
                  <p className="mt-1 text-tpl-ink-muted">{option.text}</p>
                </li>
              );
            })}
          </ul>
          <div className="mt-10 grid gap-x-8 gap-y-6 border-t border-tpl-line pt-8 sm:grid-cols-2">
            <div className="flex gap-3">
              <AddressIcon aria-hidden="true" className={iconClass} />
              <div>
                <h3 className="font-semibold">{page.address.label}</h3>
                <p className="mt-1 text-tpl-ink-muted">
                  {page.address.lines[0]}
                  <br />
                  {page.address.lines[1]}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <HoursIcon aria-hidden="true" className={iconClass} />
              <div>
                <h3 className="font-semibold">{page.hours.label}</h3>
                <p className="mt-1 text-tpl-ink-muted">
                  {page.hours.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <PhoneIcon aria-hidden="true" className={iconClass} />
              <div>
                <h3 className="font-semibold">{page.phoneInfo.label}</h3>
                <p className="mt-1">
                  <a
                    href={copy.phone.href}
                    className={`${TEXT_LINK} inline-flex min-h-11 items-center tabular-nums`}
                  >
                    {copy.phone.label}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <MailIcon aria-hidden="true" className={iconClass} />
              <div>
                <h3 className="font-semibold">{page.emailInfo.label}</h3>
                <p className="mt-1">
                  <a
                    href={copy.email.href}
                    className={`${TEXT_LINK} inline-flex min-h-11 items-center break-all`}
                  >
                    {copy.email.label}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <TemplatePanel className="self-start p-6 shadow-tpl-sm sm:p-8 lg:col-span-5">
          <TemplateHeading as="h3" scale="subtitle" title={form.title} />
          <TemplateDemoForm
            locale={locale}
            className="mt-6"
            submitLabel={form.submit}
            fields={[
              {
                name: "name",
                label: form.name,
                required: true,
                autoComplete: "name",
                width: "half",
              },
              {
                name: "phone",
                label: form.phone,
                type: "tel",
                required: true,
                autoComplete: "tel",
                width: "half",
              },
              {
                name: "kind",
                label: form.kind.label,
                type: "select",
                options: form.kind.options,
                placeholder: form.kind.placeholder,
                required: true,
              },
              {
                name: "mode",
                label: form.mode.label,
                type: "select",
                options: form.mode.options,
                placeholder: form.mode.placeholder,
                required: true,
              },
              { name: "message", label: form.message, type: "textarea" },
            ]}
          />
        </TemplatePanel>
      </div>
    </TemplateSection>
  );
}
