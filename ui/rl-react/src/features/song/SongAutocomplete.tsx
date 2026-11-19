import { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Icon from "@mui/material/Icon";
import TextField from "@mui/material/TextField";
import { getAllRacesForShow, RaceState } from "../../api/race";
import { getSelectableSongs, songTitle, type Song } from "../../api/song";
import "./SongAutocomplete.css";

interface SongOption extends Song {
  /** Won a race in this show already, so it can't be picked again. */
  alreadyPlayed?: boolean;
  /** Picked for a race that is still waiting. */
  alreadyWished?: boolean;
}

interface SongAutocompleteProps {
  label: string;
  showId?: string;
  value: Song | null;
  onChange: (song: Song | null) => void;
}

async function loadOptions(showId: string): Promise<SongOption[]> {
  const [songs, races] = await Promise.all([getSelectableSongs(), getAllRacesForShow(showId)]);

  const played = new Set<number | null | undefined>();
  const wished = new Set<number | null | undefined>();
  for (const race of races) {
    if (race.raceState === RaceState.RACED) {
      if (race.bikeWon !== 2) played.add(race.song1Id);
      if (race.bikeWon !== 1) played.add(race.song2Id);
    } else if (
      race.raceState === RaceState.WAITING_TO_RACE ||
      race.raceState === RaceState.WAITING_FOR_OPPONENT
    ) {
      wished.add(race.song1Id);
      wished.add(race.song2Id);
    }
  }

  return songs.map((song) => ({
    ...song,
    alreadyPlayed: played.has(song.id),
    alreadyWished: wished.has(song.id),
  }));
}

export function SongAutocomplete({ label, showId, value, onChange }: SongAutocompleteProps) {
  const [options, setOptions] = useState<SongOption[]>([]);

  useEffect(() => {
    let cancelled = false;
    loadOptions(showId ?? "").then(
      (loaded) => {
        if (!cancelled) setOptions(loaded);
      },
      (error) => console.error(error),
    );
    return () => {
      cancelled = true;
    };
  }, [showId]);

  return (
    <Autocomplete<SongOption>
      fullWidth
      autoHighlight
      options={options}
      value={value}
      isOptionEqualToValue={(option, selected) => option.id === selected.id}
      getOptionLabel={songTitle}
      getOptionDisabled={(option) => Boolean(option.alreadyPlayed)}
      filterOptions={(all, state) => {
        const search = state.inputValue.toLowerCase();
        return all.filter(
          (song) => song.name.toLowerCase().includes(search) || song.artist.toLowerCase().includes(search),
        );
      }}
      onChange={(_event, option) => {
        if (!option) {
          onChange(null);
          return;
        }
        const { alreadyPlayed: _played, alreadyWished: _wished, ...song } = option;
        onChange(song);
      }}
      renderOption={(props, option) => {
        const { key, className, ...rest } = props as typeof props & { key: string };
        const flags = `${option.alreadyPlayed ? " alreadyPlayed" : ""}${option.alreadyWished ? " alreadyWished" : ""}`;
        return (
          <li key={option.id ?? key} className={`${className ?? ""} song-option${flags}`} {...rest}>
            {songTitle(option)}
            {option.alreadyPlayed && <Icon>block</Icon>}
            {option.alreadyWished && <Icon>warning</Icon>}
          </li>
        );
      }}
      renderInput={(params) => <TextField {...params} label={label} placeholder="Pick a Song" />}
    />
  );
}
