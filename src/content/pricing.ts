/**
 * Constante unique des prix et du régime fiscal de Sitekept.
 *
 * Ce fichier est la SEULE source des prix : home, /tarifs, pages métier,
 * JSON-LD, llms.txt, futur /offres et futures CGV. Aucun montant ne doit être
 * écrit en dur ailleurs ; on importe la valeur ou on appelle `formatPrice`.
 *
 * Les montants sont ceux affichés au visiteur. Tant que `VAT_MODE` vaut
 * "franchise", aucune TVA n'est facturée : l'affichage ne porte ni « TTC » ni
 * « HT » et la mention légale `FRANCHISE_LEGAL_NOTICE` s'applique. Pour passer
 * à la TVA, il suffit de mettre `VAT_MODE` à "applied" : les montants restent
 * des prix TTC et `fiscalLabel` ajoute « TTC (soit X € HT) ».
 *
 * Voir docs/offre-v2/plan-v2.md § 6 bis.
 */

import type { SiteLocale } from "@/content/site-content";

export type VatMode = "franchise" | "applied";

export type PricePeriod = "month" | "year";

export const CURRENCY = "EUR" as const;

/** Régime de TVA en vigueur. Seul interrupteur à changer quand la TVA s'applique. */
export const VAT_MODE: VatMode = "franchise";

/** Taux de TVA appliqué lorsque `VAT_MODE` vaut "applied". */
export const VAT_RATE = 0.2;

/** Mention légale obligatoire sur devis, factures et pages de prix en franchise. */
export const FRANCHISE_LEGAL_NOTICE = "TVA non applicable, art. 293 B du CGI";

export const PRICING = {
  /** Site vitrine essentiel, payé une seule fois. */
  site: {
    amount: 500,
    billing: "one-time",
  },
  /** « Suivi & Visibilité » : mensuel sans engagement, ou annuel. */
  followUp: {
    monthly: 65,
    annual: 600,
    /**
     * Premier mois offert : à la livraison du site, formule mensuelle
     * uniquement. L'annuel n'est pas remboursé au prorata.
     */
    firstMonthFree: {
      appliesTo: "monthly",
      startsAt: "delivery",
    },
  },
  /** Campagnes publicitaires : à partir de ce montant mensuel, budget média en sus. */
  campaigns: {
    minimumMonthly: 300,
    mediaBudgetIncluded: false,
  },
} as const;

/**
 * Liens de paiement Stripe du suivi. Facultatifs : `undefined` tant que les
 * variables d'environnement ne sont pas renseignées. Non affichés à l'écran
 * pour l'instant.
 */
export const STRIPE_LINKS: {
  monthly: string | undefined;
  annual: string | undefined;
} = {
  monthly: process.env.NEXT_PUBLIC_STRIPE_LINK_MONTHLY || undefined,
  annual: process.env.NEXT_PUBLIC_STRIPE_LINK_ANNUAL || undefined,
};

const NBSP = " ";

/** Arrondit au centime et supprime le bruit des flottants. */
function roundToCents(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function formatNumber(value: number, locale: SiteLocale): string {
  const rounded = roundToCents(value);
  const [integerPart, decimalPart] = rounded.toFixed(2).split(".");
  const groupSeparator = locale === "fr" ? NBSP : ",";
  const decimalSeparator = locale === "fr" ? "," : ".";
  const grouped = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator);

  return decimalPart === "00"
    ? grouped
    : `${grouped}${decimalSeparator}${decimalPart}`;
}

/**
 * Montant formaté, période facultative.
 * fr : « 500 € », « 65 €/mois », « 600 €/an » (espace insécable avant €).
 * en : « €500 », « €65/month », « €600/year ».
 */
export function formatPrice(
  amount: number,
  options: { locale?: SiteLocale; period?: PricePeriod } = {}
): string {
  const { locale = "fr", period } = options;
  const number = formatNumber(amount, locale);

  if (locale === "en") {
    const suffix = period ? `/${period === "month" ? "month" : "year"}` : "";
    return `€${number}${suffix}`;
  }

  const suffix = period ? `/${period === "month" ? "mois" : "an"}` : "";
  return `${number}${NBSP}€${suffix}`;
}

/** Montant hors taxes déduit d'un prix TTC, au centime. */
export function amountExcludingVat(amount: number, rate: number = VAT_RATE) {
  return roundToCents(amount / (1 + rate));
}

/**
 * Libellé fiscal à accoler à un prix affiché. Chaîne vide en franchise ;
 * en mode TVA : « TTC (soit 416,67 € HT) » (fr) ou « incl. VAT (€416.67 excl.
 * VAT) » (en).
 */
export function fiscalLabel(
  amount: number,
  options: {
    locale?: SiteLocale;
    period?: PricePeriod;
    mode?: VatMode;
  } = {}
): string {
  const { locale = "fr", period, mode = VAT_MODE } = options;

  if (mode === "franchise") {
    return "";
  }

  const excludingVat = formatPrice(amountExcludingVat(amount), {
    locale,
    period,
  });

  return locale === "fr"
    ? `TTC (soit ${excludingVat} HT)`
    : `incl. VAT (${excludingVat} excl. VAT)`;
}

/** Prix suivi de son libellé fiscal, sans espace superflu en franchise. */
export function formatPriceWithTax(
  amount: number,
  options: {
    locale?: SiteLocale;
    period?: PricePeriod;
    mode?: VatMode;
  } = {}
): string {
  const label = fiscalLabel(amount, options);
  const price = formatPrice(amount, options);

  return label ? `${price} ${label}` : price;
}

/** Mention légale de TVA à afficher : vide dès que la TVA s'applique. */
export function vatLegalNotice(mode: VatMode = VAT_MODE): string {
  return mode === "franchise" ? FRANCHISE_LEGAL_NOTICE : "";
}

/**
 * Accès numérique brut pour le JSON-LD (schema.org Offer / PriceSpecification).
 * `valueAddedTaxIncluded` n'est renseigné que lorsque la TVA s'applique : en
 * franchise, aucune TVA n'est facturée et la propriété est omise.
 */
export function schemaPrice(
  amount: number,
  mode: VatMode = VAT_MODE
): {
  price: number;
  priceCurrency: typeof CURRENCY;
  valueAddedTaxIncluded?: true;
} {
  return mode === "applied"
    ? { price: amount, priceCurrency: CURRENCY, valueAddedTaxIncluded: true }
    : { price: amount, priceCurrency: CURRENCY };
}
