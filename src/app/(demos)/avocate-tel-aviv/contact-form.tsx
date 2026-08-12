"use client";

import { useState, type FormEvent } from "react";

const fieldClass =
  "mt-2 min-h-11 w-full rounded-[6px] border border-[#cdbdad] bg-white px-3 py-3 text-sm text-[#2b1d17] outline-none transition placeholder:text-[#7b5c48]/54 focus:border-[#6f4e3c] focus:ring-2 focus:ring-[#8a654e]/22";

const subjects = [
  "Immobilier",
  "Succession France-Israël",
  "Question transfrontalière",
  "Premier échange",
];

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-[8px] border border-[#d8c9ba] bg-[#fffaf4] p-5 shadow-[0_18px_50px_rgba(58,40,32,0.08)] sm:p-6 ${
        compact ? "lg:p-6" : "lg:p-8"
      }`}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="text-sm font-semibold text-[#2b1d17]"
          >
            Nom
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={fieldClass}
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="text-sm font-semibold text-[#2b1d17]"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldClass}
          />
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="text-sm font-semibold text-[#2b1d17]"
          >
            Téléphone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
          />
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="text-sm font-semibold text-[#2b1d17]"
          >
            Sujet
          </label>
          <select
            id="contact-subject"
            name="subject"
            required
            className={fieldClass}
            defaultValue=""
          >
            <option value="" disabled>
              Sélectionner un sujet
            </option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="contact-message"
          className="text-sm font-semibold text-[#2b1d17]"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={compact ? 4 : 6}
          required
          className={`${fieldClass} resize-y leading-6`}
        />
      </div>

      <label className="mt-5 flex gap-3 text-sm leading-6 text-[#3a2820]/78">
        <input
          name="consent"
          type="checkbox"
          required
          className="mt-1 size-4 rounded-[4px] border-[#8a654e] text-[#3a2820] focus:ring-[#8a654e]"
        />
        <span>
          J’accepte d’être recontacté concernant ma demande. Ce formulaire est
          une interface alpha, sans envoi API pour le moment.
        </span>
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center rounded-[6px] border border-[#3a2820] bg-[#3a2820] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2b1d17] focus-visible:ring-2 focus-visible:ring-[#8a654e] focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          Envoyer la demande
        </button>

        {submitted ? (
          <p
            role="status"
            aria-live="polite"
            className="text-sm leading-6 font-medium text-[#5d3c2d]"
          >
            Demande enregistrée côté interface. L’intégration API pourra être
            ajoutée ensuite.
          </p>
        ) : null}
      </div>
    </form>
  );
}
