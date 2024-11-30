//Types
import { IAudiosState, ICategoryAudio } from "@/common/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

//Tools

const reducers = {
  setAudiosByCategories(
    state: IAudiosState,
    action: PayloadAction<ICategoryAudio[]>
  ): IAudiosState {
    return {
      ...state,
      audiosByCategories: action.payload,
    };
  },
};

export default reducers;
