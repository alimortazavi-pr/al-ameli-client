import { FC } from "react";

//Interface
import { IDocument } from "@/common/interfaces";

interface IProps {
  document: IDocument | undefined;
}

export const DocumentDescription: FC<IProps> = ({ document }) => {
  return <p>{document?.description}</p>;
};
