# 03b. Consentement à la mesure d'audience (tâche 0.4b)

Décision de Joseph du 5 novembre 2026 : Google Analytics (GA4) et l'événement `generate_lead` ne partent qu'après accord du visiteur. Ce document décrit le comportement, les tests faits et ce qu'il reste à faire.

Joseph, 10 novembre 2026 : « n'en fais pas un bandeau mais plutôt une bulle plutôt petite qui ne gêne pas la navigation ».

Joseph, 10 novembre 2026, ensuite : « plus discrète sur mobile et fais-la transparente ».

Joseph, 10 novembre 2026, puis : « transparente, couleur transparent avec texte foncé ». La bulle est donc un verre clair, et non plus un verre fumé sombre.

Seule la présentation a changé. La logique de consentement est identique.

## 1. Comportement

**Avant tout choix**
- Aucun script Google n'est chargé : pas de googletagmanager.com, pas de google-analytics.com, pas de cookie `_ga*`.
- Le script n'est pas chargé avant l'accord. Ce n'est pas du Consent Mode : sans accord, aucune requête ne part vers Google.
- Une petite bulle s'affiche en bas de l'écran. Elle contient une phrase, un lien « En savoir plus » vers `/privacy` et deux boutons.
- Les boutons « Tout refuser » et « Tout accepter » ont le même poids, la même variante et la même taille.
- Il n'y a aucune case pré-cochée. Défiler ou changer de page ne vaut pas accord.

**Texte de la bulle**
- Mobile (moins de 640 px), premier affichage : « Mesure d'audience ? » puis le lien « En savoir plus ». Le texte tient sur une ligne.
- Mobile, bulle rouverte depuis le footer : « Mesure d'audience : acceptée. » (ou « refusée »), puis le lien.
- À partir de 640 px, premier affichage : « On mesure l'audience avec Google Analytics, seulement si vous acceptez. » puis le lien.
- À partir de 640 px, bulle rouverte : « Mesure d'audience avec Google Analytics : actuellement acceptée. » (ou « refusée »), puis le lien.
- Le texte visible fait 6 mots sur mobile et 13 mots sur grand écran, lien compris.
- Le nom de la région, lu par les lecteurs d'écran, reste « Cookies de mesure d'audience » dans les deux cas.

**Accord**
- GA se charge tout de suite, sans recharger la page. `<GoogleAnalytics>` de `@next/third-parties` est monté par le composant.
- `window.gtag` est alors défini.
- `generate_lead` part à l'envoi du formulaire, car le garde-fou `typeof window.gtag === "function"` de `use-contact-form.ts` est conservé tel quel.

**Refus**
- Rien n'est chargé, ni sur cette page ni sur les suivantes.

**Retrait**
- Le lien « Gérer les cookies » du footer (colonne Légal) rouvre la bulle et indique le choix actuel. Le retrait se fait en un clic, comme l'accord.
- Après un retrait, dans la page en cours, `window['ga-disable-<ID>']` passe à `true` : GA cesse d'émettre.
- `window.gtag` est retiré, donc `generate_lead` n'est plus appelé.
- Les cookies `_ga`, `_ga_<id>`, `_gid` et `_gat*` sont supprimés, sur le domaine courant et ses domaines parents.
- Au chargement suivant, GA n'est plus chargé du tout.

**Mémorisation**
- Clé `sitekept-consent` dans `localStorage`, au format `{"choice":"granted"|"denied","date":"<ISO>"}`. Rien n'est envoyé au serveur.
- La durée de validité est de 6 mois (constante `CONSENT_VALIDITY_MONTHS` dans `src/lib/consent.ts`).
- Passé ce délai, la bulle redemande, GA n'est pas chargé et les cookies `_ga*` restants sont supprimés.
- Le choix vaut pour tous les onglets ouverts (événement `storage`).
- Si `localStorage` est bloqué, le choix est gardé en mémoire pour la page en cours, puis redemandé au chargement suivant.

**Sans `NEXT_PUBLIC_GA_ID`**
- Ni la bulle ni le lien du footer ne sont rendus : il n'y a alors aucun traceur à accepter.
- Vercel Analytics et Speed Insights restent chargés comme avant. Ils ne posent pas de cookie, et la tâche ne les concernait pas.

