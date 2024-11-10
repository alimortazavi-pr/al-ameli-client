import { AxiosResponse } from "axios";

//Interfaces
import { IArticle, ICategory, ITag } from "@/common/interfaces";

//Components
import { ArticlesPage } from "@/components/pages/articles";

//Constants
import { axiosInstance } from "@/common/axiosInstance";

async function getArticles({ searchParams }: IProps) {
  let articles: IArticle[] = [];
  let categories: ICategory[] = [];
  let tags: ITag[] = [];
  let res: AxiosResponse;
  const { search, tags: tagsQuery, category } = searchParams;

  try {
    if (search || tagsQuery || category) {
      res = await axiosInstance.get(
        `/articles/search?${search ? `q=${search}` : ""}${
          tagsQuery ? `&tags=${tagsQuery}` : ""
        }${category ? `&category=${category}` : ""}`
      );
    } else {
      res = await axiosInstance.get(`/articles`);
    }

    articles = res.data.articles;
    categories = res.data.categories;
    tags = res.data.tags;
  } catch (error) {
    console.log(error, "error");
  }

  return { articles, categories, tags };
}
export const dynamic = "force-dynamic";

interface IProps {
  searchParams: {
    search: string;
    tags: string;
    category: string;
  };
}
export default async function page({ searchParams }: IProps) {
  const { articles, categories, tags } = await getArticles({ searchParams });

  return (
    <ArticlesPage articles={articles} categories={categories} tags={tags} />
  );
}
