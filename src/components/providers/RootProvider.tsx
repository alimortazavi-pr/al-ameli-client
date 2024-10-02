import { FC, PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";

//Redux

//Components
import { DrawerContainer } from "../common/Drawer";

//Utils

const RootProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="">{children}</div>
      <ToastContainer />
      <DrawerContainer />
    </>
  );
};

export default RootProvider;
