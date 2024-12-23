import { FC } from "react";

//gRPC
import { bookServiceClient } from "@/grpc/services/book/book.service";

//Types
import { IBook, IPage } from "@/common/interfaces";

//Components
import { BookPage } from "@/components/pages/books/book";

//Constants

async function getBook({ params }: IProps) {
  let book: IPage[] = [];
  let bookDetail: IBook | undefined = undefined;

  try {
    const { pages } = await bookServiceClient.contents({
      bookId: params.bookId,
    });
    const { book: bookDetailResult } = await bookServiceClient.details({
      id: params.bookId,
    });

    book = pages;
    bookDetail = bookDetailResult;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
  }

  return {
    book: book,
    bookDetail: bookDetail,
  };
}

interface IProps {
  params: { bookId: string };
}
const Book: FC<IProps> = async ({ params }) => {
  //Fetch Data
  const { book, bookDetail } = await getBook({ params });

  return (
    <BookPage
      book={JSON.parse(JSON.stringify(book)) || []}
      bookDetail={JSON.parse(JSON.stringify(bookDetail)) || undefined}
    />
  );
};

export default Book;
