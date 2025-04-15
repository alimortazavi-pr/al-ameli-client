import Link from "next/link";

//Constants
import { PATHS } from "@/common/constants";

export const AsideBottomItems = () => {
  return (
    <div className="flex items-center gap-2 p-2">
      <Link
        href={PATHS.ABOUT_US}
        className="text-default-500 hover:text-default-700 text-base xl:text-lg"
      >
        حول الموقع
      </Link>
      <span className="w-3 h-3 rounded-full bg-primary"></span>
      <Link
        href={PATHS.CONTACT_US}
        className="text-default-500 hover:text-default-700 text-base xl:text-lg"
      >
        الاتصال بنا
      </Link>
    </div>
  );
};
