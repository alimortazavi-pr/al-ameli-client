"use client";
import { FC } from "react";

//Interface
import { ICategoryAudio } from "@/common/interfaces";

//Components
import { AudiosPlaylistTitle } from ".";
import { SingleAudio } from "./audio";

interface IProps {
  audiosByCategory: ICategoryAudio | undefined;
}
export const AudiosPlaylistPage: FC<IProps> = ({ audiosByCategory }) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-12 py-5">
      <div className="bg-background w-full min-h-fit z-20 rounded-xl shadow p-3 lg:py-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 mb-10">
          <AudiosPlaylistTitle audiosByCategory={audiosByCategory} />
        </div>
        <div className="w-full flex flex-col gap-2">
          {audiosByCategory?.audios?.map((audio) => (
            <SingleAudio key={audio._id} audio={audio} />
          ))}
        </div>
      </div>
    </div>
  );
};
