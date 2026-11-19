import type { Metadata } from "next";
import type { SiteLocale } from "@/content/site-content";
import { getMessage } from "@/lib/site-messages";
import { LegalTranslationNote, formatLegalUpdateDate } from "@/views/legal-shared";
import { buildPageMetadata } from "@/lib/page-metadata";

export function legalNoticeMetadata(locale: SiteLocale): Metadata {
  return buildPageMetadata({
    title:
      locale === "fr"
        ? "Mentions légales | Sitekept"
        : "Legal notice | Sitekept",
    description:
      locale === "fr"
        ? "Mentions légales du site sitekept.com : éditeur, directeur de la publication, hébergeur et coordonnées de contact."
        : "Legal notice for sitekept.com: publisher, publication director, hosting provider and contact details.",
    path: "/mentions-legales",
    locale,
  });
}

export function LegalNoticeView({ locale }: { locale: SiteLocale }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
              {getMessage(locale, "legalNotice.title")}
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300">
            {getMessage(locale, "legalNotice.lastUpdate", {
              date: formatLegalUpdateDate(locale),
            })}
          </p>
          <LegalTranslationNote locale={locale} />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              1. {getMessage(locale, "legalNotice.sections.editor.title")}
            </h2>
            <p className="mb-4 text-slate-600">
              {getMessage(locale, "legalNotice.sections.editor.content")}
            </p>
            <div className="mb-6 rounded-lg bg-slate-50 p-6">
              <p className="mb-2 text-slate-600">
                {getMessage(locale, "legalNotice.sections.editor.companyName")}
              </p>
              <p className="mb-2 text-slate-600">
                {getMessage(locale, "legalNotice.sections.editor.legalForm")}
              </p>
              <p className="mb-2 text-slate-600">
                {getMessage(locale, "legalNotice.sections.editor.siren")}
              </p>
              <p className="mb-2 text-slate-600">
                {getMessage(locale, "legalNotice.sections.editor.vat")}
              </p>
              <p className="mb-2 text-slate-600">
                {getMessage(locale, "legalNotice.sections.editor.address")}
              </p>
              <p className="mb-2 text-slate-600">
                {getMessage(locale, "legalNotice.sections.editor.email")}
              </p>
              <p className="mb-2 text-slate-600">
                {getMessage(locale, "legalNotice.sections.editor.phone")}
              </p>
              <p className="text-slate-600">
                {getMessage(
                  locale,
                  "legalNotice.sections.editor.publicationDirector"
                )}
              </p>
            </div>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              2. {getMessage(locale, "legalNotice.sections.hosting.title")}
            </h2>
            <p className="mb-4 text-slate-600">
              {getMessage(locale, "legalNotice.sections.hosting.content")}
            </p>
            <div className="mb-6 rounded-lg bg-slate-50 p-6">
              <p className="mb-2 text-slate-600">
                {getMessage(locale, "legalNotice.sections.hosting.hostName")}
              </p>
              <p className="text-slate-600">
                {getMessage(locale, "legalNotice.sections.hosting.hostAddress")}
              </p>
            </div>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              3.{" "}
              {getMessage(
                locale,
                "legalNotice.sections.intellectualProperty.title"
              )}
            </h2>
            <p className="mb-6 text-slate-600">
              {getMessage(
                locale,
                "legalNotice.sections.intellectualProperty.content"
              )}
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              4. {getMessage(locale, "legalNotice.sections.liability.title")}
            </h2>
            <p className="mb-6 text-slate-600">
              {getMessage(locale, "legalNotice.sections.liability.content")}
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              5. {getMessage(locale, "legalNotice.sections.personalData.title")}
            </h2>
            <p className="mb-6 text-slate-600">
              {getMessage(locale, "legalNotice.sections.personalData.content")}
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              6. {getMessage(locale, "legalNotice.sections.contact.title")}
            </h2>
            <p className="mb-6 text-slate-600">
              {getMessage(locale, "legalNotice.sections.contact.content")}
            </p>
            <div className="rounded-lg bg-slate-50 p-6">
              <p className="mb-2 text-slate-600">
                {getMessage(locale, "legalNotice.sections.contact.email")}
              </p>
              <p className="text-slate-600">
                {getMessage(locale, "legalNotice.sections.contact.phone")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
