"use client";

import { Button, Chip } from "@nextui-org/react";
// import { Document } from "iconsax-react";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

//Interfaces
import { IArticle } from "@/common/interfaces";
import Image from "next/image";
import { BASE_API_URL, PATHS } from "@/common/constants";

interface IProps {
  article: IArticle;
}
export const ArticlesItem: FC<IProps> = ({ article }) => {
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
      <div className="bg-white/90 pt-10 p-5 shadow-lg w-full rounded-xl">
        <div className="flex gap-3 lg:gap-7 mb-5">
          <div className="bg-white shadow rounded-xl min-w-32 h-44 lg:min-w-52 lg:h-72 p-4 lg:p-6">
            <div className="w-full h-full relative">
              <Image
                src={`${BASE_API_URL}${article.thumbnail}`}
                fill
                alt=""
                className="object-cover"
              />
            </div>
          </div>
          <div className="">
            <Link
              href={`${PATHS.ARTICLES}/${article.slug}`}
              className="text-xl lg:text-4xl font-bold break-words"
            >
              {article.title}
            </Link>
            <div className="mb-3 lg:mb-16 text-default-500 lg:text-2xl mb-t lg:mt-7 break-words">
              {article.description}
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <Chip
                className="text-white font-medium"
                size={isLg ? "lg" : "md"}
              >
                {article.category.name}
              </Chip>
              {article.tags?.map((tag, index) => (
                <Chip
                  key={index}
                  className="text-white font-medium"
                  size={isLg ? "lg" : "md"}
                >
                  {tag.tag.name}
                </Chip>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <Button
            size={isLg ? "lg" : "sm"}
            color="primary"
            className="font-semibold lg:text-xl"
            as={Link}
            href={`${PATHS.ARTICLES}/${article.slug}`}
          >
            ﻣﻄﺎﻟﻌﺔ
          </Button>
          {/* <Button
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
          </Button> */}
        </div>
      </div>
    )
  );
};
