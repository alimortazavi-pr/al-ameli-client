import { FC } from "react";

//Components
import { AsideFooter, AsideDesktopLogo } from ".";
import { AsideItems } from "./aside-items";

export const AsideContainer: FC = () => {
  return (
    <div className="w-4/12 2xl:w-3/12 h-full hidden lg:flex overflow-y-auto flex-col gap-2 justify-between bg-secondary px-3">
      <div className="w-full pt-10 lg:pt-[20dvh] flex justify-center">
        <AsideDesktopLogo />
        <AsideItems />
      </div>
      <AsideFooter />
    </div>
  );
};
