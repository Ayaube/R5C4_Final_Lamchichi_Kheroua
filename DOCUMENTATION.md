
# Documentation du Projet

## Table des Matières

- [Introduction](#introduction)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Lancement](#lancement)
- [Endpoints Backend](#endpoints-backend)
- [Structure du Projet](#structure-du-projet)
- [Versions Utilisées](#versions-utilisées)
- [Conseils](#conseils)

---

## Introduction

Ce projet est composé d'une application **Backend** basée sur Flask et d'une application **Frontend** développée avec Angular. L'objectif est d'afficher et manipuler des données via une interface paginée.

---

## Prérequis

### Backend

- Python 3.10 ou une version supérieure.
- Modules nécessaires dans le fichier `requirements.txt`.
- Port Flask = 5001 ( et non pas 5000 pour éviter les conflits avec d'autres instances).

### Frontend

- Node.js.
- Angular CLI installé globalement :
  ```bash
  npm install
  ```

---

## Installation

### Backend

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/Ayaube/R5C4_Final_Lamchichi_Kheroua.git
   cd backend
   ```

2. **Installer les dépendances** :
   ```bash
   pip install -r requirements.txt
   ```

---

### Frontend

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/Ayaube/R5C4_Final_Lamchichi_Kheroua.git
   cd frontend
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

---

## Lancement

### Backend

1. **Démarrer le serveur Flask** :
   ```bash
   flask --app run.py run
   ```
2. **Endpoint disponible** :
   - `http://127.0.0.1:5001/recherches/toutes` : Récupère toutes les données.

### Frontend

1. **Démarrer le serveur Angular** :
   ```bash
   ng serve
   ```

2. **Accéder à l'application** :
   - Ouvrez votre navigateur sur `http://localhost:4200`.

---

## Endpoints Backend

| Méthode | Endpoint                        | Description                           |
|---------|---------------------------------|---------------------------------------|
| GET     | `/recherches/toutes`           | Récupère toutes les données           |
| GET     | `/recherches?page=1&limit=30`  | Récupère les données paginées         |

---

## Structure du Projet

### Backend
```
backend/
│
├── app/
│   ├── __init__.py
│   ├── logique.py
│   └── recherches.json
├── requirements.txt
└── run.py
```

### Frontend
```
frontend/
│
├── src/
│   ├── app/
│   │   ├── models/
│   │   │   └── recherche-data.ts
│   │   ├── list-view/
│   │   │   ├── list-view.component.ts
│   │   │   ├── list-view.component.html
│   │   │   ├── list-view.component.css
│   │   │   └── list-view.component.spec.ts
│   └── environments/
│       └── environment.ts
└── package.json
```


---

## Conseils

1. **Problèmes avec les ports** :
   - Le backend utilise le port `5001` et le frontend le port `4200`. Assurez-vous que ces ports ne sont pas bloqués ou utilisés par d'autres applications.

2. **Dépendances manquantes** :
   - Supprimez les dossiers `env` (backend) ou `node_modules` (frontend) en cas de problème, puis réinstallez les dépendances :
     ```bash
     pip install -r requirements.txt  # Backend
     npm install                      # Frontend
     ```

---

## Auteurs

Ayaube LAMCHICHI & Rayan KHEROUA

## PS

N'hésitez pas à nous contacter pour toute question ou suggestion. Et surtout bon courage pour la correction !