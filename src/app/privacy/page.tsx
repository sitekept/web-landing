import { getMessage, getRawMessage, getSiteLocale } from "@/lib/site-messages";

export default async function PrivacyPage() {
  const locale = await getSiteLocale();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
              {getMessage(locale, "privacy.title")}
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300">
            {getMessage(locale, "privacy.lastUpdate", {
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
              1. {getMessage(locale, "privacy.sections.introduction.title")}
            </h2>
            <p className="mb-6 text-slate-600">
              {getMessage(locale, "privacy.sections.introduction.content")}
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              2. {getMessage(locale, "privacy.sections.dataCollected.title")}
            </h2>
            <p className="mb-4 text-slate-600">
              {getMessage(locale, "privacy.sections.dataCollected.content")}
            </p>
            <ul className="mb-6 list-disc pl-6 text-slate-600">
              {(getRawMessage(
                locale,
                "privacy.sections.dataCollected.items"
              ) as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              3.{" "}
              {getMessage(locale, "privacy.sections.purposeOfProcessing.title")}
            </h2>
            <p className="mb-4 text-slate-600">
              {getMessage(locale, "privacy.sections.purposeOfProcessing.content")}
            </p>
            <ul className="mb-6 list-disc pl-6 text-slate-600">
              {(getRawMessage(
                locale,
                "privacy.sections.purposeOfProcessing.items"
              ) as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              4. {getMessage(locale, "privacy.sections.legalBasis.title")}
            </h2>
            <p className="mb-4 text-slate-600">
              {getMessage(locale, "privacy.sections.legalBasis.content")}
            </p>
            <ul className="mb-6 list-disc pl-6 text-slate-600">
              {(getRawMessage(
                locale,
                "privacy.sections.legalBasis.items"
              ) as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              5. {getMessage(locale, "privacy.sections.dataSharing.title")}
            </h2>
            <p className="mb-4 text-slate-600">
              {getMessage(locale, "privacy.sections.dataSharing.content")}
            </p>
            <ul className="mb-6 list-disc pl-6 text-slate-600">
              {(getRawMessage(
                locale,
                "privacy.sections.dataSharing.items"
              ) as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              6. {getMessage(locale, "privacy.sections.dataRetention.title")}
            </h2>
            <p className="mb-6 text-slate-600">
              {getMessage(locale, "privacy.sections.dataRetention.content")}
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              7. {getMessage(locale, "privacy.sections.dataSecurity.title")}
            </h2>
            <p className="mb-6 text-slate-600">
              {getMessage(locale, "privacy.sections.dataSecurity.content")}
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              8. {getMessage(locale, "privacy.sections.yourRights.title")}
            </h2>
            <p className="mb-4 text-slate-600">
              {getMessage(locale, "privacy.sections.yourRights.content")}
            </p>
            <ul className="mb-6 list-disc pl-6 text-slate-600">
              {(getRawMessage(
                locale,
                "privacy.sections.yourRights.items"
              ) as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              9. {getMessage(locale, "privacy.sections.cookies.title")}
            </h2>
            <p className="mb-6 text-slate-600">
              {getMessage(locale, "privacy.sections.cookies.content")}
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              10.{" "}
              {getMessage(locale, "privacy.sections.internationalTransfers.title")}
            </h2>
            <p className="mb-6 text-slate-600">
              {getMessage(
                locale,
                "privacy.sections.internationalTransfers.content"
              )}
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              11. {getMessage(locale, "privacy.sections.modifications.title")}
            </h2>
            <p className="mb-6 text-slate-600">
              {getMessage(locale, "privacy.sections.modifications.content")}
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              12. {getMessage(locale, "privacy.sections.contact.title")}
            </h2>
            <p className="mb-4 text-slate-600">
              {getMessage(locale, "privacy.sections.contact.content")}
            </p>
            <div className="mb-6 rounded-lg bg-slate-50 p-6">
              <p className="mb-2 text-slate-600">
                <strong>Email :</strong>{" "}
                {getMessage(locale, "privacy.sections.contact.email")}
              </p>
              <p className="mb-4 text-slate-600">
                <strong>{getMessage(locale, "privacy.sections.contact.phone")} :</strong>{" "}
                {getMessage(locale, "privacy.sections.contact.phone")}
              </p>
              <p className="text-sm text-slate-600">
                {getMessage(locale, "privacy.sections.complaints.content")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
