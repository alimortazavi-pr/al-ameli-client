import { Button } from "@heroui/react";
import { useRouter } from "next-nprogress-bar";

//Redux
import { useAppSelector } from "@/lib/hooks";
import { bookDetailSelector } from "@/lib/book/selectors";

//Common
import { PATHS } from "@/common/constants";

//Translation
// import { useClientTranslation } from "@/hooks/translation";

//Utils
// import { storage } from "@/common/utils";

export const BookDetailButtons = () => {
  //Redux
  const bookDetail = useAppSelector(bookDetailSelector);

  //Next
  const router = useRouter();

  //Translation
  // const { t } = useClientTranslation(storage.getLanguage());

  return (
    <div className="flex items-center justify-center gap-2 p-6">
      <Button
        onPress={() => {
          router.push(PATHS.BOOK(bookDetail?.id || ""));
        }}
        color="primary"
        variant="bordered"
        startContent={
          <span className="material-symbols-outlined !text-lg">
            auto_stories
          </span>
        }
        className="hidden md:flex"
      >
        {/* {t("BookInfoReading_Button")} */}
        مطالعه کتاب
      </Button>
    </div>
  );
};
