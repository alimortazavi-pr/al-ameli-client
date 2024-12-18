import { Chip, Divider } from "@nextui-org/react";

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

export const BookShortInfoContent = () => {
  //Redux
  const bookDetail = useAppSelector(bookDetailSelector);

  //Translation
  // const { t } = useClientTranslation(storage.getLanguage());
  // const convertNumbersFormat = useConvertNumbersFormat();

  return (
    <div dir="rtl">
      <div className="flex items-center gap-1 border-default-300 pe-4 w-fit ps-3 py-2">
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
      <Divider />
      <div className="flex flex-col gap-1 ps-4 w-fit pe-3 py-2 bg-primary-50 rounded-e-xl">
        {bookDetail?.contributors?.map((contributor, i) => {
          return (
            <span className="text-sm block" key={i}>
              {contributor.role?.title ? `${contributor.role?.title}: ` : ""}
              {contributor.displayName ?? contributor.contributor?.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};
