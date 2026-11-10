# 0.6 — GEO (moteurs d'IA)

État au 10 novembre 2026. Code : branche `feat/offre-v2`, build local `next start` sur le port 3190. Rien n'est commité.

## Décisions de Joseph

- Auteur affiché : « Équipe Sitekept », sans nom personnel.
- `robots.txt` : on autorise **tous** les robots, ceux d'entraînement compris. Rien à changer.
- Les articles de blog recevront des liens cliquables vers les sources, dans une tâche ultérieure. Le gabarit n'a pas été touché pour cela.

---

## 1. Pages traitées et ce qui a changé

Le site ne sert que le français. Les textes `fr` ont été modifiés.

Dans `site-content.ts`, trois séries de textes `en` l'ont aussi été :
- ceux de `/seo-geo` (intro, premier paragraphe, section « site optimisé », puces) ;
- les puces ajoutées à `site-web-rapide-pme-independant` ;
- les puces ajoutées à `qu-est-ce-que-le-seo-et-le-geo`.

Les autres textes anglais, non servis, n'ont pas été mis à jour.

| Page | Changements |
|---|---|
| `/seo-geo` | Définitions du SEO et du GEO dans l'intro. Trois H2 passés en question, avec réponse directe. Quatre réponses de FAQ réécrites. Trois énumérations passées en liste. Sources officielles sous les passages concernés et sous chaque réponse de FAQ. Description du balisage Service : l'intro visible. |
| `/blog/qu-est-ce-que-le-seo-et-le-geo` | Trois H2 passés en question (« Qu'est-ce que le SEO ? », « Qu'est-ce que le GEO ? », « Pourquoi le SEO et le GEO se complètent-ils ? »). Réponses directes. Deux énumérations passées en liste. Une source Google. |
| `/blog/site-optimise-seo-geo` | Définitions du SEO et du GEO dans l'intro. Une source Google. |
| `/blog/site-web-rapide-pme-independant` | Énumération passée en liste de six puces. SEO et GEO définis entre parenthèses à la première occurrence. |
| `/blog/site-sans-referencement-peut-devenir-inutile` | Définition du référencement naturel à sa première occurrence dans le corps. Une source Google. |
| `/blog/pourquoi-optimisation-referencement-naturel-importante` | Définition du référencement naturel dans l'intro. |
| `/blog/checklist-seo-avant-mise-en-ligne` | Définition du SEO dans l'intro, qui passe de 4 à 3 phrases. Trois paragraphes « Pour approfondir » et un lien vers l'outil d'inspection d'URL. |
| 12 pages `/site-internet-*` | 15 réponses de FAQ réécrites. Les 9 autres répondaient déjà en 40 à 60 mots. |

Articles du plan v2 § 5.3 : aucune modification. Le diff de `site-content.ts` ne touche aucune ligne de ces cinq articles.

Gabarit `blog/[slug]/page.tsx` : trois changements, tous sur la ligne d'auteur et de dates. Le fuseau UTC est fixé, pour que la date ne dépende pas de la machine. « Mis à jour le » prend une majuscule, comme « Publié le ».

## 2. Réponse d'abord : 46 blocs, tous entre 40 et 60 mots

Mesure faite sur le HTML du build, avec `scratchpad/t06/qa.py`. Le script compte les mots de la première réponse qui suit chaque H2 ou question de FAQ terminé par un point d'interrogation. Les signes de ponctuation isolés (« — », « : ») ne comptent pas comme des mots.

