"use client";

import { forwardRef, useRef } from "react";
import { TableVirtuosoHandle, VirtuosoGrid } from "react-virtuoso";

//Types

//Redux
import {
  //  useAppDispatch,
  useAppSelector,
} from "@/lib/hooks";
import {
  booksSelector,
  // scrollStateSelector,
} from "@/lib/books/selectors";
// import { setScrollState } from "@/lib/books/actions";

//Components
import { BookItem } from ".";

export const BooksList = () => {
  //Redux
  // const dispatch = useAppDispatch();
  const books = useAppSelector(booksSelector);
  // const scrollState = useAppSelector(scrollStateSelector);

  //Virtuoso
  const virtuoso = useRef<TableVirtuosoHandle>(null);

  //States
  // const [isLoaded, setIsLoaded] = useState<boolean>(false);

  //Effects
  // useEffect(() => {
  //   if (!isLoaded) {
  //     setTimeout(() => {
  //       virtuoso?.current?.scrollToIndex({
  //         index: scrollState,
  //         align: "start",
  //         behavior: "auto",
  //       });
  //     }, 100);
  //     setIsLoaded(true);
  //   }

  //   return () => {
  //     setIsLoaded(false);
  //   };
  // }, []);

  //Functions
  // async function handleScroll(range: ListRange) {
  //   if (isLoaded) {
  //     dispatch(setScrollState(range.startIndex));
  //   }
  // }

  return (
    <VirtuosoGrid
      data={books || []}
      itemContent={(_, book) => <BookItem book={book} key={book.id} />}
      // rangeChanged={handleScroll}
      ref={virtuoso}
      className="overflow-x-hidden max-w-[100vw]"
      components={{
        // eslint-disable-next-line react/display-name
        List: forwardRef(({ style, children, ...props }, ref) => (
          <div
            ref={ref}
            {...props}
            style={{ ...style }}
            className="grid grid-cols-12 gap-3"
          >
            {children}
          </div>
        )),
        Item: ({ children, ...props }) => (
          <div
            {...props}
            className="md:col-span-6 lg:col-span-4 2xl:col-span-3 border rounded-xl shadow"
          >
            {children}
          </div>
        ),
      }}
      useWindowScroll
    />
  );
};
