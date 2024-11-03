//Components
import {DrawerBottomItems, DrawerItem} from ".";

//Constants
import {PATHS} from "@/common/constants";

export const DrawerItems = () => {
    return (
        <div className="w-full px-5">
            <DrawerItem title="الکـتب" link="#"/>
            <DrawerItem title="صــــور" link={PATHS.IMAGES}/>
            <DrawerItem title="وثائق" link={PATHS.DOCUMENTS}/>
            <DrawerItem title="مقالات" link={PATHS.ARTICLES}/>
            <DrawerItem title="صوتیات" link="#"/>
            <DrawerItem title="محاضرات وبرامج" link="#"/>
            <DrawerItem title="السیره الذاتیه" link="#"/>
            <DrawerBottomItems/>
        </div>
    );
};
