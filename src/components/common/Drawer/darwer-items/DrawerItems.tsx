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
      <DrawerItem title="الکـتب" link={PATHS.BOOKS} />
      <DrawerItem title="صــــور" link={PATHS.IMAGES} />
      <DrawerItem title="وثائق" link={PATHS.DOCUMENTS} />
      <DrawerItem title="أبحاث ومقالات" link={PATHS.ARTICLES} />
      <DrawerItem title="صوتیات" link={PATHS.AUDIOS} />
      <DrawerItem title="محاضرات وبرامج" link={PATHS.PLAYLISTS} />
      <DrawerItem title="السیره الذاتیه" link={PATHS.BIOGRAPHY} />
      <DrawerBottomItems />
    </div>
  );
};
