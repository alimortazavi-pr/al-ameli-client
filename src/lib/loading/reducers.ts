//Types
import { ILoadingState } from "@/common/interfaces/loading";
import { PayloadAction } from "@reduxjs/toolkit";

//Tools

const reducers = {
  setLoadingStatus(
    state: ILoadingState,
    action: PayloadAction<boolean>
  ): ILoadingState {
    return {
      ...state,
      loadingStatus: action.payload,
    };
  },
  setIsLoadingGlobal(
    state: ILoadingState,
    action: PayloadAction<boolean>
  ): ILoadingState {
    return {
      ...state,
      loadingStatus: action.payload,
      isLoadingGlobal: action.payload,
    };
  },
  setIsLoadingBooksList(
    state: ILoadingState,
    action: PayloadAction<boolean>
  ): ILoadingState {
    return {
      ...state,
      loadingStatus: action.payload,
      isLoadingBooksList: action.payload,
    };
  },
  setIsLoadingBookDetail(
    state: ILoadingState,
    action: PayloadAction<boolean>
  ): ILoadingState {
    return {
      ...state,
      loadingStatus: action.payload,
      isLoadingBookDetail: action.payload,
    };
  },
};

export default reducers;
