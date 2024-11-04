"use client";

import { Chip } from "@nextui-org/react";
import { FC, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

//Interface
import { IDocument } from "@/common/interfaces";

interface IProps {
  document: IDocument | undefined;
}
export const DocumentTags: FC<IProps> = ({ document }) => {
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
      <div className="flex flex-wrap items-center gap-1.5">
        {document?.tags?.map((tag) => (
          <Chip
            key={tag.tag._id}
            className="text-white font-medium"
            size={isLg ? "lg" : "md"}
          >
            {tag.tag.name}
          </Chip>
        ))}
      </div>
    )
  );
};
