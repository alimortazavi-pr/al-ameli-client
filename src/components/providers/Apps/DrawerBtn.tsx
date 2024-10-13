'use client'

import { Button } from "@nextui-org/react";
import { More } from "iconsax-react";

//Redux
import { useAppDispatch } from "@/lib/hooks";
import { setIsOpenDrawer } from "@/lib/layouts/actions";

export const DrawerBtn = () => {
  //Redux
  const dispatch = useAppDispatch();

  //Functions
  function onOpenHandler() {
    dispatch(setIsOpenDrawer(true));
  }

  return (
    <Button
      isIconOnly
      className="rounded-s-none absolute start-0 top-14 lg:top-20 z-10"
      color="primary"
      onClick={onOpenHandler}
    >
      <More className="rotate-90" />
    </Button>
  );
};
