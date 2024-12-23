//Redux
import { bookDetailSelector } from "@/lib/book/selectors";
import { useAppSelector } from "@/lib/hooks";

//Components
import { ChipXS } from "@/components/common/CustomComponents";

//Translation
// import {
//   useClientTranslation,
//   useConvertNumbersFormat,
// } from "@/hooks/translation";

//Utils
// import { storage } from "@/common/utils";
import convertToPersian from "num-to-persian";

export const AuthorsItem = () => {
  //Redux
  const bookDetail = useAppSelector(bookDetailSelector);

  //Translation
  // const { t } = useClientTranslation(storage.getLanguage());
  // const convertNumbersFormat = useConvertNumbersFormat();

  return (
    bookDetail?.contributors &&
    bookDetail?.contributors.length > 0 && (
      <div className="flex items-center gap-3 px-6 py-3">
        <span className="text-primary whitespace-nowrap min-w-24">
          {/* {t("AuthorBookInfo_Label")} */}
          نویسنده
        </span>
        <span className="break-words flex flex-col flex-wrap gap-2 text-base">
          {bookDetail?.contributors?.map((contributor) => {
            return (
              <div
                className="flex items-center flex-wrap gap-1"
                key={contributor.id}
              >
                <ChipXS size="xs" color="default" variant="flat">
                  {contributor.role?.title ? `${contributor.role?.title}` : ""}
                </ChipXS>
                <span>
                  {contributor.displayName ?? contributor.contributor?.name}{" "}
                </span>
                <span className="text-sm">
                  {contributor.contributor?.era &&
                    `(${
                      contributor.contributor?.era != "معاصر"
                        ? convertToPersian(
                            (contributor.contributor?.era || 0).toString()
                          )
                        : "معاصر"
                    })`}
                </span>
              </div>
            );
          })}
        </span>
      </div>
    )
  );
};
