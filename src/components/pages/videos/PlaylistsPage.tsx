"use client";

import { FC, useEffect } from "react";

//Interfaces
import { IPlaylist } from "@/common/interfaces";

//Redux
import { useAppDispatch } from "@/lib/hooks";
import { setPlaylists } from "@/lib/videos/actions";
import { setPageTitle } from "@/lib/layouts/actions";

//Components
import { PlaylistsItems } from ".";
// import { FilterSectionContainer } from "./FIlterSection";

interface IProps {
  playlists: IPlaylist[];
}
export const PlaylistsPage: FC<IProps> = ({ playlists }) => {
  //Redux
  const dispatch = useAppDispatch();

  //Lifecycle
  useEffect(() => {
    dispatch(setPageTitle("محاضرات وبرامج"));
  }, []);

  useEffect(() => {
    dispatch(setPlaylists(playlists));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playlists]);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-12 mt-5">
      <PlaylistsItems />
    </div>
  );
};
