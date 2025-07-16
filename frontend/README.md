# AppleTV Frontend

Ce projet est le frontend d'une application de type Apple TV, développé en React avec Vite et TailwindCSS. Il inclut un carousel dynamique pour afficher les shows récupérés depuis Supabase.

## Fonctionnalités principales
- Affichage des shows sous forme de carousel slider (Swiper)
- Récupération dynamique des données depuis Supabase
- UI moderne avec TailwindCSS
- Navigation React Router

## Installation

1. **Cloner le dépôt**
   ```bash
   git clone <repo-url>
   cd AppleTV/frontend
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le projet**
   ```bash
   npm run dev
   ```
   L'application sera accessible sur `http://localhost:5173` (ou le port affiché dans le terminal).

## Structure des dossiers

- `src/`
  - `App.jsx` : Composant principal
  - `components/`
    - `Navbar.jsx` : Barre de navigation latérale
    - `UpNav.jsx` : Barre supérieure
    - `Shows.jsx` : Carousel des shows (Swiper)
  - `MainRouter.jsx` : Configuration des routes
  - `main.jsx` : Point d'entrée React
  - `index.css` : Styles globaux (inclut Tailwind et custom Swiper)

## Personnalisation du carousel

Le carousel utilise la librairie [Swiper](https://swiperjs.com/react). Pour modifier le style des flèches ou des points :

Dans `src/index.css` :
```css
.swiper-button-next,
.swiper-button-prev {
  color: #fff !important; /* Changer la couleur des flèches */
}
.swiper-pagination-bullet {
  background: #fff;
  opacity: 0.7;
}
.swiper-pagination-bullet-active {
  background: #fff;
  opacity: 1;
}
```

Pour changer le nombre de slides visibles :
Dans `Shows.jsx`, modifiez la prop `slidesPerView` du composant Swiper.

## Dépendances principales
- React
- Vite
- TailwindCSS
- Swiper (carousel)
- Supabase (API)

## Auteur
- SuleyJS

---
Pour toute question ou amélioration, ouvrez une issue ou contactez le mainteneur.
