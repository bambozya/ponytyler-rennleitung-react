-- A song counts as played when its bike won a race: bike 1 rides song1, bike 2 rides song2,
-- and bikeWon = 3 means both songs were played.
SELECT
	s.artist, s.name, COUNT(*) AS totalCount
FROM (
	SELECT r.song1Id AS songId
	FROM Race r
	WHERE r.raceState = 'RACED' AND r.bikeWon IN (1, 3) AND r.song1Id IS NOT NULL
	UNION ALL
	SELECT r.song2Id AS songId
	FROM Race r
	WHERE r.raceState = 'RACED' AND r.bikeWon IN (2, 3) AND r.song2Id IS NOT NULL
) AS played
		 INNER JOIN Song s ON s.id = played.songId
GROUP BY s.id, s.artist, s.name
ORDER BY totalCount DESC, s.artist, s.name
