import { createSlice } from "@reduxjs/toolkit";

//Types
import { IBooksState } from "@/common/interfaces";

//Reducers
import reducers from "@/lib/books/reducers";

const initialState: IBooksState = {
  books: [],
  hasFilters: false,
  selectedBookIdForBookDetail: undefined,
  selectedBookDetail: undefined,
};

export const booksReducer = createSlice({
  name: "books",
  initialState,
  reducers,
});

export default booksReducer.reducer;
