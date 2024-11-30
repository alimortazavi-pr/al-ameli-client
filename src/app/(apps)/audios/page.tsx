import { AxiosResponse } from "axios";

//Interfaces
import { ICategory, ICategoryAudio, ITag } from "@/common/interfaces";

//Components
import { AudiosPage } from "@/components/pages/audios";

//Constants
import { axiosInstance } from "@/common/axiosInstance";

async function getAudiosByCategories({ searchParams }: IProps) {
  let allCategories: ICategory[] = [];
  let categories: ICategoryAudio[] = [];
  let tags: ITag[] = [];
  let res: AxiosResponse;
  const { tags: tagsQuery, category } = searchParams;

  try {
    if (tagsQuery || category) {
      res = await axiosInstance.get(
        `/audios/by-categories/search?${tagsQuery ? `&tags=${tagsQuery}` : ""}${
          category ? `&category=${category}` : ""
        }`
      );
    } else {
      res = await axiosInstance.get(`/audios/by-categories`);
    }

    allCategories = res.data.allCategories;
    categories = res.data.categories;
    tags = res.data.tags;
  } catch (error) {
    console.log(error, "error");
  }

  return { categories, tags, allCategories };
}
export const dynamic = "force-dynamic";

interface IProps {
  searchParams: {
    tags: string;
    category: string;
  };
}
export default async function page({ searchParams }: IProps) {
  const { categories, tags, allCategories } = await getAudiosByCategories({
    searchParams,
  });

  return (
    <AudiosPage
      audiosByCategories={categories}
      tags={tags}
      allCategories={allCategories}
    />
  );
}
