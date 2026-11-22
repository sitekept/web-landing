import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { ordinateur } from "@/content/templates/ordinateur";
import { getTemplateCopy } from "@/content/templates/types";

import { ANCHORS, ICONS } from "./parts";

const ICON_CLASS = "mt-1 size-6 shrink-0 text-tpl-eyebrow";

/** Contact : coordonnées et horaires à gauche, offre de diagnostic et boutons à droite. */
export function HomeContact({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(ordinateur, locale);
  const page = copy.contact;
  const AddressIcon = ICONS[page.address.icon];
  const HoursIcon = ICONS[page.hours.icon];
  const PhoneIcon = ICONS[page.phoneInfo.icon];
  const MailIcon = ICONS[page.emailInfo.icon];

  return (
    <TemplateSection id={ANCHORS.contact} tone="inverse" density="compact">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <TemplateHeading title={page.title} />
          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <AddressIcon aria-hidden="true" className={ICON_CLASS} />
              <div>
                <h3 className="mb-1 font-semibold">{page.address.label}</h3>
                <p className="text-tpl-ink-muted">
                  {page.address.lines[0]}
                  <br />
                  {page.address.lines[1]}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HoursIcon aria-hidden="true" className={ICON_CLASS} />
              <div>
                <h3 className="mb-1 font-semibold">{page.hours.label}</h3>
                <div className="space-y-1 text-tpl-ink-muted">
                  <p>{page.hours.weekdays}</p>
                  <p>{page.hours.saturday}</p>
                  <p className="text-tpl-eyebrow">{page.hours.closed}</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <PhoneIcon aria-hidden="true" className={ICON_CLASS} />
              <div>
                <h3 className="mb-1 font-semibold">{page.phoneInfo.label}</h3>
                <p>
                  <a
                    href={copy.phone.href}
                    className="text-tpl-ink-muted underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                  >
                    {copy.phone.label}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MailIcon aria-hidden="true" className={ICON_CLASS} />
              <div>
                <h3 className="mb-1 font-semibold">{page.emailInfo.label}</h3>
                <p>
                  <a
                    href={copy.email.href}
                    className="text-tpl-ink-muted underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                  >
                    {copy.email.label}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-6 font-tpl-display text-tpl-lg leading-tpl-display font-semibold">
            {page.diagnostic.title}
          </h3>
          <p className="mb-8 text-tpl-ink-muted">{page.diagnostic.text}</p>
          <div className="space-y-4">
            <TemplateLink
              href={copy.phone.href}
              icon={false}
              className="w-full"
            >
              {page.diagnostic.book}
            </TemplateLink>
            <TemplateLink
              href={copy.email.href}
              variant="outline"
              icon={false}
              className="w-full border-tpl-ink hover:bg-tpl-ink hover:text-tpl-inverse"
            >
              {page.diagnostic.quote}
            </TemplateLink>
          </div>
          <p className="mt-6 text-tpl-sm text-tpl-ink-muted">
            {page.diagnostic.note}
          </p>
        </div>
      </div>
    </TemplateSection>
  );
}
