//Interfaces
import { ICategoryImage } from "@/common/interfaces";

//Components
import { ImagesPage } from "@/components/pages/images";

//Constants
import { axiosInstance } from "@/common/axiosInstance";

async function getImagesByCategories() {
  let categories: ICategoryImage[] = [];
  try {
    const res = await axiosInstance.get("/images/by-categories");

    categories = res.data.categories;
  } catch (error) {
    console.log(error, "error");
  }

  return { categories };
}
export const dynamic = "force-dynamic";

export default async function page() {
  const { categories } = await getImagesByCategories();

  return <ImagesPage imagesByCategories={categories} />;
}
