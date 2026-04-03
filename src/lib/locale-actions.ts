"use server";

import { cookies } from "next/headers";
import { type Locale } from "@/i18n/config";

const COOKIE_NAME = "locale";

export async function setUserLocale(locale: Locale) {
  (await cookies()).set(COOKIE_NAME, locale);
}
