import Image from "next/image";

//Assets
import desktopMenuLogo from "@/assets/images/svgs/desktop-menu-logo.svg";

export const AsideDesktopLogo = () => {
  return (
    <div className="absolute -end-[52px] top-0 flex items-center justify-center h-dvh z-10">
      <Image
        src={desktopMenuLogo}
        alt="Mobile Background Logo"
        className="w-28"
      />
    </div>
  );
};
