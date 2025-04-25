"use client";

import { FC, PropsWithChildren } from "react";

//Components
import NextUIProvider from "./NextUIProvider";
import ReduxProvider from "./ReduxProvider";
import RootProvider from "./RootProvider";
import { AnimatedProvider } from "./AnimatedProvider";

//Theme

//ProgressBar
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export const ClientProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReduxProvider>
      <NextUIProvider>
        <AnimatedProvider>
          <RootProvider>{children}</RootProvider>
        </AnimatedProvider>
        <ProgressBar
          height="3px"
          color="#00898F"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </NextUIProvider>
    </ReduxProvider>
  );
};
