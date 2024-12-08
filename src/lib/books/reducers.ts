/* eslint-disable @typescript-eslint/no-explicit-any */

//Types
import { IBook, IBooksState } from "@/common/interfaces/books";
import { Book } from "@/grpc/proto/ablibrary/types/book_pb";
import { PayloadAction } from "@reduxjs/toolkit";

const reducers = {
  setBooks(state: any, action: PayloadAction<IBook[]>): IBooksState {
    return {
      ...state,
      books: action.payload,
    };
  },
  setHasFilters(state: any, action: PayloadAction<boolean>): IBooksState {
    return {
      ...state,
      hasFilters: action.payload,
    };
  },
  setSelectedBookIdForBookDetail(
    state: any,
    action: PayloadAction<string | undefined>
  ): IBooksState {
    return {
      ...state,
      selectedBookIdForBookDetail: action.payload,
    };
  },
  setSelectedBookDetail(
    state: any,
    action: PayloadAction<Book | undefined>
  ): IBooksState {
    return {
      ...state,
      selectedBookDetail: action.payload,
    };
  },
};

export default reducers;
