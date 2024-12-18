import { FC } from "react";

//gRPC
import { bookServiceClient } from "@/grpc/services/book/book.service";

//Types
import { IPage } from "@/common/interfaces";

//Components
import { BookPage } from "@/components/pages/books/book";

//Constants

async function getBook({ params }: IProps) {
  let book: IPage[] = [];

  try {
    const { pages } = await bookServiceClient.contents({
      bookId: params.bookId,
    });

    book = pages;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
  }

  return {
    book: book,
  };
}

interface IProps {
  params: { bookId: string };
}
const Book: FC<IProps> = async ({ params }) => {
  //Fetch Data
  const { book } = await getBook({ params });

  return <BookPage book={JSON.parse(JSON.stringify(book)) || []} />;
};

export default Book;
