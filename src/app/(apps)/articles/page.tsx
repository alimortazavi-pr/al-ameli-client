//Interfaces
import { IArticle } from "@/common/interfaces";

//Components
import { ArticlesPage } from "@/components/pages/articles";

//Constants
import { axiosInstance } from "@/common/axiosInstance";

async function getArticles() {
  let articles: IArticle[] = [];
  try {
    const res = await axiosInstance.get("/articles");
  
    articles = res.data.articles;
  } catch (error) {
    console.log(error, "error");
  }

  return { articles };
}
export const dynamic = "force-dynamic";

export default async function page() {
  const { articles } = await getArticles();

  return <ArticlesPage articles={articles} />;
}
