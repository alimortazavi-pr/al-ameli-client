"use client";
import { FC } from "react";

//Interface
import { IArticle } from "@/common/interfaces";

//Components
import {
  ArticleAttach,
  ArticleCategoriesAndTags,
  ArticleContent,
  ArticleTitle,
} from ".";

interface IProps {
  article: IArticle | undefined;
}
export const ArticlePage: FC<IProps> = ({ article }) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-12 py-5">
      <div className="bg-background w-full min-h-fit z-20 rounded-xl shadow p-3 lg:py-6 lg:px-8">
        <div className="flex flex-col flex-wrap gap-2 lg:gap-4 mb-10">
          <ArticleTitle article={article} />
          <div className="flex gap-2 lg:gap-4 justify-end flex-1">
            <ArticleCategoriesAndTags article={article} />
            <ArticleAttach article={article} />
          </div>
        </div>
        <ArticleContent article={article} />
      </div>
    </div>
  );
};
