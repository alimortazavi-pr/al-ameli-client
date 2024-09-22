import { FC, PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";

//Redux

//Components

//Utils

const RootProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="p-2">{children}</div>
      <ToastContainer />
    </>
  );
};

export default RootProvider;
