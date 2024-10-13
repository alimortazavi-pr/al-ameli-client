import Image from "next/image";

//Assets
import alAmeliLeftLogo from "@/assets/images/svgs/ali-alameli-logo-left.svg";

export const AlAmeliLeftLogo = () => {
  return (
    <div className="flex justify-end lg:hidden">
      <Image className="w-[50vw]" src={alAmeliLeftLogo} alt="Logo" />
    </div>
  );
};
