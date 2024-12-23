"use client";

import { FC, useEffect, useState } from "react";
import { useDisclosure } from "@nextui-org/react";

//Interfaces
import { IBook, IPage } from "@/common/interfaces";

//Redux
import { useAppDispatch } from "@/lib/hooks";
import { setBookDetail, setSelectedBook } from "@/lib/book/actions";

//Components
import { BookDesktop } from "./desktop";
import { BookMobile } from "./mobile";
import { BookDetailModal } from "./book-detail";

//Responsive
import { useMediaQuery } from "react-responsive";

interface IProps {
  book: IPage[];
  bookDetail: IBook | undefined;
}
export const BookPage: FC<IProps> = ({ book, bookDetail }) => {
  //Redux
  const dispatch = useAppDispatch();

  //States
  const [isClient, setIsClient] = useState(false);

  //Responsive
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 905px)",
  });

  //NextUI
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  //Life cycle
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    dispatch(setSelectedBook(book));
  }, [book]);

  useEffect(() => {
    dispatch(setBookDetail(bookDetail));
  }, [bookDetail]);

  return (
    <>
      {isClient ? (
        isDesktopOrLaptop ? (
          <BookDesktop />
        ) : (
          <BookMobile />
        )
      ) : (
        <div className="hidden">
          <BookDesktop />
          <BookMobile />
        </div>
      )}
      <BookDetailModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    </>
  );
};
