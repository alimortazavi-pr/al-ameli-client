import { UseDisclosureProps } from "@nextui-org/react";

//Types

export interface ILayoutsState {
  darkMode: boolean;
}

export interface INextUIModalProps extends UseDisclosureProps {
  onOpenChange: () => void;
}
