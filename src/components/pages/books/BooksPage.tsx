"use client";

import { FC, useEffect } from "react";
import { useDisclosure } from "@nextui-org/react";

//Interfaces
import { IBook, IBookAttach, ICategory } from "@/common/interfaces";

//Enums
import { CategoryTypeEnum } from "@/common/enums";

//Redux
import { useAppDispatch } from "@/lib/hooks";
import { setBooks, setBooksAttach } from "@/lib/books/actions";
import { setCategories } from "@/lib/categories/actions";

//Components
import { FilterSectionContainer } from "./FIlterSection";
import { BookDetailModal } from "./BookDetail";
import { BooksItems } from "./BooksItems";

interface IProps {
  books: IBook[];
  booksAttach: IBookAttach[];
}
export const BooksPage: FC<IProps> = ({ books, booksAttach }) => {
  //Redux
  const dispatch = useAppDispatch();

  //NextUI
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  //Lifecycle
  useEffect(() => {
    dispatch(setBooks(books));
    dispatch(setBooksAttach(booksAttach));
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [books]);

  //Functions
  async function getCategories() {
    const categories: ICategory[] = [];
    for (const book of books) {
      for (const category of book.categories) {
        if (!categories.find((c) => c._id === category.id)) {
          categories.push({
            _id: category.id,
            name: category.name,
            parent: "",
            type: CategoryTypeEnum.BOOK,
          });
        }
      }
    }
    dispatch(setCategories(categories));
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-12 mt-5">
      <BooksItems />
      <FilterSectionContainer />
      <BookDetailModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    </div>
  );
};
