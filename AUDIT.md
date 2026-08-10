# Audit SiteKept — Front-end & Positionnement

_Réalisé le 2026-08-10. Périmètre : 69 routes App Router, `src/content/site-content.ts`,
`messages/{fr,en}.json`, composants `src/app/_components/` et `src/components/`._

Le positionnement commercial de SiteKept repose sur la **confiance** : « vous possédez 100% du
site », « aucun abonnement imposé », « mise en ligne en 48h ». Ce document liste tout ce qui,
sur le site actuel, renforce ou au contraire contredit cette promesse — puis la dette
technique front-end qui affecte perf/SEO/accessibilité.

---

## Partie A — Positionnement & contenu

### Ce qui est bon et à protéger
- L'angle **propriété** est le vrai différenciateur : SiteKept crée un compte GitHub, Vercel
  et Hostinger **au nom du client**, décrit dans la section "Comment ça se passe" de la home
  (`src/content/site-content.ts`). C'est spécifique, vérifiable, rare sur ce marché.
- 7 articles de blog bilingues (FR/EN), cohérents avec le positionnement, sont un vrai actif
  SEO/GEO (`src/content/site-content.ts`, section blog).
- La FAQ (6 questions) traite les vraies objections sans esquive : abonnement, propriété
  réelle, délai, domaine.

### Problèmes de crédibilité et de preuve

1. **Zéro preuve sociale.** Aucun témoignage, aucun logo client, aucun chiffre affiché nulle
   part sur le site actif. Les stats « 500+ sites créés / 99% clients satisfaits » existent
   dans `messages/fr.json` (`hero.stats`) mais ne sont rendues par aucune page : les
   composants qui les afficheraient (`src/app/_components/hero.tsx`, `services.tsx`, `cta.tsx`,
   `value-proposition.tsx`) ne sont importés nulle part — du code mort qui, en plus, appelle
   `useTranslations()`/`getTranslations()` sans qu'un `NextIntlClientProvider` n'existe dans
   l'arbre (il planterait s'il était réactivé tel quel).

2. **Descriptions de réalisations recyclées (corrigé — voir Partie C, action appliquée).**
   4 des 9 projets sur `/realization` affichaient la description d'un autre projet :
   LegitBrainrot et « Les assureurs experts » servaient le texte d'IAFormaPlus (formation IA),
   ComizGlobal celui d'Orhakerem (cabinet d'avocat), BismuthCPA celui de PinckIt (gestion de
   projet). Un visiteur qui clique sur 2 réalisations voit immédiatement une incohérence sur
   la seule page de preuve du site.

3. **Aucune preuve visuelle sur la home.** `src/app/(marketing)/page.tsx` déroule tout
   l'argumentaire commercial sans jamais montrer une capture de site avant que le visiteur
   clique vers `/templates` ou `/realization`.

4. **Double voix de marque.** Le ton actuel (`site-content.ts`) est sobre et anti-jargon
   (« zones grises », « pas un tunnel pour vous garder captif »). Le ton legacy, encore présent
   dans `messages/fr.json` et servi comme fallback SEO, est hype et non prouvé : « Stop aux
   excuses ! », « Prêt à dominer votre marché en ligne ? », « Résultats garantis »,
   « Satisfaction garantie ». Les deux voix cohabitent dans le même bundle.

5. **Nom de marque instable.** « Sitekept » (nav, footer, hero, blog) vs « SiteKept »
   (`metadata.creator/publisher`, `siteName`, CGU, politique de confidentialité). Les deux
   graphies sont publiques.

6. **Point de conversion unique.** Toute la home converge vers `/#contact` (formulaire). Pas de
   prise de RDV, le téléphone (`+33 6 51 17 99 25`) n'est cliquable que dans le footer — alors
   que la cible (artisans, PME locales) appelle souvent plus volontiers qu'elle ne remplit un
   formulaire.

7. **Trust strip dupliqué.** Les 4 mêmes items (« À partir de 500€ », « Mise en ligne en 48h »,
   « 100% à vous », « Déploiement inclus ») apparaissent dans la carte hero **et** dans le
   bandeau juste en dessous — répétition sans apport.

