//Components
import { FilterSectionChips, FilterSectionFilterInput } from ".";

export const FilterSectionContainer = () => {
  return (
    <div className="bg-primary-500 rounded-xl w-full lg:w-72 shadow-sm lg:min-h-80 h-fit max-h-screen z-20 p-4 overflow-y-auto">
      <FilterSectionFilterInput />
      <FilterSectionChips />
    </div>
  );
};
