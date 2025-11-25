/* eslint-disable @typescript-eslint/no-explicit-any */
//Types
import { PayloadAction } from "@reduxjs/toolkit";
import { IBookAttach, IBookState, IPage } from "@/common/interfaces";
import { Book } from "@/grpc/proto/ablibrary/types/book_pb";
import { OCRPage } from "@/grpc/proto/ablibrary/types/ocr_pb";

const reducers = {
  setIsOpenTableOfContent(
    state: any,
    action: PayloadAction<boolean>
  ): IBookState {
    return {
      ...state,
      isOpenTableOfContent: action.payload,
      isOpenBookInfo: false,
      isOpenFind: false,
      isOpenFontSetting: false,
    };
  },
  setIsOpenBookInfo(state: any, action: PayloadAction<boolean>): IBookState {
    return {
      ...state,
      isOpenBookInfo: action.payload,
      isOpenTableOfContent: false,
      isOpenFind: false,
      isOpenFontSetting: false,
    };
  },
  setSelectedBook(state: any, action: PayloadAction<IPage[]>): IBookState {
    return {
      ...state,
      selectedBook: action.payload,
    };
  },
  setSelectedOCRBook(state: any, action: PayloadAction<OCRPage[]>): IBookState {
    return {
      ...state,
      selectedOCRBook: action.payload,
    };
  },
  setSelectedPDFBook(state: any, action: PayloadAction<string[]>): IBookState {
    return {
      ...state,
      selectedPDFBook: action.payload,
    };
  },
  setBookDetail(
    state: any,
    action: PayloadAction<Book | undefined>
  ): IBookState {
    return {
      ...state,
      bookDetail: action.payload,
    };
  },
  setBookAttach(state: any, action: PayloadAction<IBookAttach>): IBookState {
    return {
      ...state,
      bookAttach: action.payload,
    };
  },
  setScrollToPage(state: any, action: PayloadAction<boolean>): IBookState {
    return {
      ...state,
      scrollToPage: action.payload,
    };
  },
  setIsOCR(state: any, action: PayloadAction<boolean>): IBookState {
    return {
      ...state,
      isOCR: action.payload,
    };
  },
  setIsOpenPDF(state: any, action: PayloadAction<boolean>): IBookState {
    return {
      ...state,
      isOpenPDF: action.payload,
    };
  },
  setDimensionPDFPages(
    state: any,
    action: PayloadAction<IBookState["dimensionPDFPages"]>
  ): IBookState {
    return {
      ...state,
      dimensionPDFPages: action.payload,
    };
  },
};

export default reducers;
