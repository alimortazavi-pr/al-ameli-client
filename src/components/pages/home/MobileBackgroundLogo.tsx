import Image from "next/image";

//Assets
import mobileBackgroundLogo from "@/assets/images/svgs/mobile-background-logo.svg";

export const MobileBackgroundLogo = () => {
  return (
    <Image
      src={mobileBackgroundLogo}
      alt="Mobile Background Logo"
      className="w-14"
    />
  );
};