| Page | Bloc (nombre de mots) |
|---|---|
| `/seo-geo` | H2 « Pourquoi… décisif ? » 46 ; H2 « Quelle différence… ? » 42 ; H2 « Comment un moteur… ? » 50 ; FAQ : 52, 55, 48, 46 |
| `/blog/qu-est-ce-que-le-seo-et-le-geo` | « Qu'est-ce que le SEO ? » 41 ; « Qu'est-ce que le GEO ? » 52 ; « Pourquoi… se complètent-ils ? » 47 |
| 12 pages métier | H2 « Combien coûte un site pour… ? » : 43 sur chaque page |
| plombier | FAQ 49, 41 |
| dentiste | FAQ 50, 40 |
| restaurant | FAQ 54, 51 |
| salon de coiffure | FAQ 46, 41 |
| boulangerie | FAQ 54, 45 |
| pâtisserie | FAQ 44, 50 |
| fleuriste | FAQ 42, 42 |
| réparation informatique | FAQ 40, 46 |
| entreprise de nettoyage | FAQ 50, 49 |
| architecte d'intérieur | FAQ 51, 47 |
| avocat | FAQ 52, 52 |
| agence immobilière | FAQ 46, 49 |

Exclus de la règle : le titre de l'appel à l'action, dans la colonne de droite de chaque article, repris de `ctaTitle`. 8 articles ont un H2 de CTA en question, commençant par « Vous voulez » ; 3 autres ont un titre de CTA sans question. Le paragraphe qui suit est un argument commercial, pas une réponse.

Les autres H2 des articles ne sont pas des questions. Je ne les ai pas transformés : ils décrivent un bénéfice ou une étape, et la question n'aurait rien clarifié.

Les réponses réécrites tiennent en 3 phrases au plus, de 25 mots au plus. Elles gardent les faits du texte précédent. Quelques précisions secondaires ont été retirées pour tenir dans 60 mots, par exemple « plutôt que des visuels standardisés » chez le fleuriste.

Contrôle des règles de rédaction : un script compare les textes avant et après. Il couvre les 69 textes modifiés de `site-content.ts` et de `metier-pages.ts`, plus les 48 blocs nouveaux ou modifiés du HTML de `/seo-geo`. Résultat : aucune phrase de plus de 25 mots, aucun paragraphe de plus de 3 phrases ou de 60 mots.

## 3. Définitions

Chaque définition reprend les formulations déjà présentes dans le blog. Celle du SEO correspond à la définition de Google (§ 6).

- `/seo-geo` : intro, première phrase (SEO) et deuxième phrase (GEO).
- `qu-est-ce-que-le-seo-et-le-geo` : première phrase de chaque H2.
- `site-optimise-seo-geo` : intro.
- `site-web-rapide-pme-independant` : avant-dernière puce de la section « Ce que vous achetez vraiment… ».
- `site-sans-referencement-peut-devenir-inutile` : section « Pour une activité locale… », première phrase.
- `pourquoi-optimisation-referencement-naturel-importante` et `checklist-seo-avant-mise-en-ligne` : intro.

## 4. Listes

Aucune classe nouvelle. Les listes reprennent deux styles déjà en place.

