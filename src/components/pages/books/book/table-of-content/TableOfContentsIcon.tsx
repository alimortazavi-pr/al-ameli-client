"use client";

import { Button, Tooltip, useDisclosure } from "@nextui-org/react";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { TableDocument } from "iconsax-react";

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
            onClick={onOpen}
          >
            <TableDocument className="w-5 h-5 lg:w-7 lg:h-7" />
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
