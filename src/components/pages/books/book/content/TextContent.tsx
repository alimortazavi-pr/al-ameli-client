import { FC, useEffect, useState } from "react";
import { Divider } from "@nextui-org/react";

//Interfaces
import { IPage, IPageContent } from "@/common/interfaces";

// //Redux
// import { useAppSelector } from "@/lib/hooks";

// //Utils
// import { storage } from "@/common/utils";

//Components
import { RenderContent } from ".";
import convertToPersian from "num-to-persian";

interface IProps {
  pageData: IPage;
  pageIndex: number;
}
export const TextContent: FC<IProps> = ({ pageData, pageIndex }) => {
  //Translation
  // const { t } = useClientTranslation(storage.getLanguage());
  // const convertNumbersFormat = useConvertNumbersFormat();

  //States
  const [footnotes, setFootnotes] = useState<IPageContent[]>([]);
  const [remarks, setRemarks] = useState<IPageContent[]>([]);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

  //Variables
  const footnotesVar: IPageContent[] = [];
  const remarksVar: IPageContent[] = [];

  //Refs
  // const { ref } = useInView({
  //   threshold: 0,
  //   rootMargin: "-50% 0% -50% 0%",
  //   root: parentRef.current,
  //   onChange: onChangeHandler,
  // });

  //Life cycle
  useEffect(() => {
    if (currentPageIndex >= pageData.contents?.length) {
      setFootnotes(footnotesVar);
      setRemarks(remarksVar);
    }
  }, [currentPageIndex]);

  //Functions
  // async function onChangeHandler(inView: boolean) {
  //   if (inView && !scrollToPage) {
  //     window.history.replaceState(
  //       null,
  //       "",
  //       query.addMany({
  //         page: pageIndex.toString(),
  //         "page-label": pageData.label || pageData.number.toString(),
  //       })
  //     );
  //   }
  // }

  function addFootnotesFunc(footnoteChildren: IPageContent) {
    footnotesVar.push(footnoteChildren);
  }

  function addRemarksFunc(remarkChildren: IPageContent) {
    remarksVar.push(remarkChildren);
  }

  return (
    <>
      <div
        className={`tracking-wide bg-primary/10 break-words h-fit mx-1 md:ms-4 md:me-1.5} leading-loose relative p-3 ${
          pageIndex - 1 === 0 ? "rounded-b-xl" : "rounded-xl"
        } mb-1`}
      >
        <div className="flex items-center mb-1">
          <span className={`min-w-fit text-default-800 font-semibold`}>
            {/* {t("PagePrefix_Label")}{" "} */}ص{" "}
            {convertToPersian(pageData.label || "0")}
          </span>
        </div>
        {pageData?.contents?.map((content, i) => (
          <RenderContent
            key={i}
            content={content}
            pageIndex={pageIndex}
            addFootnotesFunc={addFootnotesFunc}
            addRemarksFunc={addRemarksFunc}
            setCurrentPageIndex={setCurrentPageIndex}
          />
        ))}
        {remarks.length > 0 && (
          <div className="px-3 mt-1">
            <Divider className="w-1/2 mb-2 mt-7 bg-default-300" />
            {remarks.map((remark, i) => (
              <RenderContent
                key={i}
                content={remark}
                pageIndex={pageIndex}
                contentType="remark"
              />
            ))}
          </div>
        )}
        {footnotes.length > 0 && (
          <div className="px-3 mt-1">
            <Divider className="w-1/2 mb-2 mt-7 bg-default-300" />
            {footnotes.map((footnote, i) => (
              <RenderContent
                key={i}
                content={footnote}
                pageIndex={pageIndex}
                contentType="footnote"
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
