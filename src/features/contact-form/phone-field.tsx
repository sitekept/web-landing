"use client";

import { useEffect, useState, type FocusEvent } from "react";
import PhoneInput, {
  type Country,
  type FlagProps,
} from "react-phone-number-input";
import frLabels from "react-phone-number-input/locale/fr.json";
import { isSupportedCountry } from "libphonenumber-js";
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
      autoComplete="tel"
      required
      aria-invalid={invalid}
      aria-describedby={describedBy}
      className="mt-1 [--PhoneInputCountryFlag-borderColor:transparent] [--PhoneInputCountryFlag-backgroundColor--loading:transparent]"
    />
  );
}
