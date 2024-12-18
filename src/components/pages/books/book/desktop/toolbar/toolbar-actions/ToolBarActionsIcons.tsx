//Components
import { BookInfoIcon } from "./book-info";
import { TableOfContentsIcon } from "./table-of-content";

export const ToolBarActionsIcons = () => {
  return (
    <div className="flex items-center gap-3">
      <TableOfContentsIcon />
      <BookInfoIcon />
    </div>
  );
};
