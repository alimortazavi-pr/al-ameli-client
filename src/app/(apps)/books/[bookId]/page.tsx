/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";

//Types
import { IBookAttach } from "@/common/interfaces";
import type { Book } from "@/grpc/proto/ablibrary/types/book_pb";

//Components
import { BookPage } from "@/components/pages/books/book";

//Common
import { axiosInstance } from "@/common/axiosInstance";

async function getBook({ params }: IProps) {
  let bookAttach: IBookAttach | undefined = undefined;

  try {
    const bookAttachRes = await axiosInstance.get(`/books/${params.bookId}`);
    bookAttach = bookAttachRes.data.book;
  } catch (error: any) {
    console.log(error);
    bookAttach = undefined;
  }

  return {
    bookAttach: bookAttach,
  };
}

interface IProps {
  params: { bookId: string };
}
const Book: FC<IProps> = async ({ params }) => {
  //Fetch Data
  const { bookAttach } = await getBook({ params });

  return <BookPage bookAttach={bookAttach} />;
};

export default Book;
