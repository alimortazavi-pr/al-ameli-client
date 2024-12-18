import { createSlice } from "@reduxjs/toolkit";

//Types
import { IBookState } from "@/common/interfaces";

//Reducers
import reducers from "@/lib/book/reducers";

const initialState: IBookState = {
  isOpenTableOfContent: false,
  isOpenBookInfo: false,
  selectedBook: [],
  bookDetail: undefined,
};

export const bookReducer = createSlice({
  name: "book",
  initialState,
  reducers,
});

export default bookReducer.reducer;
