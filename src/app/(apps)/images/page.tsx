import { AxiosResponse } from "axios";

//Interfaces
import { ICategory, ICategoryImage, ITag } from "@/common/interfaces";

//Components
import { ImagesPage } from "@/components/pages/images";

//Constants
import { axiosInstance } from "@/common/axiosInstance";

async function getImagesByCategories({ searchParams }: IProps) {
  let allCategories: ICategory[] = [];
  let categories: ICategoryImage[] = [];
  let tags: ITag[] = [];
  let res: AxiosResponse;
  const { tags: tagsQuery, category } = searchParams;

  try {
    if (tagsQuery || category) {
      res = await axiosInstance.get(
        `/images/by-categories/search?${tagsQuery ? `&tags=${tagsQuery}` : ""}${
          category ? `&category=${category}` : ""
        }`
      );
    } else {
      res = await axiosInstance.get(`/images/by-categories`);
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
  const { categories, tags, allCategories } = await getImagesByCategories({
    searchParams,
  });

  return (
    <ImagesPage
      imagesByCategories={categories}
      tags={tags}
      allCategories={allCategories}
    />
  );
}