**Accessibilité**
- La bulle est un `role="region"` avec `aria-label="Cookies de mesure d'audience"`. Ce n'est pas une modale : pas d'`aria-modal`, pas de piège à focus, la page reste utilisable.
- Elle est insérée juste après le `<div hidden>` de Next.js, ce qui en fait le premier élément atteint au clavier.
- Ordre de tabulation : lien « En savoir plus », « Tout refuser », « Tout accepter », puis la navigation.
- Quand on la rouvre depuis le footer, le focus va sur « Tout refuser ». Une fois le choix fait, il revient sur « Gérer les cookies ».
- Le focus reste visible sur le fond clair. Les boutons ont un anneau gris de 3 px et une bordure grise, le lien un contour du navigateur.
- Le texte court reste compréhensible. Le lien « En savoir plus » mène à `/privacy`, et le nom de la région dit de quoi il s'agit.

**Mise en page**
- La bulle est en position fixe : rien n'est inséré dans le flux.
- Le fond est blanc à 80 % d'opacité, avec un flou d'arrière-plan (verre clair). Le contenu de la page reste devinable derrière.
- Sur mobile, elle est posée en bas de l'écran. Les marges extérieures (côtés et bas) et la marge intérieure sont de 12 px.
- Sur mobile, le texte tient sur une ligne et les deux boutons sont sur la même rangée, chacun de 32 px de haut.
- À partir de `sm` (640 px), elle se limite à 384 px de large et s'ancre en bas à gauche. Elle reprend 16 px de marge intérieure et un texte sur deux lignes.
- Hauteur mesurée : 86 px en 390 × 844 (10,2 % de la hauteur), contre 126 px avant. Elle reste à 126 px en 1280 × 900.
- Elle ne recouvre jamais la navigation, qui s'arrête à 64 px du haut.
- Elle recouvre un peu de contenu au bas du premier écran. Le détail est au § 3.3.

### Compromis du rendu côté serveur (exigence 8)

Le choix vit dans le navigateur, et les pages restent statiques : aucun `cookies()`, aucun `useSearchParams()`. Le serveur ne connaît donc pas le choix.

L'état initial, côté serveur et pendant l'hydratation, est « inconnu, rien d'affiché » (`useSyncExternalStore` avec un instantané serveur à `"pending"`). Le choix est lu juste après l'hydratation.

- Un visiteur qui a déjà choisi ne voit jamais la bulle clignoter.
- Un nouveau visiteur voit la bulle apparaître juste après l'hydratation, et non dans le HTML initial. Sans JavaScript, il n'y a ni bulle ni GA.
- La bulle est en position fixe : cette apparition ne décale rien (CLS inchangé, voir § 3.6).

## 2. Fichiers

| Fichier | Rôle |
|---|---|
| `src/lib/consent.ts` (nouveau) | Lecture et écriture du choix, durée de 6 mois, ouverture de la bulle, suppression des cookies `_ga*` |
| `src/components/cookie-consent.tsx` (nouveau, client) | Bulle, chargement conditionnel de GA, neutralisation après retrait, bouton « Gérer les cookies » |
| `src/app/layout.tsx` | `<GoogleAnalytics>` placé après `</body>` remplacé par `<CookieConsent gaId=…>`, inséré juste après le `<div hidden>` de Next.js |
| `src/components/footer.tsx` | `<li>` « Gérer les cookies » en fin de colonne Légal, rendu seulement si `NEXT_PUBLIC_GA_ID` est défini |

`use-contact-form.ts` et `gtag.d.ts` sont inchangés : il a suffi de retirer `window.gtag` après un retrait.

## 3. Tests faits (10 novembre 2026)

Build de production avec `NEXT_PUBLIC_GA_ID=G-TEST000000` passé en variable d'environnement (aucun fichier écrit), servi par `pnpm start -p 3160`.

Les tests sont lancés avec Playwright (`playwright-core` 1.49.1, Chromium headless shell 1148). Les requêtes vers Google ne sont pas bloquées, pour observer le vrai comportement de gtag.js. Seul `/_vercel` est bloqué.

Scripts : `consent-test.mjs` et `lead-test.mjs` (dossier de travail de la session, hors dépôt). Les tests (f) et (h) sont nouveaux : mesures de la bulle claire, focus et réouverture sur mobile. Les autres scénarios sont rejoués sans changement de logique.

### 3.1 Lint, types, build et routes

- `pnpm lint` : aucun avertissement ni erreur.
- `pnpm type-check` : 0 erreur.
- `pnpm build` : réussi, deux fois (avant et après le test sur serveur de développement, qui réécrit `.next`).
- Routes : les 74 lignes de route du tableau (route et symbole ○/●) sont identiques à celles du build précédent.
- Aucune page `ƒ` : seul le middleware l'était déjà.
- Poids : `/` reste à 57,6 kB et le First Load JS partagé à 102 kB.

### 3.2 Consentement (`consent-test.mjs`) : sortie

