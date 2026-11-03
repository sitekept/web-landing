import { z } from "zod";

const envSchema = z.object({
  RESEND_API_KEY: z.string().optional(),
  FROM_EMAIL: z.string().optional(),
  // Sans cette variable, le prospect ne reçoit pas d'email de confirmation.
  // Doit utiliser un domaine vérifié dans Resend.
  CONFIRMATION_FROM_EMAIL: z.string().optional(),
  AGENCY_EMAIL: z.string().optional(),
  NEXT_PUBLIC_GA_ID: z.string().optional(),
});

export const ENV = envSchema.parse(process.env);
