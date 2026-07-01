<div align="center">

# 🎬 Loreflix 🍿

### *Wie Netflix, nur dass du's selbst gebaut hast* 😎

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TMDB](https://img.shields.io/badge/TMDB-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white)

*Trending, top-rated und Suche — alles live aus der TMDB API.* 🌐

</div>

---

## 🎥 Worum geht's?

Eine Netflix-Style Web-App zum Stöbern, Suchen und Entdecken von Filmen und Serien. Loreflix zieht sich Live-Daten von **The Movie Database (TMDB)** und zeigt dir angesagte Titel, die bestbewerteten Perlen und Details zu allem, was du suchst. 🔍

## ✨ Features

- 🔥 **Trending** — was gerade heiß ist
- ⭐ **Top-Rated** — die absoluten Bangers
- 🔎 **Suche** — finde jeden Film & jede Serie
- 🪟 **Detail-Modal** — mehr Infos auf einen Klick
- 🧭 **Multi-Page Routing** — Home, Suche, Highscore, 404
- 📱 **Responsive** Card-Layout

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React_18-20232a?style=flat&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)
![TMDB API](https://img.shields.io/badge/TMDB_API-01B4E4?style=flat&logo=themoviedatabase&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

## 🚀 Los geht's

```bash
# 1️⃣ Clonen
git clone https://github.com/binmarkoo/Loreflix.git
cd Loreflix/loreflix

# 2️⃣ Installieren
npm install
```

### 🔑 Konfiguration

> ⚠️ **Achtung, wichtig:** Dein API-Token gehört **NICHT** hardgecoded in den Source! 🚨
> Bau dir ne `.env` und pack ihn da rein.

```env
REACT_APP_TMDB_TOKEN=dein_tmdb_token_hier
```

Deinen Token gibt's bei [themoviedb.org](https://www.themoviedb.org/settings/api). 🎟️

### ▶️ Starten

```bash
npm start   # 👉 http://localhost:3000
```

**Build für Production:** 📦
```bash
npm run build
```

## 🗂️ Projektstruktur

```
loreflix/src/
├── 🔌 Backend/       # TMDB Service-Layer
├── 🧩 components/    # Cards, Modal, Homepage, Search...
├── 🎨 Stylesheets/   # CSS pro Komponente
└── 🏠 App.js         # Root & Routing
