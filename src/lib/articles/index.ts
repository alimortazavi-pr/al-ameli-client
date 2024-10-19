import { createSlice } from "@reduxjs/toolkit";

//Types
import { IArticlesState } from "@/common/interfaces";

//Reducers
import reducers from "@/lib/articles/reducers";

const initialState: IArticlesState = {
  articles: [],
};

export const articlesReducer = createSlice({
  name: "articles",
  initialState,
  reducers,
});

export default articlesReducer.reducer;
