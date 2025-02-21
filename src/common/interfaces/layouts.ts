import { UseDisclosureProps } from "@heroui/react";

//Types

export interface ILayoutsState {
  darkMode: boolean;
  isOpenDrawer: boolean;
  pageTitle: string;
}

export interface INextUIModalProps extends UseDisclosureProps {
  onOpenChange: () => void;
}
