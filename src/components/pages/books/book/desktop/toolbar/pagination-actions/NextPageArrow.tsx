import { Button, Tooltip } from "@nextui-org/react";
import { useQuery } from "next-app-use-query";

//Redux
import { bookDetailSelector, selectedBookSelector } from "@/lib/book/selectors";
import {  useAppSelector } from "@/lib/hooks";
// import { setScrollToPage } from "@/lib/book/actions";

//Translation
// import { useClientTranslation } from "@/hooks/translation";

//Utils
// import { storage } from "@/common/utils";

export const NextPageArrow = () => {
  //Redux
  // const dispatch = useAppDispatch();
  const bookDetail = useAppSelector(bookDetailSelector);
  const selectedBook = useAppSelector(selectedBookSelector);

  //Translation
  // const { t } = useClientTranslation(storage.getLanguage());

  //Other hooks
  const query = useQuery();

  //Functions
  async function nextPageHandler() {
    const currentPage = parseInt(query.get("page") || "1");
    if (currentPage < (bookDetail?.pagesCount || 1)) {
      const foundPageLabel =
        selectedBook.find((page) => page.number === currentPage + 1)?.label ||
        (currentPage + 1).toString();
      await window.history.replaceState(
        null,
        "",
        query.addMany({
          page: (currentPage + 1).toString(),
          "page-label": foundPageLabel,
        })
      );
      // await dispatch(setScrollToPage(true));
    }
  }

  return (
    <Tooltip content={'صفحه بعد'}>
      <Button
        isIconOnly
        color="default"
        variant="light"
        aria-label="next page"
        size="sm"
        onPress={nextPageHandler}
      >
        <span className="material-symbols-outlined text-default-600 !text-2xl">
          keyboard_arrow_down
        </span>
      </Button>
    </Tooltip>
  );
};
