"use client";

import {
  useEffect,
  useState,
  type ClipboardEvent,
  type FocusEvent,
  type KeyboardEvent,
} from "react";
import PhoneInput, {
  type Country,
  type FlagProps,
} from "react-phone-number-input";
import frLabels from "react-phone-number-input/locale/fr.json";
import { AsYouType, isSupportedCountry } from "libphonenumber-js";
import "react-phone-number-input/style.css";
import { Input } from "@/components/ui/input";
import { getVisitorCountry } from "./contact-form.action";

const FALLBACK_COUNTRY: Country = "FR";
const PRIORITY_COUNTRIES: Country[] = ["FR", "BE", "CH", "LU", "CA", "IL"];

// Drapeau en emoji : le rendu par défaut de la librairie charge ses SVG depuis
// un CDN tiers. Windows n'affiche pas ces emojis et montre « FR » à la place.
function CountryFlag({ country }: FlagProps) {
  const flag = String.fromCodePoint(
    ...[...country].map((letter) => 0x1f1e6 + letter.charCodeAt(0) - 65)
  );

  return (
    <span aria-hidden="true" className="block text-center leading-none">
      {flag}
    </span>
  );
}

function getBrowserCountry() {
  const region = navigator.language.split("-")[1]?.toUpperCase();
  return region && isSupportedCountry(region) ? region : undefined;
}

// Vrai pour « +33 0 » : le préfixe du pays suivi d'un seul « 0 ».
function isPrefixFollowedByZero(text: string) {
  const typed = text.replace(/\s/g, "");
  const formatter = new AsYouType();
  formatter.input(typed);
  return typed === `+${formatter.getCallingCode()}0`;
}

interface PhoneFieldProps {
  id: string;
  name: string;
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  invalid: boolean;
  describedBy?: string;
}

export function PhoneField({
  id,
  name,
  value,
  onChange,
  invalid,
  describedBy,
}: PhoneFieldProps) {
  const [country, setCountry] = useState<Country>(FALLBACK_COUNTRY);

  // Résolu après le montage : lire l'en-tête de géolocalisation pendant le rendu
  // ferait basculer les pages du site en rendu dynamique.
  useEffect(() => {
    let cancelled = false;

    getVisitorCountry()
      .catch(() => null)
      .then((visitorCountry) => {
        if (cancelled) return;
        const detected =
          visitorCountry && isSupportedCountry(visitorCountry)
            ? visitorCountry
            : getBrowserCountry();
        if (detected) setCountry(detected);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // Champ vide, le préfixe (« +33 ») est déjà écrit. À la tabulation, le
  // navigateur sélectionne tout le texte : la première touche remplaçait le
  // préfixe (« 612345678 » devenait « +61 … »). On place le curseur après
  // lui, sans rien sélectionner. Un numéro déjà saisi garde le comportement
  // normal du navigateur.
  const placeCaretAfterPrefix = (event: FocusEvent<HTMLInputElement>) => {
    if (value) return;
    const input = event.currentTarget;
    const moveCaret = () => {
      if (document.activeElement !== input || value) return;
      const end = input.value.length;
      input.setSelectionRange(end, end);
    };
    moveCaret();
    // Certains navigateurs posent leur sélection juste après l'événement.
    requestAnimationFrame(moveCaret);
  };

  // Avec le curseur après le préfixe, un numéro international s'ajoutait
  // derrière lui : « +33 » + « +33 6… » donnait « +33 » ou « +33 33… ».
  // Un numéro collé qui commence par « + » ou « 00 » remplace donc tout le
  // champ, et le pays suit. Un numéro national collé (« 06… ») s'écrit
  // normalement après le préfixe.
  const replaceWithPastedNumber = (
    event: ClipboardEvent<HTMLInputElement>
  ) => {
    const pasted = event.clipboardData.getData("text").trim();
    if (!/^(\+|00)/.test(pasted)) return;
    const digits = pasted.replace(/^00/, "").replace(/\D/g, "");
    if (!digits) return;
    event.preventDefault();
    onChange(`+${digits}`);
  };

  // Même chose à la frappe, quand le champ ne contient que le préfixe :
  // « + » remplace le préfixe, et un second « 0 » (« 00 ») devient « + ».
  const replacePrefixOnInternationalInput = (
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    const input = event.currentTarget;
    if (event.key === "+" && !value) {
      input.select();
      return;
    }
    // On lit le texte affiché : à ce stade, la valeur remontée par la
    // librairie ne permet pas de reconnaître « +33 0 ».
    if (event.key === "0" && isPrefixFollowedByZero(input.value)) {
      event.preventDefault();
      input.select();
      // Si le navigateur refuse, le champ reste sélectionné : le chiffre
      // suivant remplace le tout et la librairie ajoute le « + » d'elle-même.
      document.execCommand("insertText", false, "+");
    }
  };

  return (
    <PhoneInput
      id={id}
      name={name}
      international
      addInternationalOption={false}
      defaultCountry={country}
      countryOptionsOrder={[...PRIORITY_COUNTRIES, "|", "..."]}
      labels={frLabels}
      flagComponent={CountryFlag}
      inputComponent={Input}
      value={value}
      onChange={onChange}
      onFocus={placeCaretAfterPrefix}
      onPaste={replaceWithPastedNumber}
      onKeyDown={replacePrefixOnInternationalInput}
      autoComplete="tel"
      required
      aria-invalid={invalid}
      aria-describedby={describedBy}
      className="mt-1 [--PhoneInputCountryFlag-borderColor:transparent] [--PhoneInputCountryFlag-backgroundColor--loading:transparent]"
    />
  );
}
