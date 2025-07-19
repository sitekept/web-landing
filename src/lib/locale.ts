"use server";

import { cookies, headers } from "next/headers";
import { type Locale, defaultLocale, locales } from "@/i18n/config";

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = "locale";

function isSupportedLocale(locale: string | undefined): locale is Locale {
  return locales.includes(locale as Locale);
}

export async function getUserLocale(): Promise<Locale> {
  // 1️⃣ Try from cookies
  const cookieLocale = (await cookies()).get(COOKIE_NAME)?.value;
  if (isSupportedLocale(cookieLocale)) {
    console.log(`[getUserLocale] Locale from cookie: ${cookieLocale}`);
    return cookieLocale;
  }

  // 2️⃣ Try from Accept-Language header
  const acceptLang = (await headers()).get("accept-language");
  const headerLocale = acceptLang?.split(",")[0]?.split("-")[0];
  if (isSupportedLocale(headerLocale)) {
    console.log(
      `[getUserLocale] Locale from Accept-Language header: ${headerLocale}`
    );
    return headerLocale;
  }

  // 3️⃣ Fallback
  console.log(
    `[getUserLocale] No valid locale found, using default: ${defaultLocale}`
  );
  return defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  (await cookies()).set(COOKIE_NAME, locale);
}
