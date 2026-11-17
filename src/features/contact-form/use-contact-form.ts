import { useEffect, useState, type FormEvent, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import { isValidPhoneNumber } from "libphonenumber-js";
import { sendAnalyticsEvent } from "@/features/lead-funnel/analytics";
import {
  formatOffersForAnalytics,
  getOfferSelectionErrors,
  isOfferSlug,
  parseOfferParam,
  type LeadFormOrigin,
  type OfferSlug,
} from "@/features/lead-funnel/lead-options";
import {
  getOfferCheckboxId,
  getOfferOtherFieldId,
} from "@/features/lead-funnel/offer-picker";
import { submitContactForm } from "./contact-form.action";

export const CONTACT_FORM_ID = "contact-form";
export const OFFER_PICKER_ID = "contact-offers";

const FORM_ORIGIN: LeadFormOrigin = "secours";

export function useContactForm() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [phone, setPhone] = useState<string | undefined>();
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [offers, setOffers] = useState<OfferSlug[]>([]);
  // Un seul texte pour le champ `message` : « Votre projet », ou « Précisez
  // votre besoin » quand « Autre » est coché. Il suit le visiteur d'un champ
  // à l'autre : rien n'est perdu ni saisi deux fois.
  const [message, setMessage] = useState("");
  const [showOfferErrors, setShowOfferErrors] = useState(false);

  // `?offre=site,suivi` coche les cartes. Lu après le montage, jamais par
  // useSearchParams() : la page reste statique. Valeurs inconnues ignorées.
  useEffect(() => {
    const fromUrl = parseOfferParam(
      new URLSearchParams(window.location.search).get("offre")
    );
    if (fromUrl.length > 0) setOffers(fromUrl);
  }, []);

  const handlePhoneChange = (value: string | undefined) => {
    setPhone(value);
    setPhoneInvalid(false);
  };

  // Bloqué ici et non dans l'action : React vide le formulaire à la fin d'une
  // action, le visiteur perdrait sa saisie pour une case oubliée ou un numéro
  // mal saisi. Le focus va sur le champ à corriger.
  const blockOnOfferErrors = () => {
    const errors = getOfferSelectionErrors(offers, message);
    if (!errors.offers && !errors.other) return false;

    // Erreur rendue (avec aria-invalid et aria-describedby) avant le
    // déplacement du focus : le lecteur d'écran l'annonce avec le champ.
    flushSync(() => setShowOfferErrors(true));
    document
      .getElementById(
        errors.offers
          ? getOfferCheckboxId(OFFER_PICKER_ID, "site")
          : getOfferOtherFieldId(OFFER_PICKER_ID)
      )
      ?.focus();
    return true;
  };

  // Au clic sur « Envoyer » (Entrée dans un champ produit aussi ce clic) :
  // avant les bulles du navigateur sur le nom et l'e-mail, pour corriger les
  // champs dans l'ordre de l'écran, la sélection d'offres en premier.
  const validateOffers = (event: MouseEvent<HTMLButtonElement>) => {
    if (blockOnOfferErrors()) event.preventDefault();
  };

  const validateForm = (event: FormEvent<HTMLFormElement>) => {
    if (blockOnOfferErrors()) {
      event.preventDefault();
      return;
    }
    if (phone && isValidPhoneNumber(phone)) return;

    event.preventDefault();
    flushSync(() => setPhoneInvalid(true));
    document.getElementById("phone")?.focus();
  };

  const handleSubmit = async (formData: FormData) => {
    setSubmitStatus("idle");
    setErrorMessage("");

    const sentOffers = formData
      .getAll("offers")
      .filter(
        (offer): offer is OfferSlug =>
          typeof offer === "string" && isOfferSlug(offer)
      );

    const result = await submitContactForm(formData);

    if (result.success) {
      setSubmitStatus("success");

      // Conversion : c'est l'unique objectif du site. À marquer comme
      // « événement clé » dans GA4 (Administration → Événements) pour qu'elle
      // remonte dans les rapports d'acquisition. `window.gtag` n'existe
      // qu'après l'accord du visiteur (garde-fou dans sendAnalyticsEvent).
      // Aucune donnée personnelle envoyée.
      sendAnalyticsEvent("generate_lead", {
        event_category: "contact",
        event_label: "formulaire_contact",
        offers: formatOffersForAnalytics(sentOffers),
        form_origin: FORM_ORIGIN,
      });

      const form = document.getElementById(
        CONTACT_FORM_ID
      ) as HTMLFormElement | null;
      form?.reset();
      setPhone(undefined);
      setOffers([]);
      setMessage("");
      setShowOfferErrors(false);
    } else {
      setSubmitStatus("error");
      setErrorMessage(result.error || "Échec de l'envoi du message");
    }
  };

  return {
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
  };
}
