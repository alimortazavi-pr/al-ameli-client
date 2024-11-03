import { createSlice } from "@reduxjs/toolkit";

//Types
import { IImagesState } from "@/common/interfaces";

//Reducers
import reducers from "@/lib/images/reducers";

const initialState: IImagesState = {
  imagesByCategories: [],
};

export const imagesReducer = createSlice({
  name: "images",
  initialState,
  reducers,
});

export default imagesReducer.reducer;
