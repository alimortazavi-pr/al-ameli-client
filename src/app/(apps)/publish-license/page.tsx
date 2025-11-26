//Components
import { PublishLicensePage } from "@/components/pages/publish-license";

//Interfaces

//Constants
import { axiosInstance } from "@/common/axiosInstance";

async function getPublishLicense() {
  let publishLicense: string = "";
  try {
    const res = await axiosInstance.get(`/layouts/publish-license`);

    publishLicense = res.data;
  } catch (error) {
    console.log(error, "error");
  }

  return { publishLicense };
}
export const dynamic = "force-dynamic";

export default async function page() {
  const { publishLicense } = await getPublishLicense();

  return <PublishLicensePage publishLicense={publishLicense} />;
}
