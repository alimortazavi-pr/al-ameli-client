import { Button, Tooltip } from "@heroui/react";
import { useMemo } from "react";

//Redux
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import {
  selectedPageSelector,
  selectedPDFBookSelector,
} from "@/lib/book/selectors";
import { setSelectedPage } from "@/lib/book/actions";

export const PreviousPage = () => {
  //Redux
  const dispatch = useAppDispatch();
  const selectedPDFBook = useAppSelector(selectedPDFBookSelector);
  const selectedPage = useAppSelector(selectedPageSelector);

  //Lifecycle
  const previousPageNumber = useMemo(() => {
    if (!selectedPDFBook || !selectedPage) return undefined;
    return selectedPDFBook.find((page) => page.number === selectedPage - 1);
  }, [selectedPDFBook, selectedPage]);

  //Functions
  function onClickHandler() {
    if (!previousPageNumber) return;
    dispatch(setSelectedPage(previousPageNumber.number));
  }

  return (
    <Tooltip content={"الصفحة السابقة"}>
      <Button
        className="fixed top-1/2 right-5 -translate-y-1/2 z-[9999] rounded-full"
        isIconOnly
        color="default"
        variant="flat"
        onPress={onClickHandler}
        isDisabled={!previousPageNumber}
      >
        <span className="material-symbols-outlined">keyboard_arrow_right</span>
      </Button>
    </Tooltip>
  );
};
