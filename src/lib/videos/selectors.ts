//Types
import { IVideo } from "@/common/interfaces";
import { RootState } from "@/lib/index";

export function videosSelector(state: RootState): IVideo[] {
  return state.videos.videos;
}
