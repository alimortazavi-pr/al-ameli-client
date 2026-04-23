import { FC } from "react";

//gRPC
import { PDFPageMeta } from "@/grpc/proto/ablibrary/services/book_service/book_service_pb";

//Components
import { OCRZoomViewerModal, PageOCR } from ".";

interface IProps {
  pages: PDFPageMeta[];
}
export const PagesList: FC<IProps> = ({ pages }) => {
  return (
    <>
      {pages.map((pageData, i) => (
        <PageOCR pageData={pageData} key={i} />
      ))}
      {/* <Virtuoso
        ref={virtuoso}
        id="virtuoso"
        className={`h-[calc(100%-32px)] overflow-x-hidden`}
        data={pages}
        itemContent={(i, pageData) => (
          <PageOCR pageData={pageData} parentRef={parentRef} />
        )}
        components={{
          Footer: () => <div className="h-[50vh] w-full"></div>,
        }}
        overscan={{
          main: 10000,
          reverse: 5000,
        }}
      /> */}
      <OCRZoomViewerModal />
    </>
  );
};
