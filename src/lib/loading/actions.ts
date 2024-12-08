import {} from "@/lib";

//Actions of other reducers

//Reducer
import { loadingReducer } from ".";

//Actions from reducer
export const {
  setIsLoadingBooksList,
  setIsLoadingGlobal,
  setLoadingStatus,
  setIsLoadingBookDetail,
} = loadingReducer.actions;
