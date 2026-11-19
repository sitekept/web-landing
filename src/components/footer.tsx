import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import type { SiteLocale } from "@/content/site-content";
import { linkLocalizer } from "@/lib/localized-routes";
import { getMessage } from "@/lib/site-messages";

interface FooterProps {
  locale: SiteLocale;
}

export function Footer({ locale }: FooterProps) {
  const href = linkLocalizer(locale);

  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-16 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,1fr))]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center">
              <Image
                src="/logo.png"
                alt="Sitekept logo"
                width={36}
                height={36}
                className="rounded-md"
              />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">Sitekept</p>
              <p className="text-[10px] uppercase tracking-[0.24em] text-blue-200">
                {getMessage(locale, "footer.brandMeta")}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            {getMessage(locale, "footer.description")}
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <a
              href="mailto:sitekept@gmail.com"
              className="flex items-center gap-3 transition-colors hover:text-blue-200"
            >
              <Mail className="h-4 w-4" />
              <span>sitekept@gmail.com</span>
            </a>
            <a
              href="tel:+33651179925"
              className="flex items-center gap-3 transition-colors hover:text-blue-200"
            >
              <Phone className="h-4 w-4" />
              <span>+33 6 51 17 99 25</span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
            {getMessage(locale, "footer.navigation")}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>
              <Link href={href("/")} className="transition-colors hover:text-blue-200">
                {getMessage(locale, "navigation.home")}
              </Link>
            </li>
            <li>
              <Link href={href("/templates")} className="transition-colors hover:text-blue-200">
                {getMessage(locale, "navigation.templates")}
              </Link>
            </li>
            <li>
              <Link href={href("/tarifs")} className="transition-colors hover:text-blue-200">
                {getMessage(locale, "navigation.pricing")}
              </Link>
            </li>
            <li>
              <Link href={href("/seo-geo")} className="transition-colors hover:text-blue-200">
                {getMessage(locale, "navigation.visibility")}
              </Link>
            </li>
            <li>
              <Link href={href("/#contact")} className="transition-colors hover:text-blue-200">
                {getMessage(locale, "navigation.contact")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
            {getMessage(locale, "footer.resources")}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>
              <Link href={href("/blog")} className="transition-colors hover:text-blue-200">
                {getMessage(locale, "footer.blog")}
              </Link>
            </li>
            <li>
              <Link
                href={href("/seo-geo")}
                className="transition-colors hover:text-blue-200"
              >
                {getMessage(locale, "footer.visibility")}
              </Link>
            </li>
            <li>
              <Link href={href("/#faq")} className="transition-colors hover:text-blue-200">
                {getMessage(locale, "footer.faq")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
            {getMessage(locale, "footer.legal")}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>
              <Link href={href("/terms")} className="transition-colors hover:text-blue-200">
                {getMessage(locale, "footer.terms")}
              </Link>
            </li>
            <li>
              <Link href={href("/privacy")} className="transition-colors hover:text-blue-200">
                {getMessage(locale, "footer.privacy")}
              </Link>
            </li>
            <li>
              <Link
                href={href("/mentions-legales")}
                className="transition-colors hover:text-blue-200"
              >
                {getMessage(locale, "footer.legalNotice")}
              </Link>
            </li>
            <li>
              <Link href={href("/#contact")} className="transition-colors hover:text-blue-200">
                {getMessage(locale, "footer.quote")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto mt-14 max-w-7xl border-t border-slate-800 pb-8 pt-6">
        <div className="pointer-events-none absolute -top-12 left-0 z-10 h-16 w-full overflow-hidden">
          <div className="animate-walk-across h-12 w-12">
            <Image
              src="/majin-vegeta/walk.gif"
              alt=""
              width={48}
              height={48}
              className="h-full w-full object-contain"
              unoptimized
            />
          </div>
        </div>
        <p className="text-sm text-slate-400">
          {getMessage(locale, "footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
