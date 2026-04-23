import { useEffect } from "react";
import { useParams } from "next/navigation";

//Redux
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  selectedBookSelector,
  selectedPDFBookSelector,
} from "@/lib/book/selectors";
import {
  setBookDetail,
  setIsOCR,
  setSelectedBook,
  setSelectedPDFBook,
} from "@/lib/book/actions";

//Components
import { PagesList } from ".";
import { PagesList as PagesListOCR } from "./ocr";

//Hooks
import { useGetBookClient } from "@/hooks/react-query/book/book-client";

export const ContentContainer = () => {
  //Redux
  const dispatch = useAppDispatch();
  const selectedBook = useAppSelector(selectedBookSelector);
  const selectedPDFBook = useAppSelector(selectedPDFBookSelector);

  //Next
  const params = useParams();

  //RQ
  const { data: bookDataAndBookDetail } = useGetBookClient({
    queryData: {
      bookId: params.bookId as string,
    },
  });

  //Effects
  useEffect(() => {
    if (bookDataAndBookDetail?.responseDetail) {
      dispatch(setBookDetail(bookDataAndBookDetail.responseDetail));
      if (bookDataAndBookDetail?.responseBook) {
        dispatch(setSelectedBook(bookDataAndBookDetail.responseBook));
      } else if (bookDataAndBookDetail.responsePDF) {
        const pages = Object.values(bookDataAndBookDetail.responsePDF);
        dispatch(setIsOCR(true));
        dispatch(setSelectedPDFBook(pages));
      }
    }
  }, [bookDataAndBookDetail, params.bookId]);

  if (selectedBook.length !== 0) {
    return (
      <div className={`md:rounded-b-lg h-fit`}>
        <PagesList pages={selectedBook || []} />
      </div>
    );
  } else if (selectedPDFBook.length !== 0) {
    return <div className={`md:rounded-b-lg h-fit`}>
      <PagesListOCR pages={selectedPDFBook} />
    </div>;
  }
};
