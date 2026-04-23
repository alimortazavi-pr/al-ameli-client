import { Chip } from "@heroui/react";

export const OcrNotice = () => {
  return (
    <Chip
      color="default"
      variant="flat"
      size="sm"
      startContent={
        <span className="material-symbols-outlined !text-xl">info</span>
      }
      className="mx-2 bg-primary-50/70 rounded-full text-default-600 start-0 top-1 absolute md:hidden"
    >
      نص مستخرج آلياً
    </Chip>
  );
};
