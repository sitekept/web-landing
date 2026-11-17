"use client";

import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type FormEvent,
  type MouseEvent,
  type PointerEvent,
} from "react";
import { flushSync } from "react-dom";
import { isValidPhoneNumber } from "libphonenumber-js";
import { AlertCircle, ArrowRight, CheckCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/features/contact-form/contact-form.action";
import { PhoneField } from "@/features/contact-form/phone-field";
import { cn } from "@/lib/utils";
import { sendAnalyticsEvent } from "./analytics";
import {
  LEAD_FUNNEL_STEPS,
  type LeadFunnelAction,
  type LeadFunnelState,
  type LeadFunnelStep,
} from "./lead-funnel-state";
import {
  CONTACT_CHANNELS,
  CONTACT_CHANNEL_LABELS,
  CURRENT_URL_ERROR,
  CURRENT_URL_MAX_LENGTH,
  EMAIL_MAX_LENGTH,
  FOLLOW_UP_SUGGESTION_ENABLED,
  MESSAGE_MAX_LENGTH,
  METIERS,
  NAME_MAX_LENGTH,
  OTHER_MESSAGE_ERROR,
  OTHER_MESSAGE_MIN_LENGTH,
  formatOffersForAnalytics,
  getOfferSelectionErrors,
  isMetierSlug,
  normalizeCurrentUrl,
  type ContactChannel,
  type LeadFormOrigin,
} from "./lead-options";
import {
  OfferPicker,
  getOfferCheckboxId,
  getOfferOtherFieldId,
} from "./offer-picker";

const FORM_ORIGIN: LeadFormOrigin = "tunnel";
const LAST_STEP = LEAD_FUNNEL_STEPS[LEAD_FUNNEL_STEPS.length - 1];

const TEXT = {
  close: "Fermer",
  progress: (step: LeadFunnelStep) => `Étape ${step} sur ${LAST_STEP}`,
  titles: {
    1: "Que souhaitez-vous ?",
    2: "Parlez-nous de votre activité",
    3: "Comment vous joindre ?",
  } satisfies Record<LeadFunnelStep, string>,
  offersLegend: "Cochez une ou plusieurs offres",
  activity: "Votre métier",
  activityPlaceholder: "Choisissez votre métier",
  activityError: "Choisissez votre métier dans la liste.",
  currentUrl: "Adresse de votre site actuel",
  currentUrlPlaceholder: "monsite.fr",
  currentUrlHint: "Laissez vide si vous n'avez pas encore de site.",
  name: "Nom",
  namePlaceholder: "Votre nom complet",
  nameError: "Indiquez votre nom.",
  email: "Email",
  emailPlaceholder: "votre@email.com",
  emailError: "Indiquez une adresse email valide, par exemple nom@exemple.fr.",
  phone: "Téléphone",
  phoneError:
    "Numéro invalide. Choisissez votre pays et vérifiez le numéro, indicatif compris.",
  contactChannel: "Comment préférez-vous être recontacté ?",
  message: "Votre message",
  otherMessage: "Précisez votre besoin",
  messagePlaceholder:
    "Parlez-nous de votre activité et de ce que vous attendez.",
  required: "*",
  optional: "(facultatif)",
  back: "Retour",
  next: "Continuer",
  submit: "Envoyer ma demande",
  submitting: "Envoi en cours...",
  sentLabel: "Demande envoyée",
  successTitle: "Merci pour votre demande",
  successMessage:
    "Votre demande est bien arrivée. Jetez un œil à votre boîte mail : nous vous y avons préparé quelque chose. Pensez à vérifier vos spams.",
  errorFallback:
    "Erreur technique. Contactez-nous directement par email ou réessayez.",
};

/** Identifiants des champs, préfixés pour ne pas croiser ceux du formulaire de secours. */
const IDS = {
  dialogTitle: "lead-funnel-title",
  progress: "lead-funnel-progress",
  offers: "lead-funnel-offers",
  activity: "lead-funnel-activity",
  currentUrl: "lead-funnel-current-url",
  name: "lead-funnel-name",
  email: "lead-funnel-email",
  phone: "lead-funnel-phone",
  message: "lead-funnel-message",
  serverError: "lead-funnel-server-error",
} as const;

const errorId = (fieldId: string) => `${fieldId}-error`;

// Champ de saisie simple, sans espace ni « @ » en trop : la vérification
// complète reste celle du serveur.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Liste native des métiers, avec l'apparence du composant Input : mêmes
 * classes que `src/components/ui/input.tsx` (lignes 11 à 13), sans celles
 * qui ne concernent pas une liste (sélection de texte, fichier, texte indicatif).
 */
const SELECT_CLASS_NAME =
  "flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20";

type FieldErrors = Partial<
  Record<
    | "offers"
    | "other"
    | "activity"
    | "currentUrl"
    | "name"
    | "email"
    | "phone"
    | "message",
    string
  >
>;

/** Erreurs d'une étape, avec les mêmes règles que le schéma serveur. */
function getStepErrors(
  step: LeadFunnelStep,
  state: LeadFunnelState
): FieldErrors {
  if (step === 1) return getOfferSelectionErrors(state.offers, state.message);

  if (step === 2) {
    return {
      activity: isMetierSlug(state.activity) ? undefined : TEXT.activityError,
      currentUrl:
        state.currentUrl.trim() !== "" &&
        normalizeCurrentUrl(state.currentUrl) === null
          ? CURRENT_URL_ERROR
          : undefined,
    };
  }

  return {
    name: state.name.trim() === "" ? TEXT.nameError : undefined,
    email: EMAIL_PATTERN.test(state.email.trim()) ? undefined : TEXT.emailError,
    phone:
      state.phone && isValidPhoneNumber(state.phone)
        ? undefined
        : TEXT.phoneError,
    message:
      state.offers.includes("autre") &&
      state.message.trim().length < OTHER_MESSAGE_MIN_LENGTH
        ? OTHER_MESSAGE_ERROR
        : undefined,
  };
}

/** Champ qui reçoit le focus pour la première erreur d'une étape. */
function getFirstErrorFieldId(step: LeadFunnelStep, errors: FieldErrors) {
  const order: [keyof FieldErrors, string][] =
    step === 1
      ? [
          ["offers", getOfferCheckboxId(IDS.offers, "site")],
          ["other", getOfferOtherFieldId(IDS.offers)],
        ]
      : step === 2
        ? [
            ["activity", IDS.activity],
            ["currentUrl", IDS.currentUrl],
          ]
        : [
            ["name", IDS.name],
            ["email", IDS.email],
            ["phone", IDS.phone],
            ["message", IDS.message],
          ];

  return order.find(([key]) => errors[key])?.[1];
}

const NO_ATTEMPT: Record<LeadFunnelStep, boolean> = {
  1: false,
  2: false,
  3: false,
};

/**
 * Garde la page immobile derrière la modale. La place de la barre de
 * défilement est conservée (`scrollbar-gutter`) : rien ne bouge à l'ouverture.
 * Renvoie la fonction qui rétablit l'état précédent.
 */
function lockPageScroll() {
  const root = document.documentElement;
  const previousOverflow = root.style.getPropertyValue("overflow");
  const previousGutter = root.style.getPropertyValue("scrollbar-gutter");

  root.style.setProperty("scrollbar-gutter", "stable");
  root.style.setProperty("overflow", "hidden");

  return () => {
    root.style.setProperty("overflow", previousOverflow);
    root.style.setProperty("scrollbar-gutter", previousGutter);
  };
}

interface LeadFunnelDialogProps {
  state: LeadFunnelState;
  dispatch: Dispatch<LeadFunnelAction>;
  /** Appelé après chaque fermeture (Échap, bouton Fermer, clic sur le voile). */
  onClosed: () => void;
}

/**
 * Modale du tunnel en 3 étapes (plan v2 § 7) : `<dialog>` natif ouvert par
 * `showModal()`. Chargée à la demande par `LeadFunnelProvider`, qui garde
 * l'état. Aucune animation.
 */
export default function LeadFunnelDialog({
  state,
  dispatch,
  onClosed,
}: LeadFunnelDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const serverErrorRef = useRef<HTMLDivElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const unlockScrollRef = useRef<(() => void) | null>(null);
  const pointerDownOnBackdrop = useRef(false);

  const [attempted, setAttempted] = useState(NO_ATTEMPT);
  const [pending, setPending] = useState(false);
  const [serverError, setServerError] = useState("");

  const { open, step, status, viewId } = state;
  const isSuccess = status === "success";
  const errors = attempted[step] ? getStepErrors(step, state) : {};

  // Ouverture : showModal() puis focus sur le titre de l'étape. Le même effet
  // replace le focus à chaque nouvel affichage (étape suivante, retour,
  // écran de confirmation).
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!open) {
      if (dialog.open) dialog.close();
      return;
    }

    if (!dialog.open) {
      unlockScrollRef.current = lockPageScroll();
      dialog.showModal();
    }
    titleRef.current?.focus();
  }, [open, viewId, status]);

  useEffect(
    () => () => {
      unlockScrollRef.current?.();
      unlockScrollRef.current = null;
    },
    []
  );

  const closeDialog = () => dialogRef.current?.close();

  // Toutes les fermetures passent par l'événement `close` du dialogue :
  // Échap (événement `cancel` du navigateur), bouton Fermer, clic sur le voile.
  const handleClose = () => {
    unlockScrollRef.current?.();
    unlockScrollRef.current = null;
    onClosed();
  };

  // Clic sur le voile : seulement si l'appui a commencé dessus, pour ne pas
  // fermer quand une sélection de texte se termine hors du panneau.
  const handleBackdropPointerDown = (
    event: PointerEvent<HTMLDialogElement>
  ) => {
    pointerDownOnBackdrop.current = event.target === event.currentTarget;
  };
  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (pointerDownOnBackdrop.current && event.target === event.currentTarget) {
      closeDialog();
    }
    pointerDownOnBackdrop.current = false;
  };

  const goBack = () => {
    setServerError("");
    if (step > 1)
      dispatch({ type: "goTo", step: (step - 1) as LeadFunnelStep });
  };

  const send = async () => {
    setServerError("");
    setPending(true);

    const formData = new FormData();
    for (const offer of state.offers) formData.append("offers", offer);
    formData.set("activity", state.activity);
    formData.set("currentUrl", state.currentUrl);
    formData.set("contactChannel", state.contactChannel);
    formData.set("message", state.message);
    formData.set("name", state.name);
    formData.set("email", state.email);
    formData.set("phone", state.phone ?? "");
    formData.set("site_url", honeypotRef.current?.value ?? "");

    let result: Awaited<ReturnType<typeof submitContactForm>>;
    try {
      result = await submitContactForm(formData);
    } catch {
      result = { success: false, error: TEXT.errorFallback };
    }
    setPending(false);

    if (result.success) {
      // Conversion, seulement après l'accord du visiteur (garde-fou dans
      // sendAnalyticsEvent). Aucune donnée personnelle : offres et métier.
      sendAnalyticsEvent("generate_lead", {
        event_category: "contact",
        event_label: "tunnel_contact",
        offers: formatOffersForAnalytics(state.offers),
        activity: state.activity,
        form_origin: FORM_ORIGIN,
      });
      setAttempted(NO_ATTEMPT);
      dispatch({ type: "succeeded" });
      return;
    }

    // Saisie conservée ; le message est rendu avant d'y placer le focus.
    flushSync(() => setServerError(result.error || TEXT.errorFallback));
    serverErrorRef.current?.focus();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSuccess || pending) return;

    const stepErrors = getStepErrors(step, state);
    const firstErrorId = getFirstErrorFieldId(step, stepErrors);
    if (firstErrorId) {
      // Erreurs rendues (aria-invalid, aria-describedby) avant le focus.
      flushSync(() =>
        setAttempted((current) => ({ ...current, [step]: true }))
      );
      document.getElementById(firstErrorId)?.focus();
      return;
    }

    if (step < LAST_STEP) {
      dispatch({ type: "goTo", step: (step + 1) as LeadFunnelStep });
      return;
    }

    void send();
  };

  const fieldProps = (fieldId: string, error: string | undefined) => ({
    id: fieldId,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId(fieldId) : undefined,
  });

  const fieldError = (fieldId: string, error: string | undefined) =>
    error ? (
      <p id={errorId(fieldId)} className="mt-1 text-sm text-red-700">
        {error}
      </p>
    ) : null;

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={IDS.dialogTitle}
      onClose={handleClose}
      onPointerDown={handleBackdropPointerDown}
      onClick={handleBackdropClick}
      className="m-auto w-full max-w-2xl bg-white text-slate-900 shadow-xl shadow-slate-950/20 backdrop:bg-slate-950/60 max-sm:h-dvh max-sm:max-h-none sm:rounded-md"
    >
      <form
        noValidate
        onSubmit={handleSubmit}
        className="flex min-h-full flex-col"
      >
        <div className="sticky top-0 z-10 border-b border-slate-200 bg-white px-6 py-4">
          <div className="flex items-center justify-between gap-3">
            <p id={IDS.progress} className="text-sm font-medium text-slate-600">
              {isSuccess ? TEXT.sentLabel : TEXT.progress(step)}
            </p>
            <button
              type="button"
              onClick={closeDialog}
              aria-label={TEXT.close}
              className="rounded-md p-2 text-slate-900"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {isSuccess ? null : (
            <div aria-hidden="true" className="mt-2 flex gap-2">
              {LEAD_FUNNEL_STEPS.map((item) => (
                <span
                  key={item}
                  className={cn(
                    "h-1.5 flex-1 rounded-full",
                    item <= step ? "bg-blue-600" : "bg-blue-100"
                  )}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex-1 p-6">
          <h2
            ref={titleRef}
            id={IDS.dialogTitle}
            tabIndex={-1}
            aria-describedby={isSuccess ? undefined : IDS.progress}
            className="text-xl font-semibold text-slate-950"
          >
            {isSuccess ? TEXT.successTitle : TEXT.titles[step]}
          </h2>

          {/* Piège à robots : invisible pour un visiteur, voir l'action serveur. */}
          <input
            ref={honeypotRef}
            type="text"
            name="site_url"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] h-px w-px opacity-0"
          />

          {isSuccess ? (
            <div
              role="status"
              className="mt-6 flex items-start rounded-md bg-green-50 p-4 text-green-800"
            >
              <CheckCircle
                className="mr-2 h-5 w-5 shrink-0"
                aria-hidden="true"
              />
              <span className="text-sm">{TEXT.successMessage}</span>
            </div>
          ) : (
            <div className="mt-6 space-y-6">
              {step === 1 ? (
                <OfferPicker
                  id={IDS.offers}
                  value={state.offers}
                  onChange={(offers) => dispatch({ type: "setOffers", offers })}
                  otherText={state.message}
                  onOtherTextChange={(value) =>
                    dispatch({ type: "setField", field: "message", value })
                  }
                  showErrors={attempted[1]}
                  legend={TEXT.offersLegend}
                  requiredMark={TEXT.required}
                  suggestFollowUp={FOLLOW_UP_SUGGESTION_ENABLED}
                />
              ) : null}

              {step === 2 ? (
                <>
                  <div>
                    <Label htmlFor={IDS.activity}>
                      {TEXT.activity} {TEXT.required}
                    </Label>
                    <select
                      {...fieldProps(IDS.activity, errors.activity)}
                      name="activity"
                      required
                      value={state.activity}
                      onChange={(event) => {
                        const value = event.target.value;
                        dispatch({
                          type: "setActivity",
                          value: isMetierSlug(value) ? value : "",
                        });
                      }}
                      className={cn(SELECT_CLASS_NAME, "mt-1")}
                    >
                      <option value="">{TEXT.activityPlaceholder}</option>
                      {METIERS.map((metier) => (
                        <option key={metier.slug} value={metier.slug}>
                          {metier.label}
                        </option>
                      ))}
                    </select>
                    {fieldError(IDS.activity, errors.activity)}
                  </div>

                  <div>
                    <Label htmlFor={IDS.currentUrl}>
                      {TEXT.currentUrl} {TEXT.optional}
                    </Label>
                    {/* type="text" : le champ url du navigateur refuse
                        « monsite.fr », que le serveur accepte. */}
                    <Input
                      {...fieldProps(IDS.currentUrl, errors.currentUrl)}
                      aria-describedby={cn(
                        `${IDS.currentUrl}-hint`,
                        errors.currentUrl && errorId(IDS.currentUrl)
                      )}
                      name="currentUrl"
                      type="text"
                      inputMode="url"
                      autoComplete="url"
                      autoCapitalize="none"
                      spellCheck={false}
                      maxLength={CURRENT_URL_MAX_LENGTH}
                      placeholder={TEXT.currentUrlPlaceholder}
                      value={state.currentUrl}
                      onChange={(event) =>
                        dispatch({
                          type: "setField",
                          field: "currentUrl",
                          value: event.target.value,
                        })
                      }
                      className="mt-1"
                    />
                    <p
                      id={`${IDS.currentUrl}-hint`}
                      className="mt-1 text-sm text-slate-500"
                    >
                      {TEXT.currentUrlHint}
                    </p>
                    {fieldError(IDS.currentUrl, errors.currentUrl)}
                  </div>
                </>
              ) : null}

              {step === 3 ? (
                <>
                  <div>
                    <Label htmlFor={IDS.name}>
                      {TEXT.name} {TEXT.required}
                    </Label>
                    <Input
                      {...fieldProps(IDS.name, errors.name)}
                      name="name"
                      required
                      maxLength={NAME_MAX_LENGTH}
                      autoComplete="name"
                      placeholder={TEXT.namePlaceholder}
                      value={state.name}
                      onChange={(event) =>
                        dispatch({
                          type: "setField",
                          field: "name",
                          value: event.target.value,
                        })
                      }
                      className="mt-1"
                    />
                    {fieldError(IDS.name, errors.name)}
                  </div>

                  <div>
                    <Label htmlFor={IDS.email}>
                      {TEXT.email} {TEXT.required}
                    </Label>
                    <Input
                      {...fieldProps(IDS.email, errors.email)}
                      name="email"
                      type="email"
                      required
                      maxLength={EMAIL_MAX_LENGTH}
                      autoComplete="email"
                      placeholder={TEXT.emailPlaceholder}
                      value={state.email}
                      onChange={(event) =>
                        dispatch({
                          type: "setField",
                          field: "email",
                          value: event.target.value,
                        })
                      }
                      className="mt-1"
                    />
                    {fieldError(IDS.email, errors.email)}
                  </div>

                  <div>
                    <Label htmlFor={IDS.phone}>
                      {TEXT.phone} {TEXT.required}
                    </Label>
                    <PhoneField
                      id={IDS.phone}
                      name="phone"
                      value={state.phone}
                      onChange={(value) =>
                        dispatch({ type: "setPhone", value })
                      }
                      invalid={Boolean(errors.phone)}
                      describedBy={
                        errors.phone ? errorId(IDS.phone) : undefined
                      }
                    />
                    {fieldError(IDS.phone, errors.phone)}
                  </div>

                  {/* Facultatif, rien n'est coché d'avance : comme le
                      formulaire de secours. */}
                  <fieldset>
                    <legend className="text-sm leading-none font-medium">
                      {TEXT.contactChannel} {TEXT.optional}
                    </legend>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {CONTACT_CHANNELS.map((channel) => (
                        <Label
                          key={channel}
                          htmlFor={`lead-funnel-channel-${channel}`}
                          className="rounded-md border border-slate-200 px-4 py-2"
                        >
                          <input
                            id={`lead-funnel-channel-${channel}`}
                            type="radio"
                            name="contactChannel"
                            value={channel}
                            checked={state.contactChannel === channel}
                            onChange={() =>
                              dispatch({
                                type: "setContactChannel",
                                value: channel satisfies ContactChannel,
                              })
                            }
                            className="h-4 w-4 shrink-0 accent-blue-600"
                          />
                          {CONTACT_CHANNEL_LABELS[channel]}
                        </Label>
                      ))}
                    </div>
                  </fieldset>

                  {/* Avec « Autre », le texte de l'étape 1 revient ici,
                      modifiable, toujours obligatoire. */}
                  <div>
                    <Label htmlFor={IDS.message}>
                      {state.offers.includes("autre")
                        ? `${TEXT.otherMessage} ${TEXT.required}`
                        : `${TEXT.message} ${TEXT.optional}`}
                    </Label>
                    <Textarea
                      {...fieldProps(IDS.message, errors.message)}
                      name="message"
                      maxLength={MESSAGE_MAX_LENGTH}
                      rows={4}
                      placeholder={TEXT.messagePlaceholder}
                      aria-required={
                        state.offers.includes("autre") ? true : undefined
                      }
                      value={state.message}
                      onChange={(event) =>
                        dispatch({
                          type: "setField",
                          field: "message",
                          value: event.target.value,
                        })
                      }
                      className="mt-1"
                    />
                    {fieldError(IDS.message, errors.message)}
                  </div>

                  {serverError ? (
                    <div
                      ref={serverErrorRef}
                      id={IDS.serverError}
                      role="alert"
                      tabIndex={-1}
                      className="flex items-start rounded-md bg-red-50 p-4 text-red-800"
                    >
                      <AlertCircle
                        className="mr-2 h-5 w-5 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm">{serverError}</span>
                    </div>
                  ) : null}
                </>
              ) : null}
            </div>
          )}
        </div>

        {/* Clés distinctes : un bouton n'hérite jamais de l'élément d'un autre,
            donc aucune transition de couleur au changement d'écran. */}
        <div className="sticky bottom-0 z-10 flex gap-3 border-t border-slate-200 bg-white px-6 py-4">
          {isSuccess ? (
            <Button
              key="close"
              type="button"
              size="lg"
              onClick={closeDialog}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              {TEXT.close}
            </Button>
          ) : (
            <>
              {step > 1 ? (
                <Button
                  key="back"
                  type="button"
                  size="lg"
                  variant="outline"
                  onClick={goBack}
                  disabled={pending}
                  className="flex-1 border-blue-200 bg-white text-slate-900 hover:bg-blue-50"
                >
                  {TEXT.back}
                </Button>
              ) : null}
              <Button
                key="submit"
                type="submit"
                size="lg"
                disabled={pending}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                {step < LAST_STEP ? (
                  <>
                    {TEXT.next}
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </>
                ) : pending ? (
                  TEXT.submitting
                ) : (
                  <>
                    {TEXT.submit}
                    <Send className="ml-2 h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </Button>
            </>
          )}
        </div>
      </form>
    </dialog>
  );
}
