"use client";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("navigation");

  return (
    <footer className="bg-slate-900 px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Company Info - Takes more space on large screens */}
          <div className="lg:col-span-6">
            <div className="mb-4 flex items-center space-x-2">
              <div className="flex h-7 w-7 items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="SiteKept Logo"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
              </div>
              <span className="text-lg font-bold text-white">SiteKept</span>
            </div>
            <p className="mb-4 max-w-md text-sm leading-relaxed text-slate-400">
              {t("description")}
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-slate-400">
                <Mail className="mr-2 h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:sitekept@gmail.com"
                  className="transition-colors hover:text-white"
                >
                  sitekept@gmail.com
                </a>
              </div>
              <div className="flex items-center text-sm text-slate-400">
                <Phone className="mr-2 h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+33651179925"
                  className="transition-colors hover:text-white"
                >
                  +33 6 51 17 99 25
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links - Compact column */}
          <div className="lg:col-span-3">
            <h3 className="mb-3 text-sm font-semibold tracking-wider text-white uppercase">
              {t("navigation")}
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  href="/"
                  className="block transition-colors hover:text-white"
                >
                  {nav("home")}
                </Link>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block transition-colors hover:text-white"
                >
                  {nav("services")}
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("our-work")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block transition-colors hover:text-white"
                >
                  {nav("ourWork")}
                </button>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="block transition-colors hover:text-white"
                >
                  {nav("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links - Compact column */}
          <div className="lg:col-span-3">
            <h3 className="mb-3 text-sm font-semibold tracking-wider text-white uppercase">
              {t("legal")}
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  href="/terms"
                  className="block transition-colors hover:text-white"
                >
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="block transition-colors hover:text-white"
                >
                  {t("privacy")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright with animation - More padding for character space */}
        <div className="relative mt-14 border-t border-slate-800 pt-4 pb-8">
          <p className="text-center text-xs text-slate-400">{t("copyright")}</p>

          {/* Walking Majin Vegeta Animation - positioned above the border line */}
          <div className="pointer-events-none absolute -top-12 left-0 z-10 h-16 w-full overflow-hidden">
            <div className="animate-walk-across h-12 w-12">
              <Image
                src="/majin-vegeta/walk.gif"
                alt="majin-vegeta"
                width={48}
                height={48}
                className="h-full w-full object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
