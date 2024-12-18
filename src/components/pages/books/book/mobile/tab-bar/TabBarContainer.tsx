//Components
import { TableOfContentItem } from "./table-of-content";
import { MoreItem } from "./more";

export const TabBarContainer = () => {
  return (
    <div className="flex items-center justify-between fixed bottom-0 bg-default-50 w-screen h-20 ps-4 pe-4">
      <div className="flex items-center gap-2">
        <MoreItem />
      </div>
      <TableOfContentItem />
    </div>
  );
};
