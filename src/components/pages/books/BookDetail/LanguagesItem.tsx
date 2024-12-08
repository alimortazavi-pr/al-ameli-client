//Redux
import { selectedBookDetailSelector } from "@/lib/books/selectors";
import { useAppSelector } from "@/lib/hooks";

//Translation
// import { useClientTranslation } from "@/hooks/translation";

//Utils
// import { storage } from "@/common/utils";

export const LanguagesItem = () => {
  //Redux
  const bookDetail = useAppSelector(selectedBookDetailSelector);

  //Translation
  // const { t } = useClientTranslation(storage.getLanguage());

  return (
    bookDetail?.languages &&
    bookDetail?.languages.length > 0 && (
      <div className="flex items-center gap-3 px-6 py-3">
        <span className="text-primary whitespace-nowrap min-w-24">
          {/* {t("LanguageBookInfo_Label")} */}
          زبان
        </span>
        <span className="break-words flex gap-2">
          {bookDetail?.languages
            ?.map((language) => {
              return language.name;
            })
            .join(" / ")}
        </span>
      </div>
    )
  );
};
