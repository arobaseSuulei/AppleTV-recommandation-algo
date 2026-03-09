# Apple TV+ recommandation shows algorithms by using a clustering

## Abstract
Clustering is a powerful machine learning technique, often limited by the need to specify tne number of cluster k, however defining the number of cluster can give us the powerful tool of classifying our dataset, from a large dataset to a small. Our Apple TV+ machine learning algorithms will be able to recommend a similar shows to a user by chosing one


## Clustering manipulation
Clustering is a well data visualization machine learning. First



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

