import { useQuery } from "@tanstack/react-query";

//gRPC
import { bookServiceClientWeb } from "@/grpc/services/book/book-web.service";
import { ContentsResponseSchema } from "@/grpc/proto/ablibrary/services/book_service/book_service_pb";
import { Book, BookSource } from "@/grpc/proto/ablibrary/types/book_pb";
import { Page } from "@/grpc/proto/ablibrary/types/page_pb";
import { fromBinary, toBinary } from "@bufbuild/protobuf";

//Types
import { IBookRequest, IPage } from "@/common/interfaces";

export const useGetBookClient = ({
  queryData,
}: {
  queryData: IBookRequest;
}) => {
  //Variables
  const { bookId } = queryData;

  return useQuery({
    queryKey: [
      "selected-book",
      JSON.stringify({
        bookId: bookId,
      }),
    ],
    queryFn: async () => {
      //TODO: Check Book update

      let bookData: IPage[] | undefined = undefined;
      let bookDetail: Book | undefined = undefined;
      let pdfPages: { [key: number]: string } | undefined = undefined;

      const resDetail = await bookServiceClientWeb.details({
        id: bookId,
      });

      if (resDetail.book?.source == BookSource.ABX) {
        const res = await bookServiceClientWeb.contents({
          bookId: bookId,
        });
        const bookDataJson = await fromBinary(
          ContentsResponseSchema,
          new Uint8Array(toBinary(ContentsResponseSchema, res))
        );

        bookData = bookDataJson.content.value?.pages as Page[];
      } else if (resDetail.book?.source == BookSource.OCR) {
        const resPDF = await bookServiceClientWeb.pDFPages({
          bookId: bookId,
          pageNumbers: [],
        });

        pdfPages = resPDF.pages;
      }

      bookDetail = resDetail.book;

      return {
        responseBook: bookData,
        responseDetail: bookDetail,
        responsePDF: pdfPages,
      };
    },
  });
};
