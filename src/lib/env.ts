import { z } from "zod";

const envSchema = z.object({
  RESEND_API_KEY: z.string(),
  FROM_EMAIL: z.string(),
  AGENCY_EMAIL: z.string(),
});

export const ENV = envSchema.parse(process.env);
