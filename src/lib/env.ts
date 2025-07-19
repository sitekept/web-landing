import { z } from "zod";

const envSchema = z.object({
  RESEND_API_KEY: z.string().optional(),
  FROM_EMAIL: z.string().optional(),
  AGENCY_EMAIL: z.string().optional(),
  GA_ID: z.string(),
});

export const ENV = envSchema.parse(process.env);
