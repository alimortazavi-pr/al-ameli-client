"use client";

import { FC } from "react";
import Image from "next/image";
import { PhotoView } from "react-photo-view";
import { Button } from "@heroui/react";
import { DocumentDownload } from "iconsax-react";
import FileSaver from "file-saver";

//Interfaces
import { IImage } from "@/common/interfaces";

//Constants
import { BASE_API_URL, SERVER_BASE_API_URL } from "@/common/constants";

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
    <PhotoView
      src={`${BASE_API_URL}${image?.url}`}
      overlay={
        <div className="flex flex-col gap-2 h-full w-full items-center justify-center">
          <span className="text-default-50">{image.description}</span>
          <Button isIconOnly variant="light" onPress={downloadImage}>
            <DocumentDownload className="w-6 h-6 text-default-300" />
          </Button>
        </div>
      }
    >
      <div className="relative col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3 h-64 cursor-pointer">
        <Image
          src={`${SERVER_BASE_API_URL}${image?.thumbnail}`}
          fill
          alt=""
          className="object-cover rounded-lg"
        />
        {image?.description && (
          <div className="absolute w-full bottom-0 rounded-b-lg bg-primary-600/70 backdrop-blur flex items-center justify-center min-h-20 text-default-50 p-2 line-clamp-3">
            {image.description}
          </div>
        )}
      </div>
    </PhotoView>
  );
};
