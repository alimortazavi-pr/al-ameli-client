//Redux
import { useAppSelector } from "@/lib/hooks";
import {
  isOpenBookInfoSelector,
  isOpenTableOfContentSelector,
} from "@/lib/book/selectors";

//Components
import { TableOfContent } from "./table-of-content";
import { ToolBar } from "./toolbar";
// import { BookInfo } from "./book-info";
import { ContentContainer } from "./../content";

export const BookDesktop = () => {
  //Redux
  const isOpenTableOfContent = useAppSelector(isOpenTableOfContentSelector);
  const isOpenBookInfo = useAppSelector(isOpenBookInfoSelector);

  return (
    <div className="max-w-full w-full max-h-full h-full">
      <div
        className={`bg-background rounded-2xl pb-4 flex flex-col max-h-full h-full`}
      >
        <ToolBar />
        <div className={`flex flex-auto overflow-hidden`}>
          <TableOfContent />
          {/* <BookInfo /> */}
          <div
            className={`${
              isOpenTableOfContent || isOpenBookInfo
                ? "w-6/12 lg:w-8/12 xl:w-9/12 2xl:w-10/12"
                : "w-full"
            }`}
          >
            <ContentContainer />
          </div>
        </div>
      </div>
    </div>
  );
};
