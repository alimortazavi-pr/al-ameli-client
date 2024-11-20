//Components
import { ArticlePage } from "@/components/pages/articles/article";

//Interfaces
import { IArticle } from "@/common/interfaces";

//Constants
import { axiosInstance } from "@/common/axiosInstance";

async function getArticle({ params }: IProps) {
  let article: IArticle | undefined;
  try {
    const res = await axiosInstance.get(`/articles/${params.slug}`);

    article = res.data.article;
  } catch (error) {
    console.log(error, "error");
  }

  return { article };
}

interface IProps {
  params: {
    slug: string;
  };
}
export default async function page({ params }: IProps) {
  const { article } = await getArticle({ params });

  return <ArticlePage article={article} />;
}
