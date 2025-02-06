"use client";

import { Button, Chip } from "@heroui/react";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

//Interfaces
import { IArticle } from "@/common/interfaces";
import Image from "next/image";
import { SERVER_BASE_API_URL, PATHS } from "@/common/constants";

interface IProps {
  article: IArticle;
}
export const ArticlesItem: FC<IProps> = ({ article }) => {
  //Responsive
  const isMd = useMediaQuery({ query: "(min-width: 768px)" });

  //States
  const [isClient, setIsClient] = useState(false);

  //Lifecycle
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div className="bg-white/90 pt-10 p-5 shadow-lg w-full rounded-xl">
        <div className="flex flex-col md:flex-row gap-3 md:gap-7 mb-5">
          <div className="bg-white shadow rounded-xl w-32 h-44 self-center md:min-w-52 md:h-72 p-4 md:p-6">
            <div className="w-full h-full relative">
              <Image
                src={`${SERVER_BASE_API_URL}${article.thumbnail}`}
                fill
                alt=""
                className="object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="">
            <Link
              href={`${PATHS.ARTICLE(article.slug)}`}
              className="text-xl md:text-4xl font-bold break-words"
            >
              {article.title}
            </Link>
            <div className="mb-3 md:mb-16 text-default-500 md:text-2xl mb-t md:mt-7 break-words">
              {article.description}
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <Chip
                className="text-white font-medium"
                size={isMd ? "lg" : "md"}
              >
                {article.category.name}
              </Chip>
              {article.tags?.map((tag, index) => (
                <Chip
                  key={index}
                  className="text-white font-medium"
                  size={isMd ? "lg" : "md"}
                >
                  {tag.tag.name}
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
            href={`${PATHS.ARTICLE(article.slug)}`}
          >
            ﻣﻄﺎﻟﻌﺔ
          </Button>
        </div>
      </div>
    )
  );
};
