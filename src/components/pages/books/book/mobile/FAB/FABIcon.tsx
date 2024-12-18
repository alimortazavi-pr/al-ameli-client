import { useQuery } from "next-app-use-query";
import { Button, useDisclosure } from "@nextui-org/react";
import { useMemo } from "react";

//Redux
import { bookDetailSelector } from "@/lib/book/selectors";
import { useAppSelector } from "@/lib/hooks";

//Components
import { GoToPageModal } from "./../../desktop/toolbar/pagination-actions";
import convertToPersian from "num-to-persian";

//Translation
// import { useConvertNumbersFormat } from "@/hooks/translation";

export const FABIcon = () => {
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
    <>
      <Button
        className="flex items-center gap-2 text-default-600 text-sm absolute bottom-24 end-4 bg-transparent backdrop-blur-lg shadow"
        variant="solid"
        color="default"
        onClick={onOpen}
      >
        <span>{convertToPersian(pageLabel)}</span>
        <span>/</span>
        <span>
          {convertToPersian((bookDetail?.pagesCount || 0).toString())}
        </span>
      </Button>
      <GoToPageModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    </>
  );
};
