import { Chip, Skeleton } from "@nextui-org/react";
import { FC, MouseEvent, useMemo } from "react";
import { useRouter } from "next-nprogress-bar";

//Types
import { IBook } from "@/common/interfaces";

//Redux
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { isLoadingBooksListSelector } from "@/lib/loading/selectors";
import { setSelectedBookIdForBookDetail } from "@/lib/books/actions";

//Components
import { IconsSection, BookDetail } from ".";
import { PATHS } from "@/common/constants";
import convertToPersian from "num-to-persian";

//Translation
// import {
//   useClientTranslation,
//   useConvertNumbersFormat,
// } from "@/hooks/translation";

//Utils
// import { storage } from "@/common/utils";

interface IProps {
  book: IBook;
}
export const BookItem: FC<IProps> = ({ book }) => {
  //Redux
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(isLoadingBooksListSelector);

  //Next
  const router = useRouter();

  //Translation
  // const { t } = useClientTranslation(storage.getLanguage());
  // const convertNumbersFormat = useConvertNumbersFormat();

  const authors = useMemo(() => {
    return book.contributors
      .filter((contributor) => contributor.role?.slug === "author")
      .map(
        (contributor) =>
          contributor.displayName ?? contributor.contributor?.name
      );
  }, [book.contributors]);

  //Functions
  function goToBookHandler() {
    router.push(PATHS.BOOK(book.id));
  }

  function selectBookIdForBookDetailHandler(e: MouseEvent) {
    e.stopPropagation();
    dispatch(setSelectedBookIdForBookDetail(book.id));
  }

  return (
    <div
      className={`flex items-center justify-between md:items-stretch gap-1 rounded-xl mb-1 md:mb-0 p-2 cursor-pointer relative group min-h-32 h-full bg-secondary-100`}
      onClick={goToBookHandler}
    >
      <div
        className={`w-[calc(100%-40px)] flex flex-col justify-between gap-0.5`}
      >
        <Skeleton
          className="rounded-lg min-w-10 max-w-fit min-h-6"
          isLoaded={!isLoading}
          classNames={{
            content: "flex items-start gap-1 w-full",
          }}
        >
          <span className="font-normal max-w-[300px] md:max-w-full line-clamp-2">
            {book.title}
          </span>
          {book.volumeLabel ? (
            <div className="flex items-start">
              <Chip
                className="rounded-md text-xs h-fit py-1 px-0"
                color="default"
                variant="flat"
                classNames={{
                  content: "px-1",
                }}
              >
                جلد {convertToPersian(book.volumeLabel)}
              </Chip>
            </div>
          ) : (
            ""
          )}
        </Skeleton>

        <Skeleton
          className="rounded-lg min-w-10 max-w-fit h-6 mb-1"
          isLoaded={!isLoading}
          classNames={{
            content:
              "flex items-center text-default-700 gap-1 text-sm w-full mb-1.5",
          }}
        >
          <div className="font-normal max-w-[75%] flex items-center gap-1">
            <span className="max-w-full truncate text-center w-full">
              {authors.join(" / ")}
            </span>
            <span>
              {book.contributors.length > authors.length ? (
                <Chip
                  className="rounded-md text-xs h-fit py-1 px-0"
                  color="default"
                  variant="flat"
                  classNames={{
                    content: "px-1",
                  }}
                  onClick={selectBookIdForBookDetailHandler}
                >
                  {convertToPersian(
                    (book.contributors.length - authors.length).toString()
                  )}
                  +
                </Chip>
              ) : (
                ""
              )}
            </span>
          </div>
          <span className="max-w-[25%] whitespace-nowrap">
            (
            {book.contributors?.at(0)?.contributor?.era
              ? book.contributors?.at(0)?.contributor?.era != "معاصر"
                ? convertToPersian(
                    (book.contributors?.at(0)?.contributor?.era || 0).toString()
                  )
                : "معاصر"
              : ""}
            )
          </span>
        </Skeleton>
        <Skeleton
          className="rounded-lg min-w-10 max-w-fit h-6"
          isLoaded={!isLoading}
          classNames={{
            content: "flex items-center gap-2",
          }}
        >
          <IconsSection book={book} />
          <span className="text-xs font-normal text-default-600 truncate">
            {book.categories.map((category) => category.name).join(" / ")}
          </span>
        </Skeleton>
      </div>
      <div
        className={`flex flex-col items-center gap-2 justify-end group-hover:md:justify-between}`}
      >
        {!isLoading ? <BookDetail book={book} /> : ""}
      </div>
    </div>
  );
};
