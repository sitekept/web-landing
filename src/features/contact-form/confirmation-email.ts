import { SITE_URL } from "@/lib/site-url";

const t = {
  subject: "Merci, nous avons bien reçu votre demande",
  greeting: "Bonjour,",
  thanks:
    "Merci d'avoir rempli notre formulaire : votre demande est bien arrivée.",
  next: "Nous lisons votre projet et nous revenons vers vous au plus vite, par email ou sur WhatsApp, avec un cadre simple : prix, périmètre et mise en ligne.",
  meanwhile:
    "En attendant, vous pouvez déjà découvrir les sites que nous avons livrés :",
  cta: "Voir nos réalisations",
  templatesBefore: "Ou parcourir",
  templatesLink: "nos templates",
  templatesAfter: "pour repérer le style qui vous plaît.",
  noReply: "Cet email est envoyé automatiquement, merci de ne pas y répondre.",
  contact: "Pour toute précision sur votre demande, écrivez-nous à",
  closing: "À très vite,",
  signature: "L'équipe Sitekept",
  footer: "Vous recevez ce message car vous avez envoyé une demande sur",
};

const FONT =
  "font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;";
const PARAGRAPH = `margin:0 0 18px;${FONT}font-size:16px;line-height:1.6;color:#334155;`;

// Aucun contenu saisi par le visiteur ici, pas même son nom : le formulaire est
// public, il ne doit pas permettre de faire envoyer un texte ou un lien de son
// choix à une adresse tierce depuis notre domaine.
export function buildConfirmationEmail(contactEmail: string) {
  const realizationUrl = `${SITE_URL}/realization`;
  const templatesUrl = `${SITE_URL}/templates`;
  const siteLabel = new URL(SITE_URL).hostname.replace(/^www\./, "");

  return {
    subject: t.subject,
    html: `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff;">
<tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:520px;">
<tr><td style="padding-bottom:28px;">
  <img src="${SITE_URL}/logo.png" width="24" height="29" alt="" style="vertical-align:middle;border:0;">
  <span style="${FONT}font-size:18px;font-weight:700;color:#0f172a;vertical-align:middle;padding-left:8px;">Sitekept</span>
</td></tr>
<tr><td>
  <p style="${PARAGRAPH}">${t.greeting}</p>
  <p style="${PARAGRAPH}">${t.thanks}</p>
  <p style="${PARAGRAPH}">${t.next}</p>
  <p style="${PARAGRAPH}margin-bottom:24px;">${t.meanwhile}</p>
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;"><tr><td style="background:#2563eb;border-radius:8px;">
    <a href="${realizationUrl}" style="display:inline-block;padding:12px 22px;${FONT}font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;">${t.cta}</a>
  </td></tr></table>
  <p style="${PARAGRAPH}margin-bottom:28px;font-size:15px;">${t.templatesBefore} <a href="${templatesUrl}" style="color:#2563eb;">${t.templatesLink}</a> ${t.templatesAfter}</p>
  <p style="${PARAGRAPH}">${t.noReply} ${t.contact} <a href="mailto:${contactEmail}" style="color:#2563eb;">${contactEmail}</a>.</p>
  <p style="${PARAGRAPH}margin-bottom:0;">${t.closing}<br>${t.signature}</p>
</td></tr>
<tr><td style="padding-top:28px;">
  <p style="margin:0;padding-top:16px;border-top:1px solid #e2e8f0;${FONT}font-size:13px;line-height:1.5;color:#64748b;">${t.footer} <a href="${SITE_URL}" style="color:#64748b;">${siteLabel}</a>.</p>
</td></tr>
</table></td></tr></table>`,
    text: `${t.greeting}

${t.thanks}

${t.next}

${t.meanwhile}
${realizationUrl}

${t.templatesBefore} ${t.templatesLink} ${t.templatesAfter}
${templatesUrl}

${t.noReply} ${t.contact} ${contactEmail}.

${t.closing}
${t.signature}

${t.footer} ${siteLabel}.`,
  };
}
