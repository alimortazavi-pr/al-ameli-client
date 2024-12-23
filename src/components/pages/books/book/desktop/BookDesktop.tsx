//Redux
import { useAppSelector } from "@/lib/hooks";
import { isOpenTableOfContentSelector } from "@/lib/book/selectors";

//Components
import { TableOfContent } from "./table-of-content";
import { ToolBar } from "./toolbar";
// import { BookInfo } from "./book-info";
import { ContentContainer } from "./../content";

export const BookDesktop = () => {
  //Redux
  const isOpenTableOfContent = useAppSelector(isOpenTableOfContentSelector);

  return (
    <div className="max-w-full w-full mt-5 rounded-2xl z-10 relative h-[calc(100dvh-200px)] overflow-y-hidden">
      <div className={`bg-background rounded-2xl pb-4 flex flex-col h-full`}>
        <ToolBar />
        <div className={`flex flex-auto overflow-hidden h-full`}>
          <TableOfContent />
          {/* <BookInfo /> */}
          <div
            className={`${
              isOpenTableOfContent ? "w-6/12 2xl:w-8/12" : "w-full"
            } h-full overflow-y-auto`}
          >
            <ContentContainer />
          </div>
        </div>
      </div>
    </div>
  );
};
