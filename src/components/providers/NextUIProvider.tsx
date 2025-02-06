"use client";

import { FC, PropsWithChildren, useEffect } from "react";
import { HeroUIProvider as NxUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

//Redux
import { useAppDispatch } from "@/lib/hooks";
import { darkModeCheckerAction } from "@/lib/layouts/actions";

const HeroUIProvider: FC<PropsWithChildren> = ({ children }) => {
  //Redux
  const dispatch = useAppDispatch();

  //Life cycle
  useEffect(() => {
    dispatch(darkModeCheckerAction());
  }, []);

  return (
    <NxUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {children}
      </NextThemesProvider>
    </NxUIProvider>
  );
};

export default HeroUIProvider;
