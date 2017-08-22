SELECT DISTINCT 

    playlists.Name,
    tracks.Name,
    tracks.Composer,
    tracks.Milliseconds,
    tracks.UnitPrice


FROM

    playlists

INNER JOIN playlist_track on playlists.PlaylistId = playlist_track.PlaylistId
INNER JOIN tracks on playlist_track.TrackId = tracks.TrackId

ORDER BY
    playlists.Name,
    tracks.Name,
    tracks.Composer

DESC;
