import type { Metadata } from "next";
import {
  adminTemplateCatalog,
  type TemplateAdminStatus,
} from "@/content/admin-template-catalog";

export const metadata: Metadata = {
  title: "Catalogue admin templates | SiteKept",
  description: "Catalogue interne des templates SiteKept et de leurs statuts.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const statusLabel: Record<TemplateAdminStatus, string> = {
  "sitekept-public": "SiteKept public",
  "admin-only": "Admin only",
  lab: "Lab",
  archived: "Archivé",
};

const statusClassName: Record<TemplateAdminStatus, string> = {
  "sitekept-public": "border-emerald-200 bg-emerald-50 text-emerald-800",
  "admin-only": "border-blue-200 bg-blue-50 text-blue-800",
  lab: "border-amber-200 bg-amber-50 text-amber-900",
  archived: "border-slate-200 bg-slate-100 text-slate-600",
};

const statusOrder: TemplateAdminStatus[] = [
  "sitekept-public",
  "admin-only",
  "lab",
  "archived",
];

export default function AdminTemplatesPage() {
  const counts = statusOrder.map((status) => ({
    status,
    count: adminTemplateCatalog.filter(
      (template) => template.adminStatus === status
    ).length,
  }));

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        <section className="border-b border-white/10 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-200">
            Admin hidden catalog
          </p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Catalogue complet des templates
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
                Toutes les templates ont une URL Vercel stable. Le statut admin
                décide lesquelles apparaissent publiquement sur sitekept.com.
                Cette page n&apos;est pas reliée depuis le site public.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:min-w-[520px]">
              {counts.map(({ status, count }) => (
                <div
                  key={status}
                  className="rounded-md border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-2xl font-semibold">{count}</p>
                  <p className="mt-1 text-xs text-slate-300">
                    {statusLabel[status]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-md border border-white/10 bg-white">
          <div className="hidden grid-cols-[1.15fr_0.85fr_0.8fr_1.2fr_1.1fr] gap-4 border-b border-slate-200 bg-slate-50 px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 lg:grid">
            <span>Template</span>
            <span>Statut</span>
            <span>Présence</span>
            <span>Liens</span>
            <span>Note</span>
          </div>

          <div className="divide-y divide-slate-200">
            {adminTemplateCatalog.map((template) => (
              <article
                key={template.slug}
                className="grid gap-4 px-5 py-5 text-slate-950 lg:grid-cols-[1.15fr_0.85fr_0.8fr_1.2fr_1.1fr] lg:items-center"
              >
                <div>
                  <h2 className="text-base font-semibold">{template.name}</h2>
                  <p className="mt-1 font-mono text-xs text-slate-500">
                    /{template.slug}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    {template.sector}
                  </p>
                </div>

                <div>
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${statusClassName[template.adminStatus]}`}
                  >
                    {statusLabel[template.adminStatus]}
                  </span>
                </div>

                <p className="text-sm text-slate-600">
                  {template.routeStatus}
                </p>

                <div className="flex flex-wrap gap-2 text-sm font-medium">
                  <a
                    href={template.vercelUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-slate-950 px-3 py-1.5 text-white transition hover:bg-slate-800"
                  >
                    Vercel
                  </a>
                  {template.sitekeptUrl ? (
                    <a
                      href={template.sitekeptUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-blue-200 px-3 py-1.5 text-blue-800 transition hover:border-blue-400"
                    >
                      SiteKept
                    </a>
                  ) : null}
                </div>

                <p className="text-sm leading-6 text-slate-600">
                  {template.notes}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
