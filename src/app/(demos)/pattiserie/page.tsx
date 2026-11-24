import { permanentRedirect } from "next/navigation";

/** Ancienne adresse (faute de frappe) : redirigée vers `/patisserie`. */
export default function LegacyPattiseriePage() {
  permanentRedirect("/patisserie");
}
