"use client";

import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import { Chip } from "@heroui/react";
import convertToPersian from "num-to-persian";
import { VideoVertical } from "iconsax-react";

//Interfaces
import { IPlaylist } from "@/common/interfaces";

//Constants
import { PATHS } from "@/common/constants";

interface IProps {
  playlist: IPlaylist;
}
export const PlaylistsItem: FC<IProps> = ({ playlist }) => {
  return (
    playlist.contentDetails.itemCount > 0 && (
      <div className="col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-3 rounded-2xl bg-secondary-400">
        <div className={`h-32 bg-white/90 shadow-lg rounded-2xl relative`}>
          <Image
            src={playlist.snippet.thumbnails.high.url}
            fill
            alt={playlist.snippet.title}
            className="rounded-2xl object-cover"
          />
          <Chip
            className="absolute bottom-2 start-2 bg-secondary-400/70"
            endContent={<VideoVertical className="w-5 h-5" />}
            color="secondary"
          >
            {convertToPersian(playlist.contentDetails.itemCount)} فيديو
          </Chip>
        </div>
        <div className="p-3">
          <h6 className="w-full text-default-50 text-base font-semibold truncate mb-1">
            {playlist.snippet.title}
          </h6>
          <Link
            href={PATHS.PLAYLIST(playlist.id)}
            className="text-default-50 text-xs"
          >
            مشاهدة هذه المجموعة
          </Link>
        </div>
      </div>
    )
  );
};
