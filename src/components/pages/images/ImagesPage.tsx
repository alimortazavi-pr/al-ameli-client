"use client";

import { FC, useEffect } from "react";

//Interfaces
import { ICategory, ICategoryImage, ITag } from "@/common/interfaces";

//Redux
import { useAppDispatch } from "@/lib/hooks";
import { setImagesByCategories } from "@/lib/images/actions";
import { setCategories } from "@/lib/categories/actions";
import { setTags } from "@/lib/tags/actions";
import { setPageTitle } from "@/lib/layouts/actions";

//Components
import { ImagesItems } from ".";
import { FilterSectionContainer } from "./FIlterSection";

interface IProps {
  imagesByCategories: ICategoryImage[];
  allCategories: ICategory[];
  tags: ITag[];
}
export const ImagesPage: FC<IProps> = ({
  imagesByCategories,
  tags,
  allCategories,
}) => {
  //Redux
  const dispatch = useAppDispatch();

  //Lifecycle
  useEffect(() => {
    dispatch(setPageTitle("صــــور"));
  }, []);

  useEffect(() => {
    dispatch(setImagesByCategories(imagesByCategories));
    dispatch(setTags(tags));
    dispatch(setCategories(allCategories));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesByCategories]);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-12 mt-5">
      <ImagesItems />
      <FilterSectionContainer />
    </div>
  );
};
