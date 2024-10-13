import { FC, PropsWithChildren } from "react";

//Components
import { AppsProvider } from "@/components/providers/Apps";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return <AppsProvider>{children}</AppsProvider>;
};

export default AppLayout;
