"use client";

import { Button } from "@heroui/react";
import { HambergerMenu } from "iconsax-react";
import { useEffect, useState } from "react";

//Redux
import { useAppDispatch } from "@/lib/hooks";
import { setIsOpenDrawer } from "@/lib/layouts/actions";

export const DrawerBtn = () => {
  //Redux
  const dispatch = useAppDispatch();

  //States
  const [isVisible, setIsVisible] = useState(true);

  //Lifecycle
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight * 2) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  //Functions
  function onOpenHandler() {
    dispatch(setIsOpenDrawer(true));
  }

  return (
    <Button
      isIconOnly
      className={`rounded-s-none fixed ${
        isVisible ? "opacity-100" : "opacity-0"
      } start-0 top-14 lg:top-20 z-10 duration-400 h-[52px]`}
      color="primary"
      onPress={onOpenHandler}
      size="lg"
    >
      <HambergerMenu className="w-7 h-7" />
    </Button>
  );
};
