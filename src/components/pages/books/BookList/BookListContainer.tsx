"use client";

//Redux
// import { useAppSelector } from "@/lib/hooks";

//Components
import { BooksList } from ".";
// import { ToolBarContainer } from "@/components/common/desktop/Toolbar";

export const BookListContainer = () => {
  //Redux

  return (
    <div
      className={`z-10 rounded-2xl ps-2 pe-2 pb-4 flex flex-col h-full w-full`}
    >
      {/* <TabsSectionContainer />
      <ToolBarContainer /> */}
      <BooksList />
    </div>
  );
};
