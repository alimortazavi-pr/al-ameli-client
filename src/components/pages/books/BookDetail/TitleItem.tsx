//Redux
import { selectedBookDetailSelector } from "@/lib/books/selectors";
import { useAppSelector } from "@/lib/hooks";

//Translation
// import { useClientTranslation } from "@/hooks/translation";

//Utils
// import { storage } from "@/common/utils";

export const TitleItem = () => {
  //Redux
  const bookDetail = useAppSelector(selectedBookDetailSelector);

  //Translation
  // const { t } = useClientTranslation(storage.getLanguage());

  return (
    bookDetail?.title && (
      <div className="flex items-center gap-3 px-6 py-3">
        <span className="text-primary whitespace-nowrap min-w-24">
          {/* {t("TitleBookInfo_Label")} */}
          عنوان کتاب
        </span>
        <span className="break-words">{bookDetail.title}</span>
      </div>
    )
  );
};
