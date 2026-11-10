"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Button } from "@/components/ui/button";
import {
  clearAnalyticsCookies,
  getConsent,
  isConsentPanelOpen,
  openConsentPanel,
  setConsent,
  subscribeConsent,
  takeReturnFocus,
  type ConsentChoice,
  type ConsentState,
} from "@/lib/consent";

// Côté serveur et pendant l'hydratation, le choix est inconnu : rien ne
// s'affiche. La bulle n'apparaît qu'après lecture du choix dans le
// navigateur, donc jamais pour un visiteur qui a déjà répondu.
const getServerConsent = (): ConsentState | "pending" => "pending";
const getServerPanelOpen = () => false;

// Deux libellés par état : le court (mobile, une seule ligne) et le complet
// (à partir de 640 px). Le nom de la région (aria-label) reste explicite.
type Wording = { short: string; long: string };

const UNSET_WORDING: Wording = {
  short: "Mesure d'audience ?",
  long: "On mesure l'audience avec Google Analytics, seulement si vous acceptez.",
};

const CURRENT_CHOICE: Record<ConsentChoice, Wording> = {
  granted: {
    short: "Mesure d'audience : acceptée.",
    long: "Mesure d'audience avec Google Analytics : actuellement acceptée.",
  },
  denied: {
    short: "Mesure d'audience : refusée.",
    long: "Mesure d'audience avec Google Analytics : actuellement refusée.",
  },
};

type Gtag = NonNullable<Window["gtag"]>;

export function CookieConsent({ gaId }: { gaId: string }) {
  const consent = useSyncExternalStore<ConsentState | "pending">(
    subscribeConsent,
    getConsent,
    getServerConsent
  );
  const panelOpen = useSyncExternalStore(
    subscribeConsent,
    isConsentPanelOpen,
    getServerPanelOpen
  );

  // Une fois chargé, le script GA reste dans la page : après un retrait,
  // on le neutralise (voir l'effet ci-dessous) au lieu de le démonter.
  const [gaMounted, setGaMounted] = useState(false);
  if (consent === "granted" && !gaMounted) setGaMounted(true);

  const savedGtag = useRef<Gtag | null>(null);
  const regionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (consent === "pending") return;
    const flags = window as unknown as Record<string, unknown>;

    if (consent === "granted") {
      flags[`ga-disable-${gaId}`] = false;
      if (!window.gtag && savedGtag.current) window.gtag = savedGtag.current;
      return;
    }

    // Refus, retrait ou choix expiré : GA cesse d'envoyer quoi que ce soit,
    // window.gtag disparaît (l'événement generate_lead teste sa présence) et
    // les cookies _ga* sont supprimés.
    flags[`ga-disable-${gaId}`] = true;
    if (window.gtag) {
      savedGtag.current = window.gtag;
      window.gtag = undefined;
    }
    clearAnalyticsCookies();
  }, [consent, gaId]);

  const visible =
    consent === "unset" || (consent !== "pending" && panelOpen);

  // Rouvert depuis le footer : le focus va sur le premier bouton.
  useEffect(() => {
    if (panelOpen) {
      regionRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    }
  }, [panelOpen]);

  const wording =
    consent === "granted" || consent === "denied"
      ? CURRENT_CHOICE[consent]
      : UNSET_WORDING;

  const choose = (choice: ConsentChoice) => {
    const returnFocus = takeReturnFocus();
    setConsent(choice);
    returnFocus?.focus();
  };

  return (
    <>
      {gaMounted ? <GoogleAnalytics gaId={gaId} /> : null}
      {visible ? (
        <div
          ref={regionRef}
          role="region"
          aria-label="Cookies de mesure d'audience"
          className="fixed inset-x-3 bottom-3 z-50 flex flex-col gap-2 rounded-md border border-slate-200 bg-white/80 p-3 shadow-xl shadow-slate-950/20 backdrop-blur-md sm:right-auto sm:w-full sm:max-w-sm sm:gap-3 sm:p-4"
        >
          <p className="text-sm text-slate-700 sm:leading-6">
            <span className="sm:hidden">{wording.short}</span>
            <span className="hidden sm:inline">{wording.long}</span>{" "}
            <Link
              href="/privacy"
              className="font-medium text-slate-900 underline underline-offset-4"
            >
              En savoir plus
            </Link>
          </p>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="flex-1 border-blue-200 bg-white text-slate-900 hover:bg-blue-50"
              onClick={() => choose("denied")}
            >
              Tout refuser
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="flex-1 border-blue-200 bg-white text-slate-900 hover:bg-blue-50"
              onClick={() => choose("granted")}
            >
              Tout accepter
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}

/** Lien « Gérer les cookies » du footer : rouvre la bulle. */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={openConsentPanel}>
      Gérer les cookies
    </button>
  );
}
