"use client";

import Link from "next/link";
import { FC, useMemo } from "react";

//Interfaces
import { ICategoryImage } from "@/common/interfaces";
import Image from "next/image";
import { BASE_API_URL, PATHS } from "@/common/constants";

interface IProps {
  imageByCategory: ICategoryImage;
  index: number;
}
export const ImagesItem: FC<IProps> = ({ imageByCategory, index }) => {
  const is7 = useMemo(() => {
    if ((index + 1) % 5 === 4) {
      return true;
    }
    return false;
  }, [index]);

  const is5 = useMemo(() => {
    if ((index + 1) % 5 === 0) {
      return true;
    }
    return false;
  }, [index]);

  return (
    imageByCategory.images?.length !== 0 && (
      <div
        className={`col-span-12 md:col-span-6 ${
          is7 ? "lg:col-span-7" : is5 ? "lg:col-span-5" : "lg:col-span-4"
        } h-96 lg:h-72 xl:h-96 bg-white/90 shadow-lg rounded-2xl relative`}
      >
        <Image
          src={`${BASE_API_URL}/${imageByCategory.images[0].thumbnail}`}
          fill
          alt={imageByCategory.name}
          className="rounded-2xl object-cover"
        />
        <div className="absolute bottom-0 p-3 h-24 w-full rounded-b-2xl bg-secondary-400/60 z-10 flex items-center justify-center">
          <Link
            href={PATHS.IMAGE(imageByCategory._id)}
            className="text-default-50 text-3xl truncate"
          >
            {imageByCategory.name}
          </Link>
        </div>
      </div>
    )
  );
};
