"use client";

import { FC, useEffect, useState } from "react";

//Interfaces
import { IPage } from "@/common/interfaces";

//Redux
import { useAppDispatch } from "@/lib/hooks";
import { setSelectedBook } from "@/lib/book/actions";

//Components
import { BookDesktop } from "./desktop";
import { BookMobile } from "./mobile";

//Responsive
import { useMediaQuery } from "react-responsive";

interface IProps {
  book : IPage[]
}
export const BookPage: FC<IProps> = ({
  book
}) => {
  //Redux
  const dispatch = useAppDispatch();

  //States
  const [isClient, setIsClient] = useState(false);

  //Responsive
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 905px)",
  });

  //Life cycle
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    dispatch(setSelectedBook(book));
  }, [book]);

  return isClient ? (
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
  );
};
