//Types
import { IBookAttach, IBookState } from "@/common/interfaces";
import { Book } from "@/grpc/proto/ablibrary/types/book_pb";
import { OCRPage } from "@/grpc/proto/ablibrary/types/ocr_pb";
import { Page } from "@/grpc/proto/ablibrary/types/page_pb";
import { RootState } from "@/lib/index";

export function isOpenTableOfContentSelector(state: RootState): boolean {
  return state.book.isOpenTableOfContent;
}

export function isOpenBookInfoSelector(state: RootState): boolean {
  return state.book.isOpenBookInfo;
}

export function selectedBookSelector(state: RootState): Page[] {
  return state.book.selectedBook;
}

export function selectedOCRBookSelector(state: RootState): OCRPage[] {
  return state.book.selectedOCRBook;
}

export function selectedPDFBookSelector(state: RootState): string[] {
  return state.book.selectedPDFBook;
}

export function bookDetailSelector(state: RootState): Book | undefined {
  return state.book.bookDetail;
}

export function bookAttachSelector(state: RootState): IBookAttach | undefined {
  return state.book.bookAttach;
}

export function scrollToPageSelector(state: RootState): boolean {
  return state.book.scrollToPage;
}

export function isOCRSelector(state: RootState): boolean {
  return state.book.isOCR;
}

export function dimensionPDFPagesSelector(
  state: RootState
): IBookState["dimensionPDFPages"] {
  return state.book.dimensionPDFPages;
}

export function isOpenPDFSelector(state: RootState): boolean {
  return state.book.isOpenPDF;
}
