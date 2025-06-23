"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { submitContactForm } from "../actions/contact";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full" size="lg">
      {pending ? (
        "Sending..."
      ) : (
        <>
          Send Message
          <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export function Contact() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(formData: FormData) {
    setSubmitStatus("idle");
    setErrorMessage("");

    const result = await submitContactForm(formData);

    if (result.success) {
      setSubmitStatus("success");
      // Reset form by reloading the page or using a ref to reset
      const form = document.getElementById("contact-form") as HTMLFormElement;
      form?.reset();
    } else {
      setSubmitStatus("error");
      setErrorMessage(result.error || "Failed to send message");
    }
  }

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
                {/* TODO: Add phone number 
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-slate-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-slate-600">Paris, France</span>
                </div>
                */}
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
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                id="contact-form"
                action={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    minLength={2}
                    className="mt-1"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    className="mt-1"
                    rows={5}
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="flex items-center rounded-md bg-green-50 p-4 text-green-800">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    <span className="text-sm">
                      Message sent successfully! We&apos;ll get back to you
                      within 2 hours.
                    </span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center rounded-md bg-red-50 p-4 text-red-800">
                    <AlertCircle className="mr-2 h-5 w-5" />
                    <span className="text-sm">
                      {errorMessage ||
                        "Failed to send message. Please try again or email us directly."}
                    </span>
                  </div>
                )}

                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