```

== (a) visite sans choix
OK   bandeau visible
OK   position fixe — fixed
OK   non modal (pas d'aria-modal)
OK   premier élément focalisable de la page dans le bandeau
OK   deux boutons, mêmes classes et même hauteur — Tout refuser h=32 / Tout accepter h=32
OK   lien vers /privacy — /privacy
OK   aucune case à cocher
OK   window.gtag absent — undefined
OK   window.dataLayer absent — undefined
OK   après défilement + navigation : bandeau toujours visible
OK   0 requête Google
OK   0 cookie _ga*

== (b) refus
OK   bandeau masqué après refus
OK   choix mémorisé — {"choice":"denied","date":"2026-11-10T14:33:49.842Z"}
OK   après rechargement : bandeau absent
OK   autre page : bandeau absent
OK   0 requête Google
OK   0 cookie _ga*
OK   window.gtag absent

== (c) acceptation
OK   requête gtag/js émise — https://www.googletagmanager.com/gtag/js?id=G-TEST000000
OK   sans rechargement (même document)
OK   window.gtag défini — function
OK   bandeau masqué
     requêtes Google après accord : GET www.googletagmanager.com/gtag/js | POST www.google-analytics.com/g/collect [page_view] dl=/ | GET www.googletagmanager.com/a
     cookies _ga* : _ga_TEST000000, _ga
OK   rechargement : bandeau absent et GA chargé

== (d) retrait via « Gérer les cookies »
OK   bandeau rouvert
OK   focus sur le premier bouton — Tout refuser
OK   choix actuel affiché
OK   bandeau refermé
OK   focus rendu au lien du footer — Gérer les cookies
OK   window.gtag retiré — undefined
OK   ga-disable posé
OK   cookies _ga* supprimés
OK   même page après retrait : aucun événement pour la page vue après le retrait (/tarifs)
     envois résiduels d'événements antérieurs au retrait : POST www.google-analytics.com/g/collect [page_view] dl=/
OK   cookies _ga* toujours absents
OK   chargement suivant : 0 requête Google
OK   chargement suivant : window.gtag absent

== (d bis) nouvel accord dans la même page après retrait
OK   window.gtag défini
OK   re-retrait : window.gtag retiré

== (e) clavier
     ordre de tabulation :
       [bandeau] A « En savoir plus »  outline
       [bandeau] BUTTON « Tout refuser » anneau
       [bandeau] BUTTON « Tout accepter » anneau
       A « SitekeptSEO, GEO, lancement ra »  outline
       A « Templates »  outline
OK   le focus sort du bandeau (pas de piège)
OK   focus visible sur les boutons

== (f) bulle : mesures
     390x844 : boîte x 12-378, y 746-832, 366 x 86 px (10.2 % de la hauteur), marge basse 12
     texte visible (6 mots, 1 ligne(s)) : Mesure d'audience ? En savoir plus
     fond oklab(0.999994 0.0000455677 0.0000200868 / 0.8) | flou blur(12px) | bordure oklch(0.929 0.013 255.508) | texte oklch(0.372 0.044 257.287)
OK   390 : role=region + aria-label explicite — Cookies de mesure d'audience
OK   390 : fond semi-transparent et flou — oklab(0.999994 0.0000455677 0.0000200868 / 0.8) / blur(12px)
OK   390 : ne recouvre pas la navigation — top 746 > nav bas 64
OK   390 : pas de défilement horizontal
OK   390 : hauteur <= 90 px — 86 px
OK   390 : texte sur 1 ligne — 1
OK   390 : texte visible <= 8 mots, lien compris — 6 mots
OK   390 : boutons sur la même rangée — [787,787]
OK   390 : boutons >= 32 px de haut — 32/32
OK   390 : marges latérales — 12 / 12
     360x740 : boîte x 12-348, y 642-728, 336 x 86 px (11.6 % de la hauteur), marge basse 12
     texte visible (6 mots, 1 ligne(s)) : Mesure d'audience ? En savoir plus
     fond oklab(0.999994 0.0000455677 0.0000200868 / 0.8) | flou blur(12px) | bordure oklch(0.929 0.013 255.508) | texte oklch(0.372 0.044 257.287)
OK   360 : role=region + aria-label explicite — Cookies de mesure d'audience
OK   360 : fond semi-transparent et flou — oklab(0.999994 0.0000455677 0.0000200868 / 0.8) / blur(12px)
OK   360 : ne recouvre pas la navigation — top 642 > nav bas 64
OK   360 : pas de défilement horizontal
OK   360 : hauteur <= 90 px — 86 px
OK   360 : texte sur 1 ligne — 1
OK   360 : texte visible <= 8 mots, lien compris — 6 mots
OK   360 : boutons sur la même rangée — [683,683]
OK   360 : boutons >= 32 px de haut — 32/32
OK   360 : marges latérales — 12 / 12
     320x640 : boîte x 12-308, y 542-628, 296 x 86 px (13.4 % de la hauteur), marge basse 12
     texte visible (6 mots, 1 ligne(s)) : Mesure d'audience ? En savoir plus
     fond oklab(0.999994 0.0000455677 0.0000200868 / 0.8) | flou blur(12px) | bordure oklch(0.929 0.013 255.508) | texte oklch(0.372 0.044 257.287)
OK   320 : role=region + aria-label explicite — Cookies de mesure d'audience
OK   320 : fond semi-transparent et flou — oklab(0.999994 0.0000455677 0.0000200868 / 0.8) / blur(12px)
OK   320 : ne recouvre pas la navigation — top 542 > nav bas 64
OK   320 : pas de défilement horizontal
OK   320 : hauteur <= 90 px — 86 px
OK   320 : texte sur 1 ligne — 1
OK   320 : texte visible <= 8 mots, lien compris — 6 mots
OK   320 : boutons sur la même rangée — [583,583]
OK   320 : boutons >= 32 px de haut — 32/32
OK   320 : marges latérales — 12 / 12
     639x800 : boîte x 12-627, y 702-788, 615 x 86 px (10.8 % de la hauteur), marge basse 12
     texte visible (6 mots, 1 ligne(s)) : Mesure d'audience ? En savoir plus
     fond oklab(0.999994 0.0000455677 0.0000200868 / 0.8) | flou blur(12px) | bordure oklch(0.929 0.013 255.508) | texte oklch(0.372 0.044 257.287)
OK   639 : role=region + aria-label explicite — Cookies de mesure d'audience
OK   639 : fond semi-transparent et flou — oklab(0.999994 0.0000455677 0.0000200868 / 0.8) / blur(12px)
OK   639 : ne recouvre pas la navigation — top 702 > nav bas 64
OK   639 : pas de défilement horizontal
OK   639 : hauteur <= 90 px — 86 px
OK   639 : texte sur 1 ligne — 1
OK   639 : texte visible <= 8 mots, lien compris — 6 mots
OK   639 : boutons sur la même rangée — [743,743]
OK   639 : boutons >= 32 px de haut — 32/32
OK   639 : marges latérales — 12 / 12
     640x800 : boîte x 12-396, y 662-788, 384 x 126 px (15.8 % de la hauteur), marge basse 12
     texte visible (13 mots, 2 ligne(s)) : On mesure l'audience avec Google Analytics, seulement si vous acceptez. En savoir plus
     fond oklab(0.999994 0.0000455677 0.0000200868 / 0.8) | flou blur(12px) | bordure oklch(0.929 0.013 255.508) | texte oklch(0.372 0.044 257.287)
OK   640 : role=region + aria-label explicite — Cookies de mesure d'audience
OK   640 : fond semi-transparent et flou — oklab(0.999994 0.0000455677 0.0000200868 / 0.8) / blur(12px)
OK   640 : ne recouvre pas la navigation — top 662 > nav bas 64
OK   640 : pas de défilement horizontal
OK   640 : largeur <= 384 px, ancrée à gauche — 384 px, x=12
OK   640 : texte sur <= 2 lignes — 2
OK   640 : boutons >= 32 px de haut, même rangée
     1280x900 : boîte x 12-396, y 762-888, 384 x 126 px (14 % de la hauteur), marge basse 12
     texte visible (13 mots, 2 ligne(s)) : On mesure l'audience avec Google Analytics, seulement si vous acceptez. En savoir plus
     fond oklab(0.999994 0.0000455677 0.0000200868 / 0.8) | flou blur(12px) | bordure oklch(0.929 0.013 255.508) | texte oklch(0.372 0.044 257.287)
OK   1280 : role=region + aria-label explicite — Cookies de mesure d'audience
OK   1280 : fond semi-transparent et flou — oklab(0.999994 0.0000455677 0.0000200868 / 0.8) / blur(12px)
OK   1280 : ne recouvre pas la navigation — top 762 > nav bas 64
OK   1280 : pas de défilement horizontal
OK   1280 : largeur <= 384 px, ancrée à gauche — 384 px, x=12
OK   1280 : texte sur <= 2 lignes — 2
OK   1280 : boutons >= 32 px de haut, même rangée

== (h) mobile 390x844 : réouverture, clavier, focus
     tab : A « En savoir plus » bubble=true | BUTTON « Tout refuser » bubble=true | BUTTON « Tout accepter » bubble=true
OK   ordre : lien, refuser, accepter
OK   anneau de focus 3px sur le bouton focalisé — rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.708 0 0 / 0.5) 0px 0px 0px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px
OK   texte de la bulle foncé (slate-700)
     outline du lien : auto 1px oklab(0.708 0 0 / 0.5)
OK   mobile rouvert : texte court + choix actuel — Mesure d'audience : acceptée. En savoir plus
OK   mobile rouvert : hauteur <= 90 px — 86
OK   mobile rouvert : focus sur Tout refuser — Tout refuser
OK   mobile : focus rendu à Gérer les cookies

== (g) choix de plus de 6 mois
OK   bandeau de nouveau affiché
OK   0 requête Google
OK   choix de 5 mois : bandeau absent

TOUS LES CONTRÔLES PASSENT
```

