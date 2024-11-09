import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

//Reducers
import layouts from "./layouts";
import articles from "./articles";
import images from "./images";
import documents from "./documents";
import categories from "./categories";
import tags from "./tags";

export function makeStore() {
  return configureStore({
    reducer: {
      layouts: layouts,
      articles: articles,
      images: images,
      documents: documents,
      categories: categories,
      tags: tags,
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
