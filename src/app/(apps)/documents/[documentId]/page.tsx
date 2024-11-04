//Components
import { DocumentPage } from "@/components/pages/documents/document";

//Interfaces
import { IDocument } from "@/common/interfaces";

//Constants
import { axiosInstance } from "@/common/axiosInstance";

async function getDocument({ params }: IProps) {
  let document: IDocument | undefined;
  try {
    const res = await axiosInstance.get(`/documents/${params.documentId}`);

    document = res.data.document;
  } catch (error) {
    console.log(error, "error");
  }

  return { document };
}

interface IProps {
  params: {
    documentId: string;
  };
}
export default async function page({ params }: IProps) {
  const { document } = await getDocument({ params });

  return <DocumentPage document={document} />;
}
