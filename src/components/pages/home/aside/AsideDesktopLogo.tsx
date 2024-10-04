import Image from "next/image";

//Assets
import desktopMenuLogo from "@/assets/images/svgs/desktop-menu-logo.svg";

export const AsideDesktopLogo = () => {
  return (
    <div className="">
      <Image
        src={desktopMenuLogo}
        alt="Mobile Background Logo"
        className="w-20 xl:w-28"
      />
    </div>
  );
};
