//Components
import { FilterSectionChips, FilterSectionFilterInput } from ".";

export const FilterSectionContainer = () => {
  return (
    <div className="bg-primary-500 rounded-xl w-full lg:w-64 shadow-sm lg:min-h-80 h-fit z-20 p-4">
      <FilterSectionFilterInput />
      <FilterSectionChips />
    </div>
  );
};
