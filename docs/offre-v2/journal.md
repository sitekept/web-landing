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
| Hors plan : lien LinkedIn du footer | `src/components/footer.tsx`, commentaire de `src/components/structured-data.tsx` (commit c5e036b) | 1 | PASS | Aucun bloquant. Lien aligné sur le bord gauche du bloc, sans icône (aucune icône LinkedIn sur le site). |
| 0.6 GEO | `site-content.ts`, `metier-pages.ts`, `seo-geo/page.tsx`, `blog/[slug]/page.tsx`, `public/llms.txt`, `docs/seo/06-geo.md` | 3 | **Accepté en l'état par Joseph (10 nov.)** après FAIL au T3 | T1 : llms.txt affirmait des faits non publiés ; puce de 35 mots ; checklist attribuant à Google des points non sourcés. T2 : 06-geo.md (décompte 11 au lieu de 8 CTA, passages trop longs). T3 : 3 passages de 06-geo.md encore à 4 phrases (2 cellules télégraphiques, 1 puce avec titre en gras). Code et textes publiés validés depuis T2. |
| 0.7 Optimisation des pages existantes | 9 fichiers `src`/`messages`, `docs/seo/02-keyword-map.md`, `docs/seo/07-optimisation.md` | 2 | PASS | T1 : regex des liens internes acceptait `//` et `/\` ; paragraphe de 07 à 4 phrases. Corrigés au T2. 22 pages conformes à la carte, 1 010 liens internes sans erreur, bloc Sources (14 liens), puces réparées, audienceType = public. |
| 0.8a Plan éditorial du blog | `docs/seo/04-blog-plan.md` | 2 | PASS | T1 : longueur cible de l'article 7 (900–1 100 mots) au-delà de 1 000 sans justification. Corrigé au T2. 12 sources officielles rouvertes et conformes. Pilotes : articles 1 (fiche Google Entreprise) et 2 (salon de coiffure sans site). |
| 0.8b 2 articles pilotes | `site-content.ts` (+2 articles), `02-keyword-map.md`, `04-blog-plan.md`, `08-articles-pilotes.md` | 3 | **Accepté en l'état par Joseph (11 nov.)** après FAIL au T3 | T1 : source 3 périmée (page Google modifiée le 11 nov.), « Business Profile » sans source. T2 : chiffres de 08 tirés d'un brouillon. T3 : une phrase de 32 mots dans 08 (note interne). Articles validés : 930 et 716 mots, 45 extraits sur 45, 0 erreur JSON-LD, 0 régression. |
| 0.9 Rapport de phase 0 | `docs/seo/05-rapport.md` | 2 | PASS | T1 : action GA4 mélangeant durée des cookies (13 mois) et conservation des données (2 ou 14 mois). Corrigé au T2. |

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
- 10 nov. : décision de Joseph — les articles restent signés « Équipe Sitekept » (aucun nom personnel publié), y compris les articles pilotes de 0.8b.
- 10 nov. : décisions à soumettre à Joseph (plan éditorial) — article 8 « combien coûte un site internet par mois » face à la règle « prix → /tarifs » ; article 6 (mentions légales) publiable seulement après finalisation de /mentions-legales ; l'offre inclut-elle la rédaction des mentions légales et de la politique de confidentialité des clients ?
- 10 nov. : décisions de Joseph —
  - article 8 du plan (« combien coûte un site internet par mois ») conservé : exception à la règle « prix → /tarifs » (coût récurrent ≠ prix d'achat), l'article renvoie vers /tarifs ; à reporter dans la carte des mots-clés ;
  - l'offre à 500 € INCLUT la rédaction des mentions légales et de la politique de confidentialité du site du client (à refléter dans l'article 6, /offres en phase 2, et à soumettre au registre) ;
  - JSON-LD : garder `areaServed` France et `knowsLanguage` fr/en ;
  - pages métier : corriger `audience.audienceType` pour qu'il désigne un public (ex. « réparateurs informatiques », « agents immobiliers », « entreprises de nettoyage ») — à faire dans la tâche 0.7.
- 10 nov. : Joseph accepte la tâche 0.6 en l'état (3 passages de 06-geo.md à 4 phrases, note interne). Il garde la date « Mis à jour le 10 novembre 2026 » sur les 6 articles retouchés (lastmod du sitemap inclus). Reste à faire en 0.7 : titre Google abrégé dans la checklist (`site-content.ts` ~l. 2249), bloc « Sources » cliquable dans le gabarit des articles, puces bleues écrasées sur mobile (`blog/[slug]/page.tsx` ~l. 150, `shrink-0`).
- 0.7 : le validateur JSON-LD de 0.5 signale « audience non visible » sur 11 pages métier : conséquence assumée de la décision de Joseph (public déclaré sans être affiché). À reconsidérer si Joseph veut l'afficher dans le texte.
- 11 nov. : Joseph accepte la tâche 0.8b en l'état (une phrase de 32 mots dans la note interne 08). Restent pour plus tard : renvoi vers l'article « fiche Google Entreprise » dans le corps de /seo-geo et de site-optimise-seo-geo ; ajout des 2 articles à llms.txt ; règle « comment créer » du bloc C de la carte à borner (« comment créer un site internet » → /blog) ; page d'aide Google « Valider votre établissement » à envisager pour une mise à jour de l'article 1.

## Fin de phase 0 (11 nov. 2026)

Vérification globale (Opus, effort élevé) : **PASS, aucun bloquant**. Build, lint, type-check OK ; aucune page ne passe en dynamique ; Lighthouse mobile home avec bulle : Perf 95 (médiane), Access. 100, SEO 100, CLS 0,000014 ; JSON-LD 0 erreur sur 34 pages (hors « audience non visible », décision de Joseph) ; 34 URL du sitemap en 200, 0 lien cassé ; consentement conforme ; échantillon de 6 pages et 7 sources externes conformes ; DA cohérente (seules nouveautés : variantes `sm:` de la bulle, à ajouter à l'inventaire, et `bg-white/80` décidé par Joseph).

Non bloquants à reprendre en début de phase 1 :
- `docs/seo/05-rapport.md` : ligne 0.9 et partie 7 périmées (rapport commité en 7cfe7d1, PASS au T2) ; ajouter les mesures Lighthouse de fin de phase.
- /tarifs : Accessibilité 96 (contraste du « 600 € » barré, déjà présent avant) — disparaît avec la suppression du prix barré en phase 1.
- Inventaire DA : ajouter les variantes `sm:` de la bulle (clause 0 bis).
- Gabarit des articles : « Mis à jour » avec majuscule sur tous les articles.
- llms.txt : « domaine offert la première année » à revoir en phase 1.
- Branche `dev` : le commit 224c5ac (« tokens tpl-* ») touche `globals.css` et n'est pas dans feat/offre-v2 — risque de conflit à la fusion.

## Phase 1 — discours et prix (démarrée le 11 nov. 2026)

Mini-plan validé par Joseph le 11 nov. (« Oui, lance ») : 1.1 constante unique, 1.2 /tarifs, 1.3 home, 1.4 cinq articles, 1.5 /templates, 1.6 pages métier, 1.7 llms.txt, 1.8 non-bloquants documentaires, puis vérification de fin de phase (Opus élevé). Une tâche à la fois (deux `pnpm build` simultanés cassent `.next`).

Décisions de Joseph (11 nov.), choix par défaut acceptés :
- le nom de domaine reste offert la première année dans l'offre à 500 € ;
- hero de la home : les deux boutons restent en phase 1 ; les cartes du tunnel seront montrées en phase 3, quand le tunnel existera ;
- prix du site affiché « 500 € » (et non « à partir de 500 € »), les fonctionnalités avancées restant « sur devis » à part.

| Tâche | Périmètre | Tours | Verdict final | Bloquants rencontrés |
|---|---|---|---|---|
| 1.1 Constante unique des prix et de la TVA | `src/content/pricing.ts` (nouveau), home, `/tarifs`, `[metier]`, `metier-pages.ts`, `site-content.ts`, `structured-data.tsx`, `opengraph-image.tsx`, `layout.tsx`, `messages/{fr,en}.json` (espace `metadata`, `{price}`) | 1 (vérificateur interrompu par la limite d'usage puis repris) | PASS | Aucun. Non bloquants : prix de l'aside de la home sans `locale` (à traiter en 1.3) ; doublons macOS dans `.next/types` qui faisaient échouer `type-check` (cache supprimé) ; espace insécable dans title, meta et `priceRange`. Restent volontairement pour 1.2 : question FAQ « TTC » de /tarifs, mention 293 B à afficher. Code mort non touché : espaces `hero`, `services`, `cta`, `valueProposition` de `messages/*.json`. |
| 1.2 Recalibrage de /tarifs | `src/app/(marketing)/tarifs/page.tsx` | 2 (compléments demandés par l'orchestrateur avant le T1 : rédaction incluse, sur mesure, jargon, longueurs, lien vers l'article « louer ») | PASS | T1 : « méthode et expérience » revendiquait une expérience de Sitekept non sourcée (FAQ qualité et facteur de prix). Corrigé au T2 (« notre méthode », « La méthode de travail »). Lighthouse mobile /tarifs : A11y 96 → 100, SEO 100, Perf 97 (T1) / 91 (T2, variance). Pour Joseph : H1 sans « prix » (inchangé par consigne) ; « Un devis clair, sous 24h » hors registre ; H2 « Nos deux formules » à reconsidérer. Restent pour 1.3 : JSON-LD Organization (« À partir de », « 48 h », « sans abonnement imposé ») et mots-clés du layout. |
| 1.3 Home et textes communs | `site-content.ts` (home, FAQ), `(marketing)/page.tsx`, `portfolio-preview.tsx`, `structured-data.tsx`, `opengraph-image.tsx`, `messages/{fr,en}.json` (`metadata`, `portfolio`, `contact`) | 1 (périmètre élargi par l'orchestrateur avant le T1 : portfolio, contact, visibilité, répétition du prix ; deux coupures DNS) | PASS | Aucun. Lighthouse mobile home : Perf 95, A11y 100, SEO 100, CLS 0,000014, LCP 2,87 s (inchangés). Non bloquants reportés en 1.4 : plafond « pages prévues au devis » à côté de « rédaction incluse » ; « nom de domaine compris » → « offert la première année ». Pour Joseph : délai « éléments complets et acompte » sur /tarifs contre « éléments » sur la home ; « Réponse rapide pendant les heures ouvrables » (contact, hors registre) ; slogan du logo « SEO, GEO, lancement rapide ». Captures du premier écran envoyées à Joseph le 11 nov. |
| 1.4 Cinq articles du plan v2 § 5.3 + reprises de 1.3 | `site-content.ts` (5 entrées de `blogPosts`, étape « Nous créons votre site »), `(marketing)/page.tsx` (aside) | 1 | PASS | Aucun. Chaque article a une section en question sur l'accompagnement optionnel (acheter / louer sa présence) ; jargon limité à une phrase dans l'article livraison ; `updatedAt` 2026-11-11 ; slugs inchangés. Le gabarit affichait déjà « Mis à jour » (0.7). Non bloquants : phrase limite de 24 mots (article livraison) ; `ctaTitle` en question suivis de 16-17 mots (forme préexistante) ; « non remboursée en cours d'année » sans « au prorata » (repris en 1.5) ; paragraphes et H2 existants hors règles dans les articles « louer » et « récupérer » (non touchés). Pour Joseph : H1 de l'article 1 raccourci (91 → 61 car.) ; renouvellement du domaine « réglé à l'organisme » (/tarifs, article livraison) contre « nous voyons ensemble » (FAQ home) ; route `/faq` en 404 (phase 4). |
