-- A song counts as wished once for every race it was picked for, on either bike.
SELECT
	s.artist, s.name, COUNT(*) AS totalCount
FROM (
	SELECT r.song1Id AS songId
	FROM Race r
	WHERE r.song1Id IS NOT NULL
	UNION ALL
	SELECT r.song2Id AS songId
	FROM Race r
	WHERE r.song2Id IS NOT NULL
) AS wished
		 INNER JOIN Song s ON s.id = wished.songId
GROUP BY s.id, s.artist, s.name
ORDER BY totalCount DESC, s.artist, s.name
