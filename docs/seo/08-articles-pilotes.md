# 0.8b — Articles pilotes du blog

État au 11 novembre 2026. Deux articles sont ajoutés dans `blogPosts` (`src/content/site-content.ts`), sur la branche `feat/offre-v2`, avec un build local sur le port 3210. Rien n'est commité.

Sources citées :
- **[04]** = `docs/seo/04-blog-plan.md` ;
- **[02]** = `docs/seo/02-keyword-map.md`.

---

## 1. Ce qui a été fait

- Article 1 : `/blog/creer-une-fiche-google-entreprise`.
- Article 2 : `/blog/salon-de-coiffure-sans-site-internet`.
- Auteur affiché : « Équipe Sitekept ».
- Les textes `en` sont des copies du français, sauf le titre, l'extrait, le title, la description et l'appel à l'action. Ils ne sont pas servis.
- Le gabarit n'a pas été touché. Les articles utilisent les champs existants : sections, puces, sources, liens internes `[libellé](/chemin)`.
- Aucun prix, aucun délai, aucune mention de « TTC » ou « HT », aucune mention du suivi ni des campagnes. Un contrôle par script le confirme.

### 1.1 Choix des dates

- `publishedAt` et `updatedAt` valent `2026-11-10` pour les deux articles.
- Le texte a été rédigé et les trois sources ont été rouvertes le 10 novembre 2026. Cette date est celle du contenu vérifié.
- Aucune date de mise en ligne n'est fixée : la branche n'est pas en production. Une date future serait inventée.
- Les 6 articles retouchés en tâche 0.6 portent déjà `2026-11-10`. Les dates restent cohérentes.
- Si la branche part en ligne plus tard, il suffit de changer ces deux champs. Le `lastmod` du sitemap et le BlogPosting suivent.
- Les sources ont été rouvertes à nouveau le 11 novembre 2026 : trois codes 200. Les sources 1 et 2 ont un texte identique à celui du 10 novembre.
- La source 3 a changé entre les deux jours (§ 1.2). Les corrections du 11 novembre sont faites avant toute mise en ligne. Les dates restent donc au 10 novembre.

### 1.2 Source 3 modifiée le 11 novembre

- Le 10 novembre, la page `/answer/6218037` s'appelait « Liens proposés par les établissements locaux ». Elle dit « Réservation » (Recherche) et « Modifier la fiche » (Maps).
- Le 11 novembre, son `<title>` est « Gérer les liens de votre établissement local ». Elle dit « Réservations » et « Modifier le profil ».
- La page décrit aussi la suppression des liens tiers : pour une réservation ou un rendez-vous, on ne peut pas supprimer le fournisseur depuis la fiche. Il faut contacter le fournisseur.
- Le champ `sources` de l'article 2 reprend le nouveau titre. [04] § 3.2 et § 8 aussi, pour le titre seulement.
- La colonne « Ce qu'elle dit » de [04] § 8, ligne 3, est mise à jour : « Réservations » et « Modifier le profil », lus dans la page actuelle.
- Les formulations de l'article 2 sont relues face à la page actuelle. Elles restent vraies pour le lien de rendez-vous, « jusqu'à 10 liens par catégorie », le lien préféré et les liens de partenaires.
- Deux formulations ont changé : le chemin dans Maps parle du profil de l'établissement, et la suppression d'un lien de réservation passe par le prestataire.

### 1.3 Autres corrections du tour 2

