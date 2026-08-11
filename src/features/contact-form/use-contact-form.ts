import { useState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "./contact-form.action";

export function useContactForm() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { pending } = useFormStatus();

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
    } else {
      setSubmitStatus("error");
      setErrorMessage(result.error || "Échec de l'envoi du message");
    }
  };

  return {
    submitStatus,
    errorMessage,
    pending,
    handleSubmit,
  };
}
