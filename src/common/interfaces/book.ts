//gRPC types
import { Book } from "@/grpc/proto/ablibrary/types/book_pb";
import {
  PageContent,
  PageContentFootnote,
  PageContentHeading,
  PageContentHorizontalLine,
  PageContentImage,
  PageContentLineBreak,
  PageContentParagraph,
  PageContentPoem,
  PageContentRef,
  PageContentReference,
  PageContentRemark,
  PageContentTable,
  PageContentTableCell,
  PageContentTableRow,
  PageContentText,
} from "@/grpc/proto/ablibrary/types/page_content_pb";
import { Page } from "@/grpc/proto/ablibrary/types/page_pb";
import { IBookAttach } from "./books";
import { OCRPage } from "@/grpc/proto/ablibrary/types/ocr_pb";

export interface IBookState {
  isOpenTableOfContent: boolean;
  isOpenBookInfo: boolean;
  isOpenPDF: boolean;
  selectedBook: Page[];
  selectedOCRBook: OCRPage[];
  selectedPDFBook: string[];
  bookDetail: Book | undefined;
  bookAttach: IBookAttach | undefined;
  scrollToPage: boolean;
  isOCR: boolean;
  dimensionPDFPages: {
    width: number;
    height: number;
    aspectRatio: number;
  };
}

export interface IBookRequest {
  bookId: string;
  page?: number[];
}

export interface IBookDetailRequest {
  bookId: string;
}

export interface ITableOfContentsRequest {
  bookId: string;
}

export interface IPage extends Page {
  contents: IPageContent[];
}

export interface IPageContent extends PageContent {
  children: IPageContent[];
  text?: PageContentText;
  paragraph?: PageContentParagraph;
  heading?: PageContentHeading;
  footnote?: PageContentFootnote;
  table?: PageContentTable;
  tableRow?: PageContentTableRow;
  tableCell?: PageContentTableCell;
  image?: PageContentImage;
  horizontalLine?: PageContentHorizontalLine;
  lineBreak?: PageContentLineBreak;
  ref?: PageContentReference;
  poem?: PageContentPoem;
  remark?: PageContentRemark;
}

export interface IPageContentRef extends PageContentRef {
  nextPageNumber: number;
  children: IPageContentRef[];
}