- Article 1 : la parenthèse « Business Profile, en anglais » est retirée. Aucune source citée ne la porte. Le secondaire « fiche google business profile » reste dans la carte [02] mais n'est plus dans le texte.
- Article 1, section sur la gratuité : l'inférence sur le plombier est retirée. Le texte dit : relisez les règles d'éligibilité si vous vous déplacez chez vos clients. Les sources 1 et 2 ne disent pas que l'adresse devient facultative.
- Article 1, section sur Maps : « Google ne donne donc aucun raccourci » est remplacé par « il reste donc à soigner vos informations ». Cela s'appuie sur la source 2, qui dit que des informations complètes et exactes donnent plus de chances d'apparaître. L'absence de place obtenue sur demande ou contre rémunération reste dite dans la réponse sous le H2.
- [02] bloc C, ligne « Google Maps » : la colonne des renvois dit que l'article 1 renvoie vers l'article optimisé. L'inverse reste à faire dans le corps du texte, car l'encadré « Autres pages utiles » contient déjà le lien.
- Article 2, première section : « une fiche déjà existante » devient « une fiche existante non validée ». La source 1 ne parle de revendication directe que pour une fiche non validée. Pour une fiche validée, elle décrit une demande de transfert de propriété.
- Article 1 : l'exigence d'une adresse correcte est ancrée sur l'ajout. Les deux phrases concernées disent « Lors de l'ajout, Google demande… ». La source 1 ne la formule que pour l'ajout d'un établissement.

Ajustements par rapport à [04] :
- Article 1 : le title est « Comment créer une fiche Google Entreprise | Sitekept ». « pas à pas » reste dans le H1. Avec la marque, le title entier dépasserait 60 caractères.
- Article 2 : le title est « Salon de coiffure sans site internet : conseils | Sitekept ». La fin « que faire concrètement ? » reste dans le H1, pour la même raison.
- Article 2, H2 n° 6 : « Comment relier son site à son outil de réservation ? » devient « Comment relier un futur site à votre outil de réservation ? », car l'article parle d'un salon sans site.
- [04] prévoit des liens vers les articles 3 à 5. Ils n'existent pas. Aucun lien n'a été écrit vers eux.
- Les secondaires « écho seul » de [04] ne sont pas tous repris dans le texte. Ils restent dans la carte [02].

---

## 2. Mesures

Toutes les mesures viennent du HTML servi par le build final, lu le 11 novembre 2026 avec `scratchpad/t08b/measure.py`. Le build vient de `pnpm build`, le serveur de `pnpm start` sur le port 3210. Les mesures suivent les dernières corrections de texte, et aucun chiffre ne vient d'un brouillon.

| Mesure | Article 1 | Article 2 | Règle |
|---|---|---|---|
| Mot-clé principal | comment créer une fiche google entreprise | salon de coiffure sans site internet | dans title, H1, premier paragraphe |
| Dans le title, le H1, le premier paragraphe | oui | oui | oui |
| Mots hors titres H2 (introduction, paragraphes, puces) | 930 | 716 | 900–1 100 / 600–1 000 |
| Mots, titres H2 compris | 971 | 764 | idem |
| Title (caractères) | 52 | 58 | 60 au plus |
| Description (caractères) | 148 | 153 | 140 à 155 |
| H1 (caractères) | 52 | 63 | 70 au plus |
| H2 le plus long (caractères) | 54 | 59 | 60 au plus |
| H3 dans l'article | aucun | aucun | 50 au plus |
| Blocs du corps (paragraphes, puces) | 32 (21 + 11) | 26 (18 + 8) | — |
| Blocs hors règle (phrase > 25 mots, > 3 phrases, > 60 mots) | 0 | 0 | 0 |

Le tour précédent donnait 926 et 715 mots, puis 967 et 763 avec les H2. Ces chiffres précédaient les corrections sur l'adresse et la revendication. Les valeurs ci-dessus les remplacent.

Le compte de mots exclut le bloc Sources et l'encadré latéral. Les blocs du corps excluent l'introduction et le bloc Sources. Le contrôle des règles porte sur ces blocs et sur l'introduction.

L'article 1 est un guide justifié par les étapes à détailler [04] § 3.1. Ses 6 H2 sont ceux de [04].

Unicité mesurée sur les 34 pages du sitemap : aucun title, aucune description, aucun H1 en double.

### 2.1 Réponses sous les H2 en question

Mots comptés dans le premier paragraphe qui suit chaque H2. Les 12 réponses sont entre 40 et 60 mots.

