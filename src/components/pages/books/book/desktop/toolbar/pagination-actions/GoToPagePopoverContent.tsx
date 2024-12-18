import { FC, useEffect, useState } from "react";
import useQuery from "next-app-use-query";
import convertAPToEnglish from "ap-to-english";
import Select, { SingleValue } from "react-select";

//Types
import { INextUIModalProps } from "@/common/interfaces";
import { Page } from "@/grpc/proto/ablibrary/types/page_pb";

//Redux
import { selectedBookSelector } from "@/lib/book/selectors";
import { useAppSelector } from "@/lib/hooks";
import convertToPersian from "num-to-persian";
// import { setScrollToPage } from "@/lib/book/actions";

// //Translation
// import {
//   useClientTranslation,
//   useConvertNumbersFormat,
// } from "@/hooks/translation";

//Utils
// import { storage } from "@/common/utils";

export const GoToPagePopoverContent: FC<INextUIModalProps> = ({
  isOpen,
  onClose,
}) => {
  //Redux
  // const dispatch = useAppDispatch();
  const selectedBook = useAppSelector(selectedBookSelector);

  //Translation
  // const { t } = useClientTranslation(storage.getLanguage());
  // const convertNumbersFormat = useConvertNumbersFormat();

  //Other hooks
  const query = useQuery();

  //States
  const [page, setPage] = useState("");

  //Life cycles
  useEffect(() => {
    if (isOpen) {
      const pageQuery = query.get("page");
      if (page != pageQuery) {
        setPage(pageQuery);
      }
    }
  }, [query.get("page"), isOpen]);

  //Functions
  function onChangeHandler(value: SingleValue<Page>) {
    setPage(value?.number?.toString() || "");
    goToPageHandler(value as Page);
  }

  async function goToPageHandler(selectedPage: Page) {
    if (selectedPage) {
      await window.history.replaceState(
        null,
        "",
        query.addMany({
          page: convertAPToEnglish(selectedPage.number.toString()),
          "page-label": selectedPage.label || selectedPage.number.toString(),
        })
      );
      // await dispatch(setScrollToPage(true));
      (onClose as () => void)();
    }
  }

  return (
    <Select
      getOptionLabel={(option) => convertToPersian(option.label || "")}
      getOptionValue={(option) => option.number.toString() || ""}
      options={selectedBook}
      onChange={onChangeHandler}
      placeholder={"Go to page"}
      noOptionsMessage={() => "No page found"}
      className="my-react-select-container w-full"
      classNamePrefix="my-react-select"
      value={selectedBook.find((item) => item.number == +page)}
      autoFocus={true}
      menuIsOpen={true}
    />
  );
};
