"use client";

import { FC, useState } from "react";
import Image from "next/image";
import moment from "moment";

//Interfaces
import { IAudio } from "@/common/interfaces";

//Components
import { AudioPlayer } from "./AudioPlayer";
import { AudioDescriptionButton } from "./audio-description";

//Constants
import { SERVER_BASE_API_URL } from "@/common/constants";

//Utils
import { formatTime } from "@/common/utils";

interface IProps {
  audio: IAudio;
}
export const SingleAudio: FC<IProps> = ({ audio }) => {
  //States
  const [duration, setDuration] = useState(0);

  return (
    <div className="bg-secondary-50 p-4 rounded-xl">
      <div className="flex flex-col md:flex-row items-stretch gap-4 mb-3">
        <div className="relative min-w-40 h-40">
          <Image
            src={`${SERVER_BASE_API_URL}${audio?.thumbnail}`}
            alt={audio.title}
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <div className="md:pt-3">
          <h5 className="text-lg font-medium mb-1 line-clamp-1">
            {audio.title}
          </h5>
          <p className="text-default-600 mb-2 line-clamp-1">
            {audio.category?.name}
          </p>
          <p className="text-default-600 line-clamp-2 md:mb-1">
            {audio.description}
          </p>
          <div className="flex items-center justify-between gap-2">
            <p className="hidden md:flex items-center gap-1 text-xs">
              تاريخ الإضافة
              <span>{moment(audio.createdAt).format("YYYY DD MMM")}</span> -
              <span>{formatTime(duration)}</span>
            </p>
            <AudioDescriptionButton audio={audio} />
          </div>
        </div>
      </div>
      <AudioPlayer
        audio={audio}
        duration={duration}
        setDuration={setDuration}
      />
    </div>
  );
};
