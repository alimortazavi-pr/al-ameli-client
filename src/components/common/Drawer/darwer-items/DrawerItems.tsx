//Components
import { DrawerBottomItems, DrawerItem } from ".";

export const DrawerItems = () => {
  return (
    <div className="w-full px-5">
      <DrawerItem title="الکـتب" link="#" />
      <DrawerItem title="صــــور" link="#" />
      <DrawerItem title="وثائق" link="#" />
      <DrawerItem title="مقالات" link="/articles" />
      <DrawerItem title="صوتیات" link="#" />
      <DrawerItem title="محاضرات وبرامج" link="#" />
      <DrawerItem title="السیره الذاتیه" link="#" />
      <DrawerBottomItems />
    </div>
  );
};
