import { DossierBlock, DossierLink, DossierSection } from "./dossier-ui";

const signals = [
  "Conflit entre associés qui se cristallise vite",
  "Rupture contractuelle avec pression de délai",
  "Contentieux commercial qui doit être recadré avant emballement",
  "Négociation sensible à sécuriser avant prise de position publique",
];

export default function CabinetAvocatPage() {
  return (
    <main>
      <section className="border-b border-[#d9d1c5] bg-[#f5f1ea] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.34em] text-[#6b5d4b] uppercase">
              Autorité documentaire
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
              Le site ouvre un dossier, il ne joue pas à la plaquette
              institutionnelle.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#16181d]/72">
              Message de positionnement, preuves de spécialité, cas-types et
              consultation cadrée: la structure est construite pour la lecture
              utile avant prise de contact.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <DossierLink href="/cabinet-avocat/consultation">
                Ouvrir une consultation
              </DossierLink>
              <DossierLink href="/cabinet-avocat/publications">
                Lire les publications
              </DossierLink>
            </div>
          </div>

          <DossierBlock className="bg-white">
            <div className="flex items-center justify-between text-xs font-semibold tracking-[0.28em] text-[#6b5d4b] uppercase">
              <span>Sommaire</span>
              <span>Version 1.0</span>
            </div>

            <div className="mt-6 divide-y divide-[#e5ddd1]">
              {[
                "Expertises limitées et clairement assumées",
                "Interlocuteur senior et posture de lecture rapide",
                "Méthode en trois temps pour cadrer le risque",
                "Un seul objectif de conversion: la consultation",
              ].map((item, index) => (
                <div
                  key={item}
                  className="grid gap-3 py-4 sm:grid-cols-[92px_1fr]"
                >
                  <p className="text-xs font-semibold tracking-[0.24em] text-[#6b5d4b] uppercase">
                    Pièce 0{index + 1}
                  </p>
                  <p className="text-sm leading-7 text-[#16181d]/72">{item}</p>
                </div>
              ))}
            </div>
          </DossierBlock>
        </div>
      </section>

      <DossierSection
        className="bg-white"
        eyebrow="Signaux"
        title="Le visiteur doit reconnaître son niveau d'urgence ou de risque en quelques lignes."
        description="Cette séquence remplace les habituels chiffres-clés ou badges décoratifs par une vraie qualification des situations."
      >
        <div className="grid gap-4 xl:grid-cols-2">
          {signals.map((item) => (
            <DossierBlock key={item}>
              <p className="text-sm leading-7 text-[#16181d]/72">{item}</p>
            </DossierBlock>
          ))}
        </div>
      </DossierSection>

      <DossierSection
        className="bg-[#16181d] text-white"
        eyebrow="Cas-types"
        title="Plutôt qu'une section “services”, la homepage présente des situations de lecture immédiate."
        description="Le style reste sec et précis pour préserver l'autorité du cabinet."
      >
        <div className="grid gap-4 xl:grid-cols-3">
          {[
            "Associés qui ne partagent plus la même stratégie de sortie.",
            "Partenaire commercial qui suspend ou viole brutalement ses engagements.",
            "Entreprise qui doit arbitrer entre pression amiable, protocole ou contentieux.",
          ].map((item) => (
            <div
              key={item}
              className="border border-white/10 bg-white/6 p-6 text-sm leading-7 text-white/76"
            >
              {item}
            </div>
          ))}
        </div>
      </DossierSection>

      <DossierSection
        className="bg-[#ece4d7]"
        eyebrow="Lecture"
        title="Une dernière zone oriente vers la documentation ou la consultation."
        description="Aucun tunnel secondaire ne vient brouiller la conversion principale."
      >
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <DossierBlock className="bg-white">
            <p className="text-sm leading-8 text-[#16181d]/74">
              Publications, expertises et méthode servent à rendre le cabinet
              tangible avant tout échange. La template évite la séduction
              visuelle et mise sur la lecture, la netteté et la confiance
              rationnelle.
            </p>
          </DossierBlock>
          <div className="grid gap-4">
            <DossierLink href="/cabinet-avocat/expertises">
              Voir les expertises
            </DossierLink>
            <DossierLink href="/cabinet-avocat/consultation">
              Demander une consultation
            </DossierLink>
          </div>
        </div>
      </DossierSection>
    </main>
  );
}
