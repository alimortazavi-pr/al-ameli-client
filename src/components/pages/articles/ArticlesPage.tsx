//Components
import { ArticlesItems } from ".";
import { FilterSectionContainer } from "./FIlterSection";

export const ArticlesPage = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-12 mt-5">
      <ArticlesItems />
      <FilterSectionContainer />
    </div>
  );
};
