'use client'

import Link from "next/link";
import { FC } from "react";
import { usePathname } from "next/navigation";

interface IProps {
  title: string;
  link: string;
}
export const AsideItem: FC<IProps> = ({ link, title }) => {
  //Next
  const pathname = usePathname();

  return (
    <Link
      href={link}
      className={`${
        pathname.includes(link) ? "text-default-900" : "text-default-600"
      } font-bold text-2xl hover:text-default-500 duration-300 rounded-xl p-2 w-full flex`}
    >
      {title}
    </Link>
  );
};
