import { FC } from "react";

//Types
import { IBook } from "@/common/interfaces";

//Redux

interface IProp {
  book: IBook;
}
export const IconsSection: FC<IProp> = ({}) => {
  //Redux

  //Functions

  return (
    <div className="flex items-center justify-end gap-1">
      <span
        className={`material-symbols-outlined !text-xl ${
          true ? "text-default-600" : "text-primary-900"
        }`}
      >
        attachment
      </span>
      <span
        className={`material-symbols-outlined !text-xl ${
          true ? "text-red-400" : "text-primary-900"
        }`}
      >
        picture_as_pdf
      </span>
    </div>
  );
};
