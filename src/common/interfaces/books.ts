//gRPC types
import {
  ListRequest,
  ListRequest_Sort,
} from "@/grpc/proto/ablibrary/services/book_service/book_service_pb";
import { Book } from "@/grpc/proto/ablibrary/types/book_pb";
import { SortDirection } from "@/grpc/proto/ablibrary/types/common_pb";

export interface IBooksState {
  books: IBook[];
  booksAttach: IBookAttach[];
  hasFilters: boolean;
  selectedBookIdForBookDetail: string | undefined;
  selectedBookDetail: Book | undefined;
}

export interface IBook extends Book {
  id: string;
}

export interface IBookAttach {
  bookId: string;
  thumbnail: string;
  pdfAttach: string;
  wordAttach: string;
}

export interface IListBooksRequest extends ListRequest {
  sortBy: ListRequest_Sort;
  sortDir: SortDirection;
  query?: string;
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
