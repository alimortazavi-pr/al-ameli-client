'use client'

import { FC, useEffect } from "react";

//Interfaces
import { IArticle } from "@/common/interfaces";

//Redux
import { useAppDispatch } from "@/lib/hooks";
import { setArticles } from "@/lib/articles/actions";

//Components
import { ArticlesItems } from ".";
import { FilterSectionContainer } from "./FIlterSection";

interface IProps {
  articles: IArticle[];
}
export const ArticlesPage: FC<IProps> = ({ articles }) => {
  //Redux
  const dispatch = useAppDispatch();

  //Lifecycle
  useEffect(() => {
    dispatch(setArticles(articles));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articles]);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-12 mt-5">
      <ArticlesItems />
      <FilterSectionContainer />
    </div>
  );
};
