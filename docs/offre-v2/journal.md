# Journal d'exécution — refonte de l'offre et SEO/GEO

Branche : `feat/offre-v2` (créée depuis `dev` @ `b4d84c3`, 3 novembre 2026). Rien n'est mis en production.

| Tâche | Périmètre | Tours | Verdict final | Bloquants rencontrés |
|---|---|---|---|---|

## Constats de démarrage (à signaler à Joseph)

- `docs/seo-audit 2` : dossier vide (0 fichier). Aucun doublon, rien supprimé.
- GA4 (`<GoogleAnalytics>`, `src/app/layout.tsx:95`) est chargé sans mécanisme de consentement ; l'événement `generate_lead` existe déjà (`src/features/contact-form/use-contact-form.ts:41`). À traiter en 0.4.
- `public/robots.txt` n'existe plus ; `/template` redirige déjà vers `/templates` (`permanentRedirect`).
