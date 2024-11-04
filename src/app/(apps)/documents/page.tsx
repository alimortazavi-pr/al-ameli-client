//Interfaces
import { IDocument } from "@/common/interfaces";

//Components
import { DocumentsPage } from "@/components/pages/documents";

//Constants
import { axiosInstance } from "@/common/axiosInstance";

async function getDocuments() {
  let documents: IDocument[] = [];
  try {
    const res = await axiosInstance.get("/documents");

    documents = res.data.documents;
  } catch (error) {
    console.log(error, "error");
  }

  return { documents };
}
export const dynamic = "force-dynamic";

export default async function page() {
  const { documents } = await getDocuments();

  return <DocumentsPage documents={documents} />;
}
