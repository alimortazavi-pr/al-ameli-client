import { usePathname } from "next/navigation";

//Components
import { DrawerBottomItems, DrawerItem } from ".";

//Constants
import { PATHS } from "@/common/constants";

export const DrawerItems = () => {
  //Next
  const pathname = usePathname();

  return (
    <div className="w-full px-5">
      {pathname !== "/" && (
        <DrawerItem title="الصفحة الرئيسية" link={PATHS.HOME} />
      )}
      <DrawerItem title="الکــتب" link={PATHS.BOOKS} />
      <DrawerItem title="صــــور" link={PATHS.IMAGES} />
      <DrawerItem title="وثـائــق" link={PATHS.DOCUMENTS} />
      <DrawerItem title="أبـحـاث ومقـالات" link={PATHS.ARTICLES} />
      <DrawerItem title="محاضرات صوتية" link={PATHS.AUDIOS} />
      <DrawerItem title="فيديوهات وبرامج" link={PATHS.PLAYLISTS} />
      <DrawerItem title="السـیـرة الـذاتیــة" link={PATHS.BIOGRAPHY} />
      <DrawerBottomItems />
    </div>
  );
};
