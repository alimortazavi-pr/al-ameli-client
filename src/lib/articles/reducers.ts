//Types
import { IArticlesState, IArticle } from "@/common/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

//Tools

const reducers = {
  setArticles(
    state: IArticlesState,
    action: PayloadAction<IArticle[]>
  ): IArticlesState {
    return {
      ...state,
      articles: action.payload,
    };
  },
};

export default reducers;
