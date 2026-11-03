# Pages légales Sitekept : CGV et CGU (brouillon v1, révisé le 3 novembre 2026)

**Révision.** Une première version supposait que les sites étaient réalisés à partir des modèles de la page Templates. C'était faux : **les sites sont conçus sur mesure pour chaque client, et les templates ne sont que des démonstrations** pour aider le visiteur à se projeter. Les articles 2.1 et 7, la décision C7, la section E (article 4) et la section F ont été corrigés en conséquence.

**Avertissement.** Ce document est un brouillon de travail rédigé par Claude, qui n'est pas juriste. Il structure les pages et propose un texte de départ cohérent avec les offres. **Il ne remplace pas une relecture par un avocat ou un juriste**, nécessaire avant publication, surtout pour : la limitation de responsabilité, le droit de rétractation, la reconduction, les données personnelles (sous-traitance RGPD) et les pénalités.

**Attention TVA.** Joseph démarre en **franchise en base de TVA** (aucune TVA facturée). L'article 6 et les sections A et C ci-dessous mentionnent encore « TTC / HT » : cette partie est **caduque** et sera réalignée (« TVA non applicable, art. 293 B du CGI ») lors de la consolidation finale. Voir `registre-decisions.md`.

Les éléments entre crochets `[ ]` sont à compléter. Les mentions `[PROPOSITION]` sont des choix métier suggérés, à valider par Joseph.

## A. Constat sur l'existant (pages en ligne au 3 novembre 2026)

