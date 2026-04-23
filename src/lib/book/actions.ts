import { AppThunk } from "@/lib";

//gRPC
import { OCRPage } from "@/grpc/proto/ablibrary/types/ocr_pb";
import { fromBinary, toBinary } from "@bufbuild/protobuf";
import { ContentsResponseSchema } from "@/grpc/proto/ablibrary/services/book_service/book_service_pb";
import { bookServiceClientWeb } from "@/grpc/services/book/book-web.service";

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
  setSelectedPage
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

export function getSingleOCRAction(
  bookId: string,
  pageNumber: number,
): AppThunk {
  return async (dispatch, getState) => {
    try {
      const res = await bookServiceClientWeb.contents({
        bookId: bookId,
        pageNumbers: [pageNumber],
      });
      const bookDataJson = await fromBinary(
        ContentsResponseSchema,
        toBinary(ContentsResponseSchema, res),
      );
      const pages = bookDataJson.content.value?.pages as OCRPage[];
      dispatch(
        setSelectedOCRBook([...getState().book.selectedOCRBook, ...pages]),
      );
    } catch (error) {
      console.log(error);
    }
  };
}
