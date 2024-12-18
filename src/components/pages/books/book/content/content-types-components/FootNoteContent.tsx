/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";

interface IProps {
  children: any;
  pageNumber: number;
}
export const FootNoteContent: FC<IProps> = ({ children, pageNumber }) => {
  return (
    <span id={`content-${pageNumber}`} className="text-[0.8em] block">
      {children}
    </span>
  );
};
