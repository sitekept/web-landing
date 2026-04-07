import {
  Flame,
  PhoneCall,
  Thermometer,
  TriangleAlert,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atelier Thermique - Plombier Chauffagiste",
  description:
    "Landing d'urgence locale pour plombier chauffagiste avec triage immédiat, zones d'intervention et CTA téléphone dominant.",
};

export default function PlombierChauffagistePage() {
  return (
    <main className="min-h-screen bg-[#f7f2ec] pb-20 text-[#201815]">
      <div className="border-b border-[#d9b39c] bg-[#d24b2a] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 text-sm font-medium sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2">
            <TriangleAlert className="size-4 animate-pulse" />
            Intervention chauffage et fuite sous 2h dans le sud-ouest parisien
          </div>
          <a href="tel:+33176830014" className="hidden md:inline-flex">
            01 76 83 00 14
          </a>
        </div>
      </div>

      <section className="border-b border-[#e2c9ba] bg-[#fff8f2]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-lg font-semibold">Atelier Thermique</p>
              <p className="text-sm text-[#201815]/60">
                Dépannage plomberie, chaudière et chauffage
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm font-medium">
              <a href="#triage" className="hover:text-[#d24b2a]">
                Triage
              </a>
              <a href="#services" className="hover:text-[#d24b2a]">
                Services
              </a>
              <a href="#zones" className="hover:text-[#d24b2a]">
                Zones
              </a>
              <a href="#faq" className="hover:text-[#d24b2a]">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="triage"
        className="bg-[linear-gradient(180deg,#fff3e8_0%,#f7f2ec_100%)]"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.18fr_0.82fr] lg:px-8 lg:py-18">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-[8px] bg-[#201815] px-3 py-2 text-xs font-semibold tracking-[0.3em] text-[#ffd6bf] uppercase">
              Landing d&rsquo;urgence locale
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Fuite, panne de chaudière, radiateur froid: on vous rappelle avant
              que la situation s&rsquo;aggrave.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#201815]/72">
              Le hero est un triage, pas une vitrine. On classe le problème, on
              annonce la zone et on pousse l&rsquo;appel immédiatement.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+33176830014"
                className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#d24b2a] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#b83f23]"
              >
                <PhoneCall className="size-4 animate-pulse" />
                Appeler maintenant
              </a>
              <a
                href="#devis"
                className="inline-flex items-center justify-center rounded-[10px] border border-[#cda690] bg-white px-6 py-4 text-sm font-semibold text-[#201815]"
              >
                Demander un devis
              </a>
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {["Fuite visible", "Chaudière arrêtée", "Chauffage faible"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-[8px] border border-[#d7b9a8] bg-white px-4 py-4 text-sm font-medium text-[#201815]"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="rounded-[8px] border border-[#d9b39c] bg-[#201815] p-5 text-white shadow-[0_24px_80px_rgba(32,24,21,0.18)]">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#ffbe9a] uppercase">
              Triage immédiat
            </p>
            <div className="mt-5 space-y-3">
              {[
                "Je coupe l'eau ?",
                "La chaudière affiche un code erreur ?",
                "Le logement est sans eau chaude ?",
                "Vous intervenez ce soir ?",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-[8px] border border-white/10 bg-white/6 px-4 py-4"
                >
                  <p className="text-xs font-semibold tracking-[0.24em] text-white/46 uppercase">
                    Question 0{index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/76">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e2c9ba] bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            "< 15 min pour un rappel urgent",
            "7j / 7 pour les pannes critiques",
            "12 communes couvertes",
            "Devis cadré avant déplacement si possible",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[8px] bg-[#f8f2ec] px-4 py-4 text-sm text-[#201815]/76"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.32em] text-[#8f5b47] uppercase">
                Besoins traités
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                Les services sont rangés par problème vécu, pas par jargon
                métier.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#201815]/68">
              Chaque bloc dit ce qu&rsquo;on rétablit, dans quel délai probable et
              comment la visite est cadrée.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {[
              {
                icon: Wrench,
                title: "Fuite et dépannage plomberie",
                text: "Recherche de fuite, robinetterie, évacuation et remise en service rapide.",
              },
              {
                icon: Flame,
                title: "Chaudière et brûleur",
                text: "Remise en route, entretien correctif et diagnostic avant panne répétée.",
              },
              {
                icon: Thermometer,
                title: "Radiateurs et confort",
                text: "Purge, équilibrage, boucle de chauffage et confort thermique pièce par pièce.",
              },
              {
                icon: TriangleAlert,
                title: "Urgences du soir",
                text: "Message clair sur ce qui relève d'une urgence réelle et ce qui peut attendre le lendemain.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="grid gap-4 rounded-[8px] border border-[#e3cfc1] bg-[#fffaf6] p-6 lg:grid-cols-[auto_1fr]"
                >
                  <div className="flex size-11 items-center justify-center rounded-[8px] bg-[#201815] text-white">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#201815]/70">
                      {item.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="zones"
        className="bg-[#201815] px-4 py-16 text-white sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.32em] text-[#ffbe9a] uppercase">
              Zones d&rsquo;intervention
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Une section locale dense, presque logistique.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/74">
              Ici, le site montre où l&rsquo;équipe passe réellement, à quelle cadence
              et dans quel périmètre de rappel.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Boulogne-Billancourt",
              "Issy-les-Moulineaux",
              "Meudon",
              "Sèvres",
              "Clamart",
              "Vanves",
            ].map((city) => (
              <div
                key={city}
                className="rounded-[8px] border border-white/10 bg-white/8 px-4 py-4 text-sm text-white/78"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.32em] text-[#8f5b47] uppercase">
              FAQ utile
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Quelques questions qui lèvent l&rsquo;objection avant l&rsquo;appel.
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {[
              {
                q: "Intervenez-vous le soir et le week-end ?",
                a: "Oui, pour les vraies urgences de fuite, panne chaudière ou absence d'eau chaude.",
              },
              {
                q: "Pouvez-vous annoncer une fourchette avant déplacement ?",
                a: "Un cadrage téléphone permet de distinguer urgence, diagnostic simple et devis travaux.",
              },
              {
                q: "Faut-il couper l'eau avant votre arrivée ?",
                a: "La landing guide déjà l'appelant pour faire les bons premiers gestes en attendant.",
              },
            ].map((item) => (
              <article
                key={item.q}
                className="rounded-[8px] border border-[#e3cfc1] bg-[#fffaf6] p-6"
              >
                <h3 className="text-xl font-semibold">{item.q}</h3>
                <p className="mt-3 text-sm leading-7 text-[#201815]/70">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="devis"
        className="border-t border-[#d9b39c] bg-[#fff3e8] px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.32em] text-[#8f5b47] uppercase">
              Conversion
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Un seul but: déclencher l&rsquo;appel ou la demande de devis sans
              détour.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#201815]/68">
              Toute la page remonte vers ce moment. Aucun second tunnel, aucune
              navigation concurrente, aucune narration inutile.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="tel:+33176830014"
              className="inline-flex items-center justify-center rounded-[10px] bg-[#d24b2a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b83f23]"
            >
              01 76 83 00 14
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-[10px] border border-[#cda690] bg-white px-6 py-3 text-sm font-semibold text-[#201815]"
            >
              Retour au catalogue
            </Link>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-3 bottom-3 z-40 md:hidden">
        <a
          href="tel:+33176830014"
          className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#d24b2a] px-5 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(210,75,42,0.35)]"
        >
          <PhoneCall className="size-4 animate-pulse" />
          Appel d&rsquo;urgence
        </a>
      </div>
    </main>
  );
}
