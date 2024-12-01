"use client";

//Redux
import { useAppSelector } from "@/lib/hooks";
import { audiosByCategoriesSelector } from "@/lib/audios/selectors";

//Components
import { AudiosItem } from ".";

export const AudiosItems = () => {
  //Redux
  const audiosByCategories = useAppSelector(audiosByCategoriesSelector);

  return (
    <div className="grid grid-cols-12 gap-3 mb-3 w-full lg:w-8/12">
      {audiosByCategories?.map((audioByCategory) => (
        <AudiosItem
          key={audioByCategory._id}
          audioByCategory={audioByCategory}
        />
      ))}
    </div>
  );
};
