"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  OFFER_CARDS,
  OFFER_PICKER_TEXT,
  OFFER_SLUGS,
  MESSAGE_MAX_LENGTH,
  getOfferSelectionErrors,
  normalizeOffers,
  type OfferSlug,
} from "./lead-options";

/** Identifiant de la case d'une offre, pour y placer le focus. */
export function getOfferCheckboxId(pickerId: string, slug: OfferSlug) {
  return `${pickerId}-${slug}`;
}

/** Identifiant du champ « Précisez votre besoin ». */
export function getOfferOtherFieldId(pickerId: string) {
  return `${pickerId}-other`;
}

interface OfferPickerProps {
  /** Identifiant du fieldset, préfixe de tous les identifiants internes. */
  id: string;
  /** Offres cochées (composant contrôlé). */
  value: OfferSlug[];
  onChange: (offers: OfferSlug[]) => void;
  /** Texte de « Précisez votre besoin », affiché quand « Autre » est coché. */
  otherText: string;
  onOtherTextChange: (text: string) => void;
  /**
   * Nom du champ de texte dans le formulaire. Par défaut `message` : le texte
   * précisé tient lieu de message. Le parent ne doit alors pas afficher un
   * second champ `message` pendant que « Autre » est coché.
   */
  otherFieldName?: string;
  /** Le parent passe `true` après une tentative d'envoi ou de passage. */
  showErrors?: boolean;
  legend?: string;
  /** Marque ajoutée aux libellés obligatoires, par exemple « * ». */
  requiredMark?: string;
  /** Ligne « Ajouter le suivi » sous les cartes quand Site est coché. */
  suggestFollowUp?: boolean;
}

/**
 * Sélection multiple des offres, présentée en cartes : vraies cases à cocher
 * `name="offers"`, une carte entière cliquable par offre. Partagée entre le
 * formulaire de secours et le tunnel. Les couleurs vivent dans
 * `cardClassName` : une variante pour fond sombre pourra s'y ajouter.
 */
export function OfferPicker({
  id,
  value,
  onChange,
  otherText,
  onOtherTextChange,
  otherFieldName = "message",
  showErrors = false,
  legend = OFFER_PICKER_TEXT.legend,
  requiredMark,
  suggestFollowUp = false,
}: OfferPickerProps) {
  const errors = showErrors ? getOfferSelectionErrors(value, otherText) : {};
  const offersErrorId = `${id}-error`;
  const otherId = getOfferOtherFieldId(id);
  const otherErrorId = `${otherId}-error`;
  const showOther = value.includes("autre");
  const showFollowUp =
    suggestFollowUp && value.includes("site") && !value.includes("suivi");

  const toggle = (slug: OfferSlug, checked: boolean) => {
    onChange(
      checked
        ? normalizeOffers([...value, slug])
        : value.filter((offer) => offer !== slug)
    );
  };

  const addFollowUp = () => {
    // Le bouton disparaît une fois Suivi coché : le focus passe sur sa case.
    document.getElementById(getOfferCheckboxId(id, "suivi"))?.focus();
    toggle("suivi", true);
  };

  return (
    <fieldset
      id={id}
      aria-describedby={errors.offers ? offersErrorId : undefined}
    >
      <legend className="text-sm leading-none font-medium">
        {legend}
        {requiredMark ? ` ${requiredMark}` : null}
      </legend>

      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {OFFER_SLUGS.map((slug) => {
          const checked = value.includes(slug);
          const checkboxId = getOfferCheckboxId(id, slug);

          return (
            <label
              key={slug}
              htmlFor={checkboxId}
              className={cardClassName(checked)}
            >
              <input
                id={checkboxId}
                type="checkbox"
                name="offers"
                value={slug}
                checked={checked}
                onChange={(event) => toggle(slug, event.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 accent-blue-600"
              />
              <span>
                <span className="block text-sm leading-6 font-semibold text-slate-900">
                  {OFFER_CARDS[slug].title}
                </span>
                <span className="mt-1 block text-sm leading-6 text-slate-600">
                  {OFFER_CARDS[slug].description}
                </span>
              </span>
            </label>
          );
        })}
      </div>

      {errors.offers && (
        <p id={offersErrorId} className="mt-1 text-sm text-red-700">
          {errors.offers}
        </p>
      )}

      {showOther && (
        <div className="mt-3">
          <Label htmlFor={otherId}>
            {OFFER_PICKER_TEXT.otherLabel}
            {requiredMark ? ` ${requiredMark}` : null}
          </Label>
          <Textarea
            id={otherId}
            name={otherFieldName}
            value={otherText}
            onChange={(event) => onOtherTextChange(event.target.value)}
            aria-required="true"
            aria-invalid={errors.other ? true : undefined}
            aria-describedby={errors.other ? otherErrorId : undefined}
            maxLength={MESSAGE_MAX_LENGTH}
            rows={3}
            className="mt-1"
          />
          {errors.other && (
            <p id={otherErrorId} className="mt-1 text-sm text-red-700">
              {errors.other}
            </p>
          )}
        </div>
      )}

      {/* Bouton en lien texte : une ligne discrète, qui passe à la ligne à 390 px. */}
      {showFollowUp && (
        <p className="mt-3 text-sm">
          <button
            type="button"
            onClick={addFollowUp}
            className="text-left font-medium text-blue-700 underline underline-offset-4"
          >
            {OFFER_PICKER_TEXT.followUpSuggestion}
          </button>
        </p>
      )}
    </fieldset>
  );
}

/** Carte sur fond clair : la case cochée reste visible, pas seulement la couleur. */
function cardClassName(checked: boolean) {
  return cn(
    "flex items-start gap-3 rounded-md border p-4",
    checked
      ? "border-blue-200 bg-blue-50"
      : "border-slate-200 bg-white hover:border-blue-200"
  );
}
