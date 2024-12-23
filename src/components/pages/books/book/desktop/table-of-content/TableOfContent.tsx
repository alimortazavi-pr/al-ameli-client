/* eslint-disable @typescript-eslint/no-explicit-any */
import { Virtuoso, VirtuosoHandle } from "react-virtuoso";
import { useEffect, useRef, useState } from "react";
import { Spinner } from "@nextui-org/react";
import useQuery from "next-app-use-query";

//Types
import { PageContentRef } from "@/grpc/proto/ablibrary/types/page_content_pb";
import { IPageContentRef } from "@/common/interfaces";

//gRPC
import { bookServiceClientWeb } from "@/grpc/services/book/book-web.service";

//Redux
import { useAppSelector } from "@/lib/hooks";
import {
  bookDetailSelector,
  isOpenTableOfContentSelector,
} from "@/lib/book/selectors";

//Components
import { RenderItem, SearchBox } from ".";

// //Translation
// import { useClientTranslation } from "@/hooks/translation";

// //Utils
// import { storage } from "@/common/utils";

export const TableOfContent = () => {
  //Redux
  const isOpenTableOfContent = useAppSelector(isOpenTableOfContentSelector);
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
        isOpenTableOfContent
      ) {
        fetchTableOfContent();
        setBookId(bookDetail?.id as string);
        if (search) setSearch("");
      }
    }
  }, [isOpenTableOfContent, bookDetail?.id]);

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
    if (isOpenTableOfContent && items.length > 0) {
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
    setIsLoading(true);
    try {
      const bookId = bookDetail?.id as string;

      const res = await bookServiceClientWeb.tableOfContents({
        bookId: bookId,
      });

      const tableOfContents = (res.toJson as any)().items as PageContentRef[];
      const itemsRendered = renderItems(tableOfContents);
      setItems(itemsRendered);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
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
    <div
      className={`${
        isOpenTableOfContent ? "flex" : "hidden"
      } w-6/12 2xl:w-4/12 max-h-full min-h-full border-e border-default-200 px-6 pt-4 overflow-hidden flex-col`}
    >
      <div className="flex items-center gap-2 mb-6">
        <span className="font-semibold">
          {/* {t("TableOfContent_Label")} */}
          فهرست مطالب
        </span>
        <SearchBox search={search} setSearch={setSearch} />
      </div>
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner color="primary" />
        </div>
      ) : search && foundItems?.length <= 0 ? (
        <div className="w-full h-full flex items-center justify-center font-semibold text-primary">
          <span>
            {/* {t("TableOfContent_NotFound")} */}
            موردی یافت نشد
          </span>
        </div>
      ) : (
        <Virtuoso
          ref={virtuoso}
          className="h-full"
          data={foundItems?.length > 0 ? foundItems : items}
          itemContent={(i, item) => <RenderItem item={item} />}
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
