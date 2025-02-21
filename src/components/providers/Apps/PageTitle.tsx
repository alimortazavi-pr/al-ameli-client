"use client";

//Redux
import { useAppSelector } from "@/lib/hooks";
import { pageTitleSelector } from "@/lib/layouts/selectors";

export const PageTitle = () => {
  //Redux
  const pageTitle = useAppSelector(pageTitleSelector);

  return (
    <div className="bg-secondary py-1 px-2 lg:py-2 lg:px-4 rounded-full">
      <h3 className="text-base lg:text-3xl font-semibold text-primary-800">{pageTitle}</h3>
    </div>
  );
};
