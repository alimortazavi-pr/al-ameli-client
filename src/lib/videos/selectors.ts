//Types
import { IPlaylist } from "@/common/interfaces";
import { RootState } from "@/lib/index";

export function playlistsSelector(state: RootState): IPlaylist[] {
  return state.videos.playlists;
}
