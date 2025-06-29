'use client';

import { Zap, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Company Info - Takes more space on large screens */}
          <div className="lg:col-span-6">
            <div className="mb-4 flex items-center space-x-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">SiteKept</span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-slate-400 max-w-md">
              Création de sites web haute performance pour entreprises ambitieuses.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-slate-400">
                <Mail className="mr-2 h-4 w-4 flex-shrink-0" />
                <a 
                  href="mailto:sitekept@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  sitekept@gmail.com
                </a>
              </div>
              <div className="flex items-center text-sm text-slate-400">
                <Phone className="mr-2 h-4 w-4 flex-shrink-0" />
                <a 
                  href="tel:+33651179925"
                  className="hover:text-white transition-colors"
                >
                  +33 6 51 17 99 25
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links - Compact column */}
          <div className="lg:col-span-3">
            <h3 className="mb-3 text-sm font-semibold text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:text-white transition-colors block"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-white transition-colors block"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-white transition-colors block"
                >
                  Contact
                </button>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="hover:text-white transition-colors block"
                >
                  Page Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links - Compact column */}
          <div className="lg:col-span-3">
            <h3 className="mb-3 text-sm font-semibold text-white uppercase tracking-wider">
              Légal
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link 
                  href="/conditions-utilisation"
                  className="hover:text-white transition-colors block"
                >
                  Conditions d&apos;Utilisation
                </Link>
              </li>
              <li>
                <Link 
                  href="/confidentialite"
                  className="hover:text-white transition-colors block"
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