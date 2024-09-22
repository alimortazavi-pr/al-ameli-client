import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

//Reducers
import layouts from "./layouts";

export function makeStore() {
  return configureStore({
    reducer: {
      layouts: layouts,
    },
  });
}

const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
