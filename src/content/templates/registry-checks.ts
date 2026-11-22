/**
 * Contrôles de cohérence entre le registre et les définitions de templates.
 *
 * Ce fichier n'est importé par aucun code exécuté : il n'existe que pour
 * `pnpm type-check`. Il lit les définitions avec `import type`, ce qui garde le
 * registre (tiré par le middleware) libre de toute copie de template.
 *
 * Quand un template est migré sur le kit, on ajoute sa définition à
 * `Definitions` : `locales` du registre doit alors correspondre aux langues de
 * sa copie. Un template déclaré `["fr", "en"]` dans le registre doit avoir sa
 * définition ici : le contrôle couvre les templates publics bilingues comme les
 * `lab` routés (`routed: true`, toujours `["fr", "en"]`).
 */
import type { dentiste } from "@/content/templates/dentiste";
import type { electricien } from "@/content/templates/electricien";
import type { osteopathe } from "@/content/templates/osteopathe";
import type { reparationMobile } from "@/content/templates/reparation-mobile";
import type { createurCulinaire } from "@/content/templates/createur-culinaire";
import type { coffeeShop } from "@/content/templates/coffee-shop";
import type { spaMassage } from "@/content/templates/spa-massage";
import type { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import type { photographe } from "@/content/templates/photographe";
import type { plombierChauffagiste } from "@/content/templates/plombier-chauffagiste";
import type { expertComptable } from "@/content/templates/expert-comptable";
import type { garageAuto } from "@/content/templates/garage-auto";
import type { menageNettoyage } from "@/content/templates/menage-nettoyage";
import type { cabinetAvocat } from "@/content/templates/cabinet-avocat";
import type {
  RegisteredTemplate,
  TemplateSlug,
} from "@/content/templates/registry";

/** Définitions typées existantes, par slug. */
type Definitions = {
  dentiste: typeof dentiste;
  electricien: typeof electricien;
  osteopathe: typeof osteopathe;
  "reparation-mobile": typeof reparationMobile;
  "createur-culinaire": typeof createurCulinaire;
  "coffee-shop": typeof coffeeShop;
  "spa-massage": typeof spaMassage;
  "agence-immobiliere": typeof agenceImmobiliere;
  photographe: typeof photographe;
  "plombier-chauffagiste": typeof plombierChauffagiste;
  "expert-comptable": typeof expertComptable;
  "garage-auto": typeof garageAuto;
  "menage-nettoyage": typeof menageNettoyage;
  "cabinet-avocat": typeof cabinetAvocat;
};

type Equal<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false;
type Assert<T extends true> = T;

/** Langues d'un template d'après le registre. */
type RegistryLocales<Slug extends TemplateSlug> = Extract<
  RegisteredTemplate,
  { slug: Slug }
>["locales"][number];

/** Langues de la copie d'une définition. */
type DefinitionLocales<Slug extends keyof Definitions> =
  keyof Definitions[Slug]["copy"];

/** Slugs du registre déclarés en français et en anglais. */
type BilingualSlugs = Extract<
  RegisteredTemplate,
  { locales: readonly ["fr", "en"] }
>["slug"];

export type RegistryChecks = [
  // Chaque définition existante annonce les langues que déclare le registre.
  Assert<
    Equal<
      {
        [S in keyof Definitions & TemplateSlug]: Equal<
          RegistryLocales<S>,
          DefinitionLocales<S>
        >;
      }[keyof Definitions & TemplateSlug],
      true
    >
  >,
  // Chaque slug de `Definitions` existe dans le registre.
  Assert<Equal<Exclude<keyof Definitions, TemplateSlug>, never>>,
  // Un template déclaré `["fr", "en"]` a sa définition (et donc sa copie EN).
  Assert<Equal<Exclude<BilingualSlugs, keyof Definitions>, never>>,
];
