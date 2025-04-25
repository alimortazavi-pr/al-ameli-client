"use client";

import { FC, PropsWithChildren, Suspense } from "react";

//Components
import NextUIProvider from "./NextUIProvider";
import ReduxProvider from "./ReduxProvider";
import RootProvider from "./RootProvider";

//Theme

//ProgressBar
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export const ClientProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReduxProvider>
      <NextUIProvider>
        <Suspense fallback={<div></div>}>
          <RootProvider>{children}</RootProvider>
        </Suspense>
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