| Article | H2 (caractères) | Mots |
|---|---|---|
| 1 | Qu'est-ce qu'une fiche Google Entreprise ? (42) | 42 |
| 1 | La fiche est-elle gratuite, et qui peut en avoir une ? (54) | 44 |
| 1 | Comment créer ou revendiquer sa fiche ? (39) | 47 |
| 1 | Pourquoi faut-il valider sa fiche ? (35) | 47 |
| 1 | Qu'est-ce qui influence l'affichage sur Google Maps ? (53) | 46 |
| 1 | Une fiche suffit-elle, ou faut-il aussi un site ? (49) | 44 |
| 2 | Peut-on tenir un salon de coiffure sans site internet ? (55) | 42 |
| 2 | Quelles informations rendre faciles à trouver ? (47) | 50 |
| 2 | Comment faire prendre rendez-vous sans site ? (45) | 45 |
| 2 | Que peut faire la fiche Google à elle seule ? (45) | 51 |
| 2 | Quand un site devient-il utile pour un salon ? (46) | 48 |
| 2 | Comment relier un futur site à votre outil de réservation ? (59) | 50 |

### 2.2 Contrôles du build

- `pnpm lint` : aucun avertissement. `pnpm type-check` : aucune erreur. `pnpm build` : réussi, puis `pnpm start` pour toutes les mesures de ce fichier.
- Les deux routes sont statiques (SSG, `generateStaticParams`). La liste des routes est identique à celle de la tâche 0.7, hors les 2 nouveaux chemins.
- Sitemap : 34 URL, dont les 2 articles avec `lastmod` du 10 novembre 2026.
- `/blog` liste les 2 articles. L'encadré « Autres pages utiles » de chaque article cite l'autre, et ne se cite pas lui-même.
- JSON-LD : 0 erreur sur 34 pages, avec le validateur de la tâche 0.7 adapté (34 pages). Les 2 articles portent un BlogPosting valide.
- Liens internes : 9 chemins distincts testés, tous en 200.
- Captures 390 et 1280 px : mise en page identique à celle des articles existants, sans débordement horizontal.

---

## 3. Article 1 — sources et faits

Sources rouvertes les 10 et 11 novembre 2026 (HTTP 200). Leur texte est identique aux deux dates :
1. https://support.google.com/business/answer/2911778?hl=fr, « Ajouter ou revendiquer votre fiche d'établissement ».
2. https://support.google.com/business/answer/7091?hl=fr, « Conseils pour améliorer votre classement local sur Google ».

Les titres du champ `sources` sont ceux de la balise `<title>`, sans le suffixe « Aide Fiche d'établissement Google ».

Chaque extrait a été retrouvé tel quel dans le texte de la page, par script.

