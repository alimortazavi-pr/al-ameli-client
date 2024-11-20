"use client";

//Redux
import { useAppSelector } from "@/lib/hooks";
import { videosSelector } from "@/lib/videos/selectors";

//Components
import { VideosItem } from ".";

export const VideosItems = () => {
  //Redux
  const videos = useAppSelector(videosSelector);

  return (
    <div className="grid grid-cols-12 gap-3 mb-3 w-full lg:w-8/12">
      {videos?.map((video) => (
        <VideosItem key={video.id} video={video} />
      ))}
    </div>
  );
};
