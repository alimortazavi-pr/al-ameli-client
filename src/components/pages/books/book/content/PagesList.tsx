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
      {pages.map((pageData, i) => (
        <TextContent
          pageData={pageData}
          footnotes={pageData.contents.filter(
            (content) => content.data.case === "footnote"
          )}
          remarks={pageData.contents.filter(
            (content) => content.data.case === "remark"
          )}
          key={i}
          pageIndex={i + 1}
        />
      ))}
    </div>
  );
};