| Style | Modèle existant | Utilisé pour |
|---|---|---|
| Puces à point bleu (`flex gap-3`, `text-sm leading-7`) | `blog/[slug]/page.tsx:147-150` | `seo-geo/page.tsx:259-263` (éléments d'un site optimisé) ; champ `bullets` des articles |
| Filet gauche (`border-l-2 border-blue-100 pl-5`) | `[metier]/page.tsx:101-107` et `seo-geo/page.tsx:374` | `seo-geo/page.tsx:483` (socle d'un site) et `:545` (fondations livrées) |

Le champ `optimizationBullets` est nouveau dans le type `SeoGeoPageContent`. Les lignes de source utilisent `text-sm text-slate-600`, déjà présent en `[metier]/page.tsx:198`. Les liens externes utilisent `font-medium text-blue-700 underline underline-offset-4` (`seo-geo/page.tsx:411`).

Sur `/seo-geo`, la puce bleue reçoit `shrink-0`, classe déjà utilisée ailleurs, pour rester ronde quand la ligne passe à la ligne.

Observation hors périmètre : dans le gabarit des articles, la puce bleue s'écrase quand le texte passe à la ligne (visible sur mobile). C'est déjà le cas avant cette tâche. Le correctif est la même classe `shrink-0`, à ajouter lors de la tâche sur les liens.

## 5. Auteur et dates

- Les 11 articles affichent « Équipe Sitekept · Publié le … ». Les 9 articles dont `updatedAt` diffère de `publishedAt` ajoutent « · Mis à jour le … », avec un `<time dateTime>`.
- Le gabarit le faisait déjà. Je n'ai ajouté que la majuscule et le fuseau.
- `dateModified` du BlogPosting vient de `updatedAt`, comme la date affichée. Le validateur le contrôle.
- `updatedAt` est passé au 10 novembre 2026 sur les 6 articles modifiés. Les changements portent sur le fond : définitions, réponses, sources. Cette date alimente aussi le `<lastmod>` du sitemap, et Joseph peut préférer l'ancienne.
- Les articles non modifiés gardent leurs dates. `louer-ou-posseder-son-site-internet` et `recuperer-son-site-web-chez-un-prestataire` n'affichent que « Publié le », car leurs deux dates sont égales.

## 6. Sources ajoutées

Toutes rouvertes le 10 novembre 2026 (HTTP 200). Les versions françaises (`?hl=fr`) disent la même chose que les versions anglaises lues.

| URL | Ce qu'elle confirme | Où |
|---|---|---|
| `developers.google.com/search/docs/appearance/ai-features?hl=fr` | Les bonnes pratiques SEO restent valables pour les fonctions d'IA, sans exigence technique supplémentaire. Une page doit être indexée et affichable avec un extrait pour apparaître comme lien d'appui. Aucun fichier ni balisage spécial n'est nécessaire. | `/seo-geo` (3 endroits, dont la FAQ), 3 articles |
| `developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr` | Définition du SEO. Certains changements prennent effet en quelques heures, d'autres en plusieurs mois. Il vaut mieux attendre quelques semaines pour juger. | FAQ de `/seo-geo` (réponses 1 et 4) |
| `developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=fr` | « Personne ne peut garantir la première position dans les résultats de recherche Google. » | FAQ de `/seo-geo` (réponse 4) |
| `developers.google.com/search/docs/essentials?hl=fr` | Exigences techniques minimales. Même une page conforme n'est pas forcément explorée, indexée ou diffusée. | `/seo-geo`, article « site-sans-referencement » |
| `developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=fr` | Google utilise les données structurées pour comprendre le contenu d'une page. | `/seo-geo` |
| `developers.openai.com/api/docs/bots` | OAI-SearchBot (recherche) et GPTBot (entraînement) sont indépendants. Un site qui bloque OAI-SearchBot n'apparaît pas dans les réponses de recherche de ChatGPT. | `/seo-geo` (2 endroits) |
| `support.claude.com/en/articles/8896518-…` | ClaudeBot (entraînement), Claude-User et Claude-SearchBot : bloquer les deux derniers peut réduire la visibilité dans les réponses. | FAQ de `/seo-geo` |
| `developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers?hl=fr` | Google-Extended sert à l'entraînement et à l'ancrage de Gemini. Il n'a aucun effet sur la présence dans la recherche Google. | FAQ de `/seo-geo` |
| `docs.perplexity.ai/docs/resources/perplexity-crawlers` | PerplexityBot sert à faire apparaître les sites dans les résultats de Perplexity et n'est pas utilisé pour l'entraînement. | FAQ de `/seo-geo` |

### Checklist SEO : renvois « Pour approfondir »

Dans la checklist, les titres de pages Google sont cités sans rien attribuer à Google. Une première version écrivait « ces points reprennent la documentation de Google ». C'était excessif : les pages citées ne disent pas tout ce que la liste affirme.

Exemples de points que les pages citées ne disent pas :
- HTTPS avec certificat valide ;
- « trois des quatre versions doivent rediriger » ;
- les pages orphelines ;
- « jamais en 302 ou 307 ».

Les paragraphes disent maintenant « Pour approfondir, sur developers.google.com : » suivi des titres. Les titres sont ceux des pages françaises de Google :
- noindex et robots.txt ;
- redirections (« Redirections et recherche Google ») et canonical (« Spécifier une URL canonique avec rel="canonical" et d'autres méthodes ») ;
- sitemap, liens et codes d'état HTTP ;
- signaux Web essentiels, données structurées et PageSpeed Insights ;
- outil d'inspection d'URL (`support.google.com`).

Ce que ces pages disent réellement, relu le 10 novembre 2026 :
- l'en-tête `X-Robots-Tag` peut porter `noindex` ;
- robots.txt indique aux robots les URL accessibles ;
- 301 et 308 sont permanentes ;
- le sitemap peut être déclaré dans robots.txt et soumis dans la Search Console ;
- seuls les liens `<a href>` sont explorés ;
- les signaux Web essentiels mesurent l'expérience réelle ;
- PageSpeed Insights distingue données de laboratoire et données de terrain.

### Liens dans les articles

Les articles citent leurs sources en texte, sans lien cliquable. Les URL complètes ne sont pas écrites, pour éviter un débordement sur mobile. Joseph a décidé que le gabarit recevra les liens dans une tâche ultérieure.

### Affirmations sans source officielle trouvée

Je ne les ai pas modifiées.

- `/seo-geo`, règle 1 : « Une page qui donne sa réponse dans les deux premières phrases est reprise ». Aucune documentation d'éditeur ne le dit.
- `/seo-geo`, règle 4 : un contenu qui reconnaît ses limites est « perçu comme plus fiable » par des systèmes entraînés à repérer le discours promotionnel.
- `/seo-geo` : « dix positions sont visibles » contre « deux ou trois sources » citées. Idem pour « un modèle ne produit pas seul des faits précis ».
- `/seo-geo`, FAQ 3 : « les moteurs de réponse s'appuient largement sur des index de recherche ». La source ne confirme que le cas de Google.
- Checklist : la meta description « n'influence pas le classement mais détermine le taux de clic ». Les données structurées « n'améliorent pas directement la position ». Google « finit par cesser de consulter » un sitemap inexact.
- Checklist : « une seule balise h1 par page » et « title sous 60 caractères ».
- Checklist : « deux pages qui partagent le même title sont deux pages que Google traitera comme des doublons ».
- Articles « pourquoi-optimisation » et « site-sans-referencement » : les bénéfices annoncés (crédibilité, demande captée) sont des affirmations commerciales, sans source.
- Pages métier, hors périmètre des sources : plusieurs règles juridiques ne sont pas sourcées.
- Exemples : l'affichage des tarifs en salon de coiffure et la publicité des avocats depuis 2014. Aussi le code de la santé publique pour les dentistes, et le crédit d'impôt services à la personne.

## 7. `robots.txt`

Constat sur le build (`curl localhost:3190/robots.txt`) :

```
User-Agent: *
Allow: /

Sitemap: https://www.sitekept.com/sitemap.xml
```

- Aucun robot n'est bloqué. OAI-SearchBot, ChatGPT-User, PerplexityBot, Claude-SearchBot, Claude-User, Google-Extended et Applebot-Extended sont autorisés par la règle générale. GPTBot, ClaudeBot et les autres robots d'entraînement le sont aussi.
- Test avec l'en-tête `User-Agent` de huit robots : OAI-SearchBot, ChatGPT-User, PerplexityBot, Claude-SearchBot, Claude-User, Googlebot, Applebot et GPTBot. Toutes les réponses sont 200, sans `X-Robots-Tag`. Le middleware ne pose `noindex` que sur les pages de démonstration.
- `src/app/robots.ts` n'a pas été modifié.
- **Décision de Joseph** : tous les robots restent autorisés, entraînement compris. La règle actuelle correspond. Le point que j'avais soulevé (autoriser seulement les robots de recherche) est donc clos.
- La réponse de FAQ de `/seo-geo` dit que Sitekept « laisse ces robots accéder à son contenu ». C'est exact avec la règle actuelle.
- Correction faite dans cette FAQ : l'ancien texte disait que bloquer les robots d'IA retirait des réponses. Pour les robots d'entraînement, c'est inexact. La réponse distingue maintenant les robots de recherche des autres.

## 8. `llms.txt`

Statut : **fait**, `public/llms.txt`, servi en 200 `text/plain` sur le build.

- Contenu : une phrase de présentation, cinq faits visibles aujourd'hui sur le site, les pages principales et les 12 pages métier, en URL absolues `www`.
- Les cinq faits : création de sites internet ; pas d'abonnement imposé ; code et accès transmis au client ; domaine offert la première année ; aucune position promise.
- **Aucun prix et aucun délai.**
- Le site affiche encore « À partir de 500 € », « 600 € TTC », « après réception de l'acompte et des contenus » et « Partir d'une base éprouvée ».
- Ces textes ne sont pas alignés sur le registre.
- Une première version affirmait « sur mesure », « 500 € » et « 48 h après réception de tous les éléments », ainsi que la cible. Ces faits ne sont pas encore publiés sur le site. Elle a été remplacée.
- À faire en phase 1, une fois le site aligné sur le registre : ajouter le prix.
- À ajouter au même moment : le délai de 48 h après réception des éléments, le sur-mesure et la cible.
- Bénéfice non démontré : Google écrit qu'aucun fichier machine ni texte « IA » n'est nécessaire pour apparaître dans ses fonctions d'IA. Aucun autre éditeur consulté ne dit lire ce fichier pour la recherche. Le fichier ne coûte rien et peut être supprimé sans effet.

## 9. Vérifications

| Contrôle | Résultat |
|---|---|
| `pnpm lint` | Aucun avertissement |
| `pnpm type-check` | Aucune erreur |
| `pnpm build` | Réussi. Seul le middleware est marqué `ƒ`. Aucune route ne passe en dynamique. |
| Validateur JSON-LD (`t05/validate_jsonld.py`, 32 pages) | **0 erreur**. FAQPage de `/seo-geo` et des 12 pages métier identiques au texte visible. |
| Réponses de 40 à 60 mots | 46 sur 46 |
| Règles de rédaction sur les textes modifiés | 0 phrase au-dessus de 25 mots, 0 paragraphe au-dessus de 3 phrases ou 60 mots |
| Liens externes de `/seo-geo` | HTTP 200 pour les 9 liens de sources |
| Captures 390 et 1280 | `/seo-geo`, `/blog/qu-est-ce-que-le-seo-et-le-geo`, `/blog/site-web-rapide-pme-independant`, `/blog/checklist-seo-avant-mise-en-ligne`, `/site-internet-plombier` : aucun débordement horizontal |

Le balisage Service de `/seo-geo` avait une description devenue vide de sens. Elle reprend maintenant l'intro visible, qui définit le SEO et le GEO.

Les captures sont dans `scratchpad/t06/cap/`, hors dépôt. Elles n'ont pas été comparées au pixel aux références, car le texte a changé volontairement.

Hauteur de `/seo-geo` à 390 px, même script : 10 598 px sur le code d'avant la tâche (build du commit `c5e036b`), 11 678 px maintenant. La hausse vient des sources et des listes. La référence `reference-avant-0.4` donnait 10 566 px, avant l'ajout du lien LinkedIn au pied de page.

## 10. Points ouverts

- Contradiction avec le registre dans `[metier]/page.tsx:227` : le paragraphe sous le H2 sur le coût d'un site parle d'un « tarif de lancement, au lieu de 600 € ». Je ne l'ai pas modifié, car c'est un texte de prix de la phase 1. Il faudra le réécrire avec la constante des prix.
- Le paragraphe « Ce qu'il faut préparer pour tenir les 48h » fait courir le délai à partir de l'acompte et des contenus. Le registre dit « 48 h après réception des éléments », sans acompte. Même phase.
- `updatedAt` des 6 articles passé au 10 novembre 2026 (§ 5).
- Aucun test en conditions réelles : on ne sait pas si ces changements augmentent les citations par les moteurs d'IA. Rien ici ne le promet.
