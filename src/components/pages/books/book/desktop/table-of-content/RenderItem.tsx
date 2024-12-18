import { FC, useEffect, useState } from "react";
import useQuery from "next-app-use-query";

//Types
import { IPageContentRef } from "@/common/interfaces";

//Redux
import convertToPersian from "num-to-persian";
// import { setScrollToPage } from "@/lib/book/actions";

// //Translation
// import {
//   useClientTranslation,
//   useConvertNumbersFormat,
// } from "@/hooks/translation";

//Utils
// import { storage } from "@/common/utils";

interface IProps {
  item: IPageContentRef;
}
export const RenderItem: FC<IProps> = ({ item }) => {
  //Translation
  // const { t } = useClientTranslation(storage.getLanguage());
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
    window.history.replaceState(
      null,
      "",
      query.addMany({
        page: item.pageNumber.toString(),
        "page-label": item.pageLabel || item.pageNumber.toString(),
      })
    );
  }

  return (
    <div>
      <span
        onClick={goToPageHandler}
        className={`flex items-center justify-between gap-2 py-1.5 cursor-pointer border-b px-2 ${
          isSelected ? "bg-primary-50" : ""
        }`}
      >
        <span className="text-default-800 leading-7 mb-1 flex-1">
          {item.title}
        </span>
        <span className="text-default-700 font-medium min-w-6 p-1 min-h-6 flex items-center justify-center bg-primary-50 rounded-full">
          {convertToPersian(
            (item.pageLabel ? item.pageLabel : item.pageNumber).toString()
          )}
        </span>
      </span>
      {item.children ? (
        <div className={`ms-3`}>
          {item.children?.map((childItem, i) => (
            <RenderItem key={i} item={childItem} />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
