"use client";

import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import convertToPersian from "num-to-persian";
import { Chip } from "@heroui/react";
import { AudioSquare } from "iconsax-react";

//Interfaces
import { ICategoryAudio } from "@/common/interfaces";

//Constants
import { SERVER_BASE_API_URL, PATHS } from "@/common/constants";

interface IProps {
  audioByCategory: ICategoryAudio;
}
export const AudiosItem: FC<IProps> = ({ audioByCategory }) => {
  return (
    audioByCategory.audios?.length !== 0 && (
      <Link
        href={PATHS.AUDIO(audioByCategory._id)}
        className="col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-3 rounded-2xl bg-primary-500 h-fit"
      >
        <div className={`h-32 bg-white/90 shadow-lg rounded-2xl relative`}>
          <Image
            src={`${SERVER_BASE_API_URL}/${audioByCategory.audios[0].thumbnail}`}
            fill
            alt={audioByCategory.name}
            className="rounded-2xl object-cover"
          />
          <Chip
            className="absolute bottom-2 start-2"
            endContent={<AudioSquare className="w-5 h-5" />}
            color="primary"
          >
            {convertToPersian(audioByCategory.audios.length)} صوت
          </Chip>
        </div>
        <div className="p-3">
          <h6 className="w-full text-default-50 text-base font-semibold truncate mb-1">
            {audioByCategory.name}
          </h6>
        </div>
      </Link>
    )
  );
};
