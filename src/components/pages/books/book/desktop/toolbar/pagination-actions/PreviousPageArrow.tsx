import { Button, Tooltip } from "@nextui-org/react";
import { useQuery } from "next-app-use-query";

//Redux
import { useAppSelector } from "@/lib/hooks";
// import { setScrollToPage } from "@/lib/book/actions";
import { selectedBookSelector } from "@/lib/book/selectors";

//Translation
// import { useClientTranslation } from "@/hooks/translation";

//Utils
// import { storage } from "@/common/utils";

export const PreviousPageArrow = () => {
  //Redux
  // const dispatch = useAppDispatch();
  const selectedBook = useAppSelector(selectedBookSelector);

  //Translation
  // const { t } = useClientTranslation(storage.getLanguage());

  //Other hooks
  const query = useQuery();

  //Functions
  async function PreviousPageHandler() {
    const currentPage = parseInt(query.get("page") || "1");
    if (currentPage > 1) {
      const foundPageLabel =
        selectedBook.find((page) => page.number === currentPage - 1)?.label ||
        (currentPage - 1).toString();
      await window.history.replaceState(
        null,
        "",
        query.addMany({
          page: (currentPage - 1).toString(),
          "page-label": foundPageLabel,
        })
      );
      // await dispatch(setScrollToPage(true));
    }
  }

  return (
    <Tooltip content={"صفحه قبل"}>
      <Button
        isIconOnly
        color="default"
        variant="light"
        size="sm"
        aria-label="previous page"
        onPress={PreviousPageHandler}
      >
        <span className="material-symbols-outlined text-default-600 !text-2xl">
          keyboard_arrow_up
        </span>
      </Button>
    </Tooltip>
  );
};
