"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle, Send } from "lucide-react";
import { useContactForm } from "./use-contact-form";

interface ContactFormMessages {
  title: string;
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
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

export function ContactForm({ messages }: ContactFormProps) {
  const { submitStatus, errorMessage, pending, handleSubmit } =
    useContactForm();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{messages.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="contact-form" action={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">
              {messages.name} {messages.required}
            </Label>
            <Input
              id="name"
              name="name"
              required
              minLength={2}
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
            <Label htmlFor="message">
              {messages.project} {messages.required}
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              minLength={10}
              className="mt-1"
              rows={5}
              placeholder={messages.projectPlaceholder}
            />
          </div>

          {submitStatus === "success" && (
            <div className="flex items-center rounded-md bg-green-50 p-4 text-green-800">
              <CheckCircle className="mr-2 h-5 w-5" />
              <span className="text-sm">{messages.successMessage}</span>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-center rounded-md bg-red-50 p-4 text-red-800">
              <AlertCircle className="mr-2 h-5 w-5" />
              <span className="text-sm">{errorMessage || messages.errorMessage}</span>
            </div>
          )}

          <Button type="submit" disabled={pending} className="w-full" size="lg">
            {pending ? (
              messages.submitting
            ) : (
              <>
                {messages.submit}
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
