//Components
import { BookShortInfoContainer } from "./book-short-info";
import { PaginationActionsContainer } from "./pagination-actions";
import { ToolBarActionsIcons } from "./toolbar-actions";

export const ToolBar = () => {
  return (
    <div
      className={`flex items-center justify-between gap-2 py-2 px-4 bg-background border-b border-default-200 rounded-t-2xl`}
    >
      <ToolBarActionsIcons />
      <BookShortInfoContainer />
      <PaginationActionsContainer />
    </div>
  );
};
