"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { setUserLocale } from "@/lib/locale-actions";
import { Locale } from "@/i18n/config";
import { SiteLocale } from "@/content/site-content";

interface LanguageSwitcherProps {
  locale: SiteLocale;
  variant?: "header" | "footer";
}

const languages = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
] as const;

export function LanguageSwitcher({
  locale,
  variant = "header",
}: LanguageSwitcherProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const containerClassName =
    variant === "footer"
      ? "inline-flex rounded-full border border-white/15 bg-white/5 p-1"
      : "inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm";

  const baseButtonClassName =
    "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors";

  const inactiveClassName =
    variant === "footer"
      ? "text-slate-300 hover:text-white"
      : "text-slate-500 hover:text-slate-900";

  const activeClassName =
    variant === "footer"
      ? "bg-white text-slate-950"
      : "bg-slate-950 text-white";

  const handleLanguageChange = (nextLocale: Locale) => {
    if (nextLocale === locale || isPending) {
      return;
    }

    startTransition(async () => {
      await setUserLocale(nextLocale);
      router.refresh();
    });
  };

  return (
    <div className={containerClassName}>
      {languages.map((language) => (
        <button
          key={language.code}
          type="button"
          onClick={() => handleLanguageChange(language.code)}
          className={`${baseButtonClassName} ${
            locale === language.code ? activeClassName : inactiveClassName
          }`}
          aria-pressed={locale === language.code}
        >
          {language.label}
        </button>
      ))}
    </div>
  );
}
