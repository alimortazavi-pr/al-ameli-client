/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";

interface IProps {
  children: any;
  pageNumber: number;
  footnoteOrRemark?: boolean;
}
export const SimpleTextContent: FC<IProps> = ({
  children,
  pageNumber,
  footnoteOrRemark,
}) => {
  return (
    <>
      <span
        tabIndex={0}
        id={`content-${pageNumber}`}
        className={`whitespace-pre-line leading-none ${
          footnoteOrRemark && "text-[0.8em]"
        }`}
      >
        {children}
      </span>{" "}
    </>
  );
};
