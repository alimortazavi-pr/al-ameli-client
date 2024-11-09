import { createSlice } from "@reduxjs/toolkit";

//Types
import { ICategoriesState } from "@/common/interfaces";

//Reducers
import reducers from "@/lib/categories/reducers";

const initialState: ICategoriesState = {
  categories: [],
};

export const categoriesReducer = createSlice({
  name: "categories",
  initialState,
  reducers,
});

export default categoriesReducer.reducer;