Les tests (a) à (e) et (g) sont ceux de la version précédente. Le test (f) mesure la bulle à six largeurs, de 320 à 1280 px. Le test (h) couvre le clavier, le focus et la réouverture sur mobile.

**Point sur le scénario (d) :** le test recharge la page avec l'accord actif, puis le retire quelques secondes plus tard. Le script gtag.js retarde et groupe l'envoi de ses événements. Le `page_view` de ce chargement, déclenché sous accord, peut donc partir juste après le retrait.

Aucun événement postérieur au retrait n'est envoyé : `ga-disable` bloque le `page_view` de `/tarifs`. Les cookies supprimés ne sont pas reposés. Le chargement suivant n'émet aucune requête.

### 3.3 Encombrement de la bulle

Mesure faite par le test (f), sur la page d'accueil, sans défilement et sans choix préalable.

| Viewport | Boîte de la bulle | Taille | Part de la hauteur |
|---|---|---|---|
| 390 × 844 | x 12-378, y 746-832 | 366 × 86 px | 10,2 % |
| 360 × 740 | x 12-348, y 642-728 | 336 × 86 px | 11,6 % |
| 320 × 640 | x 12-308, y 542-628 | 296 × 86 px | 13,4 % |
| 1280 × 900 | x 12-396, y 762-888 | 384 × 126 px | 14,0 % |

