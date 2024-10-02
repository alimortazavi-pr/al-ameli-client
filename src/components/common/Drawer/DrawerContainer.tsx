import { FC } from "react";
import Drawer from "react-modern-drawer";

//Redux
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { isOpenDrawerSelector } from "@/lib/layouts/selectors";
import { setIsOpenDrawer } from "@/lib/layouts/actions";

//Components
import { DrawerFooter, DrawerMobileLogo } from ".";
import { DrawerItems } from "./darwer-items";

export const DrawerContainer: FC = () => {
  //Redux
  const dispatch = useAppDispatch();
  const isOpenDrawer = useAppSelector(isOpenDrawerSelector);

  //Functions
  function onCloseHandler() {
    dispatch(setIsOpenDrawer(false));
  }

  return (
    <Drawer
      open={isOpenDrawer}
      onClose={onCloseHandler}
      direction="right"
      className="min-w-[270px]"
    >
      <div className="w-full h-full overflow-y-auto flex flex-col gap-2 justify-between bg-secondary px-3">
        <div className="w-full pt-10">
          <DrawerMobileLogo />
          <DrawerItems />
        </div>
        <DrawerFooter />
      </div>
    </Drawer>
  );
};
