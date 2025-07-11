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
        "Envoi en cours..."
      ) : (
        <>
          Lancer Mon Projet
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
      setErrorMessage(result.error || "Échec de l'envoi du message");
    }
  }

  return (
    <section id="contact" className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Transformons Votre Vision en Succès
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Prêt à révolutionner votre présence en ligne ? Contactez-nous et découvrez comment nous pouvons propulser votre business vers de nouveaux sommets.
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

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Démarrons Votre Projet</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                id="contact-form"
                action={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <Label htmlFor="name">Nom *</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    minLength={2}
                    className="mt-1"
                    placeholder="Votre nom complet"
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
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Décrivez votre projet *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    className="mt-1"
                    rows={5}
                    placeholder="Parlez-nous de votre vision, vos objectifs, votre secteur d'activité et vos attentes..."
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="flex items-center rounded-md bg-green-50 p-4 text-green-800">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    <span className="text-sm">
                      Parfait ! Votre projet nous intéresse. Nous vous recontactons sous 2h pour discuter de votre stratégie.
                    </span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center rounded-md bg-red-50 p-4 text-red-800">
                    <AlertCircle className="mr-2 h-5 w-5" />
                    <span className="text-sm">
                      {errorMessage ||
                        "Erreur technique. Contactez-nous directement par email ou réessayez."}
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