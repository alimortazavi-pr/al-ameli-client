import { Chip } from "@heroui/react";
import useQuery from "next-app-use-query";

//Redux
import { useAppSelector } from "@/lib/hooks";
import { categoriesSelector } from "@/lib/categories/selectors";

//Constants
import { PATHS } from "@/common/constants";

export const FilterSectionChips = () => {
  //Redux
  const categories = useAppSelector(categoriesSelector);

  //Other Hooks
  const query = useQuery();

  //Functions
  function selectCategory(category: string) {
    if (query.get("category") === category) {
      window.history.replaceState(
        null,
        "",
        `${PATHS.BOOKS}${query.delete("category")}`
      );
    } else {
      window.history.replaceState(
        null,
        "",
        `${PATHS.BOOKS}${query.add("category", category)}`
      );
    }
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {categories?.map((category) => (
        <Chip
          key={category._id}
          variant={category._id === query.get("category") ? "faded" : "solid"}
          color="primary"
          className="cursor-pointer"
          onClick={() => selectCategory(category._id)}
          startContent={
            category._id === query.get("category") ? (
              <span className="material-symbols-outlined">check</span>
            ) : undefined
          }
        >
          {category.name}
        </Chip>
      ))}
    </div>
  );
};
