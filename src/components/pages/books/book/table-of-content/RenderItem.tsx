import { FC, useEffect, useState } from "react";
import useQuery from "next-app-use-query";
import convertAPToEnglish from "ap-to-english";

//Types
import { IPageContentRef } from "@/common/interfaces";
import convertToPersian from "num-to-persian";

//Redux
import { useAppDispatch } from "@/lib/hooks";
import { setScrollToPage } from "@/lib/book/actions";

//Translation
// import { useConvertNumbersFormat } from "@/hooks/translation";

interface IProps {
  item: IPageContentRef;
  onClose: () => void;
}
export const RenderItem: FC<IProps> = ({ item, onClose }) => {
  //Redux
  const dispatch = useAppDispatch();

  //Translation
  // const convertNumbersFormat = useConvertNumbersFormat();

  //Other Hooks
  const query = useQuery();

  //States
  const [isSelected, setIsSelected] = useState<boolean>(false);

  //Life cycle
  useEffect(() => {
    const currentPage = parseInt(query.get("page") || "1");
    if (
      (item.pageNumber <= currentPage && currentPage < item.nextPageNumber) ||
      item.pageNumber === currentPage ||
      (item.nextPageNumber === currentPage && item.pageNumber === currentPage)
    ) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [query.get("page")]);

  //Functions
  async function goToPageHandler() {
    await window.history.replaceState(
      null,
      "",
      query.addMany({
        page: convertAPToEnglish(item.pageNumber.toString()),
      })
    );
    await dispatch(setScrollToPage(true));
    onClose();
  }

  return (
    <div>
      <span
        onClick={goToPageHandler}
        className={`flex flex-col py-1.5 cursor-pointer border-b px-2 ${
          isSelected ? "bg-primary-50" : ""
        }`}
      >
        <span className="text-default-800 leading-7 mb-1">{item.title}</span>
        <span className="text-default-700 self-end font-medium min-w-6 p-1 min-h-6 flex items-center justify-center bg-primary-50 rounded-full">
          {convertToPersian(
            item.pageLabel ? item.pageLabel : item.pageNumber.toString()
          )}
        </span>
      </span>
      {item.children ? (
        <div className={`ms-3`}>
          {item.children?.map((childItem, i) => (
            <RenderItem key={i} item={childItem} onClose={onClose} />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
