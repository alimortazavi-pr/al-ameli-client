//Types
import { IVideosState, IVideo } from "@/common/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

//Tools

const reducers = {
  setVideos(
    state: IVideosState,
    action: PayloadAction<IVideo[]>
  ): IVideosState {
    return {
      ...state,
      videos: action.payload,
    };
  },
};

export default reducers;
