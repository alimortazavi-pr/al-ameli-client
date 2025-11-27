import Link from "next/link";
import { FC } from "react";
import { usePathname } from "next/navigation";

//Redux
import { useAppDispatch } from "@/lib/hooks";
import { setIsOpenDrawer } from "@/lib/layouts/actions";

interface IProps {
  title: string;
  link: string;
}
export const DrawerItem: FC<IProps> = ({ link, title }) => {
  //Redux
  const dispatch = useAppDispatch()

  //Next
  const pathname = usePathname();

  //Functions
  function onClickHandler() {
    dispatch(setIsOpenDrawer(false));
  }

  return (
    <Link
      href={link}
      className={`${
        pathname.includes(link) && title !== "الصفحة الرئيسية"
          ? "text-primary-500"
          : "text-default-600"
      } font-bold text-2xl hover:text-primary-400 duration-300 rounded-xl p-2 w-full flex`}
      onClick={onClickHandler}
    >
      {title}
    </Link>
  );
};
