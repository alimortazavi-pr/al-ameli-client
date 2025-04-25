import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren } from "react";

export const AnimatedProvider: FC<PropsWithChildren> = ({ children }) => {
  //Next
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
