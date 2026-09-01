# NBA France Stats 🏀

Un site web moderne et élégant pour suivre les performances des joueurs français en NBA.

## 🎯 Fonctionnalités

### Feature Principale
- **Statistiques de la veille** : Affichage des performances de la journée précédente classées de la moins à la plus impressionnante

### Features Secondaires
- **Power Ranking** : Classement hebdomadaire et mensuel des joueurs français
- **Performance de la semaine/mois** : Analyse détaillée des meilleures performances
- **Wemby Watch** : Suivi spécial des performances de Victor Wembanyama

## 🎨 Design
- Esthétique simple et épurée
- Interface intuitive et lisible
- Informations immédiatement disponibles
- Responsive et mobile-friendly

## 🛠️ Stack Technologique

- **Frontend** : React + TypeScript
- **Backend** : Node.js + Express
- **Styling** : Tailwind CSS
- **API NBA** : balldontlie.io
- **Base de données** : SQLite/PostgreSQL

## 📦 Installation

### Prérequis
- Node.js (v16+)
- npm ou yarn

### Setup

```bash
# Clone le repository
git clone https://github.com/fredericcaduc/nba-france-stats.git
cd nba-france-stats

# Install les dépendances
npm install

# Configure les variables d'environnement
cp .env.example .env
# Édite .env avec tes données

# Lance le développement
npm run dev
```

Le site sera accessible à `http://localhost:3000`

## 🚀 Scripts disponibles

- `npm run dev` : Lance le serveur et le client en développement
- `npm run dev:server` : Lance seulement le serveur
- `npm run dev:client` : Lance seulement le client
- `npm run build` : Build la version production
- `npm start` : Lance le serveur en production

## 📁 Structure du Projet

```
nba-france-stats/
├── server/              # Backend Node.js
│   ├── index.js        # Point d'entrée
│   ├── routes/         # Routes API
│   ├── controllers/     # Logique métier
│   ├── services/       # Services externes
│   └── models/         # Modèles de données
├── client/             # Frontend React
│   ├── src/
│   │   ├── components/ # Composants React
│   │   ├── pages/      # Pages principales
│   │   ├── services/   # Services API
│   │   └── App.tsx     # App principale
│   └── package.json
└── package.json
```

## 📊 Joueurs français suivis

- Victor Wembanyama (Spurs)
- Timothe Luwawu-Cabarrot
- Nicolas Batum
- Et autres joueurs français en NBA...

## 📝 License

MIT

## 👤 Auteur

Frédéric Caduc
