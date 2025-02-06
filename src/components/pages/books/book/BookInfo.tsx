"use client";

import { Button, Tooltip } from "@heroui/react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { InfoCircle } from "iconsax-react";

//Redux
import { useAppDispatch } from "@/lib/hooks";
import { toggleBookInfoAction } from "@/lib/book/actions";

//Translation
// import { useClientTranslation } from "@/hooks/translation";

//Utils
// import { storage } from "@/common/utils";

export const BookInfo = () => {
  //Redux
  const dispatch = useAppDispatch();

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

  //Functions
  function onPressHandler() {
    dispatch(toggleBookInfoAction());
  }

  return (
    isClient && (
      <Tooltip content={"اطلاعات کتاب"}>
        <Button
          size={isLg ? "lg" : "sm"}
          isIconOnly
          color={"primary"}
          variant={"flat"}
          onPress={onPressHandler}
          aria-label="Book Info"
        >
          <InfoCircle className="w-5 h-5 lg:w-7 lg:h-7" />
        </Button>
      </Tooltip>
    )
  );
};
