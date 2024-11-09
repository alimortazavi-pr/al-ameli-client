//Types
import { ICategory } from "@/common/interfaces";
import { RootState } from "@/lib/index";

export function categoriesSelector(state: RootState): ICategory[] {
  return state.categories.categories;
}