8. **Coordonnées de contact incohérentes (corrigé — voir Partie C).** Le site affiche
   `sitekept@gmail.com` en contact réel, mais `/privacy` et `/terms` rendaient
   `contact@sitekept.com`, `+33 1 23 45 67 89` (numéro placeholder) et une adresse fictive
   « 123 Avenue des Champs, 75008 Paris ».

9. **Accentuation française incohérente sur la home (corrigé — voir Partie C).** Une grande
   partie des titres les plus visibles de `site-content.ts` étaient sans diacritiques
   (« clarte commerciale », « propriete », « rapidite », « Questions frequentes ») alors que
   d'autres blocs du même écran étaient correctement accentués — lu comme « site pas fini ».

10. **Mentions légales absentes (corrigé — voir Partie C, page créée avec champs à compléter).**
    `/terms` = CGU, `/privacy` = RGPD, mais aucune page de mentions légales (obligation
    art. 6 LCEN : forme juridique, SIREN, TVA intracom, hébergeur, directeur de publication).

---

## Partie B — Front-end technique

### Images
- ~34 Mo de PNG dans `/public`, dont `realization/orhakerem.png` (2,6 Mo) et
  `realization/balinjera.png` (2,0 Mo), affichés en `h-48` (192 px). Ils passent bien par
  `next/image` via `ProjectCard`, donc le runtime est correct, mais le poids du dépôt et le
  premier build restent élevés.
- 62 URLs Unsplash sur 14 fichiers de templates sont consommées en CSS `background-image`
  (26 usages) — contourne entièrement `next/image` : pas d'AVIF/WebP, pas de `sizes`, pas de
  lazy loading, pas de réservation de ratio → CLS sur chaque hero de template.
- `priority` n'est posé qu'une seule fois sur tout le site (`balinjera-shell.tsx:129`). Aucune
  image LCP de page marketing n'est priorisée.
- Deux `<img>` bruts dans `avocate-tel-aviv/page.tsx` (l.49, l.146), lint désactivé
  manuellement, sans `width`/`height` ni `loading`/`priority` — l.49 est une image hero
  1800px de large.

### Dépendance CDN à l'exécution
`src/components/ui/tubes-cursor.tsx` charge dynamiquement un bundle three.js depuis
`cdn.jsdelivr.net/npm/threejs-components@…` pour l'effet de curseur du hero — origine tierce
non pinnée dans le lockfile, sans SRI, avec un rendu WebGL qui tourne derrière le texte LCP de
la home.

### SEO
- Aucun JSON-LD sur tout le repo (`Organization`, `LocalBusiness`, `FAQPage`, `Article` seraient
  pertinents vu l'offre SEO/GEO vendue par le site lui-même).
- `src/lib/page-metadata.ts` (canonical + OG) n'est appelé que par 5 pages sur 69 — pas de
  canonical sur `/realization`, `/privacy`, `/terms` ni sur les ~58 pages de templates.
- Pas de `hreflang`/`alternates.languages` malgré un site bilingue FR/EN servi sur une URL
  unique commutée par cookie — Google n'indexe que la version FR par défaut.
- `twitter.card = summary_large_image` déclaré sans aucune image OG configurée ; pas de
  `opengraph-image.tsx`. Tout partage sur les réseaux affiche une carte vide.
- `icons.icon` pointe vers `/icon.svg`, fichier absent de `/public`.
- `robots.ts` autorise le crawl de `/admin-templates-7q4p9s2m` (pas d'auth, juste une URL
  obscure) et des ~58 pages de templates démo, qui diluent le domaine avec du contenu
  standard répété.

### Accessibilité
- ~45 des 58 pages de templates n'ont **aucun `<h1>`** (les shells `*-ui.tsx` partagés
  démarrent à `h2`) ; `balinjera-shell.tsx` en a deux.
- Pas de lien "aller au contenu" (skip-link) sur le site.
- `<main>` imbriqué : `(marketing)/layout.tsx` enveloppe déjà les pages dans un `<main>`, et
  plusieurs pages de templates en rendent un second.
- États de focus quasi absents hors des 4 primitives shadcn (`button`, `input`, `textarea`,
  `form`) ; le reste des liens/boutons s'appuie sur l'anneau de focus par défaut, peu
  contrasté sur fond clair.

