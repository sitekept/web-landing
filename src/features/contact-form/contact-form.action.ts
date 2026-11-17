"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import * as z from "zod";
import { metierPages } from "@/content/metier-pages";
import { findMetierAlignmentIssues } from "@/features/lead-funnel/lead-options";
import { ENV } from "@/lib/env";
import { buildConfirmationEmail } from "./confirmation-email";
import { contactSchema, readContactFormData } from "./contact-schema";
import { buildLeadEmail, describeLead } from "./lead-email";

// La liste des métiers du tunnel est recopiée dans lead-options.ts pour rester
// légère côté client. Ce module ne tourne que sur le serveur : on y vérifie
// qu'elle suit toujours les pages métier, sans jamais bloquer le formulaire.
for (const issue of findMetierAlignmentIssues(metierPages)) {
  console.error(`lead-options.ts désaligné : ${issue}`);
}

const CONFIRMATION_WINDOW_MS = 60 * 60 * 1000;
const CONFIRMATION_MAX_PER_IP = 3;
const CONFIRMATION_MAX_PER_EMAIL = 1;

// En mémoire, donc propre à chaque instance serverless : freine un abus depuis
// une même source, sans constituer une limite globale stricte.
const confirmationSends = new Map<string, number[]>();

function isConfirmationAllowed(ip: string, email: string) {
  const now = Date.now();

  for (const [key, timestamps] of confirmationSends) {
    const recent = timestamps.filter(
      (timestamp) => now - timestamp < CONFIRMATION_WINDOW_MS
    );
    if (recent.length > 0) confirmationSends.set(key, recent);
    else confirmationSends.delete(key);
  }

  const ipKey = `ip:${ip}`;
  const emailKey = `email:${email.toLowerCase()}`;
  const ipSends = confirmationSends.get(ipKey) ?? [];
  const emailSends = confirmationSends.get(emailKey) ?? [];

  if (
    ipSends.length >= CONFIRMATION_MAX_PER_IP ||
    emailSends.length >= CONFIRMATION_MAX_PER_EMAIL
  ) {
    return false;
  }

  confirmationSends.set(ipKey, [...ipSends, now]);
  confirmationSends.set(emailKey, [...emailSends, now]);
  return true;
}

// Ne doit jamais faire échouer la soumission : à ce stade le lead est déjà reçu.
async function sendConfirmationEmail(
  resend: Resend,
  email: string,
  replyTo: string
) {
  const from = ENV.CONFIRMATION_FROM_EMAIL;
  if (!from) return;

  try {
    const requestHeaders = await headers();
    const ip =
      requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    if (!isConfirmationAllowed(ip, email)) {
      console.warn("Email de confirmation ignoré : limite d'envoi atteinte");
      return;
    }

    const { subject, html, text } = buildConfirmationEmail(replyTo);
    const { error } = await resend.emails.send({
      from,
      to: [email],
      subject,
      html,
      text,
      replyTo,
    });

    if (error) console.error("Erreur email de confirmation:", error);
  } catch (error) {
    console.error("Erreur email de confirmation:", error);
  }
}

export async function getVisitorCountry() {
  const requestHeaders = await headers();
  return requestHeaders.get("x-vercel-ip-country");
}

export async function submitContactForm(formData: FormData) {
  try {
    // Champ invisible rempli : un robot. On simule un succès sans rien envoyer.
    if (formData.get("site_url")) {
      return { success: true, message: "Email envoyé avec succès" };
    }

    const validatedData = contactSchema.parse(readContactFormData(formData));

    // Check if API key is available
    const apiKey = ENV.RESEND_API_KEY;
    if (!apiKey) {
      // Development mode - log the form submission
      const summary = describeLead(validatedData);
      console.log("📧 Soumission Formulaire de Contact (Mode Développement):");
      console.log("Offres souhaitées:", summary.offers);
      if (summary.other !== undefined) console.log("Autre:", summary.other);
      console.log("Métier:", summary.activity ?? "non précisé");
      console.log("Site actuel:", summary.currentUrl ?? "non précisé");
      console.log("Rappel préféré:", summary.contactChannel ?? "non précisé");
      console.log("Nom:", validatedData.name);
      console.log("Email:", validatedData.email);
      console.log("Téléphone:", validatedData.phone);
      console.log("Message:", validatedData.message ?? "");
      console.log("Horodatage:", new Date().toLocaleString());
      console.log(
        "⚠️  Pour envoyer de vrais emails, configurez RESEND_API_KEY dans .env.local"
      );

      return {
        success: true,
        message:
          "Message reçu ! (Mode développement - vérifiez les logs de la console)",
      };
    }

    // Production mode - send actual email
    const resend = new Resend(apiKey);

    // Use a verified domain or Resend's onboarding domain
    const fromEmail = ENV.FROM_EMAIL || "onboarding@resend.dev";
    const toEmail = ENV.AGENCY_EMAIL || "sitekept@gmail.com";
    const { subject, html, text } = buildLeadEmail(validatedData, new Date());

    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject,
      html,
      text,
      replyTo: validatedData.email,
    });

    if (error) {
      console.error("Erreur Resend:", error);

      // Handle specific domain verification error
      if (error.message && error.message.includes("domain is not verified")) {
        return {
          success: false,
          error:
            "Erreur de configuration email. Veuillez nous contacter directement à sitekept@gmail.com",
        };
      }

      return { success: false, error: "Échec de l'envoi de l'email" };
    }

    console.log("Email envoyé avec succès:", emailData);
    await sendConfirmationEmail(resend, validatedData.email, toEmail);
    return { success: true, message: "Email envoyé avec succès" };
  } catch (error) {
    console.error("Erreur formulaire de contact:", error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0]?.message ?? "Données de formulaire invalides",
        details: error.errors,
      };
    }

    return { success: false, error: "Échec de l'envoi de l'email" };
  }
}
