# Rennleitung UI (React)

React rewrite of the Angular app in `../rl`. Same screens, same routes, same backend API.

Stack: Vite, React, TypeScript, React Router, MUI.

## Run

```
npm install
npm start
```

The dev server runs on http://localhost:4200 and proxies `/api` to the backend on
http://localhost:3000, exactly like the Angular dev server did.

## Build

```
npm run build
```

The output goes to `dist/` as a flat folder. The production build talks to the API at
the URL in `.env.production` (`http://ponytyler.local:3000/`).

## Layout

- `src/api` – one module per backend resource
- `src/features` – screens, grouped like the old Angular libraries (show, song, stats, users, views, race-track)
- `src/ui` – shared pieces (snackbar, yes/no dialog, button list, message)
