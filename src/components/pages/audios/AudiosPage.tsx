"use client";

import { FC, useEffect } from "react";

//Interfaces
import { ICategory, ICategoryAudio, ITag } from "@/common/interfaces";

//Redux
import { useAppDispatch } from "@/lib/hooks";
import { setAudiosByCategories } from "@/lib/audios/actions";
import { setCategories } from "@/lib/categories/actions";
import { setTags } from "@/lib/tags/actions";
import { setPageTitle } from "@/lib/layouts/actions";

//Components
import { AudiosItems } from ".";
import { FilterSectionContainer } from "./FIlterSection";

interface IProps {
  audiosByCategories: ICategoryAudio[];
  allCategories: ICategory[];
  tags: ITag[];
}
export const AudiosPage: FC<IProps> = ({
  audiosByCategories,
  tags,
  allCategories,
}) => {
  //Redux
  const dispatch = useAppDispatch();

  //Lifecycle
  useEffect(() => {
    dispatch(setPageTitle("صوتیات"));
  }, []);

  useEffect(() => {
    dispatch(setAudiosByCategories(audiosByCategories));
    dispatch(setTags(tags));
    dispatch(setCategories(allCategories));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audiosByCategories]);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-12 mt-5">
      <AudiosItems />
      <FilterSectionContainer />
    </div>
  );
};
