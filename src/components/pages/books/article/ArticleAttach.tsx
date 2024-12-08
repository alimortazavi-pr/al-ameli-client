"use client";

import { Button } from "@nextui-org/react";
import { Document } from "iconsax-react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FC } from "react";

//Interface
import { IArticle } from "@/common/interfaces";

interface IProps {
  article: IArticle | undefined;
}
export const ArticleAttach: FC<IProps> = ({}) => {
  //Responsive
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });

  //States
  const [isClient, setIsClient] = useState(false);

  //Lifecycle
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div className="flex items-center gap-1.5">
        <Button
          isIconOnly
          size={isLg ? "lg" : "sm"}
          color="primary"
          variant="flat"
        >
          <Document className="w-5 h-5 lg:w-7 lg:h-7" />
        </Button>
        <Button
          isIconOnly
          size={isLg ? "lg" : "sm"}
          color="primary"
          variant="flat"
        >
          <Document className="w-5 h-5 lg:w-7 lg:h-7" />
        </Button>
      </div>
    )
  );
};
