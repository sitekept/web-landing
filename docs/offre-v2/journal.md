# Journal d'exécution — refonte de l'offre et SEO/GEO

Branche : `feat/offre-v2` (créée depuis `dev` @ `b4d84c3`, 3 novembre 2026). Rien n'est mis en production.

| Tâche | Périmètre | Tours | Verdict final | Bloquants rencontrés |
|---|---|---|---|---|
| 0.0 Inventaire de la DA | `docs/design/da-inventaire.md`, `docs/design/reference/*.png` | 5 (4ᵉ et 5ᵉ autorisés par Joseph) | **Accepté en l'état par Joseph (5 nov. 2026)** après FAIL au T5 | T1 : dropdown-menu non signalé comme code mort, largeurs incomplètes. T2 : `transparent` et `phone-field.tsx` absents. T3 : valeurs internes des primitives, `@import` de globals.css, outline de /[metier]. T4 (clause 0 primitives) : outline de /realization, interlignages, couleurs TubesCursor. T5 (clause 0 bis antériorité) : 3 phrases encore non qualifiées qui contredisent la clause 0 bis (l. 3 en-tête, l. 911 `font-mono`, l. 927 couleurs des e-mails). 767/767 citations exactes ; correctifs T4 validés. |
| 0.1 État des lieux des données | `docs/seo/00-donnees.md` | 2 | PASS | T1 : citation `robots.ts:9` inexacte (`allow` est en l. 8) ; phrase fausse sur la branche/commit lus. Corrigés au T2. |
| 0.2 Analyse des données et des résultats de recherche | `docs/seo/01-analyse.md` | 3 | PASS | T1 : prix ComeUp qualifié « HT » à tort ; engagement 12 mois omis (lucasfonseque) et conclusion « même modèle » fausse. T2 : « même prix, même délai » contredit par la page ComeUp 520287 ; cellules de tableau > 25 mots. Corrigés au T3. |
| 0.3 Mots-clés et cartographie | `docs/seo/02-keyword-map.md` | 3 | PASS | T1 : « prix » partagé entre /tarifs et l'article louer ; recoupements « référencement naturel » / « visible » non arbitrés. T2 : règle « abonnement → article louer » trop large (contredit « sans abonnement » → article posséder). Corrigés au T3. Non bloquant restant : « campagne google ads prix » observé seulement en variante proche. |
| 0.4a Mesure de départ et SEO technique | `docs/seo/03-baseline.md`, `docs/design/reference-avant-0.4/`, 9 fichiers `src` (13 meta descriptions, 3 `alt` décoratifs) | 3 | PASS | T1 : action pour Joseph affirmant à tort que la description de /tarifs avait changé. T2 : « seules 13 pages ont des balises modifiées » faux (alt sur toutes les pages). Corrigés au T3. Code validé dès T1 : Lighthouse mobile home 96 / SEO 100, 32 pages conformes, 0 lien cassé, 0 pixel de différence. Constat : apex déjà en 308, aucune action Vercel. |
| 0.4b Consentement aux traceurs | `src/components/cookie-consent.tsx`, `src/lib/consent.ts`, `src/app/layout.tsx`, `src/components/footer.tsx`, `docs/seo/03b-consentement.md`, `docs/design/consentement/` | 2 + 3 itérations de design demandées par Joseph | PASS | T1 : rédaction de 03b (phrases et paragraphes trop longs). Puis, à la demande de Joseph : bandeau → petite bulle → bulle transparente plus discrète sur mobile → verre clair texte foncé (`bg-white/80`, valeur nouvelle décidée par Joseph). Vérification finale : 0 bloquant ; Lighthouse 95 / A11y 100 / SEO 100. |
| 0.5 Données structurées | `src/components/structured-data.tsx`, 9 pages `(marketing)`, `docs/seo/05-donnees-structurees.md` (branche `feat/offre-v2-t05`, fusionnée) | 2 | PASS | T1 : une phrase de 26 mots dans 05. Code validé dès T1 : 0 erreur schema.org sur 32 pages, sameAs LinkedIn fourni par Joseph. |
| Hors plan : titre de la home | `src/content/site-content.ts` (hero.title) | 1 | PASS | Décision de Joseph : « Le site internet que vous gardez. » |

