"use client";

import { Button } from "@heroui/react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FC } from "react";
import FileSaver from "file-saver";

//Redux
import { useAppSelector } from "@/lib/hooks";
import { bookAttachSelector, bookDetailSelector } from "@/lib/book/selectors";

//Components
import { BookInfo } from ".";
import { TableOfContentsIcon } from "./table-of-content/TableOfContentsIcon";
import { PDFIcon, WordIcon } from "@/components/common/Icons";

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
            onPress={downloadPdfAttach}
          >
            <PDFIcon className="w-6 h-6 lg:w-8 lg:h-8" filled />
          </Button>
        )}
        {bookAttach?.wordAttach && (
          <Button
            isIconOnly
            size={isLg ? "lg" : "sm"}
            color="primary"
            variant="flat"
            onPress={downloadWordAttach}
          >
            <WordIcon className="w-6 h-6 lg:w-8 lg:h-8" filled />
          </Button>
        )}
      </div>
    )
  );
};
