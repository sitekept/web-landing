"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle, Send } from "lucide-react";
import { useContactForm } from "./use-contact-form";

export function ContactForm() {
  const { submitStatus, errorMessage, pending, handleSubmit } =
    useContactForm();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Démarrons Votre Projet</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="contact-form" action={handleSubmit} className="space-y-6">
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
                Parfait ! Votre projet nous intéresse. Nous vous recontactons
                sous 2h pour discuter de votre stratégie.
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
        </form>
      </CardContent>
    </Card>
  );
}
