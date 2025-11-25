import { AppThunk } from "@/lib";

//gRPC
// import { BookServiceClientSide } from "@/grpc/services/book/book.service";

//Actions of other reducers

//Reducer
import { bookReducer } from ".";

//Actions from reducer
export const {
  setIsOpenTableOfContent,
  setIsOpenBookInfo,
  setSelectedBook,
  setBookDetail,
  setBookAttach,
  setScrollToPage,
  setDimensionPDFPages,
  setIsOCR,
  setIsOpenPDF,
  setSelectedOCRBook,
  setSelectedPDFBook,
} = bookReducer.actions;

//Interfaces

//Tools

//Actions from actions
export function toggleTableOfContentAction(): AppThunk {
  return async (dispatch, getState) => {
    try {
      dispatch(setIsOpenTableOfContent(!getState().book.isOpenTableOfContent));
    } catch (error) {
      console.log(error);
    }
  };
}

export function toggleBookInfoAction(): AppThunk {
  return async (dispatch, getState) => {
    try {
      dispatch(setIsOpenBookInfo(!getState().book.isOpenBookInfo));
    } catch (error) {
      console.log(error);
    }
  };
}
