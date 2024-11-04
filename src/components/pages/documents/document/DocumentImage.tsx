import { FC } from "react";
import Image from "next/image";

//Interface
import { IDocument } from "@/common/interfaces";

//Constants
import { BASE_API_URL } from "@/common/constants";

interface IProps {
  document: IDocument | undefined;
}

export const DocumentImage: FC<IProps> = ({ document }) => {
  return (
    <div className="relative col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3 h-64 cursor-pointer">
      <Image
        src={`${BASE_API_URL}${document?.url}`}
        fill
        alt=""
        className="object-cover rounded-lg"
      />
    </div>
  );
};
