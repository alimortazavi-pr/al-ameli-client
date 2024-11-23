import { FC } from "react";

//Interface
import { IVideo } from "@/common/interfaces";

//Components
import { VideoItem } from "./";

interface IProps {
  videos: IVideo[];
}

export const VideosList: FC<IProps> = ({ videos }) => {
  return (
    <div className="flex flex-col gap-2">
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  );
};
