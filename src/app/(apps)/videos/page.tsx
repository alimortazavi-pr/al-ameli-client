import axios, { AxiosResponse } from "axios";

//Interfaces
import { IPlaylist } from "@/common/interfaces";

//Components
import { PlaylistsPage } from "@/components/pages/videos";

async function getPlaylists({ searchParams }: IProps) {
  let playlists: IPlaylist[] = [];
  let res: AxiosResponse;
  const {} = searchParams;

  try {
    res = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyBsD-GtMeVLlcQjdiEche9qYWFgvDN8DFM&channelId=UC-O1hJzH8jLx_oz62aZpW6Q&part=snippet,contentDetails&maxResults=30`
    );

    playlists = res.data.items;
  } catch (error) {
    console.log(error, "error");
  }

  return { playlists };
}
export const dynamic = "force-dynamic";

interface IProps {
  searchParams: {
    search: string;
    tags: string;
    category: string;
  };
}
export default async function page({ searchParams }: IProps) {
  const { playlists } = await getPlaylists({ searchParams });

  return <PlaylistsPage playlists={playlists} />;
}
