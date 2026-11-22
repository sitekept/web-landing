"use client";

import { clsx } from "clsx";
import { useId, useState, type FormEvent } from "react";

import type { TemplateLocale } from "@/content/templates/types";
/**
 * Formulaire de démonstration du kit de templates.
 *
 * Ne fait aucune requête réseau : à l'envoi, il annule la soumission, vide les
 * champs et annonce un message de statut. Les champs, libellés et le bouton
 * viennent des props (donc de la copie du template, dans chaque langue) ; les
 * seuls textes internes sont le message de statut et la mention sous le
 * bouton, ci-dessous.
 *
 * La validation native du navigateur (`required`, `type="email"`) s'applique.
 *
 * `clsx` et non `cn()` : aucune fusion de classes n'est nécessaire ici, et
 * tailwind-merge pèserait dans le JS client de chaque page du formulaire.
 *
 * Règle du kit : un nouveau besoin visuel devient d'abord un token. Il ne
 * devient un enum (prop) que s'il change le DOM ou la structure, et jamais un
 * nom de template.
 */

const MESSAGES: Record<TemplateLocale, { status: string; notice: string }> = {
  fr: {
    status: "Démonstration : aucune donnée n'est envoyée.",
    notice: "Formulaire de démonstration.",
  },
  en: {
    status: "Demo: no data is sent.",
    notice: "Demonstration form.",
  },
};

export type TemplateFormFieldType =
  | "text"
  | "email"
  | "tel"
  | "date"
  | "select"
  | "textarea"
  | "checkbox";

export type TemplateFormOption = {
  value: string;
  label: string;
};

export type TemplateFormField = {
  name: string;
  label: string;
  /** `text` par défaut. */
  type?: TemplateFormFieldType;
  /** Requis pour `select`. */
  options?: readonly TemplateFormOption[];
  required?: boolean;
  autoComplete?: string;
  /**
   * Texte d'indication. Pour un `select`, devient la première option, vide et
   * non sélectionnable.
   */
  placeholder?: string;
  /** `half` : deux champs `half` consécutifs se partagent une ligne dès `sm`. */
  width?: "full" | "half";
};

export type TemplateDemoFormProps = {
  fields: readonly TemplateFormField[];
  submitLabel: string;
  locale: TemplateLocale;
  className?: string;
};

const CONTROL =
  "min-h-11 w-full rounded-tpl border border-tpl-ink/60 bg-tpl-raised px-4 py-2.5 text-tpl-base text-tpl-ink placeholder:text-tpl-ink-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink";

export function TemplateDemoForm({
  fields,
  submitLabel,
  locale,
  className,
}: TemplateDemoFormProps) {
  const baseId = useId();
  const [submitted, setSubmitted] = useState(false);
  const messages = MESSAGES[locale];

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className={clsx("font-tpl-text text-tpl-ink", className)}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => {
          const id = `${baseId}-${field.name}`;
          const type = field.type ?? "text";

          // Case à cocher : le libellé suit la case, sur la même ligne.
          if (type === "checkbox") {
            return (
              <label
                key={field.name}
                className="flex gap-3 text-tpl-sm text-tpl-ink-muted sm:col-span-2"
              >
                <input
                  name={field.name}
                  type="checkbox"
                  required={field.required}
                  className="mt-1 size-4 shrink-0 accent-tpl-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                />
                <span>{field.label}</span>
              </label>
            );
          }

          return (
            <div
              key={field.name}
              className={clsx(
                "flex flex-col gap-2",
                field.width === "half" ? null : "sm:col-span-2"
              )}
            >
              <label htmlFor={id} className="text-tpl-sm font-semibold">
                {field.label}
                {field.required ? (
                  <span aria-hidden="true" className="ml-1">
                    *
                  </span>
                ) : null}
              </label>

              {type === "textarea" ? (
                <textarea
                  id={id}
                  name={field.name}
                  rows={5}
                  required={field.required}
                  autoComplete={field.autoComplete}
                  placeholder={field.placeholder}
                  className={clsx(CONTROL, "resize-y")}
                />
              ) : type === "select" ? (
                <select
                  id={id}
                  name={field.name}
                  required={field.required}
                  autoComplete={field.autoComplete}
                  defaultValue=""
                  className={CONTROL}
                >
                  <option value="" disabled>
                    {field.placeholder ?? ""}
                  </option>
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={id}
                  name={field.name}
                  type={type}
                  required={field.required}
                  autoComplete={field.autoComplete}
                  placeholder={field.placeholder}
                  className={CONTROL}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center rounded-tpl border border-transparent bg-tpl-accent px-5 py-2.5 text-tpl-sm font-semibold text-tpl-accent-ink transition duration-200 ease-out hover:bg-tpl-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
        >
          {submitLabel}
        </button>
        <p className="mt-3 text-tpl-xs text-tpl-ink-muted">{messages.notice}</p>
        {/* Présent dès le départ : une région `status` vide est annoncée de
            façon fiable quand son texte change. */}
        <p role="status" className="mt-3 text-tpl-sm font-semibold">
          {submitted ? messages.status : null}
        </p>
      </div>
    </form>
  );
}
