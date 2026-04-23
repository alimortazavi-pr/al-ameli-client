import { FC } from "react";

//Components
import { DownloadOCR, ZoomIcon } from ".";

interface IProps {
  pageNumber: number;
}
export const OCROptionsContainer: FC<IProps> = ({ pageNumber }) => {
  return (
    <div className="flex md:flex-col md:ms-2 duration-300 items-center md:items-start gap-0.5 end-0 top-0 absolute md:sticky z-10">
      <DownloadOCR pageNumber={pageNumber} />
      <ZoomIcon pageNumber={pageNumber} />
    </div>
  );
};
