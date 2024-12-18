//Redux
import { bookDetailSelector } from "@/lib/book/selectors";
import { useAppSelector } from "@/lib/hooks";

export const AuthorName = () => {
  //Redux
  const bookDetail = useAppSelector(bookDetailSelector);

  return (
    <div className="flex items-center gap-1 ps-4 w-fit max-w-[34%] pe-3 py-2 bg-primary-100 rounded-e-xl">
      <span className="text-sm truncate">
        {bookDetail?.contributors?.at(0)?.contributor?.name || ""}
      </span>
    </div>
  );
};
