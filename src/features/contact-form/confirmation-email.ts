import { SITE_URL } from "@/lib/site-url";

const t = {
  subject: "Bien reçu ! 4 questions avant notre échange",
  greeting: "Bonjour,",
  thanks: "Merci pour votre demande, elle est bien arrivée chez nous.",
  eager:
    "Nous sommes impatients d'échanger avec vous sur votre projet. Avant de vous appeler, voici les questions que nous allons vous poser :",
  questions: [
    "Quel est l'objectif n°1 de votre site : être trouvé sur Google, recevoir des demandes de devis, prendre des réservations, vendre en ligne ?",
    "Avez-vous déjà un nom de domaine, un logo, des photos ou un site actuel à remplacer ?",
    "Quels sont 2 ou 3 sites que vous aimez (concurrents ou non), et qu'est-ce qui vous plaît chez eux ?",
    "Pour quand souhaitez-vous être en ligne, et quel budget avez-vous en tête ?",
  ],
  prepare:
    "Y réfléchir quelques minutes nous permettra d'aller droit au but et de vous proposer un prix clair dès notre premier échange.",
  answersBefore: "Vous avez déjà les réponses ? Envoyez-les à",
  answersAfter: ", nous gagnerons du temps.",
  meanwhile: "En attendant, découvrez les sites que nous avons livrés :",
  cta: "Voir nos réalisations",
  noReply:
    "Cet email est envoyé automatiquement, merci de ne pas y répondre directement.",
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
  <p style="${PARAGRAPH}">${t.eager}</p>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:18px;background:#f1f5f9;border-radius:10px;">
${t.questions
  .map(
    (question, index) => `  <tr><td style="padding:${index === 0 ? "16px" : "0"} 16px 14px;vertical-align:top;width:28px;${FONT}font-size:15px;font-weight:700;color:#2563eb;">${index + 1}.</td><td style="padding:${index === 0 ? "16px" : "0"} 16px 14px 0;${FONT}font-size:15px;line-height:1.55;color:#0f172a;">${question}</td></tr>`
  )
  .join("\n")}
  </table>
  <p style="${PARAGRAPH}">${t.prepare}</p>
  <p style="${PARAGRAPH}">${t.answersBefore} <a href="mailto:${contactEmail}" style="color:#2563eb;">${contactEmail}</a>${t.answersAfter}</p>
  <p style="${PARAGRAPH}margin-bottom:24px;">${t.meanwhile}</p>
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;"><tr><td style="background:#2563eb;border-radius:8px;">
    <a href="${realizationUrl}" style="display:inline-block;padding:12px 22px;${FONT}font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;">${t.cta}</a>
  </td></tr></table>
  <p style="${PARAGRAPH}margin-bottom:0;">${t.closing}<br>${t.signature}</p>
</td></tr>
<tr><td style="padding-top:28px;">
  <p style="margin:0;padding-top:16px;border-top:1px solid #e2e8f0;${FONT}font-size:13px;line-height:1.5;color:#64748b;">${t.noReply}<br>${t.footer} <a href="${SITE_URL}" style="color:#64748b;">${siteLabel}</a>.</p>
</td></tr>
</table></td></tr></table>`,
    text: `${t.greeting}

${t.thanks}

${t.eager}

${t.questions.map((question, index) => `${index + 1}. ${question}`).join("\n")}

${t.prepare}

${t.answersBefore} ${contactEmail}${t.answersAfter}

${t.meanwhile}
${realizationUrl}

${t.closing}
${t.signature}

${t.noReply}
${t.footer} ${siteLabel}.`,
  };
}
