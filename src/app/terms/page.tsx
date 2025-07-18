export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Conditions{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
              d&apos;Utilisation
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
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              1. Acceptation des Conditions
            </h2>
            <p className="mb-6 text-slate-600">
              En accédant et en utilisant les services de SiteKept, vous
              acceptez d&apos;être lié par ces conditions d&apos;utilisation. Si
              vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser
              nos services.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              2. Description des Services
            </h2>
            <p className="mb-4 text-slate-600">
              SiteKept fournit des services de développement web incluant :
            </p>
            <ul className="mb-6 list-disc pl-6 text-slate-600">
              <li>Création de sites vitrines sur mesure</li>
              <li>Développement d&apos;applications web</li>
              <li>Optimisation SEO</li>
              <li>Maintenance et support technique</li>
              <li>Consultation et conseil en stratégie digitale</li>
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              3. Obligations du Client
            </h2>
            <p className="mb-4 text-slate-600">Le client s&apos;engage à :</p>
            <ul className="mb-6 list-disc pl-6 text-slate-600">
              <li>
                Fournir toutes les informations nécessaires à la réalisation du
                projet
              </li>
              <li>Respecter les délais de validation et de feedback</li>
              <li>Effectuer les paiements selon les modalités convenues</li>
              <li>Utiliser les services de manière légale et éthique</li>
              <li>
                Ne pas reproduire ou revendre nos créations sans autorisation
              </li>
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              4. Propriété Intellectuelle
            </h2>
            <p className="mb-6 text-slate-600">
              Une fois le paiement intégral effectué, le client devient
              propriétaire du site web livré. Cependant, SiteKept conserve les
              droits sur ses méthodes, processus et outils de développement. Le
              code source peut être fourni selon les termes du contrat
              spécifique.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              5. Tarifs et Paiements
            </h2>
            <p className="mb-4 text-slate-600">
              Les tarifs sont établis selon la complexité du projet. Les
              modalités de paiement incluent :
            </p>
            <ul className="mb-6 list-disc pl-6 text-slate-600">
              <li>Acompte de 50% à la signature du contrat</li>
              <li>Solde à la livraison du projet</li>
              <li>Paiements acceptés : virement bancaire, carte bancaire</li>
              <li>Délai de paiement : 3 jours maximum</li>
            </ul>

            <h3 className="mb-3 text-lg font-semibold text-slate-900">
              Nom de Domaine
            </h3>
            <p className="mb-6 text-slate-600">
              SiteKept offre la prise en charge du nom de domaine pour la
              première année dans la limite de 14,99€ TTC. Si le coût du nom de
              domaine souhaité dépasse cette limite, la différence sera à la
              charge du client. Le renouvellement du nom de domaine après la
              première année est entièrement à la charge du client. Le client
              reste propriétaire de son nom de domaine et peut le transférer
              vers un autre registraire à tout moment.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              6. Délais de Livraison
            </h2>
            <p className="mb-6 text-slate-600">
              Nous nous engageons à respecter les délais convenus. Les délais
              peuvent être prolongés en cas de : retard dans la fourniture des
              éléments par le client, modifications importantes du cahier des
              charges, ou circonstances exceptionnelles indépendantes de notre
              volonté.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              7. Garanties et Support
            </h2>
            <p className="mb-6 text-slate-600">
              Nous garantissons le bon fonctionnement du site pendant 30 jours
              après la livraison. Le support technique est inclus pour corriger
              les bugs et dysfonctionnements. Les modifications de contenu ou de
              design font l&apos;objet d&apos;un devis séparé.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              8. Limitation de Responsabilité
            </h2>
            <p className="mb-6 text-slate-600">
              SiteKept ne peut être tenu responsable des dommages indirects,
              pertes de profits, ou interruptions d&apos;activité. Notre
              responsabilité est limitée au montant des sommes versées pour le
              projet concerné.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              9. Résiliation
            </h2>
            <p className="mb-6 text-slate-600">
              Le contrat peut être résilié par l&apos;une ou l&apos;autre des
              parties avec un préavis de 30 jours. En cas de résiliation, les
              sommes déjà versées restent acquises pour les travaux réalisés.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              10. Droit Applicable
            </h2>
            <p className="mb-6 text-slate-600">
              Ces conditions sont régies par le droit français. Tout litige sera
              soumis à la compétence des tribunaux français.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              11. Modifications
            </h2>
            <p className="mb-6 text-slate-600">
              SiteKept se réserve le droit de modifier ces conditions à tout
              moment. Les modifications prendront effet dès leur publication sur
              notre site web.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              12. Contact
            </h2>
            <p className="mb-6 text-slate-600">
              Pour toute question concernant ces conditions d&apos;utilisation,
              contactez-nous :
            </p>
            <div className="rounded-lg bg-slate-50 p-6">
              <p className="mb-2 text-slate-600">
                <strong>Email :</strong> sitekept@gmail.com
              </p>
              <p className="text-slate-600">
                <strong>Téléphone :</strong> +33 6 51 17 99 25
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
