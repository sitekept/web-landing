"use client";

import { Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { submitContactForm } from "../actions/contact";

export function ContactUpdated() {
  return (
    <section id="contact" className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Ready to transform your vision into reality? Get in touch and
            let&apos;s discuss your project.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-xl font-semibold text-slate-900">
                Get in Touch
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
                What to Expect
              </h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <div className="mt-1 mr-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                  Response within 2 hours during business hours
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                  Free consultation and project scoping
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                  Detailed proposal within 24 hours
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                  Project kickoff within 48 hours of approval
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full">
            <ContactForm
              title="Send us a message"
              onSubmit={submitContactForm}
              showCard={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}