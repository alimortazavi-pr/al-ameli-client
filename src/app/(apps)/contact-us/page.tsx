//Components
import { ContactUsPage } from "@/components/pages/contact-us";

//Interfaces

//Constants
import { axiosInstance } from "@/common/axiosInstance";

async function getContactUs() {
  let contactUs: string = "";
  try {
    const res = await axiosInstance.get(`/layouts/contact-us`);

    contactUs = res.data;
  } catch (error) {
    console.log(error, "error");
  }

  return { contactUs };
}
export const dynamic = "force-dynamic";

export default async function page() {
  const { contactUs } = await getContactUs();

  return <ContactUsPage contactUs={contactUs} />;
}
