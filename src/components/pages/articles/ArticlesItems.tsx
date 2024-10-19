'use client'

//Redux
import { useAppSelector } from "@/lib/hooks";
import { articlesSelector } from "@/lib/articles/selectors";

//Components
import { ArticlesItem } from ".";

export const ArticlesItems = () => {
  //Redux
  const articles = useAppSelector(articlesSelector);

  return (
    <div className="flex flex-col gap-3 mb-3 w-full lg:w-8/12">
      {articles?.map((article) => (
        <ArticlesItem key={article._id} article={article} />
      ))}
    </div>
  );
};
