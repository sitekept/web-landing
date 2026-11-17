import {
  CONTACT_CHANNEL_LABELS,
  OFFER_LABELS,
  getMetierLabel,
} from "@/features/lead-funnel/lead-options";
import type { ContactLead } from "./contact-schema";

const SUBJECT = "LEAD SITEKEPT";

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Résumé lisible de la demande, commun au mail et aux logs du mode
 * développement. Les libellés viennent de lead-options.ts, jamais du
 * visiteur : seuls `other`, `currentUrl` et les coordonnées sont saisis.
 */
export function describeLead(lead: ContactLead) {
  const offers = lead.offers?.map((slug) => OFFER_LABELS[slug]).join(", ");

  return {
    offers: offers ?? "non précisées",
    other: lead.offers?.includes("autre") ? lead.message : undefined,
    activity: lead.activity ? getMetierLabel(lead.activity) : undefined,
    currentUrl: lead.currentUrl,
    contactChannel: lead.contactChannel
      ? CONTACT_CHANNEL_LABELS[lead.contactChannel]
      : undefined,
  };
}

/**
 * Mail de lead envoyé à l'agence. Styles inline repris du mail historique.
 * Tout texte saisi est échappé ; `currentUrl` est déjà normalisé en http(s)
 * par le schéma, il ne peut pas produire de lien « javascript: ».
 */
export function buildLeadEmail(lead: ContactLead, sentAt: Date) {
  const summary = describeLead(lead);
  const whatsappUrl = `https://wa.me/${lead.phone.slice(1)}`;
  const sentAtLabel = sentAt.toLocaleString("fr-FR", {
    timeZone: "Europe/Paris",
  });
  const message = lead.message ?? "";

  const safeName = escapeHtml(lead.name);
  const safeEmail = escapeHtml(lead.email);
  const safePhone = escapeHtml(lead.phone);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  const requestLines = [
    `<p style="margin: 5px 0;"><strong>Offres souhaitées :</strong> ${escapeHtml(summary.offers)}</p>`,
    summary.other !== undefined
      ? `<p style="margin: 5px 0;"><strong>Autre :</strong> ${escapeHtml(summary.other).replace(/\n/g, "<br>")}</p>`
      : "",
    summary.activity
      ? `<p style="margin: 5px 0;"><strong>Métier :</strong> ${escapeHtml(summary.activity)}</p>`
      : "",
    summary.currentUrl
      ? `<p style="margin: 5px 0;"><strong>Site actuel :</strong> <a href="${escapeHtml(summary.currentUrl)}">${escapeHtml(summary.currentUrl)}</a></p>`
      : "",
    summary.contactChannel
      ? `<p style="margin: 5px 0;"><strong>Rappel préféré :</strong> ${escapeHtml(summary.contactChannel)}</p>`
      : "",
  ]
    .filter(Boolean)
    .join("\n            ");

  const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            Nouvelle Soumission de Formulaire de Contact
          </h2>

          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 5px;">Demande :</h3>
            ${requestLines}
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 5px;">Informations de Contact :</h3>
            <p style="margin: 5px 0;"><strong>Nom :</strong> ${safeName}</p>
            <p style="margin: 5px 0;"><strong>Email :</strong> ${safeEmail}</p>
            <p style="margin: 5px 0;"><strong>Téléphone :</strong> <a href="tel:${safePhone}">${safePhone}</a> · <a href="${whatsappUrl}">WhatsApp</a></p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 5px;">Message :</h3>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; border-left: 4px solid #2563eb;">
              ${safeMessage || "Aucun message."}
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>Cet email a été envoyé depuis le formulaire de contact SiteKept le ${sentAtLabel}.</p>
            <p><strong>Répondre à :</strong> ${safeEmail}</p>
          </div>
        </div>
      `;

  const text = [
    "Nouvelle Soumission de Formulaire de Contact",
    "",
    `Offres souhaitées : ${summary.offers}`,
    summary.other !== undefined ? `Autre : ${summary.other}` : null,
    summary.activity ? `Métier : ${summary.activity}` : null,
    summary.currentUrl ? `Site actuel : ${summary.currentUrl}` : null,
    summary.contactChannel
      ? `Rappel préféré : ${summary.contactChannel}`
      : null,
    "",
    `Nom : ${lead.name}`,
    `Email : ${lead.email}`,
    `Téléphone : ${lead.phone}`,
    `WhatsApp : ${whatsappUrl}`,
    "",
    "Message :",
    message || "Aucun message.",
    "",
    `Envoyé le : ${sentAtLabel}`,
    `Répondre à : ${lead.email}`,
  ]
    .filter((line) => line !== null)
    .join("\n");

  return {
    subject: lead.offers ? `${SUBJECT} · ${summary.offers}` : SUBJECT,
    html,
    text,
  };
}
