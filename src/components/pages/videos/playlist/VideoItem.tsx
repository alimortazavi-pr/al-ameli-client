import { FC } from "react";

//Interfaces
import { IVideo } from "@/common/interfaces";
import moment from "moment";
import convertToPersian from "num-to-persian";
// import { Button } from "@heroui/react";

interface IProps {
  video: IVideo;
}
export const VideoItem: FC<IProps> = ({ video }) => {
  return (
    <div className="w-full p-3 pb-5 border-b border-secondary flex flex-col md:flex-row md:items-stretch gap-3">
      <div className="w-full h-44 md:w-56 md:h-32 relative">
        <iframe
          className="rounded-xl"
          width={"100%"}
          height={"100%"}
          src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
          title={video.snippet.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <div className="flex flex-col justify-between py-4 flex-1 gap-2">
        <h6 className="font-semibold text-xl">{video.snippet.title}</h6>
        <div className="flex items-center justify-between">
          <span>
            {convertToPersian(
              moment(video.snippet.publishedAt).format("YYYY, DD MMM")
            )}
          </span>
          {/* <Button isIconOnly size="sm">
            <span className="material-symbols-outlined">download</span>
          </Button> */}
        </div>
      </div>
    </div>
  );
};
