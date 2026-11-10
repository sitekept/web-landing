// Choix du visiteur sur la mesure d'audience (Google Analytics).
// Gardé dans le navigateur seulement (localStorage), jamais lu côté serveur :
// les pages restent statiques. Comportement documenté dans
// docs/seo/03b-consentement.md.

export type ConsentChoice = "granted" | "denied";
/** "unset" : aucun choix valide, la bulle doit s'afficher. */
export type ConsentState = ConsentChoice | "unset";

const STORAGE_KEY = "sitekept-consent";

/** Durée de validité d'un choix. Passé ce délai, la bulle redemande. */
export const CONSENT_VALIDITY_MONTHS = 6;

interface StoredConsent {
  choice: ConsentChoice;
  /** Date du choix, au format ISO. */
  date: string;
}

// Repli si localStorage est indisponible (navigation privée stricte,
// stockage bloqué) : le choix vaut pour la page en cours seulement.
let memoryConsent: StoredConsent | null = null;
let panelOpen = false;
let returnFocusTo: HTMLElement | null = null;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function readStored(): StoredConsent | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return memoryConsent;
    const parsed = JSON.parse(raw) as Partial<StoredConsent>;
    if (
      (parsed.choice === "granted" || parsed.choice === "denied") &&
      typeof parsed.date === "string"
    ) {
      return { choice: parsed.choice, date: parsed.date };
    }
    return null;
  } catch {
    return memoryConsent;
  }
}

function isExpired(date: string) {
  const expiry = new Date(date);
  expiry.setMonth(expiry.getMonth() + CONSENT_VALIDITY_MONTHS);
  return Number.isNaN(expiry.getTime()) || Date.now() >= expiry.getTime();
}

export function getConsent(): ConsentState {
  const stored = readStored();
  if (!stored || isExpired(stored.date)) return "unset";
  return stored.choice;
}

export function setConsent(choice: ConsentChoice) {
  const stored: StoredConsent = { choice, date: new Date().toISOString() };
  memoryConsent = stored;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch {
    // Stockage indisponible : le repli en mémoire suffit pour cette page.
  }
  panelOpen = false;
  emit();
}

export function isConsentPanelOpen() {
  return panelOpen;
}

/** Rouvre la bulle (lien « Gérer les cookies » du footer). */
export function openConsentPanel() {
  returnFocusTo =
    document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
  panelOpen = true;
  emit();
}

/** Élément à qui rendre le focus une fois le choix fait, s'il existe. */
export function takeReturnFocus() {
  const element = returnFocusTo;
  returnFocusTo = null;
  return element?.isConnected ? element : null;
}

export function subscribeConsent(listener: () => void) {
  listeners.add(listener);
  // Un choix fait dans un autre onglet s'applique ici aussi.
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

/**
 * Supprime les cookies Google Analytics (_ga, _ga_<id>, _gid, _gat…) du
 * domaine courant et de ses domaines parents, là où GA a pu les poser.
 */
export function clearAnalyticsCookies() {
  const names = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0]?.trim() ?? "")
    .filter((name) => name.startsWith("_ga") || name === "_gid");
  if (names.length === 0) return;

  const parts = window.location.hostname.split(".");
  const domains: (string | null)[] = [null];
  for (let i = 0; i < parts.length - 1; i += 1) {
    domains.push(`.${parts.slice(i).join(".")}`);
  }

  const expired = "expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; ${expired}${domain ? `; domain=${domain}` : ""}`;
    }
  }
}
