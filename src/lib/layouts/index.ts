import { createSlice } from "@reduxjs/toolkit";

//Types
import { ILayoutsState } from "@/common/interfaces";

//Reducers
import reducers from "@/lib/layouts/reducers";

const initialState: ILayoutsState = {
  darkMode: false,
  isOpenDrawer: false,
  pageTitle: "",
};

export const layoutsReducer = createSlice({
  name: "layouts",
  initialState,
  reducers,
});

export default layoutsReducer.reducer;
