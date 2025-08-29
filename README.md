# 🚀 Portfolio de Rayan Habibeche - Développeur Full-Stack

Un portfolio moderne et interactif construit avec React, Vite et Framer Motion, mettant en valeur mes compétences en développement web.

## ✨ Fonctionnalités

### 🎨 Design Moderne
- Interface utilisateur moderne avec un design glassmorphism
- Gradients dynamiques et animations fluides
- Header fixe avec navigation intelligente
- Bouton de retour en haut de page
- Thème sombre élégant

### 🎭 Animations Avancées
- **Animations de défilement** avec Framer Motion et Intersection Observer
- **Carrousel de projets** avec défilement automatique et navigation manuelle
- **Effets hover** interactifs sur tous les éléments
- **Animations de typing** pour le titre principal
- **Particules animées** en arrière-plan
- **Transitions fluides** entre les sections

### 💻 Compétences Techniques
Icônes interactives pour :
- **HTML5** - Structure et sémantique
- **CSS3** - Styling et animations
- **JavaScript** - Logique et interactivité
- **React** - Framework frontend
- **Node.js** - Backend JavaScript
- **PHP** - Développement serveur
- **MySQL** - Base de données
- **Java** - Programmation orientée objet

### 🎪 Carrousel de Projets
- **Défilement automatique** des projets (configurable)
- **Navigation manuelle** avec flèches et indicateurs
- **Effet 3D** avec rotation et mise en perspective
- **Aperçu des technologies** utilisées pour chaque projet
- **Liens directs** vers GitHub et démonstrations

### 📱 Responsive Design
- Optimisé pour desktop, tablette et mobile
- Menu hamburger pour mobile
- Layouts adaptatifs
- Touch-friendly sur appareils tactiles

### 🔗 Fonctionnalités Interactives
- Formulaire de contact avec EmailJS
- Navigation smooth scroll
- Liens sociaux (LinkedIn, GitHub)
- Téléchargement de CV
- Indicateurs de progression

## 🛠️ Technologies Utilisées

### Frontend
- **React 18** - Bibliothèque UI
- **Vite** - Build tool moderne et rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations React avancées
- **React Intersection Observer** - Animations au scroll
- **Lucide React** - Icônes modernes

### Animations & UX
- **Framer Motion** pour les animations complexes
- **CSS3 Transitions** pour les effets hover
- **Intersection Observer API** pour les animations au scroll
- **Smooth Scrolling** natif

### Services
- **EmailJS** - Service d'envoi d'emails
- **Vercel** - Hébergement et déploiement

## 🚀 Installation et Lancement

```bash
# Cloner le repository
git clone https://github.com/rayan328/portfolio.git

# Installer les dépendances
cd portfolio
npm install

# Lancer en mode développement
npm run dev

# Build pour production
npm run build

# Prévisualiser le build
npm run preview
```

## 📦 Structure du Projet

```
portfolio/
├── src/
│   ├── components/
│   │   ├── App.jsx              # Composant principal
│   │   ├── Header.jsx           # Navigation fixe moderne
│   │   ├── Developer.jsx        # Section héro avec typing
│   │   ├── About.jsx            # À propos avec animations
│   │   ├── Skills.jsx           # Compétences avec icônes
│   │   ├── ProjectGallery.jsx   # Carrousel de projets
│   │   ├── Contact.jsx          # Formulaire de contact
│   │   ├── Footer.jsx           # Pied de page moderne
│   │   └── ScrollToTop.jsx      # Bouton retour en haut
│   ├── data/
│   │   └── projects.jsx         # Données des projets
│   └── index.jsx                # Point d'entrée
├── assets/
│   └── css/
│       └── style.css            # Styles CSS personnalisés
├── public/
│   ├── images/                  # Images et captures d'écran
│   └── CV_Rayan_Habibeche.pdf   # CV téléchargeable
└── package.json
```

## � Sections du Portfolio

### 🏠 Accueil
- Animation de typing du titre
- Présentation personnelle
- Boutons CV interactifs
- Indicateur de scroll

### 👤 À Propos
- Description personnelle avec animations
- Valeurs et philosophie
- Cards interactives avec hover effects

### 🛠️ Compétences
- Grid responsive d'icônes technologiques
- Animations staggered au scroll
- Hover effects avec rotation 3D
- Couleurs spécifiques à chaque technologie

### 💼 Projets
- Carrousel moderne avec navigation
- Aperçu des projets avec screenshots
- Technologies utilisées pour chaque projet
- Liens GitHub et démonstrations

### 📧 Contact
- Formulaire fonctionnel avec EmailJS
- Validation en temps réel
- Animations d'envoi
- Design glassmorphism

## 🎨 Personnalisation

### Couleurs Principales
```css
--primary-dark: #1B262C    /* Bleu foncé */
--primary-blue: #0F4C75    /* Bleu principal */
--secondary-blue: #3282B8  /* Bleu secondaire */
--accent-light: #BBE1FA    /* Bleu clair/accent */
```

### Animations
- Durées configurables dans les variants Framer Motion
- Delays personnalisables pour les animations staggered
- Transitions spring avec stiffness et damping ajustables

## 🔧 Configuration

### EmailJS
Configurer les variables dans `Contact.jsx` :
```javascript
const SERVICE_ID = 'votre_service_id';
const TEMPLATE_ID = 'votre_template_id'; 
const USER_ID = 'votre_user_id';
```

### Projets
Modifier `src/data/projects.jsx` pour ajouter/modifier vos projets.

## 📱 Compatibilité

- ✅ Chrome (dernières versions)
- ✅ Firefox (dernières versions)
- ✅ Safari (dernières versions)
- ✅ Edge (dernières versions)
- ✅ Mobile iOS/Android

## 🚀 Déploiement

Le projet est configuré pour être déployé sur Vercel avec configuration automatique via `vercel.json`.

```bash
# Déployer sur Vercel
npm run deploy
```

## � Performance

- ⚡ Vite pour un build ultra-rapide
- 🎯 Code splitting automatique
- 📦 Assets optimisés
- 🖼️ Images responsive
- 💨 Animations optimisées avec `will-change`

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche feature
3. Commit vos changements
4. Push vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

- **Email** : rayan.habpro@gmail.com
- **LinkedIn** : [Rayan Habibeche](https://www.linkedin.com/in/rayan-hab/)
- **GitHub** : [rayan328](https://github.com/rayan328)

---

<div align="center">
  <p><strong>Fait avec ❤️ et React</strong></p>
  <p><em>"Un bon développeur ne cesse jamais d'apprendre." 🚀</em></p>
</div>
