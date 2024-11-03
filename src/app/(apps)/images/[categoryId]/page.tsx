//Components
import { ImagePage } from "@/components/pages/images/image";

//Interfaces
import { ICategoryImage } from "@/common/interfaces";

//Constants
import { axiosInstance } from "@/common/axiosInstance";

async function getImagesByCategory({ params }: IProps) {
  let imagesByCategory: ICategoryImage | undefined;
  try {
    const res = await axiosInstance.get(
      `/images/by-category/${params.categoryId}`
    );

    imagesByCategory = res.data.images;
  } catch (error) {
    console.log(error, "error");
  }

  return { imagesByCategory };
}

interface IProps {
  params: {
    categoryId: string;
  };
}
export default async function page({ params }: IProps) {
  const { imagesByCategory } = await getImagesByCategory({ params });

  return <ImagePage imagesByCategory={imagesByCategory} />;
}
