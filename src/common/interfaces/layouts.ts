import { UseDisclosureProps } from "@heroui/react";

//Types

export interface ILayoutsState {
  darkMode: boolean;
  isOpenDrawer: boolean;
}

export interface INextUIModalProps extends UseDisclosureProps {
  onOpenChange: () => void;
}
