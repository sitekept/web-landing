"use server";

import { Resend } from "resend";
import * as z from "zod";
import { ENV } from "@/lib/env";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContactForm(formData: FormData) {
  try {
    // Extract data from FormData
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    // Validate the form data
    const validatedData = contactSchema.parse(data);

    // Check if API key is available
    const apiKey = ENV.RESEND_API_KEY;
    if (!apiKey) {
      // Development mode - log the form submission
      console.log("📧 Contact Form Submission (Development Mode):");
      console.log("Name:", validatedData.name);
      console.log("Email:", validatedData.email);
      console.log("Message:", validatedData.message);
      console.log("Timestamp:", new Date().toLocaleString());
      console.log(
        "⚠️  To send actual emails, configure RESEND_API_KEY in .env"
      );

      return {
        success: true,
        message: "Message received! (Development mode - check console logs)",
      };
    }

    // Production mode - send actual email
    const resend = new Resend(apiKey);

    // Use a verified domain or Resend's onboarding domain
    const fromEmail = ENV.FROM_EMAIL;
    const toEmail = ENV.AGENCY_EMAIL;

    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 5px;">Contact Information:</h3>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${validatedData.name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${validatedData.email}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 5px;">Message:</h3>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; border-left: 4px solid #2563eb;">
              ${validatedData.message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from the SiteKept contact form on ${new Date().toLocaleString()}.</p>
            <p><strong>Reply to:</strong> ${validatedData.email}</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        
        Message:
        ${validatedData.message}
        
        Sent on: ${new Date().toLocaleString()}
        Reply to: ${validatedData.email}
      `,
      replyTo: validatedData.email,
    });

    if (error) {
      console.error("Resend error:", error);

      // Handle specific domain verification error
      if (error.message && error.message.includes("domain is not verified")) {
        return {
          success: false,
          error:
            "Email configuration error. Please contact us directly at sitekept@gmail.com",
        };
      }

      return { success: false, error: "Failed to send email" };
    }

    console.log("Email sent successfully:", emailData);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Invalid form data",
        details: error.errors,
      };
    }

    return { success: false, error: "Failed to send email" };
  }
}
