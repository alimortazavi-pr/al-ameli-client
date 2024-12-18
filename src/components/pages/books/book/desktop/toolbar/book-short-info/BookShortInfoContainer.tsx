import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

//Components
import { AuthorName, BookShortInfoContent, BookTitle } from ".";

export const BookShortInfoContainer = () => {
  return (
    <Popover placement="bottom" showArrow>
      <PopoverTrigger>
        <Button
          variant="light"
          className="flex-1 max-w-fit flex items-stretch justify-center gap-0 rounded-xl w-fit overflow-x-hidden scrollbar-hide px-0 min-w-0 hover:!bg-transparent"
          dir="rtl"
        >
          <BookTitle />
          <AuthorName />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="bg-primary-50">
        <BookShortInfoContent />
      </PopoverContent>
    </Popover>
  );
};
