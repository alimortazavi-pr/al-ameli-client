//Types
import { Book } from "@/grpc/proto/ablibrary/types/book_pb";
import { Page } from "@/grpc/proto/ablibrary/types/page_pb";
import { RootState } from "@/lib/index";

export function isOpenTableOfContentSelector(state: RootState): boolean {
  return state.book.isOpenTableOfContent;
}

export function isOpenBookInfoSelector(state: RootState): boolean {
  return state.book.isOpenBookInfo;
}

export function selectedBookSelector(state: RootState): Page[] {
  return state.book.selectedBook;
}

export function bookDetailSelector(state: RootState): Book | undefined {
  return state.book.bookDetail;
}
