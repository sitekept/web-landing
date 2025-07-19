"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle, Send } from "lucide-react";
import { useContactForm } from "./use-contact-form";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const { submitStatus, errorMessage, pending, handleSubmit } =
    useContactForm();
  const t = useTranslations("contactForm");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="contact-form" action={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">
              {t("name")} {t("required")}
            </Label>
            <Input
              id="name"
              name="name"
              required
              minLength={2}
              className="mt-1"
              placeholder={t("namePlaceholder")}
            />
          </div>

          <div>
            <Label htmlFor="email">
              {t("email")} {t("required")}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1"
              placeholder={t("emailPlaceholder")}
            />
          </div>

          <div>
            <Label htmlFor="message">
              {t("project")} {t("required")}
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              minLength={10}
              className="mt-1"
              rows={5}
              placeholder={t("projectPlaceholder")}
            />
          </div>

          {submitStatus === "success" && (
            <div className="flex items-center rounded-md bg-green-50 p-4 text-green-800">
              <CheckCircle className="mr-2 h-5 w-5" />
              <span className="text-sm">{t("successMessage")}</span>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-center rounded-md bg-red-50 p-4 text-red-800">
              <AlertCircle className="mr-2 h-5 w-5" />
              <span className="text-sm">
                {errorMessage || t("errorMessage")}
              </span>
            </div>
          )}

          <Button type="submit" disabled={pending} className="w-full" size="lg">
            {pending ? (
              t("submitting")
            ) : (
              <>
                {t("submit")}
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
