import { createSlice } from "@reduxjs/toolkit";

//Types
import { ILoadingState } from "@/common/interfaces";

//Reducers
import reducers from "@/lib/loading/reducers";

const initialState: ILoadingState = {
  loadingStatus: false,
  isLoadingGlobal: false,
  isLoadingBooksList: false,
  isLoadingBookDetail: false
};

export const loadingReducer = createSlice({
  name: "loading",
  initialState,
  reducers,
});

export default loadingReducer.reducer;
