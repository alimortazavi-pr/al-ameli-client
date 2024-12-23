"use client";

import { Button } from "@nextui-org/react";
import { Document } from "iconsax-react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FC } from "react";

//Components
import { BookInfo } from ".";
import { TableOfContentsIcon } from "./table-of-content/TableOfContentsIcon";

export const BookAttach: FC = ({}) => {
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
      <div className="flex items-center gap-1.5 place-self-end">
        <BookInfo />
        <TableOfContentsIcon />
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
