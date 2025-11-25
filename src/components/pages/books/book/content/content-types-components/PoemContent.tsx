import { FC } from "react";

interface IProps {
  children: any;
  pageNumber: number;
}
export const PoemContent: FC<IProps> = ({ children, pageNumber }) => {
  return (
    <span tabIndex={0} id={`content-${pageNumber}`} className="text-center block whitespace-pre-line">
      {children}
    </span>
  );
};
