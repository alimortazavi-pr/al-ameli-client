import axios, { AxiosResponse } from "axios";

//Components
import { VideoPage } from "@/components/pages/videos/playlist";

//Interfaces
import { IPlaylist, IVideo } from "@/common/interfaces";

async function getVideo({ params }: IProps) {
  let videos: IVideo[] = [];
  let playlist: IPlaylist | undefined;
  let resPlaylist: AxiosResponse;
  let res: AxiosResponse;

  try {
    resPlaylist = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyBsD-GtMeVLlcQjdiEche9qYWFgvDN8DFM&maxResults=20&part=snippet,contentDetails&id=${params.playlistId}`
    );
    res = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyDfpLCcKhU5bw_2K8fOAt0np-pawTijgQk&playlistId=${params.playlistId}&part=snippet,contentDetails&maxResults=20`
    );

    videos = res.data.items;
    playlist = resPlaylist.data.items[0];
  } catch (error) {
    console.log(error, "error");
  }

  return { videos, playlist };
}

interface IProps {
  params: {
    playlistId: string;
  };
}
export default async function page({ params }: IProps) {
  const { videos,playlist } = await getVideo({ params });

  return <VideoPage videos={videos} playlist={playlist} />;
}
