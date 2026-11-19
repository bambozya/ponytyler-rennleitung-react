/**
 * A stand-in for the backend that runs in the browser, for the public demo on GitHub Pages
 * (built with VITE_DEMO=true). It answers the same requests as the NestJS API from data kept in
 * localStorage, and runs the race track on simulated riders. Nothing here is used on the Pi.
 */
import type { ApiError } from "../api/http";
import type { Race, RaceState, Show, Song, StatSong, TrackRider, TrackState, User, WhichBikeWonMost } from "../api/types";

const STORAGE_KEY = "ponyTylerDemo.v1";

interface Database {
  shows: Show[];
  songs: Song[];
  /** Stored without the joined songs; they are added when a race is read. */
  races: Race[];
  users: User[];
  nextId: number;
}

// ---- Sample data ----

const SONGS: [artist: string, name: string][] = [
  ["Bonnie Tyler", "Total Eclipse Of The Heart"],
  ["Bonnie Tyler", "Holding Out For A Hero"],
  ["ABBA", "Dancing Queen"],
  ["ABBA", "Gimme Gimme Gimme"],
  ["Queen", "Bohemian Rhapsody"],
  ["Queen", "Don't Stop Me Now"],
  ["Die Ärzte", "Zu spät"],
  ["Die Ärzte", "Westerland"],
  ["Nena", "99 Luftballons"],
  ["4 Non Blondes", "What's Up"],
  ["2 Unlimited", "No Limits"],
  ["AC/DC", "Thunderstruck"],
  ["Britney Spears", "Baby One More Time"],
  ["Backstreet Boys", "Everybody"],
  ["Spice Girls", "Wannabe"],
  ["Whitney Houston", "I Wanna Dance With Somebody"],
  ["Journey", "Don't Stop Believin'"],
  ["Bon Jovi", "Livin' On A Prayer"],
  ["a-ha", "Take On Me"],
  ["Cyndi Lauper", "Girls Just Want To Have Fun"],
  ["Tina Turner", "The Best"],
  ["Gloria Gaynor", "I Will Survive"],
  ["Die Toten Hosen", "Hier kommt Alex"],
  ["Wir sind Helden", "Denkmal"],
  ["Robbie Williams", "Angels"],
  ["Oasis", "Wonderwall"],
  ["The Killers", "Mr. Brightside"],
  ["Alanis Morissette", "Ironic"],
  ["Roxette", "It Must Have Been Love"],
  ["Kim Wilde", "Kids In America"],
];

function seed(): Database {
  let nextId = 1;
  const id = () => nextId++;
  const songs: Song[] = SONGS.map(([artist, name]) => ({
    id: id(),
    artist,
    name,
    selectable: true,
    deleted: false,
    origin: "FROM_CLOUD_SYNC",
  }));

  const today = new Date();
  today.setHours(20, 0, 0, 0);
  const lastMonth = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);

  const pastShow: Show = {
    id: id(),
    name: "Kesselhalle, Bremen",
    date: lastMonth.toISOString(),
    actualStartTime: null,
    duration: 120,
    finished: true,
    active: false,
  };
  const liveShow: Show = {
    id: id(),
    name: "Tante Martin, Bremen",
    date: today.toISOString(),
    actualStartTime: null,
    duration: 120,
    finished: false,
    active: true,
  };

  const races: Race[] = [];
  const race = (
    show: Show,
    person1: string,
    song1: number | null,
    person2: string,
    song2: number | null,
    raceState: RaceState,
    bikeWon = 0,
  ) => {
    const orderNumber = races.filter((entry) => entry.showId === show.id).length;
    races.push({
      id: id(),
      showId: show.id,
      orderNumber,
      createdAt: new Date(new Date(show.date ?? today).getTime() + orderNumber * 60_000).toISOString(),
      raced: raceState === "RACED",
      raceState,
      person1,
      song1Id: song1 === null ? null : songs[song1].id,
      person2,
      song2Id: song2 === null ? null : songs[song2].id,
      bikeWon,
    });
  };

  const pastRiders = ["Melis", "Kim", "Oman", "Gylcan", "Paul", "Olga", "Steve", "Rike", "Tobi", "Jule"];
  for (let index = 0; index < 22; index++) {
    race(
      pastShow,
      pastRiders[index % pastRiders.length],
      (index * 3) % songs.length,
      pastRiders[(index + 5) % pastRiders.length],
      (index * 3 + 7) % songs.length,
      "RACED",
      (index % 5 === 4 ? 3 : (index % 2) + 1),
    );
  }

  race(liveShow, "Anna", 2, "Bert", 9, "RACED", 1);
  race(liveShow, "Carl", 4, "Dora", 3, "RACED", 3);
  race(liveShow, "Emil", 0, "Frieda", 12, "WAITING_TO_RACE");
  race(liveShow, "Günther", 11, "Hanna Banana", 16, "WAITING_TO_RACE");
  race(liveShow, "Ines", 8, "Jo", 0, "WAITING_TO_RACE");
  race(liveShow, "Kalle", 27, "", null, "WAITING_FOR_OPPONENT");
  race(liveShow, "Lotte", 6, "Mo", 22, "CANCELED");

  const users: User[] = [
    { id: id(), name: "Rennleitung", password: null },
    { id: id(), name: "DJ", password: null },
  ];

  return { shows: [pastShow, liveShow], songs, races, users, nextId };
}

