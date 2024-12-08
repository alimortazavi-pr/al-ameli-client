import { extendVariants, Chip } from "@nextui-org/react";

export const ChipXS = extendVariants(Chip, {
  variants: {
    size: {
      xs: {
        base: "p-0 rounded-md min-h-0 h-auto",
        content: "py-[3px] text-xs px-1",
      },
    },
  },
});
