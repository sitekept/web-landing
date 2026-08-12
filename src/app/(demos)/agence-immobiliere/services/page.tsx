import { RealtyCard, RealtySection } from "../realty-ui";

export default function AgenceImmobiliereServicesPage() {
  return (
    <main className="bg-white">
      <RealtySection
        eyebrow="Services"
        title="L'agence ne vend pas seulement des annonces, elle orchestre deux parcours différents."
        description="La page distingue clairement l'accompagnement acquéreur de la stratégie vendeur."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <RealtyCard>
            <p className="text-xs font-semibold tracking-[0.28em] text-[#507163] uppercase">
              Acquéreurs
            </p>
            <p className="mt-4 text-sm leading-7 text-[#16211d]/72">
              Recherche ciblée, visites qualifiées, arbitrage entre quartier,
              usage et négociation.
            </p>
          </RealtyCard>
          <RealtyCard className="bg-[#f4f7f2]">
            <p className="text-xs font-semibold tracking-[0.28em] text-[#507163] uppercase">
              Vendeurs
            </p>
            <p className="mt-4 text-sm leading-7 text-[#16211d]/72">
              Estimation, stratégie de mise en marché, sélection des profils et
              accompagnement jusqu&rsquo;à la signature.
            </p>
          </RealtyCard>
        </div>
      </RealtySection>
    </main>
  );
}
