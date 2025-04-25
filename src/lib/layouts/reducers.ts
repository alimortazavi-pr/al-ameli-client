//Types
import { ILayoutsState } from "@/common/interfaces/layouts";
import { PayloadAction } from "@reduxjs/toolkit";

//Tools

const reducers = {
  setDarkMode(
    state: ILayoutsState,
    action: PayloadAction<boolean>
  ): ILayoutsState {
    return {
      ...state,
      darkMode: action.payload,
    };
  },
  setIsOpenDrawer(
    state: ILayoutsState,
    action: PayloadAction<boolean>
  ): ILayoutsState {
    return {
      ...state,
      isOpenDrawer: action.payload,
    };
  },
  setPageTitle(
    state: ILayoutsState,
    action: PayloadAction<string>
  ): ILayoutsState {
    return {
      ...state,
      pageTitle: action.payload,
    };
  },
  setIsCompletedLogo(
    state: ILayoutsState,
    action: PayloadAction<boolean>
  ): ILayoutsState {
    return {
      ...state,
      isCompletedLogo: action.payload,
    };
  },
};

export default reducers;
