"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

//Redux
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { isCompletedLogoSelector } from "@/lib/layouts/selectors";

//Assets
import alAmeliLogo from "@/assets/images/svgs/al-ameli-logo.svg";

//Components
import { OpenDrawerBtn, MobileBackgroundLogo } from ".";
import { AsideContainer } from "./aside";
import { setIsCompletedLogo } from "@/lib/layouts/actions";

function AnimatedText({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <div className="flex flex-wrap gap-2">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.3,
            duration: 0.8,
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

export const HomePage = () => {
  //Redux
  const dispatch = useAppDispatch();
  const isCompletedLogo = useAppSelector(isCompletedLogoSelector);

  //Functions
  function handleCompleteLogo() {
    dispatch(setIsCompletedLogo(true));
  }

  return (
    <div className="w-screen h-[100dvh] flex">
      <AsideContainer />
      <div className="w-full h-full bg-secondary-200 bg-[url(./../images/bg-hero.jpg)] bg-center bg-cover relative flex flex-col justify-end items-end pb-[10vh]">
        <div className="w-full lg:w-8/12 2xl:w-9/12 flex justify-center">
          <div className="text-white flex items-end gap-2">
            <AnimatePresence>
              {isCompletedLogo && (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                  className="flex flex-col gap-2 items-center lg:hidden"
                >
                  <OpenDrawerBtn />
                  <MobileBackgroundLogo />
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center gap-1"
              onAnimationComplete={handleCompleteLogo}
            >
              <h6 className="text-xl font-normal lg:text-4xl mb-2">
                <AnimatedText text="المرحوم العلامة آية اللّٰه الشيخ" />
              </h6>
              <Image
                src={alAmeliLogo}
                alt="Al-Ameli Logo"
                className="w-[230px] lg:w-[420px]"
              />
              <div className="flex items-center w-full justify-between gap-1">
                <span className="lg:text-2xl lg:tracking-wider">
                  ولادته ١٣٦٣ ه.ق
                </span>
                <span className="w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-primary"></span>
                <span className="lg:text-2xl lg:tracking-wider">
                  وفاته ١٤٤٥ ه.ق
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
