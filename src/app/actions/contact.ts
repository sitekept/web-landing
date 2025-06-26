"use server";

import { Resend } from "resend";
import * as z from "zod";
import { ENV } from "@/lib/env";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export async function submitContactForm(formData: FormData) {
  try {
    // Extract data from FormData
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
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
      console.log("Message:", validatedData.message);
      console.log("Horodatage:", new Date().toLocaleString());
      console.log(
        "⚠️  Pour envoyer de vrais emails, configurez RESEND_API_KEY dans .env"
      );

      return {
        success: true,
        message: "Message reçu ! (Mode développement - vérifiez les logs de la console)",
      };
    }

    // Production mode - send actual email
    const resend = new Resend(apiKey);

    // Use a verified domain or Resend's onboarding domain
    const fromEmail = ENV.FROM_EMAIL;
    const toEmail = ENV.AGENCY_EMAIL;

    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `Nouvelle soumission de formulaire de contact de ${validatedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            Nouvelle Soumission de Formulaire de Contact
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 5px;">Informations de Contact :</h3>
            <p style="margin: 5px 0;"><strong>Nom :</strong> ${validatedData.name}</p>
            <p style="margin: 5px 0;"><strong>Email :</strong> ${validatedData.email}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 5px;">Message :</h3>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; border-left: 4px solid #2563eb;">
              ${validatedData.message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>Cet email a été envoyé depuis le formulaire de contact SiteKept le ${new Date().toLocaleString()}.</p>
            <p><strong>Répondre à :</strong> ${validatedData.email}</p>
          </div>
        </div>
      `,
      text: `
        Nouvelle Soumission de Formulaire de Contact
        
        Nom: ${validatedData.name}
        Email: ${validatedData.email}
        
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
    return { success: true, message: "Email envoyé avec succès" };
  } catch (error) {
    console.error("Erreur formulaire de contact:", error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Données de formulaire invalides",
        details: error.errors,
      };
    }

    return { success: false, error: "Échec de l'envoi de l'email" };
  }
}