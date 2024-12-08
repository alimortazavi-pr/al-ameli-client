//Types
import { IBooksState } from "@/common/interfaces";
import { RootState } from "@/lib/index";

export function booksSelector(state: RootState): IBooksState["books"] {
  return state.books.books;
}

export function hasFiltersSelector(state: RootState): boolean {
  return state.books.hasFilters;
}
