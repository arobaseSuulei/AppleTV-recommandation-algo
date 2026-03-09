# Apple TV+ recommandation (APR) shows algorithms by using a clustering

## Abstract
Clustering is a powerful machine learning technique, often limited by the need to specify tne number of cluster k, however defining the number of cluster can give us the powerful tool of classifying our dataset, from a large dataset to a small. Our Apple TV+ machine learning algorithms will be able to recommend a similar shows to a user by chosing one


## Dataset and cleaning
Clustering is a well data visualization machine learning. What we really for a machine learning based model is Data, on APR who used a dataset from Apple TV+ official shows with our columns are
<img width="1218" height="202" alt="image" src="https://github.com/user-attachments/assets/3b6e89db-9afe-4889-b712-af3de15c577e" />

Now some of the columns had nullable, so we needed to manage that
<img width="618" height="329" alt="image" src="https://github.com/user-attachments/assets/ab87489e-4d84-4f22-8fa9-383605e19afa" />

### a) Filling the nullable with a 0 value
That's the most popular way to manage the nullable values, here we did that for the column "seasons", now all the seasons who had nullable values turned to 0
<img width="662" height="389" alt="image" src="https://github.com/user-attachments/assets/1bc657b7-5b7d-430d-99f7-084ec33c8a9f" />

### b) Filling the nullable with the most frequent value
We should know that on k-means clustering algoritmn, some columns are more important that by how we can use our model, For example here the columns age certification is a key factor for classifying all the shows on a similar pattern. For managing their nullable values we filled the gap by the most frequent value
<img width="570" height="107" alt="image" src="https://github.com/user-attachments/assets/d544a542-d1e5-4188-91c3-f109c736c15c" />



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

