import { NextPageArrow, PagesCounter, PreviousPageArrow } from ".";

export const PaginationActionsContainer = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <PreviousPageArrow />
        <NextPageArrow />
      </div>
      <PagesCounter />
    </div>
  );
};
