import { FC } from "react";

interface IProps {
  children: any;
  pageNumber: number;
}
export const RefContent: FC<IProps> = ({ children, pageNumber }) => {
  return (
    <>
      <span tabIndex={0} id={`content-${pageNumber}`} className="font-semibold">
        {children}
      </span>{" "}
    </>
  );
};
