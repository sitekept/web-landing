import { Mail } from "lucide-react";
import { ContactForm } from "@/features/contact-form";

export function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Transformons Votre Vision en Succès
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Prêt à révolutionner votre présence en ligne ? Contactez-nous et
            découvrez comment nous pouvons propulser votre business vers de
            nouveaux sommets.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-xl font-semibold text-slate-900">
                Parlons de Votre Projet
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
                Notre Engagement
              </h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <div className="mt-1 mr-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                  Réponse sous 2h pendant les heures ouvrables
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                  Consultation stratégique gratuite et sans engagement
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                  Proposition détaillée sous 24h
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                  Démarrage de votre projet sous 48h
                </li>
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
