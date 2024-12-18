import { useQuery } from "next-app-use-query";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from "@nextui-org/react";
import { useMemo } from "react";

//Redux
import { bookDetailSelector } from "@/lib/book/selectors";
import { useAppSelector } from "@/lib/hooks";

//Components
import { GoToPagePopoverContent } from ".";
import convertToPersian from "num-to-persian";

//Translation
// import { useConvertNumbersFormat } from "@/hooks/translation";

export const PagesCounter = () => {
  //Redux
  const bookDetail = useAppSelector(bookDetailSelector);

  //NextUI
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  //Translation
  // const convertNumbersFormat = useConvertNumbersFormat();

  //Other hooks
  const query = useQuery();

  //Lifecycle
  const pageLabel = useMemo(() => {
    return query.get("page-label") || "1";
  }, [query.get("page-label")]);

  return (
    <Popover
      showArrow
      placement="bottom"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <PopoverTrigger>
        <Button
          className="flex items-center gap-4 text-default-600 text-sm min-w-32"
          variant="light"
        >
          <span>{convertToPersian(pageLabel)}</span>
          <span>/</span>
          <span>
            {convertToPersian((bookDetail?.pagesCount || 0).toString())}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-1 min-w-64">
        <GoToPagePopoverContent
          isOpen={isOpen}
          onOpen={onOpen}
          onOpenChange={onOpenChange}
          onClose={onClose}
        />
      </PopoverContent>
    </Popover>
  );
};
