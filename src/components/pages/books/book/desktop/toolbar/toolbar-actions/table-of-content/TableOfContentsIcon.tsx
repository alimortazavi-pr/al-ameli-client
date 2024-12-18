import { Button, Tooltip } from "@nextui-org/react";

//Redux
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleTableOfContentAction } from "@/lib/book/actions";
import { isOpenTableOfContentSelector } from "@/lib/book/selectors";

//Translation
// import { useClientTranslation } from "@/hooks/translation";

//Utils
// import { storage } from "@/common/utils";

export const TableOfContentsIcon = () => {
  //Redux
  const dispatch = useAppDispatch();
  const isOpenTableOfContent = useAppSelector(isOpenTableOfContentSelector);

  //Translation
  // const { t } = useClientTranslation(storage.getLanguage());

  //Functions
  function onPressHandler() {
    dispatch(toggleTableOfContentAction());
  }

  return (
    <Tooltip content={'فهرست'}>
      <Button
        isIconOnly
        color={isOpenTableOfContent ? "primary" : "default"}
        variant={isOpenTableOfContent ? "flat" : "light"}
        onPress={onPressHandler}
        aria-label="table of contents"
      >
        <span className="material-symbols-outlined text-default-600">list</span>
      </Button>
    </Tooltip>
  );
};
