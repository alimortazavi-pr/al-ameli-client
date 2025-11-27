"use client";

import { Button, Tooltip, useDisclosure } from "@heroui/react";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

//Components
import { TableOfContentModal } from ".";

//Translation
// import { useClientTranslation } from "@/hooks/translation";

//Utils
// import { storage } from "@/common/utils";

export const TableOfContentsIcon = () => {
  //NextUI
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  //Translation
  // const { t } = useClientTranslation(storage.getLanguage());

  //Responsive
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });

  //States
  const [isClient, setIsClient] = useState(false);

  //Lifecycle
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <>
        <Tooltip content={"فهرست"}>
          <Button
            isIconOnly
            size={isLg ? "lg" : "sm"}
            color={"primary"}
            variant={"flat"}
            aria-label="table of contents"
            onPress={onOpen}
          >
            <span className="material-symbols-outlined lg:!text-3xl">toc</span>
          </Button>
        </Tooltip>
        <TableOfContentModal
          isOpen={isOpen}
          onOpen={onOpen}
          onOpenChange={onOpenChange}
          onClose={onClose}
        />
      </>
    )
  );
};
