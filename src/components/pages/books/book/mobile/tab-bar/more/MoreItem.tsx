import { Button } from "@nextui-org/react";

export const MoreItem = () => {
  return (
    <Button
      isIconOnly
      color="default"
      variant="light"
      aria-label="tab-bar-bookmark"
      className="w-12 h-12"
    >
      <span className="material-symbols-outlined">more_vert</span>
    </Button>
  );
};
