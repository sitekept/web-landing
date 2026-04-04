"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { SiteLocale } from "@/content/site-content";

const NAVIGATION_ITEMS = [
  { key: "templates", href: "/templates" },
  { key: "realizations", href: "/realization" },
  { key: "visibility", href: "/#seo-geo" },
  { key: "faq", href: "/#faq" },
  { key: "contact", href: "/#contact" },
] as const;

const navigationLabels = {
  fr: {
    templates: "Templates",
    visibility: "SEO / GEO",
    faq: "FAQ",
    contact: "Contact",
    realizations: "Nos réalisations",
    start: "Demander un devis",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    brandMeta: "SEO, GEO, lancement rapide",
  },
  en: {
    templates: "Templates",
    visibility: "SEO / GEO",
    faq: "FAQ",
    contact: "Contact",
    realizations: "Our work",
    start: "Request a quote",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    brandMeta: "SEO, GEO, fast launch",
  },
} as const;

interface NavigationProps {
  locale: SiteLocale;
}

export function Navigation({ locale }: NavigationProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const labels = navigationLabels[locale];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solidNavigation = pathname !== "/" || isScrolled;
  const navClassName = solidNavigation
    ? "bg-white/95 shadow-sm backdrop-blur-md"
    : "bg-transparent";
  const textClassName = solidNavigation ? "text-slate-700" : "text-slate-200";
  const brandClassName = solidNavigation ? "text-slate-950" : "text-white";
  const menuButtonClassName = solidNavigation ? "text-slate-900" : "text-white";

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${navClassName}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center">
              <Image
                src="/logo.png"
                alt="Sitekept logo"
                width={32}
                height={32}
                className="rounded-md"
              />
            </div>
            <div className="leading-tight">
              <span className={`block text-lg font-semibold tracking-tight ${brandClassName}`}>
                Sitekept
              </span>
              <span
                className={`hidden text-[10px] uppercase tracking-[0.24em] sm:block ${
                  solidNavigation ? "text-slate-500" : "text-blue-200"
                }`}
              >
                {labels.brandMeta}
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${textClassName}`}
              >
                {labels[item.key]}
              </Link>
            ))}
            <LanguageSwitcher locale={locale} />
            <Button
              asChild
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              <Link href="/#contact">{labels.start}</Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className={`rounded-md p-2 md:hidden ${menuButtonClassName}`}
            aria-label={isOpen ? labels.closeMenu : labels.openMenu}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen ? (
          <div className="border-t border-slate-200 bg-white py-4 md:hidden">
            <div className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-slate-950"
              >
                  {labels[item.key]}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3 px-3">
              <LanguageSwitcher locale={locale} />
              <Button
                asChild
                className="flex-1 bg-blue-600 text-white hover:bg-blue-700"
              >
                <Link href="/#contact" onClick={() => setIsOpen(false)}>
                  {labels.start}
                </Link>
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
