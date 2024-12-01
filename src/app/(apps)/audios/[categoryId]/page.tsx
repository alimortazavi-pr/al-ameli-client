//Components
import { AudiosPlaylistPage } from "@/components/pages/audios/audio-playlist";

//Interfaces
import { ICategoryAudio } from "@/common/interfaces";

//Constants
import { axiosInstance } from "@/common/axiosInstance";

async function getAudiosByCategory({ params }: IProps) {
  let audiosByCategory: ICategoryAudio | undefined;
  try {
    const res = await axiosInstance.get(
      `/audios/by-category/${params.categoryId}`
    );

    audiosByCategory = res.data.audios;
  } catch (error) {
    console.log(error, "error");
  }

  return { audiosByCategory };
}

interface IProps {
  params: {
    categoryId: string;
  };
}
export default async function page({ params }: IProps) {
  const { audiosByCategory } = await getAudiosByCategory({ params });

  return <AudiosPlaylistPage audiosByCategory={audiosByCategory} />;
}
