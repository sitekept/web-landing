import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Politique de Confidentialité - SiteKept",
  description: "Politique de confidentialité de SiteKept. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles.",
};

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Politique de{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
              Confidentialité
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300">
            Dernière mise à jour : 1er janvier 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="text-slate-600 mb-6">
              SiteKept s&apos;engage à protéger votre vie privée et vos données personnelles. 
              Cette politique de confidentialité explique comment nous collectons, utilisons, 
              stockons et protégeons vos informations personnelles.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Données Collectées</h2>
            <p className="text-slate-600 mb-4">Nous collectons les types de données suivants :</p>
            
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Données d&apos;identification :</h3>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Adresse postale (si nécessaire)</li>
            </ul>

            <h3 className="text-lg font-semibold text-slate-900 mb-3">Données de navigation :</h3>
            <ul className="list-disc pl-6 text-slate-600 mb-6">
              <li>Adresse IP</li>
              <li>Type de navigateur</li>
              <li>Pages visitées</li>
              <li>Durée de visite</li>
              <li>Cookies techniques</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Finalités du Traitement</h2>
            <p className="text-slate-600 mb-4">Vos données sont utilisées pour :</p>
            <ul className="list-disc pl-6 text-slate-600 mb-6">
              <li>Répondre à vos demandes de contact</li>
              <li>Fournir nos services de développement web</li>
              <li>Gérer la relation client</li>
              <li>Améliorer nos services</li>
              <li>Respecter nos obligations légales</li>
              <li>Envoyer des communications marketing (avec votre consentement)</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Base Légale</h2>
            <p className="text-slate-600 mb-4">Le traitement de vos données repose sur :</p>
            <ul className="list-disc pl-6 text-slate-600 mb-6">
              <li><strong>Exécution du contrat :</strong> pour fournir nos services</li>
              <li><strong>Intérêt légitime :</strong> pour améliorer nos services et assurer la sécurité</li>
              <li><strong>Consentement :</strong> pour les communications marketing</li>
              <li><strong>Obligation légale :</strong> pour respecter la réglementation</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Partage des Données</h2>
            <p className="text-slate-600 mb-6">
              Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos données avec :
              nos prestataires techniques (hébergement, email), nos partenaires de confiance (uniquement si nécessaire),
              les autorités légales (si requis par la loi).
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Durée de Conservation</h2>
            <p className="text-slate-600 mb-4">Nous conservons vos données :</p>
            <ul className="list-disc pl-6 text-slate-600 mb-6">
              <li><strong>Données clients :</strong> 3 ans après la fin de la relation commerciale</li>
              <li><strong>Données de contact :</strong> 3 ans après le dernier contact</li>
              <li><strong>Données de navigation :</strong> 13 mois maximum</li>
              <li><strong>Données comptables :</strong> 10 ans (obligation légale)</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Sécurité des Données</h2>
            <p className="text-slate-600 mb-6">
              Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données :
              chiffrement des données sensibles, accès restreint aux données, sauvegardes régulières,
              mise à jour des systèmes de sécurité, formation de notre équipe.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Vos Droits</h2>
            <p className="text-slate-600 mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 text-slate-600 mb-6">
              <li><strong>Droit d&apos;accès :</strong> connaître les données que nous détenons</li>
              <li><strong>Droit de rectification :</strong> corriger vos données</li>
              <li><strong>Droit d&apos;effacement :</strong> supprimer vos données</li>
              <li><strong>Droit à la portabilité :</strong> récupérer vos données</li>
              <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement</li>
              <li><strong>Droit de limitation :</strong> limiter le traitement</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Cookies</h2>
            <p className="text-slate-600 mb-6">
              Notre site utilise des cookies techniques nécessaires au fonctionnement du site. 
              Nous n&apos;utilisons pas de cookies de tracking ou publicitaires sans votre consentement explicite.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Transferts Internationaux</h2>
            <p className="text-slate-600 mb-6">
              Vos données sont principalement traitées en France. Si un transfert vers un pays tiers est nécessaire,
              nous nous assurons qu&apos;il bénéficie d&apos;un niveau de protection adéquat.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Modifications</h2>
            <p className="text-slate-600 mb-6">
              Cette politique peut être mise à jour. Nous vous informerons de tout changement significatif 
              par email ou via notre site web.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Contact et Réclamations</h2>
            <p className="text-slate-600 mb-4">
              Pour exercer vos droits ou pour toute question concernant cette politique :
            </p>
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <p className="text-slate-600 mb-2"><strong>Email :</strong> sitekept@gmail.com</p>
              <p className="text-slate-600 mb-4"><strong>Téléphone :</strong> +33 6 51 17 99 25</p>
              <p className="text-slate-600 text-sm">
                Vous avez également le droit de déposer une réclamation auprès de la CNIL 
                (Commission Nationale de l&apos;Informatique et des Libertés).
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}