//Components
import { AsideBottomItems, AsideItem } from ".";

//Constants
import { PATHS } from "@/common/constants";

export const AsideItems = () => {
  return (
    <div className="">
      <AsideItem title="الکـتب" link={PATHS.BOOKS} />
      <AsideItem title="صــــور" link={PATHS.IMAGES} />
      <AsideItem title="وثائق" link={PATHS.DOCUMENTS} />
      <AsideItem title="مقالات" link={PATHS.ARTICLES} />
      <AsideItem title="صوتیات" link={PATHS.AUDIOS} />
      <AsideItem title="محاضرات وبرامج" link={PATHS.PLAYLISTS} />
      <AsideItem title="السیره الذاتیه" link="#" />
      <AsideBottomItems />
    </div>
  );
};