- Sur mobile, la hauteur de 86 px tient à toutes les largeurs testées, de 320 à 639 px : le texte reste sur une ligne.
- La navigation s'arrête à 64 px du haut : la bulle ne la recouvre dans aucun cas.
- Le texte visible fait 6 mots sur mobile, moins que les 8 demandés.

**Contenu recouvert au premier écran.** La sonde `probe.mjs` liste les textes dont la boîte croise celle de la bulle.

| Page et viewport | Textes recouverts |
|---|---|
| Accueil, 390 | « 100% propriétaire du site » et « Domaine offert 1 an » (puces sous le hero) |
| Tarifs, 390 | Début de la description de la formule et prix « 500 € » |
| Accueil, 1280 | Preuves sous les boutons du hero : « À partir de 500€ », « Mise en ligne en 48h », « 100% à vous » |
| Tarifs, 1280 | Le début du bouton « Demander un devis » de la formule à 500 € |

- Avant, la bulle recouvrait trois puces sur l'accueil mobile et le titre de la formule sur les tarifs mobiles. Elle en recouvre moins.
- En 1280, aucun titre (`h1`, `h2`) ni aucune image n'est recouvert à l'arrivée sur l'accueil ou sur les tarifs.
- Le fond translucide laisse voir ce texte flouté. Le flou de 12 px le rend illisible, mais pas invisible.
- Le contenu est à nouveau accessible au défilement ou dès qu'un choix est fait.

### 3.4 `generate_lead` (`lead-test.mjs`) : serveur de développement, sans `RESEND_API_KEY`

Commande : `env -u RESEND_API_KEY NEXT_PUBLIC_GA_ID=G-TEST000000 pnpm dev -p 3161`. Le worktree n'a pas de `.env.local`. Le serveur a journalisé chaque envoi en « Mode Développement » : aucun e-mail n'est parti.

`window.gtag` est enveloppé dès qu'il existe pour compter les appels. On contrôle aussi `dataLayer` et les requêtes `g/collect`. La page est fermée à la fin pour forcer l'envoi des événements groupés.

