# Pony Tyler Rennleitung

This is a Software for organising Goldsprint & Massenkaraoke Events.

The first version simply provides a webapp for the so called "Rennleitung" and the "DJ" to communicate the Races.


## How to Start

To start, we recommend using swa cli tool locally
https://github.com/Azure/static-web-apps-cli

First, start the Frontend in `ui/rl-react` like this:

```npm run start```

Then, if you haven't done yet, create the database and the Prisma client in `be` like this:

```
npx prisma migrate deploy
npx prisma generate --sql
```

The frontend takes its API types from `be/src/api-types.ts`, so the generate step is also needed
before `npm run build` or `npm run typecheck` in `ui/rl-react`.

Then, start the Backend in `be` like this:

```npm run start```

Then start swa to combine the two

```swa start http://localhost:4200 --api-location http://localhost:3000 --port 4280```

## Race track and the bikes

"Start the race!" on a show's race list puts that race on the race track (`/race-track`): a
countdown, then both riders going round a 250 m track. The backend runs the race, so every screen
that has the track open shows the same thing. Finishing the 250 m in 12 seconds is 75 km/h.

The distances come from the Arduino on the rollers (sketch: `Arduino/goldsprint_v_10.ino`), read
over USB serial. Tell the backend where it is plugged in, in `be/.env`:

```
BIKE_SERIAL_PORT=/dev/ttyUSB0
# Which of the two counters the Arduino sends is the white bike: 0 (default) or 1.
BIKE_WHITE_INDEX=0
```

Without `BIKE_SERIAL_PORT` the track runs on two simulated riders and says so on screen.

## Demo on GitHub Pages

https://bambozya.github.io/ponytyler-rennleitung-react/ is a demo of the frontend. GitHub Pages
cannot run the backend, so the demo build (`VITE_DEMO=true`) answers all requests in the browser
from sample data (`ui/rl-react/src/demo/backend.ts`) and runs the race track on simulated riders.
Changes are kept in the visitor's own browser only. Every push to `main` redeploys it
(`.github/workflows/pages.yml`).
