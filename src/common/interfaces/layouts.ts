import { UseDisclosureProps } from "@heroui/react";
import { pdfQualityType } from "../types";

//Types

export interface ILayoutsState {
  darkMode: boolean;
  isOpenDrawer: boolean;
  pageTitle: string;
  isCompletedLogo: boolean;
  pdfQualityInBook: pdfQualityType | undefined;
}

export interface INextUIModalProps extends UseDisclosureProps {
  onOpenChange: () => void;
}
