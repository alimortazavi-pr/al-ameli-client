import { Chip } from "@nextui-org/react";

//Redux
import { bookDetailSelector } from "@/lib/book/selectors";
import { useAppSelector } from "@/lib/hooks";
import convertToPersian from "num-to-persian";

//Translation
// import {
//   useClientTranslation,
//   useConvertNumbersFormat,
// } from "@/hooks/translation";

//Utils
// import { storage } from "@/common/utils";

export const BookTitle = () => {
  //Redux
  const bookDetail = useAppSelector(bookDetailSelector);

  //Translation
  // const { t } = useClientTranslation(storage.getLanguage());
  // const convertNumbersFormat = useConvertNumbersFormat();

  return (
    <div className="flex items-center gap-1 border-e border-default-300 pe-4 w-fit max-w-[66%] ps-3 py-2 bg-primary-100 rounded-s-xl">
      <span className="text-sm truncate">{bookDetail?.title || ""}</span>
      {bookDetail?.volumeLabel ? (
        <Chip className="rounded-md" color="primary" variant="flat" size="sm">
          {/* {t("BookVolume_Label")}{" "} */}ج
          {convertToPersian(bookDetail?.volumeLabel)}
        </Chip>
      ) : (
        ""
      )}
    </div>
  );
};
