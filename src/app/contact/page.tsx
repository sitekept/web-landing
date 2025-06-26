import { Metadata } from "next";
import { ContactFormStandalone } from "@/components/contact-form-standalone";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { submitContactForm } from "../actions/contact";

export const metadata: Metadata = {
  title: "Nous Contacter - SiteKept",
  description: "Contactez SiteKept pour votre prochain projet de développement web. Nous répondons sous 2 heures pendant les heures ouvrables.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Travaillons{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
              Ensemble
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Prêt à donner vie à votre vision ? Nous sommes là pour vous aider à construire quelque chose d&apos;extraordinaire.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-slate-900">
                  Nous Contacter
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 font-semibold text-slate-900">Email</h3>
                    <p className="text-slate-600">sitekept@gmail.com</p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-slate-900">Temps de Réponse</h3>
                    <p className="text-slate-600">Sous 2 heures pendant les heures ouvrables</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-semibold text-slate-900">
                  Notre Processus
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-blue-600" />
                    <div>
                      <h4 className="font-medium text-slate-900">1. Consultation Initiale</h4>
                      <p className="text-sm text-slate-600">Nous discutons des exigences et objectifs de votre projet</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-blue-600" />
                    <div>
                      <h4 className="font-medium text-slate-900">2. Proposition & Délais</h4>
                      <p className="text-sm text-slate-600">Portée détaillée du projet et calendrier de livraison</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-blue-600" />
                    <div>
                      <h4 className="font-medium text-slate-900">3. Développement & Lancement</h4>
                      <p className="text-sm text-slate-600">Développement rapide et déploiement fluide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactFormStandalone
                title="Démarrer Votre Projet"
                description="Parlez-nous de votre projet et nous vous recontacterons avec une proposition détaillée."
                onSubmit={submitContactForm}
                showCard={true}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}