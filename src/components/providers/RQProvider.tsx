"use client";
import { FC, PropsWithChildren, useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const RQProvider: FC<PropsWithChildren> = ({ children }) => {
  const [client] = useState<QueryClient>(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: Infinity,
          // refetchOnMount: false,
          gcTime: Infinity,
          // refetchOnWindowFocus : false,
        },
      },
    })
  );
  return (
    <QueryClientProvider client={client}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};

export default RQProvider;
