import { UseDisclosureProps } from "@heroui/react";

//Types

export interface ILayoutsState {
  darkMode: boolean;
  isOpenDrawer: boolean;
  pageTitle: string;
  isCompletedLogo: boolean;
}

export interface INextUIModalProps extends UseDisclosureProps {
  onOpenChange: () => void;
}