| Page | État | Problème |
|---|---|---|
| `/terms` (« Conditions d'utilisation ») | 12 articles, dont **5 vides** : propriété du site, délais de livraison, garanties, limitation de responsabilité, résiliation | Mélange des conditions d'usage du site et des conditions de vente. Ne couvre ni le suivi ni les campagnes. |
| `/terms` art. 5 | Prix TTC, acompte 30 %, solde à la livraison, **pénalités de retard de 10 % par mois** | 10 %/mois (120 %/an) est très au-dessus des usages et expose à une clause pénale jugée manifestement excessive. En B2B, le minimum légal est 3 fois le taux d'intérêt légal, plus 40 € d'indemnité de recouvrement. |
| `/terms` art. 10 | Droit français, **tribunaux de Paris** | À confirmer selon l'adresse réelle de l'entreprise. |
| `/mentions-legales` | Éditeur, forme juridique, SIRET, TVA, siège, directeur de publication : **tous « À COMPLÉTER »** | Mentions obligatoires manquantes. Bloquant avant le premier paiement. |
| `/privacy` | Mise à jour du 1er janvier 2025 ; aucun outil tiers nommé ; **aucune durée de conservation** ; **aucun bandeau de consentement mentionné** | Incomplète, et probablement non conforme si des outils de mesure (Google Analytics 4) sont actifs. |

« Conditions d'utilisation » et « CGU » désignent le même document. Il faut donc **deux pages**, pas trois : les **CGU** (usage du site) et les **CGV** (vente des prestations).

## B. Architecture des pages

- `/terms` : conserver l'URL (liens existants), la retitrer « Conditions générales d'utilisation » et la limiter à l'usage du site (section E).
- `/cgv` : **nouvelle page**, « Conditions générales de vente » (section D). C'est elle qui porte le contrat.
- Footer, colonne Légal : CGU, CGV, Confidentialité, Mentions légales.
- Chaque devis et chaque lien de paiement Stripe renvoie vers `/cgv`. Conserver une copie datée des CGV acceptées par chaque client.

## C. Décisions à prendre (avec une proposition par défaut)

Les valeurs des lignes 1 à 4 et 9 sont **validées** par Joseph (voir `registre-decisions.md`).

| # | Sujet | Proposition |
|---|---|---|
| 1 | Délai de traitement d'une modification (suivi) | 5 jours ouvrés (validé) |
| 2 | Correction gratuite des anomalies après mise en ligne | 30 jours (validé) |
| 3 | Réception tacite du site | 7 jours après la mise en ligne sans réserve écrite (validé) |
| 4 | Retours inclus avant la livraison | 2 séries (validé) |
| 5 | Formule annuelle (600 €) : résiliation en cours d'année | Pas de remboursement au prorata, non reconduite automatiquement sans rappel 30 jours avant (validé pour le prorata ; reconduction à confirmer) |
| 6 | Campagnes : durée minimale et préavis | Préavis de 30 jours ; minimum de 3 mois conseillé pour laisser les campagnes apprendre (validé) |
| 7 | Design et templates | Le design de chaque site est créé pour le client ; les templates du site sont des démonstrations non livrées. Engagement à confirmer par Joseph : aucune reprise du design d'un autre client. Si le client choisit un template comme direction visuelle, le dire dans le devis `[À CONFIRMER]`. |
| 8 | Tribunal compétent | Ville du siège de l'entreprise `[À DÉCIDER]` |
| 9 | Acompte de 30 % en cas d'annulation | Conservé, plus facturation du travail réalisé au-delà (validé) |
| 10 | Droit de rétractation | Services destinés aux professionnels, exclu ; à faire confirmer par un juriste (cas des très petites entreprises démarchées sur place ou hors de leur activité principale). |

## D. Brouillon des CGV (`/cgv`)

**Conditions générales de vente**
Dernière mise à jour : `[date de mise en ligne]`

### Article 1. Objet et champ d'application
Les présentes conditions générales de vente (« CGV ») régissent les prestations proposées par `[DÉNOMINATION SOCIALE]`, `[FORME JURIDIQUE]`, SIRET `[SIRET]`, dont le siège est situé `[ADRESSE]` (le « Prestataire »), sous la marque Sitekept, à tout client professionnel (le « Client »). Elles s'appliquent à toute commande de : (a) création de site internet (« Site »), (b) abonnement de suivi et de visibilité (« Suivi »), (c) gestion de campagnes publicitaires (« Campagnes »), (d) toute prestation complémentaire sur devis.
Le Client déclare agir à des fins professionnelles. Les CGV prévalent sur tout autre document, sauf accord écrit contraire. Le devis ou la commande vaut acceptation des CGV.

### Article 2. Prestations
**2.1 Site.** Conception et réalisation d'un site vitrine **sur mesure**, adapté à l'activité du Client, avec optimisation de base pour les moteurs de recherche. Le périmètre exact figure sur la page « Offres » et dans le devis. Les modèles (« templates ») présentés sur le site sitekept.com sont des maquettes de démonstration destinées à aider le visiteur à se projeter : ils ne constituent pas le livrable. Les fonctionnalités avancées (boutique, réservation, espace client, intégrations) sont réalisées sur devis.
**2.2 Suivi.** Abonnement comprenant : deux modifications de contenu par mois (non cumulables d'un mois sur l'autre), une optimisation de référencement par mois, un rapport mensuel et une veille de visibilité. Une modification est un changement sur une page existante (texte, photo, horaires, tarifs, actualité). Ne sont pas incluses : la création de pages, de fonctionnalités ou de refontes graphiques (sur devis). Les modifications sont traitées dans un délai de `[5 jours ouvrés]` à compter de la demande complète.
**2.3 Campagnes.** Audit préalable gratuit, mise en place et pilotage de campagnes sur `[Google Ads, Meta, TikTok]` selon l'audit, avec rapport mensuel. Les honoraires de gestion sont distincts du budget média, que le Client règle directement aux plateformes depuis des comptes ouverts à son nom.
**2.4 Obligation de moyens.** Le Prestataire est tenu d'une obligation de moyens. Il ne garantit aucun classement dans les moteurs de recherche ni dans les réponses des moteurs d'IA, aucun volume de trafic, de contacts ou de ventes, ni aucun résultat publicitaire.

### Article 3. Commande et durée
**3.1 Site.** La commande est ferme à la signature ou à l'acceptation écrite (y compris par e-mail) du devis et au versement de l'acompte.
**3.2 Suivi.** Souscrit au mois, sans engagement, ou à l'année, payée d'avance. La formule mensuelle est reconduite tacitement chaque mois et peut être résiliée à tout moment pour la fin de la période en cours. La formule annuelle court pour 12 mois ; `[sa résiliation anticipée ne donne pas lieu à remboursement au prorata]`. Le premier mois est offert pour toute souscription mensuelle effectuée à la livraison du Site.
**3.3 Campagnes.** Conditions précisées dans le devis. Préavis de résiliation : `[30 jours]`.

### Article 4. Obligations du Client
Le Client s'engage à : fournir dans les meilleurs délais les éléments nécessaires (textes, logo, photos, accès, informations exactes) ; désigner un interlocuteur ; valider ou commenter les livrables dans un délai raisonnable ; garantir qu'il détient les droits sur les contenus qu'il fournit et que ceux-ci sont licites ; respecter la réglementation propre à son activité, notamment pour les professions réglementées.
Les délais du Prestataire courent à compter de la réception des éléments complets. **En l'absence de réponse du Client pendant `[15]` jours, le projet est mis en pause et la date de livraison est reportée d'autant.**

### Article 5. Délais et livraison
Le Site est mis en ligne dans un délai cible de **48 heures après réception des éléments complets** et du paiement de l'acompte. Ce délai est un objectif ; un retard n'ouvre droit à aucune indemnité, sauf faute prouvée du Prestataire.
Le devis inclut **deux séries de retours** de la part du Client avant la livraison. Toute série supplémentaire fait l'objet d'un devis.
Le Site est réputé accepté à `[7]` jours après la mise en ligne, sans réserve écrite du Client. Le Prestataire corrige gratuitement les anomalies signalées pendant `[30]` jours après la mise en ligne.

### Article 6. Prix et paiement
> **À RÉALIGNER (franchise de TVA).** Le paragraphe ci-dessous est conservé tel quel du brouillon précédent. Il doit être remplacé par : prix en euros, nets de taxe, avec la mention « TVA non applicable, art. 293 B du CGI », tant que la franchise en base s'applique.

Les prix sont indiqués en euros, **TTC et HT** (TVA au taux en vigueur). Site : 500 € TTC (soit 417 € HT) `[à mettre à jour si les prix évoluent]`. Suivi : 65 € TTC par mois (54 € HT) ou 600 € TTC par an (500 € HT). Campagnes : à partir de 300 € HT par mois, hors budget média.
**Site** : acompte de 30 % à la commande ; solde à la livraison ; virement bancaire ou carte bancaire. **Suivi et Campagnes** : paiement d'avance, par prélèvement ou carte bancaire via le prestataire de paiement du Prestataire, à échéance mensuelle ou annuelle.
Les prestations hors forfait font l'objet d'un devis.
**Retard de paiement.** Toute somme non payée à l'échéance porte intérêt de plein droit à un taux égal à trois fois le taux d'intérêt légal, et entraîne une indemnité forfaitaire de 40 euros pour frais de recouvrement, sans préjudice d'une indemnisation complémentaire sur justificatifs. Le Prestataire peut suspendre ses prestations en cas d'impayé après mise en demeure restée sans effet.
**Annulation.** En cas d'annulation par le Client après le début des travaux, l'acompte reste acquis au Prestataire et les travaux réalisés au-delà de l'acompte sont facturés.

### Article 7. Propriété du Site
Le Site est destiné à appartenir au Client. Son design est créé pour le Client. À compter du paiement intégral du prix, le Prestataire cède au Client les droits d'exploitation sur les éléments spécifiquement réalisés pour lui (design, contenus rédigés, mise en page, personnalisations), et remet le code source déposé dans un compte au nom du Client. `[Engagement à confirmer par Joseph : le design n'est repris d'aucun autre client.]`
**Sont exclus de la cession**, et restent soumis à leur licence ou propriété d'origine : les composants logiciels tiers et libres, les polices et ressources sous licence, ainsi que les composants génériques réutilisables, outils, bibliothèques et méthodes propres du Prestataire, qui ne sont pas spécifiques au Client et pour lesquels le Client bénéficie d'un droit d'usage non exclusif, perpétuel, limité à l'exploitation de son Site.
Les modèles (« templates ») présentés sur le site sitekept.com sont des démonstrations. Ils ne sont pas cédés au Client. Les contenus du Client (textes, logo, photos) restent sa propriété.
Le Client autorise le Prestataire à présenter le Site comme réalisation dans son portfolio, sauf opposition écrite.

### Article 8. Hébergement, domaine et accès
Le Site est déployé sur des comptes ouverts au nom du Client (code source, hébergement, nom de domaine). Le nom de domaine est offert la première année `[selon l'offre en vigueur]` ; les frais d'hébergement et de renouvellement ensuite éventuels sont à la charge du Client.
Pendant le Suivi, le Client donne au Prestataire les accès nécessaires. À la fin du Suivi, le Prestataire cesse d'intervenir et le Client conserve ses accès et son Site, qui reste en ligne. Le Prestataire n'est pas responsable des pannes, interruptions ou changements de conditions des services tiers (hébergeur, registrar, plateformes publicitaires).

### Article 9. Campagnes publicitaires : dispositions spécifiques
Le Client reste titulaire de ses comptes publicitaires et de ses moyens de paiement. Le Prestataire agit en gestionnaire des campagnes sur la base de l'audit et du budget validés par le Client, et ne peut dépasser le budget média convenu. Le Client reconnaît que les plateformes peuvent refuser des annonces, suspendre un compte ou modifier leurs règles sans que le Prestataire en soit responsable. Si l'audit conclut que le budget serait mal employé, le Prestataire le signale avant tout engagement.

### Article 10. Données personnelles
Chacune des parties respecte le règlement (UE) 2016/679 (RGPD) et la loi Informatique et Libertés. Le Client reste responsable de traitement pour les données collectées par son Site. Lorsque le Prestataire y accède pour réaliser ses prestations, il agit en qualité de sous-traitant : il traite ces données uniquement sur instruction du Client, assure leur sécurité et leur confidentialité, et n'a recours à un autre sous-traitant que dans les conditions du RGPD. `[Annexe de sous-traitance à faire rédiger par un juriste.]` La politique de confidentialité du Prestataire est accessible sur `/privacy`.

### Article 11. Confidentialité
Chaque partie garde confidentielles les informations non publiques reçues de l'autre dans le cadre des prestations.

### Article 12. Responsabilité
Le Prestataire est tenu d'une obligation de moyens. Sa responsabilité ne peut être engagée qu'en cas de faute prouvée et pour les seuls dommages directs. **Sauf faute lourde ou dolosive, sa responsabilité totale est limitée au montant des sommes payées par le Client au titre de la prestation concernée au cours des `[12]` derniers mois.** Le Prestataire n'est pas responsable des dommages indirects (perte de chiffre d'affaires, de clientèle, de données ou d'image). `[Clause à valider par un juriste.]`
Le Client est responsable du contenu qu'il fournit et de la conformité de son activité à la réglementation qui lui est applicable.

### Article 13. Résiliation
Chaque partie peut résilier le contrat en cas de manquement grave de l'autre, `[15]` jours après mise en demeure restée sans effet. La résiliation du Suivi ou des Campagnes n'affecte pas la propriété du Site ni le fait qu'il reste en ligne. Les sommes dues pour la période en cours et les travaux réalisés restent exigibles.

### Article 14. Force majeure
Aucune des parties n'est responsable d'un manquement causé par un événement de force majeure au sens de l'article 1218 du Code civil.

### Article 15. Dispositions générales
Les CGV expriment l'intégralité des conditions applicables. Si une clause est nulle, les autres restent applicables. Le Prestataire peut modifier les CGV ; la version applicable à une commande est celle en vigueur à la date de cette commande.

### Article 16. Droit applicable et litiges
Droit français. Les parties recherchent une solution amiable avant toute action. À défaut, **le tribunal de commerce de `[VILLE]`** est seul compétent, y compris en cas de pluralité de défendeurs ou d'appel en garantie.

### Contact
`[E-mail]` · `[Téléphone]`

## E. Brouillon des CGU (`/terms`)

**Conditions générales d'utilisation du site sitekept.com**
Dernière mise à jour : `[date]`

1. **Objet.** Les présentes conditions encadrent l'accès et l'utilisation du site sitekept.com, édité par `[DÉNOMINATION SOCIALE]` (voir mentions légales). La vente des prestations est régie par les CGV.
2. **Accès.** Le site est accessible gratuitement. Le Prestataire peut le modifier, le suspendre ou l'interrompre à tout moment, notamment pour maintenance, sans obligation de disponibilité continue.
3. **Utilisation.** L'utilisateur s'engage à un usage conforme à la loi, à ne pas perturber le fonctionnement du site et à fournir des informations exactes dans les formulaires.
4. **Propriété intellectuelle.** Les textes, visuels, logos, mises en page et éléments du site sont protégés. Toute reproduction ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite. **Les modèles (« templates ») et réalisations présentés sur le site sont des démonstrations destinées à aider le visiteur à se projeter ; ils ne peuvent être copiés ni réutilisés.** Les marques et noms des tiers appartiennent à leurs titulaires.
5. **Liens externes.** Le site peut renvoyer vers des sites tiers dont le Prestataire ne contrôle pas le contenu et n'est pas responsable.
6. **Responsabilité.** Le contenu du site est fourni à titre d'information et peut contenir des inexactitudes. Le Prestataire ne garantit pas l'absence d'erreur ou d'interruption et n'est pas responsable des dommages indirects liés à l'usage du site.
7. **Données personnelles et cookies.** Le traitement des données est décrit dans la politique de confidentialité (`/privacy`). Les traceurs soumis à consentement ne sont déposés qu'après accord.
8. **Droit applicable.** Droit français. Compétence des tribunaux de `[VILLE]`.
9. **Modification.** Le Prestataire peut modifier ces conditions ; la version en ligne fait foi.
10. **Contact.** `[E-mail]`.

## F. Avenants pour Claude Code (technique)

À ajouter au plan v2 (`plan-v2.md`) :

1. **Routes** : conserver `/terms` (retitrer, contenu limité à la section E) et créer `/cgv` avec la section D. Suivre le modèle des pages récentes (chaînes en français en dur, constantes en haut de fichier, `buildPageMetadata`). Inspecter d'abord comment `/terms` est alimenté aujourd'hui (`messages/fr.json`, section `terms`) et rester cohérent sans dupliquer inutilement.
2. **Footer** : colonne Légal avec CGU, CGV, Confidentialité, Mentions légales. **Sitemap** : ajouter `/cgv` avec la même priorité que les autres pages légales.
3. **Mentions légales** : remplacer les « À COMPLÉTER » dès que Joseph fournit les informations de l'entreprise. Ne rien inventer.
4. **Tunnel de formulaire** (étape 3) : ajouter sous le bouton d'envoi une courte information RGPD (responsable de traitement, finalité, lien `/privacy`) et un lien vers les CGV. Pas de case à cocher obligatoire pour une demande de devis.
5. **Confidentialité** : nommer les outils réellement utilisés (Vercel, Resend, Google Analytics, Stripe une fois actif), les durées de conservation, les transferts hors Union européenne et les droits. À mettre à jour avec la date de modification.
6. **Consentement aux traceurs (point à vérifier avant tout nouvel événement de mesure)** : le plan v2 ajoute des événements GA4 par étape du tunnel. Vérifier qu'un mécanisme de consentement existe (bandeau, consent mode) et que les scripts de mesure ne se déclenchent qu'après accord. Si ce n'est pas le cas, le mettre en place avant de déployer ces événements.
7. **Stripe** : activer le recueil de l'acceptation des conditions de vente sur les liens de paiement, avec lien vers `/cgv`.
8. **Archivage** : conserver une version datée de chaque version des CGV mise en ligne.
9. **Page `/templates`** : ajouter une mention visible et courte, en langage simple, du type « Ces exemples vous aident à vous projeter. Votre site est créé sur mesure pour vous. » Vérifier aussi que les textes de la home et de `/tarifs` ne présentent pas les templates comme le produit livré.

## G. Ordre de travail

1. Joseph tranche les décisions encore ouvertes de la section C.
2. Joseph fournit les informations de l'entreprise (dénomination, forme, SIRET, adresse, directeur de publication) dès qu'elles existent. Régime de TVA : franchise en base.
3. Relecture juridique des sections D et E (et de l'annexe de sous-traitance).
4. Claude Code intègre les pages (phase 5 du plan v2) ; mise en production uniquement après les étapes 2 et 3.
