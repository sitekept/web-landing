import {
  isValidPhoneNumber,
  parsePhoneNumberFromString,
} from "libphonenumber-js";
import * as z from "zod";
import {
  CONTACT_CHANNELS,
  CURRENT_URL_ERROR,
  EMAIL_MAX_LENGTH,
  MESSAGE_MAX_LENGTH,
  METIER_SLUGS,
  NAME_MAX_LENGTH,
  OFFER_SLUGS,
  OTHER_MESSAGE_ERROR,
  OTHER_MESSAGE_MIN_LENGTH,
  normalizeCurrentUrl,
  normalizeOffers,
} from "@/features/lead-funnel/lead-options";

/**
 * Schéma de la demande de contact, hors fichier « use server » pour pouvoir
 * être testé et réutilisé. Entrée attendue : voir `readContactFormData`.
 * Les limites de longueur et la lecture de l'adresse du site viennent de
 * lead-options.ts, source unique partagée avec les formulaires.
 */

const PHONE_ERROR =
  "Veuillez entrer un numéro de téléphone valide avec l'indicatif du pays";

/** Au-delà, l'envoi n'a pas pu venir de nos cases à cocher. */
const OFFERS_MAX_VALUES = OFFER_SLUGS.length * 2;

/** Champ texte facultatif : absent, `null` ou vide (après trim) = non fourni. */
function emptyToUndefined(value: unknown) {
  if (value === null || value === undefined) return undefined;
  if (typeof value === "string" && value.trim() === "") return undefined;
  return value;
}

const offersSchema = z
  .array(
    z.enum(OFFER_SLUGS, {
      errorMap: () => ({
        message:
          "Offre inconnue : choisissez parmi Site, Suivi, Campagnes ou Autre.",
      }),
    })
  )
  .max(OFFERS_MAX_VALUES, "Trop d'offres envoyées.")
  // Doublons acceptés puis retirés (ordre canonique) : une case envoyée deux
  // fois ne doit pas faire échouer une demande. Tableau vide = champ absent
  // (ancien formulaire) : voir la règle du message plus bas.
  .transform((offers) =>
    offers.length > 0 ? normalizeOffers(offers) : undefined
  );

export const contactSchema = z
  .object({
    name: z
      .string({
        required_error: "Veuillez indiquer votre nom",
        invalid_type_error: "Veuillez indiquer votre nom",
      })
      .trim()
      .min(1, "Veuillez indiquer votre nom")
      .max(
        NAME_MAX_LENGTH,
        "Votre nom est trop long (100 caractères maximum)."
      ),
    email: z
      .string({
        required_error: "Veuillez entrer une adresse email valide",
        invalid_type_error: "Veuillez entrer une adresse email valide",
      })
      .trim()
      .max(EMAIL_MAX_LENGTH, "Veuillez entrer une adresse email valide")
      .email("Veuillez entrer une adresse email valide"),
    // Obligatoire (décision du 17 nov. 2026). Sans « + » et indicatif,
    // isValidPhoneNumber refuse le numéro : on ne stocke que du format
    // international (E.164), directement utilisable sur WhatsApp.
    phone: z
      .string({ required_error: PHONE_ERROR, invalid_type_error: PHONE_ERROR })
      .refine((value) => isValidPhoneNumber(value), { message: PHONE_ERROR })
      .transform((value) => parsePhoneNumberFromString(value)!.number),
    // Obligatoire ou non selon les offres : voir superRefine.
    message: z.preprocess(
      emptyToUndefined,
      z
        .string({ invalid_type_error: "Veuillez décrire votre projet" })
        .trim()
        .max(
          MESSAGE_MAX_LENGTH,
          "Votre message est trop long (5 000 caractères maximum)."
        )
        .optional()
    ),
    offers: offersSchema.optional(),
    activity: z.preprocess(
      emptyToUndefined,
      z
        .enum(METIER_SLUGS, {
          errorMap: () => ({
            message: "Métier inconnu : choisissez un métier dans la liste.",
          }),
        })
        .optional()
    ),
    currentUrl: z.preprocess(
      emptyToUndefined,
      z
        .string({ invalid_type_error: CURRENT_URL_ERROR })
        .transform((value, context) => {
          const url = normalizeCurrentUrl(value);
          if (url === null) {
            context.addIssue({
              code: z.ZodIssueCode.custom,
              message: CURRENT_URL_ERROR,
            });
            return z.NEVER;
          }
          return url;
        })
        .optional()
    ),
    contactChannel: z.preprocess(
      emptyToUndefined,
      z
        .enum(CONTACT_CHANNELS, {
          errorMap: () => ({
            message:
              "Moyen de rappel inconnu : choisissez e-mail, téléphone ou WhatsApp.",
          }),
        })
        .optional()
    ),
  })
  // Règle du message :
  // - sans `offers` (formulaire actuel de la home), il reste obligatoire,
  //   comme avant ;
  // - avec `offers` sans « autre », il devient facultatif (le tunnel sait déjà
  //   ce que veut le visiteur) ;
  // - avec « autre », il porte la précision du besoin : 10 caractères minimum.
  .superRefine((data, context) => {
    const length = data.message?.length ?? 0;

    if (!data.offers && length < 1) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["message"],
        message: "Veuillez décrire votre projet",
      });
    }

    if (data.offers?.includes("autre") && length < OTHER_MESSAGE_MIN_LENGTH) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["message"],
        message: OTHER_MESSAGE_ERROR,
      });
    }
  });

export type ContactLead = z.infer<typeof contactSchema>;

/** Extrait du FormData les champs attendus par `contactSchema`. */
export function readContactFormData(formData: FormData) {
  return {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
    offers: formData.getAll("offers"),
    activity: formData.get("activity"),
    currentUrl: formData.get("currentUrl"),
    contactChannel: formData.get("contactChannel"),
  };
}
