import { Button, useDisclosure } from "@heroui/react";

//Components
import { TableOfContentModal } from ".";

export const TableOfContentItem = () => {
  //NextUI
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <Button
        isIconOnly
        color="primary"
        variant="solid"
        aria-label="tab-bar-book-detail"
        className="w-14 h-14 rounded-2xl"
        onPress={onOpen}
      >
        <span className="material-symbols-outlined">list_alt</span>
      </Button>
      <TableOfContentModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    </>
  );
};
