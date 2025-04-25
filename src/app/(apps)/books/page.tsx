import { FC } from "react";

//gRPC
import { bookServiceClient } from "@/grpc/services/book/book.service";
import { ListRequest_Sort } from "@/grpc/proto/ablibrary/services/book_service/book_service_pb";

//Types
import { IBook, IBookAttach } from "@/common/interfaces";
import { SortDirection } from "@/grpc/proto/ablibrary/types/common_pb";

//Components
import { BooksPage } from "@/components/pages/books";

//Constants
import { axiosInstance } from "@/common/axiosInstance";

async function getBooks({ searchParams }: IProps) {
  let books: IBook[] = [];
  let booksAttach: IBookAttach[] = [];

  try {
    const { books: booksResult } = await bookServiceClient.list({
      page: 1,
      perPage: 250,
      sortBy: searchParams["sort-by"]
        ? parseInt(searchParams["sort-by"].toString())
        : ListRequest_Sort.CONTRIBUTOR_DIED_AT,
      sortDir: searchParams["sort-dir"]
        ? parseInt(searchParams["sort-dir"].toString())
        : SortDirection.DESCENDING,
      contributors: [
        {
          name: "الشيخ علي الكوراني العاملي",
        },
      ],
      query: searchParams.query ? searchParams.query : "",
    });
    const booksAttachResult = await axiosInstance.get("/books");

    books = booksResult;
    booksAttach = booksAttachResult.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
  }

  return {
    books: books,
    booksAttach: booksAttach,
  };
}
export const dynamic = "force-dynamic";

interface IProps {
  searchParams: {
    "sort-by": ListRequest_Sort | undefined;
    "sort-dir": SortDirection | undefined;
    query?: string;
  };
}
const Home: FC<IProps> = async ({ searchParams }) => {
  //Fetch Data
  const { books, booksAttach } = await getBooks({ searchParams });

  return (
    <BooksPage
      books={JSON.parse(JSON.stringify(books)) || []}
      booksAttach={booksAttach || []}
    />
  );
};

export default Home;
