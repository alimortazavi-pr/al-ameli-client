import { Chip } from "@heroui/react";
import { useRouter } from "next-nprogress-bar";
import useQuery from "next-app-use-query";
import { TickCircle } from "iconsax-react";

//Redux
import { categoriesSelector } from "@/lib/categories/selectors";
import { useAppSelector } from "@/lib/hooks";
import { tagsSelector } from "@/lib/tags/selectors";

//Constants
import { PATHS } from "@/common/constants";

export const FilterSectionChips = () => {
  //Redux
  const categories = useAppSelector(categoriesSelector);
  const tags = useAppSelector(tagsSelector);

  //Next
  const router = useRouter();

  //Other Hooks
  const query = useQuery();

  //Functions
  function selectCategory(category: string) {
    if (query.get("category") === category) {
      router.replace(`${PATHS.IMAGES}${query.delete("category")}`);
    } else {
      router.replace(`${PATHS.IMAGES}${query.add("category", category)}`);
    }
  }

  function selectTags(tag: string) {
    const tagsQuery = query.get("tags") ? query.get("tags").split(",") : [];
    const newTagsQuery = tagsQuery.includes(tag)
      ? tagsQuery.filter((t) => t !== tag)
      : [...tagsQuery, tag];

    router.replace(
      `${PATHS.IMAGES}${query.add("tags", newTagsQuery.join(","))}`
    );
  }

  function checkTag(tag: string) {
    if ((query.get("tags")?.split(",") || []).includes(tag)) {
      return true;
    }
    return false;
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
              <TickCircle className="w-5 h-5" variant="Bulk" />
            ) : undefined
          }
        >
          {category.name}
        </Chip>
      ))}
      {tags?.map((tag) => (
        <Chip
          key={tag._id}
          variant={checkTag(tag._id) ? "faded" : "light"}
          color="primary"
          className={`cursor-pointer ${
            checkTag(tag._id) ? "" : "text-primary-50"
          }`}
          onClick={() => selectTags(tag._id)}
          startContent={
            checkTag(tag._id) ? (
              <TickCircle className="w-5 h-5" variant="Bulk" />
            ) : undefined
          }
        >
          #{tag.name}
        </Chip>
      ))}
    </div>
  );
};
