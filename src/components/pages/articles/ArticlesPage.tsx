"use client";

import { FC, useEffect } from "react";

//Interfaces
import { IArticle, ICategory, ITag } from "@/common/interfaces";

//Redux
import { useAppDispatch } from "@/lib/hooks";
import { setArticles } from "@/lib/articles/actions";
import { setCategories } from "@/lib/categories/actions";
import { setTags } from "@/lib/tags/actions";
import { setPageTitle } from "@/lib/layouts/actions";

//Components
import { ArticlesItems } from ".";
import { FilterSectionContainer } from "./FIlterSection";

interface IProps {
  articles: IArticle[];
  tags: ITag[];
  categories: ICategory[];
}
export const ArticlesPage: FC<IProps> = ({ articles, categories, tags }) => {
  //Redux
  const dispatch = useAppDispatch();

  //Lifecycle
  useEffect(()=>{
    dispatch(setPageTitle('مقالات'))
  },[])

  useEffect(() => {
    dispatch(setArticles(articles));
    dispatch(setCategories(categories));
    dispatch(setTags(tags));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articles]);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-12 mt-5">
      <ArticlesItems />
      <FilterSectionContainer />
    </div>
  );
};
