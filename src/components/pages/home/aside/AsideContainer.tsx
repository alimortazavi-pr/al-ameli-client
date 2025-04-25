"use client";

import { FC } from "react";
import { AnimatePresence, motion } from "motion/react";

//Redux
import { useAppSelector } from "@/lib/hooks";
import { isCompletedLogoSelector } from "@/lib/layouts/selectors";

//Components
import { AsideFooter, AsideDesktopLogo } from ".";
import { AsideItems } from "./aside-items";

export const AsideContainer: FC = () => {
  //Redux
  const isCompletedLogo = useAppSelector(isCompletedLogoSelector);

  return (
    <div className="w-4/12 2xl:w-3/12 h-screen fixed start-0 top-0 z-10">
      <AnimatePresence>
        {isCompletedLogo && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full hidden lg:flex overflow-visible flex-col gap-2 justify-center bg-secondary px-8 relative"
          >
            <AsideDesktopLogo />
            <AsideItems />
            <AsideFooter />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