```

== sans choix
     message affiché : Merci, votre demande est bien arrivée ! Jetez un œil à votre boîte mail : nous vous y avons préparé quelque chose. Pensez à vérifier vos spams.
     appels gtag : (aucun)
     requêtes Google : (aucune)
OK   formulaire envoyé
OK   generate_lead non appelé
OK   0 requête Google

== refus
     message affiché : Merci, votre demande est bien arrivée ! Jetez un œil à votre boîte mail : nous vous y avons préparé quelque chose. Pensez à vérifier vos spams.
     appels gtag : (aucun)
     requêtes Google : (aucune)
OK   formulaire envoyé
OK   generate_lead non appelé
OK   0 requête Google

== accord
     message affiché : Merci, votre demande est bien arrivée ! Jetez un œil à votre boîte mail : nous vous y avons préparé quelque chose. Pensez à vérifier vos spams.
     appels gtag : event:generate_lead
     requêtes Google : www.googletagmanager.com/gtag/js [] | www.google-analytics.com/g/collect [page_view] | www.google-analytics.com/g/collect [generate_lead] | www.google-analytics.com/g/collect [user_engagement]
OK   formulaire envoyé
OK   generate_lead appelé
OK   generate_lead transmis à GA

== accord puis retrait dans la même page
     message affiché : Merci, votre demande est bien arrivée ! Jetez un œil à votre boîte mail : nous vous y avons préparé quelque chose. Pensez à vérifier vos spams.
     appels gtag : (aucun)
     requêtes Google : www.googletagmanager.com/gtag/js [] | www.google-analytics.com/g/collect [page_view]
OK   formulaire envoyé
OK   generate_lead non appelé après retrait
OK   generate_lead non transmis

TOUS LES CONTRÔLES PASSENT
```

Le journal du serveur de développement ne montre ni erreur ni avertissement. La console du navigateur n'a pas été relue.

### 3.5 Captures

Méthode identique à celle de `docs/design/reference-avant-0.4/` :
- `reducedMotion: "reduce"`, `fr-FR`, `deviceScaleFactor: 1` ;
- fenêtre de 844 px de haut en 390 px de large, et de 900 px de haut en 1280 px de large ;
- requêtes externes et `/_vercel` bloquées ;
- défilement instantané jusqu'en bas, puis retour à `scrollY = 0`.

Les 8 fichiers de `docs/design/consentement/` montrent la nouvelle bulle claire et translucide :
- `home-390`, `home-1280`, `tarifs-390` et `tarifs-1280` en pleine page ;
- les mêmes pages en `-ecran`, c'est-à-dire ce que voit le visiteur à l'arrivée.

En pleine page, la bulle fixe apparaît au premier écran seulement (y 746-832 en 390 px, y 762-888 en 1280 px).

Le dossier `apres-choix/` a été supprimé : la comparaison après choix se refait à la vérification. Quand un choix existe, la bulle n'est pas rendue.

### 3.6 Lighthouse (mobile, page d'accueil, bulle visible)

Configuration : Lighthouse 12.8.2, comme pour le relevé de la tâche 0.4a, et Chrome headless 157. Le profil est vierge, donc la bulle est affichée : la capture finale de Lighthouse le montre. Trois passes sur `pnpm start -p 3160`.

| Passe | Performance | Accessibilité | Bonnes pratiques | SEO | CLS | LCP | TBT |
|---|---|---|---|---|---|---|---|
| 1 | 95 | 100 | 96 | 100 | 0,000014 | 2 866 ms | 4 ms |
| 2 | 95 | 100 | 96 | 100 | 0,000014 | 2 864 ms | 2 ms |
| 3 | 95 | 100 | 96 | 100 | 0,000014 | 2 867 ms | 2 ms |
| **Médiane** | **95** | **100** | **96** | **100** | **0,000014** | 2 866 ms | 2 ms |

- Performance : 95 en médiane, comme avant la tâche de présentation. Le flou d'arrière-plan n'a pas coûté de point.
- Bonnes pratiques : 96, inchangé. Le seul échec est un 404 de `/_vercel/speed-insights/script.js`, absent hors Vercel.
- CLS : 0,000014, identique à avant. La bulle est en position fixe.
- LCP : l'élément LCP reste le H1 du hero.

## 4. Direction artistique : provenance de chaque classe

Les citations renvoient au code de `HEAD` (clause 0 bis) ou à `docs/design/da-inventaire.md`. Les numéros de ligne sont identiques à ceux du HEAD de référence `cd3489e`, vérifié par `git diff` sur chaque fichier cité.

**Exception décidée par Joseph : `bg-white/80`.** C'est une valeur d'opacité nouvelle, absente de l'inventaire et du code. Joseph l'a décidée explicitement le 10 novembre 2026.

