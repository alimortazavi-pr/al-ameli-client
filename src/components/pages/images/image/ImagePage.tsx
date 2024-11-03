"use client";
import { FC } from "react";

//Interface
import { ICategoryImage } from "@/common/interfaces";

//Components
import { SingleImage, ImageTitle } from ".";

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
        <div className="w-full grid grid-cols-12 gap-2">
          {imagesByCategory?.images?.map((image) => (
            <SingleImage key={image._id} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
};
