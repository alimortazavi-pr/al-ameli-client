//Types
import { ITag } from "@/common/interfaces";
import { RootState } from "@/lib/index";

export function tagsSelector(state: RootState): ITag[] {
  return state.tags.tags;
}
