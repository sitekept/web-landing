"use client";

import { useLocale } from "next-intl";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { setUserLocale } from "@/lib/locale";
import { Locale } from "@/i18n/config";

interface LanguageSwitcherProps {
  variant?: "header" | "footer";
}

const languages = [
  {
    code: "fr",
    name: "Français",
    flag: "🇫🇷",
  },
  {
    code: "en",
    name: "English",
    flag: "🇺🇸",
  },
] as const;

export function LanguageSwitcher({
  variant = "header",
}: LanguageSwitcherProps) {
  const locale = useLocale();

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const handleLanguageChange = (newLocale: string) => {
    setUserLocale(newLocale as Locale);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`flex items-center gap-2 rounded-md px-3 py-2 transition-colors ${
          variant === "footer"
            ? "text-slate-400 hover:bg-slate-800 hover:text-white"
            : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
        }`}
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="hidden text-sm font-medium sm:inline">
          {currentLanguage?.name}
        </span>
        <span className="text-sm font-medium sm:hidden">
          {locale.toUpperCase()}
        </span>
        <ChevronDown className="h-3 w-3 opacity-60" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`flex cursor-pointer items-center gap-3 ${
              locale === language.code ? "bg-blue-50 text-blue-600" : ""
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <span className="text-sm font-medium">{language.name}</span>
            {locale === language.code && (
              <span className="ml-auto text-blue-600">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