## Constats de démarrage (à signaler à Joseph)

- `docs/seo-audit 2` : dossier vide (0 fichier). Aucun doublon, rien supprimé.
- GA4 (`<GoogleAnalytics>`, `src/app/layout.tsx:95`) est chargé sans mécanisme de consentement ; l'événement `generate_lead` existe déjà (`src/features/contact-form/use-contact-form.ts:41`). À traiter en 0.4.
- `public/robots.txt` n'existe plus ; `/template` redirige déjà vers `/templates` (`permanentRedirect`).
- 3 nov. 16:34 : une autre session a ramené le dossier d'origine sur `dev` et y a commité `6663e62`. La branche `feat/offre-v2` vit désormais dans le worktree `../sitekept-weblaunding-offre-v2`, rebasée sur `dev`.
- `generate_lead` a été ajouté le 11 août 2026 (`06b31f0`), le lendemain du relevé Search Console/GA4 : le relevé ne pouvait pas le montrer.
- 5 nov. : Joseph accepte l'inventaire de la DA en l'état. Limites connues : trois phrases non qualifiées (`da-inventaire.md` l. 3, l. 911 `font-mono`, l. 927 couleurs des e-mails) contredisent la clause 0 bis. **Les clauses 0 et 0 bis prévalent** : chaque prompt de vérificateur le rappellera. Valeurs vivantes encore omises (page d'admin, `opengraph-image.tsx`, quelques utilitaires de structure) : couvertes par la clause 0 bis, à ajouter au fil de l'eau.
- 5 nov. : décision de Joseph sur le consentement — poser le mécanisme de consentement dès la tâche 0.4 (aucun script Google chargé avant accord — plus strict qu'un Consent Mode par défaut « refusé » — ; GA4 et `generate_lead` seulement après accord), construit avec les composants existants ; captures du bandeau soumises à Joseph avant validation.

## Choix du modèle et de l'effort des sous-agents (demande de Joseph, 10 nov. 2026)

Chaque sous-agent reçoit un modèle et un effort adaptés à sa tâche, au lieu d'Opus en effort élevé par défaut. Une reprise (SendMessage) garde le modèle de l'agent repris.

| Type de tâche | Modèle | Effort |
|---|---|---|
| Corrections rédactionnelles ciblées, mise à jour de liens ou de chiffres déjà fournis | Haiku | bas |
| Relevés mécaniques : crawl, captures, grep, inventaires, contrôles de longueur | Sonnet | moyen |
| Rédaction SEO (descriptions, articles, pages), analyse des résultats de recherche | Sonnet | élevé |
| Code d'interface sous contrainte de DA, données structurées | Sonnet | élevé |
| Architecture ou code à risque (tunnel de formulaire, consentement, mesure) | Opus | élevé |
| Vérificateur d'une tâche documentaire ou mécanique | Sonnet | moyen |
| Vérificateur d'une tâche de code ou de rédaction publiée | Sonnet | élevé |
| Vérificateur de fin de phase | Opus | élevé |

La tâche 0.4b (bandeau de consentement) avait déjà démarré sur Opus avant cette règle ; elle relève de toute façon de la ligne « code à risque ».
- 10 nov. : points ouverts pour Joseph — `areaServed` « France » et `knowsLanguage` fr/en (JSON-LD) non affichés à l'écran ; `audienceType` des pages métier = une activité pour certaines (réparation informatique, entreprise de nettoyage, agence immobilière) ; « Devis gratuit en 24h » retiré de la description de la home faute de place. À reprendre en phase 1 : la phrase sous le H1 répète « gardez » et doit porter le mot-clé « création site internet professionnel ».
- Non bloquants de 0.4b à reprendre plus tard : anneau de focus de la primitive peu contrasté sur la bulle ; bouton « Gérer les cookies » sans curseur main ; la bulle recouvre la barre d'appel fixe de la démo plombier sur mobile tant qu'aucun choix n'est fait ; § 5 de 03b contient une citation de 42 mots.
