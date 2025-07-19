import { Mail } from "lucide-react";
import { ContactForm } from "@/features/contact-form";
import { getTranslations } from "next-intl/server";

export async function Contact() {
  const t = await getTranslations("contact");

  return (
    <section id="contact" className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t("subtitle")}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-xl font-semibold text-slate-900">
                {t("formTitle")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-slate-600">sitekept@gmail.com</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold text-slate-900">
                {t("commitmentTitle")}
              </h4>
              <ul className="space-y-3 text-slate-600">
                {t
                  .raw("commitments")
                  .map((commitment: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-1 mr-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                      {commitment}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
