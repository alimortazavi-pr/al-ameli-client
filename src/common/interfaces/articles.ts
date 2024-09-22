import { ICategory, ITag } from ".";

export interface IArticlesState {
  articles: IArticle[];
  selectedArticle: IArticle | null;
  isDeleting: boolean;
}

export interface IArticle {
  _id: string;
  title: string;
  slug: string;
  thumbnail: string;
  content: string;
  category: ICategory;
  tags: { tag: ITag }[];
}
