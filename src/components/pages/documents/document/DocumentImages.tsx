"use client";

import { FC } from "react";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Button, Spinner } from "@heroui/react";
import FileSaver from "file-saver";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

//Interface
import { IDocument } from "@/common/interfaces";

//Constants
import { BASE_API_URL, SERVER_BASE_API_URL } from "@/common/constants";

interface IProps {
  document: IDocument | undefined;
}
export const DocumentImages: FC<IProps> = ({ document }) => {
  //Functions
  function downloadDocument() {
    FileSaver.saveAs(
      `${BASE_API_URL}${document?.url}`,
      document?.category.name
    );
  }

  return (
    <div className="w-full bg-secondary-100 p-5 rounded-lg mb-8">
      {document && document.urls.length > 0 ? (
        <Swiper
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {document.urls?.map((url) => (
            <SwiperSlide key={url}>
              <div className="flex items-center justify-center mb-3">
                <div className="relative w-96 h-96">
                  <Image
                    src={`${SERVER_BASE_API_URL}${url}`}
                    alt=""
                    fill
                    className="object-contain rounded-lg w-40 h-20"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end gap-3">
                <PhotoProvider loadingElement={<Spinner />}>
                  <div>
                    <PhotoView src={`${BASE_API_URL}${url}`}>
                      <Button
                        isIconOnly
                        color="primary"
                        variant="flat"
                        size="lg"
                      >
                        <span className="material-symbols-outlined lg:!text-3xl">
                          zoom_in
                        </span>
                      </Button>
                    </PhotoView>
                  </div>
                </PhotoProvider>
                <Button
                  isIconOnly
                  color="primary"
                  variant="flat"
                  size="lg"
                  onPress={downloadDocument}
                >
                  <span className="material-symbols-outlined lg:!text-3xl">download</span>
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <>
          <div className="flex items-center justify-center mb-3">
            <div className="relative w-96 h-96">
              <Image
                src={`${SERVER_BASE_API_URL}${document?.url}`}
                alt=""
                fill
                className="object-contain rounded-lg w-40 h-20"
              />
            </div>
          </div>
          <div className="flex items-center justify-end gap-3">
            <PhotoProvider loadingElement={<Spinner />}>
              <div>
                <PhotoView src={`${BASE_API_URL}${document?.url}`}>
                  <Button isIconOnly color="primary" variant="flat" size="lg">
                    <span className="material-symbols-outlined lg:!text-3xl">zoom_in</span>
                  </Button>
                </PhotoView>
              </div>
            </PhotoProvider>
            <Button
              isIconOnly
              color="primary"
              variant="flat"
              size="lg"
              onPress={downloadDocument}
            >
              <span className="material-symbols-outlined lg:!text-3xl">download</span>
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
