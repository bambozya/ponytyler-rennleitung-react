-- Selectable songs that were never picked for a race, on either bike. totalCount is always NULL here;
-- the column is kept so the rows have the same shape as the other song statistics.
SELECT
	s.artist, s.name, wished.totalCount
FROM Song s
		 LEFT JOIN (
	SELECT picked.songId, COUNT(*) AS totalCount
	FROM (
		SELECT r.song1Id AS songId
		FROM Race r
		WHERE r.song1Id IS NOT NULL
		UNION ALL
		SELECT r.song2Id AS songId
		FROM Race r
		WHERE r.song2Id IS NOT NULL
	) AS picked
	GROUP BY picked.songId
) AS wished ON wished.songId = s.id
WHERE s.selectable = 1 AND s.deleted = 0 AND wished.songId IS NULL
ORDER BY s.artist, s.name
