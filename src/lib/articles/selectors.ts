//Types
import { IArticle } from "@/common/interfaces";
import { RootState } from "@/lib/index";

export function articlesSelector(state: RootState): IArticle[] {
  return state.articles.articles;
}
