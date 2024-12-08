//Types
import { IBooksState } from "@/common/interfaces";
import { Book } from "@/grpc/proto/ablibrary/types/book_pb";
import { RootState } from "@/lib/index";

export function booksSelector(state: RootState): IBooksState["books"] {
  return state.books.books;
}

export function hasFiltersSelector(state: RootState): boolean {
  return state.books.hasFilters;
}

export function selectedBookIdForBookDetailSelector(
  state: RootState
): string | undefined {
  return state.books.selectedBookIdForBookDetail;
}

export function selectedBookDetailSelector(state: RootState): Book | undefined {
  return state.books.selectedBookDetail;
}
