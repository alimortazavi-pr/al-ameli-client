import { Button } from "@nextui-org/react";
import { FC } from "react";

//Types
import { IBook } from "@/common/interfaces";

//Redux
import { useAppDispatch } from "@/lib/hooks";
import { setSelectedBookIdForBookDetail } from "@/lib/books/actions";

interface IProps {
  book: IBook;
}
export const BookDetail: FC<IProps> = ({ book }) => {
  //Redux
  const dispatch = useAppDispatch();

  //Functions
  function selectBookIdForBookDetailHandler() {
    dispatch(setSelectedBookIdForBookDetail(book.id));
  }

  return (
    <Button
      isIconOnly
      color="primary"
      variant="light"
      aria-label="book-details"
      className="rounded-full"
      size="sm"
      onPress={selectBookIdForBookDetailHandler}
    >
      <span className="material-symbols-outlined !text-[22px]">info</span>
    </Button>
  );
};
