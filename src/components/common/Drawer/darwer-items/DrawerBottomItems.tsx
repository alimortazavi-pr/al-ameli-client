import Link from "next/link";

//Constants
import { PATHS } from "@/common/constants";

export const DrawerBottomItems = () => {
  return (
    <div className="flex items-center gap-2 p-2">
      <Link
        href={PATHS.ABOUT_US}
        className="text-default-500 hover:text-default-700 text-sm"
      >
        حول الموقع
      </Link>
      <span className="w-2 h-2 rounded-full bg-primary"></span>
      <Link
        href={PATHS.CONTACT_US}
        className="text-default-500 hover:text-default-700 text-sm"
      >
        الاتصال بنا
      </Link>
    </div>
  );
};
