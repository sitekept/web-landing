import { Zap, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">SiteKept</span>
            </div>
            <p className="mb-4 text-sm text-slate-400">
              Création de sites web haute performance pour entreprises ambitieuses.
              Technologie de pointe, design moderne, résultats garantis.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-slate-400">
                <Mail className="mr-2 h-4 w-4" />
                sitekept@gmail.com
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Nos Solutions</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Sites Vitrines</li>
              <li>E-commerce</li>
              <li>Sites Corporate</li>
              <li>Développement Sur Mesure</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-white">SiteKept</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Notre Approche</li>
              <li>Processus</li>
              <li>Réalisations</li>
              <li>Rejoindre l&apos;Équipe</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Support</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Centre d&apos;Aide</li>
              <li>Contact Support</li>
              <li>Confidentialité</li>
              <li>Conditions d&apos;Utilisation</li>
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