import axios, { AxiosResponse } from "axios";

//Interfaces
import { IVideo } from "@/common/interfaces";

//Components
import { VideosPage } from "@/components/pages/videos";

async function getVideos({ searchParams }: IProps) {
  let videos: IVideo[] = [];
  let res: AxiosResponse;
  const {} = searchParams;

  try {
    res = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyBsD-GtMeVLlcQjdiEche9qYWFgvDN8DFM&channelId=UC-O1hJzH8jLx_oz62aZpW6Q&part=snippet,contentDetails&maxResults=30`
    );

    videos = res.data.items;
  } catch (error) {
    console.log(error, "error");
  }

  return { videos };
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
  const { videos } = await getVideos({ searchParams });

  return <VideosPage videos={videos} />;
}
