import { Zap, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">SiteKept</span>
            </div>
            <p className="mb-6 text-sm text-slate-400">
              Création de sites web haute performance pour entreprises ambitieuses.
              Technologie de pointe, design moderne, résultats garantis.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-slate-400">
                <Mail className="mr-2 h-4 w-4" />
                <a 
                  href="mailto:sitekept@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  sitekept@gmail.com
                </a>
              </div>
              <div className="flex items-center text-sm text-slate-400">
                <Phone className="mr-2 h-4 w-4" />
                <a 
                  href="tel:+33651179925"
                  className="hover:text-white transition-colors"
                >
                  +33 6 51 17 99 25
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Navigation</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:text-white transition-colors"
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
                  className="hover:text-white transition-colors"
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
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Page Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Informations Légales</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link 
                  href="/conditions-utilisation"
                  className="hover:text-white transition-colors"
                >
                  Conditions d&apos;Utilisation
                </Link>
              </li>
              <li>
                <Link 
                  href="/confidentialite"
                  className="hover:text-white transition-colors"
                >
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-400">
            © 2025 SiteKept. Tous droits réservés. Créé avec passion et Next.js ⚡
          </p>
        </div>
      </div>
    </footer>
  );
}