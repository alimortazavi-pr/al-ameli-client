"use client";

import { usePathname } from "next/navigation";

//Redux
import { useAppSelector } from "@/lib/hooks";
import { pageTitleSelector } from "@/lib/layouts/selectors";

export const PageTitle = () => {
  //Redux
  const pageTitle = useAppSelector(pageTitleSelector);

  //Next
  const pathname = usePathname();

  return (
    (pathname.match(/\//g) || []).length === 1 &&
    pageTitle && (
      <div className="bg-secondary py-1 px-2 lg:py-2 lg:px-4 rounded-full">
        <h3 className="text-base lg:text-3xl font-semibold text-primary-800">
          {pageTitle}
        </h3>
      </div>
    )
  );
};