La seule valeur claire existante est `bg-white/95` (`src/components/navigation.tsx:73`). Elle est presque opaque : aucune transparence ne se voit.

À part cette valeur, aucune couleur, aucun rayon, aucune ombre, aucun flou, aucune animation ni aucun dégradé nouveau.

**Conteneur de la bulle** : `fixed inset-x-3 bottom-3 z-50 flex flex-col gap-2 rounded-md border border-slate-200 bg-white/80 p-3 shadow-xl shadow-slate-950/20 backdrop-blur-md sm:right-auto sm:w-full sm:max-w-sm sm:gap-3 sm:p-4`

| Classe | Provenance |
|---|---|
| `fixed`, `z-50` | `src/components/navigation.tsx:80` `fixed top-0 z-50 w-full` (inventaire l. 648) |
| `inset-x-3 bottom-3` | `src/app/(demos)/plombier-chauffagiste/page.tsx:328` `fixed inset-x-3 bottom-3 z-40 md:hidden`, barre fixe en bas d'écran sur mobile |
| `flex flex-col`, `sm:gap-3` | `src/app/(marketing)/blog/[slug]/page.tsx:172` `mt-6 flex flex-col gap-3` (inventaire l. 745) |
| `gap-2` | `src/app/_components/project-card.tsx:39` `flex gap-2` |
| `rounded-md border border-slate-200` | `src/app/(marketing)/page.tsx:331` `rounded-md border border-slate-200 bg-white p-6 shadow-sm` (carte FAQ, inventaire l. 175) |
| `bg-white/80` | **Exception décidée par Joseph.** La plus proche existante est `bg-white/95`, `navigation.tsx:73`. |
| `backdrop-blur-md` | `src/components/navigation.tsx:73` `bg-white/95 shadow-sm backdrop-blur-md` |
| `shadow-xl shadow-slate-950/20` | `src/app/(marketing)/page.tsx:102` (inventaire l. 473, 564 et 919). Voir le choix ci-dessous. |
| `p-3` | `src/app/(demos)/boulangerie/page.tsx:323` `rounded-full bg-orange-100 p-3` |
| `sm:p-4` | `p-4` : `src/app/(marketing)/blog/[slug]/page.tsx:202` `block rounded-sm bg-slate-50 p-4` |
| `sm:w-full` | Variante `sm:` de `w-full`, `src/components/navigation.tsx:80` |
| `sm:right-auto`, `sm:max-w-sm` | **Non inventoriées.** Utilitaires de position et de dimension, sans valeur visuelle. Ils limitent la bulle à 384 px en bas à gauche dès 640 px. |

Choix de l'ombre : `shadow-xl shadow-slate-950/20` est gardée.

Sur les zones claires, elle détache la bulle, dont le fond est presque blanc. Sur le hero noir, elle est sans effet. `shadow-sm` (`navigation.tsx:73`) n'a pas été essayée : le rendu actuel détache déjà bien la bulle sur les captures de `/tarifs`.

Choix du flou : `backdrop-blur-md` (12 px) remplace `backdrop-blur` (8 px). Il est repris tel quel de la navigation.

**Texte et lien**

| Élément | Classes | Provenance |
|---|---|---|
| Texte | `text-sm text-slate-700 sm:leading-6` | `text-sm leading-6` : `(marketing)/page.tsx:127`. `text-slate-700` : `(marketing)/page.tsx:292` `text-base leading-8 text-slate-700`. |
| Lien « En savoir plus » | `font-medium text-slate-900 underline underline-offset-4` | Même forme que `(marketing)/seo-geo/page.tsx:405` `font-medium text-blue-700 underline underline-offset-4`. `text-slate-900` : `seo-geo/page.tsx:235` `font-medium text-slate-900`. Voir § 4.1 pour l'écart. |
| Texte court et texte complet | `sm:hidden`, `hidden sm:inline` | `hidden … md:flex` : `(demos)/boulangerie/page.tsx:127`. `md:hidden` : `plombier-chauffagiste/page.tsx:328`. Variantes `sm:` d'utilitaires d'affichage, sans valeur visuelle. |

**Boutons**

| Élément | Classes | Provenance |
|---|---|---|
| Rangée | `flex gap-2` | `src/app/_components/project-card.tsx:39` `flex gap-2`, rangée de boutons `sm` |
| Taille | `size="sm"` | Définie en `src/components/ui/button.tsx:26` `sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"` ; usage en `project-card.tsx:84` |
| Variante | `variant="outline"` | `src/components/ui/button.tsx:17`, utilisée en `project-card.tsx:83` |
| Surcharge claire | `border-blue-200 bg-white text-slate-900 hover:bg-blue-50` | `(marketing)/page.tsx:299` (surcharge « secondaire clair »), sans le `mt-6` |
| Largeur égale | `flex-1` | `src/app/_components/services.tsx:94` `flex flex-1 flex-col`. Utilitaire de dimension, sans valeur visuelle. |

