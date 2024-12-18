"use client";

import useQuery from "next-app-use-query";

//Redux
import { useAppSelector } from "@/lib/hooks";
import { booksAttachSelector, booksSelector } from "@/lib/books/selectors";

//Components
import { BooksItem } from ".";

export const BooksItems = () => {
  //Redux
  const books = useAppSelector(booksSelector);
  const booksAttach = useAppSelector(booksAttachSelector);

  //Other hooks
  const query = useQuery();

  return (
    <div className="flex flex-col gap-3 mb-3 w-full lg:w-8/12">
      {books?.map((book) => {
        if (
          query.get("category") &&
          !book.categories.find(
            (category) => category.id === query.get("category")
          )
        ) {
          return null;
        }
        return (
          <BooksItem
            key={book.id}
            book={book}
            bookAttach={booksAttach.find(
              (bookAttach) => bookAttach.bookId === book.id
            )}
          />
        );
      })}
    </div>
  );
};