### Robustesse
`getMessage` (`src/lib/site-messages.ts`) lève une exception sur clé de traduction manquante ;
aucun `error.tsx` n'existe dans le repo → une seule clé manquante côté FR ou EN transforme la
route entière en 500 en production.

### Dette technique
- `@radix-ui/react-dropdown-menu` installé pour un composant (`ui/dropdown-menu.tsx`) jamais
  importé.
- `package-lock.json` **et** `pnpm-lock.yaml` commités simultanément — risque de dérive
  d'installation selon l'outil utilisé.
- Fichiers `.DS_Store` commités (`public/`, `src/`, `src/app/`).
- `public/logo-sitekept-rond copy.webp` est un doublon binaire de `logo-sitekept-rond.webp`.

---

## Partie C — Plan d'action

### P0 — Crédibilité & légal (appliqué dans cette itération)
| Action | Fichiers | Statut |
|---|---|---|
| Corriger les 4 descriptions de réalisations recyclées | `messages/{fr,en}.json`, `realization/page.tsx` | ✅ appliqué |
| Aligner email/téléphone sur `/privacy` et `/terms` avec les vraies coordonnées | `messages/{fr,en}.json` | ✅ appliqué |
| Passe d'accentuation FR sur `site-content.ts` + 2 fautes de genre | `src/content/site-content.ts` | ✅ appliqué |
| Créer `/mentions-legales` (champs juridiques à compléter par le client) | `src/app/(marketing)/mentions-legales/page.tsx`, footer, sitemap | ✅ appliqué (champs À COMPLÉTER) |

### P1 — Conversion (non appliqué, recommandé ensuite)
- Ajouter au moins 2–3 témoignages clients réels avec nom/entreprise sur la home.
- Afficher 3–4 vignettes de réalisations directement sur la home, avant le premier clic.
- Ajouter un second canal de conversion visible dans le corps de page (tél. cliquable,
  Calendly/RDV) en plus du formulaire.
- Supprimer le doublon du trust strip ou le différencier du contenu de la carte hero.
- Trancher et uniformiser la graphie de marque (« Sitekept » vs « SiteKept ») sur tout le site.
- Nettoyer les claims non prouvés du ton "legacy" encore présents dans `messages/*.json`
  (« 500+ sites », « 99% satisfaits », « Résultats garantis ») : soit les prouver, soit les
  retirer des fallbacks.

### P2 — Technique (non appliqué, documenté pour arbitrage)
- Compresser/redimensionner les PNG de `/public` (particulièrement `realization/*.png`,
  `template/*.png`) et envisager le passage des fonds Unsplash en `next/image`.
- Ajouter JSON-LD (`Organization`, `FAQPage`, `Article` sur le blog).
- Ajouter `hreflang`/`alternates.languages` pour le bilingue FR/EN.
- Générer une image OG par défaut (`opengraph-image.tsx`) et régler `icons.icon`.
- Remplacer le chargement CDN runtime de `tubes-cursor.tsx` par une dépendance versionnée dans
  le lockfile, ou l'auto-héberger.
- Corriger la hiérarchie `<h1>` des shells de templates partagés (`*-ui.tsx`).
- Ajouter une authentification à `/admin-templates-7q4p9s2m` et l'exclure de `robots.ts`.
- Retirer `@radix-ui/react-dropdown-menu` si `ui/dropdown-menu.tsx` reste inutilisé ; choisir
  un seul lockfile ; nettoyer les `.DS_Store` et le doublon `logo-sitekept-rond copy.webp`.
- Ajouter `error.tsx`/`not-found.tsx` pour éviter qu'une clé de traduction manquante ne casse
  une route entière.

---

## Synthèse

Le positionnement "propriété du site + pas d'abonnement" est fort et défendable — c'est l'actif
principal à préserver. Le problème n'est pas l'offre, c'est que plusieurs détails publics
(réalisations mal légendées, coordonnées placeholder, accents manquants, mentions légales
absentes) contredisaient exactement la promesse de rigueur que le site vend. Ces points sont
corrigés dans cette itération. Les chantiers P1 (preuve sociale) et P2 (perf/SEO technique)
restent à arbitrer et planifier séparément.
