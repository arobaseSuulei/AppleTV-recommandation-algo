# AppleTV - React + Vite + Tailwind + Supabase

Un projet React moderne avec Vite, Tailwind CSS (ancienne version) et Supabase.

## 🚀 Installation

1. Clonez le repository
2. Installez les dépendances :
```bash
npm install
```

## 🔧 Configuration Supabase

1. Créez un projet sur [Supabase](https://supabase.com)
2. Copiez le fichier `env.example` vers `.env.local` :
```bash
cp env.example .env.local
```

3. Remplissez les variables d'environnement dans `.env.local` :
```env
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_clé_anon_supabase
```

## 🎨 Technologies utilisées

- **React 18** - Framework JavaScript
- **Vite** - Build tool rapide
- **Tailwind CSS 3.3** - Framework CSS utilitaire
- **Supabase** - Backend-as-a-Service

## 📦 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run preview` - Prévisualise la build de production

## 🎯 Fonctionnalités

- Interface moderne avec Tailwind CSS
- Configuration Supabase prête à l'emploi
- Animations et transitions fluides
- Design responsive

## 📁 Structure du projet

```
src/
├── lib/
│   └── supabase.js    # Configuration Supabase
├── App.jsx            # Composant principal
├── index.css          # Styles Tailwind
└── main.jsx           # Point d'entrée
```

## 🚀 Démarrage rapide

```bash
npm run dev
```

Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur.
