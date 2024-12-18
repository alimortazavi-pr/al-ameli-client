import { Button, Tooltip } from "@nextui-org/react";

//Redux
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleBookInfoAction } from "@/lib/book/actions";
import { isOpenBookInfoSelector } from "@/lib/book/selectors";

//Translation
// import { useClientTranslation } from "@/hooks/translation";

//Utils
// import { storage } from "@/common/utils";

export const BookInfoIcon = () => {
  //Redux
  const dispatch = useAppDispatch();
  const isOpenBookInfo = useAppSelector(isOpenBookInfoSelector);

  //Translation
  // const { t } = useClientTranslation(storage.getLanguage());

  //Functions
  function onPressHandler() {
    dispatch(toggleBookInfoAction());
  }

  return (
    <Tooltip content={"اطلاعات کتاب"}>
      <Button
        isIconOnly
        color={isOpenBookInfo ? "primary" : "default"}
        variant={isOpenBookInfo ? "flat" : "light"}
        onPress={onPressHandler}
        aria-label="Book Info"
      >
        <span className="material-symbols-outlined text-default-600">info</span>
      </Button>
    </Tooltip>
  );
};
