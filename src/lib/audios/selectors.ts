//Types
import { ICategoryAudio } from "@/common/interfaces";
import { RootState } from "@/lib/index";

export function audiosByCategoriesSelector(state: RootState): ICategoryAudio[] {
  return state.audios.audiosByCategories;
}
