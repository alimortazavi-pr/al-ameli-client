"use client";

//Redux
import { useAppSelector } from "@/lib/hooks";
import { documentsSelector } from "@/lib/documents/selectors";

//Components
import { DocumentsItem } from ".";

export const DocumentsItems = () => {
  //Redux
  const documents = useAppSelector(documentsSelector);

  return (
    <div className="grid grid-cols-12 gap-3 mb-3 w-full lg:w-8/12">
      {documents?.map((document) => (
        <DocumentsItem key={document._id} document={document} />
      ))}
    </div>
  );
};
