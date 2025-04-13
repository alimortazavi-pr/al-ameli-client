"use client";

import { Chip } from "@heroui/react";
import { FC, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

//Interface
import { IArticle } from "@/common/interfaces";

interface IProps {
  article: IArticle | undefined;
}
export const ArticleCategoriesAndTags: FC<IProps> = ({ article }) => {
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
        <Chip className="font-medium" size={isLg ? "lg" : "md"}>
          {article?.category.name}
        </Chip>
        {article?.tags?.map((tag) => (
          <Chip
            key={tag.tag._id}
            className="font-medium"
            size={isLg ? "lg" : "md"}
          >
            {tag.tag.name}
          </Chip>
        ))}
      </div>
    )
  );
};
