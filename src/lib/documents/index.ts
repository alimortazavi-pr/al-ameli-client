import { createSlice } from "@reduxjs/toolkit";

//Types
import { IDocumentsState } from "@/common/interfaces";

//Reducers
import reducers from "@/lib/documents/reducers";

const initialState: IDocumentsState = {
  documents: [],
};

export const documentsReducer = createSlice({
  name: "documents",
  initialState,
  reducers,
});

export default documentsReducer.reducer;
