//gRPC types
import { Book, BookJson } from "@/grpc/proto/ablibrary/types/book_pb";

export interface IBooksState {
  books: IBook[];
  booksAttach: IBookAttach[];
  hasFilters: boolean;
  selectedBookIdForBookDetail: string | undefined;
  selectedBookDetail: Book | undefined;
}

export interface IBook extends BookJson {
  id: string;
}

export interface IBookAttach {
  bookId: string;
  thumbnail: string;
  pdfAttach: string;
  wordAttach: string;
}

export interface IBookItemProps {
  book: IBook;
}

export interface IBookDetailItem {
  title?: { key: string; value: string | undefined };
  authors: { key: string; value: string | undefined };
  diedAt: { key: string; value: string | undefined };
  categories: { key: string; value: string | undefined };
  publisher: { key: string; value: string | undefined };
  languages: { key: string; value: string | undefined };
}
