"use client";

import { Button } from "@heroui/react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FC } from "react";

//Interfaces
import { IArticle } from "@/common/interfaces";

//Components
import { PDFIcon } from "@/components/common/Icons";
import FileSaver from "file-saver";
import { BASE_API_URL } from "@/common/constants";

interface IProps {
  article: IArticle | undefined;
}
export const ArticleAttach: FC<IProps> = ({ article }) => {
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
      `${BASE_API_URL}${article?.pdfAttach}`,
      `${article?.title}.${article?.pdfAttach?.split(".").pop()}`
    );
  }

  return (
    isClient &&
    article?.pdfAttach && (
      <div className="flex items-center gap-1.5">
        <Button
          isIconOnly
          size={isLg ? "lg" : "sm"}
          color="primary"
          variant="flat"
          onPress={downloadPdfAttach}
        >
          <PDFIcon className="w-6 h-6 lg:w-8 lg:h-8" filled />
        </Button>
      </div>
    )
  );
};
