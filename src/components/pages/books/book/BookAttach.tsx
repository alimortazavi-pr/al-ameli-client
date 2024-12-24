"use client";

import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FC } from "react";
import FileSaver from "file-saver";
import Image from "next/image";

//Assets
import pdfIcon from "@/assets/images/svgs/pdf-svgrepo-com.svg";
import wordIcon from "@/assets/images/svgs/word-file-svgrepo-com.svg";

//Redux
import { useAppSelector } from "@/lib/hooks";
import { bookAttachSelector, bookDetailSelector } from "@/lib/book/selectors";

//Components
import { BookInfo } from ".";
import { TableOfContentsIcon } from "./table-of-content/TableOfContentsIcon";

//Constants
import { BASE_API_URL } from "@/common/constants";

export const BookAttach: FC = ({}) => {
  //Redux
  const bookDetail = useAppSelector(bookDetailSelector);
  const bookAttach = useAppSelector(bookAttachSelector);

  //Responsive
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });

  //States
  const [isClient, setIsClient] = useState(false);

  //Lifecycle
  useEffect(() => {
    setIsClient(true);
  }, []);

  //Functions
  function downloadPdfAttach() {
    FileSaver.saveAs(
      `${BASE_API_URL}${bookAttach?.pdfAttach}`,
      `${bookDetail?.title}`
    );
  }

  function downloadWordAttach() {
    FileSaver.saveAs(
      `${BASE_API_URL}${bookAttach?.wordAttach}`,
      bookDetail?.title
    );
  }

  return (
    isClient && (
      <div className="flex items-center gap-1.5 place-self-end">
        <BookInfo />
        <TableOfContentsIcon />
        {bookAttach?.pdfAttach && (
          <Button
            isIconOnly
            size={isLg ? "lg" : "sm"}
            color="primary"
            variant="flat"
            onClick={downloadPdfAttach}
          >
            <Image
              src={pdfIcon}
              alt="pdf-icon"
              className="w-5 h-5 md:w-7 md:h-7"
            />
          </Button>
        )}
        {bookAttach?.wordAttach && (
          <Button
            isIconOnly
            size={isLg ? "lg" : "sm"}
            color="primary"
            variant="flat"
            onClick={downloadWordAttach}
          >
            <Image
              src={wordIcon}
              alt="pdf-icon"
              className="w-5 h-5 md:w-7 md:h-7"
            />
          </Button>
        )}
      </div>
    )
  );
};
