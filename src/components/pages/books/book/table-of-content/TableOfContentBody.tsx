/* eslint-disable @typescript-eslint/no-explicit-any */
import { Virtuoso, VirtuosoHandle } from "react-virtuoso";
import { FC, useEffect, useRef, useState } from "react";
import { Spinner } from "@nextui-org/react";
import useQuery from "next-app-use-query";

//Types
import { PageContentRef } from "@/grpc/proto/ablibrary/types/page_content_pb";
import { IPageContentRef } from "@/common/interfaces";

//gRPC
import { bookServiceClientWeb } from "@/grpc/services/book/book-web.service";

//Redux
import { useAppSelector } from "@/lib/hooks";
import { bookDetailSelector } from "@/lib/book/selectors";

//Components
import { RenderItem, SearchBox } from ".";

//Translation
// import { useClientTranslation } from "@/hooks/translation";

// //Utils
// import { storage } from "@/common/utils";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
export const TableOfContentBody: FC<IProps> = ({ isOpen, onClose }) => {
  //Redux
  const bookDetail = useAppSelector(bookDetailSelector);

  //Translation
  // const { t } = useClientTranslation(storage.getLanguage());

  //Other Hooks
  const query = useQuery();

  //States
  const [items, setItems] = useState<IPageContentRef[]>([]);
  const [foundItems, setFoundItems] = useState<IPageContentRef[]>([]);
  const [bookId, setBookId] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [rangeList, setRangeList] = useState<{
    start: number;
    end: number;
  }>({
    start: 0,
    end: 10,
  });

  //Refs
  const virtuoso = useRef<VirtuosoHandle | null>(null);

  //Life cycle
  useEffect(() => {
    if (bookDetail?.id) {
      if (
        (items.length === 0 ||
          (items.length > 0 && bookId !== bookDetail?.id)) &&
        isOpen
      ) {
        fetchTableOfContent();
        setBookId(bookDetail?.id as string);
        if (search) setSearch("");
      }
    }
  }, [isOpen, bookDetail?.id]);

  useEffect(() => {
    setFoundItems([]);
    if (!search) {
      setFoundItems([]);
    } else {
      const searchReg = new RegExp(search.trim(), "gi");
      filterItems(items, searchReg);
    }
  }, [search]);

  useEffect(() => {
    const currentPage = parseInt(query.get("page") || "1");
    if (isOpen && items.length > 0) {
      if (
        items[rangeList.start]?.pageNumber > currentPage ||
        currentPage > items[rangeList.end]?.pageNumber
      ) {
        for (let i = 0; i < items.length; i++) {
          if (
            items[i]?.pageNumber <= currentPage &&
            currentPage <= items[i]?.nextPageNumber
          ) {
            setTimeout(() => {
              virtuoso?.current?.scrollToIndex({
                index: i,
                align: "start",
                behavior: "smooth",
              });
            }, 200);
            break;
          }
        }
      }
    }
  }, [query.get("page"), items, virtuoso]);

  //Functions
  async function fetchTableOfContent() {
    // await dispatch(setIsLoadingTableOfContent(true));
    try {
      const bookId = bookDetail?.id as string;

      const res = await bookServiceClientWeb.tableOfContents({
        bookId: bookId,
      });

      const tableOfContents = (res.toJson as any)().items as PageContentRef[];
      const itemsRendered = renderItems(tableOfContents);
      setItems(itemsRendered);
      // await dispatch(setIsLoadingTableOfContent(false));
    } catch (error) {
      console.error(error);
      // await dispatch(setIsLoadingTableOfContent(false));
    }
  }

  function renderItems(
    items: PageContentRef[],
    parentNextPage?: number
  ): IPageContentRef[] {
    return items.map((item, i) => {
      let itemRendered: IPageContentRef;
      let nextPageNumber;
      if (item.children) {
        nextPageNumber = item.children[0].pageNumber;
        itemRendered = {
          ...item,
          children: renderItems(
            item.children,
            items[i + 1]?.pageNumber ||
              bookDetail?.pagesCount ||
              items[items.length - 1].pageNumber
          ),
          nextPageNumber: nextPageNumber,
        } as IPageContentRef;
      } else {
        nextPageNumber =
          items[i + 1]?.pageNumber || parentNextPage || item.pageNumber;

        itemRendered = {
          ...item,
          nextPageNumber: nextPageNumber,
        } as IPageContentRef;
      }
      return itemRendered;
    }) as IPageContentRef[];
  }

  async function filterItems(items: IPageContentRef[], searchReg: RegExp) {
    if (items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (searchReg.test(item.title)) {
          await setFoundItems((prev) => [...prev, item]);
        } else if (item.children?.length > 0) {
          filterItems(item.children, searchReg);
        }
      }
    }
  }

  return (
    <div className="w-full h-[80vh]">
      <SearchBox search={search} setSearch={setSearch} />
      {false ? (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner color="primary" />
        </div>
      ) : search && foundItems?.length <= 0 ? (
        <div className="w-full h-[calc(100%-60px)] flex items-center justify-center font-semibold text-primary">
          <span>
            {/* {t("NoResultFound_Label")} */}
            No result found
          </span>
        </div>
      ) : (
        <Virtuoso
          ref={virtuoso}
          className="max-h-[calc(100%-70px)] flex-auto flex flex-col gap-3"
          data={foundItems?.length > 0 ? foundItems : items}
          itemContent={(i, item) => (
            <RenderItem item={item} onClose={onClose} />
          )}
          rangeChanged={(range) => {
            setRangeList({
              start: range.startIndex,
              end: range.endIndex,
            });
          }}
        />
      )}
    </div>
  );
};
