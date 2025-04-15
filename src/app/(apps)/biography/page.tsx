//Components
import { BiographyPage } from "@/components/pages/biography";

//Interfaces

//Constants
import { axiosInstance } from "@/common/axiosInstance";

async function getBiography() {
  let biography: string = "";
  try {
    const res = await axiosInstance.get(`/layouts/biography`);

    biography = res.data;
  } catch (error) {
    console.log(error, "error");
  }

  return { biography };
}

export default async function page() {
  const { biography } = await getBiography();

  return <BiographyPage biography={biography} />;
}
