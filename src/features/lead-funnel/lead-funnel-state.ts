import {
  normalizeOffers,
  type ContactChannel,
  type MetierSlug,
  type OfferSlug,
} from "./lead-options";

/**
 * État du tunnel de demande (plan v2 § 7), tenu par `LeadFunnelProvider`.
 * Gardé en mémoire seulement : rien n'est écrit dans le navigateur
 * (ni localStorage ni sessionStorage). Fermer puis rouvrir la modale sans
 * recharger la page conserve la saisie ; un envoi réussi remet tout à zéro.
 */

export const LEAD_FUNNEL_STEPS = [1, 2, 3] as const;

export type LeadFunnelStep = (typeof LEAD_FUNNEL_STEPS)[number];

export interface LeadFunnelState {
  open: boolean;
  step: LeadFunnelStep;
  /**
   * Numéro d'affichage d'étape : augmente à chaque ouverture et à chaque
   * changement d'étape. Sert à n'envoyer qu'un `lead_funnel_step` par
   * affichage, même si React rejoue un effet.
   */
  viewId: number;
  /** `success` : écran de confirmation, les champs sont déjà vidés. */
  status: "editing" | "success";
  offers: OfferSlug[];
  /**
   * Un seul texte pour le champ `message` : « Précisez votre besoin » à
   * l'étape 1 quand « Autre » est coché, puis le message de l'étape 3. Le
   * visiteur le retrouve et le modifie sans le saisir deux fois.
   */
  message: string;
  activity: MetierSlug | "";
  currentUrl: string;
  name: string;
  email: string;
  /** Format international (E.164) renvoyé par `PhoneField`. */
  phone: string | undefined;
  contactChannel: ContactChannel | "";
}

export type LeadFunnelAction =
  /** Ouverture par un déclencheur : offres et métier facultatifs. */
  | { type: "open"; offers?: readonly OfferSlug[]; metier?: MetierSlug }
  | { type: "close" }
  /** `?offre=` et `?metier=` de l'adresse : pré-remplit sans ouvrir. */
  | { type: "prefill"; offers: readonly OfferSlug[]; metier?: MetierSlug }
  | { type: "setOffers"; offers: readonly OfferSlug[] }
  | {
      type: "setField";
      field: "message" | "currentUrl" | "name" | "email";
      value: string;
    }
  | { type: "setActivity"; value: MetierSlug | "" }
  | { type: "setPhone"; value: string | undefined }
  | { type: "setContactChannel"; value: ContactChannel | "" }
  | { type: "goTo"; step: LeadFunnelStep }
  | { type: "succeeded" };

const EMPTY_FIELDS = {
  offers: [] as OfferSlug[],
  message: "",
  activity: "" as const,
  currentUrl: "",
  name: "",
  email: "",
  phone: undefined,
  contactChannel: "" as const,
};

export const initialLeadFunnelState: LeadFunnelState = {
  open: false,
  step: 1,
  viewId: 0,
  status: "editing",
  ...EMPTY_FIELDS,
};

export function leadFunnelReducer(
  state: LeadFunnelState,
  action: LeadFunnelAction
): LeadFunnelState {
  switch (action.type) {
    case "open": {
      // Après un envoi réussi, une nouvelle demande repart de zéro.
      const base =
        state.status === "success"
          ? { ...initialLeadFunnelState, viewId: state.viewId }
          : state;
      return {
        ...base,
        open: true,
        // Toujours l'étape 1 : le visiteur voit les offres cochées par le
        // bouton cliqué et peut en ajouter.
        step: 1,
        viewId: state.viewId + 1,
        // Les offres du bouton remplacent la sélection précédente. Un bouton
        // sans offre garde la sélection en cours.
        offers:
          action.offers && action.offers.length > 0
            ? normalizeOffers(action.offers)
            : base.offers,
        activity: action.metier ?? base.activity,
      };
    }
    case "close":
      return state.open ? { ...state, open: false } : state;
    case "prefill":
      return {
        ...state,
        offers:
          action.offers.length > 0
            ? normalizeOffers(action.offers)
            : state.offers,
        activity: action.metier ?? state.activity,
      };
    case "setOffers":
      return { ...state, offers: normalizeOffers(action.offers) };
    case "setField":
      return { ...state, [action.field]: action.value };
    case "setActivity":
      return { ...state, activity: action.value };
    case "setPhone":
      return { ...state, phone: action.value };
    case "setContactChannel":
      return { ...state, contactChannel: action.value };
    case "goTo":
      return action.step === state.step
        ? state
        : { ...state, step: action.step, viewId: state.viewId + 1 };
    case "succeeded":
      // Champs vidés tout de suite ; l'écran de confirmation reste affiché
      // jusqu'à la fermeture.
      return {
        ...state,
        ...EMPTY_FIELDS,
        step: 1,
        status: "success",
      };
    default:
      return state;
  }
}
