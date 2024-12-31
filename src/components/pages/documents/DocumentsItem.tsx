"use client";

import Link from "next/link";
import { FC } from "react";
import { Chip } from "@nextui-org/react";
import Image from "next/image";

//Interfaces
import { IDocument } from "@/common/interfaces";

//Constants
import { SERVER_BASE_API_URL, PATHS } from "@/common/constants";

interface IProps {
  document: IDocument;
}
export const DocumentsItem: FC<IProps> = ({ document }) => {
  return (
    <div
      className={`col-span-12 md:col-span-6 lg:col-span-4 h-96 lg:h-72 xl:h-96 bg-white/90 shadow-lg rounded-2xl relative`}
    >
      <Image
        src={`${SERVER_BASE_API_URL}/${document.url}`}
        fill
        alt={document.category?.name}
        className="rounded-2xl object-cover"
      />
      <div className="absolute bottom-0 p-3 min-h-52 w-full rounded-b-2xl bg-secondary-400/60 z-10 overflow-hidden">
        <Link
          href={PATHS.DOCUMENT(document._id)}
          className="text-default-50 text-2xl font-semibold truncate mb-3"
        >
          {document.category.name}
        </Link>
        <p className="text-default-50 whitespace-pre-wrap text-sm mb-3">
          {document.description.slice(0, 200) +
            (document.description.length > 200 && "...")}
        </p>
        <div className="flex items-center gap-2">
          {document.tags.map((tag) => (
            <Chip className="font-medium" color="secondary" key={tag.tag._id}>
              {tag.tag.name}
            </Chip>
          ))}
        </div>
      </div>
    </div>
  );
};
