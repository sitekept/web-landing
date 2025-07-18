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
