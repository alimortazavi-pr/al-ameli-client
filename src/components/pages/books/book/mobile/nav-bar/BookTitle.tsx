//Redux
import { bookDetailSelector } from "@/lib/book/selectors";
import { setSelectedBookIdForBookDetail } from "@/lib/books/actions";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export const BookTitle = () => {
  //Redux
  const dispatch = useAppDispatch();
  const bookDetail = useAppSelector(bookDetailSelector);

  //Functions
  function selectBookIdForBookDetailHandler() {
    dispatch(setSelectedBookIdForBookDetail(bookDetail?.id));
  }

  return (
    <div
      className="max-w-[calc(100%-40px)] truncate"
      onClick={selectBookIdForBookDetailHandler}
    >
      <span>{bookDetail?.title}</span>
    </div>
  );
};
