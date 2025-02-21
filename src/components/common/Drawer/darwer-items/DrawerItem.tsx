import Link from "next/link";
import { FC } from "react";
import { usePathname } from "next/navigation";

interface IProps {
  title: string;
  link: string;
}
export const DrawerItem: FC<IProps> = ({ link, title }) => {
  //Next
  const pathname = usePathname();

  return (
    <Link
      href={link}
      className={`${
        pathname.includes(link) ? "text-primary-500" : "text-default-600"
      } font-bold text-2xl hover:text-primary-400 duration-300 rounded-xl p-2 w-full flex`}
    >
      {title}
    </Link>
  );
};
