//Types
import { ICategoriesState, ICategory } from "@/common/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

//Tools

const reducers = {
  setCategories(
    state: ICategoriesState,
    action: PayloadAction<ICategory[]>
  ): ICategoriesState {
    return {
      ...state,
      categories: action.payload,
    };
  },
};

export default reducers;
