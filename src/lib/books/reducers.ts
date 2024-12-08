/* eslint-disable @typescript-eslint/no-explicit-any */

//Types
import { IBook, IBooksState } from "@/common/interfaces/books";
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
};

export default reducers;
