import { Check, ClipboardList, Sparkles, WavesLadder } from "lucide-react";

import { BeforeAfterSlider } from "./before-after-slider";
import { QuoteCard, QuoteLink, QuoteSection } from "./quote-ui";

export default function MenageNettoyagePage() {
  return (
    <main>
      <section
        id="devis"
        className="bg-[radial-gradient(circle_at_top_right,#d9f0f4,transparent_34%),linear-gradient(180deg,#f4fbfd_0%,#eff8fb_100%)] px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl self-center">
            <p className="inline-flex rounded-[20px] bg-white px-4 py-2 text-xs font-semibold tracking-[0.32em] text-[#2d7785] uppercase shadow-[0_16px_40px_rgba(22,56,69,0.06)]">
              Quote-first pragmatique
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Le devis démarre au-dessus de la ligne de flottaison, pas en bas
              d&rsquo;une page décorative.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#163845]/72">
              La homepage est un configurateur visuel: besoin, surface,
              fréquence, zone. Tout le reste sert à rassurer ce parcours.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <QuoteLink href="/menage-nettoyage/formules">
                Voir les formules
              </QuoteLink>
              <QuoteLink href="/menage-nettoyage/entreprises" light>
                Nettoyage entreprises
              </QuoteLink>
            </div>
          </div>

          <QuoteCard className="bg-[#163845] text-white">
            <div className="flex items-center justify-between text-xs font-semibold tracking-[0.3em] text-[#9ed8e1] uppercase">
              <span>Devis guidé</span>
              <span>02 min</span>
            </div>

            <div className="mt-6 space-y-4">
              {[
                "Quel besoin ? Entretien, grand ménage, remise en état ou bureau.",
                "Quelle surface ? Studio, appartement familial, maison ou local.",
                "Quel rythme ? Ponctuel, hebdomadaire ou créneau matin/soir.",
                "Quelle zone ? Paris, ouest, nord-est, sud-est.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-[18px] border border-white/10 bg-white/7 px-4 py-4"
                >
                  <p className="text-xs font-semibold tracking-[0.24em] text-white/45 uppercase">
                    Étape 0{index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/78">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href="mailto:bonjour@maisonnette.fr"
                className="inline-flex items-center justify-center rounded-[18px] bg-white px-4 py-3 text-sm font-semibold text-[#163845] transition hover:bg-[#e7f5f8]"
              >
                bonjour@maisonnette.fr
              </a>
              <a
                href="tel:+33173650091"
                className="inline-flex items-center justify-center rounded-[18px] border border-white/16 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/8"
              >
                01 73 65 00 91
              </a>
            </div>
          </QuoteCard>
        </div>
      </section>

      <QuoteSection
        className="bg-white"
        kicker="Choix rapides"
        title="Avant même les pages de détail, le site aide à se reconnaître dans le bon scénario."
        description="La structure passe par des cas d'usage courts et très lisibles, au lieu d'un empilement de prestations."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {[
            {
              icon: Sparkles,
              title: "Entretien du domicile",
              text: "Passages hebdomadaires, routines fixes, check-list cuisine, sanitaires, sols et poussières.",
            },
            {
              icon: ClipboardList,
              title: "Grand ménage ponctuel",
              text: "Retour de location, état des lieux, relance saisonnière ou remise au propre complète.",
            },
            {
              icon: WavesLadder,
              title: "Nettoyage bureaux",
              text: "Créneaux tôt le matin ou en soirée, circuits d'accès et suivi après première mission.",
            },
            {
              icon: Check,
              title: "Demande simple",
              text: "Le site ne cherche pas à vendre 20 options. Il clarifie juste ce qu'il faut pour chiffrer vite.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <QuoteCard
                key={item.title}
                className="grid gap-4 lg:grid-cols-[auto_1fr]"
              >
                <div className="flex size-12 items-center justify-center rounded-[18px] bg-[#e9f6f9] text-[#163845]">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#163845]/70">
                    {item.text}
                  </p>
                </div>
              </QuoteCard>
            );
          })}
        </div>
      </QuoteSection>

      <QuoteSection
        className="bg-[#edf7fa]"
        kicker="Preuve visuelle"
        title="Le avant/après sert de preuve de méthode, pas de décoration."
        description="Un slider simple suffit à distinguer la template des sites service classiques et renforce la promesse de remise au propre."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <BeforeAfterSlider />
          <div className="grid gap-4 self-start">
            {[
              "Produits adaptés au lieu, pas promesse vague “écologique” sortie du contexte.",
              "Brief très court en entrée, puis check-list de contrôle après premier passage.",
              "Le ton reste concret: pièces, surfaces, fréquence, accès et créneaux.",
            ].map((item) => (
              <QuoteCard key={item} className="bg-[#163845] text-white">
                <p className="text-sm leading-7 text-white/78">{item}</p>
              </QuoteCard>
            ))}
          </div>
        </div>
      </QuoteSection>

      <QuoteSection
        className="bg-white"
        kicker="Progression"
        title="Le site fait sentir la logique de devis avec un rythme d'étapes plutôt qu'une section statistiques."
      >
        <div className="grid gap-4 xl:grid-cols-4">
          {[
            "1. On qualifie le lieu, pas seulement la ville.",
            "2. On fixe la bonne formule selon la fréquence réelle.",
            "3. On annonce le créneau compatible avec la zone.",
            "4. On confirme une proposition sans ouvrir un second tunnel.",
          ].map((item, index) => (
            <div
              key={item}
              className={`rounded-[20px] border p-6 transition duration-300 ${
                index === 1 || index === 3
                  ? "border-[#163845] bg-[#163845] text-white"
                  : "border-[#cfe2e7] bg-[#f7fcfd] text-[#163845]"
              }`}
            >
              <p className="text-sm leading-7 font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </QuoteSection>

      <QuoteSection
        className="bg-[#163845] text-white"
        kicker="Zone couverte"
        title="Le maillage local est présenté comme une promesse opérationnelle."
        description="Pas de carte gadget: le site dit où l'équipe circule, quand elle passe et comment cela impacte le devis."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Paris 9e, 10e, 11e",
            "Boulogne, Issy, Vanves",
            "Vincennes, Montreuil, Bagnolet",
            "Neuilly, Levallois, Clichy",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[20px] border border-white/10 bg-white/8 px-5 py-5 text-sm leading-7 text-white/78"
            >
              {item}
            </div>
          ))}
        </div>
      </QuoteSection>
    </main>
  );
}
