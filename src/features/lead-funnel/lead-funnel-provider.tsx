"use client";

import {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { sendAnalyticsEvent } from "./analytics";
import {
  LeadFunnelContext,
  type LeadFunnelActions,
} from "./lead-funnel-context";
import { initialLeadFunnelState, leadFunnelReducer } from "./lead-funnel-state";
import {
  formatOffersForAnalytics,
  parseMetierParam,
  parseOfferParam,
} from "./lead-options";

// Le code de la modale (étapes, champ téléphone, appel serveur) n'est pas
// dans le premier chargement des pages : il arrive au survol, au focus ou au
// premier appui sur un déclencheur, et au plus tard au clic.
const loadDialog = () => import("./lead-funnel-dialog");
const LeadFunnelDialog = lazy(loadDialog);

/**
 * Fournisseur du tunnel de demande, monté dans le layout marketing. Il garde
 * l'état du tunnel (en mémoire seulement), lit `?offre=` et `?metier=` au
 * chargement, mesure l'affichage des étapes et rend la modale à la demande.
 */
export function LeadFunnelProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(
    leadFunnelReducer,
    initialLeadFunnelState
  );
  const [dialogLoaded, setDialogLoaded] = useState(false);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const lastTrackedViewId = useRef(0);

  // `?offre=site,suivi` et `?metier=plombier` pré-remplissent le tunnel sans
  // l'ouvrir. Lus après le montage, jamais par useSearchParams() : les pages
  // restent statiques. Valeurs inconnues ignorées sans erreur. Le formulaire
  // de secours garde sa propre lecture de `?offre=`.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const offers = parseOfferParam(params.get("offre"));
    const metier = parseMetierParam(params.get("metier"));
    if (offers.length > 0 || metier) {
      dispatch({ type: "prefill", offers, metier });
    }
  }, []);

  // `lead_funnel_step` : un événement par affichage d'étape (ouverture,
  // passage à l'étape suivante, retour). `viewId` change à chaque affichage :
  // un effet rejoué par React (StrictMode) ou une saisie dans l'étape ne
  // renvoie rien. Revenir en arrière puis repasser une étape compte un
  // nouvel affichage. Garde-fou du consentement : sendAnalyticsEvent.
  const { open, status, viewId, step, offers } = state;
  useEffect(() => {
    if (!open || status !== "editing") return;
    if (lastTrackedViewId.current === viewId) return;
    lastTrackedViewId.current = viewId;

    sendAnalyticsEvent("lead_funnel_step", {
      step,
      offers: formatOffersForAnalytics(offers),
    });
  }, [open, status, viewId, step, offers]);

  const actions = useMemo<LeadFunnelActions>(
    () => ({
      open: (options, trigger) => {
        returnFocusRef.current = trigger;
        loadDialog().then(
          () => {
            setDialogLoaded(true);
            dispatch({
              type: "open",
              offers: options.offers,
              metier: options.metier,
            });
          },
          // Code de la modale introuvable (réseau coupé, nouvelle version
          // en ligne) : le lien mène au formulaire de secours.
          () => {
            window.location.assign(options.href);
          }
        );
      },
      preload: () => {
        loadDialog().catch(() => undefined);
      },
    }),
    []
  );

  const handleClosed = useCallback(() => {
    dispatch({ type: "close" });
    const trigger = returnFocusRef.current;
    returnFocusRef.current = null;
    if (trigger?.isConnected) trigger.focus();
  }, []);

  return (
    <LeadFunnelContext.Provider value={actions}>
      {children}
      {dialogLoaded ? (
        <Suspense fallback={null}>
          <LeadFunnelDialog
            state={state}
            dispatch={dispatch}
            onClosed={handleClosed}
          />
        </Suspense>
      ) : null}
    </LeadFunnelContext.Provider>
  );
}
