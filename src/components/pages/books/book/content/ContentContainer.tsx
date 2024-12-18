import { useEffect } from "react";

//Redux
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setSelectedBook } from "@/lib/book/actions";
import { selectedBookSelector } from "@/lib/book/selectors";

//Components
import { PagesList } from ".";

export const ContentContainer = () => {
  //Redux
  const dispatch = useAppDispatch();
  const selectedBook = useAppSelector(selectedBookSelector);

  //Effects
  useEffect(() => {
    return () => {
      dispatch(setSelectedBook([]));
    };
  }, []);

  //Functions

  return (
    <div className={`h-full max-h-full md:rounded-b-lg`}>
      <PagesList pages={selectedBook || []} />
    </div>
  );
};
