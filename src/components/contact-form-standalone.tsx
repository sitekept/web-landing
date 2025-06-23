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
  title = "Contact Us",
  description = "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  className,
  showCard = true,
  onSubmit,
}: ContactFormStandaloneProps) {
  const defaultSubmitHandler = async (formData: FormData) => {
    // Default behavior - log to console in development
    console.log("Contact form submitted:", {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { 
      success: true, 
      message: "Message received! We'll get back to you soon." 
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