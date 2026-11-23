import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { TemplatePanel, type TemplateLocale } from "@/components/template-kit";
import { cabinetAvocat } from "@/content/templates/cabinet-avocat";
import { getTemplateCopy } from "@/content/templates/types";

import { LABEL } from "./parts";

/** Colonne de droite : la première consultation (durée, lieu, tarif) et les coordonnées. */
export function ConsultationAside({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(cabinetAvocat, locale);
  const { info } = copy.consultation;
  const { contact } = copy;
  const icon = "mt-0.5 size-4 shrink-0 text-tpl-ink";

  return (
    <div className="grid gap-6">
      <TemplatePanel tone="tint" className="p-6 sm:p-8">
        <h2 className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
          {info.title}
        </h2>
        <dl className="mt-5 divide-y divide-tpl-line border-y border-tpl-line">
          {info.rows.map((row) => (
            <div key={row.label} className="py-3">
              <dt className={LABEL}>{row.label}</dt>
              <dd className="mt-1 text-tpl-sm font-semibold text-pretty">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </TemplatePanel>
      <TemplatePanel className="p-6 sm:p-8">
        <h2 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
          {info.contactTitle}
        </h2>
        <ul className="mt-4 space-y-3 text-tpl-sm">
          <li className="flex items-start gap-3">
            <Phone aria-hidden="true" className={icon} />
            <span className="sr-only">{contact.labels.phone}</span>
            <a
              href={contact.phone.href}
              className="inline-flex min-h-11 items-center tabular-nums underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
            >
              {contact.phone.label}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <Mail aria-hidden="true" className={icon} />
            <span className="sr-only">{contact.labels.email}</span>
            {contact.email}
          </li>
          <li className="flex items-start gap-3">
            <MapPin aria-hidden="true" className={icon} />
            <span className="sr-only">{contact.labels.address}</span>
            {contact.address}
          </li>
          <li className="flex items-start gap-3">
            <Clock aria-hidden="true" className={icon} />
            <span className="sr-only">{contact.labels.hours}</span>
            {contact.hours}
          </li>
        </ul>
      </TemplatePanel>
    </div>
  );
}
