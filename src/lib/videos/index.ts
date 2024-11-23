import { createSlice } from "@reduxjs/toolkit";

//Types
import { IVideosState } from "@/common/interfaces";

//Reducers
import reducers from "@/lib/videos/reducers";

const initialState: IVideosState = {
  playlists: [],
};

export const videosReducer = createSlice({
  name: "videos",
  initialState,
  reducers,
});

export default videosReducer.reducer;
