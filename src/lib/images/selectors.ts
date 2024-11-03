//Types
import { ICategoryImage } from "@/common/interfaces";
import { RootState } from "@/lib/index";

export function imagesByCategoriesSelector(state: RootState): ICategoryImage[] {
  return state.images.imagesByCategories;
}
