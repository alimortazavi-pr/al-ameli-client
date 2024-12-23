//Redux
import { bookDetailSelector } from "@/lib/book/selectors";
import { useAppSelector } from "@/lib/hooks";

//Translation
// import { useClientTranslation } from "@/hooks/translation";

//Utils
// import { storage } from "@/common/utils";

export const PublisherItem = () => {
  //Redux
  const bookDetail = useAppSelector(bookDetailSelector);

  //Translation
  // const { t } = useClientTranslation(storage.getLanguage());

  return (
    bookDetail?.publisher?.name && (
      <div className="flex items-center gap-3 px-6 py-3">
        <span className="text-primary  whitespace-nowrap min-w-24">
          {/* {t("PublisherBookInfo_Label")} */}
          ناشر
        </span>
        <span className="break-words">{bookDetail.publisher.name}</span>
      </div>
    )
  );
};
