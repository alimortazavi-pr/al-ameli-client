import { useEffect } from "react";
import { useParams } from "next/navigation";

//Redux
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectedBookSelector } from "@/lib/book/selectors";
import {
  setBookDetail,
  setDimensionPDFPages,
  setIsOCR,
  setSelectedBook,
  setSelectedPDFBook,
} from "@/lib/book/actions";

//Components
import { PagesList } from ".";

//Hooks
import { useGetBookClient } from "@/hooks/react-query/book/book-client";

export const ContentContainer = () => {
  //Redux
  const dispatch = useAppDispatch();
  const selectedBook = useAppSelector(selectedBookSelector);

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
        // Set dimension based on first page
        const firstPage = pages[0];
        const img = new Image();
        const url = new URL(firstPage);
        url?.searchParams.set("dpi", "1");
        img.src = url.toString();
        img.onload = () => {
          dispatch(
            setDimensionPDFPages({
              width: img.naturalWidth,
              height: img.naturalHeight,
              aspectRatio: parseFloat(
                (img.naturalWidth / img.naturalHeight).toFixed(1)
              ),
            })
          );
        };

        dispatch(setSelectedPDFBook(pages));
      }
    }
  }, [bookDataAndBookDetail, params.bookId]);

  //Functions

  return (
    <div className={`md:rounded-b-lg h-fit`}>
      <PagesList pages={selectedBook || []} />
    </div>
  );
};
