import { usePathname } from "next/navigation";

//Components
import { AsideBottomItems, AsideItem } from ".";

//Constants
import { PATHS } from "@/common/constants";

export const AsideItems = () => {
  //Next
  const pathname = usePathname();

  return (
    <div className="">
      {pathname !== "/" && (
        <AsideItem title="الصفحة الرئيسية" link={PATHS.HOME} />
      )}
      <AsideItem title="الکـتب" link={PATHS.BOOKS} />
      <AsideItem title="صــــور" link={PATHS.IMAGES} />
      <AsideItem title="وثائق" link={PATHS.DOCUMENTS} />
      <AsideItem title="أبحاث ومقالات" link={PATHS.ARTICLES} />
      <AsideItem title="صوتیات" link={PATHS.AUDIOS} />
      <AsideItem title="محاضرات وبرامج" link={PATHS.PLAYLISTS} />
      <AsideItem title="السیره الذاتیه" link={PATHS.BIOGRAPHY} />
      <AsideBottomItems />
    </div>
  );
};