Les deux boutons ont la même variante, la même taille et les mêmes classes. Les classes internes de la primitive (`shadow-xs`, `rounded-md`, `h-8`, `ring-[3px]`) relèvent de la clause 0.

Point sur le focus : l'anneau par défaut de la primitive (`ring-ring/50` et `border-ring`, gris) est conservé. Il reste visible sur la capture de test, sur fond clair.

**Lien « Gérer les cookies » (footer)** : inchangé. Il garde `transition-colors hover:text-blue-200` (`src/components/footer.tsx:62`, inventaire l. 552).

**Retiré par rapport au verre fumé** : `border-white/10 bg-slate-950/60`, `backdrop-blur`, `text-white`, `border-slate-600 bg-transparent`, `hover:bg-slate-800`, `hover:text-white` et `focus-visible:ring-white`.

### 4.1 Contrastes calculés (texte normal, seuil 4,5:1)

Méthode : la couleur effective du fond est la composition alpha du blanc à 80 % sur la couleur derrière la bulle. Le contraste est celui de WCAG 2.1. Le script est `contrast2.mjs` (dossier de travail, hors dépôt).

**Le flou n'est pas pris en compte dans ce calcul.** Il mélange les couleurs voisines, donc un fond réel peut différer d'une couleur unie. Pour une zone uniforme, le résultat est le même.

| Couleur derrière la bulle | Fond effectif | Luminance |
|---|---|---|
| Blanc | rgb(255, 255, 255) | 1,0000 |
| Gris moyen (128, 128, 128) | rgb(230, 230, 230) | 0,7913 |
| Noir (hero de la home, pire cas) | rgb(204, 204, 204) | 0,6038 |

| Couleur du texte | Sur blanc | Sur gris moyen | Sur noir (pire cas) |
|---|---|---|---|
| `text-slate-700` (texte) | 10,35 | 8,30 | **6,45** |
| `text-slate-900` (lien) | 17,85 | 14,30 | **11,12** |
| `text-blue-700` (non retenu) | 6,70 | 5,37 | 4,17 (échec) |

- Le pire cas est le noir, car la bulle se pose sur le hero noir de la home. Texte et lien passent à 6,45:1 et 11,12:1.
- Écart avec la demande : le lien est en `text-slate-900` et non `text-blue-700`, qui n'atteint que 4,17:1 sur noir. Le soulignement et le gras le distinguent du texte.
- Texte des boutons : `text-slate-900` sur `bg-white` opaque, soit 17,85:1. Au survol, `slate-900` sur `blue-50` : 16,40:1.
- Bordure des boutons (`blue-200`) contre le fond de la bulle : 1,42 sur blanc, 1,13 sur noir. Contre le bouton blanc : 1,42.
- Bordure de la bulle (`slate-200`) contre son fond : 1,23 sur blanc, 1,30 sur noir.
- Ces bordures sont décoratives, sous les 3:1. Le libellé foncé suffit à repérer chaque bouton, mais le contour est discret.

## 5. Reste à faire (phase 5, page `/privacy`)

La section 9, « Cookies » (`messages/fr.json`, `privacy.sections.cookies.content`), dit encore : « Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de votre navigateur. » Ce texte est inexact.

À réécrire (CGV/CGU, section F, point 5) :

- **L'outil** : Google Analytics 4 (Google Ireland Ltd), pour la mesure d'audience. Il ne se lance qu'après accord.
- **Les cookies posés après accord** : `_ga` et `_ga_<id>`, d'une durée de 13 mois au plus chez Google. Pour Sitekept, le mieux serait de régler 13 mois maximum dans GA4.
- **La mesure de la conversion** : l'événement `generate_lead`, envoyé à l'envoi du formulaire, seulement après accord.
- **Le choix du visiteur** : gardé 6 mois dans le navigateur (`localStorage`, clé `sitekept-consent`), puis redemandé.
- **Comment changer d'avis** : le lien « Gérer les cookies », en bas de chaque page.
- **Vercel Analytics et Speed Insights** : mesure sans cookie, à mentionner.
- **Les transferts hors Union européenne** liés à Google.
- **La date de mise à jour** de la page.
- **Côté GA4** : vérifier aussi la conservation des données (2 mois par défaut, ou 14 mois) et l'anonymisation déjà appliquée par GA4.
