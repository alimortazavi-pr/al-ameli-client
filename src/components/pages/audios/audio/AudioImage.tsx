"use client";

import { FC } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { DocumentDownload } from "iconsax-react";
import FileSaver from "file-saver";

//Interfaces
import { IAudio } from "@/common/interfaces";

//Constants
import { BASE_API_URL } from "@/common/constants";

interface IProps {
  audio: IAudio;
  audioTitle: string;
}
export const SingleAudio: FC<IProps> = ({ audio, audioTitle }) => {
  //Functions
  // function downloadAudio() {
  //   FileSaver.saveAs(`${BASE_API_URL}${audio?.url}`, audioTitle);
  // }

  return (
    <div className="relative col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3 h-64">
      {audio?.description && (
        <div className="absolute w-full bottom-0 rounded-b-lg bg-secondary-400/60 flex items-center justify-center min-h-20 text-default-50 p-2">
          {audio.description}
        </div>
      )}
    </div>
  );
};
