import { createSlice } from "@reduxjs/toolkit";

//Types
import { ITagsState } from "@/common/interfaces";

//Reducers
import reducers from "@/lib/tags/reducers";

const initialState: ITagsState = {
  tags: [],
};

export const tagsReducer = createSlice({
  name: "tags",
  initialState,
  reducers,
});

export default tagsReducer.reducer;
