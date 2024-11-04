import { FC } from "react";
import Image from "next/image";

//Interface
import { IDocument } from "@/common/interfaces";

//Constants
import { BASE_API_URL } from "@/common/constants";
import { Button } from "@nextui-org/react";
import { DocumentDownload, SearchZoomIn } from "iconsax-react";

interface IProps {
  document: IDocument | undefined;
}

export const DocumentImage: FC<IProps> = ({ document }) => {
  return (
    <div className="w-full bg-secondary-100 p-5 rounded-lg mb-8">
      <div className="flex items-center justify-center mb-3">
        <div className="relative w-96 h-96">
          <Image
            src={`${BASE_API_URL}${document?.url}`}
            alt=""
            fill
            className="object-contain rounded-lg w-40 h-20"
          />
        </div>
      </div>
      <div className="flex items-center justify-end gap-3">
        <Button isIconOnly color="primary" variant="flat" size="lg">
          <SearchZoomIn className="w-7 h-7" />
        </Button>
        <Button isIconOnly color="primary" variant="flat" size="lg">
          <DocumentDownload className="w-7 h-7" />
        </Button>
      </div>
    </div>
  );
};
