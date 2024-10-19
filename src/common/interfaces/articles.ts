import { ICategory, ITag } from ".";

export interface IArticlesState {
  articles: IArticle[];
}

export interface IArticle {
  _id: string;
  title: string;
  slug: string;
  thumbnail: string;
  description: string;
  content: string;
  category: ICategory;
  tags: { tag: ITag }[];
}
