import { FC, PropsWithChildren } from "react";

//Components
import { AlAmeliLeftLogo, AlAmeliRightLogo, BackLineLogo, DrawerBtn } from ".";

export const AppsProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-screen min-h-screen bg-secondary-50 relative">
      <div className="h-6 w-3/4 bg-secondary-100 absolute top-0 start-0 lg:start-auto lg:end-0 z-10"></div>
      <DrawerBtn />
      <div className="w-full h-full lg:border-s border-secondary-200 container mx-auto z-0 pt-10 px-4 lg:px-12 relative">
        <AlAmeliRightLogo />
        <AlAmeliLeftLogo />
        <>{children}</>
        <BackLineLogo />
      </div>
    </div>
  );
};
