"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { isValidPhoneNumber, parsePhoneNumberFromString } from "libphonenumber-js";
import * as z from "zod";
import { ENV } from "@/lib/env";
import { buildConfirmationEmail } from "./confirmation-email";

const PHONE_ERROR =
  "Veuillez entrer un numéro de téléphone valide avec l'indicatif du pays";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Veuillez indiquer votre nom"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  // Sans « + » et indicatif, isValidPhoneNumber refuse le numéro : on ne stocke
  // que du format international (E.164), directement utilisable sur WhatsApp.
  phone: z
    .string({ required_error: PHONE_ERROR, invalid_type_error: PHONE_ERROR })
    .refine((value) => isValidPhoneNumber(value), { message: PHONE_ERROR })
    .transform((value) => parsePhoneNumberFromString(value)!.number),
  message: z.string().trim().min(1, "Veuillez décrire votre projet"),
});

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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
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

    // Extract data from FormData
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    // Validate the form data
    const validatedData = contactSchema.parse(data);

    // Check if API key is available
    const apiKey = ENV.RESEND_API_KEY;
    if (!apiKey) {
      // Development mode - log the form submission
      console.log("📧 Soumission Formulaire de Contact (Mode Développement):");
      console.log("Nom:", validatedData.name);
      console.log("Email:", validatedData.email);
      console.log("Téléphone:", validatedData.phone);
      console.log("Message:", validatedData.message);
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
    const whatsappUrl = `https://wa.me/${validatedData.phone.slice(1)}`;
    const safeName = escapeHtml(validatedData.name);
    const safeEmail = escapeHtml(validatedData.email);
    const safeMessage = escapeHtml(validatedData.message);

    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: "LEAD SITEKEPT",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            Nouvelle Soumission de Formulaire de Contact
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 5px;">Informations de Contact :</h3>
            <p style="margin: 5px 0;"><strong>Nom :</strong> ${safeName}</p>
            <p style="margin: 5px 0;"><strong>Email :</strong> ${safeEmail}</p>
            <p style="margin: 5px 0;"><strong>Téléphone :</strong> <a href="tel:${validatedData.phone}">${validatedData.phone}</a> · <a href="${whatsappUrl}">WhatsApp</a></p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 5px;">Message :</h3>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; border-left: 4px solid #2563eb;">
              ${safeMessage.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>Cet email a été envoyé depuis le formulaire de contact SiteKept le ${new Date().toLocaleString()}.</p>
            <p><strong>Répondre à :</strong> ${safeEmail}</p>
          </div>
        </div>
      `,
      text: `
        Nouvelle Soumission de Formulaire de Contact
        
        Nom: ${validatedData.name}
        Email: ${validatedData.email}
        Téléphone: ${validatedData.phone}
        WhatsApp: ${whatsappUrl}
        
        Message:
        ${validatedData.message}
        
        Envoyé le: ${new Date().toLocaleString()}
        Répondre à: ${validatedData.email}
      `,
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
