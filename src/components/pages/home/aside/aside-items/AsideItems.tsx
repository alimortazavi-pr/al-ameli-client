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
      <AsideItem title="الکــتب" link={PATHS.BOOKS} />
      <AsideItem title="صــــور" link={PATHS.IMAGES} />
      <AsideItem title="وثـائــق" link={PATHS.DOCUMENTS} />
      <AsideItem title="أبـحـاث ومقـالات" link={PATHS.ARTICLES} />
      <AsideItem title="محاضرات صوتية" link={PATHS.AUDIOS} />
      <AsideItem title="فيديوهات وبرامج" link={PATHS.PLAYLISTS} />
      <AsideItem title="السـیـرة الـذاتیــة" link={PATHS.BIOGRAPHY} />
      <AsideBottomItems />
    </div>
  );
};
