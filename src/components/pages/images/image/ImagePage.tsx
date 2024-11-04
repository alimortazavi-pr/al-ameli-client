"use client";
import { FC } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

//Interface
import { ICategoryImage } from "@/common/interfaces";

//Components
import { ImageTitle } from ".";
import Image from "next/image";
import { BASE_API_URL } from "@/common/constants";

interface IProps {
  imagesByCategory: ICategoryImage | undefined;
}
export const ImagePage: FC<IProps> = ({ imagesByCategory }) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-12 py-5">
      <div className="bg-background w-full min-h-fit z-20 rounded-xl shadow p-3 lg:py-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 mb-10">
          <ImageTitle imagesByCategory={imagesByCategory} />
        </div>
        <PhotoProvider>
          <div className="w-full grid grid-cols-12 gap-2">
            {imagesByCategory?.images?.map((image) => (
              <div
                key={image._id}
                className="relative col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3 h-64"
              >
                <PhotoView src={`${BASE_API_URL}${image?.url}`}>
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
            ))}
          </div>
        </PhotoProvider>
      </div>
    </div>
  );
};
