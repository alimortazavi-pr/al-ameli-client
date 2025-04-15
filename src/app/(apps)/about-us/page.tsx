//Components
import { AboutUsPage } from "@/components/pages/about-us";

//Interfaces

//Constants
import { axiosInstance } from "@/common/axiosInstance";

async function getAboutUs() {
  let aboutUs: string = "";
  try {
    const res = await axiosInstance.get(`/layouts/about-us`);

    aboutUs = res.data;
  } catch (error) {
    console.log(error, "error");
  }

  return { aboutUs };
}

export default async function page() {
  const { aboutUs } = await getAboutUs();

  return <AboutUsPage aboutUs={aboutUs} />;
}
