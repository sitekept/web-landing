import { getTranslations } from "next-intl/server";

export default async function PrivacyPage() {
  const t = await getTranslations("privacy");

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300">
            {t("lastUpdate", { date: "1er janvier 2025" })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              1. {t("sections.introduction.title")}
            </h2>
            <p className="mb-6 text-slate-600">
              {t("sections.introduction.content")}
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              2. {t("sections.dataCollected.title")}
            </h2>
            <p className="mb-4 text-slate-600">
              {t("sections.dataCollected.content")}
            </p>
            <ul className="mb-6 list-disc pl-6 text-slate-600">
              {(t.raw("sections.dataCollected.items") as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              3. {t("sections.purposeOfProcessing.title")}
            </h2>
            <p className="mb-4 text-slate-600">
              {t("sections.purposeOfProcessing.content")}
            </p>
            <ul className="mb-6 list-disc pl-6 text-slate-600">
              {(t.raw("sections.purposeOfProcessing.items") as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              4. {t("sections.legalBasis.title")}
            </h2>
            <p className="mb-4 text-slate-600">
              {t("sections.legalBasis.content")}
            </p>
            <ul className="mb-6 list-disc pl-6 text-slate-600">
              {(t.raw("sections.legalBasis.items") as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              5. {t("sections.dataSharing.title")}
            </h2>
            <p className="mb-4 text-slate-600">
              {t("sections.dataSharing.content")}
            </p>
            <ul className="mb-6 list-disc pl-6 text-slate-600">
              {(t.raw("sections.dataSharing.items") as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              6. {t("sections.dataRetention.title")}
            </h2>
            <p className="mb-6 text-slate-600">
              {t("sections.dataRetention.content")}
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              7. {t("sections.dataSecurity.title")}
            </h2>
            <p className="mb-6 text-slate-600">
              {t("sections.dataSecurity.content")}
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              8. {t("sections.yourRights.title")}
            </h2>
            <p className="mb-4 text-slate-600">
              {t("sections.yourRights.content")}
            </p>
            <ul className="mb-6 list-disc pl-6 text-slate-600">
              {(t.raw("sections.yourRights.items") as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              9. {t("sections.cookies.title")}
            </h2>
            <p className="mb-6 text-slate-600">
              {t("sections.cookies.content")}
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              10. {t("sections.internationalTransfers.title")}
            </h2>
            <p className="mb-6 text-slate-600">
              {t("sections.internationalTransfers.content")}
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              11. {t("sections.modifications.title")}
            </h2>
            <p className="mb-6 text-slate-600">
              {t("sections.modifications.content")}
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              12. {t("sections.contact.title")}
            </h2>
            <p className="mb-4 text-slate-600">
              {t("sections.contact.content")}
            </p>
            <div className="mb-6 rounded-lg bg-slate-50 p-6">
              <p className="mb-2 text-slate-600">
                <strong>Email :</strong> {t("sections.contact.email")}
              </p>
              <p className="mb-4 text-slate-600">
                <strong>{t("sections.contact.phone")} :</strong>{" "}
                {t("sections.contact.phone")}
              </p>
              <p className="text-sm text-slate-600">
                {t("sections.complaints.content")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
