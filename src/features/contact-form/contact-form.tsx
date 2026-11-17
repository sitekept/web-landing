"use client";

import type { MouseEvent } from "react";
import { useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle, Send } from "lucide-react";
import {
  CONTACT_CHANNELS,
  CONTACT_CHANNEL_LABELS,
  EMAIL_MAX_LENGTH,
  MESSAGE_MAX_LENGTH,
  NAME_MAX_LENGTH,
} from "@/features/lead-funnel/lead-options";
import { OfferPicker } from "@/features/lead-funnel/offer-picker";
import { PhoneField } from "./phone-field";
import {
  CONTACT_FORM_ID,
  OFFER_PICKER_ID,
  useContactForm,
} from "./use-contact-form";

interface ContactFormMessages {
  title: string;
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  phone: string;
  phoneInvalid: string;
  contactChannel: string;
  project: string;
  projectPlaceholder: string;
  required: string;
  optional: string;
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
  onClick,
}: {
  label: string;
  pendingLabel: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      onClick={onClick}
      className="w-full"
      size="lg"
    >
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
    offers,
    message,
    showOfferErrors,
    setOffers,
    setMessage,
    handlePhoneChange,
    validateOffers,
    validateForm,
    handleSubmit,
  } = useContactForm();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{messages.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          id={CONTACT_FORM_ID}
          action={handleSubmit}
          onSubmit={validateForm}
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

          {/* Avec « Autre », « Précisez votre besoin » porte le champ `message`
              et remplace « Votre projet » plus bas : un seul champ à la fois. */}
          <OfferPicker
            id={OFFER_PICKER_ID}
            value={offers}
            onChange={setOffers}
            otherText={message}
            onOtherTextChange={setMessage}
            showErrors={showOfferErrors}
            requiredMark={messages.required}
          />

          <div>
            <Label htmlFor="name">
              {messages.name} {messages.required}
            </Label>
            <Input
              id="name"
              name="name"
              required
              maxLength={NAME_MAX_LENGTH}
              autoComplete="name"
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
              maxLength={EMAIL_MAX_LENGTH}
              autoComplete="email"
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

          {/* Facultatif : le visiteur choisit au plus simple, rien n'est coché
              d'avance pour ne pas transmettre un choix qu'il n'a pas fait. */}
          <fieldset>
            <legend className="text-sm leading-none font-medium">
              {messages.contactChannel} {messages.optional}
            </legend>
            <div className="mt-3 flex flex-wrap gap-3">
              {CONTACT_CHANNELS.map((channel) => (
                <Label
                  key={channel}
                  htmlFor={`contact-channel-${channel}`}
                  className="rounded-md border border-slate-200 px-4 py-2"
                >
                  <input
                    id={`contact-channel-${channel}`}
                    type="radio"
                    name="contactChannel"
                    value={channel}
                    className="h-4 w-4 shrink-0 accent-blue-600"
                  />
                  {CONTACT_CHANNEL_LABELS[channel]}
                </Label>
              ))}
            </div>
          </fieldset>

          {!offers.includes("autre") && (
            <div>
              <Label htmlFor="message">
                {messages.project} {messages.optional}
              </Label>
              <Textarea
                id="message"
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                maxLength={MESSAGE_MAX_LENGTH}
                className="mt-1"
                rows={5}
                placeholder={messages.projectPlaceholder}
              />
            </div>
          )}

          {submitStatus === "success" && (
            <div
              role="status"
              className="flex items-start rounded-md bg-green-50 p-4 text-green-800"
            >
              <CheckCircle className="mr-2 h-5 w-5 shrink-0" />
              <span className="text-sm">{messages.successMessage}</span>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-start rounded-md bg-red-50 p-4 text-red-800">
              <AlertCircle className="mr-2 h-5 w-5 shrink-0" />
              <span className="text-sm">
                {errorMessage || messages.errorMessage}
              </span>
            </div>
          )}

          <SubmitButton
            label={messages.submit}
            pendingLabel={messages.submitting}
            onClick={validateOffers}
          />
        </form>
      </CardContent>
    </Card>
  );
}
