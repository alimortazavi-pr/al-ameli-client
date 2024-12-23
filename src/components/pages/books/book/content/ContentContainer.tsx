//Redux
import { useAppSelector } from "@/lib/hooks";
import { selectedBookSelector } from "@/lib/book/selectors";

//Components
import { PagesList } from ".";

export const ContentContainer = () => {
  //Redux
  const selectedBook = useAppSelector(selectedBookSelector);

  //Effects

  //Functions

  return (
    <div className={`md:rounded-b-lg h-fit`}>
      <PagesList pages={selectedBook || []} />
    </div>
  );
};
