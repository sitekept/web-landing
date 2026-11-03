# Journal d'exécution — refonte de l'offre et SEO/GEO

Branche : `feat/offre-v2` (créée depuis `dev` @ `b4d84c3`, 3 novembre 2026). Rien n'est mis en production.

| Tâche | Périmètre | Tours | Verdict final | Bloquants rencontrés |
|---|---|---|---|---|
| 0.0 Inventaire de la DA | `docs/design/da-inventaire.md`, `docs/design/reference/*.png` | 5 (4ᵉ et 5ᵉ autorisés par Joseph) | **FAIL — arrêt, en attente de Joseph** | T1 : dropdown-menu non signalé comme code mort, largeurs incomplètes. T2 : `transparent` et `phone-field.tsx` absents. T3 : valeurs internes des primitives, `@import` de globals.css, outline de /[metier]. T4 (clause 0 primitives) : outline de /realization, interlignages, couleurs TubesCursor. T5 (clause 0 bis antériorité) : 3 phrases encore non qualifiées qui contredisent la clause 0 bis (l. 3 en-tête, l. 911 `font-mono`, l. 927 couleurs des e-mails). 767/767 citations exactes ; correctifs T4 validés. |
| 0.1 État des lieux des données | `docs/seo/00-donnees.md` | 2 | PASS | T1 : citation `robots.ts:9` inexacte (`allow` est en l. 8) ; phrase fausse sur la branche/commit lus. Corrigés au T2. |
| 0.2 Analyse des données et des résultats de recherche | `docs/seo/01-analyse.md` | 3 | PASS | T1 : prix ComeUp qualifié « HT » à tort ; engagement 12 mois omis (lucasfonseque) et conclusion « même modèle » fausse. T2 : « même prix, même délai » contredit par la page ComeUp 520287 ; cellules de tableau > 25 mots. Corrigés au T3. |

## Constats de démarrage (à signaler à Joseph)

- `docs/seo-audit 2` : dossier vide (0 fichier). Aucun doublon, rien supprimé.
- GA4 (`<GoogleAnalytics>`, `src/app/layout.tsx:95`) est chargé sans mécanisme de consentement ; l'événement `generate_lead` existe déjà (`src/features/contact-form/use-contact-form.ts:41`). À traiter en 0.4.
- `public/robots.txt` n'existe plus ; `/template` redirige déjà vers `/templates` (`permanentRedirect`).
- 3 nov. 16:34 : une autre session a ramené le dossier d'origine sur `dev` et y a commité `6663e62`. La branche `feat/offre-v2` vit désormais dans le worktree `../sitekept-weblaunding-offre-v2`, rebasée sur `dev`.
- `generate_lead` a été ajouté le 11 août 2026 (`06b31f0`), le lendemain du relevé Search Console/GA4 : le relevé ne pouvait pas le montrer.
