import { useEffect, useMemo } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@heroui/react";
import Image from "next/image";
import { Textfit } from "react-textfit";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

//Interfaces
import { BoundingBox } from "@/grpc/proto/ablibrary/types/ocr_pb";

//Redux
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  selectedOCRBookSelector,
  selectedPageSelector,
  selectedPDFBookSelector,
} from "@/lib/book/selectors";
import { pdfQualityInBookSelector } from "@/lib/layouts/selectors";
import { setSelectedPage } from "@/lib/book/actions";

//Components
import { ChangePageContainer } from "./change-page";
import { PDFQuality } from "../../pdf-quality";

export const OCRZoomViewerModal = () => {
  //Redux
  const dispatch = useAppDispatch();
  const selectedOCRBook = useAppSelector(selectedOCRBookSelector);
  const selectedPDFBook = useAppSelector(selectedPDFBookSelector);
  const selectedPage = useAppSelector(selectedPageSelector);
  const pdfQualityInBook = useAppSelector(pdfQualityInBookSelector);

  //HeroUI
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  //Lifecycle
  useEffect(() => {
    if (selectedPage !== undefined) {
      onOpen();
    }
  }, [selectedPage]);

  const pageData = useMemo(() => {
    if (!selectedPDFBook || selectedPage === null) return undefined;
    return selectedPDFBook.find((page) => page.number === selectedPage);
  }, [selectedPDFBook, selectedPage]);

  const imageUrl = useMemo(() => {
    if (!pageData) return "";
    const quality = pdfQualityInBook;
    return quality ? `${pageData.imageUrl}?dpi=${quality}` : pageData.imageUrl;
  }, [pageData, pdfQualityInBook]);

  const ocrPage = useMemo(() => {
    if (!pageData || selectedOCRBook.length === 0) return undefined;
    return selectedOCRBook.find((page) => page.number === pageData.number);
  }, [pageData, selectedOCRBook]);

  //Functions
  function onCloseHandler() {
    dispatch(setSelectedPage(undefined));
    onClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={onCloseHandler}
      placement="center"
      size="full"
      className="bg-transparent"
      hideCloseButton
    >
      <ModalContent>
        <ModalBody className="p-3 relative" dir="ltr">
          {pageData && (
            <TransformWrapper
              key={selectedPage ?? "empty"}
              initialScale={1}
              minScale={0.5}
              maxScale={6}
              limitToBounds={false}
              wheel={{ step: 0.2 }}
              doubleClick={{ disabled: true }}
              panning={{ velocityDisabled: true }}
              centerOnInit={true}
            >
              {({ zoomIn, zoomOut, centerView }) => (
                <div className="w-full flex flex-col h-full md:h-[calc(100dvh-90px)] items-center gap-3">
                  <div className="max-w-fit flex items-center justify-center gap-2 bg-default-50 py-2 px-4 rounded-full">
                    <PDFQuality isSm />
                    <Button
                      size="sm"
                      variant="flat"
                      onPress={() => zoomOut()}
                      isIconOnly
                    >
                      <span className="material-symbols-outlined">
                        zoom_out
                      </span>
                    </Button>
                    <Button
                      size="sm"
                      variant="flat"
                      onPress={() => {
                        centerView(1);
                      }}
                      isIconOnly
                    >
                      <span className="material-symbols-outlined">
                        fit_page
                      </span>
                    </Button>
                    <Button
                      size="sm"
                      variant="flat"
                      onPress={() => zoomIn()}
                      isIconOnly
                    >
                      <span className="material-symbols-outlined">zoom_in</span>
                    </Button>
                    <Button
                      size="sm"
                      variant="flat"
                      onPress={onCloseHandler}
                      isIconOnly
                      color="danger"
                    >
                      <span className="material-symbols-outlined">close</span>
                    </Button>
                  </div>
                  <div className="w-full flex justify-center h-full">
                    <TransformComponent wrapperClass="!w-full !h-full">
                      <div
                        className="relative w-dvw md:w-auto md:h-[calc(100dvh-90px)]"
                        style={{
                          aspectRatio: pageData.width / pageData.height,
                        }}
                      >
                        {ocrPage?.blocks?.map((block) =>
                          block.lines?.map((line) => {
                            const { x1, y1, x2, y2 } =
                              line.boundingBox as BoundingBox;
                            return (
                              <Textfit
                                mode="single"
                                key={line.id}
                                style={{
                                  position: "absolute",
                                  left: `${x1 * 100}%`,
                                  top: `${y1 * 100}%`,
                                  width: `${(x2 - x1) * 100}%`,
                                  height: `${(y2 - y1) * 100}%`,
                                  direction: "rtl",
                                  zIndex: 10,
                                  whiteSpace: "nowrap",
                                }}
                                className="text-transparent selection:text-white selection:bg-blue-600/70"
                              >
                                {line.tokens
                                  ?.map((token) => token.text)
                                  .join(" ")}
                              </Textfit>
                            );
                          }),
                        )}
                        <Image
                          src={imageUrl}
                          fill
                          alt=""
                          className="select-none pointer-events-none"
                          sizes="90vw"
                          draggable={false}
                          unoptimized={true}
                        />
                      </div>
                    </TransformComponent>
                  </div>
                </div>
              )}
            </TransformWrapper>
          )}
          <ChangePageContainer />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
