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
