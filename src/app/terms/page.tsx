import { getMessage, getRawMessage, getSiteLocale } from "@/lib/site-messages";

export default async function TermsPage() {
  const locale = await getSiteLocale();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
              {getMessage(locale, "terms.title")}
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300">
            {getMessage(locale, "terms.lastUpdate", {
              date: "1er janvier 2025",
            })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              1. {getMessage(locale, "terms.sections.acceptance.title")}
            </h2>
            <p className="mb-6 text-slate-600">
              {getMessage(locale, "terms.sections.acceptance.content")}
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              2. {getMessage(locale, "terms.sections.serviceDescription.title")}
            </h2>
            <p className="mb-4 text-slate-600">
              {getMessage(locale, "terms.sections.serviceDescription.content")}
            </p>
            <ul className="mb-6 list-disc pl-6 text-slate-600">
              {(getRawMessage(
                locale,
                "terms.sections.serviceDescription.items"
              ) as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              3. {getMessage(locale, "terms.sections.clientObligations.title")}
            </h2>
            <p className="mb-4 text-slate-600">
              {getMessage(locale, "terms.sections.clientObligations.content")}
            </p>
            <ul className="mb-6 list-disc pl-6 text-slate-600">
              {(getRawMessage(
                locale,
                "terms.sections.clientObligations.items"
              ) as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              4. {getMessage(locale, "terms.sections.intellectualProperty.title")}
            </h2>
            <p className="mb-6 text-slate-600">
              {getMessage(locale, "terms.sections.intellectualProperty.content")}
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              5. {getMessage(locale, "terms.sections.pricing.title")}
            </h2>
            <p className="mb-4 text-slate-600">
              {getMessage(locale, "terms.sections.pricing.content")}
            </p>
            <ul className="mb-6 list-disc pl-6 text-slate-600">
              {(getRawMessage(
                locale,
                "terms.sections.pricing.items"
              ) as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              6. {getMessage(locale, "terms.sections.deliveryTimes.title")}
            </h2>
            <p className="mb-6 text-slate-600">
              {getMessage(locale, "terms.sections.deliveryTimes.content")}
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              7. {getMessage(locale, "terms.sections.warranties.title")}
            </h2>
            <p className="mb-6 text-slate-600">
              {getMessage(locale, "terms.sections.warranties.content")}
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              8. {getMessage(locale, "terms.sections.liability.title")}
            </h2>
            <p className="mb-6 text-slate-600">
              {getMessage(locale, "terms.sections.liability.content")}
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              9. {getMessage(locale, "terms.sections.termination.title")}
            </h2>
            <p className="mb-6 text-slate-600">
              {getMessage(locale, "terms.sections.termination.content")}
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              10. {getMessage(locale, "terms.sections.applicableLaw.title")}
            </h2>
            <p className="mb-6 text-slate-600">
              {getMessage(locale, "terms.sections.applicableLaw.content")}
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              11. {getMessage(locale, "terms.sections.modifications.title")}
            </h2>
            <p className="mb-6 text-slate-600">
              {getMessage(locale, "terms.sections.modifications.content")}
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              12. {getMessage(locale, "terms.sections.contact.title")}
            </h2>
            <p className="mb-6 text-slate-600">
              {getMessage(locale, "terms.sections.contact.content")}
            </p>
            <div className="rounded-lg bg-slate-50 p-6">
              <p className="mb-2 text-slate-600">
                <strong>{getMessage(locale, "terms.sections.contact.email")}</strong> :{" "}
                {getMessage(locale, "terms.sections.contact.email")}
              </p>
              <p className="text-slate-600">
                <strong>{getMessage(locale, "terms.sections.contact.phone")}</strong> :{" "}
                {getMessage(locale, "terms.sections.contact.phone")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
