"use client";

import { useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle, Send } from "lucide-react";
import { PhoneField } from "./phone-field";
import { useContactForm } from "./use-contact-form";

interface ContactFormMessages {
  title: string;
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  phone: string;
  phoneInvalid: string;
  project: string;
  projectPlaceholder: string;
  required: string;
  submitting: string;
  submit: string;
  successMessage: string;
  errorMessage: string;
}

interface ContactFormProps {
  messages: ContactFormMessages;
}

// useFormStatus ne lit l'état que d'un <form> parent : le bouton doit être un
// composant enfant du formulaire pour voir l'envoi en cours.
function SubmitButton({
  label,
  pendingLabel,
}: {
  label: string;
  pendingLabel: string;
}) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full" size="lg">
      {pending ? (
        pendingLabel
      ) : (
        <>
          {label}
          <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export function ContactForm({ messages }: ContactFormProps) {
  const {
    submitStatus,
    errorMessage,
    phone,
    phoneInvalid,
    handlePhoneChange,
    validatePhone,
    handleSubmit,
  } = useContactForm();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{messages.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          id="contact-form"
          action={handleSubmit}
          onSubmit={validatePhone}
          className="space-y-6"
        >
          {/* Piège à robots : invisible pour un visiteur, voir l'action serveur. */}
          <input
            type="text"
            name="site_url"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] h-px w-px opacity-0"
          />

          <div>
            <Label htmlFor="name">
              {messages.name} {messages.required}
            </Label>
            <Input
              id="name"
              name="name"
              required
              className="mt-1"
              placeholder={messages.namePlaceholder}
            />
          </div>

          <div>
            <Label htmlFor="email">
              {messages.email} {messages.required}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1"
              placeholder={messages.emailPlaceholder}
            />
          </div>

          <div>
            <Label htmlFor="phone">
              {messages.phone} {messages.required}
            </Label>
            <PhoneField
              id="phone"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
              invalid={phoneInvalid}
              describedBy={phoneInvalid ? "phone-help" : undefined}
            />
            {phoneInvalid && (
              <p id="phone-help" className="mt-1 text-sm text-red-700">
                {messages.phoneInvalid}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="message">
              {messages.project} {messages.required}
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              className="mt-1"
              rows={5}
              placeholder={messages.projectPlaceholder}
            />
          </div>

          {submitStatus === "success" && (
            <div className="flex items-start rounded-md bg-green-50 p-4 text-green-800">
              <CheckCircle className="mr-2 h-5 w-5 shrink-0" />
              <span className="text-sm">{messages.successMessage}</span>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-start rounded-md bg-red-50 p-4 text-red-800">
              <AlertCircle className="mr-2 h-5 w-5 shrink-0" />
              <span className="text-sm">{errorMessage || messages.errorMessage}</span>
            </div>
          )}

          <SubmitButton
            label={messages.submit}
            pendingLabel={messages.submitting}
          />
        </form>
      </CardContent>
    </Card>
  );
}
