"use client";

import { FC, useEffect } from "react";

//Interfaces
import { IVideo } from "@/common/interfaces";

//Redux
import { useAppDispatch } from "@/lib/hooks";
import { setVideos } from "@/lib/videos/actions";

//Components
import { VideosItems } from ".";
// import { FilterSectionContainer } from "./FIlterSection";

interface IProps {
  videos: IVideo[];
}
export const VideosPage: FC<IProps> = ({ videos }) => {
  //Redux
  const dispatch = useAppDispatch();

  //Lifecycle
  useEffect(() => {
    dispatch(setVideos(videos));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videos]);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-12 mt-5">
      <VideosItems />
      {/* <VideosItems />
      <FilterSectionContainer /> */}
    </div>
  );
};
