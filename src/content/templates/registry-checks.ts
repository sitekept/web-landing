/**
 * Contrôles de cohérence entre le registre et les définitions de templates.
 *
 * Ce fichier n'est importé par aucun code exécuté : il n'existe que pour
 * `pnpm type-check`. Il lit les définitions avec `import type`, ce qui garde le
 * registre (tiré par next.config.ts) libre de toute copie de template.
 *
 * Contrôle bilingue strict : tout template servi sur ce domaine (public ou
 * `lab` routé) est `["fr", "en"]` dans le registre et a sa définition ici, avec
 * sa copie française et sa copie anglaise. Aucune exception.
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
import type { architecteInterieur } from "@/content/templates/architecte-interieur";
import type { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import type { salonCoiffure } from "@/content/templates/salon-coiffure";
import type { avocate } from "@/content/templates/avocate";
import type { boulangerie } from "@/content/templates/boulangerie";
import type { fleuriste } from "@/content/templates/fleuriste";
import type { ordinateur } from "@/content/templates/ordinateur";
import type { patisserie } from "@/content/templates/patisserie";
import type { eCommerce } from "@/content/templates/e-commerce";
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
  "architecte-interieur": typeof architecteInterieur;
  "restaurant-bistrot": typeof restaurantBistrot;
  "salon-coiffure": typeof salonCoiffure;
  avocate: typeof avocate;
  boulangerie: typeof boulangerie;
  fleuriste: typeof fleuriste;
  ordinateur: typeof ordinateur;
  patisserie: typeof patisserie;
  "e-commerce": typeof eCommerce;
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

/** Entrées servies sur ce domaine : publiques, ou `lab` routées. */
type RoutedEntries = Extract<
  RegisteredTemplate,
  { status: "sitekept-public" } | { routed: true }
>;

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
  // Tout template routé est déclaré en français et en anglais.
  Assert<Equal<RoutedEntries["locales"], readonly ["fr", "en"]>>,
  // Tout template routé a sa définition (donc sa copie EN), et rien de plus.
  Assert<Equal<RoutedEntries["slug"], keyof Definitions>>,
];
