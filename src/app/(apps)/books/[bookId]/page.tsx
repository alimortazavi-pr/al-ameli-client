/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";

//gRPC
import { bookServiceClient } from "@/grpc/services/book/book.service";

//Types
import { IBookAttach, IPage } from "@/common/interfaces";
import type { Book } from "@/grpc/proto/ablibrary/types/book_pb";

//Components
import { BookPage } from "@/components/pages/books/book";
import { axiosInstance } from "@/common/axiosInstance";
import { ContentsResponse_ABXPages } from "@/grpc/proto/ablibrary/services/book_service/book_service_pb";

//Constants

async function getBook({ params }: IProps) {
  let book: IPage[] = [];
  let bookDetail: Book | undefined = undefined;
  let bookAttach: IBookAttach | undefined = undefined;

  try {
    const { content } = await bookServiceClient.contents({
      bookId: params.bookId,
    });
    const { book: bookDetailResult } = await bookServiceClient.details({
      id: params.bookId,
    });

    book = (
      content as {
        value: ContentsResponse_ABXPages;
        case: "abx";
      }
    ).value.pages as IPage[];
    bookDetail = bookDetailResult;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
  }

  try {
    const bookAttachRes = await axiosInstance.get(`/books/${params.bookId}`);
    bookAttach = bookAttachRes.data.book;
  } catch (error: any) {
    console.log(error);
    bookAttach = undefined;
  }

  return {
    book: book,
    bookDetail: bookDetail,
    bookAttach: bookAttach,
  };
}

interface IProps {
  params: { bookId: string };
}
const Book: FC<IProps> = async ({ params }) => {
  //Fetch Data
  const { book, bookDetail, bookAttach } = await getBook({ params });

  return (
    <BookPage
      book={JSON.parse(JSON.stringify(book)) || []}
      bookDetail={JSON.parse(JSON.stringify(bookDetail)) || undefined}
      bookAttach={bookAttach}
    />
  );
};

export default Book;
