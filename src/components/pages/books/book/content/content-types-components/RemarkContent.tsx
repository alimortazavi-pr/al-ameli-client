import { FC } from "react";

interface IProps {
  children: any;
  pageNumber: number;
}
export const RemarkContent: FC<IProps> = ({ children, pageNumber }) => {
  return (
    <span tabIndex={0} id={`content-${pageNumber}`} className="text-[0.8em] whitespace-pre-line">
      {children}
    </span>
  );
};
