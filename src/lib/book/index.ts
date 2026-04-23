import { createSlice } from "@reduxjs/toolkit";

//Types
import { IBookState } from "@/common/interfaces";

//Reducers
import reducers from "@/lib/book/reducers";

const initialState: IBookState = {
  isOpenTableOfContent: false,
  isOpenBookInfo: false,
  isOpenPDF: false,
  selectedBook: [],
  selectedOCRBook: [],
  selectedPDFBook: [],
  bookDetail: undefined,
  bookAttach: undefined,
  scrollToPage: false,
  isOCR: false,
  dimensionPDFPages: {
    width: 0,
    height: 0,
    aspectRatio: 0,
  },
  selectedPage: undefined,
};

export const bookReducer = createSlice({
  name: "book",
  initialState,
  reducers,
});

export default bookReducer.reducer;
