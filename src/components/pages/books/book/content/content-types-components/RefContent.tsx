/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";

interface IProps {
  children: any;
  pageNumber: number;
}
export const RefContent: FC<IProps> = ({ children, pageNumber }) => {
  return (
    <span id={`content-${pageNumber}`} className="font-semibold">
      {children}
    </span>
  );
};
