import { FC, useMemo } from "react";
import Image from "next/image";
// import useQuery from "next-app-use-query";

//Interfaces
import { BoundingBox } from "@/grpc/proto/ablibrary/types/ocr_pb";
import { PDFPageMeta } from "@/grpc/proto/ablibrary/services/book_service/book_service_pb";

//Redux
import { useAppSelector } from "@/lib/hooks";
import {
  // scrollToPageSelector,
  selectedOCRBookSelector,
} from "@/lib/book/selectors";

//Components
import { OcrNotice, OCROptionsContainer } from "../options";

interface IProps {
  pageData: PDFPageMeta;
}
export const PageOCR: FC<IProps> = ({ pageData }) => {
  //Redux
  const selectedOCRBook = useAppSelector(selectedOCRBookSelector);
  // const scrollToPage = useAppSelector(scrollToPageSelector);

  //Other Hooks
  // const query = useQuery();

  //Lifecycle
  const orderedLines = useMemo(() => {
    const page = selectedOCRBook.find((p) => p.number === pageData.number);
    const lines = page?.blocks?.flatMap((block) => block.lines ?? []) ?? [];
    return lines.slice().sort((a, b) => {
      const aBox = a.boundingBox as BoundingBox;
      const bBox = b.boundingBox as BoundingBox;
      if (aBox.y1 !== bBox.y1) return aBox.y1 - bBox.y1;
      return aBox.x1 - bBox.x1;
    });
  }, [selectedOCRBook, pageData.number]);

  //Functions
  // async function onChangeHandler(inView: boolean) {
  //   if (inView && !scrollToPage) {
  //     window.history.replaceState(
  //       null,
  //       "",
  //       query.addMany({
  //         page: pageData.number.toString(),
  //         "page-label": pageData.number.toString(),
  //       }),
  //     );
  //   }
  // }

  return (
    <div
      className="w-full h-fit flex items-start justify-center relative pt-8 md:pt-0"
      style={{
        minHeight: pageData.height || "1000px",
      }}
    >
      <div className="w-full md:w-1/2">
        {pageData.width != 0 && (
          <div className="flex justify-center items-center">
            <div
              className={`w-full mx-1 md:mx-0 relative my-2 border-2`}
              style={{ aspectRatio: pageData.width / pageData.height }}
            >
              {selectedOCRBook.length != 0 &&
                pageData.width !== 0 &&
                orderedLines.length > 0 && (
                  <svg
                    className="absolute inset-0 z-10"
                    viewBox={`0 0 ${pageData.width} ${pageData.height}`}
                    preserveAspectRatio="none"
                    style={{
                      userSelect: "text",
                      pointerEvents: "auto",
                    }}
                  >
                    <text
                      fill="transparent"
                      style={{ unicodeBidi: "plaintext" }}
                      className="selection:fill-white selection:bg-blue-600/70"
                    >
                      {orderedLines.map((line) => {
                        const { x1, y1, x2, y2 } =
                          line.boundingBox as BoundingBox;
                        const tokenBoxes = (line.tokens ?? []).map(
                          (token) => token.boundingBox as BoundingBox,
                        );
                        const tokenX1 =
                          tokenBoxes.length > 0
                            ? Math.min(...tokenBoxes.map((box) => box.x1))
                            : x1;
                        const tokenX2 =
                          tokenBoxes.length > 0
                            ? Math.max(...tokenBoxes.map((box) => box.x2))
                            : x2;
                        const tokenHeights =
                          tokenBoxes.length > 0
                            ? tokenBoxes.map(
                                (box) => (box.y2 - box.y1) * pageData.height,
                              )
                            : [(y2 - y1) * pageData.height];
                        const sortedHeights = tokenHeights
                          .slice()
                          .sort((a, b) => a - b);
                        const medianTokenHeight =
                          sortedHeights[Math.floor(sortedHeights.length / 2)] ||
                          1;
                        const lineWidth = Math.max(
                          1,
                          (tokenX2 - tokenX1) * pageData.width,
                        );
                        const lineHeight = Math.max(1, medianTokenHeight * 0.8);
                        const text =
                          line.tokens?.map((token) => token.text).join(" ") ??
                          "";

                        return (
                          <tspan
                            key={line.id}
                            x={tokenX2 * pageData.width}
                            y={y1 * pageData.height}
                            textAnchor="start"
                            direction="rtl"
                            dominantBaseline="text-before-edge"
                            fontSize={lineHeight}
                            textLength={lineWidth}
                            lengthAdjust="spacing"
                          >
                            {text}
                          </tspan>
                        );
                      })}
                    </text>
                  </svg>
                )}

              <Image
                src={`${pageData.imageUrl}?dpi=96`}
                fill
                alt=""
                className="select-none pointer-events-none"
                sizes={""}
                draggable={false}
                unoptimized={true}
              />
            </div>
          </div>
        )}
      </div>
      <OCROptionsContainer pageNumber={pageData.number} />
      <OcrNotice />
    </div>
  );
};
