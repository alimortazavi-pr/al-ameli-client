import { FC } from "react";

//Types
import { IPage } from "@/common/interfaces";

//Components
import { TextContent } from ".";

interface IProps {
  pages: IPage[];
}

export const PagesList: FC<IProps> = ({ pages }) => {
  return (
    <div className={`h-[calc(100%-32px)] overflow-x-hidden`}>
      {pages.map((page, i) => (
        <TextContent key={i} pageData={page} pageIndex={i} />
      ))}
    </div>
  );
};