| Fait écrit dans l'article | Source | Extrait de la source |
|---|---|---|
| Fiche visible dans la Recherche et sur Maps une fois ajoutée et validée | 1 | « les clients peuvent vous trouver dans la Recherche et sur Maps » |
| On contrôle l'affichage des informations | 1 | « vous pouvez contrôler la façon dont les informations sur votre établissement s'affichent » |
| Ajout et revendication sans frais | 1 | « Vous pouvez ajouter ou revendiquer votre établissement sans frais » |
| Éligibilité requise | 1 | « que si vous êtes éligible à une fiche » |
| Adresse correcte et conforme aux consignes | 1 | « Assurez-vous que l'adresse de votre établissement est correcte et respecte nos consignes » |
| Page d'ajout | 1 | « Accédez à business.google.com/add » |
| Choix d'une option de validation | 1 | « Sélectionnez une option de validation » |
| Revendication depuis Maps sur ordinateur, par nom et ville | 1 | « Recherchez le nom et la ville de votre établissement » |
| Revendication dans l'application mobile | 1 | « Sur votre appareil mobile, ouvrez l'application Google Maps » |
| Transfert de propriété d'une fiche validée | 1 | « vous pouvez demander au propriétaire actuel de vous en transférer la propriété » |
| Option pour choisir un autre établissement | 1 | « Je suis le propriétaire ou le gérant d'un autre établissement » |
| La validation autorise à représenter l'établissement | 2 | « vous êtes autorisé à représenter l'établissement, ce qui augmente ses chances d'apparaître » |
| Résultats de proximité sur Maps et dans la Recherche | 2 | « il obtient des résultats à proximité sur Google Maps et dans la recherche Google » |
| Adresse complète si l'établissement reçoit du public | 2 | « Votre adresse complète, si votre établissement peut recevoir du public » |
| Horaires, type d'entreprise, détails pratiques | 2 | « la disponibilité d'un parking ou d'un accès Wi-Fi » |
| Photos et vidéos | 2 | « raconter l'histoire de votre entreprise avec des photos et des vidéos » |
| Informations exactes : plus de chances d'apparaître | 2 | « ont plus de chances d'apparaître dans les résultats de recherche à proximité » |
| Répondre aux avis | 2 | « vous montrez que vous accordez de l'importance à leurs commentaires » |
| Trois critères | 2 | « principalement basés sur la pertinence, la distance et la popularité » |
| Aucune place sur demande ou contre rémunération | 2 | « sur demande ou contre rémunération » |
| Algorithme confidentiel | 2 | « les détails de l'algorithme de recherche restent confidentiels » |
| Pertinence | 2 | « Des informations complètes et détaillées nous aident à mieux comprendre votre établissement » |
| Distance sans position partagée | 2 | « Si un client ne partage pas sa position, Google utilise les informations dont il dispose » |
| Proéminence : avis et sites qui renvoient | 2 | « le nombre de sites Web qui renvoient vers votre établissement et le nombre d'avis » |

Liens internes ajoutés :
- `/site-internet-salon-de-coiffure`, `/site-internet-plombier`, `/site-internet-boulangerie` ;
- `/blog/salon-de-coiffure-sans-site-internet` ;
- `/seo-geo` ;
- `/blog/site-optimise-seo-geo`.

---

## 4. Article 2 — sources et faits

Sources rouvertes le 11 novembre 2026 (HTTP 200), texte actuel :
1. https://support.google.com/business/answer/2911778?hl=fr, « Ajouter ou revendiquer votre fiche d'établissement ».
2. https://support.google.com/business/answer/7091?hl=fr, « Conseils pour améliorer votre classement local sur Google ».
3. https://support.google.com/business/answer/6218037?hl=fr, « Gérer les liens de votre établissement local ».

Les extraits de la source 3 viennent de la page du 11 novembre. Elle a changé depuis le 10 (§ 1.2).

