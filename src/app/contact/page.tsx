import { Metadata } from "next";
import { ContactFormStandalone } from "@/components/contact-form-standalone";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { submitContactForm } from "../actions/contact";

export const metadata: Metadata = {
  title: "Contact Us - SiteKept",
  description: "Get in touch with SiteKept for your next web development project. We respond within 2 hours during business hours.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s Work{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
              Together
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Ready to bring your vision to life? We&apos;re here to help you build something amazing.
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
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 font-semibold text-slate-900">Email</h3>
                    <p className="text-slate-600">sitekept@gmail.com</p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-slate-900">Response Time</h3>
                    <p className="text-slate-600">Within 2 hours during business hours</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-semibold text-slate-900">
                  Our Process
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-blue-600" />
                    <div>
                      <h4 className="font-medium text-slate-900">1. Initial Consultation</h4>
                      <p className="text-sm text-slate-600">We discuss your project requirements and goals</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-blue-600" />
                    <div>
                      <h4 className="font-medium text-slate-900">2. Proposal & Timeline</h4>
                      <p className="text-sm text-slate-600">Detailed project scope and delivery timeline</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-blue-600" />
                    <div>
                      <h4 className="font-medium text-slate-900">3. Development & Launch</h4>
                      <p className="text-sm text-slate-600">Fast development and seamless deployment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactFormStandalone
                title="Start Your Project"
                description="Tell us about your project and we'll get back to you with a detailed proposal."
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