"use client";

import { FC } from "react";
import Image from "next/image";
import { PhotoView } from "react-photo-view";
import { Button } from "@nextui-org/react";
import { DocumentDownload } from "iconsax-react";
import FileSaver from "file-saver";

//Interfaces
import { IImage } from "@/common/interfaces";

//Constants
import { BASE_API_URL } from "@/common/constants";

interface IProps {
  image: IImage;
  imageTitle: string;
}
export const SingleImage: FC<IProps> = ({ image, imageTitle }) => {
  //Functions
  function downloadImage() {
    FileSaver.saveAs(`${BASE_API_URL}${image?.url}`, imageTitle);
  }

  return (
    <div className="relative col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3 h-64">
      <PhotoView
        src={`${BASE_API_URL}${image?.url}`}
        overlay={
          <div className="flex flex-col gap-2 h-full w-full items-center justify-center">
            <span className="text-default-50">{image.description}</span>
            <Button isIconOnly variant="light" onClick={downloadImage}>
              <DocumentDownload className="w-6 h-6 text-default-300" />
            </Button>
          </div>
        }
      >
        <Image
          src={`${BASE_API_URL}${image?.thumbnail}`}
          fill
          alt=""
          className="object-cover rounded-lg cursor-pointer"
        />
      </PhotoView>

      {image?.description && (
        <div className="absolute w-full bottom-0 rounded-b-lg bg-secondary-500/60 flex items-center justify-center h-20 text-default-50 p-2">
          {image.description}
        </div>
      )}
    </div>
  );
};
