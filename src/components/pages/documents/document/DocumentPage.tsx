"use client";
import { FC } from "react";

//Interface
import { IDocument } from "@/common/interfaces";

//Components
import { DocumentDescription, DocumentImage, DocumentTags, DocumentTitle } from ".";

interface IProps {
  document: IDocument | undefined;
}
export const DocumentPage: FC<IProps> = ({ document }) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-12 py-5">
      <div className="bg-background w-full min-h-fit z-20 rounded-xl shadow p-3 lg:py-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 mb-10">
          <DocumentTitle document={document} />
          <div className="flex justify-end flex-1">
            <DocumentTags document={document} />
          </div>
        </div>
        <DocumentImage document={document} />
        <DocumentDescription document={document} />
      </div>
    </div>
  );
};
