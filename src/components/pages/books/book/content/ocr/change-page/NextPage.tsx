import { Button, Tooltip } from "@heroui/react";
import { useMemo } from "react";

//Redux
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import {
  selectedPageSelector,
  selectedPDFBookSelector,
} from "@/lib/book/selectors";
import { setSelectedPage } from "@/lib/book/actions";

export const NextPage = () => {
  //Redux
  const dispatch = useAppDispatch();
  const selectedPDFBook = useAppSelector(selectedPDFBookSelector);
  const selectedPage = useAppSelector(selectedPageSelector);

  //Lifecycle
  const nextPageNumber = useMemo(() => {
    if (!selectedPDFBook || selectedPage === undefined) return undefined;
    return selectedPDFBook.find((page) => page.number === selectedPage + 1);
  }, [selectedPDFBook, selectedPage]);

  //Functions
  function onClickHandler() {
    if (!nextPageNumber) return;
    dispatch(setSelectedPage(nextPageNumber.number));
  }

  return (
    <Tooltip content={"الصفحة التالية"}>
      <Button
        className="fixed top-1/2 left-5 -translate-y-1/2 z-[9999] rounded-full"
        isIconOnly
        color="default"
        variant="flat"
        onPress={onClickHandler}
        isDisabled={!nextPageNumber}
      >
        <span className="material-symbols-outlined">keyboard_arrow_left</span>
      </Button>
    </Tooltip>
  );
};
