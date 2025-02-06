"use client";

import { FC } from "react";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Button, Spinner } from "@heroui/react";
import { DocumentDownload, SearchZoomIn } from "iconsax-react";

//Interface
import { IDocument } from "@/common/interfaces";

//Constants
import { BASE_API_URL, SERVER_BASE_API_URL } from "@/common/constants";
import FileSaver from "file-saver";

interface IProps {
  document: IDocument | undefined;
}
export const DocumentImage: FC<IProps> = ({ document }) => {
  //Functions
  function downloadDocument() {
    FileSaver.saveAs(
      `${SERVER_BASE_API_URL}${document?.url}`,
      document?.category.name
    );
  }

  return (
    <div className="w-full bg-secondary-100 p-5 rounded-lg mb-8">
      <div className="flex items-center justify-center mb-3">
        <div className="relative w-96 h-96">
          <Image
            src={`${SERVER_BASE_API_URL}${document?.url}`}
            alt=""
            fill
            className="object-contain rounded-lg w-40 h-20"
          />
        </div>
      </div>
      <div className="flex items-center justify-end gap-3">
        <PhotoProvider loadingElement={<Spinner />}>
          <div>
            <PhotoView src={`${BASE_API_URL}${document?.url}`}>
              <Button isIconOnly color="primary" variant="flat" size="lg">
                <SearchZoomIn className="w-7 h-7" />
              </Button>
            </PhotoView>
          </div>
        </PhotoProvider>
        <Button
          isIconOnly
          color="primary"
          variant="flat"
          size="lg"
          onPress={downloadDocument}
        >
          <DocumentDownload className="w-7 h-7" />
        </Button>
      </div>
    </div>
  );
};
