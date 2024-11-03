//Components
import { AsideBottomItems, AsideItem } from ".";

//Constants
import { PATHS } from "@/common/constants";

export const AsideItems = () => {
  return (
    <div className="">
      <AsideItem title="الکـتب" link="#" />
      <AsideItem title="صــــور" link={PATHS.IMAGES} />
      <AsideItem title="وثائق" link={PATHS.DOCUMENTS} />
      <AsideItem title="مقالات" link={PATHS.ARTICLES} />
      <AsideItem title="صوتیات" link="#" />
      <AsideItem title="محاضرات وبرامج" link="#" />
      <AsideItem title="السیره الذاتیه" link="#" />
      <AsideBottomItems />
    </div>
  );
};
