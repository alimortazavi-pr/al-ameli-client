//Types
import { IVideosState, IPlaylist } from "@/common/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

//Tools

const reducers = {
  setPlaylists(
    state: IVideosState,
    action: PayloadAction<IPlaylist[]>
  ): IVideosState {
    return {
      ...state,
      playlists: action.payload,
    };
  },
};

export default reducers;
