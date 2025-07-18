"use client";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
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
                  width={28}
                  height={28}
                  className="rounded-lg"
                />
              </div>
              <span className="text-lg font-bold text-white">SiteKept</span>
            </div>
            <p className="mb-4 max-w-md text-sm leading-relaxed text-slate-400">
              Création de sites web haute performance pour entreprises
              ambitieuses.
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
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  href="/"
                  className="block transition-colors hover:text-white"
                >
                  Accueil
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
                  Services
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
                  Nos créations
                </button>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="block transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links - Compact column */}
          <div className="lg:col-span-3">
            <h3 className="mb-3 text-sm font-semibold tracking-wider text-white uppercase">
              Légal
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  href="/cgu"
                  className="block transition-colors hover:text-white"
                >
                  Conditions d&apos;Utilisation
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="block transition-colors hover:text-white"
                >
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright - Minimal padding */}
        <div className="mt-6 border-t border-slate-800 pt-4">
          <p className="text-center text-xs text-slate-400">
            © 2025 SiteKept. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
