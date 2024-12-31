"use client";

import { Button, Chip } from "@nextui-org/react";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import FileSaver from "file-saver";

//Interfaces
import { IBook, IBookAttach } from "@/common/interfaces";

//Assets
import pdfIcon from "@/assets/images/svgs/pdf-svgrepo-com.svg";
import wordIcon from "@/assets/images/svgs/word-file-svgrepo-com.svg";

//Constants
import { SERVER_BASE_API_URL, PATHS } from "@/common/constants";

interface IProps {
  book: IBook;
  bookAttach: IBookAttach | undefined;
}
export const BooksItem: FC<IProps> = ({ book, bookAttach }) => {
  //Responsive
  const isMd = useMediaQuery({ query: "(min-width: 768px)" });

  //States
  const [isClient, setIsClient] = useState(false);

  //Lifecycle
  useEffect(() => {
    setIsClient(true);
  }, []);

  //Functions
  function downloadPdfAttach() {
    FileSaver.saveAs(`${SERVER_BASE_API_URL}${bookAttach?.pdfAttach}`, book.title);
  }

  function downloadWordAttach() {
    FileSaver.saveAs(`${SERVER_BASE_API_URL}${bookAttach?.wordAttach}`, book.title);
  }

  return (
    isClient && (
      <div className="bg-white/90 md:pt-10 p-5 shadow-lg w-full rounded-xl">
        <div className="flex flex-col md:flex-row gap-3 md:gap-7 mb-5">
          <div className="bg-white shadow rounded-xl w-32 h-44 self-center md:min-w-52 md:h-72 p-4 md:p-6">
            <div className="w-full h-full relative">
              {bookAttach?.thumbnail ? (
                <Image
                  src={`${SERVER_BASE_API_URL}${bookAttach.thumbnail}`}
                  fill
                  alt=""
                  className="object-cover rounded-xl"
                />
              ) : (
                <div className="w-full h-full bg-secondary-50 rounded-xl absolute start-0 top-0"></div>
              )}
            </div>
          </div>
          <div className="">
            <Link
              href={`${PATHS.BOOK(book.id)}`}
              className="text-xl md:text-4xl font-bold break-words"
            >
              {book.title}
            </Link>
            <div className="mb-3 md:mb-16 text-default-500 md:text-2xl mb-t md:mt-7 break-words">
              {book.contributors
                ?.map(
                  (contributor) =>
                    contributor.displayName ?? contributor.contributor?.name
                )
                .join(" / ")}
            </div>
            <div className="flex flex-wrap items-center gap-1">
              {book.categories?.map((category) => (
                <Chip
                  key={category.id}
                  className="text-white font-medium"
                  size={isMd ? "lg" : "md"}
                >
                  {category.name}
                </Chip>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <Button
            size={isMd ? "lg" : "sm"}
            color="primary"
            className="font-semibold md:text-xl"
            as={Link}
            href={`${PATHS.BOOK(book.id)}`}
          >
            ﻣﻄﺎﻟﻌﺔ
          </Button>
          {bookAttach?.pdfAttach && (
            <Button
              isIconOnly
              size={isMd ? "lg" : "sm"}
              color="primary"
              variant="flat"
              onClick={downloadPdfAttach}
            >
              <Image
                src={pdfIcon}
                alt="pdf-icon"
                className="w-5 h-5 md:w-8 md:h-8"
              />
            </Button>
          )}
          {bookAttach?.wordAttach && (
            <Button
              isIconOnly
              size={isMd ? "lg" : "sm"}
              color="primary"
              variant="flat"
              onClick={downloadWordAttach}
            >
              <Image
                src={wordIcon}
                alt="word-icon"
                className="w-5 h-5 md:w-8 md:h-8"
              />
            </Button>
          )}
        </div>
      </div>
    )
  );
};