// ---- Storage ----

let database: Database | undefined;

function db(): Database {
  if (database) return database;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) database = JSON.parse(stored) as Database;
  } catch {
    // Private windows and blocked storage: the demo still works, it just forgets on reload.
  }
  database ??= seed();
  return database;
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db()));
  } catch {
    // see db()
  }
}

/** Throws away everything a visitor changed and starts again from the sample data. */
export function resetDemo() {
  database = seed();
  save();
  stopTrack();
}

// ---- Helpers ----

function fail(status: number, statusText: string, url: string, message: string): never {
  throw { status, statusText, url, error: { message, statusCode: status } } satisfies ApiError;
}

const time = (value: string | null) => (value ? new Date(value).getTime() : 0);
const byDateDesc = (first: Show, second: Show) => time(second.date) - time(first.date);

function withSongs(race: Race): Race {
  const song = (songId: number | null) => db().songs.find((entry) => entry.id === songId) ?? null;
  return { ...race, song1: song(race.song1Id), song2: song(race.song2Id) };
}

const racesOfShow = (showId: number) =>
  db()
    .races.filter((race) => race.showId === showId)
    .sort((first, second) => first.orderNumber - second.orderNumber);

/** Same rule as the backend: a race needs two riders and two songs to be ready. */
function settleRaceState(race: Pick<Race, "raceState" | "person1" | "person2" | "song1Id" | "song2Id">): RaceState {
  const complete = Boolean(race.song1Id && race.song2Id && race.person1 && race.person2);
  if (race.raceState === "WAITING_FOR_OPPONENT" && complete) return "WAITING_TO_RACE";
  if (race.raceState === "WAITING_TO_RACE" && !complete) return "WAITING_FOR_OPPONENT";
  return race.raceState || "WAITING_TO_RACE";
}

function currentShow(): Show | undefined {
  return db()
    .shows.filter((show) => show.active)
    .sort(byDateDesc)[0];
}

function upcomingRaces(): Race[] {
  const show = currentShow();
  if (!show) return [];
  return racesOfShow(show.id)
    .filter((race) => race.raceState === "WAITING_TO_RACE")
    .map(withSongs);
}

function countSongs(pick: (race: Race) => (number | null)[]): StatSong[] {
  const counts = new Map<number, number>();
  for (const race of db().races) {
    for (const songId of pick(race)) {
      if (songId !== null) counts.set(songId, (counts.get(songId) ?? 0) + 1);
    }
  }
  return db()
    .songs.filter((song) => counts.has(song.id))
    .map((song) => ({ artist: song.artist, name: song.name, totalCount: counts.get(song.id) ?? null }))
    .sort(
      (first, second) =>
        (second.totalCount ?? 0) - (first.totalCount ?? 0) ||
        first.artist.localeCompare(second.artist) ||
        first.name.localeCompare(second.name),
    );
}

// ---- Requests ----

type Body = Record<string, unknown>;

