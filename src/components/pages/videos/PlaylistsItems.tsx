"use client";

//Redux
import { useAppSelector } from "@/lib/hooks";
import { playlistsSelector } from "@/lib/videos/selectors";

//Components
import { PlaylistsItem } from ".";

export const PlaylistsItems = () => {
  //Redux
  const playlists = useAppSelector(playlistsSelector);

  return (
    <div className="grid grid-cols-12 gap-3 mb-3 w-full lg:w-8/12">
      {playlists?.map((playlist) => (
        <PlaylistsItem key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
};
