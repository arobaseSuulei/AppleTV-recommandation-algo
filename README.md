# AppleTV Recommadation

This project is an Apple TV-style application, developed using React with Vite and TailwindCSS, Supabase for storing and manage data, Kmeans clustering for the AI algorithm model. It features a dynamic carousel to display shows fetched from Supabase.

## Key Features
###frontend
- Display shows in a carousel slider (Swiper)
- Dynamically fetch data from Supabase
- Modern UI with TailwindCSS

  ###backend
  - Storing data
  - Manage data
 
  ###AI algorithms
  - cleaning the dataset
  - Applying the Kmeans algorithms into the dataset



## Installation

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd AppleTV/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Lancer le projet**
   ```bash
   npm run dev
   ```


## Structure des dossiers

- `frontend/src/` : frontend application
  - `App.jsx` : Composant principal
  - `components/`
    - `Navbar.jsx` : Barre de navigation latérale
    - `UpNav.jsx` : Barre supérieure
    - `Shows.jsx` : Carousel des shows (Swiper)
  - `MainRouter.jsx` : Configuration des routes
  - `main.jsx` : Point d'entrée React
  - `index.css` : Styles globaux (inclut Tailwind et custom Swiper)

  - `backend` : backend application, notebooks, and dataset

## Personnalisation du carousel

The carousel use the swiper library [Swiper](https://swiperjs.com/react) :

Inside `src/index.css` :
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


## Dépendances principales
- React
- Vite
- TailwindCSS
- Swiper (carousel)
- Supabase (API)
- pandas
- SentenceTransformer
- Jupyter notebooks

## Auteur
- Souleymane Diallo

---