/** Answers one API request. `path` is what the app passes to http.get/post/…, e.g. "api/show/3". */
export async function handleDemoRequest(method: string, path: string, body?: unknown): Promise<unknown> {
  const [pathname, query = ""] = path.replace(/^\/?api\//, "").split("?");
  const parts = pathname.split("/");
  const data = (body ?? {}) as Body;
  const route = `${method} ${pathname}`;
  const notFound = () => fail(404, "Not Found", path, `Cannot ${method} /${path}`);
  const store = db();

  switch (parts[0]) {
    case "show": {
      if (method === "GET") {
        if (parts[1] === "shows")
          return [...store.shows].sort((a, b) => Number(b.active) - Number(a.active) || byDateDesc(a, b));
        if (parts[1] === "old-shows") return store.shows.filter((show) => !show.active).sort(byDateDesc);
        if (parts[1] === "current-shows") return store.shows.filter((show) => show.active).sort(byDateDesc);
        if (parts[1] === "current-show") return currentShow() ?? fail(404, "Not Found", path, "No current shows");
        return store.shows.find((show) => show.id === Number(parts[1])) ?? null;
      }
      const nameTaken = (name: unknown, exceptId?: number) =>
        store.shows.some((show) => show.name === name && show.id !== exceptId);
      const conflict = (name: unknown) =>
        fail(409, "Conflict", path, `A show named "${name}" already exists. Please choose a different name.`);

      if (route === "POST show") {
        if (nameTaken(data.name)) conflict(data.name);
        const show: Show = {
          id: store.nextId++,
          name: String(data.name ?? ""),
          date: (data.date as string) ?? new Date().toISOString(),
          actualStartTime: null,
          duration: (data.duration as number) ?? null,
          finished: Boolean(data.finished),
          active: Boolean(data.active),
        };
        store.shows.push(show);
        save();
        return show;
      }
      if (method === "PATCH" && parts[1] === "repair-races-for") {
        racesOfShow(Number(parts[2])).forEach((race, index) => (race.orderNumber = index));
        save();
        return racesOfShow(Number(parts[2]));
      }
      const show = store.shows.find((entry) => entry.id === Number(parts[1]));
      if (!show) return notFound();
      if (method === "PATCH") {
        if (nameTaken(data.name, show.id)) conflict(data.name);
        Object.assign(show, data, { id: show.id });
        save();
        return show;
      }
      if (method === "DELETE") {
        store.races = store.races.filter((race) => race.showId !== show.id);
        store.shows = store.shows.filter((entry) => entry.id !== show.id);
        save();
        return show;
      }
      return notFound();
    }

    case "race": {
      if (method === "GET") {
        if (parts[1] === "for-show") {
          const races = racesOfShow(Number(parts[2]));
          if (parts[3] === "all") return races.map(withSongs);
          const raced = query.includes("raced=true");
          const filtered = races.filter((race) => (race.raceState === "RACED") === raced);
          return (raced ? filtered.reverse() : filtered).map(withSongs);
        }
        if (parts[1] === "upcoming-race-with-songs") return upcomingRaces()[0] ?? null;
        if (parts[1] === "upcoming-races-with-songs") return upcomingRaces();
        if (parts[1] === "average-races-per-hour") {
          const finished = store.shows.filter((show) => show.finished);
          const minutes = finished.reduce((sum, show) => sum + (show.duration ?? 0), 0);
          if (minutes === 0) return 0;
          const songsPlayed = store.races
            .filter((race) => race.raceState === "RACED" && finished.some((show) => show.id === race.showId))
            .reduce((sum, race) => sum + (race.bikeWon === 3 ? 2 : 1), 0);
          return Math.round(songsPlayed / (minutes / 60));
        }
        const race = store.races.find((entry) => entry.id === Number(parts[1]));
        return race ? withSongs(race) : null;
      }
      if (route === "POST race") {
        const showId = Number(data.showId);
        const draft = {
          person1: (data.person1 as string) ?? null,
          person2: (data.person2 as string) ?? null,
          song1Id: data.song1Id ? Number(data.song1Id) : null,
          song2Id: data.song2Id ? Number(data.song2Id) : null,
          raceState: data.raceState as RaceState,
        };
        const race: Race = {
          ...draft,
          id: store.nextId++,
          showId,
          orderNumber: Math.max(-1, ...racesOfShow(showId).map((entry) => entry.orderNumber)) + 1,
          createdAt: new Date().toISOString(),
          raced: false,
          raceState: settleRaceState(draft),
          bikeWon: 0,
        };
        store.races.push(race);
        save();
        return race;
      }
      const race = store.races.find((entry) => entry.id === Number(parts[1]));
      if (!race) return notFound();
      if (method === "PATCH" && (parts[2] === "up" || parts[2] === "down")) {
        const waiting = racesOfShow(race.showId).filter((entry) => entry.raceState === "WAITING_TO_RACE");
        const neighbour = waiting[waiting.indexOf(race) + (parts[2] === "up" ? -1 : 1)];
        if (neighbour) {
          [race.orderNumber, neighbour.orderNumber] = [neighbour.orderNumber, race.orderNumber];
          save();
        }
        return null;
      }
      if (method === "PATCH") {
        const pick = <Key extends keyof Race>(key: Key) => (data[key] === undefined ? race[key] : (data[key] as Race[Key]));
        Object.assign(race, {
          person1: pick("person1"),
          person2: pick("person2"),
          song1Id: pick("song1Id"),
          song2Id: pick("song2Id"),
          orderNumber: pick("orderNumber"),
          raced: pick("raced"),
          bikeWon: pick("bikeWon"),
        });
        race.raceState = settleRaceState({ ...race, raceState: pick("raceState") });
        save();
        return race;
      }
      return notFound();
    }

    case "song": {
      const sorted = (songs: Song[]) =>
        [...songs].sort((a, b) => a.artist.localeCompare(b.artist) || a.name.localeCompare(b.name));
      if (method === "GET") {
        if (!parts[1]) return sorted(store.songs.filter((song) => !song.deleted));
        if (parts[1] === "selectable") return sorted(store.songs.filter((song) => !song.deleted && song.selectable));
        return store.songs.find((song) => song.id === Number(parts[1])) ?? null;
      }
      if (route === "POST song") {
        const song: Song = {
          id: store.nextId++,
          name: String(data.name ?? ""),
          artist: String(data.artist ?? ""),
          selectable: data.selectable === undefined ? true : Boolean(data.selectable),
          deleted: Boolean(data.deleted),
          origin: (data.origin as Song["origin"]) ?? "FROM_FILE_SYNC",
        };
        store.songs.push(song);
        save();
        return song;
      }
      const song = store.songs.find((entry) => entry.id === Number(parts[1]));
      if (!song) return notFound();
      if (method === "PATCH") {
        Object.assign(song, data, { id: song.id });
        save();
        return song;
      }
      return notFound();
    }

    case "user": {
      if (method === "GET") {
        if (!parts[1]) return [...store.users].sort((a, b) => a.name.localeCompare(b.name));
        return store.users.find((user) => user.id === Number(parts[1])) ?? null;
      }
      if (route === "POST user") {
        if (store.users.some((user) => user.name === data.name))
          fail(409, "Conflict", path, `A user named "${data.name}" already exists.`);
        const user: User = { id: store.nextId++, name: String(data.name ?? ""), password: null };
        store.users.push(user);
        save();
        return user;
      }
      const user = store.users.find((entry) => entry.id === Number(parts[1]));
      if (!user) return notFound();
      if (method === "PATCH") {
        Object.assign(user, data, { id: user.id });
        save();
        return user;
      }
      return notFound();
    }

    case "shifts":
      return [];

    case "backup":
      // There is no database file to download in the demo.
      return false;

    case "statistics": {
      if (parts[1] === "most-played-songs")
        return countSongs((race) =>
          race.raceState !== "RACED"
            ? []
            : [
                race.bikeWon === 1 || race.bikeWon === 3 ? race.song1Id : null,
                race.bikeWon === 2 || race.bikeWon === 3 ? race.song2Id : null,
              ],
        );
      const wished = countSongs((race) => [race.song1Id, race.song2Id]);
      if (parts[1] === "most-wished-songs") return wished;
      if (parts[1] === "never-wished-songs") {
        const wishedTitles = new Set(wished.map((song) => `${song.artist}\n${song.name}`));
        return store.songs
          .filter((song) => song.selectable && !song.deleted && !wishedTitles.has(`${song.artist}\n${song.name}`))
          .map((song): StatSong => ({ artist: song.artist, name: song.name, totalCount: null }))
          .sort((a, b) => a.artist.localeCompare(b.artist) || a.name.localeCompare(b.name));
      }
      if (parts[1] === "which-bike-won-most") {
        const counts = new Map<number, number>();
        for (const race of store.races) counts.set(race.bikeWon, (counts.get(race.bikeWon) ?? 0) + 1);
        return [...counts]
          .map(([bikeWon, timesWon]): WhichBikeWonMost => ({ bikeWon, timesWon }))
          .sort((a, b) => b.timesWon - a.timesWon);
      }
      return notFound();
    }

    case "track": {
      if (route === "GET track") return trackState;
      if (route === "POST track/stop") return stopTrack();
      if (route === "POST track/start") {
        const race = store.races.find((entry) => entry.id === Number(data.raceId));
        if (!race) return fail(404, "Not Found", path, `There is no race #${data.raceId}`);
        return startTrack(race);
      }
      return notFound();
    }
  }
  return notFound();
}

// ---- Race track: the same race the backend's TrackService runs, on simulated riders ----

const TRACK_LENGTH_M = 250;
const COUNTDOWN_SECONDS = 3;
const TICK_MS = 100;

const idleRider = (): TrackRider => ({ name: "", distance: 0, speed: 0, finishTime: null });
const idleTrack = (): TrackState => ({
  phase: "idle",
  raceId: null,
  showId: null,
  trackLength: TRACK_LENGTH_M,
  white: idleRider(),
  black: idleRider(),
  countdown: null,
  elapsed: 0,
  winner: 0,
  feed: "simulation",
  feedProblem: null,
});

let trackState: TrackState = idleTrack();
let trackTimer: ReturnType<typeof setInterval> | undefined;
const trackListeners = new Set<(state: TrackState) => void>();

function publishTrack(state: TrackState): TrackState {
  trackState = state;
  trackListeners.forEach((listener) => listener(state));
  return state;
}

/** Calls the listener with the current state and every change. Returns the unsubscribe function. */
export function subscribeToTrack(listener: (state: TrackState) => void): () => void {
  trackListeners.add(listener);
  listener(trackState);
  return () => trackListeners.delete(listener);
}

function stopTrack(): TrackState {
  clearInterval(trackTimer);
  trackTimer = undefined;
  return publishTrack(idleTrack());
}

function startTrack(race: Race): TrackState {
  clearInterval(trackTimer);
  const goAt = Date.now() + COUNTDOWN_SECONDS * 1000;
  // Each rider sprints up to a top speed between 60 and 80 km/h (in m/s here).
  const riders = { white: { speed: 0, top: 0 }, black: { speed: 0, top: 0 } };
  for (const rider of Object.values(riders)) rider.top = (60 + Math.random() * 20) / 3.6;
  let last = goAt;

  const step = (current: TrackRider, key: "white" | "black", seconds: number, elapsed: number): TrackRider => {
    if (current.finishTime !== null) return current;
    const rider = riders[key];
    rider.speed += (rider.top * (0.95 + Math.random() * 0.1) - rider.speed) * Math.min(1, seconds * 1.5);
    const distance = current.distance + rider.speed * seconds;
    if (distance < TRACK_LENGTH_M) return { ...current, distance, speed: rider.speed * 3.6 };
    // Crossed the line within this step: work out the exact moment.
    const finishTime = elapsed - ((distance - TRACK_LENGTH_M) / (distance - current.distance)) * seconds;
    return { ...current, distance: TRACK_LENGTH_M, finishTime, speed: (TRACK_LENGTH_M / finishTime) * 3.6 };
  };

  trackTimer = setInterval(() => {
    const now = Date.now();
    if (now < goAt) {
      publishTrack({ ...trackState, countdown: Math.ceil((goAt - now) / 1000) });
      return;
    }
    const seconds = (now - last) / 1000;
    last = now;
    const elapsed = (now - goAt) / 1000;
    const white = step(trackState.white, "white", seconds, elapsed);
    const black = step(trackState.black, "black", seconds, elapsed);
    let winner = trackState.winner;
    if (winner === 0 && (white.finishTime !== null || black.finishTime !== null)) {
      if (white.finishTime !== null && black.finishTime !== null) {
        winner = white.finishTime === black.finishTime ? 3 : white.finishTime < black.finishTime ? 1 : 2;
      } else {
        winner = white.finishTime !== null ? 1 : 2;
      }
    }
    const over = white.finishTime !== null && black.finishTime !== null;
    publishTrack({ ...trackState, phase: over ? "finished" : "racing", countdown: null, elapsed, white, black, winner });
    if (over) {
      clearInterval(trackTimer);
      trackTimer = undefined;
    }
  }, TICK_MS);

  return publishTrack({
    ...idleTrack(),
    phase: "countdown",
    raceId: race.id,
    showId: race.showId,
    white: { ...idleRider(), name: race.person1 ?? "" },
    black: { ...idleRider(), name: race.person2 ?? "" },
    countdown: COUNTDOWN_SECONDS,
  });
}
