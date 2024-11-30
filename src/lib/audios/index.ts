import { createSlice } from "@reduxjs/toolkit";

//Types
import { IAudiosState } from "@/common/interfaces";

//Reducers
import reducers from "@/lib/audios/reducers";

const initialState: IAudiosState = {
  audiosByCategories: [],
};

export const audiosReducer = createSlice({
  name: "audios",
  initialState,
  reducers,
});

export default audiosReducer.reducer;
