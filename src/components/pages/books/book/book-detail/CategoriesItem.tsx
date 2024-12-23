//Redux
import { bookDetailSelector } from "@/lib/book/selectors";
import { useAppSelector } from "@/lib/hooks";

//Translation
// import { useClientTranslation } from "@/hooks/translation";

//Utils
// import { storage } from "@/common/utils";

export const CategoriesItem = () => {
  //Redux
  const bookDetail = useAppSelector(bookDetailSelector);

  //Translation
  // const { t } = useClientTranslation(storage.getLanguage());

  return (
    bookDetail?.categories &&
    bookDetail?.categories.length > 0 && (
      <div className="flex items-center gap-3 px-6 py-3">
        <span className="text-primary whitespace-nowrap min-w-24">
          {/* {t("CategoryBookInfo_Label")} */}
          موضوعات
        </span>
        <span className="break-words flex gap-2">
          {bookDetail?.categories
            ?.map((category) => {
              return category.name;
            })
            .join(" / ")}
        </span>
      </div>
    )
  );
};
