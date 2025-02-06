"use client";

import { FC, useEffect } from "react";
import { useDisclosure } from "@heroui/react";

//Interfaces
import { IBook, IBookAttach, IPage } from "@/common/interfaces";

//Redux
import { useAppDispatch } from "@/lib/hooks";
import {
  setBookAttach,
  setBookDetail,
  setSelectedBook,
} from "@/lib/book/actions";

//Components
import { BookDetailModal } from "./book-detail";
import { BookAttach, BookCategories, BookTitle } from ".";
import { ContentContainer } from "./content";

//Responsive

interface IProps {
  book: IPage[];
  bookDetail: IBook | undefined;
  bookAttach: IBookAttach | undefined;
}
export const BookPage: FC<IProps> = ({ book, bookDetail, bookAttach }) => {
  //Redux
  const dispatch = useAppDispatch();

  //States

  //Responsive

  //NextUI
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  //Life cycle
  useEffect(() => {
    dispatch(setSelectedBook(book));
  }, [book]);

  useEffect(() => {
    dispatch(setBookDetail(bookDetail));
  }, [bookDetail]);

  useEffect(() => {
    if (bookAttach) {
      dispatch(setBookAttach(bookAttach));
    }
  }, [bookAttach]);

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-12 py-5">
        <div className="bg-background w-full min-h-fit z-20 rounded-xl shadow p-3 lg:py-6 lg:px-8">
          <div className="flex flex-col gap-2 lg:gap-4 mb-10">
            <BookTitle />
            <div className="flex justify-between items-end lg:items-center flex-1 flex-wrap gap-2">
              <BookCategories />
              <BookAttach />
            </div>
          </div>
          {/* <BookContent /> */}
          <ContentContainer />
        </div>
      </div>
      <BookDetailModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    </>
  );
};
