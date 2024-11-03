//Types
import { IImagesState, ICategoryImage } from "@/common/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

//Tools

const reducers = {
  setImagesByCategories(
    state: IImagesState,
    action: PayloadAction<ICategoryImage[]>
  ): IImagesState {
    return {
      ...state,
      imagesByCategories: action.payload,
    };
  },
};

export default reducers;
