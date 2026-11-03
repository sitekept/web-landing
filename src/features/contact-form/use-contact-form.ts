import { useState, type FormEvent } from "react";
import { isValidPhoneNumber } from "libphonenumber-js";
import { submitContactForm } from "./contact-form.action";

export function useContactForm() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [phone, setPhone] = useState<string | undefined>();
  const [phoneInvalid, setPhoneInvalid] = useState(false);

  const handlePhoneChange = (value: string | undefined) => {
    setPhone(value);
    setPhoneInvalid(false);
  };

  // Bloqué ici et non dans l'action : React vide le formulaire à la fin d'une
  // action, le visiteur perdrait son message pour un numéro mal saisi.
  const validatePhone = (event: FormEvent<HTMLFormElement>) => {
    if (phone && isValidPhoneNumber(phone)) return;

    event.preventDefault();
    setPhoneInvalid(true);
    document.getElementById("phone")?.focus();
  };

  const handleSubmit = async (formData: FormData) => {
    setSubmitStatus("idle");
    setErrorMessage("");

    const result = await submitContactForm(formData);

    if (result.success) {
      setSubmitStatus("success");

      // Conversion : c'est l'unique objectif du site. À marquer comme
      // « événement clé » dans GA4 (Administration → Événements) pour qu'elle
      // remonte dans les rapports d'acquisition.
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          event_category: "contact",
          event_label: "formulaire_contact",
        });
      }

      // Reset form by reloading the page or using a ref to reset
      const form = document.getElementById("contact-form") as HTMLFormElement;
      form?.reset();
      setPhone(undefined);
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
    handlePhoneChange,
    validatePhone,
    handleSubmit,
  };
}
