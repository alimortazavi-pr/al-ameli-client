import Image from "next/image";

//Assets
import mobileMenuLogo from "@/assets/images/svgs/mobile-menu-logo.svg";

export const DrawerMobileLogo = () => {
  return (
    <div className="w-full flex justify-center mb-4">
      <Image
        src={mobileMenuLogo}
        alt="Mobile Background Logo"
        className="w-14"
      />
    </div>
  );
};
