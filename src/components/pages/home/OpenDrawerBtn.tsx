'use client'

import { Button } from "@heroui/react";

//Redux
import { useAppDispatch } from "@/lib/hooks";
import { setIsOpenDrawer } from "@/lib/layouts/actions";

export const OpenDrawerBtn = () => {
  //Redux
  const dispatch = useAppDispatch();

  //Functions
  function onOpenHandler() {
    dispatch(setIsOpenDrawer(true));
  }

  return (
    <Button
      isIconOnly
      className="w-11 h-11 rounded-full"
      color="primary"
      onPress={onOpenHandler}
    >
      <span className="material-symbols-outlined">arrow_back_ios_new</span>
    </Button>
  );
};
