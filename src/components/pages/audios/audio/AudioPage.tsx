"use client";
import { FC } from "react";

//Interface
import { ICategoryAudio } from "@/common/interfaces";

//Components
import { AudioTitle, SingleAudio } from ".";

interface IProps {
  audiosByCategory: ICategoryAudio | undefined;
}
export const AudioPage: FC<IProps> = ({ audiosByCategory }) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-12 py-5">
      <div className="bg-background w-full min-h-fit z-20 rounded-xl shadow p-3 lg:py-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 mb-10">
          <AudioTitle audiosByCategory={audiosByCategory} />
        </div>
        <div className="w-full grid grid-cols-12 gap-2">
          {audiosByCategory?.audios?.map((audio) => (
            <SingleAudio
              key={audio._id}
              audio={audio}
              audioTitle={`${audiosByCategory.name} - ${audiosByCategory._id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
