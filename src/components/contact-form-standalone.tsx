"use client";

import { ContactForm } from "@/components/contact-form";

interface ContactFormStandaloneProps {
  title?: string;
  description?: string;
  className?: string;
  showCard?: boolean;
  onSubmit?: (formData: FormData) => Promise<{ success: boolean; error?: string }>;
}

/**
 * Standalone ContactForm wrapper for use in different contexts
 * This component can be used anywhere in the app where a contact form is needed
 */
export function ContactFormStandalone({
  title = "Nous Contacter",
  description = "Nous aimerions avoir de vos nouvelles. Envoyez-nous un message et nous vous répondrons dès que possible.",
  className,
  showCard = true,
  onSubmit,
}: ContactFormStandaloneProps) {
  const defaultSubmitHandler = async (formData: FormData) => {
    // Default behavior - log to console in development
    console.log("Formulaire de contact soumis:", {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { 
      success: true, 
      message: "Message reçu ! Nous vous recontacterons bientôt." 
    };
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <ContactForm
        title={title}
        description={description}
        className={className}
        showCard={showCard}
        onSubmit={onSubmit || defaultSubmitHandler}
      />
    </div>
  );
}