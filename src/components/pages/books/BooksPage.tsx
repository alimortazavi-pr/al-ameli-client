"use client";

import { FC, useEffect } from "react";

//Interfaces
import { IBook, ICategory, ITag } from "@/common/interfaces";

//Redux
import { useAppDispatch } from "@/lib/hooks";
import { setBooks } from "@/lib/books/actions";
import { setCategories } from "@/lib/categories/actions";
import { setTags } from "@/lib/tags/actions";

//Components
// import { FilterSectionContainer } from "./FIlterSection";

interface IProps {
  books: IBook[];
  tags: ITag[];
  categories: ICategory[];
}
export const BooksPage: FC<IProps> = ({ books, categories, tags }) => {
  //Redux
  const dispatch = useAppDispatch();

  //Lifecycle
  useEffect(() => {
    dispatch(setBooks(books));
    dispatch(setCategories(categories));
    dispatch(setTags(tags));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [books]);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-12 mt-5">
      {/* <FilterSectionContainer /> */}
    </div>
  );
};
