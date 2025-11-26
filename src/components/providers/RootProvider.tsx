import { FC, PropsWithChildren } from "react";

//Toast
import { Slide, ToastContainer } from "react-toastify";
const contextClass = {
  success: "bg-success-600",
  error: "bg-danger-600",
  info: "bg-primary-600",
  warning: "bg-warning-400",
  default: "bg-default-600",
};

//Components
import { DrawerContainer } from "../common/Drawer";

const RootProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="overflow-x-hidden">{children}</div>
      <ToastContainer
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
        toastClassName={(context) =>
          contextClass[context?.type || "default"] +
          " flex items-center p-3 rounded-lg shadow-lg mb-2"
        }
      />
      <DrawerContainer />
    </>
  );
};

export default RootProvider;
