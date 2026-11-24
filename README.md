# Sitekept - Page d'Atterrissage d'Agence

Une page d'atterrissage moderne et haute performance pour une agence de développement web construite avec Next.js 15, TypeScript et Tailwind CSS. Met l'accent sur le développement rapide, un design épuré et une architecture prête pour la production.

## 🚀 Fonctionnalités

- **Stack Technologique Moderne** : Next.js 15, TypeScript, Tailwind CSS, shadcn/ui
- **Design Responsive** : Approche mobile-first avec une belle interface sur tous les appareils
- **Optimisé pour la Performance** : Temps de chargement rapides et animations fluides
- **Formulaire de Contact** : Formulaire de contact intégré avec notifications email via les actions serveur et Resend
- **Prêt pour le SEO** : Balises meta appropriées, données structurées et HTML sémantique
- **Accessibilité** : Conforme WCAG avec labels ARIA appropriés et navigation au clavier

## 📋 Sections

1. **Section Héros** : Titre accrocheur avec appel à l'action
2. **Proposition de Valeur** : Avantages clés et différenciateurs
3. **Services** : Offres de services détaillées avec tarification
4. **Équipe** : Profils et références des membres de l'équipe
5. **Appel à l'Action** : Section de conversion secondaire
6. **Formulaire de Contact** : Capture de prospects avec validation utilisant les actions serveur
7. **Pied de Page** : Informations de l'entreprise et liens

## 🛠️ Installation

1. **Cloner le dépôt**

   ```bash
   git clone <repository-url>
   cd sitekept
   ```

2. **Installer les dépendances**

   ```bash
   pnpm install
   ```

3. **Configurer les variables d'environnement**

   ```bash
   cp .env.example .env.local
   ```

   Remplissez votre configuration email :

   ```
   RESEND_API_KEY=votre-clé-api-resend
   FROM_EMAIL=Sitekept <sitekept@gmail.com>
   AGENCY_EMAIL=sitekept@gmail.com
   ```

4. **Lancer le serveur de développement**

   ```bash
   pnpm dev
   ```

5. **Ouvrir [http://localhost:3000](http://localhost:3000)**

## 📧 Configuration Email

Le formulaire de contact utilise les actions serveur avec Resend pour envoyer des emails :

1. Créez un compte gratuit sur [Resend](https://resend.com)
2. Créez une clé API dans votre tableau de bord Resend
3. Ajoutez votre domaine et vérifiez-le (pour la production)
4. Utilisez la clé API dans la variable d'environnement `RESEND_API_KEY`
5. Définissez votre domaine d'envoi vérifié dans `FROM_EMAIL`

Pour le développement, vous pouvez utiliser le mode test de Resend sans vérification de domaine.

## 🏗️ Structure du Projet

```
src/
├── app/
│   ├── _components/            # Composants internes pour la page racine
│   │   ├── hero.tsx
│   │   ├── value-proposition.tsx
│   │   ├── services.tsx
│   │   ├── team.tsx
│   │   ├── contact.tsx
│   │   └── cta.tsx
│   ├── actions/
│   │   └── contact.ts          # Action serveur pour le formulaire de contact
│   ├── globals.css             # Styles globaux
│   ├── layout.tsx              # Layout racine avec métadonnées
│   └── page.tsx                # Page d'atterrissage principale
├── components/
│   ├── ui/                     # Composants shadcn/ui
│   ├── navigation.tsx          # Navigation principale
│   └── footer.tsx              # Composant pied de page
└── lib/
    └── utils.ts                # Fonctions utilitaires
```

## 🎨 Système de Design

- **Couleurs** : Bleu primaire (#2563eb), Gris ardoise
- **Typographie** : Famille de polices Inter
- **Composants** : Bibliothèque de composants shadcn/ui
- **Icônes** : Icônes Lucide React
- **Animations** : Transitions Tailwind CSS

## 🚀 Déploiement

### Vercel (Recommandé)

1. Connectez votre dépôt à Vercel
2. Ajoutez les variables d'environnement dans le tableau de bord Vercel
3. Déployez automatiquement lors du push vers la branche main

### Autres Plateformes

1. Construisez le projet :

   ```bash
   pnpm build
   ```

2. Démarrez le serveur de production :
   ```bash
   pnpm start
   ```

## 📊 Performance

- **Score Lighthouse** : 95+ sur toutes les métriques
- **Core Web Vitals** : Optimisé pour une excellente UX
- **Optimisation d'Images** : Optimisation automatique d'images Next.js
- **Taille du Bundle** : Optimisé avec tree-shaking et code splitting

## 🔧 Personnalisation

### Mises à Jour de Contenu

- Mettez à jour les informations de l'entreprise dans les composants
- Modifiez les services et tarifs dans `_components/services.tsx`
- Mettez à jour les membres de l'équipe dans `_components/team.tsx`
- Changez les informations de contact dans `_components/contact.tsx` et `components/footer.tsx`

### Style

- Modifiez les couleurs dans `globals.css`
- Mettez à jour les styles des composants en utilisant les classes Tailwind
- Personnalisez les composants shadcn/ui dans `components/ui/`

### Fonctionnalité

- Ajoutez de nouvelles sections en créant des composants dans `app/_components/`
- Étendez le formulaire de contact avec des champs supplémentaires dans `_components/contact.tsx` et `actions/contact.ts`
- Ajoutez le suivi analytique (Google Analytics, etc.)

## 📱 Optimisation Mobile

- Navigation responsive avec menu mobile
- Boutons et formulaires adaptés au tactile
- Images optimisées pour différentes tailles d'écran
- Chargement rapide sur les réseaux mobiles

## 🔒 Sécurité

- Validation de formulaire avec Zod
- Limitation de débit sur le formulaire de contact (recommandé à ajouter)
- Gestion sécurisée des emails
- Protection des variables d'environnement

## 📈 Fonctionnalités SEO

- Structure HTML sémantique
- Balises meta et Open Graph
- Balisage de données structurées
- Génération de sitemap
- Vitesses de chargement rapides

## 🧪 Tests

Lancez le serveur de développement et testez :

- Fonctionnalité de soumission de formulaire
- Défilement fluide de la navigation
- Réactivité mobile
- Livraison d'email (vérifiez le dossier spam)

## 📞 Support

Pour questions ou problèmes :

- Email : sitekept@gmail.com
- Créez un problème dans le dépôt

## 📄 Licence

Ce projet est sous licence MIT.

---

Construit avec ❤️ en utilisant Next.js, TypeScript et les technologies web modernes.
