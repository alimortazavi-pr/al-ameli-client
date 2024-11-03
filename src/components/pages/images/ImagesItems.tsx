"use client";

//Redux
import { useAppSelector } from "@/lib/hooks";
import { imagesByCategoriesSelector } from "@/lib/images/selectors";

//Components
import { ImagesItem } from ".";

export const ImagesItems = () => {
  //Redux
  const imagesByCategories = useAppSelector(imagesByCategoriesSelector);

  return (
    <div className="grid grid-cols-12 gap-3 mb-3 w-full lg:w-8/12">
      {imagesByCategories?.map((imageByCategory, i) => (
        <ImagesItem key={imageByCategory._id} imageByCategory={imageByCategory} index={i} />
      ))}
    </div>
  );
};
