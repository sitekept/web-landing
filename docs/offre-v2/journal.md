# Journal d'exécution — refonte de l'offre et SEO/GEO

Branche : `feat/offre-v2` (créée depuis `dev` @ `b4d84c3`, 3 novembre 2026). Rien n'est mis en production.

| Tâche | Périmètre | Tours | Verdict final | Bloquants rencontrés |
|---|---|---|---|---|
| 0.1 État des lieux des données | `docs/seo/00-donnees.md` | 2 | PASS | T1 : citation `robots.ts:9` inexacte (`allow` est en l. 8) ; phrase fausse sur la branche/commit lus. Corrigés au T2. |

## Constats de démarrage (à signaler à Joseph)

- `docs/seo-audit 2` : dossier vide (0 fichier). Aucun doublon, rien supprimé.
- GA4 (`<GoogleAnalytics>`, `src/app/layout.tsx:95`) est chargé sans mécanisme de consentement ; l'événement `generate_lead` existe déjà (`src/features/contact-form/use-contact-form.ts:41`). À traiter en 0.4.
- `public/robots.txt` n'existe plus ; `/template` redirige déjà vers `/templates` (`permanentRedirect`).
- 3 nov. 16:34 : une autre session a ramené le dossier d'origine sur `dev` et y a commité `6663e62`. La branche `feat/offre-v2` vit désormais dans le worktree `../sitekept-weblaunding-offre-v2`, rebasée sur `dev`.
- `generate_lead` a été ajouté le 11 août 2026 (`06b31f0`), le lendemain du relevé Search Console/GA4 : le relevé ne pouvait pas le montrer.