| Fait écrit dans l'article | Source | Extrait de la source |
|---|---|---|
| Résultats de proximité sur Maps et dans la Recherche | 2 | « il obtient des résultats à proximité sur Google Maps et dans la recherche Google » |
| Fiche ajoutée ou revendiquée sans frais | 1 | « Vous pouvez ajouter ou revendiquer votre établissement sans frais » |
| Revendiquer une fiche non validée existante | 1 | « Si une fiche non validée existe déjà pour votre établissement, vous pouvez la revendiquer » |
| On contrôle l'affichage des informations | 1 | « vous pouvez contrôler la façon dont les informations sur votre établissement s'affichent » |
| Informations conseillées : adresse, horaires, type, photos, détails pratiques | 2 | « la disponibilité d'un parking ou d'un accès Wi-Fi » |
| Horaires d'ouverture, y compris exceptionnels | 2 | « Vos horaires d'ouverture, y compris les horaires d'ouverture exceptionnels » |
| Informations complètes et exactes : plus de chances | 2 | « ont plus de chances d'apparaître dans les résultats de recherche à proximité » |
| Une information inexacte peut empêcher l'affichage | 2 | « il est possible que votre fiche d'établissement ne s'affiche pas » |
| Répondre aux avis | 2 | « vous montrez que vous accordez de l'importance à leurs commentaires » |
| Photos et vidéos | 2 | « raconter l'histoire de votre entreprise avec des photos et des vidéos » |
| Lien de rendez-vous, jusqu'à 10 par catégorie | 3 | « jusqu'à 10 liens par catégorie » |
| Prendre rendez-vous parmi les liens possibles | 3 | « prendre rendez-vous » |
| Lien préféré | 3 | « Définir un lien préféré » |
| Ajout d'un lien : Recherche, bouton de réservation | 3 | « Dans la recherche Google, sélectionnez Réservations » |
| Ajout d'un lien : Maps, modification du profil | 3 | « Dans Google Maps, sélectionnez Modifier le profil » |
| Ajouter un lien, saisir l'URL, enregistrer | 3 | « Saisissez l'URL que vous souhaitez associer au bouton » |
| Liens de partenaires affichés automatiquement | 3 | « peuvent s'afficher automatiquement sur votre fiche d'établissement par le biais de partenaires tiers » |
| Réservation tierce : pas de suppression depuis la fiche | 3 | « Vous ne pouvez pas supprimer manuellement des fournisseurs tiers de services de réservation » |
| Réservation tierce : passer par le fournisseur | 3 | « Contactez directement le fournisseur tiers » |
| Aucune place sur demande ou contre rémunération | 2 | « sur demande ou contre rémunération » |
| Ajout et revendication possibles (priorité à la fiche) | 1 | « Si votre établissement ne dispose pas encore d'une fiche » |

Liens internes ajoutés :
- `/blog/creer-une-fiche-google-entreprise` ;
- `/site-internet-salon-de-coiffure` ;
- `/templates` ;
- `/tarifs`, sans aucun prix écrit.

---

## 5. Garde-fous et libellés d'interface

- Les libellés de boutons sont formulés avec prudence : « le bouton pour revendiquer l'établissement », « l'option pour ajouter un lien ». Les deux articles invitent à suivre ce qui s'affiche à l'écran.
- Les noms exacts lus le 11 novembre sont : « Ajouter votre établissement sur Google », « Revendiquer cet établissement », « Réservations », « Modifier le profil », « Ajouter un lien ». Ils ne sont pas écrits dans les articles. Ils ont déjà changé une fois en un jour.
- Seule l'adresse `business.google.com/add` est écrite, car l'aide la donne.
- Aucune promesse de classement. Les articles citent Google : aucune place ne s'obtient sur demande ou contre rémunération.
- Aucun nom de concurrent. Aucun exemple de profession réglementée.
- Les templates sont présentés comme des démonstrations. Le site est « créé sur mesure ».

## 6. Carte des mots-clés

- Les 2 lignes sont ajoutées à [02] § 2.2. Les lignes devenues sans objet sont retirées de [02] § 5.
- Un script compare les 161 mots-clés des 36 pages, principaux et secondaires, sans accent ni casse. Résultat : aucun doublon, aucun recoupement.
- Arbitrage ajouté en [02] § 3.3, bloc E : « salon de coiffure sans site internet » (article) face à « site internet salon de coiffure » (page métier).

## 7. Points ouverts

- Les aides Google se chargent par JavaScript. Le texte a été lu dans le HTML reçu par `curl`, puis extrait par script. Le vérificateur peut les rouvrir dans un navigateur.
- La page « Valider votre établissement sur Google » (`/answer/7107242`) donne plus de détails : compte Google requis, validation par carte postale. Elle n'est pas dans la liste de [04] § 8. Elle n'a pas été utilisée.
- `/seo-geo` et l'article `site-optimise-seo-geo` ne renvoient pas encore vers l'article 1 dans le corps du texte. L'encadré « Autres pages utiles » de l'article optimisé contient déjà ce lien. Le renvoi dans le texte est hors du périmètre de cette tâche.
- `public/llms.txt` ne cite pas les 2 nouveaux articles. Il est hors du périmètre.
- Le lien « Voir les templates » de l'encadré à droite reste celui du gabarit.
