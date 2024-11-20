import { FC } from "react";

//Interface
import { IArticle } from "@/common/interfaces";

interface IProps {
  article: IArticle | undefined;
}

export const ArticleContent: FC<IProps> = ({ article }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: article?.content || "",
      }}
    />
  );
};
