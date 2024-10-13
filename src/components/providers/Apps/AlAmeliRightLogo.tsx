import Image from "next/image";

//Assets
import alAmeliRightLogo from "@/assets/images/svgs/ali-alameli-logo-right.svg";

export const AlAmeliRightLogo = () => {
  return <Image className="hidden lg:block" src={alAmeliRightLogo} alt="Logo" />;
};
