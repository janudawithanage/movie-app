# Movie App (Frontend)

A modern React movie discovery app built with Vite and TMDB API integration.

Users can:
- Explore trending movies from the landing page
- Browse and search movies
- Filter movies by latest or popular
- Add/remove favourite movies
- Persist favourites using local storage

---

## Tech Stack

- React 19
- Vite 7
- React Router DOM 7
- ESLint 9
- TMDB REST API

---

## Project Structure

frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── moviecard.jsx
│   │   └── navbar.jsx
│   ├── contexts/
│   │   └── moviecontext.jsx
│   ├── css/
│   │   ├── App.css
│   │   ├── Browse.css
│   │   ├── Favorites.css
│   │   ├── LandingPage.css
│   │   ├── MovieCard.css
│   │   ├── Navbar.css
│   │   └── index.css
│   ├── pages/
│   │   ├── Browse.jsx
│   │   ├── favourites.jsx
│   │   └── LandingPage.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js

---

## Routes

- `/` → Landing page with hero, trending section, and FAQs
- `/browse` → Movie browsing, search, and filter view
- `/favourites` → User favourite movies view

---

## Getting Started

### 1) Prerequisites

- Node.js 18+ (recommended latest LTS)
- npm 9+

### 2) Install dependencies

```bash
npm install
```

### 3) Start development server

```bash
npm run dev
```

By default, Vite runs at:
- http://localhost:5173

---

## Available Scripts

- `npm run dev` → start local dev server
- `npm run build` → create production build
- `npm run preview` → preview production build locally
- `npm run lint` → run ESLint checks

---

## API Integration (TMDB)

The app uses TMDB endpoints for:
- Popular movies
- Search results
- Weekly trending movies

Current API logic is in:
- `src/services/api.js`

### Important Security Note

The TMDB API key is currently hardcoded in the frontend source. For better security, move it to a Vite environment variable.

Suggested setup:

1. Create `.env` in `frontend/`
2. Add:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

3. Update `src/services/api.js` to read:

```js
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
```

---

## Favourites Persistence

Favourites are stored in browser local storage under the key:
- `favourites`

Managed by:
- `src/contexts/moviecontext.jsx`

---

## Notes

- This repository currently contains the frontend application.
- The play button in movie cards is a placeholder (not implemented).

---

## License

This project is for educational/personal use unless you define and add a license file.
