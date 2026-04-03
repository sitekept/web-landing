import enMessages from "../../messages/en.json";
import frMessages from "../../messages/fr.json";
import { getUserLocale } from "@/lib/locale";
import { toSiteLocale, type SiteLocale } from "@/content/site-content";

type MessageValue =
  | string
  | string[]
  | {
      [key: string]: MessageValue;
    };

const messages = {
  fr: frMessages,
  en: enMessages,
} as const;

function getValue(source: MessageValue, path: string): MessageValue {
  return path.split(".").reduce<MessageValue>((current, segment) => {
    if (!current || typeof current === "string" || Array.isArray(current)) {
      throw new Error(`Invalid message path: ${path}`);
    }

    const nextValue = current[segment];

    if (typeof nextValue === "undefined") {
      throw new Error(`Missing message key: ${path}`);
    }

    return nextValue;
  }, source);
}

function formatMessage(
  template: string,
  values?: Record<string, string | number>
): string {
  if (!values) {
    return template;
  }

  return Object.entries(values).reduce((message, [key, value]) => {
    return message.replaceAll(`{${key}}`, String(value));
  }, template);
}

export async function getSiteLocale(): Promise<SiteLocale> {
  return toSiteLocale(await getUserLocale());
}

export function getMessage(
  locale: SiteLocale,
  path: string,
  values?: Record<string, string | number>
): string {
  const value = getValue(messages[locale], path);

  if (typeof value !== "string") {
    throw new Error(`Message at path "${path}" is not a string.`);
  }

  return formatMessage(value, values);
}

export function getRawMessage(locale: SiteLocale, path: string): MessageValue {
  return getValue(messages[locale], path);
}

export function getMessages(locale: SiteLocale) {
  return messages[locale];
}
