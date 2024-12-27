/* eslint-disable @typescript-eslint/no-explicit-any */
//Types
import { PayloadAction } from "@reduxjs/toolkit";
import { IBookAttach, IBookState, IPage } from "@/common/interfaces";
import { Book } from "@/grpc/proto/ablibrary/types/book_pb";

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
};

export default reducers;
