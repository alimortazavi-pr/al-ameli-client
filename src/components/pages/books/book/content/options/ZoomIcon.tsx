import { FC } from "react";
import { Button, Tooltip } from "@heroui/react";

//Redux
import { useAppDispatch } from "@/lib/hooks";
import { setSelectedPage } from "@/lib/book/actions";

interface IProps {
  pageNumber: number;
}
export const ZoomIcon: FC<IProps> = ({ pageNumber }) => {
  //Redux
  const dispatch = useAppDispatch();

  //Functions
  function openViewerHandler() {
    dispatch(setSelectedPage(pageNumber));
  }

  return (
    <Tooltip content={"تكبير"}>
      <Button
        isIconOnly
        color="default"
        variant="light"
        aria-label="zoom in"
        size="sm"
        className={`opacity-70 hover:opacity-100`}
        onPress={openViewerHandler}
      >
        <span className={`material-symbols-outlined text-default-600`}>
          zoom_out_map
        </span>
      </Button>
    </Tooltip>
  );
};
