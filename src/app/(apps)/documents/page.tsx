import { AxiosResponse } from "axios";

//Interfaces
import { IDocument, ICategory, ITag } from "@/common/interfaces";

//Components
import { DocumentsPage } from "@/components/pages/documents";

//Constants
import { axiosInstance } from "@/common/axiosInstance";

async function getDocuments({ searchParams }: IProps) {
  let documents: IDocument[] = [];
  let categories: ICategory[] = [];
  let tags: ITag[] = [];
  let res: AxiosResponse;
  const { search, tags: tagsQuery, category } = searchParams;

  try {
    if (search || tagsQuery || category) {
      res = await axiosInstance.get(
        `/documents/search?${search ? `q=${search}` : ""}${
          tagsQuery ? `&tags=${tagsQuery}` : ""
        }${category ? `&category=${category}` : ""}`
      );
    } else {
      res = await axiosInstance.get(`/documents`);
    }

    categories = res.data.categories;
    tags = res.data.tags;
    documents = res.data.documents;
  } catch (error) {
    console.log(error, "error");
  }

  return { documents, categories, tags };
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
  const { documents, categories, tags } = await getDocuments({ searchParams });

  return (
    <DocumentsPage documents={documents} categories={categories} tags={tags} />
  );
}
