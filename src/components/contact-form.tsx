"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  title?: string;
  description?: string;
  className?: string;
  onSubmit?: (formData: FormData) => Promise<{ success: boolean; error?: string }>;
  showCard?: boolean;
}

interface FormStatus {
  type: "idle" | "success" | "error";
  message?: string;
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button 
      type="submit" 
      disabled={pending} 
      className="w-full sm:w-auto min-w-[140px]" 
      size="lg"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Envoi...
        </>
      ) : (
        <>
          Envoyer le Message
          <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export function ContactForm({
  title = "Envoyez-nous un message",
  description,
  className,
  onSubmit,
  showCard = true,
}: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  async function handleSubmit(formData: FormData) {
    setStatus({ type: "idle" });

    try {
      // Use provided onSubmit handler or default behavior
      const result = onSubmit 
        ? await onSubmit(formData)
        : { success: false, error: "Aucun gestionnaire de soumission fourni" };

      if (result.success) {
        setStatus({ 
          type: "success", 
          message: "Message envoyé avec succès ! Nous vous recontacterons sous 2 heures." 
        });
        
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement;
        form?.reset();
      } else {
        setStatus({ 
          type: "error", 
          message: result.error || "Échec de l'envoi du message. Veuillez réessayer." 
        });
      }
    } catch (error) {
      console.error("Erreur formulaire de contact:", error);
      setStatus({ 
        type: "error", 
        message: "Une erreur inattendue s'est produite. Veuillez réessayer." 
      });
    }
  }

  const formContent = (
    <div className={cn("w-full", className)}>
      {(title || description) && (
        <div className={cn("mb-6", !showCard && "text-center")}>
          {title && (
            <h3 className={cn(
              "text-xl font-semibold text-slate-900 mb-2",
              !showCard && "text-2xl sm:text-3xl"
            )}>
              {title}
            </h3>
          )}
          {description && (
            <p className="text-slate-600 text-sm sm:text-base">
              {description}
            </p>
          )}
        </div>
      )}

      <form
        id="contact-form"
        action={handleSubmit}
        className="space-y-4 sm:space-y-6"
      >
        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Nom *
          </Label>
          <Input
            id="name"
            name="name"
            required
            minLength={2}
            maxLength={100}
            placeholder="Votre nom complet"
            className="w-full"
            autoComplete="name"
          />
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            maxLength={255}
            placeholder="votre@email.com"
            className="w-full"
            autoComplete="email"
          />
        </div>

        {/* Subject Field (Optional) */}
        <div className="space-y-2">
          <Label htmlFor="subject" className="text-sm font-medium">
            Sujet
          </Label>
          <Input
            id="subject"
            name="subject"
            maxLength={200}
            placeholder="De quoi s'agit-il ?"
            className="w-full"
          />
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium">
            Message *
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            minLength={10}
            maxLength={2000}
            rows={5}
            placeholder="Parlez-nous de votre projet, délais et exigences spécifiques..."
            className="w-full resize-y"
          />
        </div>

        {/* Status Messages */}
        {status.type === "success" && (
          <div className="flex items-start gap-3 rounded-lg bg-green-50 p-4 text-green-800 border border-green-200">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              {status.message}
            </div>
          </div>
        )}

        {status.type === "error" && (
          <div className="flex items-start gap-3 rounded-lg bg-red-50 p-4 text-red-800 border border-red-200">
            <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              {status.message}
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <SubmitButton />
          <p className="text-xs text-slate-500 self-center">
            Nous répondons généralement sous 2 heures pendant les heures ouvrables
          </p>
        </div>
      </form>
    </div>
  );

  if (showCard) {
    return (
      <Card className={cn("w-full max-w-2xl mx-auto", className)}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && (
            <p className="text-slate-600 text-sm">{description}</p>
          )}
        </CardHeader>
        <CardContent>
          <form
            id="contact-form"
            action={handleSubmit}
            className="space-y-4 sm:space-y-6"
          >
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Nom *
              </Label>
              <Input
                id="name"
                name="name"
                required
                minLength={2}
                maxLength={100}
                placeholder="Votre nom complet"
                className="w-full"
                autoComplete="name"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                maxLength={255}
                placeholder="votre@email.com"
                className="w-full"
                autoComplete="email"
              />
            </div>

            {/* Subject Field (Optional) */}
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-sm font-medium">
                Sujet
              </Label>
              <Input
                id="subject"
                name="subject"
                maxLength={200}
                placeholder="De quoi s'agit-il ?"
                className="w-full"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Message *
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={2000}
                rows={5}
                placeholder="Parlez-nous de votre projet, délais et exigences spécifiques..."
                className="w-full resize-y"
              />
            </div>

            {/* Status Messages */}
            {status.type === "success" && (
              <div className="flex items-start gap-3 rounded-lg bg-green-50 p-4 text-green-800 border border-green-200">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  {status.message}
                </div>
              </div>
            )}

            {status.type === "error" && (
              <div className="flex items-start gap-3 rounded-lg bg-red-50 p-4 text-red-800 border border-red-200">
                <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  {status.message}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <SubmitButton />
              <p className="text-xs text-slate-500 self-center">
                Nous répondons généralement sous 2 heures pendant les heures ouvrables
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    );
  }

  return formContent;
}