"use client";

import { FC, useEffect } from "react";
import { useDisclosure } from "@nextui-org/react";

//Interfaces
import { IBook, ICategory, ITag } from "@/common/interfaces";

//Redux
import { useAppDispatch } from "@/lib/hooks";
import { setBooks } from "@/lib/books/actions";
import { setCategories } from "@/lib/categories/actions";
import { setTags } from "@/lib/tags/actions";

//Components
// import { FilterSectionContainer } from "./FIlterSection";
import { BookListContainer } from "./BookList";
import { BookDetailModal } from "./BookDetail";

interface IProps {
  books: IBook[];
  tags: ITag[];
  categories: ICategory[];
}
export const BooksPage: FC<IProps> = ({ books, categories, tags }) => {
  //Redux
  const dispatch = useAppDispatch();

  //NextUI
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  //Lifecycle
  useEffect(() => {
    dispatch(setBooks(books));
    dispatch(setCategories(categories));
    dispatch(setTags(tags));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [books]);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-12 mt-5">
      <BookListContainer />
      {/* <FilterSectionContainer /> */}
      <BookDetailModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    </div>
  );
};
