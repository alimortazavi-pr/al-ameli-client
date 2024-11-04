//Types
import { IDocumentsState, IDocument } from "@/common/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

//Tools

const reducers = {
  setDocuments(
    state: IDocumentsState,
    action: PayloadAction<IDocument[]>
  ): IDocumentsState {
    return {
      ...state,
      documents: action.payload,
    };
  },
};

export default reducers;
