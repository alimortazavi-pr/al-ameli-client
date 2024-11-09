//Types
import { ITagsState, ITag } from "@/common/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

//Tools

const reducers = {
  setTags(
    state: ITagsState,
    action: PayloadAction<ITag[]>
  ): ITagsState {
    return {
      ...state,
      tags: action.payload,
    };
  },
};

export default reducers;
